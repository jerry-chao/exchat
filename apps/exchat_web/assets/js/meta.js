/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * SyncType enum.
 * @exports SyncType
 * @enum {number}
 * @property {number} SYNC=0 SYNC value
 * @property {number} NOTICE=1 NOTICE value
 * @property {number} UNREAD=2 UNREAD value
 */
$root.SyncType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SYNC"] = 0;
    values[valuesById[1] = "NOTICE"] = 1;
    values[valuesById[2] = "UNREAD"] = 2;
    return values;
})();

$root.Sync = (function() {

    /**
     * Properties of a Sync.
     * @exports ISync
     * @interface ISync
     * @property {number|Long|null} [seq] Sync seq
     * @property {SyncType|null} [type] Sync type
     * @property {string|null} [queue] Sync queue
     * @property {number|Long|null} [key] Sync key
     * @property {boolean|null} [isLast] Sync isLast
     * @property {IResponse|null} [response] Sync response
     * @property {Array.<IMeta>|null} [metas] Sync metas
     * @property {Array.<string>|null} [queues] Sync queues
     */

    /**
     * Constructs a new Sync.
     * @exports Sync
     * @classdesc Represents a Sync.
     * @implements ISync
     * @constructor
     * @param {ISync=} [properties] Properties to set
     */
    function Sync(properties) {
        this.metas = [];
        this.queues = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Sync seq.
     * @member {number|Long} seq
     * @memberof Sync
     * @instance
     */
    Sync.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Sync type.
     * @member {SyncType} type
     * @memberof Sync
     * @instance
     */
    Sync.prototype.type = 0;

    /**
     * Sync queue.
     * @member {string} queue
     * @memberof Sync
     * @instance
     */
    Sync.prototype.queue = "";

    /**
     * Sync key.
     * @member {number|Long} key
     * @memberof Sync
     * @instance
     */
    Sync.prototype.key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Sync isLast.
     * @member {boolean} isLast
     * @memberof Sync
     * @instance
     */
    Sync.prototype.isLast = false;

    /**
     * Sync response.
     * @member {IResponse|null|undefined} response
     * @memberof Sync
     * @instance
     */
    Sync.prototype.response = null;

    /**
     * Sync metas.
     * @member {Array.<IMeta>} metas
     * @memberof Sync
     * @instance
     */
    Sync.prototype.metas = $util.emptyArray;

    /**
     * Sync queues.
     * @member {Array.<string>} queues
     * @memberof Sync
     * @instance
     */
    Sync.prototype.queues = $util.emptyArray;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(Sync.prototype, "_response", {
        get: $util.oneOfGetter($oneOfFields = ["response"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Sync instance using the specified properties.
     * @function create
     * @memberof Sync
     * @static
     * @param {ISync=} [properties] Properties to set
     * @returns {Sync} Sync instance
     */
    Sync.create = function create(properties) {
        return new Sync(properties);
    };

    /**
     * Encodes the specified Sync message. Does not implicitly {@link Sync.verify|verify} messages.
     * @function encode
     * @memberof Sync
     * @static
     * @param {ISync} message Sync message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Sync.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seq);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.queue != null && Object.hasOwnProperty.call(message, "queue"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.queue);
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.key);
        if (message.isLast != null && Object.hasOwnProperty.call(message, "isLast"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isLast);
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.Response.encode(message.response, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.metas != null && message.metas.length)
            for (var i = 0; i < message.metas.length; ++i)
                $root.Meta.encode(message.metas[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.queues != null && message.queues.length)
            for (var i = 0; i < message.queues.length; ++i)
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.queues[i]);
        return writer;
    };

    /**
     * Encodes the specified Sync message, length delimited. Does not implicitly {@link Sync.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Sync
     * @static
     * @param {ISync} message Sync message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Sync.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Sync message from the specified reader or buffer.
     * @function decode
     * @memberof Sync
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Sync} Sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Sync.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Sync();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.seq = reader.int64();
                    break;
                }
            case 2: {
                    message.type = reader.int32();
                    break;
                }
            case 3: {
                    message.queue = reader.string();
                    break;
                }
            case 4: {
                    message.key = reader.int64();
                    break;
                }
            case 5: {
                    message.isLast = reader.bool();
                    break;
                }
            case 6: {
                    message.response = $root.Response.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    if (!(message.metas && message.metas.length))
                        message.metas = [];
                    message.metas.push($root.Meta.decode(reader, reader.uint32()));
                    break;
                }
            case 8: {
                    if (!(message.queues && message.queues.length))
                        message.queues = [];
                    message.queues.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Sync message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Sync
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Sync} Sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Sync.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Sync message.
     * @function verify
     * @memberof Sync
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Sync.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                return "seq: integer|Long expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.queue != null && message.hasOwnProperty("queue"))
            if (!$util.isString(message.queue))
                return "queue: string expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isInteger(message.key) && !(message.key && $util.isInteger(message.key.low) && $util.isInteger(message.key.high)))
                return "key: integer|Long expected";
        if (message.isLast != null && message.hasOwnProperty("isLast"))
            if (typeof message.isLast !== "boolean")
                return "isLast: boolean expected";
        if (message.response != null && message.hasOwnProperty("response")) {
            properties._response = 1;
            {
                var error = $root.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
        }
        if (message.metas != null && message.hasOwnProperty("metas")) {
            if (!Array.isArray(message.metas))
                return "metas: array expected";
            for (var i = 0; i < message.metas.length; ++i) {
                var error = $root.Meta.verify(message.metas[i]);
                if (error)
                    return "metas." + error;
            }
        }
        if (message.queues != null && message.hasOwnProperty("queues")) {
            if (!Array.isArray(message.queues))
                return "queues: array expected";
            for (var i = 0; i < message.queues.length; ++i)
                if (!$util.isString(message.queues[i]))
                    return "queues: string[] expected";
        }
        return null;
    };

    /**
     * Creates a Sync message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Sync
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Sync} Sync
     */
    Sync.fromObject = function fromObject(object) {
        if (object instanceof $root.Sync)
            return object;
        var message = new $root.Sync();
        if (object.seq != null)
            if ($util.Long)
                (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
            else if (typeof object.seq === "string")
                message.seq = parseInt(object.seq, 10);
            else if (typeof object.seq === "number")
                message.seq = object.seq;
            else if (typeof object.seq === "object")
                message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "SYNC":
        case 0:
            message.type = 0;
            break;
        case "NOTICE":
        case 1:
            message.type = 1;
            break;
        case "UNREAD":
        case 2:
            message.type = 2;
            break;
        }
        if (object.queue != null)
            message.queue = String(object.queue);
        if (object.key != null)
            if ($util.Long)
                (message.key = $util.Long.fromValue(object.key)).unsigned = false;
            else if (typeof object.key === "string")
                message.key = parseInt(object.key, 10);
            else if (typeof object.key === "number")
                message.key = object.key;
            else if (typeof object.key === "object")
                message.key = new $util.LongBits(object.key.low >>> 0, object.key.high >>> 0).toNumber();
        if (object.isLast != null)
            message.isLast = Boolean(object.isLast);
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".Sync.response: object expected");
            message.response = $root.Response.fromObject(object.response);
        }
        if (object.metas) {
            if (!Array.isArray(object.metas))
                throw TypeError(".Sync.metas: array expected");
            message.metas = [];
            for (var i = 0; i < object.metas.length; ++i) {
                if (typeof object.metas[i] !== "object")
                    throw TypeError(".Sync.metas: object expected");
                message.metas[i] = $root.Meta.fromObject(object.metas[i]);
            }
        }
        if (object.queues) {
            if (!Array.isArray(object.queues))
                throw TypeError(".Sync.queues: array expected");
            message.queues = [];
            for (var i = 0; i < object.queues.length; ++i)
                message.queues[i] = String(object.queues[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a Sync message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Sync
     * @static
     * @param {Sync} message Sync
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Sync.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.metas = [];
            object.queues = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.seq = options.longs === String ? "0" : 0;
            object.type = options.enums === String ? "SYNC" : 0;
            object.queue = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.key = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.key = options.longs === String ? "0" : 0;
            object.isLast = false;
        }
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (typeof message.seq === "number")
                object.seq = options.longs === String ? String(message.seq) : message.seq;
            else
                object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.SyncType[message.type] === undefined ? message.type : $root.SyncType[message.type] : message.type;
        if (message.queue != null && message.hasOwnProperty("queue"))
            object.queue = message.queue;
        if (message.key != null && message.hasOwnProperty("key"))
            if (typeof message.key === "number")
                object.key = options.longs === String ? String(message.key) : message.key;
            else
                object.key = options.longs === String ? $util.Long.prototype.toString.call(message.key) : options.longs === Number ? new $util.LongBits(message.key.low >>> 0, message.key.high >>> 0).toNumber() : message.key;
        if (message.isLast != null && message.hasOwnProperty("isLast"))
            object.isLast = message.isLast;
        if (message.response != null && message.hasOwnProperty("response")) {
            object.response = $root.Response.toObject(message.response, options);
            if (options.oneofs)
                object._response = "response";
        }
        if (message.metas && message.metas.length) {
            object.metas = [];
            for (var j = 0; j < message.metas.length; ++j)
                object.metas[j] = $root.Meta.toObject(message.metas[j], options);
        }
        if (message.queues && message.queues.length) {
            object.queues = [];
            for (var j = 0; j < message.queues.length; ++j)
                object.queues[j] = message.queues[j];
        }
        return object;
    };

    /**
     * Converts this Sync to JSON.
     * @function toJSON
     * @memberof Sync
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Sync.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Sync
     * @function getTypeUrl
     * @memberof Sync
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Sync.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Sync";
    };

    return Sync;
})();

/**
 * Status enum.
 * @exports Status
 * @enum {number}
 * @property {number} OK=0 OK value
 * @property {number} ERROR=1 ERROR value
 */
$root.Status = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "OK"] = 0;
    values[valuesById[1] = "ERROR"] = 1;
    return values;
})();

/**
 * Code enum.
 * @exports Code
 * @enum {number}
 * @property {number} CODE_OK=0 CODE_OK value
 * @property {number} CODE_QUEUE_IS_EMPTY=1 CODE_QUEUE_IS_EMPTY value
 * @property {number} CODE_SYNC_TOO_QUICK=2 CODE_SYNC_TOO_QUICK value
 */
$root.Code = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CODE_OK"] = 0;
    values[valuesById[1] = "CODE_QUEUE_IS_EMPTY"] = 1;
    values[valuesById[2] = "CODE_SYNC_TOO_QUICK"] = 2;
    return values;
})();

$root.Response = (function() {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {Status|null} [status] Response status
     * @property {Code|null} [code] Response code
     * @property {string|null} [reason] Response reason
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response status.
     * @member {Status} status
     * @memberof Response
     * @instance
     */
    Response.prototype.status = 0;

    /**
     * Response code.
     * @member {Code} code
     * @memberof Response
     * @instance
     */
    Response.prototype.code = 0;

    /**
     * Response reason.
     * @member {string} reason
     * @memberof Response
     * @instance
     */
    Response.prototype.reason = "";

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.reason);
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.int32();
                    break;
                }
            case 2: {
                    message.code = reader.int32();
                    break;
                }
            case 3: {
                    message.reason = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        var message = new $root.Response();
        switch (object.status) {
        default:
            if (typeof object.status === "number") {
                message.status = object.status;
                break;
            }
            break;
        case "OK":
        case 0:
            message.status = 0;
            break;
        case "ERROR":
        case 1:
            message.status = 1;
            break;
        }
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "CODE_OK":
        case 0:
            message.code = 0;
            break;
        case "CODE_QUEUE_IS_EMPTY":
        case 1:
            message.code = 1;
            break;
        case "CODE_SYNC_TOO_QUICK":
        case 2:
            message.code = 2;
            break;
        }
        if (object.reason != null)
            message.reason = String(object.reason);
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = options.enums === String ? "OK" : 0;
            object.code = options.enums === String ? "CODE_OK" : 0;
            object.reason = "";
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.Status[message.status] === undefined ? message.status : $root.Status[message.status] : message.status;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.Code[message.code] === undefined ? message.code : $root.Code[message.code] : message.code;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Response
     * @function getTypeUrl
     * @memberof Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Response";
    };

    return Response;
})();

