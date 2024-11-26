defmodule Protos.SyncCode do
  @moduledoc false

  use Protobuf, enum: true, syntax: :proto3, protoc_gen_elixir_version: "0.13.0"

  def descriptor do
    # credo:disable-for-next-line
    %Google.Protobuf.EnumDescriptorProto{
      name: "SyncCode",
      value: [
        %Google.Protobuf.EnumValueDescriptorProto{
          name: "CODE_OK",
          number: 0,
          options: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.EnumValueDescriptorProto{
          name: "CODE_QUEUE_IS_EMPTY",
          number: 1,
          options: nil,
          __unknown_fields__: []
        },
        %Google.Protobuf.EnumValueDescriptorProto{
          name: "CODE_SYNC_TOO_QUICK",
          number: 2,
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
  field :CODE_QUEUE_IS_EMPTY, 1
  field :CODE_SYNC_TOO_QUICK, 2
end