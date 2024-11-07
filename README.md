# Exchat.Umbrella

## 服务release的过程

### Connection服务

#### release的命令如下

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

### connection的Dockerfile镜像文件

```shell

```
