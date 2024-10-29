# Connection

## Connection to the server

This is an application for define websocket connection server. A client will connect to the server with websocket.

And Send and receive messages from the server.

The Connection will check the user and token is valid or not.

### Generate Elixir Protobuf

```bash
protoc --elixir_opt=package_prefix=connection.protos --elixir_out=gen_descriptors=true,transform_module=Connection.TransformModule,one_file_per_module=true:lib/connection/ proto/*.proto
```
