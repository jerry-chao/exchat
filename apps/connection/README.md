# Connection

## Connection to the server

This is an application for define websocket connection server. A client will connect to the server with websocket.

And Send and receive messages from the server.

The Connection will check the user and token is valid or not.

### Generate Elixir Protobuf

```bash
protoc --elixir_opt=package_prefix=protos --elixir_out=gen_descriptors=true,transform_module=Connection.Transform,one_file_per_module=true:lib/connection/ priv/chat.proto
```

### Generate Js Protobuf

```bash
pbjs -t static-module -w commonjs -o priv/js/chat.js priv/chat.proto

pbjs -t static-module -w commonjs -o priv/js/message.js priv/message.proto
```
