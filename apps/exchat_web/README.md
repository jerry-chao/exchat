# ExchatWeb

## Client

生成js的protobuf的js文件

```bash
pbjs -t static-module -w commonjs -o assets/js/connection.js priv/static/connection.proto

pbjs -t static-module -w commonjs -o assets/js/meta.js priv/static/meta.proto

pbjs -t static-module -w commonjs -o assets/js/message.js priv/static/message.proto
```
