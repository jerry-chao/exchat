/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {string|null} [from] Message from
     * @property {string|null} [to] Message to
     * @property {ITextMessage|null} [text] Message text
     * @property {IImgMessage|null} [img] Message img
     * @property {ICustomExt|null} [ext] Message ext
     * @property {IResponse|null} [response] Message response
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message from.
     * @member {string} from
     * @memberof Message
     * @instance
     */
    Message.prototype.from = "";

    /**
     * Message to.
     * @member {string} to
     * @memberof Message
     * @instance
     */
    Message.prototype.to = "";

    /**
     * Message text.
     * @member {ITextMessage|null|undefined} text
     * @memberof Message
     * @instance
     */
    Message.prototype.text = null;

    /**
     * Message img.
     * @member {IImgMessage|null|undefined} img
     * @memberof Message
     * @instance
     */
    Message.prototype.img = null;

    /**
     * Message ext.
     * @member {ICustomExt|null|undefined} ext
     * @memberof Message
     * @instance
     */
    Message.prototype.ext = null;

    /**
     * Message response.
     * @member {IResponse|null|undefined} response
     * @memberof Message
     * @instance
     */
    Message.prototype.response = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(Message.prototype, "_text", {
        get: $util.oneOfGetter($oneOfFields = ["text"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(Message.prototype, "_img", {
        get: $util.oneOfGetter($oneOfFields = ["img"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(Message.prototype, "_ext", {
        get: $util.oneOfGetter($oneOfFields = ["ext"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(Message.prototype, "_response", {
        get: $util.oneOfGetter($oneOfFields = ["response"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.from != null && Object.hasOwnProperty.call(message, "from"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.from);
        if (message.to != null && Object.hasOwnProperty.call(message, "to"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.to);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            $root.TextMessage.encode(message.text, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.img != null && Object.hasOwnProperty.call(message, "img"))
            $root.ImgMessage.encode(message.img, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
            $root.CustomExt.encode(message.ext, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.Response.encode(message.response, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.from = reader.string();
                    break;
                }
            case 2: {
                    message.to = reader.string();
                    break;
                }
            case 3: {
                    message.text = $root.TextMessage.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.img = $root.ImgMessage.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.ext = $root.CustomExt.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.response = $root.Response.decode(reader, reader.uint32());
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
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.from != null && message.hasOwnProperty("from"))
            if (!$util.isString(message.from))
                return "from: string expected";
        if (message.to != null && message.hasOwnProperty("to"))
            if (!$util.isString(message.to))
                return "to: string expected";
        if (message.text != null && message.hasOwnProperty("text")) {
            properties._text = 1;
            {
                var error = $root.TextMessage.verify(message.text);
                if (error)
                    return "text." + error;
            }
        }
        if (message.img != null && message.hasOwnProperty("img")) {
            properties._img = 1;
            {
                var error = $root.ImgMessage.verify(message.img);
                if (error)
                    return "img." + error;
            }
        }
        if (message.ext != null && message.hasOwnProperty("ext")) {
            properties._ext = 1;
            {
                var error = $root.CustomExt.verify(message.ext);
                if (error)
                    return "ext." + error;
            }
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            properties._response = 1;
            {
                var error = $root.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        if (object.from != null)
            message.from = String(object.from);
        if (object.to != null)
            message.to = String(object.to);
        if (object.text != null) {
            if (typeof object.text !== "object")
                throw TypeError(".Message.text: object expected");
            message.text = $root.TextMessage.fromObject(object.text);
        }
        if (object.img != null) {
            if (typeof object.img !== "object")
                throw TypeError(".Message.img: object expected");
            message.img = $root.ImgMessage.fromObject(object.img);
        }
        if (object.ext != null) {
            if (typeof object.ext !== "object")
                throw TypeError(".Message.ext: object expected");
            message.ext = $root.CustomExt.fromObject(object.ext);
        }
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".Message.response: object expected");
            message.response = $root.Response.fromObject(object.response);
        }
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.from = "";
            object.to = "";
        }
        if (message.from != null && message.hasOwnProperty("from"))
            object.from = message.from;
        if (message.to != null && message.hasOwnProperty("to"))
            object.to = message.to;
        if (message.text != null && message.hasOwnProperty("text")) {
            object.text = $root.TextMessage.toObject(message.text, options);
            if (options.oneofs)
                object._text = "text";
        }
        if (message.img != null && message.hasOwnProperty("img")) {
            object.img = $root.ImgMessage.toObject(message.img, options);
            if (options.oneofs)
                object._img = "img";
        }
        if (message.ext != null && message.hasOwnProperty("ext")) {
            object.ext = $root.CustomExt.toObject(message.ext, options);
            if (options.oneofs)
                object._ext = "ext";
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            object.response = $root.Response.toObject(message.response, options);
            if (options.oneofs)
                object._response = "response";
        }
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Message
     * @function getTypeUrl
     * @memberof Message
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Message";
    };

    return Message;
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
 * @property {number} CODE_INVALID_FROM=1 CODE_INVALID_FROM value
 * @property {number} CODE_INVALID_TO=2 CODE_INVALID_TO value
 * @property {number} CODE_INVALID_EMPTY_MSG=3 CODE_INVALID_EMPTY_MSG value
 * @property {number} CODE_NO_PERMISION_IMG=4 CODE_NO_PERMISION_IMG value
 */
$root.Code = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CODE_OK"] = 0;
    values[valuesById[1] = "CODE_INVALID_FROM"] = 1;
    values[valuesById[2] = "CODE_INVALID_TO"] = 2;
    values[valuesById[3] = "CODE_INVALID_EMPTY_MSG"] = 3;
    values[valuesById[4] = "CODE_NO_PERMISION_IMG"] = 4;
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
            case 3:
            case 4:
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
        case "CODE_INVALID_FROM":
        case 1:
            message.code = 1;
            break;
        case "CODE_INVALID_TO":
        case 2:
            message.code = 2;
            break;
        case "CODE_INVALID_EMPTY_MSG":
        case 3:
            message.code = 3;
            break;
        case "CODE_NO_PERMISION_IMG":
        case 4:
            message.code = 4;
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

$root.TextMessage = (function() {

    /**
     * Properties of a TextMessage.
     * @exports ITextMessage
     * @interface ITextMessage
     * @property {string|null} [text] TextMessage text
     */

    /**
     * Constructs a new TextMessage.
     * @exports TextMessage
     * @classdesc Represents a TextMessage.
     * @implements ITextMessage
     * @constructor
     * @param {ITextMessage=} [properties] Properties to set
     */
    function TextMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TextMessage text.
     * @member {string} text
     * @memberof TextMessage
     * @instance
     */
    TextMessage.prototype.text = "";

    /**
     * Creates a new TextMessage instance using the specified properties.
     * @function create
     * @memberof TextMessage
     * @static
     * @param {ITextMessage=} [properties] Properties to set
     * @returns {TextMessage} TextMessage instance
     */
    TextMessage.create = function create(properties) {
        return new TextMessage(properties);
    };

    /**
     * Encodes the specified TextMessage message. Does not implicitly {@link TextMessage.verify|verify} messages.
     * @function encode
     * @memberof TextMessage
     * @static
     * @param {ITextMessage} message TextMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified TextMessage message, length delimited. Does not implicitly {@link TextMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TextMessage
     * @static
     * @param {ITextMessage} message TextMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TextMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TextMessage message from the specified reader or buffer.
     * @function decode
     * @memberof TextMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TextMessage} TextMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TextMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.text = reader.string();
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
     * Decodes a TextMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TextMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TextMessage} TextMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TextMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TextMessage message.
     * @function verify
     * @memberof TextMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TextMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a TextMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TextMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TextMessage} TextMessage
     */
    TextMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.TextMessage)
            return object;
        var message = new $root.TextMessage();
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a TextMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TextMessage
     * @static
     * @param {TextMessage} message TextMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TextMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.text = "";
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this TextMessage to JSON.
     * @function toJSON
     * @memberof TextMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TextMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TextMessage
     * @function getTypeUrl
     * @memberof TextMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TextMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TextMessage";
    };

    return TextMessage;
})();

$root.ImgMessage = (function() {

    /**
     * Properties of an ImgMessage.
     * @exports IImgMessage
     * @interface IImgMessage
     * @property {string|null} [url] ImgMessage url
     * @property {number|null} [height] ImgMessage height
     * @property {number|null} [width] ImgMessage width
     */

    /**
     * Constructs a new ImgMessage.
     * @exports ImgMessage
     * @classdesc Represents an ImgMessage.
     * @implements IImgMessage
     * @constructor
     * @param {IImgMessage=} [properties] Properties to set
     */
    function ImgMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ImgMessage url.
     * @member {string} url
     * @memberof ImgMessage
     * @instance
     */
    ImgMessage.prototype.url = "";

    /**
     * ImgMessage height.
     * @member {number} height
     * @memberof ImgMessage
     * @instance
     */
    ImgMessage.prototype.height = 0;

    /**
     * ImgMessage width.
     * @member {number} width
     * @memberof ImgMessage
     * @instance
     */
    ImgMessage.prototype.width = 0;

    /**
     * Creates a new ImgMessage instance using the specified properties.
     * @function create
     * @memberof ImgMessage
     * @static
     * @param {IImgMessage=} [properties] Properties to set
     * @returns {ImgMessage} ImgMessage instance
     */
    ImgMessage.create = function create(properties) {
        return new ImgMessage(properties);
    };

    /**
     * Encodes the specified ImgMessage message. Does not implicitly {@link ImgMessage.verify|verify} messages.
     * @function encode
     * @memberof ImgMessage
     * @static
     * @param {IImgMessage} message ImgMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImgMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.width);
        return writer;
    };

    /**
     * Encodes the specified ImgMessage message, length delimited. Does not implicitly {@link ImgMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ImgMessage
     * @static
     * @param {IImgMessage} message ImgMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImgMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ImgMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ImgMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ImgMessage} ImgMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImgMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ImgMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.url = reader.string();
                    break;
                }
            case 2: {
                    message.height = reader.int32();
                    break;
                }
            case 3: {
                    message.width = reader.int32();
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
     * Decodes an ImgMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ImgMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ImgMessage} ImgMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImgMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ImgMessage message.
     * @function verify
     * @memberof ImgMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ImgMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (!$util.isInteger(message.width))
                return "width: integer expected";
        return null;
    };

    /**
     * Creates an ImgMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ImgMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ImgMessage} ImgMessage
     */
    ImgMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ImgMessage)
            return object;
        var message = new $root.ImgMessage();
        if (object.url != null)
            message.url = String(object.url);
        if (object.height != null)
            message.height = object.height | 0;
        if (object.width != null)
            message.width = object.width | 0;
        return message;
    };

    /**
     * Creates a plain object from an ImgMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ImgMessage
     * @static
     * @param {ImgMessage} message ImgMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ImgMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.url = "";
            object.height = 0;
            object.width = 0;
        }
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = message.height;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = message.width;
        return object;
    };

    /**
     * Converts this ImgMessage to JSON.
     * @function toJSON
     * @memberof ImgMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ImgMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ImgMessage
     * @function getTypeUrl
     * @memberof ImgMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ImgMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ImgMessage";
    };

    return ImgMessage;
})();

$root.KV = (function() {

    /**
     * Properties of a KV.
     * @exports IKV
     * @interface IKV
     * @property {string|null} [key] KV key
     * @property {string|null} [value] KV value
     */

    /**
     * Constructs a new KV.
     * @exports KV
     * @classdesc Represents a KV.
     * @implements IKV
     * @constructor
     * @param {IKV=} [properties] Properties to set
     */
    function KV(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * KV key.
     * @member {string} key
     * @memberof KV
     * @instance
     */
    KV.prototype.key = "";

    /**
     * KV value.
     * @member {string} value
     * @memberof KV
     * @instance
     */
    KV.prototype.value = "";

    /**
     * Creates a new KV instance using the specified properties.
     * @function create
     * @memberof KV
     * @static
     * @param {IKV=} [properties] Properties to set
     * @returns {KV} KV instance
     */
    KV.create = function create(properties) {
        return new KV(properties);
    };

    /**
     * Encodes the specified KV message. Does not implicitly {@link KV.verify|verify} messages.
     * @function encode
     * @memberof KV
     * @static
     * @param {IKV} message KV message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KV.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified KV message, length delimited. Does not implicitly {@link KV.verify|verify} messages.
     * @function encodeDelimited
     * @memberof KV
     * @static
     * @param {IKV} message KV message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KV.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a KV message from the specified reader or buffer.
     * @function decode
     * @memberof KV
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {KV} KV
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KV.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.KV();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.key = reader.string();
                    break;
                }
            case 2: {
                    message.value = reader.string();
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
     * Decodes a KV message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof KV
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {KV} KV
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KV.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a KV message.
     * @function verify
     * @memberof KV
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    KV.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isString(message.value))
                return "value: string expected";
        return null;
    };

    /**
     * Creates a KV message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof KV
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {KV} KV
     */
    KV.fromObject = function fromObject(object) {
        if (object instanceof $root.KV)
            return object;
        var message = new $root.KV();
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a KV message. Also converts values to other types if specified.
     * @function toObject
     * @memberof KV
     * @static
     * @param {KV} message KV
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    KV.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.key = "";
            object.value = "";
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this KV to JSON.
     * @function toJSON
     * @memberof KV
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    KV.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for KV
     * @function getTypeUrl
     * @memberof KV
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    KV.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/KV";
    };

    return KV;
})();

$root.CustomExt = (function() {

    /**
     * Properties of a CustomExt.
     * @exports ICustomExt
     * @interface ICustomExt
     * @property {Array.<IKV>|null} [kvs] CustomExt kvs
     */

    /**
     * Constructs a new CustomExt.
     * @exports CustomExt
     * @classdesc Represents a CustomExt.
     * @implements ICustomExt
     * @constructor
     * @param {ICustomExt=} [properties] Properties to set
     */
    function CustomExt(properties) {
        this.kvs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CustomExt kvs.
     * @member {Array.<IKV>} kvs
     * @memberof CustomExt
     * @instance
     */
    CustomExt.prototype.kvs = $util.emptyArray;

    /**
     * Creates a new CustomExt instance using the specified properties.
     * @function create
     * @memberof CustomExt
     * @static
     * @param {ICustomExt=} [properties] Properties to set
     * @returns {CustomExt} CustomExt instance
     */
    CustomExt.create = function create(properties) {
        return new CustomExt(properties);
    };

    /**
     * Encodes the specified CustomExt message. Does not implicitly {@link CustomExt.verify|verify} messages.
     * @function encode
     * @memberof CustomExt
     * @static
     * @param {ICustomExt} message CustomExt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CustomExt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.kvs != null && message.kvs.length)
            for (var i = 0; i < message.kvs.length; ++i)
                $root.KV.encode(message.kvs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CustomExt message, length delimited. Does not implicitly {@link CustomExt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CustomExt
     * @static
     * @param {ICustomExt} message CustomExt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CustomExt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CustomExt message from the specified reader or buffer.
     * @function decode
     * @memberof CustomExt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CustomExt} CustomExt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CustomExt.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CustomExt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.kvs && message.kvs.length))
                        message.kvs = [];
                    message.kvs.push($root.KV.decode(reader, reader.uint32()));
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
     * Decodes a CustomExt message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CustomExt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CustomExt} CustomExt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CustomExt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CustomExt message.
     * @function verify
     * @memberof CustomExt
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CustomExt.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.kvs != null && message.hasOwnProperty("kvs")) {
            if (!Array.isArray(message.kvs))
                return "kvs: array expected";
            for (var i = 0; i < message.kvs.length; ++i) {
                var error = $root.KV.verify(message.kvs[i]);
                if (error)
                    return "kvs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CustomExt message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CustomExt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CustomExt} CustomExt
     */
    CustomExt.fromObject = function fromObject(object) {
        if (object instanceof $root.CustomExt)
            return object;
        var message = new $root.CustomExt();
        if (object.kvs) {
            if (!Array.isArray(object.kvs))
                throw TypeError(".CustomExt.kvs: array expected");
            message.kvs = [];
            for (var i = 0; i < object.kvs.length; ++i) {
                if (typeof object.kvs[i] !== "object")
                    throw TypeError(".CustomExt.kvs: object expected");
                message.kvs[i] = $root.KV.fromObject(object.kvs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CustomExt message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CustomExt
     * @static
     * @param {CustomExt} message CustomExt
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CustomExt.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.kvs = [];
        if (message.kvs && message.kvs.length) {
            object.kvs = [];
            for (var j = 0; j < message.kvs.length; ++j)
                object.kvs[j] = $root.KV.toObject(message.kvs[j], options);
        }
        return object;
    };

    /**
     * Converts this CustomExt to JSON.
     * @function toJSON
     * @memberof CustomExt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CustomExt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CustomExt
     * @function getTypeUrl
     * @memberof CustomExt
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CustomExt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CustomExt";
    };

    return CustomExt;
})();

module.exports = $root;
