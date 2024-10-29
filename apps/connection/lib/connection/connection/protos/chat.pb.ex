defmodule Connection.Protos.Chat do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.13.0"

  def descriptor do
    # credo:disable-for-next-line
    %Google.Protobuf.DescriptorProto{
      name: "Chat",
      field: [
        %Google.Protobuf.FieldDescriptorProto{
          name: "connect",
          extendee: nil,
          number: 1,
          label: :LABEL_OPTIONAL,
          type: :TYPE_MESSAGE,
          type_name: ".Connect",
          default_value: nil,
          options: nil,
          oneof_index: nil,
          json_name: "connect",
          proto3_optional: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.FieldDescriptorProto{
          name: "conn_ack",
          extendee: nil,
          number: 2,
          label: :LABEL_OPTIONAL,
          type: :TYPE_MESSAGE,
          type_name: ".ConnAck",
          default_value: nil,
          options: nil,
          oneof_index: nil,
          json_name: "connAck",
          proto3_optional: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.FieldDescriptorProto{
          name: "disconnect",
          extendee: nil,
          number: 3,
          label: :LABEL_OPTIONAL,
          type: :TYPE_MESSAGE,
          type_name: ".Disconnect",
          default_value: nil,
          options: nil,
          oneof_index: nil,
          json_name: "disconnect",
          proto3_optional: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.FieldDescriptorProto{
          name: "disconnect_ack",
          extendee: nil,
          number: 4,
          label: :LABEL_OPTIONAL,
          type: :TYPE_MESSAGE,
          type_name: ".DisconnectAck",
          default_value: nil,
          options: nil,
          oneof_index: nil,
          json_name: "disconnectAck",
          proto3_optional: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.FieldDescriptorProto{
          name: "ping",
          extendee: nil,
          number: 5,
          label: :LABEL_OPTIONAL,
          type: :TYPE_MESSAGE,
          type_name: ".Ping",
          default_value: nil,
          options: nil,
          oneof_index: nil,
          json_name: "ping",
          proto3_optional: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.FieldDescriptorProto{
          name: "pong",
          extendee: nil,
          number: 6,
          label: :LABEL_OPTIONAL,
          type: :TYPE_MESSAGE,
          type_name: ".Pong",
          default_value: nil,
          options: nil,
          oneof_index: nil,
          json_name: "pong",
          proto3_optional: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.FieldDescriptorProto{
          name: "sync",
          extendee: nil,
          number: 7,
          label: :LABEL_OPTIONAL,
          type: :TYPE_MESSAGE,
          type_name: ".Sync",
          default_value: nil,
          options: nil,
          oneof_index: nil,
          json_name: "sync",
          proto3_optional: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.FieldDescriptorProto{
          name: "sync_ack",
          extendee: nil,
          number: 8,
          label: :LABEL_OPTIONAL,
          type: :TYPE_MESSAGE,
          type_name: ".SyncAck",
          default_value: nil,
          options: nil,
          oneof_index: nil,
          json_name: "syncAck",
          proto3_optional: nil,
          __unknown_fields__: []
        }
      ],
      nested_type: [],
      enum_type: [],
      extension_range: [],
      extension: [],
      options: nil,
      oneof_decl: [],
      reserved_range: [],
      reserved_name: [],
      __unknown_fields__: []
    }
  end

  field :connect, 1, type: Connection.Protos.Connect
  field :conn_ack, 2, type: Connection.Protos.ConnAck, json_name: "connAck"
  field :disconnect, 3, type: Connection.Protos.Disconnect
  field :disconnect_ack, 4, type: Connection.Protos.DisconnectAck, json_name: "disconnectAck"
  field :ping, 5, type: Connection.Protos.Ping
  field :pong, 6, type: Connection.Protos.Pong
  field :sync, 7, type: Connection.Protos.Sync
  field :sync_ack, 8, type: Connection.Protos.SyncAck, json_name: "syncAck"

  def transform_module(), do: Connection.Transform
end