/**
 * MetaType enum.
 * @exports MetaType
 * @enum {number}
 * @property {number} TYPE_MESSAGE=0 TYPE_MESSAGE value
 * @property {number} TYPE_CONTACT=1 TYPE_CONTACT value
 */
$root.MetaType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TYPE_MESSAGE"] = 0;
    values[valuesById[1] = "TYPE_CONTACT"] = 1;
    return values;
})();

$root.Meta = (function() {

    /**
     * Properties of a Meta.
     * @exports IMeta
     * @interface IMeta
     * @property {number|Long|null} [id] Meta id
     * @property {MetaType|null} [type] Meta type
     * @property {Uint8Array|null} [payload] Meta payload
     * @property {Uint8Array|null} [isStore] Meta isStore
     * @property {Uint8Array|null} [isSyncFrom] Meta isSyncFrom
     */

    /**
     * Constructs a new Meta.
     * @exports Meta
     * @classdesc Represents a Meta.
     * @implements IMeta
     * @constructor
     * @param {IMeta=} [properties] Properties to set
     */
    function Meta(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Meta id.
     * @member {number|Long} id
     * @memberof Meta
     * @instance
     */
    Meta.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Meta type.
     * @member {MetaType} type
     * @memberof Meta
     * @instance
     */
    Meta.prototype.type = 0;

    /**
     * Meta payload.
     * @member {Uint8Array} payload
     * @memberof Meta
     * @instance
     */
    Meta.prototype.payload = $util.newBuffer([]);

    /**
     * Meta isStore.
     * @member {Uint8Array} isStore
     * @memberof Meta
     * @instance
     */
    Meta.prototype.isStore = $util.newBuffer([]);

    /**
     * Meta isSyncFrom.
     * @member {Uint8Array} isSyncFrom
     * @memberof Meta
     * @instance
     */
    Meta.prototype.isSyncFrom = $util.newBuffer([]);

    /**
     * Creates a new Meta instance using the specified properties.
     * @function create
     * @memberof Meta
     * @static
     * @param {IMeta=} [properties] Properties to set
     * @returns {Meta} Meta instance
     */
    Meta.create = function create(properties) {
        return new Meta(properties);
    };

    /**
     * Encodes the specified Meta message. Does not implicitly {@link Meta.verify|verify} messages.
     * @function encode
     * @memberof Meta
     * @static
     * @param {IMeta} message Meta message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Meta.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
        if (message.isStore != null && Object.hasOwnProperty.call(message, "isStore"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.isStore);
        if (message.isSyncFrom != null && Object.hasOwnProperty.call(message, "isSyncFrom"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.isSyncFrom);
        return writer;
    };

    /**
     * Encodes the specified Meta message, length delimited. Does not implicitly {@link Meta.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Meta
     * @static
     * @param {IMeta} message Meta message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Meta.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Meta message from the specified reader or buffer.
     * @function decode
     * @memberof Meta
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Meta} Meta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Meta.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Meta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.type = reader.int32();
                    break;
                }
            case 3: {
                    message.payload = reader.bytes();
                    break;
                }
            case 4: {
                    message.isStore = reader.bytes();
                    break;
                }
            case 5: {
                    message.isSyncFrom = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Meta message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Meta
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Meta} Meta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Meta.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Meta message.
     * @function verify
     * @memberof Meta
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Meta.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.payload != null && message.hasOwnProperty("payload"))
            if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                return "payload: buffer expected";
        if (message.isStore != null && message.hasOwnProperty("isStore"))
            if (!(message.isStore && typeof message.isStore.length === "number" || $util.isString(message.isStore)))
                return "isStore: buffer expected";
        if (message.isSyncFrom != null && message.hasOwnProperty("isSyncFrom"))
            if (!(message.isSyncFrom && typeof message.isSyncFrom.length === "number" || $util.isString(message.isSyncFrom)))
                return "isSyncFrom: buffer expected";
        return null;
    };

    /**
     * Creates a Meta message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Meta
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Meta} Meta
     */
    Meta.fromObject = function fromObject(object) {
        if (object instanceof $root.Meta)
            return object;
        var message = new $root.Meta();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "TYPE_MESSAGE":
        case 0:
            message.type = 0;
            break;
        case "TYPE_CONTACT":
        case 1:
            message.type = 1;
            break;
        }
        if (object.payload != null)
            if (typeof object.payload === "string")
                $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
            else if (object.payload.length >= 0)
                message.payload = object.payload;
        if (object.isStore != null)
            if (typeof object.isStore === "string")
                $util.base64.decode(object.isStore, message.isStore = $util.newBuffer($util.base64.length(object.isStore)), 0);
            else if (object.isStore.length >= 0)
                message.isStore = object.isStore;
        if (object.isSyncFrom != null)
            if (typeof object.isSyncFrom === "string")
                $util.base64.decode(object.isSyncFrom, message.isSyncFrom = $util.newBuffer($util.base64.length(object.isSyncFrom)), 0);
            else if (object.isSyncFrom.length >= 0)
                message.isSyncFrom = object.isSyncFrom;
        return message;
    };

    /**
     * Creates a plain object from a Meta message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Meta
     * @static
     * @param {Meta} message Meta
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Meta.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.type = options.enums === String ? "TYPE_MESSAGE" : 0;
            if (options.bytes === String)
                object.payload = "";
            else {
                object.payload = [];
                if (options.bytes !== Array)
                    object.payload = $util.newBuffer(object.payload);
            }
            if (options.bytes === String)
                object.isStore = "";
            else {
                object.isStore = [];
                if (options.bytes !== Array)
                    object.isStore = $util.newBuffer(object.isStore);
            }
            if (options.bytes === String)
                object.isSyncFrom = "";
            else {
                object.isSyncFrom = [];
                if (options.bytes !== Array)
                    object.isSyncFrom = $util.newBuffer(object.isSyncFrom);
            }
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.MetaType[message.type] === undefined ? message.type : $root.MetaType[message.type] : message.type;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
        if (message.isStore != null && message.hasOwnProperty("isStore"))
            object.isStore = options.bytes === String ? $util.base64.encode(message.isStore, 0, message.isStore.length) : options.bytes === Array ? Array.prototype.slice.call(message.isStore) : message.isStore;
        if (message.isSyncFrom != null && message.hasOwnProperty("isSyncFrom"))
            object.isSyncFrom = options.bytes === String ? $util.base64.encode(message.isSyncFrom, 0, message.isSyncFrom.length) : options.bytes === Array ? Array.prototype.slice.call(message.isSyncFrom) : message.isSyncFrom;
        return object;
    };

    /**
     * Converts this Meta to JSON.
     * @function toJSON
     * @memberof Meta
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Meta.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Meta
     * @function getTypeUrl
     * @memberof Meta
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Meta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Meta";
    };

    return Meta;
})();

module.exports = $root;
