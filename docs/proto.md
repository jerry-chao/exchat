---
title: Chat协议设计
theme: seriph
---

# Chat协议设计

---

## 整体概念

协议设计上分为以下几个层面：
1. 连接层协议
2. 通用消息协议
3. 业务领域协议

<!--
### 文档约定

1. 为了方便描述，我们约定以下几个术语

  - `消息`：指的是通用消息协议中的消息
  - `请求`：指的是领域功能协议中的请求
  - `响应`：指的是领域功能协议中的响应
  - `领域`：指的是特定领域协议中的领域
  - `领域功能`：指的是领域功能协议中的领域功能

2. 协议设计上为了封层的清晰，也为了能够更好的拆分各个分层，不同层级的数据直接使用encode之后的数据。
-->

---

### 连接层协议

- 连接建立，断开
- 心跳保持
- 调度策略
- 重连策略
- 传输层加密

<!--

连接层的协议主要服务保持客户端和服务端的连接，以及连接的建立和断开。

连接的保持，心跳的设计，调度策略，重连策略，数据包的重传，传输层的加密等在该层进行实现。

调度策略可以通过connect的时候进行返回，也可以通过ping/pong的方式进行。

connect的返回里面带有新的调度策略，以及对应的新的服务地址等信息。

心跳的设计，可以通过ping/pong的方式进行，也可以通过sync的方式进行。通常会混合使用，即如果有sync等消息，就不需要ping/pong，如果没有sync等消息，就需要ping/pong。

重连策略也可以通过当前连接的情况进行调整，比较场景的expotion backoff等策略。

本次连接是否采用加密算法也是在连接层进行协商并且完成数据的加解密。
-->

---

### 连接层协议示例

| 字段建     | 长度 | 内容           |
|----------|------|----------------|
| connect/connect_ack | 变长    | 建连以及建连的结果|
| disconnect/disconnect_ack | 变长    | 断开连接的原因|
| ping/pong | 定长    | 心跳包|
| sync/sync_ack | 变长    | 同步数据以及对应的结果|

<!--
1. 字段键（Field Key）

字段键由字段号（field number）和字段类型（wire type）组成。字段键使用 varint 编码。字段键的计算方式如下：

```
key = (field_number << 3) | wire_type
```

- `field_number` 是字段号。
- `wire_type` 是字段的类型，表示数据的编码方式。

常见的 wire type 有：
- 0: Varint（整数）
- 1: 64-bit（固定长度，8 字节）
- 2: Length-delimited（长度前缀的字符串或字节数组）
- 5: 32-bit（固定长度，4 字节）

2. 字段值（Field Value）

字段值根据字段类型进行编码。例如：
- Varint 类型的字段值使用 varint 编码。
- Length-delimited 类型的字段值由长度前缀和实际数据组成。
-->

---

### 建立连接、断开连接

```proto
message Connect {
    string uid = 1;
    string password = 2;
}

message ConnAck {
    bool success = 1;
    string message = 2;
}

message Disconnect {
    string reason = 1;
}

message DisconnectAck {
    bool success = 1;
    string message = 2;
}
```

---

### 心跳保持

```proto
message Ping {
}

message Pong {
}
```

---

### 同步数据

```proto
enum SyncType {
    SYNC_TYPE_MESSAGE = 0;
    SYNC_TYPE_CONTACT = 1;
}

message Sync {
   SyncType type = 1;
   bytes payload = 2;
}

message SyncAck {
    bool success = 1;
    bytes detail = 2;
}
```

---

### 通用消息协议

通用业务数据数据层，主要承载了消息系统的业务逻辑。包括消息的发送，消息的接收，消息的通知，消息的确认。

- 消息的发送和接收都是通过 SYNC 的协议进行投递。
- 消息分为不同形式的投递方式，有些消息是服务端直接推送给客户端，有些消息是先通知客户端有新消息，客户端可以在适当的时机，再通过 SYNC 的方式进行拉取。
- 用户连接到服务器后，首先获取哪些队列存在需要同步的消息，通过发送 UNREAD 到服务端，服务端根据用户的未读消息，返回给客户端需要同步的队列。
- 客户端在收到上述需要同步的队列之后，而后一次对每个队列执行同步动作，直到服务端返回的消息中 is_last 为 true，表示消息已经同步完成。

---

### 通用消息协议示例

```proto
syntax = 'proto3';

enum SyncType {
    SYNC = 0;
    NOTICE = 1;
}

message Sync {
    int64 seq = 1;
    SyncType type = 2;
    string queue = 3;
    int key = 4;
    bool is_last = 5;
    repeated Meta metas = 6;
    optional Response response = 7;
}

enum Status {
    OK = 0;
    ERROR = 1;
}

enum Code {
    CODE_OK = 0;
    CODE_QUEUE_IS_EMPTY = 1;
    CODE_SYNC_TOO_QUICK = 2;
}

message Response {
    Status status = 1;
    Code code = 2;
    string reason = 3;
}

enum MetaType {
    TYPE_MESSAGE = 0;
    TYPE_CONTACT = 1;
}

message Meta {
   int id = 1;
   MetaType type = 2;
   bytes payload = 3;
   bytes is_store = 4;
   bytes is_sync_from = 5;
}
```

---

### 特定领域协议

特定领域主要指 IM 中的各个功能模块，包括不限于消息，联系人，群组，通讯录等。

- 消息模块包括不同种类的消息，主要有文本消息，图片消息，自定义消息，音频消息，视频消息等不同种类的消息。
- 也同样包含消息编辑，消息的修改，消息的扩展（比如 reaction）等功能。

---

### 特定领域协议示例

```proto
syntax = 'proto3';

message Message {
    string from = 1;
    string to = 2;
    optional TextMessage text = 3;
    optional ImgMessage img = 4;
    optional CustomExt ext = 5;
    optional Response response = 6;
}

enum Status {
    OK = 0;
    ERROR = 1;
}

enum Code {
    CODE_OK = 0;
    CODE_INVALID_FROM = 1;
    CODE_INVALID_TO = 2;
    CODE_INVALID_EMPTY_MSG = 3;
    CODE_NO_PERMISION_IMG = 4;
}

message Response {
    Status status = 1;
    Code code = 2;
    string reason = 3;
}

message CustomExt {
    repeated KV kvs = 1;
}
```

---

### 领域功能协议

领域具体功能的协议，更多的是对领域概念进行的细化，上面消息模块中定义了不同类型的消息，而每一种具体的消息类型，都有自己的特定格式。

---

### 领域功能协议示例

```proto
message TextMessage {
    string text = 1;
}

message ImgMessage {
    string url = 1;
    int height = 2;
    int width = 3;
}
```
