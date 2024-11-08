# Exchat.Umbrella

## 服务release的过程

### 服务列表

1. connection即时通讯相关的服务，当前只有一个服务
2. exchat_web提供前端的界面服务，以及websocket的client

### release的命令如下

1.设置环境变量
```shell
export SERVER="connection"
export MIX_ENV="prod"
```

2. 拉取依赖
```shell
mix deps.get
```

3. 编译源码
```shell
mix compile
```

4. 生成发布包
```shell
mix release ${SERVER} --overwrite
```

### 服务的Dockerfile镜像文件

```shell
docker build --build-arg SERVER=connection -t connection:0.1.0 .
```

### 服务通过docker-compose启动

```shell
docker compose -f docker-compose.yml up -d --remove-orphans
```
