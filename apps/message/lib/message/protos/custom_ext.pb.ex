defmodule Protos.CustomExt do
  @moduledoc false

  use Protobuf, syntax: :proto3, protoc_gen_elixir_version: "0.13.0"

  def descriptor do
    # credo:disable-for-next-line
    %Google.Protobuf.DescriptorProto{
      name: "CustomExt",
      field: [
        %Google.Protobuf.FieldDescriptorProto{
          name: "kvs",
          extendee: nil,
          number: 1,
          label: :LABEL_REPEATED,
          type: :TYPE_MESSAGE,
          type_name: ".KV",
          default_value: nil,
          options: nil,
          oneof_index: nil,
          json_name: "kvs",
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

  field :kvs, 1, repeated: true, type: Protos.KV

  def transform_module(), do: Message.Transform
end