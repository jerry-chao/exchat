/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Chat = (function() {

    /**
     * Properties of a Chat.
     * @exports IChat
     * @interface IChat
     * @property {IConnect|null} [connect] Chat connect
     * @property {IConnAck|null} [connAck] Chat connAck
     * @property {IDisconnect|null} [disconnect] Chat disconnect
     * @property {IDisconnectAck|null} [disconnectAck] Chat disconnectAck
     * @property {IPing|null} [ping] Chat ping
     * @property {IPong|null} [pong] Chat pong
     * @property {ISend|null} [send] Chat send
     * @property {ISendAck|null} [sendAck] Chat sendAck
     */

    /**
     * Constructs a new Chat.
     * @exports Chat
     * @classdesc Represents a Chat.
     * @implements IChat
     * @constructor
     * @param {IChat=} [properties] Properties to set
     */
    function Chat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Chat connect.
     * @member {IConnect|null|undefined} connect
     * @memberof Chat
     * @instance
     */
    Chat.prototype.connect = null;

    /**
     * Chat connAck.
     * @member {IConnAck|null|undefined} connAck
     * @memberof Chat
     * @instance
     */
    Chat.prototype.connAck = null;

    /**
     * Chat disconnect.
     * @member {IDisconnect|null|undefined} disconnect
     * @memberof Chat
     * @instance
     */
    Chat.prototype.disconnect = null;

    /**
     * Chat disconnectAck.
     * @member {IDisconnectAck|null|undefined} disconnectAck
     * @memberof Chat
     * @instance
     */
    Chat.prototype.disconnectAck = null;

    /**
     * Chat ping.
     * @member {IPing|null|undefined} ping
     * @memberof Chat
     * @instance
     */
    Chat.prototype.ping = null;

    /**
     * Chat pong.
     * @member {IPong|null|undefined} pong
     * @memberof Chat
     * @instance
     */
    Chat.prototype.pong = null;

    /**
     * Chat send.
     * @member {ISend|null|undefined} send
     * @memberof Chat
     * @instance
     */
    Chat.prototype.send = null;

    /**
     * Chat sendAck.
     * @member {ISendAck|null|undefined} sendAck
     * @memberof Chat
     * @instance
     */
    Chat.prototype.sendAck = null;

    /**
     * Creates a new Chat instance using the specified properties.
     * @function create
     * @memberof Chat
     * @static
     * @param {IChat=} [properties] Properties to set
     * @returns {Chat} Chat instance
     */
    Chat.create = function create(properties) {
        return new Chat(properties);
    };

    /**
     * Encodes the specified Chat message. Does not implicitly {@link Chat.verify|verify} messages.
     * @function encode
     * @memberof Chat
     * @static
     * @param {IChat} message Chat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Chat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.connect != null && Object.hasOwnProperty.call(message, "connect"))
            $root.Connect.encode(message.connect, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.connAck != null && Object.hasOwnProperty.call(message, "connAck"))
            $root.ConnAck.encode(message.connAck, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.disconnect != null && Object.hasOwnProperty.call(message, "disconnect"))
            $root.Disconnect.encode(message.disconnect, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.disconnectAck != null && Object.hasOwnProperty.call(message, "disconnectAck"))
            $root.DisconnectAck.encode(message.disconnectAck, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.ping != null && Object.hasOwnProperty.call(message, "ping"))
            $root.Ping.encode(message.ping, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.pong != null && Object.hasOwnProperty.call(message, "pong"))
            $root.Pong.encode(message.pong, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.send != null && Object.hasOwnProperty.call(message, "send"))
            $root.Send.encode(message.send, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.sendAck != null && Object.hasOwnProperty.call(message, "sendAck"))
            $root.SendAck.encode(message.sendAck, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Chat message, length delimited. Does not implicitly {@link Chat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Chat
     * @static
     * @param {IChat} message Chat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Chat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Chat message from the specified reader or buffer.
     * @function decode
     * @memberof Chat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Chat} Chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Chat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Chat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.connect = $root.Connect.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.connAck = $root.ConnAck.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.disconnect = $root.Disconnect.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.disconnectAck = $root.DisconnectAck.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.ping = $root.Ping.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.pong = $root.Pong.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.send = $root.Send.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.sendAck = $root.SendAck.decode(reader, reader.uint32());
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
     * Decodes a Chat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Chat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Chat} Chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Chat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Chat message.
     * @function verify
     * @memberof Chat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Chat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.connect != null && message.hasOwnProperty("connect")) {
            var error = $root.Connect.verify(message.connect);
            if (error)
                return "connect." + error;
        }
        if (message.connAck != null && message.hasOwnProperty("connAck")) {
            var error = $root.ConnAck.verify(message.connAck);
            if (error)
                return "connAck." + error;
        }
        if (message.disconnect != null && message.hasOwnProperty("disconnect")) {
            var error = $root.Disconnect.verify(message.disconnect);
            if (error)
                return "disconnect." + error;
        }
        if (message.disconnectAck != null && message.hasOwnProperty("disconnectAck")) {
            var error = $root.DisconnectAck.verify(message.disconnectAck);
            if (error)
                return "disconnectAck." + error;
        }
        if (message.ping != null && message.hasOwnProperty("ping")) {
            var error = $root.Ping.verify(message.ping);
            if (error)
                return "ping." + error;
        }
        if (message.pong != null && message.hasOwnProperty("pong")) {
            var error = $root.Pong.verify(message.pong);
            if (error)
                return "pong." + error;
        }
        if (message.send != null && message.hasOwnProperty("send")) {
            var error = $root.Send.verify(message.send);
            if (error)
                return "send." + error;
        }
        if (message.sendAck != null && message.hasOwnProperty("sendAck")) {
            var error = $root.SendAck.verify(message.sendAck);
            if (error)
                return "sendAck." + error;
        }
        return null;
    };

    /**
     * Creates a Chat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Chat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Chat} Chat
     */
    Chat.fromObject = function fromObject(object) {
        if (object instanceof $root.Chat)
            return object;
        var message = new $root.Chat();
        if (object.connect != null) {
            if (typeof object.connect !== "object")
                throw TypeError(".Chat.connect: object expected");
            message.connect = $root.Connect.fromObject(object.connect);
        }
        if (object.connAck != null) {
            if (typeof object.connAck !== "object")
                throw TypeError(".Chat.connAck: object expected");
            message.connAck = $root.ConnAck.fromObject(object.connAck);
        }
        if (object.disconnect != null) {
            if (typeof object.disconnect !== "object")
                throw TypeError(".Chat.disconnect: object expected");
            message.disconnect = $root.Disconnect.fromObject(object.disconnect);
        }
        if (object.disconnectAck != null) {
            if (typeof object.disconnectAck !== "object")
                throw TypeError(".Chat.disconnectAck: object expected");
            message.disconnectAck = $root.DisconnectAck.fromObject(object.disconnectAck);
        }
        if (object.ping != null) {
            if (typeof object.ping !== "object")
                throw TypeError(".Chat.ping: object expected");
            message.ping = $root.Ping.fromObject(object.ping);
        }
        if (object.pong != null) {
            if (typeof object.pong !== "object")
                throw TypeError(".Chat.pong: object expected");
            message.pong = $root.Pong.fromObject(object.pong);
        }
        if (object.send != null) {
            if (typeof object.send !== "object")
                throw TypeError(".Chat.send: object expected");
            message.send = $root.Send.fromObject(object.send);
        }
        if (object.sendAck != null) {
            if (typeof object.sendAck !== "object")
                throw TypeError(".Chat.sendAck: object expected");
            message.sendAck = $root.SendAck.fromObject(object.sendAck);
        }
        return message;
    };

    /**
     * Creates a plain object from a Chat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Chat
     * @static
     * @param {Chat} message Chat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Chat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.connect = null;
            object.connAck = null;
            object.disconnect = null;
            object.disconnectAck = null;
            object.ping = null;
            object.pong = null;
            object.send = null;
            object.sendAck = null;
        }
        if (message.connect != null && message.hasOwnProperty("connect"))
            object.connect = $root.Connect.toObject(message.connect, options);
        if (message.connAck != null && message.hasOwnProperty("connAck"))
            object.connAck = $root.ConnAck.toObject(message.connAck, options);
        if (message.disconnect != null && message.hasOwnProperty("disconnect"))
            object.disconnect = $root.Disconnect.toObject(message.disconnect, options);
        if (message.disconnectAck != null && message.hasOwnProperty("disconnectAck"))
            object.disconnectAck = $root.DisconnectAck.toObject(message.disconnectAck, options);
        if (message.ping != null && message.hasOwnProperty("ping"))
            object.ping = $root.Ping.toObject(message.ping, options);
        if (message.pong != null && message.hasOwnProperty("pong"))
            object.pong = $root.Pong.toObject(message.pong, options);
        if (message.send != null && message.hasOwnProperty("send"))
            object.send = $root.Send.toObject(message.send, options);
        if (message.sendAck != null && message.hasOwnProperty("sendAck"))
            object.sendAck = $root.SendAck.toObject(message.sendAck, options);
        return object;
    };

    /**
     * Converts this Chat to JSON.
     * @function toJSON
     * @memberof Chat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Chat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Chat
     * @function getTypeUrl
     * @memberof Chat
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Chat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Chat";
    };

    return Chat;
})();

$root.Connect = (function() {

    /**
     * Properties of a Connect.
     * @exports IConnect
     * @interface IConnect
     * @property {string|null} [uid] Connect uid
     * @property {string|null} [password] Connect password
     */

    /**
     * Constructs a new Connect.
     * @exports Connect
     * @classdesc Represents a Connect.
     * @implements IConnect
     * @constructor
     * @param {IConnect=} [properties] Properties to set
     */
    function Connect(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Connect uid.
     * @member {string} uid
     * @memberof Connect
     * @instance
     */
    Connect.prototype.uid = "";

    /**
     * Connect password.
     * @member {string} password
     * @memberof Connect
     * @instance
     */
    Connect.prototype.password = "";

    /**
     * Creates a new Connect instance using the specified properties.
     * @function create
     * @memberof Connect
     * @static
     * @param {IConnect=} [properties] Properties to set
     * @returns {Connect} Connect instance
     */
    Connect.create = function create(properties) {
        return new Connect(properties);
    };

    /**
     * Encodes the specified Connect message. Does not implicitly {@link Connect.verify|verify} messages.
     * @function encode
     * @memberof Connect
     * @static
     * @param {IConnect} message Connect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified Connect message, length delimited. Does not implicitly {@link Connect.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Connect
     * @static
     * @param {IConnect} message Connect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Connect message from the specified reader or buffer.
     * @function decode
     * @memberof Connect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Connect} Connect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Connect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Connect();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uid = reader.string();
                    break;
                }
            case 2: {
                    message.password = reader.string();
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
     * Decodes a Connect message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Connect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Connect} Connect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Connect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Connect message.
     * @function verify
     * @memberof Connect
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Connect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isString(message.uid))
                return "uid: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a Connect message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Connect
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Connect} Connect
     */
    Connect.fromObject = function fromObject(object) {
        if (object instanceof $root.Connect)
            return object;
        var message = new $root.Connect();
        if (object.uid != null)
            message.uid = String(object.uid);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a Connect message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Connect
     * @static
     * @param {Connect} message Connect
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Connect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uid = "";
            object.password = "";
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this Connect to JSON.
     * @function toJSON
     * @memberof Connect
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Connect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Connect
     * @function getTypeUrl
     * @memberof Connect
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Connect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Connect";
    };

    return Connect;
})();

$root.ConnAck = (function() {

    /**
     * Properties of a ConnAck.
     * @exports IConnAck
     * @interface IConnAck
     * @property {boolean|null} [success] ConnAck success
     * @property {string|null} [message] ConnAck message
     */

    /**
     * Constructs a new ConnAck.
     * @exports ConnAck
     * @classdesc Represents a ConnAck.
     * @implements IConnAck
     * @constructor
     * @param {IConnAck=} [properties] Properties to set
     */
    function ConnAck(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConnAck success.
     * @member {boolean} success
     * @memberof ConnAck
     * @instance
     */
    ConnAck.prototype.success = false;

    /**
     * ConnAck message.
     * @member {string} message
     * @memberof ConnAck
     * @instance
     */
    ConnAck.prototype.message = "";

    /**
     * Creates a new ConnAck instance using the specified properties.
     * @function create
     * @memberof ConnAck
     * @static
     * @param {IConnAck=} [properties] Properties to set
     * @returns {ConnAck} ConnAck instance
     */
    ConnAck.create = function create(properties) {
        return new ConnAck(properties);
    };

    /**
     * Encodes the specified ConnAck message. Does not implicitly {@link ConnAck.verify|verify} messages.
     * @function encode
     * @memberof ConnAck
     * @static
     * @param {IConnAck} message ConnAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified ConnAck message, length delimited. Does not implicitly {@link ConnAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConnAck
     * @static
     * @param {IConnAck} message ConnAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConnAck message from the specified reader or buffer.
     * @function decode
     * @memberof ConnAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConnAck} ConnAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConnAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.message = reader.string();
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
     * Decodes a ConnAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConnAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConnAck} ConnAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConnAck message.
     * @function verify
     * @memberof ConnAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConnAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a ConnAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConnAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConnAck} ConnAck
     */
    ConnAck.fromObject = function fromObject(object) {
        if (object instanceof $root.ConnAck)
            return object;
        var message = new $root.ConnAck();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a ConnAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConnAck
     * @static
     * @param {ConnAck} message ConnAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConnAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.message = "";
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this ConnAck to JSON.
     * @function toJSON
     * @memberof ConnAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConnAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ConnAck
     * @function getTypeUrl
     * @memberof ConnAck
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ConnAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ConnAck";
    };

    return ConnAck;
})();

$root.Disconnect = (function() {

    /**
     * Properties of a Disconnect.
     * @exports IDisconnect
     * @interface IDisconnect
     * @property {string|null} [reason] Disconnect reason
     */

    /**
     * Constructs a new Disconnect.
     * @exports Disconnect
     * @classdesc Represents a Disconnect.
     * @implements IDisconnect
     * @constructor
     * @param {IDisconnect=} [properties] Properties to set
     */
    function Disconnect(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Disconnect reason.
     * @member {string} reason
     * @memberof Disconnect
     * @instance
     */
    Disconnect.prototype.reason = "";

    /**
     * Creates a new Disconnect instance using the specified properties.
     * @function create
     * @memberof Disconnect
     * @static
     * @param {IDisconnect=} [properties] Properties to set
     * @returns {Disconnect} Disconnect instance
     */
    Disconnect.create = function create(properties) {
        return new Disconnect(properties);
    };

    /**
     * Encodes the specified Disconnect message. Does not implicitly {@link Disconnect.verify|verify} messages.
     * @function encode
     * @memberof Disconnect
     * @static
     * @param {IDisconnect} message Disconnect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Disconnect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
        return writer;
    };

    /**
     * Encodes the specified Disconnect message, length delimited. Does not implicitly {@link Disconnect.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Disconnect
     * @static
     * @param {IDisconnect} message Disconnect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Disconnect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Disconnect message from the specified reader or buffer.
     * @function decode
     * @memberof Disconnect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Disconnect} Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Disconnect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Disconnect();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
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
     * Decodes a Disconnect message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Disconnect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Disconnect} Disconnect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Disconnect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Disconnect message.
     * @function verify
     * @memberof Disconnect
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Disconnect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        return null;
    };

    /**
     * Creates a Disconnect message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Disconnect
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Disconnect} Disconnect
     */
    Disconnect.fromObject = function fromObject(object) {
        if (object instanceof $root.Disconnect)
            return object;
        var message = new $root.Disconnect();
        if (object.reason != null)
            message.reason = String(object.reason);
        return message;
    };

    /**
     * Creates a plain object from a Disconnect message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Disconnect
     * @static
     * @param {Disconnect} message Disconnect
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Disconnect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.reason = "";
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        return object;
    };

    /**
     * Converts this Disconnect to JSON.
     * @function toJSON
     * @memberof Disconnect
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Disconnect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Disconnect
     * @function getTypeUrl
     * @memberof Disconnect
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Disconnect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Disconnect";
    };

    return Disconnect;
})();

$root.DisconnectAck = (function() {

    /**
     * Properties of a DisconnectAck.
     * @exports IDisconnectAck
     * @interface IDisconnectAck
     * @property {boolean|null} [success] DisconnectAck success
     * @property {string|null} [message] DisconnectAck message
     */

    /**
     * Constructs a new DisconnectAck.
     * @exports DisconnectAck
     * @classdesc Represents a DisconnectAck.
     * @implements IDisconnectAck
     * @constructor
     * @param {IDisconnectAck=} [properties] Properties to set
     */
    function DisconnectAck(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DisconnectAck success.
     * @member {boolean} success
     * @memberof DisconnectAck
     * @instance
     */
    DisconnectAck.prototype.success = false;

    /**
     * DisconnectAck message.
     * @member {string} message
     * @memberof DisconnectAck
     * @instance
     */
    DisconnectAck.prototype.message = "";

    /**
     * Creates a new DisconnectAck instance using the specified properties.
     * @function create
     * @memberof DisconnectAck
     * @static
     * @param {IDisconnectAck=} [properties] Properties to set
     * @returns {DisconnectAck} DisconnectAck instance
     */
    DisconnectAck.create = function create(properties) {
        return new DisconnectAck(properties);
    };

    /**
     * Encodes the specified DisconnectAck message. Does not implicitly {@link DisconnectAck.verify|verify} messages.
     * @function encode
     * @memberof DisconnectAck
     * @static
     * @param {IDisconnectAck} message DisconnectAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DisconnectAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified DisconnectAck message, length delimited. Does not implicitly {@link DisconnectAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DisconnectAck
     * @static
     * @param {IDisconnectAck} message DisconnectAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DisconnectAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DisconnectAck message from the specified reader or buffer.
     * @function decode
     * @memberof DisconnectAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DisconnectAck} DisconnectAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DisconnectAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DisconnectAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.message = reader.string();
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
     * Decodes a DisconnectAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DisconnectAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DisconnectAck} DisconnectAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DisconnectAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DisconnectAck message.
     * @function verify
     * @memberof DisconnectAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DisconnectAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a DisconnectAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DisconnectAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DisconnectAck} DisconnectAck
     */
    DisconnectAck.fromObject = function fromObject(object) {
        if (object instanceof $root.DisconnectAck)
            return object;
        var message = new $root.DisconnectAck();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a DisconnectAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DisconnectAck
     * @static
     * @param {DisconnectAck} message DisconnectAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DisconnectAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.message = "";
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this DisconnectAck to JSON.
     * @function toJSON
     * @memberof DisconnectAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DisconnectAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DisconnectAck
     * @function getTypeUrl
     * @memberof DisconnectAck
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DisconnectAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DisconnectAck";
    };

    return DisconnectAck;
})();

$root.Ping = (function() {

    /**
     * Properties of a Ping.
     * @exports IPing
     * @interface IPing
     */

    /**
     * Constructs a new Ping.
     * @exports Ping
     * @classdesc Represents a Ping.
     * @implements IPing
     * @constructor
     * @param {IPing=} [properties] Properties to set
     */
    function Ping(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Ping instance using the specified properties.
     * @function create
     * @memberof Ping
     * @static
     * @param {IPing=} [properties] Properties to set
     * @returns {Ping} Ping instance
     */
    Ping.create = function create(properties) {
        return new Ping(properties);
    };

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @function encode
     * @memberof Ping
     * @static
     * @param {IPing} message Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ping.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Ping
     * @static
     * @param {IPing} message Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ping.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @function decode
     * @memberof Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Ping} Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ping.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ping();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Ping message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Ping} Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ping.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Ping message.
     * @function verify
     * @memberof Ping
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ping.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Ping message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Ping
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Ping} Ping
     */
    Ping.fromObject = function fromObject(object) {
        if (object instanceof $root.Ping)
            return object;
        return new $root.Ping();
    };

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Ping
     * @static
     * @param {Ping} message Ping
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ping.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Ping to JSON.
     * @function toJSON
     * @memberof Ping
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ping.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Ping
     * @function getTypeUrl
     * @memberof Ping
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Ping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Ping";
    };

    return Ping;
})();

$root.Pong = (function() {

    /**
     * Properties of a Pong.
     * @exports IPong
     * @interface IPong
     */

    /**
     * Constructs a new Pong.
     * @exports Pong
     * @classdesc Represents a Pong.
     * @implements IPong
     * @constructor
     * @param {IPong=} [properties] Properties to set
     */
    function Pong(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Pong instance using the specified properties.
     * @function create
     * @memberof Pong
     * @static
     * @param {IPong=} [properties] Properties to set
     * @returns {Pong} Pong instance
     */
    Pong.create = function create(properties) {
        return new Pong(properties);
    };

    /**
     * Encodes the specified Pong message. Does not implicitly {@link Pong.verify|verify} messages.
     * @function encode
     * @memberof Pong
     * @static
     * @param {IPong} message Pong message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pong.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Pong message, length delimited. Does not implicitly {@link Pong.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Pong
     * @static
     * @param {IPong} message Pong message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pong.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Pong message from the specified reader or buffer.
     * @function decode
     * @memberof Pong
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Pong} Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pong.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Pong();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Pong message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Pong
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Pong} Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pong.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Pong message.
     * @function verify
     * @memberof Pong
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Pong.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Pong message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Pong
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Pong} Pong
     */
    Pong.fromObject = function fromObject(object) {
        if (object instanceof $root.Pong)
            return object;
        return new $root.Pong();
    };

    /**
     * Creates a plain object from a Pong message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Pong
     * @static
     * @param {Pong} message Pong
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Pong.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Pong to JSON.
     * @function toJSON
     * @memberof Pong
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Pong.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Pong
     * @function getTypeUrl
     * @memberof Pong
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Pong.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Pong";
    };

    return Pong;
})();

$root.Send = (function() {

    /**
     * Properties of a Send.
     * @exports ISend
     * @interface ISend
     * @property {number|Long|null} [seqId] Send seqId
     * @property {Uint8Array|null} [payload] Send payload
     */

    /**
     * Constructs a new Send.
     * @exports Send
     * @classdesc Represents a Send.
     * @implements ISend
     * @constructor
     * @param {ISend=} [properties] Properties to set
     */
    function Send(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Send seqId.
     * @member {number|Long} seqId
     * @memberof Send
     * @instance
     */
    Send.prototype.seqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Send payload.
     * @member {Uint8Array} payload
     * @memberof Send
     * @instance
     */
    Send.prototype.payload = $util.newBuffer([]);

    /**
     * Creates a new Send instance using the specified properties.
     * @function create
     * @memberof Send
     * @static
     * @param {ISend=} [properties] Properties to set
     * @returns {Send} Send instance
     */
    Send.create = function create(properties) {
        return new Send(properties);
    };

    /**
     * Encodes the specified Send message. Does not implicitly {@link Send.verify|verify} messages.
     * @function encode
     * @memberof Send
     * @static
     * @param {ISend} message Send message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Send.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seqId != null && Object.hasOwnProperty.call(message, "seqId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seqId);
        if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
        return writer;
    };

    /**
     * Encodes the specified Send message, length delimited. Does not implicitly {@link Send.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Send
     * @static
     * @param {ISend} message Send message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Send.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Send message from the specified reader or buffer.
     * @function decode
     * @memberof Send
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Send} Send
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Send.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Send();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.seqId = reader.int64();
                    break;
                }
            case 2: {
                    message.payload = reader.bytes();
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
     * Decodes a Send message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Send
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Send} Send
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Send.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Send message.
     * @function verify
     * @memberof Send
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Send.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seqId != null && message.hasOwnProperty("seqId"))
            if (!$util.isInteger(message.seqId) && !(message.seqId && $util.isInteger(message.seqId.low) && $util.isInteger(message.seqId.high)))
                return "seqId: integer|Long expected";
        if (message.payload != null && message.hasOwnProperty("payload"))
            if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                return "payload: buffer expected";
        return null;
    };

    /**
     * Creates a Send message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Send
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Send} Send
     */
    Send.fromObject = function fromObject(object) {
        if (object instanceof $root.Send)
            return object;
        var message = new $root.Send();
        if (object.seqId != null)
            if ($util.Long)
                (message.seqId = $util.Long.fromValue(object.seqId)).unsigned = false;
            else if (typeof object.seqId === "string")
                message.seqId = parseInt(object.seqId, 10);
            else if (typeof object.seqId === "number")
                message.seqId = object.seqId;
            else if (typeof object.seqId === "object")
                message.seqId = new $util.LongBits(object.seqId.low >>> 0, object.seqId.high >>> 0).toNumber();
        if (object.payload != null)
            if (typeof object.payload === "string")
                $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
            else if (object.payload.length >= 0)
                message.payload = object.payload;
        return message;
    };

    /**
     * Creates a plain object from a Send message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Send
     * @static
     * @param {Send} message Send
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Send.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.seqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.seqId = options.longs === String ? "0" : 0;
            if (options.bytes === String)
                object.payload = "";
            else {
                object.payload = [];
                if (options.bytes !== Array)
                    object.payload = $util.newBuffer(object.payload);
            }
        }
        if (message.seqId != null && message.hasOwnProperty("seqId"))
            if (typeof message.seqId === "number")
                object.seqId = options.longs === String ? String(message.seqId) : message.seqId;
            else
                object.seqId = options.longs === String ? $util.Long.prototype.toString.call(message.seqId) : options.longs === Number ? new $util.LongBits(message.seqId.low >>> 0, message.seqId.high >>> 0).toNumber() : message.seqId;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
        return object;
    };

    /**
     * Converts this Send to JSON.
     * @function toJSON
     * @memberof Send
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Send.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Send
     * @function getTypeUrl
     * @memberof Send
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Send.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Send";
    };

    return Send;
})();

$root.SendAck = (function() {

    /**
     * Properties of a SendAck.
     * @exports ISendAck
     * @interface ISendAck
     * @property {number|Long|null} [seqId] SendAck seqId
     * @property {boolean|null} [success] SendAck success
     * @property {Uint8Array|null} [detail] SendAck detail
     */

    /**
     * Constructs a new SendAck.
     * @exports SendAck
     * @classdesc Represents a SendAck.
     * @implements ISendAck
     * @constructor
     * @param {ISendAck=} [properties] Properties to set
     */
    function SendAck(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendAck seqId.
     * @member {number|Long} seqId
     * @memberof SendAck
     * @instance
     */
    SendAck.prototype.seqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SendAck success.
     * @member {boolean} success
     * @memberof SendAck
     * @instance
     */
    SendAck.prototype.success = false;

    /**
     * SendAck detail.
     * @member {Uint8Array} detail
     * @memberof SendAck
     * @instance
     */
    SendAck.prototype.detail = $util.newBuffer([]);

    /**
     * Creates a new SendAck instance using the specified properties.
     * @function create
     * @memberof SendAck
     * @static
     * @param {ISendAck=} [properties] Properties to set
     * @returns {SendAck} SendAck instance
     */
    SendAck.create = function create(properties) {
        return new SendAck(properties);
    };

    /**
     * Encodes the specified SendAck message. Does not implicitly {@link SendAck.verify|verify} messages.
     * @function encode
     * @memberof SendAck
     * @static
     * @param {ISendAck} message SendAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendAck.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seqId != null && Object.hasOwnProperty.call(message, "seqId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seqId);
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.success);
        if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.detail);
        return writer;
    };

    /**
     * Encodes the specified SendAck message, length delimited. Does not implicitly {@link SendAck.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendAck
     * @static
     * @param {ISendAck} message SendAck message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendAck.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendAck message from the specified reader or buffer.
     * @function decode
     * @memberof SendAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendAck} SendAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendAck.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendAck();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.seqId = reader.int64();
                    break;
                }
            case 2: {
                    message.success = reader.bool();
                    break;
                }
            case 3: {
                    message.detail = reader.bytes();
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
     * Decodes a SendAck message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendAck
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendAck} SendAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendAck.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendAck message.
     * @function verify
     * @memberof SendAck
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendAck.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seqId != null && message.hasOwnProperty("seqId"))
            if (!$util.isInteger(message.seqId) && !(message.seqId && $util.isInteger(message.seqId.low) && $util.isInteger(message.seqId.high)))
                return "seqId: integer|Long expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.detail != null && message.hasOwnProperty("detail"))
            if (!(message.detail && typeof message.detail.length === "number" || $util.isString(message.detail)))
                return "detail: buffer expected";
        return null;
    };

    /**
     * Creates a SendAck message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendAck
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendAck} SendAck
     */
    SendAck.fromObject = function fromObject(object) {
        if (object instanceof $root.SendAck)
            return object;
        var message = new $root.SendAck();
        if (object.seqId != null)
            if ($util.Long)
                (message.seqId = $util.Long.fromValue(object.seqId)).unsigned = false;
            else if (typeof object.seqId === "string")
                message.seqId = parseInt(object.seqId, 10);
            else if (typeof object.seqId === "number")
                message.seqId = object.seqId;
            else if (typeof object.seqId === "object")
                message.seqId = new $util.LongBits(object.seqId.low >>> 0, object.seqId.high >>> 0).toNumber();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.detail != null)
            if (typeof object.detail === "string")
                $util.base64.decode(object.detail, message.detail = $util.newBuffer($util.base64.length(object.detail)), 0);
            else if (object.detail.length >= 0)
                message.detail = object.detail;
        return message;
    };

    /**
     * Creates a plain object from a SendAck message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendAck
     * @static
     * @param {SendAck} message SendAck
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendAck.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.seqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.seqId = options.longs === String ? "0" : 0;
            object.success = false;
            if (options.bytes === String)
                object.detail = "";
            else {
                object.detail = [];
                if (options.bytes !== Array)
                    object.detail = $util.newBuffer(object.detail);
            }
        }
        if (message.seqId != null && message.hasOwnProperty("seqId"))
            if (typeof message.seqId === "number")
                object.seqId = options.longs === String ? String(message.seqId) : message.seqId;
            else
                object.seqId = options.longs === String ? $util.Long.prototype.toString.call(message.seqId) : options.longs === Number ? new $util.LongBits(message.seqId.low >>> 0, message.seqId.high >>> 0).toNumber() : message.seqId;
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.detail != null && message.hasOwnProperty("detail"))
            object.detail = options.bytes === String ? $util.base64.encode(message.detail, 0, message.detail.length) : options.bytes === Array ? Array.prototype.slice.call(message.detail) : message.detail;
        return object;
    };

    /**
     * Converts this SendAck to JSON.
     * @function toJSON
     * @memberof SendAck
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendAck.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SendAck
     * @function getTypeUrl
     * @memberof SendAck
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SendAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SendAck";
    };

    return SendAck;
})();

module.exports = $root;
