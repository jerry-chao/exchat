# Message

## Generate Protobuf from message.proto

```bash
protoc --elixir_opt=package_prefix=protos --elixir_out=gen_descriptors=true,transform_module=Message.Transform,one_file_per_module=true:lib/message/ priv/message.proto
```
