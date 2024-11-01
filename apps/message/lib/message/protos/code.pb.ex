defmodule Protos.Code do
  @moduledoc false

  use Protobuf, enum: true, syntax: :proto3, protoc_gen_elixir_version: "0.13.0"

  def descriptor do
    # credo:disable-for-next-line
    %Google.Protobuf.EnumDescriptorProto{
      name: "Code",
      value: [
        %Google.Protobuf.EnumValueDescriptorProto{
          name: "CODE_OK",
          number: 0,
          options: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.EnumValueDescriptorProto{
          name: "CODE_INVALID_FROM",
          number: 1,
          options: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.EnumValueDescriptorProto{
          name: "CODE_INVALID_TO",
          number: 2,
          options: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.EnumValueDescriptorProto{
          name: "CODE_INVALID_EMPTY_MSG",
          number: 3,
          options: nil,
          __unknown_fields__: []
        }
      ],
      options: nil,
      reserved_range: [],
      reserved_name: [],
      __unknown_fields__: []
    }
  end

  field :CODE_OK, 0
  field :CODE_INVALID_FROM, 1
  field :CODE_INVALID_TO, 2
  field :CODE_INVALID_EMPTY_MSG, 3
end