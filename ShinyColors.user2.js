// ==UserScript==
// @name         샤니마스 한글 패치 임시
// @namespace    https://github.com/newbiepr/shinycolors-trans-kr
// @version      1.11.18
// @description  샤니마스 임시 한글 패치 스크립트
// @icon         https://shinycolors.enza.fun/icon_192x192.png
// @author       Source : biuuu
// @match        https://shinycolors.enza.fun/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @connect      api.interpreter.caiyunai.com
// @connect      translate.google.cn
// @connect      fanyi.baidu.com
// @updateURL    https://newbiepr.gitlab.io/shinymaskr.gitlab.io/ShinyColors.user.js
// ==/UserScript==
(function () {
  'use strict';

  const ENVIRONMENT = "development";
      const DEV = true;
      const SHOW_UPDATE_TEXT = true;
      const COLLECT_CARD_RATE = false;

  const tagText = (text, taged = false) => {
    if (taged && text.startsWith("\u200b")) {
      return text;
    }

    return `\u200b${text}`;
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray_1 = isArray;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var stringTag = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' ||
      (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
  }

  var isString_1 = isString;

  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]';

  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false ||
      (isObjectLike_1(value) && _baseGetTag(value) == boolTag);
  }

  var isBoolean_1 = isBoolean;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /** Built-in value references. */
  var getPrototype = _overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype;

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = _getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject;

  var version = "1.11.18";

  const PREVIEW_COUNT = 5;
  const config = {
    origin: "https://newbiepr.gitlab.io/shinymaskr.gitlab.io",
    hash: "",
    localHash: "",
    version: version,
    story: "normal",
    timeout: 30,
    font1: "yuanti",
    font2: "heiti",
    auto: "off",
    bgm: "off",
    dev: false
  };
  const defaultConfig = Object.assign({}, config);
  const fontList = ["yuanti", "heiti", "yuanti2"];
  const FONT = {
    HEITI_JA: "UDKakugo_SmallPr6-B",
    HEITI_TRANS: `sczh-heiti,UDKakugo_SmallPr6-B`,
    YUAN_JA: "HummingStd-E",
    YUAN_TRANS: `sczh-yuanti,HummingStd-E`
  };
  const _keys = ["origin", "font1", "font2", "timeout", "story", "auto", "bgm", "dev"];
  const keys = DEV ? _keys.slice(1, _keys.length) : _keys;

  const setFont = () => {
    FONT.HEITI_TRANS = `${fontList.includes(config.font2) ? "sczh-" : ""}${config.font2},${FONT.HEITI_JA}`;
    FONT.YUAN_TRANS = `${fontList.includes(config.font1) ? "sczh-" : ""}${config.font1},${FONT.YUAN_JA}`;
  };

  const getLocalConfig = () => {
    const str = localStorage.getItem("sczh:setting");
    let setting = JSON.parse(str);
    if (!isPlainObject_1(setting)) setting = {};
    const {
      origin
    } = setting;

    if (/^https?:\/\//.test(origin)) {
      config.origin = origin.trim();
    }

    keys.forEach(key => {
      let value = setting[key];
      if (isString_1(value)) value = value.trim();

      if (isBoolean_1(value) || value) {
        config[key] = value;
      }
    });
    setFont();

    if (DEV & ENVIRONMENT === "development") {
      config.origin = "https://shinymaskr.work";
    }

    if (DEV) {
      config.dev = true;
    }
  };

  const saveConfig = () => {
    const data = {};
    keys.forEach(key => {
      if (config[key] !== defaultConfig[key]) {
        data[key] = config[key];
      }
    });
    setFont();
    localStorage.setItem("sczh:setting", JSON.stringify(data));
  };

  const getConfigFromHash = () => {
    let str = location.hash;
    str = str.slice(1).replace(/\?tdsourcetag=s_pc(tim|qq)_aiomsg/, "");
    let arr = str.split(";");
    arr.forEach(_str => {
      let _arr = _str.split("=");

      let k = decodeURIComponent(_arr[0].trim());
      let v = _arr[1] ? decodeURIComponent(_arr[1].trim()) : "";

      if (k && keys.includes(k)) {
        if (v) {
          config[k] = v;
        } else {
          config[k] = defaultConfig[k];
        }

        saveConfig();
      }
    });
  };

  const menuCommand = {
    origin: {
      id: 0,
      title: "서버 바꾸기",
      callback: () => {
        if (config.origin === "https://newbiepr.gitlab.io/shinymaskr.gitlab.io") {
          config.origin = "https://shinymaskr.work";
          alert("서버가 " + config.origin + "으로 교체되었습니다\nf5누르고 재접속 부탁드립니다");
        } else {
          config.origin = "https://newbiepr.gitlab.io/shinymaskr.gitlab.io";
          alert("서버가 " + config.origin + "으로 교체되었습니다\nf5누르고 재접속 부탁드립니다");
        }
      }
    },
    story: {
      normal: "커뮤추출 열기",
      edit: "커뮤추출 닫기",
      id: 0,
      callback: () => {
        if (config.story === "normal") {
          config.story = "edit";
        } else {
          const btnClose = document.getElementById("btn-close-sczh");

          if (btnClose) {
            btnClose.click();
          } else {
            config.story = "normal";
          }
        }
      }
    },
    bgm: {
      on: "백그라운드BGM 끄기",
      off: "백그라운드BGM 켜기",
      id: 0,
      callback: () => {
        config.bgm = config.bgm !== "off" ? "off" : "on";
      }
    },
    dev: {
      id: 0,
      titles: ["개발자모드 켜기", "개발자모드 끄기"],
      callback: () => {
        config.dev = !config.dev;
      }
    },
    wiki: {
      id: 0,
      title: "샤니위키",
      callback: () => {
        window.open(`https://shinycolors.info/wiki`);
      }
    },
    update: {
      id: 0,
      title: "업데이트",
      callback: () => {
        window.open(`${config.origin}/ShinyColors.user.js`);
      }
    }
  };

  const menuCommandCb = cb => {
    cb();
    saveConfig();
    setAllGMMenuCommand();
  };

  const setGMMenuCommand = type => {
    const value = config[type];
    const data = menuCommand[type];
    let text = "";

    if (isBoolean_1(value)) {
      let index = value ? 1 : 0;
      text = data.titles[index];
    } else {
      text = data.title || data[value];
    }

    const id = data.id;

    if (id) {
      window.GM_unregisterMenuCommand(id);
    }

    data.id = window.GM_registerMenuCommand(text, () => {
      menuCommandCb(data.callback);
    });
  };

  const setAllGMMenuCommand = () => {
    if (!window.GM_registerMenuCommand || !window.GM_unregisterMenuCommand) return;
    const menuCommandList = ["origin", "update", "bgm", "story", "dev", "wiki"];
    menuCommandList.forEach(type => {
      setGMMenuCommand(type);
    });
  };

  getLocalConfig();
  getConfigFromHash();
  setAllGMMenuCommand();
  window.addEventListener("hashchange", getConfigFromHash);

  const sleep = time => {
    return new Promise(rev => {
      setTimeout(rev, time);
    });
  };

  const trim = str => {
    if (!str) return "";

    let _str = str.replace(/[\u0020]+$/g, "");

    return _str.replace(/^[\u0020]+/g, "");
  };

  const trimWrap = (str, trans = false) => {
    let _str = trim(str).replace(/(\\r)?\\n/g, "\n").replace(/\\r/g, "\n");

    return trans ? _str : _str.replace(/\n{2,}/g, "\n");
  };

  const restoreSpace = str => {
    return str.replace(/\u200b/g, " ");
  };

  const fixWrap = str => {
    return trim(str).replace(/\r/g, "\n").replace(/\n{2,}/g, "\n");
  };

  const pureRE = str => {
    return str.replace(/\?/g, "\\?").replace(/\./g, "\\.").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  };

  const log$1 = (...args) => {
    if (config.dev) {
      console.info(...args);
    }
  };

  const log2 = (...args) => {
    console.info(...args);
  };

  const tryDownload = (content, filename) => {
    const eleLink = document.createElement("a");
    eleLink.download = filename;
    eleLink.style.display = "none";
    const blob = new Blob([content], {
      type: "text/csv"
    });
    eleLink.href = URL.createObjectURL(blob);
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
  };

  const replaceWrap = text => {
    if (isString_1(text)) {
      return text.replace(/\r?\n/g, "\\n").replace(/\r/g, "\\n");
    }

    return text;
  };

  const isNewVersion = (newVer = "0.0.0", oldVer = "0.0.0") => {
    let isNew = false;
    const arr1 = newVer.split(".").map(str => parseInt(str, 10));
    const arr2 = oldVer.split(".").map(str => parseInt(str, 10));

    for (let i = 0; i < arr1.length; i++) {
      let newNum = arr1[i] || 0;
      let oldNum = arr2[i] || 0;
      if (newNum > oldNum) isNew = true;
    }

    return isNew;
  };

  const uniqueStoryId = () => {
    const idMap = new Map();
    return id => {
      if (id && !/^0+$/.test(id) && id !== "select") {
        if (idMap.has(id)) {
          const count = idMap.get(id);
          idMap.set(id, count + 1);
          return `${id}-${count}`;
        } else {
          idMap.set(id, 0);
        }
      }

      return id;
    };
  };

  const makePromise = (callback, ...args) => {
    let result = null;
    let promiseObj = null;
    return async () => {
      if (!promiseObj) {
        promiseObj = callback(...args);
      }

      if (!result) {
        result = await promiseObj;
      }

      return result;
    };
  };

  const autoTransCache = new Map();

  const replaceText = (text, expMap, wordMaps = []) => {
    if (autoTransCache.has(text)) return autoTransCache.get(text);
    let result = text;

    for (let [re, trans] of expMap) {
      result = result.replace(re, (...arr) => {
        let offset = arr[arr.length - 2];
        let str = arr[arr.length - 1];
        let _trans = trans;

        if (offset - 1 >= 0 && (str[offset - 1] == "/" || str[offset - 1] == "\n")) {
          _trans = tagText(_trans);
        }

        for (let i = 1; i < arr.length - 2; i++) {
          let eleKey = arr[i];
          let replaced = false;
          wordMaps.forEach(map => {
            if (map.has(eleKey)) {
              _trans = _trans.replace(`$${i}`, map.get(eleKey));
              replaced = true;
            }
          });

          if (!replaced) {
            _trans = _trans.replace(`$${i}`, arr[i]);
          }
        }

        return _trans;
      });
      re.lastIndex = 0;
    }

    if (text !== result) {
      autoTransCache.set(text, result);
    }

    return result;
  };

  const transText = (str, data) => {
    const {
      expMap,
      wordMaps,
      textMap
    } = data;
    const text = fixWrap(str);
    let _text = text;
    if (!text) return str;

    if (textMap === null || textMap === void 0 ? void 0 : textMap.has(text)) {
      return tagText(textMap.get(text));
    } else {
      _text = replaceText(text, expMap, wordMaps);

      if (text !== _text) {
        return tagText(_text);
      }
    }

    return str;
  };

  const replaceItem = (item, key, data) => {
    if (!item || !isString_1(item[key])) return;
    const str = item[key];
    item[key] = transText(str, data);
  };

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;

  var _ListCache = ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new _ListCache;
    this.size = 0;
  }

  var _stackClear = stackClear;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = _root['__core-js_shared__'];

  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
      objectProto$3 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$2.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }
    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  /* Built-in method references that are verified to be native. */
  var Map$1 = _getNative(_root, 'Map');

  var _Map = Map$1;

  /* Built-in method references that are verified to be native. */
  var nativeCreate = _getNative(Object, 'create');

  var _nativeCreate = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
  }

  var _hashHas = hashHas;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;

  var _Hash = Hash;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash,
      'map': new (_Map || _ListCache),
      'string': new _Hash
    };
  }

  var _mapCacheClear = mapCacheClear;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;

  var _MapCache = MapCache;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof _ListCache) {
      var pairs = data.__data__;
      if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new _MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = _stackClear;
  Stack.prototype['delete'] = _stackDelete;
  Stack.prototype.get = _stackGet;
  Stack.prototype.has = _stackHas;
  Stack.prototype.set = _stackSet;

  var _Stack = Stack;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach;

  var defineProperty = (function() {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty = defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty) {
      _defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$5.call(object, key) && eq_1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
    return isObjectLike_1(value) && hasOwnProperty$6.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isArguments_1 = isArguments;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;

  module.exports = isBuffer;
  });

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }

  var isLength_1 = isLength;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag$1 = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag$1 = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag$1 = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag$1] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike_1(value) &&
      isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  });

  /* Node.js helper references. */
  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

  var isTypedArray_1 = isTypedArray;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$7.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             _isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

    return value === proto;
  }

  var _isPrototype = isPrototype;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = _overArg(Object.keys, Object);

  var _nativeKeys = nativeKeys;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys$1(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
  }

  var keys_1 = keys$1;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && _copyObject(source, keys_1(source), object);
  }

  var _baseAssign = baseAssign;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject_1(object)) {
      return _nativeKeysIn(object);
    }
    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && _copyObject(source, keysIn_1(source), object);
  }

  var _baseAssignIn = baseAssignIn;

  var _cloneBuffer = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
  });

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  var _arrayFilter = arrayFilter;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  var stubArray_1 = stubArray;

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$c.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return _arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable$1.call(object, symbol);
    });
  };

  var _getSymbols = getSymbols;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return _copyObject(source, _getSymbols(source), object);
  }

  var _copySymbols = copySymbols;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  var _arrayPush = arrayPush;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
    var result = [];
    while (object) {
      _arrayPush(result, _getSymbols(object));
      object = _getPrototype(object);
    }
    return result;
  };

  var _getSymbolsIn = getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return _copyObject(source, _getSymbolsIn(source), object);
  }

  var _copySymbolsIn = copySymbolsIn;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return _baseGetAllKeys(object, keys_1, _getSymbols);
  }

  var _getAllKeys = getAllKeys;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn;

  /* Built-in method references that are verified to be native. */
  var DataView = _getNative(_root, 'DataView');

  var _DataView = DataView;

  /* Built-in method references that are verified to be native. */
  var Promise$1 = _getNative(_root, 'Promise');

  var _Promise = Promise$1;

  /* Built-in method references that are verified to be native. */
  var Set = _getNative(_root, 'Set');

  var _Set = Set;

  /* Built-in method references that are verified to be native. */
  var WeakMap = _getNative(_root, 'WeakMap');

  var _WeakMap = WeakMap;

  /** `Object#toString` result references. */
  var mapTag$1 = '[object Map]',
      objectTag$2 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$1 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$1 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = _toSource(_DataView),
      mapCtorString = _toSource(_Map),
      promiseCtorString = _toSource(_Promise),
      setCtorString = _toSource(_Set),
      weakMapCtorString = _toSource(_WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = _baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
      (_Map && getTag(new _Map) != mapTag$1) ||
      (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
      (_Set && getTag(new _Set) != setTag$1) ||
      (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
    getTag = function(value) {
      var result = _baseGetTag(value),
          Ctor = result == objectTag$2 ? value.constructor : undefined,
          ctorString = Ctor ? _toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$1;
          case mapCtorString: return mapTag$1;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$1;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var _getTag = getTag;

  /** Used for built-in method references. */
  var objectProto$d = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$d.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$a.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  var _initCloneArray = initCloneArray;

  /** Built-in value references. */
  var Uint8Array = _root.Uint8Array;

  var _Uint8Array = Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray;

  /** `Object#toString` result references. */
  var boolTag$2 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      mapTag$2 = '[object Map]',
      numberTag$1 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$2 = '[object Set]',
      stringTag$2 = '[object String]',
      symbolTag = '[object Symbol]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$2 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return _cloneArrayBuffer(object);

      case boolTag$2:
      case dateTag$1:
        return new Ctor(+object);

      case dataViewTag$2:
        return _cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return _cloneTypedArray(object, isDeep);

      case mapTag$2:
        return new Ctor;

      case numberTag$1:
      case stringTag$2:
        return new Ctor(object);

      case regexpTag$1:
        return _cloneRegExp(object);

      case setTag$2:
        return new Ctor;

      case symbolTag:
        return _cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject_1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !_isPrototype(object))
      ? _baseCreate(_getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject;

  /** `Object#toString` result references. */
  var mapTag$3 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike_1(value) && _getTag(value) == mapTag$3;
  }

  var _baseIsMap = baseIsMap;

  /* Node.js helper references. */
  var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

  var isMap_1 = isMap;

  /** `Object#toString` result references. */
  var setTag$3 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike_1(value) && _getTag(value) == setTag$3;
  }

  var _baseIsSet = baseIsSet;

  /* Node.js helper references. */
  var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

  var isSet_1 = isSet;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      boolTag$3 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      mapTag$4 = '[object Map]',
      numberTag$2 = '[object Number]',
      objectTag$3 = '[object Object]',
      regexpTag$2 = '[object RegExp]',
      setTag$4 = '[object Set]',
      stringTag$3 = '[object String]',
      symbolTag$1 = '[object Symbol]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
  cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
  cloneableTags[boolTag$3] = cloneableTags[dateTag$2] =
  cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
  cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
  cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
  cloneableTags[numberTag$2] = cloneableTags[objectTag$3] =
  cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
  cloneableTags[stringTag$3] = cloneableTags[symbolTag$1] =
  cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
  cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
  cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
  cloneableTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject_1(value)) {
      return value;
    }
    var isArr = isArray_1(value);
    if (isArr) {
      result = _initCloneArray(value);
      if (!isDeep) {
        return _copyArray(value, result);
      }
    } else {
      var tag = _getTag(value),
          isFunc = tag == funcTag$2 || tag == genTag$1;

      if (isBuffer_1(value)) {
        return _cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$3 || tag == argsTag$2 || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : _initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? _copySymbolsIn(value, _baseAssignIn(result, value))
            : _copySymbols(value, _baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = _initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new _Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet_1(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap_1(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull
      ? (isFlat ? _getAllKeysIn : _getAllKeys)
      : (isFlat ? keysIn_1 : keys_1);

    var props = isArr ? undefined : keysFunc(value);
    _arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_SYMBOLS_FLAG$1 = 4;

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
  }

  var cloneDeep_1 = cloneDeep;

  const logStyles = color => [`background-color:${color};color:#fff;padding:0 0.3em`, "", `color:${color};text-decoration:underline`];

  const requestLog = (method, color, args, data) => {
    if (config.dev) {
      let _data = data;

      if (data) {
        _data = cloneDeep_1(data);
      }

      let options = args[1];
      let optionsToPrint;

      if (options) {
        if (options.headers) {
          optionsToPrint = options;
        } else if (options.params) {
          optionsToPrint = options.params;
        }

        if (options.query) {
          let queries = [];

          for (let key in options.query) {
            let values = options.query[key];

            if (values != null) {
              if (typeof values != "string" && typeof values[Symbol.iterator] === "function") {
                for (let i in values) {
                  queries.push(`${key}=${values[i]}`);
                }
              } else {
                queries.push(`${key}=${values}`);
              }
            }
          }

          args[0] += `?${queries.join("&")}`;
        }
      }

      log$1(`%c${method}%c %c${args[0]}`, ...logStyles(color), optionsToPrint || "", ...(!(data instanceof ArrayBuffer) || data.byteLength != 0 ? ["\n=>", _data] : []));
    }
  };

  const requestRouter = async (data, type, map) => {
    try {
      for (let [key, params] of map) {
        let pass = false;

        if (params.type === "string" && params.key === type) {
          pass = true;
        } else if (params.type === "regexp" && params.key.test(type)) {
          pass = true;
        }

        if (pass) {
          const handles = params.handles;

          for (let handle of handles) {
            await handle(data);
          }
        }
      }
    } catch (e) {
      log$1(e);
    }
  };

  const parseExp = str => {
    const exp = str.replace(/{num}/g, "\\d+").replace(/{uuid}/g, "[a-f\\d]{8}-([a-f\\d]{4}-){3}[a-f\\d]{12}");
    return new RegExp(`^${exp}$`);
  };

  const routerMaps = {
    get: new Map(),
    post: new Map(),
    patch: new Map(),
    put: new Map(),
    delete: new Map()
  };

  const addRouter = (path, handle, map) => {
    if (!map.has(path)) {
      const isRegExp = path.includes("{") || path.includes("(");
      const data = {
        handles: [],
        key: isRegExp ? parseExp(path) : path,
        type: isRegExp ? "regexp" : "string"
      };
      map.set(path, data);
    }

    const data = map.get(path);

    if (Array.isArray(handle)) {
      data.handles = data.handles.concat(handle);
    } else {
      data.handles.push(handle);
    }
  };

  const routerProcess = (paths, handle, map) => {
    if (!Array.isArray(paths)) {
      addRouter(paths, handle, map);
    } else {
      for (let path of paths) {
        addRouter(path, handle, map);
      }
    }
  };

  const routerOf = type => (paths, handle) => {
    const map = routerMaps[type];

    if (!handle) {
      const list = paths;

      for (let [_paths, _handle] of list) {
        routerProcess(_paths, _handle, map);
      }
    } else {
      routerProcess(paths, handle, map);
    }
  };

  const router = {
    get: routerOf("get"),
    post: routerOf("post"),
    patch: routerOf("patch"),
    put: routerOf("put"),
    delete: routerOf("delete")
  };
  const methodColor = {
    GET: "#009688",
    PATCH: "#8BC34A",
    POST: "#3F51B5",
    PUT: "#9C27B0",
    DELETE: "#4C27B0"
  };

  const requestResolver = (method, path, options, resolve) => async (...args) => {
    var _args$, _args$2;

    requestLog(method, methodColor[method], [path, options], (_args$ = args[0]) === null || _args$ === void 0 ? void 0 : _args$.body);
    await requestRouter((_args$2 = args[0]) === null || _args$2 === void 0 ? void 0 : _args$2.body, path, routerMaps[method.toLowerCase()]);
    return resolve(...args);
  };

  const originPush = Array.prototype.push;

  Array.prototype.push = function (...args) {
    var _args$3;

    if (typeof args[0] === "object" && ((_args$3 = args[0]) === null || _args$3 === void 0 ? void 0 : _args$3.method)) {
      const {
        path,
        method,
        options,
        resolve
      } = args[0];
      args[0].resolve = requestResolver(method.toUpperCase(), path, options, resolve);
    }

    return originPush.apply(this, args);
  };

  const {
    origin,
    version: version$1
  } = config;

  const saveManifest = async () => {
    const t = Math.floor(Date.now() / 1000 / 60 / 60 / 6);
    const res = await fetch(`${origin}/manifest.json?t=${t}`);

    if (res.ok) {
      const data = await res.json();
      data.time = Date.now();
      localStorage.setItem("sczh:manifest", JSON.stringify(data));
      return data;
    } else {
      throw new Error(`${res.status} ${res.url}`);
    }
  };

  const getManifest = async () => {
    let data;

    try {
      let str = localStorage.getItem("sczh:manifest");
      if (str) data = JSON.parse(str);
      if (Date.now() - data.time > config.cacheTime * 60 * 1000) data = false;
    } catch (e) {}

    if (!data) {
      data = await saveManifest();
    } else {
      if (isNewVersion(version$1, data.version)) {
        data = await saveManifest();
      } else {
        setTimeout(saveManifest, 5 * 1000);
      }
    }

    return data;
  };

  const request = async pathname => {
    return new Promise((rev, rej) => {
      let timer = setTimeout(() => {
        rej(`불러오기${pathname}시간초과`);
      }, config.timeout * 1000);
      fetch(`${origin}${pathname}`).then(res => {
        clearTimeout(timer);

        if (!res.ok) {
          rej(`${res.status} ${res.url}`);
          return "";
        }

        const type = res.headers.get("content-type");

        if (type === null || type === void 0 ? void 0 : type.includes("json")) {
          return res.json();
        }

        return res.text();
      }).then(rev).catch(rej);
    });
  };

  const getHash = new Promise((rev, rej) => {
    getManifest().then(data => {
      config.newVersion = data.version;
      config.hashes = data.hashes;
      rev(data);
    }).catch(rej);
  });

  const fetchWithHash = async (pathname, hash) => {
    if (!hash) {
      const {
        hashes
      } = await getHash;
      const key = pathname.replace(/^\/(data\/)?/, "");
      hash = hashes[key];
    }

    const data = await request(`${pathname}${hash ? `?v=${hash}` : ""}`);
    return data;
  };

  var papaparse_min = createCommonjsModule(function (module, exports) {
  /* @license
  Papa Parse
  v5.2.0
  https://github.com/mholt/PapaParse
  License: MIT
  */
  !function(e,t){module.exports=t();}(commonjsGlobal,function s(){var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var i=(t=t||{}).dynamicTyping||!1;U(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!U(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var r=function(){if(!b.WORKERS_SUPPORTED)return !1;var e=(i=f.URL||f.webkitURL||null,r=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var i,r;return t.onmessage=_,t.id=h++,a[t.id]=t}();return r.userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=U(t.step),t.chunk=U(t.chunk),t.complete=U(t.complete),t.error=U(t.error),delete t.worker,void r.postMessage({input:e,config:t,workerId:r.id})}var n=null;"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&U(e.read)&&U(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,m=",",v="\r\n",s='"',a=s+s,i=!1,r=null;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns;}void 0!==t.escapeChar&&(a=t.escapeChar+s);}();var o=new RegExp(q(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,i);if("object"==typeof e[0])return u(r||h(e[0]),e,i)}else if("object"==typeof e)return "string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return [];var t=[];for(var i in e)t.push(i);return t}function u(e,t,i){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(r+=m),r+=y(e[a],a);0<t.length&&(r+=v);}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c]);}u=""===d.join("").trim();}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(r+=m);var g=n&&s?e[p]:p;r+=y(t[o][g],p);}o<t.length-1&&(!i||0<h&&!f)&&(r+=v);}}return r}function y(e,t){if(null==e)return "";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=e.toString().replace(o,a),r="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return !0;return !1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(m)||" "===i.charAt(0)||" "===i.charAt(i.length-1);return r?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=w,b.ParserHandle=i,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var i=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return !0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},i)});}),e(),this;function e(){if(0!==h.length){var e,t,i,r,n=h[0];if(U(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,i=n.inputElem,r=s.reason,void(U(o.error)&&o.error({name:e},t,i,r));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config));}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){U(a)&&a(e,n.file,n.inputElem),u();},b.parse(n.file,n.instanceConfig);}else U(o.complete)&&o.complete();}function u(){h.splice(0,1),e();}};}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t;}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&U(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i);}this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e;this._partialLine="";var n=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=r.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(U(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0;}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!U(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0;},this._sendError=function(e){U(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1});};}function l(e){var r;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded();}:function(){this._readChunk();},this.stream=function(e){this._input=e,this._nextChunk();},this._readChunk=function(){if(this._finished)this._chunkLoaded();else {if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),n||(r.onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)),r.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t]);}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+i);}try{r.send(this._config.downloadRequestBody);}catch(e){this._chunkError(e.message);}n&&0===r.status&&this._chunkError();}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:r.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return -1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(r),this.parseChunk(r.responseText)));},this._chunkError=function(e){var t=r.statusText||e;this._sendError(new Error(t));};}function c(e){var r,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((r=new FileReader).onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)):r=new FileReaderSync,this._nextChunk();},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk();},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t);}var i=r.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}});},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result);},this._chunkError=function(){this._sendError(r.error);};}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}};}function g(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause();},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume();},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError);},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0);},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0;},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()));}catch(e){this._streamError(e);}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e);},this),this._streamEnd=y(function(){this._streamCleanUp(),r=!0,this._streamData("");},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError);},this);}function i(m){var a,o,h,r=Math.pow(2,53),n=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,i=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(U(m.step)){var p=m.step;m.step=function(e){if(c=e,_())g();else {if(g(),0===c.data.length)return;i+=e.data.length,m.preview&&i>m.preview?o.abort():(c.data=c.data[0],p(c,t));}};}function v(e){return "greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),m.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return _()&&function(){if(!c)return;function e(e){U(m.transformHeader)&&(e=m.transformHeader(e)),l.push(e);}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1);}else c.data.forEach(e);}(),function(){if(!c||!m.header&&!m.dynamicTyping&&!m.transform)return c;function e(e,t){var i,r=m.header?{}:[];for(i=0;i<e.length;i++){var n=i,s=e[i];m.header&&(n=i>=l.length?"__parsed_extra":l[i]),m.transform&&(s=m.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(r[n]=r[n]||[],r[n].push(s)):r[n]=s;}return m.header&&(i>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+i,f+t):i<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+i,f+t)),r}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);m.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return m.header&&0===l.length}function y(e,t){return i=e,m.dynamicTypingFunction&&void 0===m.dynamicTyping[i]&&(m.dynamicTyping[i]=m.dynamicTypingFunction(i)),!0===(m.dynamicTyping[i]||m.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<r)return !0}return !1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var i;}function k(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),c.errors.push(n);}this.parse=function(e,t,i){var r=m.quoteChar||'"';if(m.newline||(m.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(q(t)+"([^]*?)"+q(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return "\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(e,r)),h=!1,m.delimiter)U(m.delimiter)&&(m.delimiter=m.delimiter(e),c.meta.delimiter=m.delimiter);else {var n=function(e,t,i,r,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new w({comments:r,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(i&&v(p.data[g]))c++;else {var _=p.data[g].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_;}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l);}return {successful:!!(m.delimiter=s),bestDelimiter:s}}(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);n.successful?m.delimiter=n.bestDelimiter:(h=!0,m.delimiter=b.DefaultDelimiter),c.meta.delimiter=m.delimiter;}var s=E(m);return m.preview&&m.header&&s.preview++,a=e,o=new w(s),c=o.parse(a,t,i),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=U(m.chunk)?"":a.substring(o.getCharIndex());},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3);},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,U(m.complete)&&m.complete(c),a="";};}function q(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function w(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,z=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(z=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var M=0,j=!1;this.parse=function(a,t,i){if("string"!=typeof a)throw new Error("Input must be a string");var r=a.length,e=D.length,n=I.length,s=T.length,o=U(A),h=[],u=[],f=[],d=M=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],M+=f.length,c!==l.length-1)M+=I.length;else if(i)return R();if(!T||f.substring(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,M),g=a.indexOf(I,M),_=new RegExp(q(z)+q(O),"g"),m=a.indexOf(O,M);;)if(a[M]!==O)if(T&&0===f.length&&a.substring(M,M+s)===T){if(-1===g)return R();M=g+n,g=a.indexOf(I,M),p=a.indexOf(D,M);}else {if(-1!==p&&(p<g||-1===g)){if(!(p<m)){f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}var v=x(p,m,g);if(v&&void 0!==v.nextDelim){p=v.nextDelim,m=v.quoteSearch,f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}}if(-1===g)break;if(f.push(a.substring(M,g)),C(g+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(m=M,M++;;){if(-1===(m=a.indexOf(O,m+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),E();if(m===r-1)return E(a.substring(M,m).replace(_,O));if(O!==z||a[m+1]!==z){if(O===z||0===m||a[m-1]!==z){-1!==p&&p<m+1&&(p=a.indexOf(D,m+1)),-1!==g&&g<m+1&&(g=a.indexOf(I,m+1));var y=w(-1===g?p:Math.min(p,g));if(a[m+1+y]===D){f.push(a.substring(M,m).replace(_,O)),a[M=m+1+y+e]!==O&&(m=a.indexOf(O,M)),p=a.indexOf(D,M),g=a.indexOf(I,M);break}var k=w(g);if(a.substring(m+1+k,m+1+k+n)===I){if(f.push(a.substring(M,m).replace(_,O)),C(m+1+k+n),p=a.indexOf(D,M),m=a.indexOf(O,M),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),m++;}}else m++;}return E();function b(e){h.push(e),d=M;}function w(e){var t=0;if(-1!==e){var i=a.substring(m+1,e);i&&""===i.trim()&&(t=i.length);}return t}function E(e){return i||(void 0===e&&(e=a.substring(M)),f.push(e),M=r,b(f),o&&S()),R()}function C(e){M=e,b(f),f=[],g=a.indexOf(I,M);}function R(e){return {data:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(t||0)}}}function S(){A(R()),h=[],u=[];}function x(e,t,i){var r={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<i||-1===i)){var s=a.indexOf(D,n);if(-1===s)return r;n<s&&(n=a.indexOf(O,n+1)),r=x(s,n,i);}else r={nextDelim:e,quoteSearch:t};return r}},this.abort=function(){j=!0;},this.getCharIndex=function(){return M};}function _(e){var t=e.data,i=a[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}});},pause:v,resume:v};if(U(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results;}else U(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results);}t.finished&&!r&&m(t.workerId,t.results);}function m(e,t){var i=a[e];U(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e];}function v(){throw new Error("Not implemented.")}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=E(e[i]);return t}function y(e,t){return function(){e.apply(t,arguments);}}function U(e){return "function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var i=b.parse(t.input,t.config);i&&f.postMessage({workerId:b.WORKER_ID,results:i,finished:!0});}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b});
  });

  const parseCsv = str => {
    try {
      return papaparse_min.parse(str.replace(/^\ufeff/, ""), {
        header: true
      }).data;
    } catch (err) {
      console.log(err);
      return {};
    }
  };

  const sortWords = (list, key = "EMPTY") => {
    return list.sort((prev, next) => {
      let valPrev = prev;
      let valNext = next;

      if (key !== "EMPTY") {
        valPrev = prev[key];
        valNext = next[key];
      }

      if (!valNext) valNext = "";
      if (!valPrev) valPrev = "";

      if (valNext.length > valPrev.length) {
        return 1;
      } else if (valPrev.length > valNext.length) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  let data = null;

  const getLocalData = async type => {
    if (ENVIRONMENT === "development") return false;

    if (!data) {
      try {
        const str = localStorage.getItem("sczh:data");
        if (!str) return false;
        data = JSON.parse(str);
      } catch (err) {
        console.error(err);
        return false;
      }
    }

    if (isNewVersion(config.version, data.version)) {
      data = null;
      localStorage.removeItem("sczh:data");
      return false;
    }

    let key = type;

    if (!/(\.csv|\.json)/.test(type)) {
      key = `${type}.csv`;
    }

    const {
      hashes
    } = await getHash;
    const newHash = hashes[key];
    const savedHash = data.hashes[key];

    if (savedHash && savedHash === newHash) {
      return data[type];
    } else {
      data.hashes[key] = newHash;
      return false;
    }
  };

  const setLocalData = (type, value) => {
    if (ENVIRONMENT === "development") return false;
    if (!data || !data.hashes) data = {
      hashes: config.hashes,
      version: config.version
    };
    let key = type;

    if (!/(\.csv|\.json)/.test(type)) {
      key = `${type}.csv`;
    }

    const newHash = config.hashes[key];

    if (newHash) {
      data.hashes[key] = newHash;
    }

    data[type] = value;
    const str = JSON.stringify(data);

    try {
      localStorage.setItem("sczh:data", str);
    } catch (err) {
      console.error(err);
    }
  };

  const listMap = new Map();

  const getList = async (name, path) => {
    const csvPath = path || name;

    if (listMap.has(name)) {
      return listMap.get(name);
    }

    let csv = await getLocalData(name);

    if (!csv) {
      csv = await fetchWithHash(`/data/${csvPath}.csv`);
      setLocalData(name, csv);
    }

    const list = parseCsv(csv);
    listMap.set(name, list);
    return list;
  };

  const commonStore = option => {
    const dataMap = new Map();
    let loaded = false;
    const {
      name,
      path
    } = option;
    const keys = option.keys || {};
    const textKey = keys.text || "text";
    const transKey = keys.trans || "trans";

    const getData = async () => {
      if (!loaded) {
        const list = await getList(name, path);

        if (option.sort) {
          sortWords(list, option.sort);
        }

        list.forEach(item => {
          const text = trimWrap(item[textKey]);
          const trans = restoreSpace(trimWrap(item[transKey], true));

          if (text && trans) {
            dataMap.set(text, trans);
          }
        });
        loaded = true;
      }

      return dataMap;
    };

    return getData;
  };

  const numRE = "([+-＋－]?[0-9０-９]{1,10}\\.?[0-9０-９]{0,4}?)";
  const percentRE = "([+-＋－]?[0-9０-９]{1,10}\\.?[0-9０-９]{0,4}?[%％])";
  const unknownRE = "([\\s\\S]+)";
  const sepRE = "[\\s\\S]?";

  const parseRegExp = (str, list = []) => {
    let result = str.replace(/\./g, "\\.").replace(/\$num/g, numRE).replace(/\$percent/g, percentRE).replace(/\$unknown/g, unknownRE).replace(/\$uk/g, unknownRE).replace(/\$sep/g, sepRE);
    list.forEach(item => {
      result = result.replace(item.re, item.exp);
      item.re.lastIndex = 0;
    });
    return new RegExp(result, "gi");
  };

  const getBaseName = commonStore({
    name: "name",
    keys: {
      text: "name"
    }
  });
  const getBaseIdolName = commonStore({
    name: "etc/idol-name",
    keys: {
      text: "name"
    }
  });
  let idolMap = null;

  const getIdolName = async (full = true) => {
    if (idolMap) return idolMap;
    const map = await getBaseIdolName();
    idolMap = new Map();

    for (let [text, trans] of map) {
      const textArr = text.split(" ");
      const transArr = trans.split(" ");

      if (full) {
        idolMap.set(textArr[1], transArr[1]);
      }

      idolMap.set(textArr.join(""), transArr.join(" "));
      idolMap.set(text, transArr[1]);
    }

    return idolMap;
  };

  let nameMap = null;

  const getName = async () => {
    if (nameMap) return nameMap;
    const baseMap = await getBaseName();
    const idolMap = await getIdolName();
    nameMap = new Map([...baseMap, ...idolMap]);
    return nameMap;
  };

  const brackets = str => {
    return str.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
  };

  const getCommApiData = keyword => {
    let loaded = false;
    let allTextMap = new Map();
    let wordMaps = [];
    let expMap = new Map();
    return async () => {
      if (!loaded) {
        const list = await getList(keyword);
        const idolMap = await getIdolName();
        const wordMap = new Map();
        const textMap = new Map();
        const reMap = new Map();
        const typeTemp = new Map([["name", [...idolMap.keys()]]]);
        const expList = [];
        sortWords(list, "text").forEach(item => {
          if (item === null || item === void 0 ? void 0 : item.text) {
            const text = trimWrap(item.text);
            const trans = restoreSpace(trimWrap(item.trans, true));
            const type = trim(item.type);

            if (text && trans) {
              if (typeof type === "undefined" || type === "text") {
                textMap.set(text, trans);
              } else if (!type || type === "exp") {
                reMap.set(brackets(text), trans);
              } else {
                if (!typeTemp.has(type)) {
                  typeTemp.set(type, []);
                }

                typeTemp.get(type).push(pureRE(text));
                wordMap.set(text, trans);
              }
            }
          }
        });

        for (let [type, arr] of typeTemp) {
          expList.push({
            re: new RegExp(`\\$${type}`, "g"),
            exp: `(${arr.join("|")})`
          });
        }

        for (let [key, value] of reMap) {
          const re = parseRegExp(key, expList);
          expMap.set(re, value);
        }

        allTextMap = new Map([...textMap, ...wordMap, ...idolMap]);
        wordMaps = [wordMap, idolMap];
        loaded = true;
      }

      return {
        expMap,
        wordMaps,
        textMap: allTextMap
      };
    };
  };

  const transApi = (type, ensureMoreData) => {
    let commData = null;
    const getData = getCommApiData(type);
    const ensureData = makePromise(getData);

    const internalCb = callback => {
      return async data => {
        if (!commData) {
          commData = await ensureData();

          if (ensureMoreData) {
            await ensureMoreData();
          }
        }

        if (callback) {
          callback(data);
        }

        return commData;
      };
    };

    const processRouter = list => {
      return list.map(item => {
        const target = item[1];

        if (Array.isArray(target)) {
          item[1] = target.map(func => internalCb(func));
        } else {
          item[1] = internalCb(target);
        }

        return item;
      });
    };

    const transWithPlus = (text, data) => {
      const reMatch = text.match(/(.+?)([＋+]+)$/);
      if (!reMatch) return transText(text, data);
      return transText(reMatch[1], data) + reMatch[2];
    };

    const transWithSlash = (text, data) => {
      const arr = text.split("/");
      return arr.map(txt => {
        return transWithPlus(txt, data);
      }).join("/");
    };

    const transItem = (item, key, data = commData) => {
      if (item === null || item === void 0 ? void 0 : item[key]) {
        let result = transWithPlus(item[key], data);

        if (result !== item[key]) {
          return item[key] = tagText(result, true);
        }

        result = transWithSlash(item[key], data);

        if (result !== item[key]) {
          item[key] = tagText(result, true); //     } else {
          // log(text)
        }
      }
    };

    const getTransItem = callback => (item, key) => {
      callback(item, key, commData);
    };

    return {
      api: {
        get(list) {
          router.get(processRouter(list));
        },

        post(list) {
          router.post(processRouter(list));
        },

        put(list) {
          router.put(processRouter(list));
        },

        patch(list) {
          router.patch(processRouter(list));
        },

        delete(list) {
          router.delete(processRouter(list));
        }

      },
      transItem,
      getTransItem,
      ensureData: internalCb()
    };
  };

  const {
    api,
    transItem
  } = transApi("skill");

  const transEffects = data => {
    var _data$skillEffects, _data$rivalMemoryAppe;

    if (!data) return;
    (_data$skillEffects = data.skillEffects) === null || _data$skillEffects === void 0 ? void 0 : _data$skillEffects.forEach(item => {
      transItem(item, "effectName");
      transItem(item, "effectDescription");
    });
    (_data$rivalMemoryAppe = data.rivalMemoryAppealEffects) === null || _data$rivalMemoryAppe === void 0 ? void 0 : _data$rivalMemoryAppe.forEach(item => {
      transItem(item, "effectName");
      transItem(item, "effectDescription");
    });
  };

  const commSkill = (data, transEffect = false) => {
    if (!data) return;
    transItem(data, "comment");
    transItem(data, "name");

    if (transEffect) {
      transEffects(data);
    }

    if (data.linkSkill) {
      transItem(data.linkSkill, "comment");
      transItem(data.linkSkill, "name");

      if (transEffect) {
        transEffects(data.linkSkill);
      }
    }

    if (data.plusSkill) {
      transItem(data.plusSkill, "comment");
      transItem(data.plusSkill, "name");
    }
  };

  const skillPanel = data => {
    if (!data) return;
    data.forEach(item => {
      transItem(item, "releaseConditions");
      transItem(item.passiveSkills, "comment");
      transItem(item.passiveSkills, "name");
      commSkill(item.skill);
      commSkill(item.concertActiveSkill);

      if (item.activeSkills) {
        item.activeSkills.forEach(skill => {
          commSkill(skill);
        });
      }
    });
  };

  const memoryAppeal = data => {
    data.forEach(item => {
      commSkill(item);
    });
  };

  const abilities = data => {
    data.forEach(item => {
      commSkill(item);
    });
  };

  const shortProIdol = (data, panel = false) => {
    var _proIdol$activeSkills, _proIdol$passiveSkill, _proIdol$limitBreaks;

    let proIdol = data.userProduceIdol;
    if (!proIdol) return;
    (_proIdol$activeSkills = proIdol.activeSkills) === null || _proIdol$activeSkills === void 0 ? void 0 : _proIdol$activeSkills.forEach(item => {
      commSkill(item);
    });
    (_proIdol$passiveSkill = proIdol.passiveSkills) === null || _proIdol$passiveSkill === void 0 ? void 0 : _proIdol$passiveSkill.forEach(item => {
      commSkill(item);
    });
    (_proIdol$limitBreaks = proIdol.limitBreaks) === null || _proIdol$limitBreaks === void 0 ? void 0 : _proIdol$limitBreaks.forEach(item => {
      commSkill(item);
    });

    if (panel) {
      skillPanel(proIdol.skillPanels);
    }
  };

  const judegsSkill = data => {
    data.forEach(judge => {
      commSkill(judge.skill, true);
    });
  };

  const fesRivalsSkill = data => {
    if (!data) return;
    data.forEach(rival => {
      var _rival$userFesDeck, _rival$userRaidDeck, _rival$rival;

      (_rival$userFesDeck = rival.userFesDeck) === null || _rival$userFesDeck === void 0 ? void 0 : _rival$userFesDeck.userFesDeckMembers.forEach(member => {
        member.userFesIdol.activeSkills.forEach(skill => {
          transEffects(skill);
        });
      });
      (_rival$userRaidDeck = rival.userRaidDeck) === null || _rival$userRaidDeck === void 0 ? void 0 : _rival$userRaidDeck.userRaidDeckMembers.forEach(member => {
        member.userFesIdol.activeSkills.forEach(skill => {
          commSkill(skill, true);
        });
      });
      (_rival$rival = rival.rival) === null || _rival$rival === void 0 ? void 0 : _rival$rival.rivalSkills.forEach(skill => {
        transEffects(skill);
      });
    });
  };

  const audRivalsSkill = data => {
    data.forEach(rival => {
      transEffects(rival.rivalMemoryAppeal);
      rival.rivalSkills.forEach(skill => {
        transEffects(skill);
      });
    });
  }; // ==================================================
  // request entry


  const userIdolsSkill = data => {
    skillPanel(data.idol.skillPanels);
    memoryAppeal(data.idol.memoryAppeals);
    abilities(data.idol.abilities);
  };

  const userProIdolsSkill = data => {
    data.activeSkills.forEach(item => {
      commSkill(item);
    });
    memoryAppeal(data.userIdol.idol.memoryAppeals);
  };

  const reserveUserIdolsSkill = data => {
    skillPanel(data.idol.skillPanels);
    memoryAppeal(data.idol.memoryAppeals);
  };

  const userSptIdolsSkill = data => {
    var _data$supportIdol, _data$supportIdol$sup, _data$supportIdol$sup2;

    skillPanel(data.supportIdol.skillPanels);
    (_data$supportIdol = data.supportIdol) === null || _data$supportIdol === void 0 ? void 0 : (_data$supportIdol$sup = _data$supportIdol.supportIdolActiveSkill) === null || _data$supportIdol$sup === void 0 ? void 0 : (_data$supportIdol$sup2 = _data$supportIdol$sup.activeSkills) === null || _data$supportIdol$sup2 === void 0 ? void 0 : _data$supportIdol$sup2.forEach(item => {
      transItem(item, "comment");
      transItem(item, "name");
    });
  };

  const userProSptIdolsSkill = data => {
    var _data$userSupportIdol, _data$userSupportIdol2, _data$userSupportIdol3, _data$userSupportIdol4;

    skillPanel(data.skillPanels);
    (_data$userSupportIdol = data.userSupportIdol) === null || _data$userSupportIdol === void 0 ? void 0 : (_data$userSupportIdol2 = _data$userSupportIdol.supportIdol) === null || _data$userSupportIdol2 === void 0 ? void 0 : (_data$userSupportIdol3 = _data$userSupportIdol2.supportIdolActiveSkill) === null || _data$userSupportIdol3 === void 0 ? void 0 : (_data$userSupportIdol4 = _data$userSupportIdol3.activeSkills) === null || _data$userSupportIdol4 === void 0 ? void 0 : _data$userSupportIdol4.forEach(item => {
      transItem(item, "comment");
      transItem(item, "name");
    });
  };

  const reserveUserSptIdolsSkill = data => {
    var _data$supportIdol2, _data$supportIdol2$su, _data$supportIdol2$su2;

    skillPanel(data.supportIdol.skillPanels);
    (_data$supportIdol2 = data.supportIdol) === null || _data$supportIdol2 === void 0 ? void 0 : (_data$supportIdol2$su = _data$supportIdol2.supportIdolActiveSkill) === null || _data$supportIdol2$su === void 0 ? void 0 : (_data$supportIdol2$su2 = _data$supportIdol2$su.activeSkills) === null || _data$supportIdol2$su2 === void 0 ? void 0 : _data$supportIdol2$su2.forEach(item => {
      transItem(item, "comment");
      transItem(item, "name");
    });
  };

  const userFesIdolsSkill = data => {
    const fesIdol = data.userFesIdol;
    fesIdol.activeSkills.forEach(item => {
      commSkill(item);
    });
    commSkill(fesIdol.memoryAppeal);
    fesIdol.passiveSkills.forEach(item => {
      transItem(item, "comment");
      transItem(item, "name");
    });
  };

  const otherFesIdolSkill = userFesIdolsSkill;

  const userRaidDeck = data => {
    data.userRaidDecks.forEach(deck => {
      deck.userRaidDeckMembers.forEach(member => {
        var _member$userFesIdol;

        (_member$userFesIdol = member.userFesIdol) === null || _member$userFesIdol === void 0 ? void 0 : _member$userFesIdol.activeSkills.forEach(item => {
          commSkill(item);
        });
      });
    });
  };

  const proSkillPanels = data => {
    var _data$userProduceLimi, _data$userProduceIdol, _data$userProduceIdol2, _data$userProduceIdol3;

    data.userProduceSupportIdols.forEach(item => {
      skillPanel(item.skillPanels);
    });
    shortProIdol(data, true);
    (_data$userProduceLimi = data.userProduceLimitedSkills) === null || _data$userProduceLimi === void 0 ? void 0 : _data$userProduceLimi.forEach(item => {
      commSkill(item.passiveSkills);
      commSkill(item.skill);
    });
    skillPanel((_data$userProduceIdol = data.userProduceIdol) === null || _data$userProduceIdol === void 0 ? void 0 : (_data$userProduceIdol2 = _data$userProduceIdol.userIdol) === null || _data$userProduceIdol2 === void 0 ? void 0 : (_data$userProduceIdol3 = _data$userProduceIdol2.idol) === null || _data$userProduceIdol3 === void 0 ? void 0 : _data$userProduceIdol3.skillPanels);
  };

  const readySkillPanels = data => {
    var _data$userIdol, _data$userIdol2, _data$userIdol2$idol;

    data.userSupportIdols.forEach(item => {
      skillPanel(item.skillPanels);
    });
    skillPanel((_data$userIdol = data.userIdol) === null || _data$userIdol === void 0 ? void 0 : _data$userIdol.skillPanels);
    skillPanel((_data$userIdol2 = data.userIdol) === null || _data$userIdol2 === void 0 ? void 0 : (_data$userIdol2$idol = _data$userIdol2.idol) === null || _data$userIdol2$idol === void 0 ? void 0 : _data$userIdol2$idol.skillPanels);
  };

  const produceFinish = data => {
    if (data.gameData) return;
    shortProIdol(data);
  };

  const transDeckMember = member => {
    var _member$userFesIdol$p;

    if (!member.userFesIdol) return;
    member.userFesIdol.activeSkills.forEach(item => {
      commSkill(item, true);
    });
    commSkill(member.userFesIdol.memoryAppeal, true);
    (_member$userFesIdol$p = member.userFesIdol.passiveSkills) === null || _member$userFesIdol$p === void 0 ? void 0 : _member$userFesIdol$p.forEach(item => {
      transItem(item, "comment");
      transItem(item, "name");
      transEffects(item);
    });
  };

  const fesMatchConcertSkill = data => {
    var _data$userFesDeck, _data$userRaidDeck, _data$userFesEventDec;

    (_data$userFesDeck = data.userFesDeck) === null || _data$userFesDeck === void 0 ? void 0 : _data$userFesDeck.userFesDeckMembers.forEach(transDeckMember);
    (_data$userRaidDeck = data.userRaidDeck) === null || _data$userRaidDeck === void 0 ? void 0 : _data$userRaidDeck.userRaidDeckMembers.forEach(transDeckMember);
    (_data$userFesEventDec = data.userFesEventDeck) === null || _data$userFesEventDec === void 0 ? void 0 : _data$userFesEventDec.userFesEventDeckMembers.forEach(transDeckMember);
    judegsSkill(data.judges);
    fesRivalsSkill(data.userFesRivals);
    fesRivalsSkill(data.userFesRaidRivals);
    transEffects(data.feverActiveSkill);
  };

  const auditionSkill = data => {
    var _data$fanActiveSkills;

    (_data$fanActiveSkills = data.fanActiveSkills) === null || _data$fanActiveSkills === void 0 ? void 0 : _data$fanActiveSkills.forEach(item => {
      commSkill(item, true);
    });
    data.userProduceSupportIdols.forEach(item => {
      commSkill(item.activeSkill, true);
    });
    let proIdol = data.userProduceIdol;
    proIdol.activeSkills.forEach(skill => {
      commSkill(skill, true);
    });
    commSkill(proIdol.memoryAppeal, true);
    proIdol.passiveSkills.forEach(skill => {
      commSkill(skill, true);
    });
    let audition = data.produceAudition || data.produceConcert;
    judegsSkill(audition.judges);
    audRivalsSkill(audition.rivals);
    transEffects(data.feverActiveSkill);
  };

  const resumeGameSkill = data => {
    if (!data.gameData) return;

    try {
      let gData = JSON.parse(data.gameData);

      if (gData.produceAudition || gData.produceConcert) {
        auditionSkill(gData);
      } else if (gData.userFesDeck || gData.userRaidDeck) {
        fesMatchConcertSkill(gData);
      }

      data.gameData = JSON.stringify(gData);
    } catch (e) {
      log(e);
    }
  };

  const resumeRaidGameSkill = data => {
    if (!data.gameState || !data.gameState.game_data) return;

    try {
      let gData = JSON.parse(data.gameState.game_data);

      if (gData.userRaidDeck) {
        fesMatchConcertSkill(gData);
      }

      data.gameState.game_data = JSON.stringify(gData);
    } catch (e) {
      log(e);
    }
  };

  const resumeFesEventGameSkill = data => {
    if (!data.gameState || !data.gameState.game_data) return;

    try {
      let gData = JSON.parse(data.gameState.game_data);

      if (gData.userFesEventDeck) {
        fesMatchConcertSkill(gData);
      }

      data.gameState.game_data = JSON.stringify(gData);
    } catch (e) {
      log(e);
    }
  };

  const produceAbilitiySkill = data => {
    data.userProduceIdol.activeSkills.forEach(item => {
      commSkill(item);
    });
  };

  const userProduceReporterEvent = data => {
    var _data$userProduceRepo, _data$userProduceRepo2, _data$userProduceRepo3;

    (_data$userProduceRepo = data.userProduceReporterEvent) === null || _data$userProduceRepo === void 0 ? void 0 : (_data$userProduceRepo2 = _data$userProduceRepo.produceReporterEventResult) === null || _data$userProduceRepo2 === void 0 ? void 0 : (_data$userProduceRepo3 = _data$userProduceRepo2.produceReporterEventSkills) === null || _data$userProduceRepo3 === void 0 ? void 0 : _data$userProduceRepo3.forEach(item => {
      transItem(item, "name");
    });
  };

  const userFesDecks = data => {
    data.userFesDecks.forEach(deck => {
      deck.userFesDeckMembers.forEach(transDeckMember);
    });
  };

  const userJointFesDecks = data => {
    data.userJointFesDecks.forEach(deck => {
      deck.userFesDeckMembers.forEach(transDeckMember);
    });
  };

  const jointFesStagesRivalDeck = data => {
    var _data$stages;

    data === null || data === void 0 ? void 0 : (_data$stages = data.stages) === null || _data$stages === void 0 ? void 0 : _data$stages.forEach(stage => {
      var _stage$rivalFesDeck, _stage$rivalFesDeck$u;

      return stage === null || stage === void 0 ? void 0 : (_stage$rivalFesDeck = stage.rivalFesDeck) === null || _stage$rivalFesDeck === void 0 ? void 0 : (_stage$rivalFesDeck$u = _stage$rivalFesDeck.userFesDeckMembers) === null || _stage$rivalFesDeck$u === void 0 ? void 0 : _stage$rivalFesDeck$u.forEach(transDeckMember);
    });
  };

  const jointFesConcertsActionsReady = data => {
    var _data$stage, _data$stage$rivalFesD, _data$stage$rivalFesD2;

    data === null || data === void 0 ? void 0 : (_data$stage = data.stage) === null || _data$stage === void 0 ? void 0 : (_data$stage$rivalFesD = _data$stage.rivalFesDeck) === null || _data$stage$rivalFesD === void 0 ? void 0 : (_data$stage$rivalFesD2 = _data$stage$rivalFesD.userFesDeckMembers) === null || _data$stage$rivalFesD2 === void 0 ? void 0 : _data$stage$rivalFesD2.forEach(transDeckMember);
  };

  const jointFesConcertsActionsStart = data => {
    var _data$userFesDeck2, _data$userFesDeck2$us, _data$userFesRivals, _data$userFesRivals$, _data$userFesRivals$$;

    data === null || data === void 0 ? void 0 : (_data$userFesDeck2 = data.userFesDeck) === null || _data$userFesDeck2 === void 0 ? void 0 : (_data$userFesDeck2$us = _data$userFesDeck2.userFesDeckMembers) === null || _data$userFesDeck2$us === void 0 ? void 0 : _data$userFesDeck2$us.forEach(transDeckMember);
    data === null || data === void 0 ? void 0 : (_data$userFesRivals = data.userFesRivals) === null || _data$userFesRivals === void 0 ? void 0 : (_data$userFesRivals$ = _data$userFesRivals[0]) === null || _data$userFesRivals$ === void 0 ? void 0 : (_data$userFesRivals$$ = _data$userFesRivals$.userFesDeckMembers) === null || _data$userFesRivals$$ === void 0 ? void 0 : _data$userFesRivals$$.forEach(transDeckMember);
  };

  const patchSupportIdol = data => {
    userSptIdolsSkill(data.userSupportIdol);
  };

  const memoryAppealSkill = data => {
    if (!data.userProduceIdol) return;
    memoryAppeal(data.userProduceIdol.userIdol.idol.memoryAppeals);
  }; //const transFilter = (data) => {

  api.get([[["userSupportIdols/{num}", "userSupportIdols/statusMax", "produceTeachingSupportIdols/{num}"], [userSptIdolsSkill]], ["userProduce(Teaching)?SupportIdols/{num}", [userProSptIdolsSkill]], ["userReserveSupportIdols/userSupportIdol/{num}", [reserveUserSptIdolsSkill]], [["userIdols/{num}", "userIdols/statusMax", "produceTeachingIdols/{num}"], [userIdolsSkill]], [["userProduce(Teaching)?Idols/{num}", "userProduceTeachingIdol"], userProIdolsSkill], ["userReserveIdols/userIdol/{num}", reserveUserIdolsSkill], ["userFesIdols/{num}", userFesIdolsSkill], [["userProduces/skillPanels", "userProduceTeachings/skillPanels"], proSkillPanels], ["userDecks/skillPanels", readySkillPanels], ["fes(Match)?Concert/actions/resume", [resumeGameSkill]], ["earthUsers/{uuid}/userFesIdols/{num}", otherFesIdolSkill], ["userRaidDecks", userRaidDeck], ["userProduceAbilities", produceAbilitiySkill], ["userProduces", [userProduceReporterEvent]], //  ["searchPopupContents", transFilter],
  //  ["userKnowHowBooks", knowHowBooks],
  ["userJointFesDecks", userJointFesDecks], ["jointFes/areas/{num}/stages", jointFesStagesRivalDeck], ["jointFesConcerts/actions/ready", jointFesConcertsActionsReady], ["jointFesConcerts/actions/resume", jointFesConcertsActionsStart]]);
  api.post([["userIdols/{num}/produceExSkills/{num}/actions/set", userIdolsSkill], [["userProduce(Teaching)?s/skillPanels/{num}", "userProduces/limitedSkills/{num}"], proSkillPanels], ["userSupportIdols/{num}/produceExSkills/{num}/actions/set", [userSptIdolsSkill]], [["produces/actions/resume", "produces/actions/finish", "produceTeachings/resume"], [produceFinish, resumeGameSkill]], [["produces/actions/resume", "produces/actions/next"], [userProduceReporterEvent]], ["fes(Match|Raid)?Concert/actions/start", [fesMatchConcertSkill]], ["fes(Match)?Concert/actions/resume", [resumeGameSkill]], ["fesRaidConcert/actions/resume", [resumeRaidGameSkill]], ["fesTowerConcert/actions/start", [fesMatchConcertSkill]], ["fesTowerConcert/actions/resume", [resumeFesEventGameSkill]], [["produce(Teaching)?s/({num}/audition|concert)/actions/start", "produceTeachings/(auditions|concerts)/start"], [auditionSkill]], [["produces/actions/next", "produces/actions/resume"], memoryAppealSkill], ["userProduceAbilities", produceAbilitiySkill], ["jointFesConcerts/actions/start", jointFesConcertsActionsStart]]);
  api.patch([["userFesDecks", userFesDecks], ["userSupportIdols/{num}", patchSupportIdol]]);
  api.delete([["userProduces/skillPanels/{num}", proSkillPanels]]);

  const {
    api: api$1,
    transItem: transItem$1
  } = transApi("etc/ex-skill");

  const exSkill = data => {
    transItem$1(data, "name");
    transItem$1(data, "description");
  };

  const userIdolsSkill$1 = data => {
    data.userIdolProduceExSkills.forEach(item => {
      exSkill(item.produceExSkill);
    });
  };

  const userProIdolsSkill$1 = data => {
    data.userProduceIdolProduceExSkills.forEach(item => {
      exSkill(item.produceExSkill);
    });
  };

  const userSptIdolsSkill$1 = data => {
    var _data$userSupportIdol;

    (_data$userSupportIdol = data.userSupportIdolProduceExSkills) === null || _data$userSupportIdol === void 0 ? void 0 : _data$userSupportIdol.forEach(item => {
      exSkill(item.produceExSkill);
    });
  };

  const userProSptIdolsSkill$1 = data => {
    var _data$userProduceSupp;

    (_data$userProduceSupp = data.userProduceSupportIdolProduceExSkills) === null || _data$userProduceSupp === void 0 ? void 0 : _data$userProduceSupp.forEach(item => {
      exSkill(item.produceExSkill);
    });
  };

  const userFesIdolsSkill$1 = data => {
    const fesIdol = data.userFesIdol;
    fesIdol.userFesIdolProduceExSkills.forEach(item => {
      exSkill(item.produceExSkill);
    });
    fesIdol.userFesSupportIdols.forEach(sptIdol => {
      sptIdol.userFesSupportIdolProduceExSkills.forEach(item => {
        exSkill(item.produceExSkill);
      });
    });
  };

  const otherFesIdolSkill$1 = userFesIdolsSkill$1;

  const produceResultSkill = data => {
    data.produceExSkillRewards.forEach(reward => {
      exSkill(reward.produceExSkill);
    });
  };

  const produceExSkillTop = data => {
    var _data$userIdols, _data$userSupportIdol2, _data$userIdol, _data$userIdol$userId, _data$userSupportIdol3, _data$userSupportIdol4;

    (_data$userIdols = data.userIdols) === null || _data$userIdols === void 0 ? void 0 : _data$userIdols.forEach(idol => {
      var _idol$userIdolProduce;

      (_idol$userIdolProduce = idol.userIdolProduceExSkills) === null || _idol$userIdolProduce === void 0 ? void 0 : _idol$userIdolProduce.forEach(item => {
        exSkill(item.produceExSkill);
      });
    });
    (_data$userSupportIdol2 = data.userSupportIdols) === null || _data$userSupportIdol2 === void 0 ? void 0 : _data$userSupportIdol2.forEach(idol => {
      var _idol$userSupportIdol;

      (_idol$userSupportIdol = idol.userSupportIdolProduceExSkills) === null || _idol$userSupportIdol === void 0 ? void 0 : _idol$userSupportIdol.forEach(item => {
        exSkill(item.produceExSkill);
      });
    });
    (_data$userIdol = data.userIdol) === null || _data$userIdol === void 0 ? void 0 : (_data$userIdol$userId = _data$userIdol.userIdolProduceExSkills) === null || _data$userIdol$userId === void 0 ? void 0 : _data$userIdol$userId.forEach(item => {
      exSkill(item.produceExSkill);
    });
    (_data$userSupportIdol3 = data.userSupportIdol) === null || _data$userSupportIdol3 === void 0 ? void 0 : (_data$userSupportIdol4 = _data$userSupportIdol3.userSupportIdolProduceExSkills) === null || _data$userSupportIdol4 === void 0 ? void 0 : _data$userSupportIdol4.forEach(item => {
      exSkill(item.produceExSkill);
    });
    data.userProduceExSkills.forEach(item => {
      var _item$produceExSkillU;

      exSkill(item.produceExSkill);
      exSkill((_item$produceExSkillU = item.produceExSkillUpgrade) === null || _item$produceExSkillU === void 0 ? void 0 : _item$produceExSkillU.produceExSkill);
    });
  };

  const businessFinish = data => {
    data.slots.forEach(slot => {
      slot.businessProduceExSkillRewards.forEach(item => {
        exSkill(item.produceExSkill);
      });
    });
  };

  const upgradeExSkill = data => {
    exSkill(data.produceExSkill);
  };

  const producerSkillSumm = list => {
    list.forEach(item => {
      exSkill(item);
    });
  };

  api$1.get([[["userIdols/produceExSkillTop", "userSupportIdols/produceExSkillTop", "userIdols/{num}/produceExSkillTop", "userSupportIdols/{num}/produceExSkillTop"], produceExSkillTop], [["userSupportIdols/{num}", "userSupportIdols/statusMax", "produceTeachingSupportIdols/{num}"], [userSptIdolsSkill$1]], ["userProduce(Teaching)?SupportIdols/{num}", [userProSptIdolsSkill$1]], [["userIdols/{num}", "userIdols/statusMax", "produceTeachingIdols/{num}"], [userIdolsSkill$1]], [["userProduce(Teaching)?Idols/{num}", "userProduceTeachingIdol"], userProIdolsSkill$1], ["userFesIdols/{num}", userFesIdolsSkill$1], ["earthUsers/{uuid}/userFesIdols/{num}", otherFesIdolSkill$1], ["userProducerSkills/summaries", producerSkillSumm]]);
  api$1.post([["userIdols/{num}/produceExSkills/{num}/actions/set", userIdolsSkill$1], ["userSupportIdols/{num}/produceExSkills/{num}/actions/set", [userSptIdolsSkill$1]], ["produces/actions/result", [produceResultSkill]], ["business/actions/finish", businessFinish], ["userProduceExSkills/actions/upgrade", upgradeExSkill]]);

  const {
    api: api$2,
    transItem: transItem$2
  } = transApi("support-skill");

  const transSupportSkill = list => {
    list === null || list === void 0 ? void 0 : list.forEach(item => {
      transItem$2(item, "description");
      transItem$2(item, "name");
    });
  };

  const supportSkill = data => {
    var _data$userSupportIdol, _supportIdol$supportI, _supportIdol$supportI2;

    const supportIdol = (_data$userSupportIdol = data.userSupportIdol) !== null && _data$userSupportIdol !== void 0 ? _data$userSupportIdol : data;
    transSupportSkill(supportIdol.acquiredSupportSkills);
    transSupportSkill(supportIdol.supportSkills);
    transSupportSkill((_supportIdol$supportI = supportIdol.supportIdol) === null || _supportIdol$supportI === void 0 ? void 0 : _supportIdol$supportI.supportSkills);
    translateFightSkill(supportIdol === null || supportIdol === void 0 ? void 0 : (_supportIdol$supportI2 = supportIdol.supportIdol) === null || _supportIdol$supportI2 === void 0 ? void 0 : _supportIdol$supportI2.fightSkill);
  };

  const producesDecksSkill = data => {
    var _data$userSupportIdol2;

    (_data$userSupportIdol2 = data.userSupportIdols) === null || _data$userSupportIdol2 === void 0 ? void 0 : _data$userSupportIdol2.forEach(item => {
      var _item$supportIdol;

      transSupportSkill((_item$supportIdol = item.supportIdol) === null || _item$supportIdol === void 0 ? void 0 : _item$supportIdol.supportSkills);
    });
  };

  const producesActionReadySkill = data => {
    data.userDecks.forEach(deck => {
      deck.userSupportIdols.forEach(item => {
        var _item$supportIdol2;

        transSupportSkill((_item$supportIdol2 = item.supportIdol) === null || _item$supportIdol2 === void 0 ? void 0 : _item$supportIdol2.supportSkills);
      });
    });
  };

  const useProduceItem = data => {
    transSupportSkill(data.supportSkills);
  };

  const translateFightSkill = fightSkill => {
    var _fightSkill$skills;

    if (!fightSkill) return;
    transItem$2(fightSkill, "comment");
    transItem$2(fightSkill, "name");
    fightSkill === null || fightSkill === void 0 ? void 0 : (_fightSkill$skills = fightSkill.skills) === null || _fightSkill$skills === void 0 ? void 0 : _fightSkill$skills.forEach(skill => transItem$2(skill === null || skill === void 0 ? void 0 : skill.skill, "name"));
  };

  const userJointFesDecks$1 = data => {
    data.userJointFesDecks.forEach(deck => {
      deck.userFesDeckMembers.forEach(member => {
        var _member$userFightSupp, _member$userFightSupp2;

        return translateFightSkill(member === null || member === void 0 ? void 0 : (_member$userFightSupp = member.userFightSupportIdol) === null || _member$userFightSupp === void 0 ? void 0 : (_member$userFightSupp2 = _member$userFightSupp.supportIdol) === null || _member$userFightSupp2 === void 0 ? void 0 : _member$userFightSupp2.fightSkill);
      });
    });
  };

  const jointFesConcertsActionsStart$1 = data => {
    var _data$userFesDeck, _data$userFesDeck$use;

    data === null || data === void 0 ? void 0 : (_data$userFesDeck = data.userFesDeck) === null || _data$userFesDeck === void 0 ? void 0 : (_data$userFesDeck$use = _data$userFesDeck.userFesDeckMembers) === null || _data$userFesDeck$use === void 0 ? void 0 : _data$userFesDeck$use.forEach(member => {
      var _member$userFightSupp5, _member$userFightSupp6;

      return translateFightSkill(member === null || member === void 0 ? void 0 : (_member$userFightSupp5 = member.userFightSupportIdol) === null || _member$userFightSupp5 === void 0 ? void 0 : (_member$userFightSupp6 = _member$userFightSupp5.supportIdol) === null || _member$userFightSupp6 === void 0 ? void 0 : _member$userFightSupp6.fightSkill);
    });
  };

  const translateSupportIdolFightSkills = data => {
    data.forEach(supportIdol => {
      var _supportIdol$supportI3;

      return translateFightSkill(supportIdol === null || supportIdol === void 0 ? void 0 : (_supportIdol$supportI3 = supportIdol.supportIdol) === null || _supportIdol$supportI3 === void 0 ? void 0 : _supportIdol$supportI3.fightSkill);
    });
  };

  api$2.get([[["userSupportIdols/{num}", "userSupportIdols/statusMax", "produceTeachingSupportIdols/{num}"], [supportSkill]], ["userProduce(Teaching)?SupportIdols/{num}", [supportSkill]], ["userReserveSupportIdols/userSupportIdol/{num}", [supportSkill]], ["produces/{num}/decks", producesDecksSkill], ["userJointFesDecks", userJointFesDecks$1], ["jointFesConcerts/actions/resume", jointFesConcertsActionsStart$1], ["userSupportIdols", translateSupportIdolFightSkills]]);
  api$2.post([["produces/{num}/actions/ready", [producesActionReadySkill]], ["userSupportIdols/{num}/produceExSkills/{num}/actions/set", [supportSkill]], ["produces/actions/(resume|next)", [supportSkill]], [["produceTeachings/resume", "produceTeachings/next"], supportSkill], ["jointFesConcerts/actions/start", jointFesConcertsActionsStart$1]]);
  api$2.patch([["userSupportIdols/{num}", supportSkill], ["produces/{num}/produceItem/consume", useProduceItem]]);

  const {
    api: api$3,
    transItem: transItem$3
  } = transApi("etc/idea-note");

  const commSkill$1 = data => {
    transItem$3(data, "title");
    transItem$3(data, "comment");
  };

  const transNote = note => {
    var _note$produceIdeaNote;

    if (!note) return;
    transItem$3(note, "title");
    commSkill$1(note.produceIdeaNoteCompleteBonus);
    (_note$produceIdeaNote = note.produceIdeaNoteExtraBonuses) === null || _note$produceIdeaNote === void 0 ? void 0 : _note$produceIdeaNote.forEach(item => {
      transItem$3(item, "comment");
      transItem$3(item, "condition");
    });
  };

  const ideaNotesSkill = data => {
    var _data$userProduceIdea;

    (_data$userProduceIdea = data.userProduceIdeaNotes) === null || _data$userProduceIdea === void 0 ? void 0 : _data$userProduceIdea.forEach(item => {
      transNote(item.produceIdeaNote);
    });
  };

  const noteResultSkill = data => {
    var _data$produceEvents, _data$lessonResult, _data$lessonResult$us;

    (_data$produceEvents = data.produceEvents) === null || _data$produceEvents === void 0 ? void 0 : _data$produceEvents.forEach(item => {
      var _item$produceIdeaNote;

      (_item$produceIdeaNote = item.produceIdeaNotes) === null || _item$produceIdeaNote === void 0 ? void 0 : _item$produceIdeaNote.forEach(note => {
        transNote(note);
      });
    });
    let note = (_data$lessonResult = data.lessonResult) === null || _data$lessonResult === void 0 ? void 0 : (_data$lessonResult$us = _data$lessonResult.userProduceIdeaNote) === null || _data$lessonResult$us === void 0 ? void 0 : _data$lessonResult$us.produceIdeaNote;
    transNote(note);
  };

  const userProduceIdeaNotes = data => {
    data.forEach(item => {
      transNote(item.produceIdeaNote);
    });
  };

  const produceEndWeek = data => {
    var _data$ideaNoteResult, _data$ideaNoteResult$;

    (_data$ideaNoteResult = data.ideaNoteResult) === null || _data$ideaNoteResult === void 0 ? void 0 : (_data$ideaNoteResult$ = _data$ideaNoteResult.seasonClearBonusIdeaNotes) === null || _data$ideaNoteResult$ === void 0 ? void 0 : _data$ideaNoteResult$.forEach(note => {
      transNote(note);
    });
  };

  const patchIdeaNote = data => {
    transNote(data.userProduceIdeaNote.produceIdeaNote);
  };

  api$3.get([["userProduceIdeaNotes", userProduceIdeaNotes]]);
  api$3.post([["produces/actions/(resume|next)", [ideaNotesSkill, produceEndWeek]], ["produces/actions/act", [noteResultSkill]], ["produces/actions/endWeek", produceEndWeek]]);
  api$3.patch([["userProduceIdeaNotes/228681479/actions/select", patchIdeaNote]]);

  const {
    api: api$4,
    transItem: transItem$4
  } = transApi("etc/grad-skill");

  const commSkill$2 = data => {
    var _data$produceAbilityA;

    if (!data) return;
    transItem$4(data, "comment");
    transItem$4(data, "name");
    transItem$4(data, "acquireComment");
    transItem$4(data, "releaseComment");
    (_data$produceAbilityA = data.produceAbilityAcquireConditionComments) === null || _data$produceAbilityA === void 0 ? void 0 : _data$produceAbilityA.forEach(comm => {
      transItem$4(comm, "name");
    });
  };

  const shortProIdol$1 = (data, panel = false) => {
    var _proIdol$abilities;

    let proIdol = data.userProduceIdol;
    if (!proIdol) return;
    (_proIdol$abilities = proIdol.abilities) === null || _proIdol$abilities === void 0 ? void 0 : _proIdol$abilities.forEach(item => {
      commSkill$2(item);
    });
  };

  const userFesIdolsSkill$2 = data => {
    const fesIdol = data.userFesIdol;
    fesIdol.abilities.forEach(item => {
      commSkill$2(item);
    });
  };

  const otherFesIdolSkill$2 = userFesIdolsSkill$2;

  const produceFinish$1 = data => {
    if (data.gameData) return;
    shortProIdol$1(data);
  };

  const fesMatchConcertSkill$1 = data => {
    var _data$userFesDeck, _data$userRaidDeck;

    const transDeckMember = member => {
      member.userFesIdol.abilities.forEach(item => {
        commSkill$2(item);
      });
      member.userFesIdol.concertAbilities.forEach(item => {
        commSkill$2(item);
      });
    };

    (_data$userFesDeck = data.userFesDeck) === null || _data$userFesDeck === void 0 ? void 0 : _data$userFesDeck.userFesDeckMembers.forEach(transDeckMember);
    (_data$userRaidDeck = data.userRaidDeck) === null || _data$userRaidDeck === void 0 ? void 0 : _data$userRaidDeck.userRaidDeckMembers.forEach(transDeckMember);
  };

  const auditionSkill$1 = data => {
    var _proIdol$abilities2, _proIdol$concertAbili;

    const proIdol = data.userProduceIdol;
    if (!proIdol) return;
    (_proIdol$abilities2 = proIdol.abilities) === null || _proIdol$abilities2 === void 0 ? void 0 : _proIdol$abilities2.forEach(skill => {
      commSkill$2(skill);
    });
    (_proIdol$concertAbili = proIdol.concertAbilities) === null || _proIdol$concertAbili === void 0 ? void 0 : _proIdol$concertAbili.forEach(skill => {
      commSkill$2(skill);
    });
  };

  const resumeGameSkill$1 = data => {
    if (!data.gameData) return;

    try {
      let gData = JSON.parse(data.gameData);

      if (gData.produceAudition || gData.produceConcert) {
        auditionSkill$1(gData);
      } else if (gData.userFesDeck || gData.userRaidDeck) {
        fesMatchConcertSkill$1(gData);
      }

      data.gameData = JSON.stringify(gData);
    } catch (e) {
      log(e);
    }
  };

  const resumeRaidGameSkill$1 = data => {
    if (!data.gameState || !data.gameState.game_data) return;

    try {
      let gData = JSON.parse(data.gameState.game_data);

      if (gData.userRaidDeck) {
        fesMatchConcertSkill$1(gData);
      }

      data.gameState.game_data = JSON.stringify(gData);
    } catch (e) {
      log(e);
    }
  };

  const produceAbilitiySkill$1 = data => {
    data.userProduceIdol.abilities.forEach(item => {
      commSkill$2(item);
    });
    data.userProduceAbilities.forEach(item => {
      commSkill$2(item.ability);
    });
  };

  const finishAbility = data => {
    var _data$concertEvent, _data$concertEvent$ab;

    (_data$concertEvent = data.concertEvent) === null || _data$concertEvent === void 0 ? void 0 : (_data$concertEvent$ab = _data$concertEvent.abilities) === null || _data$concertEvent$ab === void 0 ? void 0 : _data$concertEvent$ab.forEach(item => {
      transItem$4(item, "name");
    });
  };

  const produceAreaAbilitySkill = data => {
    var _data$abilities;

    (_data$abilities = data.abilities) === null || _data$abilities === void 0 ? void 0 : _data$abilities.forEach(item => {
      commSkill$2(item);
    });
  };

  api$4.get([["userFesIdols/{num}", userFesIdolsSkill$2], ["fes(Match)?Concert/actions/resume", [resumeGameSkill$1]], ["earthUsers/{uuid}/userFesIdols/{num}", otherFesIdolSkill$2], ["userProduceAbilities", produceAbilitiySkill$1], [["userProduceAreas"], produceAreaAbilitySkill], ["jointFesConcerts/actions/resume", fesMatchConcertSkill$1] //  ["userKnowHowBooks", knowHowBooks],
  ]);
  api$4.post([[["produces/actions/resume", "produces/actions/finish", "produceTeachings/resume"], [produceFinish$1, resumeGameSkill$1]], ["fes(Match|Raid)?Concert/actions/start", [fesMatchConcertSkill$1]], ["jointFesConcerts/actions/start", fesMatchConcertSkill$1], ["fes(Match)?Concert/actions/resume", [resumeGameSkill$1]], ["fesRaidConcert/actions/resume", [resumeRaidGameSkill$1]], [["produce(Teaching)?s/({num}/audition|concert)/actions/start", "produceTeachings/(auditions|concerts)/start"], [auditionSkill$1]], ["produces/({num}/audition|concert)/actions/(start|finish)", finishAbility], ["userProduceAbilities", produceAbilitiySkill$1]]);

  const {
    api: api$5,
    transItem: transItem$5
  } = transApi("etc/landing-point");

  const commSkill$3 = data => {
    if (!data) return;
    transItem$5(data, "comment");
    transItem$5(data, "name");
    transItem$5(data, "acquireComment");
    transItem$5(data, "releaseComment");
  };

  const produceMusicAssignment = item => {
    transItem$5(item, "title");
    item.produceMusicAssignmentClearBonuses.forEach(bonus => {
      transItem$5(bonus, "title");
    });
  };

  const commMusic = music => {
    var _music$produceMusicAs, _music$produceMusicPr;

    transItem$5(music.concertBgm, "songTitle");
    transItem$5(music.concertBgm, "newLineSongTitle");
    transItem$5(music.feverActiveSkill, "comment");
    music.produceMusicProficiencyBonuses.forEach(item => {
      var _item$ability$produce;

      transItem$5(item, "description");
      if (!item.ability) return;
      commSkill$3(item.ability);
      (_item$ability$produce = item.ability.produceAbilityAcquireConditionComments) === null || _item$ability$produce === void 0 ? void 0 : _item$ability$produce.forEach(comm => {
        transItem$5(comm, "name");
      });
    });
    (_music$produceMusicAs = music.produceMusicAssignments) === null || _music$produceMusicAs === void 0 ? void 0 : _music$produceMusicAs.forEach(produceMusicAssignment);
    (_music$produceMusicPr = music.produceMusicProficiencyJudgeStarBonuses) === null || _music$produceMusicPr === void 0 ? void 0 : _music$produceMusicPr.forEach(item => {
      transItem$5(item, "description");
    });
  };

  const produceAreaAbilitySkill$1 = data => {
    var _data$produceMusics;

    (_data$produceMusics = data.produceMusics) === null || _data$produceMusics === void 0 ? void 0 : _data$produceMusics.forEach(commMusic);
  };

  const userProduceMusicProficiency = item => {
    var _item$userProduceMusi, _item$allUserProduceM, _item$judgeStarBonuse;

    commMusic(item.produceMusic);
    (_item$userProduceMusi = item.userProduceMusicAssignments) === null || _item$userProduceMusi === void 0 ? void 0 : _item$userProduceMusi.forEach(ma => {
      produceMusicAssignment(ma.produceMusicAssignment);
    });
    (_item$allUserProduceM = item.allUserProduceMusicAssignments) === null || _item$allUserProduceM === void 0 ? void 0 : _item$allUserProduceM.forEach(ma => {
      produceMusicAssignment(ma.produceMusicAssignment);
    });
    (_item$judgeStarBonuse = item.judgeStarBonuses) === null || _item$judgeStarBonuse === void 0 ? void 0 : _item$judgeStarBonuse.forEach(bonus => {
      transItem$5(bonus, "description");
    });
  };

  const postProficiency = data => {
    userProduceMusicProficiency(data.userProduceMusicProficiency);
  };

  const userProduceMusicProficiencies = data => {
    var _data$userProduceMusi, _data$activatedProduc;

    (_data$userProduceMusi = data.userProduceMusicProficiencies) === null || _data$userProduceMusi === void 0 ? void 0 : _data$userProduceMusi.forEach(userProduceMusicProficiency);
    (_data$activatedProduc = data.activatedProduceMusicAssignmentBonuses) === null || _data$activatedProduc === void 0 ? void 0 : _data$activatedProduc.forEach(bonus => {
      var _bonus$produceMusicAs;

      (_bonus$produceMusicAs = bonus.produceMusicAssignmentClearBonuses) === null || _bonus$produceMusicAs === void 0 ? void 0 : _bonus$produceMusicAs.forEach(clearBonus => {
        transItem$5(clearBonus, "title");
      });
    });
  };

  const patchAssignments = data => {
    produceMusicAssignment(data.produceMusicAssignment);
  };

  const commonAbility = item => {
    var _item$skillEffects;

    commSkill$3(item);
    (_item$skillEffects = item.skillEffects) === null || _item$skillEffects === void 0 ? void 0 : _item$skillEffects.forEach(effect => {
      transItem$5(effect, "effectDescription");
      transItem$5(effect, "effectName");
    });
  };

  const concertStart = data => {
    var _data$produceMusic, _data$produceMusic$ju, _data$userProduceIdol, _data$userProduceIdol2;

    (_data$produceMusic = data.produceMusic) === null || _data$produceMusic === void 0 ? void 0 : (_data$produceMusic$ju = _data$produceMusic.judgeStarBonuses) === null || _data$produceMusic$ju === void 0 ? void 0 : _data$produceMusic$ju.forEach(item => {
      transItem$5(item, "description");
    });
    (_data$userProduceIdol = data.userProduceIdol) === null || _data$userProduceIdol === void 0 ? void 0 : (_data$userProduceIdol2 = _data$userProduceIdol.abilities) === null || _data$userProduceIdol2 === void 0 ? void 0 : _data$userProduceIdol2.forEach(commonAbility);
    transItem$5(data.feverActiveSkill, "comment");
  };

  const fesIdol = data => {
    var _data$userFesIdol, _data$userFesIdol$abi;

    (_data$userFesIdol = data.userFesIdol) === null || _data$userFesIdol === void 0 ? void 0 : (_data$userFesIdol$abi = _data$userFesIdol.abilities) === null || _data$userFesIdol$abi === void 0 ? void 0 : _data$userFesIdol$abi.forEach(commonAbility);
  };

  const otherFesIdolSkill$3 = fesIdol;

  const resumeGameSkill$2 = data => {
    if (!data.gameData) return;

    try {
      let gData = JSON.parse(data.gameData);

      if (gData.produceAudition || gData.produceConcert) {
        concertStart(gData);
      } else if (gData.userFesDeck || gData.userRaidDeck) {}

      data.gameData = JSON.stringify(gData);
    } catch (e) {
      log(e);
    }
  };

  api$5.get([[["userProduceAreas", "produceMusics"], produceAreaAbilitySkill$1], ["userProduces", [userProduceMusicProficiencies]], ["userFesIdols/{num}", fesIdol], ["earthUsers/{uuid}/userFesIdols/{num}", otherFesIdolSkill$3] //  ["userKnowHowBooks", knowHowBooks],
  ]);
  api$5.post([[["produces/actions/resume", "produces/actions/next"], [userProduceMusicProficiencies]], ["produces/actions/resume", resumeGameSkill$2], ["userProduceMusicProficiencies", postProficiency], ["produces/concert/actions/start", concertStart]]);
  api$5.patch([["userProduceMusicAssignments/{num}", patchAssignments]]);

  const {
    api: api$6,
    transItem: transItem$6
  } = transApi("etc/match-live");

  const translateTrophies = data => {
    var _data$trophies, _data$trophies2;

    data === null || data === void 0 ? void 0 : (_data$trophies = data.trophies) === null || _data$trophies === void 0 ? void 0 : _data$trophies.forEach(x => transItem$6(x, "comment"));
    data === null || data === void 0 ? void 0 : (_data$trophies2 = data.trophies) === null || _data$trophies2 === void 0 ? void 0 : _data$trophies2.forEach(x => transItem$6(x, "name"));
  };

  const translateStage = function (stage) {
    var _stage$achievements;

    if (!stage) {
      return;
    }

    transItem$6(stage, "name");
    transItem$6(stage, "desc");
    transItem$6(stage === null || stage === void 0 ? void 0 : stage.produce, "title");
    stage === null || stage === void 0 ? void 0 : (_stage$achievements = stage.achievements) === null || _stage$achievements === void 0 ? void 0 : _stage$achievements.forEach(achievement => transItem$6(achievement, "name")
    /*, transItem(achievement, "comment") */
    );
  };

  const translateStages = data => {
    var _data$stages;

    data === null || data === void 0 ? void 0 : (_data$stages = data.stages) === null || _data$stages === void 0 ? void 0 : _data$stages.forEach(translateStage);
  };

  const translateConcertActionsReady = data => {
    translateStage(data === null || data === void 0 ? void 0 : data.stage);
  };

  const translateConcertActionsStart = data => {
    var _data$userStageMissio;

    translateStage(data === null || data === void 0 ? void 0 : data.jointFesVenue);
    data === null || data === void 0 ? void 0 : (_data$userStageMissio = data.userStageMissions) === null || _data$userStageMissio === void 0 ? void 0 : _data$userStageMissio.forEach(mission => transItem$6(mission === null || mission === void 0 ? void 0 : mission.mission, "comment"));
  };

  const translateFacilities = data => {
    var _data$userFacilities, _data$userFacilityIte;

    data === null || data === void 0 ? void 0 : (_data$userFacilities = data.userFacilities) === null || _data$userFacilities === void 0 ? void 0 : _data$userFacilities.forEach(function (facility) {
      var _facility$facility, _facility$facility$fa;

      transItem$6(facility === null || facility === void 0 ? void 0 : facility.facility, "name");
      facility === null || facility === void 0 ? void 0 : (_facility$facility = facility.facility) === null || _facility$facility === void 0 ? void 0 : (_facility$facility$fa = _facility$facility.facilityEffects) === null || _facility$facility$fa === void 0 ? void 0 : _facility$facility$fa.forEach(effect => transItem$6(effect, "comment"));
    });
    data === null || data === void 0 ? void 0 : (_data$userFacilityIte = data.userFacilityItems) === null || _data$userFacilityIte === void 0 ? void 0 : _data$userFacilityIte.forEach(item => (transItem$6(item === null || item === void 0 ? void 0 : item.facilityItem, "comment"), transItem$6(item === null || item === void 0 ? void 0 : item.facilityItem, "name")));
  };

  api$6.get([["jointFes/trophies", translateTrophies], ["jointFes/areas/{num}/stages", translateStages], ["jointFesConcerts/actions/ready", translateConcertActionsReady], ["jointFesConcerts/actions/resume", translateConcertActionsStart], ["facilities", translateFacilities]]);
  api$6.post([["jointFesConcerts/actions/start", translateConcertActionsStart]]);

  const {
    api: api$7,
    transItem: transItem$7
  } = transApi("etc/festour");

  const suggestFesTowerCompleteBonuses = data => {
    var _data$suggestFesTower;

    (_data$suggestFesTower = data.suggestFesTowerCompleteBonuses) === null || _data$suggestFesTower === void 0 ? void 0 : _data$suggestFesTower.forEach(item => {
      userFesTowerCompleteBonuses(item);
    });
  };

  const suggestFesTowerAreaClearBonuses = data => {
    var _data$suggestFesTower2;

    (_data$suggestFesTower2 = data.suggestFesTowerAreaClearBonuses) === null || _data$suggestFesTower2 === void 0 ? void 0 : _data$suggestFesTower2.forEach(item => {
      transItem$7(item.fesTowerBonus, "desc");
    });
  };

  const userFesTowerAreaSkipBonus = data => {
    let userFesTowerAreaSkipBonus = data.userFesTowerAreaSkipBonus;
    if (!userFesTowerAreaSkipBonus) return;
    transItem$7(userFesTowerAreaSkipBonus.fesTowerBonus, "desc");
  };

  const userFesTowerCompleteBonuses = data => {
    var _data$userFesTowerCom;

    if (!data) return;
    (_data$userFesTowerCom = data.userFesTowerCompleteBonuses) === null || _data$userFesTowerCom === void 0 ? void 0 : _data$userFesTowerCom.forEach(item => {
      descSkill2(item);
    });
  };

  const fesTowerBonusIdols = data => {
    var _data$fesTowerBonusId;

    (_data$fesTowerBonusId = data.fesTowerBonusIdols) === null || _data$fesTowerBonusId === void 0 ? void 0 : _data$fesTowerBonusId.forEach(item => {
      descSkill(item);
    });
  };

  const descSkill = data => {
    var _data$fesTowerBonusId2;

    if (!data) return;
    (_data$fesTowerBonusId2 = data.fesTowerBonusIdolConditions) === null || _data$fesTowerBonusId2 === void 0 ? void 0 : _data$fesTowerBonusId2.forEach(desc => {
      transItem$7(desc, "desc");
    });
  };

  const descSkill2 = data => {
    var _data$fesTowerComplet, _data$fesTowerComplet2;

    if (!data) return;
    (_data$fesTowerComplet = data.fesTowerCompleteBonus) === null || _data$fesTowerComplet === void 0 ? void 0 : (_data$fesTowerComplet2 = _data$fesTowerComplet.fesTowerBonuses) === null || _data$fesTowerComplet2 === void 0 ? void 0 : _data$fesTowerComplet2.forEach(desc => {
      transItem$7(desc, "desc");
    });
  };

  const finishResults = data => {
    var _data$evaluationDetai;

    if (!data) return;
    (_data$evaluationDetai = data.evaluationDetails) === null || _data$evaluationDetai === void 0 ? void 0 : _data$evaluationDetai.forEach(item => {
      transItem$7(item, "evaluation");
    });
  };

  const userFesTowerItems = data => {
    var _data$userFesTowerIte;

    if (!data) return;
    (_data$userFesTowerIte = data.userFesTowerItems) === null || _data$userFesTowerIte === void 0 ? void 0 : _data$userFesTowerIte.forEach(item => {
      transItem$7(item, "name");
      transItem$7(item.fesTowerItemLevel, "desc");
      transItem$7(item.nextFesTowerItemLevel, "desc");
    });
  };

  const userFesTowerItems2 = data => {
    if (!data) return;
    transItem$7(data, "name");
    transItem$7(data.fesTowerItemLevel, "desc");
    transItem$7(data.nextFesTowerItemLevel, "desc");
  };

  const fesTowerAdvantageFilters = data => {
    var _data$fesTowerAdvanta;

    if (!data) return;
    (_data$fesTowerAdvanta = data.fesTowerAdvantageFilters) === null || _data$fesTowerAdvanta === void 0 ? void 0 : _data$fesTowerAdvanta.forEach(item => {
      transItem$7(item, "title");
    });
  };

  const userFesTowerAdvantages = data => {
    var _data$userFesTowerAdv;

    if (!data) return;
    (_data$userFesTowerAdv = data.userFesTowerAdvantages) === null || _data$userFesTowerAdv === void 0 ? void 0 : _data$userFesTowerAdv.forEach(item => {
      transItem$7(item, "name");
      transItem$7(item.fesTowerAdvantageEffect, "desc");
      transItem$7(item.nextFesTowerAdvantageEffect, "desc");
      skillEffects(skillEffects);
    });
  };

  const userFesTowerAdvantages2 = data => {
    if (!data) return;
    transItem$7(data, "name");
    transItem$7(data.fesTowerAdvantageEffect, "desc");
    transItem$7(data.nextFesTowerAdvantageEffect, "desc");
  };

  const skillEffects = data => {
    var _data$skillEffects;

    if (!data) return;
    (_data$skillEffects = data.skillEffects) === null || _data$skillEffects === void 0 ? void 0 : _data$skillEffects.forEach(item => {
      transItem$7(item, "effectDescription");
    });
  };

  const userFesTowerAreas = data => {
    var _data$userFesTowerAre;

    (_data$userFesTowerAre = data.userFesTowerAreas) === null || _data$userFesTowerAre === void 0 ? void 0 : _data$userFesTowerAre.forEach(item => {
      userFesTowerAreaClearBonuses(item);
    });
  };

  const userFesTowerAreaClearBonuses = data => {
    var _data$userFesTowerAre2;

    (_data$userFesTowerAre2 = data.userFesTowerAreaClearBonuses) === null || _data$userFesTowerAre2 === void 0 ? void 0 : _data$userFesTowerAre2.forEach(item => {
      transItem$7(item.fesTowerBonus, "desc");
    });
  };

  api$7.get([["userFesTowerResults", finishResults], ["userFesTowerAdvantages", [fesTowerAdvantageFilters, userFesTowerAdvantages]], ["userFesTowerItems", userFesTowerItems], [["fesTowerBonusIdols"], fesTowerBonusIdols]]);
  api$7.post([["userFesTowerResults", finishResults], ["fesTowerEvents/top", [suggestFesTowerCompleteBonuses, suggestFesTowerAreaClearBonuses, userFesTowerAreaSkipBonus, userFesTowerCompleteBonuses, userFesTowerAreas]]]);
  api$7.patch([["userFesTowerAdvantages/action/acquire", userFesTowerAdvantages2], ["userFesTowerItems/action/acquire", userFesTowerItems2], ["userFesTowerAreas/action/complete", suggestFesTowerCompleteBonuses], ["userFesTowerAreas/action/skip", suggestFesTowerCompleteBonuses], [["fesTowerEvents/top", "userFesTowers/action/skip"], [suggestFesTowerCompleteBonuses, suggestFesTowerAreaClearBonuses, userFesTowerAreaSkipBonus]]]);

  const {
    api: api$8,
    transItem: transItem$8
  } = transApi("etc/knowhowbook");

  const produceGrowths = data => {
    var _data$userProduceGrow;

    (_data$userProduceGrow = data.userProduceGrowths) === null || _data$userProduceGrow === void 0 ? void 0 : _data$userProduceGrow.forEach(item => {
      growth(item.produceGrowth);
    });
  };

  const knowHowBooks = data => {
    var _data$userKnowHowBook;

    (_data$userKnowHowBook = data.userKnowHowBooks) === null || _data$userKnowHowBook === void 0 ? void 0 : _data$userKnowHowBook.forEach(item => {
      KnowHowBookIndividualities(item);
    });
  };

  const KnowHowBookIndividualities = data => {
    var _data$userKnowHowBook2;

    (_data$userKnowHowBook2 = data.userKnowHowBookIndividualities) === null || _data$userKnowHowBook2 === void 0 ? void 0 : _data$userKnowHowBook2.forEach(item => {
      knowHowBookSkill(item.individuality);
    });
  };

  const knowHowBookSkill = data => {
    if (!data) return;
    transItem$8(data, "name");
    transItem$8(data, "description");
  };

  const growth = data => {
    if (!data) return;
    transItem$8(data, "name");

    if (data.ability) {
      transItem$8(data.ability, "comment");
      transItem$8(data.ability, "name");
    }

    if (data.activeSkill) {
      transItem$8(data.activeSkill, "comment");
    }
  };

  const availableIndividualities = data => {
    var _data$availableIndivi;

    (_data$availableIndivi = data.availableIndividualities) === null || _data$availableIndivi === void 0 ? void 0 : _data$availableIndivi.forEach(item => {
      knowHowBookSkill(item);
    });
  };

  api$8.get([[["userProduceAreas", "userProduces/growths"], produceGrowths], [["userKnowHowBooks"], knowHowBooks]]);
  api$8.post([[["produces/actions/endWeek", "produces/actions/resume"], availableIndividualities], ["produces/actions/result", knowHowBooks] //    ["produces/concert/actions/start", concertStart],
  ]);

  const {
    api: api$9,
    getTransItem,
    ensureData
  } = transApi("etc/item-re");
  const transDesc = getTransItem((item, key, data) => {
    if (item === null || item === void 0 ? void 0 : item[key]) {
      let arr = item[key].split("\n");
      arr.forEach((txt, index) => {
        replaceItem(arr, index, data);
      });
      let text = arr.join("\n");

      if (text !== item[key]) {
        item[key] = tagText(text, true);
      }
    }
  });
  const transName = getTransItem(replaceItem);
  const transShopTitle = getTransItem((item, key, data) => {
    if (item === null || item === void 0 ? void 0 : item[key]) {
      let text = item[key];
      replaceItem(item, key, data);

      if (item[key] === text) {
        item[key] = item[key].replace("\n", "");
        let temp = item[key];
        replaceItem(item, key, data);

        if (temp === item[key]) {
          item[key] = text;
        }
      }
    }
  });
  const userItemTypes = ["userRecoveryItems", "userProduceItems", "userExchangeItems", "userLotteryTickets", "userEvolutionItems", "userGashaTickets", "userScoutTickets", "userEnhancementItems", "userIdolEvolutionPieces"];
  const itemTypes = ["produceItem", "recoveryItem", "exchangeItem", "lotteryTicket", "evolutionItem", "gashaTicket", "scoutTicket", "enhancementItem", "idolEvolutionPiece"];

  const switchShop = shop => {
    var _shop$shopMerchandise;

    const isSkinOrTicketExchange = (shop === null || shop === void 0 ? void 0 : shop.category) == "skin" || (shop === null || shop === void 0 ? void 0 : shop.category) == "ticket_exchange";
    shop === null || shop === void 0 ? void 0 : (_shop$shopMerchandise = shop.shopMerchandises) === null || _shop$shopMerchandise === void 0 ? void 0 : _shop$shopMerchandise.forEach(item => {
      transDesc(item, "comment");

      if (!isSkinOrTicketExchange) {
        var _item$shopContents;

        transName(item, "title");
        transShopTitle(item, "shopTitle");
        (_item$shopContents = item.shopContents) === null || _item$shopContents === void 0 ? void 0 : _item$shopContents.forEach(data => {
          transName(data.content, "name");
          transDesc(data.content, "comment");
        });
      }
    });
  };

  const transShopItem = data => {
    if (data) {
      if (Array.isArray(data.userShops)) {
        data.userShops.forEach(shop => {
          switchShop(shop);
        });
      }

      if (Array.isArray(data.userEventShops)) {
        data.userEventShops.forEach(item => {
          switchShop(item.userShop);
        });
      }
    }
  };

  const transUserItem = data => {
    let list = data;
    if (data.userProduceItems) list = data.userProduceItems;

    if (Array.isArray(list)) {
      list.forEach(obj => {
        const item = obj[itemTypes[0]] || obj[itemTypes[1]] || obj[itemTypes[2]] || obj[itemTypes[3]] || obj[itemTypes[4]] || obj[itemTypes[5]] || obj[itemTypes[6]] || obj[itemTypes[7]] || obj[itemTypes[8]];
        transName(item, "name");
        transDesc(item, "comment");
      });
    }
  };

  const transShopPurchase = data => {
    transName(data === null || data === void 0 ? void 0 : data.shopMerchandise, "title");
    transDesc(data === null || data === void 0 ? void 0 : data.shopMerchandise, "comment");
  };

  const transPresentItem = data => {
    if (Array.isArray(data)) {
      data.forEach(obj => {
        transName(obj.content, "name");
        transName(obj, "note");
      });
    }
  };

  const transReceivePresent = data => {
    transName(data.receivedPresent, "Name");
  };

  const transReceiveMission = data => {
    transName(data.userMission.mission.missionReward.content, "name");
  };

  const transLoginBonus = data => {
    data.userLoginBonuses.forEach(item => {
      item.loginBonus.sheets.forEach(sheet => {
        sheet.rewards.forEach(reward => {
          transName(reward.content, "name");
        });
      });
    });
    data.userTotalBonuses.forEach(item => {
      item.rewards.forEach(reward => {
        transName(reward.content, "name");
      });
    });
  };

  const transFesReward = data => {
    if (data.lastRankingResult) {
      if (Array.isArray(data.lastRankingResult.fesMatchGradeRewards)) {
        data.lastRankingResult.fesMatchGradeRewards.forEach(item => {
          transName(item.content, "name");
        });
      }
    }
  };

  const transAccumulatedPresent = data => {
    data.accumulatedPresent.userGameEventAccumulatedPresents.forEach(item => {
      item.gameEventAccumulatedPresent.rewards.forEach(reward => {
        transName(reward.content, "name");
      });
    });
  };

  const selectLoginBonus = data => {
    data.rewards.forEach(reward => {
      transName(reward.content, "name");
    });
  };

  const produceActiveItem = data => {
    var _data$activeProduceIt;

    data === null || data === void 0 ? void 0 : (_data$activeProduceIt = data.activeProduceItems) === null || _data$activeProduceIt === void 0 ? void 0 : _data$activeProduceIt.forEach(item => {
      transName(item.produceItem, "name");
      transDesc(item.produceItem, "comment");
    });
  };

  const homeProduceActiveItem = data => {
    produceActiveItem(data.userProduce);
  };

  const specialCommuNull = data => {
    data.specialCommunications = []
  };

  const useProduceItem$1 = data => {
    var _data$consumeProduceI;

    const item = (_data$consumeProduceI = data.consumeProduceItem) === null || _data$consumeProduceI === void 0 ? void 0 : _data$consumeProduceI.produceItem;

    if (item) {
      transName(item, "name");
      transDesc(item, "comment");
    }
  };

  const gachaResult = data => {
    var _data$acquiredStampRe;

    (_data$acquiredStampRe = data.acquiredStampRewards) === null || _data$acquiredStampRe === void 0 ? void 0 : _data$acquiredStampRe.forEach(item => {
      transName(item.content, "name");
    });
  };

  const gashaGroups = data => {
    var _data$gashaGroups;

    (_data$gashaGroups = data.gashaGroups) === null || _data$gashaGroups === void 0 ? void 0 : _data$gashaGroups.forEach(group => {
      var _group$userGashaTicke;

      const item = (_group$userGashaTicke = group.userGashaTicket) === null || _group$userGashaTicke === void 0 ? void 0 : _group$userGashaTicke.gashaTicket;
      transName(item, "name");
      transDesc(item, "comment");
    });
  };

  const businessTop = data => {
    var _data$userRecoveryIte;

    (_data$userRecoveryIte = data.userRecoveryItems) === null || _data$userRecoveryIte === void 0 ? void 0 : _data$userRecoveryIte.forEach(item => {
      transName(item.recoveryItem, "name");
    });
  };

  api$9.get([[["userShops", "userIdolPieceShops"], transShopItem], [userItemTypes, transUserItem], [["userPresents\\?limit={num}", "userPresentHistories\\?limit={num}"], transPresentItem], ["userProduces", produceActiveItem], ["missionEvents/{num}/top", transAccumulatedPresent], ["gashaGroups", gashaGroups], ["businessTop", businessTop]]);
  api$9.post([["myPage", [homeProduceActiveItem,specialCommuNull]], ["(produceMarathons|fesMarathons|trainingEvents)/{num}/top", transAccumulatedPresent], ["userShops/actions/purchase", transShopPurchase], ["produces/{num}/actions/ready", transUserItem], ["userPresents/{num}/actions/receive", transReceivePresent], ["userMissions/{num}/actions/receive", transReceiveMission], ["userLoginBonuses", transLoginBonus], ["fesTop", transFesReward], ["userSelectLoginBonuses/{num}", selectLoginBonus], ["gashas/{num}/actions/draw", gachaResult]]);
  api$9.patch([["produces/{num}/produceItem/consume", useProduceItem$1]]);

  const getNounFix = commonStore({
    name: "etc/noun-fix",
    keys: {
      trans: "fixed"
    },
    sort: "text"
  });
  const getCaiyunPrefix = commonStore({
    name: "etc/caiyun-prefix",
    keys: {
      trans: "fixed"
    },
    sort: "text"
  });

  const storyTemp = new Map();
  let commStoryMap = new Map();
  let commStoryLoaded = false;
  let storyIndex = null;

  const getStoryMap = csv => {
    const list = parseCsv(csv);
    const storyMap = new Map();
    const getId = uniqueStoryId();
    list.forEach(item => {
      const id = getId(trim(item.id));
      const text = trimWrap(item.text);
      const trans = trimWrap(item.trans, true);
      const name = trim(item.name);

      if (text && trans) {
        if (id && !/^0+$/.test(id) && id !== "select") {
          storyMap.set(id, tagText(trans));
        } else {
          if (id === "select") {
            storyMap.set(`${text}-select`, tagText(trans));
          } else {
            storyMap.set(text, tagText(trans));
          }
        }
      }

      if (id && name && id === "info") {
        storyMap.set("name", name);
      }
    });
    return storyMap;
  };

  const getStory = async name => {
    if (!storyIndex) {
      let storyIndexStr = await getLocalData("story.json");

      if (!storyIndexStr) {
        const storyIndexData = await fetchWithHash("/story.json");
        storyIndex = new Map(storyIndexData);
        setLocalData("story.json", JSON.stringify(storyIndex));
      } else {
        storyIndex = new Map(JSON.parse(storyIndexStr));
      }
    }

    if (storyIndex.has(name)) {
      if (storyTemp.has(name)) {
        return storyTemp.get(name);
      } else {
        const fileName = storyIndex.get(name);
        const csvStr = await fetchWithHash(`/data/story/${fileName}.csv`);
        const storyMap = getStoryMap(csvStr);
        storyTemp.set(name, storyMap);
        return storyMap;
      }
    }

    return false;
  };

  const getCommStory = async () => {
    if (!commStoryLoaded) {
      const list = await getList("comm-story");
      list.forEach(item => {
        if (item === null || item === void 0 ? void 0 : item.text) {
          const text = trimWrap(item.text);
          const trans = trimWrap(item.trans, true);

          if (text && trans && text !== trans) {
            commStoryMap.set(text, trans);
          }
        }
      });
      commStoryLoaded = true;
    }

    return commStoryMap;
  };

  let typeTextMap = null;
  let loaded = false;
  const getBaseMap = commonStore({
    name: "type-text"
  });

  const getTypeTextMap = async () => {
    if (!loaded) {
      typeTextMap = await getBaseMap(); //    const commStoryMap = await getCommStory()
      //    typeTextMap = new Map([...commStoryMap, ...typeTextMap])

      loaded = true;
    }

    return typeTextMap;
  };

  const request$1 = (url, option) => {
    const {
      method = "GET",
      headers,
      data
    } = option;
    return fetch(url, {
      body: data,
      headers,
      method,
      mode: "cors",
      referrer: "no-referrer"
    }).then(res => res.json());
  };

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // added together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Add = function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
  }; //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // multiplied together as a 64bit int (as an array of two 32bit ints).
  //


  var x64Multiply = function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
  }; //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) rotated left by that number of positions.
  //


  var x64Rotl = function (m, n) {
    n %= 64;

    if (n === 32) {
      return [m[1], m[0]];
    } else if (n < 32) {
      return [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n];
    } else {
      n -= 32;
      return [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n];
    }
  }; //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) shifted left by that number of positions.
  //


  var x64LeftShift = function (m, n) {
    n %= 64;

    if (n === 0) {
      return m;
    } else if (n < 32) {
      return [m[0] << n | m[1] >>> 32 - n, m[1] << n];
    } else {
      return [m[1] << n - 32, 0];
    }
  }; //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // xored together as a 64bit int (as an array of two 32bit ints).
  //


  var x64Xor = function (m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]];
  }; //
  // Given a block, returns murmurHash3's final x64 mix of that block.
  // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
  // only place where we need to right shift 64bit ints.)
  //


  var x64Fmix = function (h) {
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    return h;
  }; //
  // Given a string and an optional seed as an int, returns a 128 bit
  // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
  //


  var x64hash128 = function (key, seed) {
    key = key || "";
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [0x87c37b91, 0x114253d5];
    var c2 = [0x4cf5ad43, 0x2745937f];

    for (var i = 0; i < bytes; i = i + 16) {
      k1 = [key.charCodeAt(i + 4) & 0xff | (key.charCodeAt(i + 5) & 0xff) << 8 | (key.charCodeAt(i + 6) & 0xff) << 16 | (key.charCodeAt(i + 7) & 0xff) << 24, key.charCodeAt(i) & 0xff | (key.charCodeAt(i + 1) & 0xff) << 8 | (key.charCodeAt(i + 2) & 0xff) << 16 | (key.charCodeAt(i + 3) & 0xff) << 24];
      k2 = [key.charCodeAt(i + 12) & 0xff | (key.charCodeAt(i + 13) & 0xff) << 8 | (key.charCodeAt(i + 14) & 0xff) << 16 | (key.charCodeAt(i + 15) & 0xff) << 24, key.charCodeAt(i + 8) & 0xff | (key.charCodeAt(i + 9) & 0xff) << 8 | (key.charCodeAt(i + 10) & 0xff) << 16 | (key.charCodeAt(i + 11) & 0xff) << 24];
      k1 = x64Multiply(k1, c1);
      k1 = x64Rotl(k1, 31);
      k1 = x64Multiply(k1, c2);
      h1 = x64Xor(h1, k1);
      h1 = x64Rotl(h1, 27);
      h1 = x64Add(h1, h2);
      h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
      k2 = x64Multiply(k2, c2);
      k2 = x64Rotl(k2, 33);
      k2 = x64Multiply(k2, c1);
      h2 = x64Xor(h2, k2);
      h2 = x64Rotl(h2, 31);
      h2 = x64Add(h2, h1);
      h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
    }

    k1 = [0, 0];
    k2 = [0, 0];

    switch (remainder) {
      case 15:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
      // fallthrough

      case 14:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
      // fallthrough

      case 13:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
      // fallthrough

      case 12:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
      // fallthrough

      case 11:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
      // fallthrough

      case 10:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
      // fallthrough

      case 9:
        k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
        k2 = x64Multiply(k2, c2);
        k2 = x64Rotl(k2, 33);
        k2 = x64Multiply(k2, c1);
        h2 = x64Xor(h2, k2);
      // fallthrough

      case 8:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
      // fallthrough

      case 7:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
      // fallthrough

      case 6:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
      // fallthrough

      case 5:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
      // fallthrough

      case 4:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
      // fallthrough

      case 3:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
      // fallthrough

      case 2:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
      // fallthrough

      case 1:
        k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
        k1 = x64Multiply(k1, c1);
        k1 = x64Rotl(k1, 31);
        k1 = x64Multiply(k1, c2);
        h1 = x64Xor(h1, k1);
      // fallthrough
    }

    h1 = x64Xor(h1, [0, key.length]);
    h2 = x64Xor(h2, [0, key.length]);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    h1 = x64Fmix(h1);
    h2 = x64Fmix(h2);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
  };

  let bid = "";

  const setBid = () => {
    let str = "0123456789abcdefghijklmnopqrstuvwxyz";
    let text = "";

    for (let i = 0; i < 33; i++) {
      text += str[Math.floor(Math.random() * str.length)];
    }

    bid = x64hash128(text, 31);
    localStorage.setItem("sczh:bid", bid);
  };

  try {
    bid = localStorage.getItem("sczh:bid");
  } catch (e) {}

  if (!bid) {
    setBid();
  }

  var has = Object.prototype.hasOwnProperty;
  var isArray$1 = Array.isArray;

  var hexTable = (function () {
      var array = [];
      for (var i = 0; i < 256; ++i) {
          array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
      }

      return array;
  }());

  var compactQueue = function compactQueue(queue) {
      while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];

          if (isArray$1(obj)) {
              var compacted = [];

              for (var j = 0; j < obj.length; ++j) {
                  if (typeof obj[j] !== 'undefined') {
                      compacted.push(obj[j]);
                  }
              }

              item.obj[item.prop] = compacted;
          }
      }
  };

  var arrayToObject = function arrayToObject(source, options) {
      var obj = options && options.plainObjects ? Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== 'undefined') {
              obj[i] = source[i];
          }
      }

      return obj;
  };

  var merge = function merge(target, source, options) {
      /* eslint no-param-reassign: 0 */
      if (!source) {
          return target;
      }

      if (typeof source !== 'object') {
          if (isArray$1(target)) {
              target.push(source);
          } else if (target && typeof target === 'object') {
              if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                  target[source] = true;
              }
          } else {
              return [target, source];
          }

          return target;
      }

      if (!target || typeof target !== 'object') {
          return [target].concat(source);
      }

      var mergeTarget = target;
      if (isArray$1(target) && !isArray$1(source)) {
          mergeTarget = arrayToObject(target, options);
      }

      if (isArray$1(target) && isArray$1(source)) {
          source.forEach(function (item, i) {
              if (has.call(target, i)) {
                  var targetItem = target[i];
                  if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                      target[i] = merge(targetItem, item, options);
                  } else {
                      target.push(item);
                  }
              } else {
                  target[i] = item;
              }
          });
          return target;
      }

      return Object.keys(source).reduce(function (acc, key) {
          var value = source[key];

          if (has.call(acc, key)) {
              acc[key] = merge(acc[key], value, options);
          } else {
              acc[key] = value;
          }
          return acc;
      }, mergeTarget);
  };

  var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function (acc, key) {
          acc[key] = source[key];
          return acc;
      }, target);
  };

  var decode = function (str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, ' ');
      if (charset === 'iso-8859-1') {
          // unescape never throws, no try...catch needed:
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      // utf-8
      try {
          return decodeURIComponent(strWithoutPlus);
      } catch (e) {
          return strWithoutPlus;
      }
  };

  var encode = function encode(str, defaultEncoder, charset) {
      // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
      // It has been adapted here for stricter adherence to RFC 3986
      if (str.length === 0) {
          return str;
      }

      var string = str;
      if (typeof str === 'symbol') {
          string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== 'string') {
          string = String(str);
      }

      if (charset === 'iso-8859-1') {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
              return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
          });
      }

      var out = '';
      for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);

          if (
              c === 0x2D // -
              || c === 0x2E // .
              || c === 0x5F // _
              || c === 0x7E // ~
              || (c >= 0x30 && c <= 0x39) // 0-9
              || (c >= 0x41 && c <= 0x5A) // a-z
              || (c >= 0x61 && c <= 0x7A) // A-Z
          ) {
              out += string.charAt(i);
              continue;
          }

          if (c < 0x80) {
              out = out + hexTable[c];
              continue;
          }

          if (c < 0x800) {
              out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          if (c < 0xD800 || c >= 0xE000) {
              out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          i += 1;
          c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
          out += hexTable[0xF0 | (c >> 18)]
              + hexTable[0x80 | ((c >> 12) & 0x3F)]
              + hexTable[0x80 | ((c >> 6) & 0x3F)]
              + hexTable[0x80 | (c & 0x3F)];
      }

      return out;
  };

  var compact = function compact(value) {
      var queue = [{ obj: { o: value }, prop: 'o' }];
      var refs = [];

      for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];

          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
              var key = keys[j];
              var val = obj[key];
              if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                  queue.push({ obj: obj, prop: key });
                  refs.push(val);
              }
          }
      }

      compactQueue(queue);

      return value;
  };

  var isRegExp = function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
  };

  var isBuffer = function isBuffer(obj) {
      if (!obj || typeof obj !== 'object') {
          return false;
      }

      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };

  var combine = function combine(a, b) {
      return [].concat(a, b);
  };

  var utils = {
      arrayToObject: arrayToObject,
      assign: assign,
      combine: combine,
      compact: compact,
      decode: decode,
      encode: encode,
      isBuffer: isBuffer,
      isRegExp: isRegExp,
      merge: merge
  };

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;



  var Format = {
      RFC1738: 'RFC1738',
      RFC3986: 'RFC3986'
  };

  var formats = utils.assign(
      {
          'default': Format.RFC3986,
          formatters: {
              RFC1738: function (value) {
                  return replace.call(value, percentTwenties, '+');
              },
              RFC3986: function (value) {
                  return String(value);
              }
          }
      },
      Format
  );

  var toISO = Date.prototype.toISOString;

  var defaultFormat = formats['default'];
  var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: 'utf-8',
      charsetSentinel: false,
      delimiter: '&',
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
          return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
  };

  const slackHooking = async source => {
    const data = {
      text: source
    };

    try {
      const slackhook1 = "https://hooks.sla";
      const slackhook2 = "ck.com/services/TN6J76CUB/BNJ2";
      const slackhook3 = "YLNR3/baGxj31D5YxNhL2Q9FcbzaTA";
      const slackhook = slackhook1 + slackhook2 + slackhook3;
      const res = await request$1(slackhook, {
        data: JSON.stringify(data),
        method: "POST",
        headers: {
          accept: "*/*",
          referer: "https://hooks.slack.com",
          origin: "https://hooks.slack.com"
        }
      });
      return "";
    } catch (err) {
      return "";
    }
  };

  const textKeys = ["text", "select", "comment", "title", "actionComment", "actionComment2", "reactionComment", "resultLoseComment", "resultStartComment", "resultWinComment", "characterComment", "producerComment", "comment1", "comment2"];
  const textKeys2 = ["mainText", "resultText", "name"];

  const collectText = (data, typeTextMap) => {
    const textInfo = [];
    const textList = [];
    data.forEach((item, index) => {
      textKeys.forEach(key => {
        let text = fixWrap(item[key]);

        if (item[key]) {
          if (typeTextMap.has(text)) {
            item[key] = tagText(typeTextMap.get(text));
          } else {
            textInfo.push({
              key,
              index
            });
            textList.push(text);
          }
        }
      });
    });
    return {
      textInfo,
      textList
    };
  };

  const collectFesTowerText = (data, commStoryMap) => {
    const textInfo = [];
    const textList = [];
    data.forEach((item, index) => {
      textKeys2.forEach(key => {
        let text = fixWrap(item[key]);

        if (item[key]) {
          if (commStoryMap.has(text)) {
            item[key] = tagText(commStoryMap.get(text));
          } else {
            textInfo.push({
              key,
              index
            });
            textList.push(text);
          }
        }
      });
    });
    return {
      textInfo,
      textList
    };
  };
  let slackHookingSend = false;
  let slackHookingSend2 = false;

  const autoTrans = async (data, name = "default", printText) => {
    if (!data.length) return;
    const typeTextMap = await getTypeTextMap();
    const commStoryMap = await getCommStory();

    if (printText) {
      const {
        textInfo,
        textList
      } = collectText(data, typeTextMap);
      if (!textInfo.length || textList == "……" || slackHookingSend == true || textList == "…………" || textList == "………………\n……………………\n…………………………" || textInfo.length > 9) return;
      let mergedList = [];
      textList.forEach((text, index) => {
        mergedList.push(replaceWrap(text));
      }); //	    let _log = log
      //	    if (!name || printText) _log = log2
      //	    _log(mergedList.join('\n'))

      const dataparam = mergedList.join("\n");
      const korcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      const duplicatelist = ["…………", "……", "………………\n……………………\n…………………………"];
      const duplicatecheck = [];
      duplicatelist.forEach(sentence => {
        duplicatecheck.push(replaceWrap(sentence));
      });
      if (!korcheck.test(dataparam) && !duplicatecheck.includes(mergedList[0])) await slackHooking(dataparam);
      slackHookingSend = true;
    } else if (name == "FesTower") {
      const {
        textInfo,
        textList
      } = collectFesTowerText(data, commStoryMap);
      if (!textInfo.length || textList == "……" || slackHookingSend == true || slackHookingSend2 == true || textList == "…………" || textList == "………………\n……………………\n…………………………" || textInfo.length > 9) return;
      let mergedList = [];
      textList.forEach((text, index) => {
        mergedList.push("commstory" + replaceWrap(text));
      }); //	    let _log = log
      //	    if (!name || printText) _log = log2
      //	    _log(mergedList.join('\n'))

      const dataparam = mergedList.join("\n");
      const korcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      const duplicatelist = ["…………", "……", "………………\n……………………\n…………………………"];
      const duplicatecheck = [];
      duplicatelist.forEach(sentence => {
        duplicatecheck.push(replaceWrap(sentence));
      });
      if (!korcheck.test(dataparam) && !duplicatecheck.includes(mergedList[0])) await slackHooking(dataparam);
      if (slackHookingSend == true) slackHookingSend2 = true;
      slackHookingSend = true;
    } else {
      const {
        textInfo,
        textList
      } = collectText(data, commStoryMap);
      if (!textInfo.length || textList == "……" || slackHookingSend == true || textList == "…………" || textList == "………………\n……………………\n…………………………" || textInfo.length > 9) return;
      let mergedList = [];
      textList.forEach((text, index) => {
        mergedList.push("commstory" + replaceWrap(text));
      }); //	    let _log = log
      //	    if (!name || printText) _log = log2
      //	    _log(mergedList.join('\n'))

      const dataparam = mergedList.join("\n");
      const korcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      const duplicatelist = ["…………", "……", "………………\n……………………\n…………………………"];
      const duplicatecheck = [];
      duplicatelist.forEach(sentence => {
        duplicatecheck.push(replaceWrap(sentence));
      });
      if (!korcheck.test(dataparam) && !duplicatecheck.includes(mergedList[0])) await slackHooking(dataparam);
      slackHookingSend = true;
    }
  };

  const {
    api: api$a,
    transItem: transItem$9
  } = transApi("mission", ensureData);

  const processReward = (data, key) => {
    let transed = transItem$9(data, key);

    if (!transed) {
      if (key === "name") {
        transName(data, key);
      } else {
        transDesc(data, key);
      }
    }
  };

  let slackHookingPmessageSend = false;

  const transTextList = async list => {
    if (!list) return;
    const unTransList = [];

    for (let i = 0; i < list.length; i++) {
      let txt = list[i];
      transItem$9(list, i);

      if (txt === list[i]) {
        unTransList.push(txt);
      }
    }

    if (unTransList.length && slackHookingPmessageSend == false) {
      try {
        const dataparam = unTransList.join("\nPmessage");
        const korcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        if (!korcheck.test(dataparam)) await slackHooking("Pmessage" + dataparam);
        slackHookingPmessageSend = true;
      } catch (e) {
        log$1(e);
      }
    }
  };

  const processMission = list => {
    list === null || list === void 0 ? void 0 : list.forEach(item => {
      transItem$9(item.mission, "title");
      transItem$9(item.mission, "comment");

      if (item.mission.missionReward.content) {
        processReward(item.mission.missionReward.content, "name");
        processReward(item.mission.missionReward.content, "comment");
      }
    });
  };

  const processRaidMission = list => {
    list.forEach(item => {
      let mission = item.fesRaidAccumulatedReward;
      transItem$9(mission, "title");
      transItem$9(mission, "comment");
      let content = mission.fesRaidAccumulatedRewardContent;

      if (content === null || content === void 0 ? void 0 : content.content) {
        processReward(content.content, "name");
        processReward(content.content, "comment");
      }
    });
  };

  const fullMission = (list, hasReward = true) => {
    list === null || list === void 0 ? void 0 : list.forEach(item => {
      let mission = item.mission || item;
      transItem$9(mission, "title");
      transItem$9(mission, "comment");
      transItem$9(mission, "afterAchievedComment");
      transItem$9(mission, "beforeAchievedComment");

      if (hasReward) {
        let reward = mission.lectureMissionReward;

        if (reward === null || reward === void 0 ? void 0 : reward.content) {
          processReward(reward.content, "name");
          processReward(reward.content, "comment");
        }
      }
    });
  };

  const transMission = data => {
    var _data$eventUserMissio;

    //  const t0 = performance.now();
    processMission(data.dailyUserMissions);
    processMission(data.weeklyUserMissions);
    processMission(data.fesMatchRankingUserMissions);
    (_data$eventUserMissio = data.eventUserMissions) === null || _data$eventUserMissio === void 0 ? void 0 : _data$eventUserMissio.forEach(item => {
      processMission(item === null || item === void 0 ? void 0 : item.userMissions);
    });
    processMission(data.normalUserMissions);
    processMission(data.specialUserMissions); //  const t1 = performance.now();
    //  log(t1 - t0, "milliseconds");
  };

  const reportMission = data => {
    processMission(data.reportUserMissions);
  };

  const beginnerMissionComplete = data => {
    let mission = data.beginnerMission;

    if (mission) {
      if (mission.clearedLectureMission) {
        fullMission([mission.clearedLectureMission]);
      }

      if (mission.progressLectureMission) {
        fullMission([mission.progressLectureMission]);
      }
    }
  };

  const fesRecomMission = data => {
    var _data$userRecommended, _data$userRecommended2;

    transItem$9((_data$userRecommended = data.userRecommendedMission) === null || _data$userRecommended === void 0 ? void 0 : _data$userRecommended.mission, "comment");
    transItem$9((_data$userRecommended2 = data.userRecommendedMission) === null || _data$userRecommended2 === void 0 ? void 0 : _data$userRecommended2.mission, "title");
    data.accumulatedPresent.userGameEventAccumulatedPresents.forEach(item => {
      transItem$9(item.gameEventAccumulatedPresent, "comment");
      transItem$9(item.gameEventAccumulatedPresent, "title");
    });
  };

  const fesRaidMission = data => {
    processRaidMission(data.fesRaidBestScoreRewards);
    processRaidMission(data.fesRaidLapRewards);
    processRaidMission(data.fesRaidPointRewards);
  };

  const teachingMission = data => {
    var _data$teachingHints;

    (_data$teachingHints = data.teachingHints) === null || _data$teachingHints === void 0 ? void 0 : _data$teachingHints.forEach(item => {
      var _item$userProduceHint, _item$userProduceTeac;

      (_item$userProduceHint = item.userProduceHints) === null || _item$userProduceHint === void 0 ? void 0 : _item$userProduceHint.forEach(hint => {
        transItem$9(hint.produceTeachingHint, "title");
      });
      (_item$userProduceTeac = item.userProduceTeachingHints) === null || _item$userProduceTeac === void 0 ? void 0 : _item$userProduceTeac.forEach(hint => {
        transItem$9(hint.produceTeachingHint, "title");
      });
    });
  };

  const beginnerMission = data => {
    fullMission(data.lectureMissions);
  };

  const idolRoadRewards = idol => {
    var _idol$userIdolRoad;

    (_idol$userIdolRoad = idol.userIdolRoad) === null || _idol$userIdolRoad === void 0 ? void 0 : _idol$userIdolRoad.idolRoad.idolRoadRewards.forEach(reward => {
      processReward(reward.content, "name");
      processReward(reward.content, "comment");
    });
  };

  const idolRoadMission = data => {
    var _data$userIdols;

    fullMission(data.userMissions, false);
    (_data$userIdols = data.userIdols) === null || _data$userIdols === void 0 ? void 0 : _data$userIdols.forEach(idolRoadRewards);
  };

  const idolRoadForward = data => {
    idolRoadRewards(data.userIdol);
  };

  const producerDesk = data => {
    var _data$producerDesk;

    transTextList((_data$producerDesk = data.producerDesk) === null || _data$producerDesk === void 0 ? void 0 : _data$producerDesk.messages);
  };

  const producerLevelRewards = data => {
    data.producerLevelRewards.forEach(item => {
      transItem$9(item, "title");
      processReward(item.content, "name");
    });
  };

  const producerProgress = data => {
    data.progresses.forEach(item => {
      transItem$9(item, "comment");
      transItem$9(item, "title");
    });
  };

  const fesMatchRankingMission = data => {
    if (!data) return;
    if (!data.fesMatchRankingMission) return;
    transItem$9(data.fesMatchRankingMission.userMission.mission, "title");
  };

  const transJewelMission = data => {
    var _data$dailyWeeklyUser, _data$fesUserMissions, _data$idolUserMission, _data$otherUserMissio, _data$produceUserMiss, _data$trueEndUserMiss;

    processJewelMission((_data$dailyWeeklyUser = data.dailyWeeklyUserMissions) === null || _data$dailyWeeklyUser === void 0 ? void 0 : _data$dailyWeeklyUser.userMissionsWithCategory);
    processJewelMission((_data$fesUserMissions = data.fesUserMissions) === null || _data$fesUserMissions === void 0 ? void 0 : _data$fesUserMissions.userMissionsWithCategory);
    processJewelMission((_data$idolUserMission = data.idolUserMissions) === null || _data$idolUserMission === void 0 ? void 0 : _data$idolUserMission.userMissionsWithCategory);
    processJewelMission((_data$otherUserMissio = data.otherUserMissions) === null || _data$otherUserMissio === void 0 ? void 0 : _data$otherUserMissio.userMissionsWithCategory);
    processJewelMission((_data$produceUserMiss = data.produceUserMissions) === null || _data$produceUserMiss === void 0 ? void 0 : _data$produceUserMiss.userMissionsWithCategory);
    processJewelMission((_data$trueEndUserMiss = data.trueEndUserMissions) === null || _data$trueEndUserMiss === void 0 ? void 0 : _data$trueEndUserMiss.userMissionsWithCategory);
  };

  const processJewelMission = list => {
    list === null || list === void 0 ? void 0 : list.forEach(item => {
      var _item$userMission, _item$userMission2;

      transItem$9((_item$userMission = item.userMission) === null || _item$userMission === void 0 ? void 0 : _item$userMission.mission, "title");
      transItem$9((_item$userMission2 = item.userMission) === null || _item$userMission2 === void 0 ? void 0 : _item$userMission2.mission, "comment");
    });
  };

  api$a.get([["userMissions", transMission], ["userJewelGettableMissions", transJewelMission], ["fesRaidEvents/{num}/rewards", fesRaidMission], [["userProduces", "userProduceTeachings"], [teachingMission]], ["userBeginnerMissions/top", beginnerMission], ["idolRoads/top", idolRoadMission], ["missionEvents/{num}/top", [fesRecomMission]], ["producerDesk/rewards", producerLevelRewards]]);
  api$a.post([["myPage", [reportMission, beginnerMissionComplete, producerDesk]], ["(produceMarathons|fesMarathons|trainingEvents)/{num}/top", [fesRecomMission]], [["produceTeachings/resume", "produceTeachings/next"], teachingMission], ["userLectureMissions/{num}/actions/receive", beginnerMission], ["fesMatchConcert/actions/finish", [fesMatchRankingMission]], ["producerDesk/top", producerProgress]]);
  api$a.put([["userIdolRoads", idolRoadForward]]);

  const cardnameMap = new Map();
  let loaded$1 = false;

  const getCardname = async () => {
    if (!loaded$1) {
      let csv = await getLocalData("cardname");

      if (!csv) {
        csv = await fetchWithHash("/data/cardname.csv");
        setLocalData("cardname", csv);
      }

      const list = parseCsv(csv);
      list.forEach(item => {
        const name = trim(item.name);
        const trans = trim(item.trans);

        if (name && trans && name !== trans) {
          cardnameMap.set(name, trans);
        }
      });
      loaded$1 = true;
    }

    return cardnameMap;
  };

  const costumenameMap = new Map();
  let loaded$2 = false;

  const getCostumename = async () => {
    if (!loaded$2) {
      let csv = await getLocalData("costumename");

      if (!csv) {
        csv = await fetchWithHash("/data/costumename.csv");
        setLocalData("costumename", csv);
      }

      const list = parseCsv(csv);
      list.forEach(item => {
        const name = trimWrap(item.name);
        const trans = trimWrap(item.trans);

        if (name && trans && name !== trans) {
          costumenameMap.set(name, trans);
        }
      });
      loaded$2 = true;
    }

    return costumenameMap;
  };

  let cardnamePrms;

  const ensureCardname = async () => {
    if (!cardnamePrms) {
      cardnamePrms = getCardname();
    }

    return await cardnamePrms;
  };

  let unknownCardnames = [];

  const collectCardnames = text => {
    if (!text) return;

    let _text = replaceWrap(text);

    if (!unknownCardnames.includes(_text)) {
      unknownCardnames.push(_text);
    }
  };

  let cardAndCostumeNames;

  const getCardAndCostumeNames = async () => {
    if (cardAndCostumeNames) return cardAndCostumeNames;
    let cardNames = await ensureCardname();
    let costumeNames = await getCostumename();
    return cardAndCostumeNames = new Map([...cardNames, ...costumeNames]);
  };

  let win = window.unsafeWindow || window;

  win.printUnknowCardCostumenames = () => log$1(unknownCardnames.join("\n"));

  const transCardname = (e, cardnames) => {
    if (!e || !cardnames || !e.name) return;
    let text = fixWrap(e.name);
    cardnames.has(e.name) && (e.name = tagText(cardnames.get(e.name)));

    if (config.dev && text === e.name) {
      collectCardnames(text);
    }
  };

  const transCardcomment = (e, cardnames) => {
    if (!e || !cardnames || !e.comment) return;
    let text = fixWrap(e.comment);
    cardnames.has(e.comment) && (e.comment = tagText(cardnames.get(e.comment)));

    if (config.dev && text === e.comment) {
      collectCardnames(text);
    }
  };

  const transItem$a = (e, key, map) => {
    const value = e === null || e === void 0 ? void 0 : e[key];
    if (!(value && map)) return;
    let retrievedValue = null;

    if (map.has(value)) {
      retrievedValue = map.get(value);
      e[key] = tagText(retrievedValue);
    }

    if (config.dev) {
      const fixed = fixWrap(value);

      if (value === fixed) {
        collectCardnames(fixed);
      }
    }

    return retrievedValue;
  };

  const transreleasedConditionComment = (e, cardnames) => {
    if (!e || !cardnames || !e.releasedConditionComment) return;
    let text = fixWrap(e.releasedConditionComment);
    cardnames.has(e.releasedConditionComment) && (e.releasedConditionComment = tagText(cardnames.get(e.releasedConditionComment)));

    if (config.dev && text === e.releasedConditionComment) {
      collectCardnames(text);
    }
  };

  const idolcardnames = async e => {
    const cardnames = await ensureCardname();
    e.idol && transCardname(e.idol, cardnames), e.supportIdol && transCardname(e.supportIdol, cardnames), e.userSupportIdol && transCardname(e.userSupportIdol.supportIdol, cardnames), e.userProduceSupportIdols && e.userProduceSupportIdols.forEach(function (e) {
      transCardname(e.userSupportIdol.supportIdol, cardnames);
    }), e.userIdol && transCardname(e.userIdol.idol, cardnames), e.userProduceIdol && transCardname(e.userProduceIdol.userIdol.idol, cardnames), e.userProduce && e.userProduce.userProduceIdol && transCardname(e.userProduce.userProduceIdol.userIdol.idol, cardnames), e.userFesIdol && transCardname(e.userFesIdol.idol, cardnames);
  };

  const idolcardnames2 = async e => {
    const cardcostumenames = await getCardAndCostumeNames();
    e.idolCostumes && e.idolCostumes.forEach(function (e) {
      transCardname(e, cardcostumenames);
      transCardcomment(e, cardcostumenames);
    }), e.userFesDecks && e.userFesDecks.forEach(function (e) {
      e.userFesDeckMembers.forEach(function (e) {
        e.idolCostumes.forEach(function (e) {
          transCardname(e, cardcostumenames);
        });
      });
    });
  };

  const knowHowBooknames = async e => {
    const cardnames = await ensureCardname();
    e.userKnowHowBooks && e.userKnowHowBooks.forEach(function (e) {
      e.idol && transCardname(e.idol, cardnames);
    });
  };

  const deskCostumename = async e => {
    const cardcostumenames = await getCardAndCostumeNames();
    e && e.forEach(function (e) {
      transCardname(e, cardcostumenames);
      transCardcomment(e, cardcostumenames);
      transreleasedConditionComment(e, cardcostumenames);
    });
  };

  const translateCostumeShops = async e => {
    var _e$userShops;

    const costumeNames = await getCostumename();
    if (!costumeNames) return;
    e === null || e === void 0 ? void 0 : (_e$userShops = e.userShops) === null || _e$userShops === void 0 ? void 0 : _e$userShops.filter(shop => (shop === null || shop === void 0 ? void 0 : shop.category) == "skin").forEach(function (shop) {
      var _shop$title, _shop$shopMerchandise;

      const isReprint = shop === null || shop === void 0 ? void 0 : (_shop$title = shop.title) === null || _shop$title === void 0 ? void 0 : _shop$title.startsWith("【復刻】");

      if (isReprint) {
        shop.title = shop.title.substring(4);
      }

      const replacedTitle = transItem$a(shop, "title", costumeNames);

      if (isReprint && replacedTitle) {
        // why replace? there's a font replacement tag (\u200b) that needs to be in the front
        shop.title = shop.title.replace(replacedTitle, `【복각】 ${replacedTitle}`);
      }

      (_shop$shopMerchandise = shop.shopMerchandises) === null || _shop$shopMerchandise === void 0 ? void 0 : _shop$shopMerchandise.forEach(function (merch) {
        var _merch$shopContents, _merch$shopContents$, _merch$shopContents2, _merch$shopContents2$, _merch$shopTitle;

        transItem$a(merch === null || merch === void 0 ? void 0 : (_merch$shopContents = merch.shopContents) === null || _merch$shopContents === void 0 ? void 0 : (_merch$shopContents$ = _merch$shopContents[0]) === null || _merch$shopContents$ === void 0 ? void 0 : _merch$shopContents$.content, "comment", costumeNames);
        transItem$a(merch === null || merch === void 0 ? void 0 : (_merch$shopContents2 = merch.shopContents) === null || _merch$shopContents2 === void 0 ? void 0 : (_merch$shopContents2$ = _merch$shopContents2[0]) === null || _merch$shopContents2$ === void 0 ? void 0 : _merch$shopContents2$.content, "name", costumeNames);

        if (merch === null || merch === void 0 ? void 0 : (_merch$shopTitle = merch.shopTitle) === null || _merch$shopTitle === void 0 ? void 0 : _merch$shopTitle.includes("】\n")) {
          merch.shopTitle = merch.shopTitle.replace("】\n", "】");
          transItem$a(merch, "shopTitle", costumeNames);
          merch.shopTitle = merch.shopTitle.replace(/】 ?/, "】\n");
        }
      });
    });
  };

  const translateTicketExchange = async e => {
    var _e$userShops2;

    const cardNames = await getCardname();
    if (!cardNames) return;
    e === null || e === void 0 ? void 0 : (_e$userShops2 = e.userShops) === null || _e$userShops2 === void 0 ? void 0 : _e$userShops2.filter(shop => (shop === null || shop === void 0 ? void 0 : shop.category) == "ticket_exchange").forEach(function (shop) {
      var _shop$shopMerchandise2;

      shop === null || shop === void 0 ? void 0 : (_shop$shopMerchandise2 = shop.shopMerchandises) === null || _shop$shopMerchandise2 === void 0 ? void 0 : _shop$shopMerchandise2.forEach(function (merch) {
        var _merch$shopContents3, _merch$shopContents3$, _merch$shopTitle2, _merch$shopTitle3;

        transItem$a(merch === null || merch === void 0 ? void 0 : (_merch$shopContents3 = merch.shopContents) === null || _merch$shopContents3 === void 0 ? void 0 : (_merch$shopContents3$ = _merch$shopContents3[0]) === null || _merch$shopContents3$ === void 0 ? void 0 : _merch$shopContents3$.content, "name", cardNames);

        if (merch === null || merch === void 0 ? void 0 : (_merch$shopTitle2 = merch.shopTitle) === null || _merch$shopTitle2 === void 0 ? void 0 : _merch$shopTitle2.includes("】\n")) {
          merch.shopTitle = merch.shopTitle.replace("】\n", "】");
          transItem$a(merch, "shopTitle", cardNames);
          merch.shopTitle = merch.shopTitle.replace(/】 ?/, "】\n");
        } else if (merch === null || merch === void 0 ? void 0 : (_merch$shopTitle3 = merch.shopTitle) === null || _merch$shopTitle3 === void 0 ? void 0 : _merch$shopTitle3.includes("\n")) {
          merch.shopTitle = merch.shopTitle.replace("\n", "");
          transItem$a(merch, "shopTitle", cardNames);
          merch.shopTitle = merch.shopTitle.replace(/】 ?/, "】\n");
        }

        transItem$a(merch, "title", cardNames);
      });
    });
  };

  const translateCostumesOnProduceReady = async e => {
    var _e$userDecks;

    const cardAndCostumeNames = await getCardAndCostumeNames();
    if (!cardAndCostumeNames) return;
    e === null || e === void 0 ? void 0 : (_e$userDecks = e.userDecks) === null || _e$userDecks === void 0 ? void 0 : _e$userDecks.forEach(deck => {
      var _deck$userIdol, _deck$userIdol2, _deck$userIdol2$idolC, _deck$userSupportIdol;

      transItem$a(deck === null || deck === void 0 ? void 0 : (_deck$userIdol = deck.userIdol) === null || _deck$userIdol === void 0 ? void 0 : _deck$userIdol.idolCostume, "name", cardAndCostumeNames);
      deck === null || deck === void 0 ? void 0 : (_deck$userIdol2 = deck.userIdol) === null || _deck$userIdol2 === void 0 ? void 0 : (_deck$userIdol2$idolC = _deck$userIdol2.idolCostumes) === null || _deck$userIdol2$idolC === void 0 ? void 0 : _deck$userIdol2$idolC.forEach(costume => transItem$a(costume, "name", cardAndCostumeNames));
      deck === null || deck === void 0 ? void 0 : (_deck$userSupportIdol = deck.userSupportIdols) === null || _deck$userSupportIdol === void 0 ? void 0 : _deck$userSupportIdol.forEach(support => {
        var _support$idolCostumes;

        transItem$a(support === null || support === void 0 ? void 0 : support.idolCostume, "name", cardAndCostumeNames);
        support === null || support === void 0 ? void 0 : (_support$idolCostumes = support.idolCostumes) === null || _support$idolCostumes === void 0 ? void 0 : _support$idolCostumes.forEach(costume => transItem$a(costume, "name", cardAndCostumeNames));
      });
    });
  };

  router.get([[["userIdols/{num}", "userIdols/statusMax", "produceTeachingIdols/{num}"], idolcardnames], [["userSupportIdols/{num}", "userSupportIdols/statusMax", "produceTeachingSupportIdols/{num}"], idolcardnames], ["userProduce(Teaching)?SupportIdols/{num}", idolcardnames], [["userProduce(Teaching)?Idols/{num}", "userProduceTeachingIdol"], idolcardnames], ["userFesIdols/{num}", idolcardnames], ["userProduces", idolcardnames], ["userReserveIdols/userIdol/{num}", idolcardnames], ["userReserveSupportIdols/userSupportIdol/{num}", idolcardnames], ["userKnowHowBooks", knowHowBooknames], ["producerDesk/costumes", deskCostumename], ["userShops", [translateCostumeShops, translateTicketExchange]]]);
  router.post([[["myPage", "produces/actions/(resume|next)"], idolcardnames]]);
  router.post([["characterAlbums/characters/{num}", [idolcardnames2]], ["produces/actions/result", knowHowBooknames], ["produces/1/actions/ready", translateCostumesOnProduceReady]]);
  router.patch([["userFesDecks", idolcardnames2]]);
  router.put([["userHomeDecks", idolcardnames2]]);

  const textMap = new Map();
  const reMap = new Map();
  const expMap = new Map();
  let loaded$3 = false;

  const getTitle = async () => {
    if (!loaded$3) {
      const list = await getList("title");
      list.forEach(item => {
        if (item === null || item === void 0 ? void 0 : item.text) {
          const text = trimWrap(item.text);
          const trans = trimWrap(item.trans, true);
          const type = trim(item.type) || "text";

          if (text && trans && text !== trans) {
            if (type === "exp") {
              reMap.set(text, trans);
            } else if (type === "text") {
              textMap.set(text, trans);
            }
          }
        }
      });

      for (let [key, value] of reMap) {
        const re = parseRegExp(key);
        expMap.set(re, value);
      }

      loaded$3 = true;
    }

    return {
      textMap,
      expMap
    };
  };

  let titleMaps;
  let nameMap$1;
  let titlePrms;
  let namePrms;

  const ensureTitle = async () => {
    if (!titlePrms) {
      titlePrms = getTitle();
      namePrms = getBaseIdolName();
    }

    if (!titleMaps || !nameMap$1) {
      titleMaps = await titlePrms;
      nameMap$1 = await namePrms;
      titleMaps.wordMaps = [nameMap$1];
    }
  };

  let firstNames;

  const getFirstNames = async () => {
    if (firstNames) return firstNames;
    await ensureTitle();
    const baseIdolNames = nameMap$1;
    let key, value;
    return firstNames = new Map([...baseIdolNames].map(x => ([key, value] = x, [key.split(" ")[1], value.split(" ")[1]])));
  };

  let unknownTitles = [];

  const collectTitles = text => {
    if (!text) return;

    if (!text || /^[\x00-\x7F×『』／☆ⅠⅡⅢⅣⅤⅥⅦＯ①-⑳！？’　…・（）♡＆〈〉]+$/.test(text)) {
      return;
    }

    let _text = replaceWrap(text);

    if (!unknownTitles.includes(_text)) {
      unknownTitles.push(_text);
    }
  };

  let win$1 = window.unsafeWindow || window;

  win$1.printUnknowTitles = () => log$1(unknownTitles.join("\n"));

  const storyTitle = new Map();

  const saveTitle = (id, text) => {
    if (!id || !isString_1(text)) return;
    if (!storyTitle.has(id)) storyTitle.set(id, text);
  };

  const transTitle = (item = {}, key) => {
    let text = item[key];
    replaceItem(item, key, titleMaps);

    if (text === item[key] && config.dev) {
      collectTitles(text);
    }
  };

  const transEvents = events => {
    events.forEach(event => {
      transTitle(event, "name");
      event.communications.forEach(commu => {
        transTitle(commu, "name");
        transTitle(commu, "title");
        saveTitle(commu.id, `${commu.name}-${commu.title}`);
      });
    });
  };

  const albumTopTitle = async data => {
    await ensureTitle();
    transEvents(data.gameEvents);
    transEvents(data.specialEvents);
  };

  const characterAlbumTitle = async data => {
    await ensureTitle();
    const firstNames = await getFirstNames();
    data.firstName = firstNames.get(data.firstName);
    data.albumCommunicationTitles.forEach(item => {
      transTitle(item, "title");
    });
    data.communications.forEach(item => {
      transTitle(item, "title");
      saveTitle(item.communicationId, item.title);
    });
    data.voices.forEach(item => {
      transTitle(item, "title");
      transTitle(item, "releasedConditionComment");
    });
  };

  const userIdolsTitle = async data => {
    await ensureTitle();
    data.idol.produceAfterEvents.forEach(item => {
      transTitle(item, "title");
      saveTitle(item.id, item.title);
    });
    data.idol.produceIdolEvents.forEach(item => {
      transTitle(item, "title");
      saveTitle(item.id, item.title);
    });
  };

  const userSupportIdolsTitle = async data => {
    await ensureTitle();
    data.supportIdol.produceSupportIdolEvents.forEach(item => {
      transTitle(item, "title");
      saveTitle(item.id, item.title);
    });
  };

  const userProduceSupportIdolsTitle = async data => {
    if (data === null || data === void 0 ? void 0 : data.userSupportIdol) await userSupportIdolsTitle(data.userSupportIdol);
  };

  const userProduceIdolsTitle = async data => {
    if (data === null || data === void 0 ? void 0 : data.userIdol) await userIdolsTitle(data.userIdol);
  };

  const marathonTitle = async data => {
    await ensureTitle();
    data.releasedCommunications.forEach(item => {
      transTitle(item, "name");
      transTitle(item, "title");
      saveTitle(item.id, `${item.name}-${item.title}`);
    });
    transTitle(data.gameEvent, "name");
  };

  const pdeskTitle = async data => {
    await ensureTitle();
    transTitle(data.gameEvent, "name");
  };

  const pdeskStory = async data => {
    await ensureTitle();
    transTitle(data.gameEventStory, "description");
  };

  const eventUserMissionsTitle = async data => {
    var _data$eventUserMissio;

    await ensureTitle();
    (_data$eventUserMissio = data.eventUserMissions) === null || _data$eventUserMissio === void 0 ? void 0 : _data$eventUserMissio.forEach(item => {
      transTitle(item === null || item === void 0 ? void 0 : item.gameEvent, "name");
    });
  };

  const transTitleList = async (list, key) => {
    await ensureTitle();
    list.forEach(item => {
      transTitle(item, key);
    });
  };

  const characterPresentSpecialCommunicationEventsTitle = async data => {
    var _data$characterPresen;

    await ensureTitle();
    (_data$characterPresen = data.characterPresentSpecialCommunications) === null || _data$characterPresen === void 0 ? void 0 : _data$characterPresen.forEach(item => {
      var _item$specialCommunic;

      transTitle(item, "title");
      (_item$specialCommunic = item.specialCommunicationReleaseConditions) === null || _item$specialCommunic === void 0 ? void 0 : _item$specialCommunic.forEach(data => {
        transTitle(data === null || data === void 0 ? void 0 : data.content, "name");
      });
    });
  };

  router.get([[["userSupportIdols/{num}", "userSupportIdols/statusMax", "produceTeachingSupportIdols/{num}"], userSupportIdolsTitle], [["userIdols/{num}", "userIdols/statusMax", "produceTeachingIdols/{num}"], userIdolsTitle], [["characterAlbums", "album/top"], albumTopTitle], [["producerDesk/gameEvents/{num}"], [pdeskTitle, pdeskStory]], [["userMissions"], [eventUserMissionsTitle]], [["characterPresentSpecialCommunicationEvents/{num}/top"], [characterPresentSpecialCommunicationEventsTitle]], ["userProduceSupportIdols/{num}", userProduceSupportIdolsTitle], ["userProduceIdols/{num}", userProduceIdolsTitle]]);
  router.post([["characterAlbums/characters/{num}", characterAlbumTitle], ["produceMarathons/{num}/top", marathonTitle]]);

  const produceIdolName = async data => {
    const nameMap = await getIdolName();

    if (data.userProduceIdol) {
      const char = data.userProduceIdol.userIdol.idol.character;

      if (nameMap.has(char.name)) {
        char.name = tagText(nameMap.get(char.name));
      }

      if (nameMap.has(char.firstName)) {
        char.firstName = tagText(nameMap.get(char.firstName));
      }
    }
  };

  const transEvent = event => {
    if (!event) return;
    transTitle(event, "title");
    saveTitle(event.id, event.title);
  };

  const produceEventTitle = async data => {
    var _data$produceEvents, _data$produceConcertE;

    await ensureTitle();
    (_data$produceEvents = data.produceEvents) === null || _data$produceEvents === void 0 ? void 0 : _data$produceEvents.forEach(transEvent);
    (_data$produceConcertE = data.produceConcertEvents) === null || _data$produceConcertE === void 0 ? void 0 : _data$produceConcertE.forEach(transEvent);
  };

  const homeProduceTitle = async data => {
    var _data$userProduce;

    await ensureTitle();
    transTitle(data === null || data === void 0 ? void 0 : (_data$userProduce = data.userProduce) === null || _data$userProduce === void 0 ? void 0 : _data$userProduce.produce, "title");
  };

  const produceAfterEventTitle = async data => {
    await ensureTitle();
    transEvent(data.produceAfterEvent);
  };

  router.post([["myPage", homeProduceTitle], ["produces/actions/(resume|next)", [produceEventTitle, produceIdolName]], [["produces/actions/finish", "produces/actions/act", "produceTeachings/resume", "produces/{num}/audition/actions/finish"], produceEventTitle], ["produces/actions/result", produceAfterEventTitle], ["produces/({num}/audition|concert)/actions/(start|finish)", produceIdolName]]);

  const autoTransText = async (data, key = "comment") => {
    if (!data) return;
    const name = "autoTransText";
    await autoTrans(data, name, true);
  };

  const produceAudition = async data => {
    try {
      if (data.produceAudition) {
        let name = "produceAudition";
        await autoTrans(data.produceAudition.judges, name, true);
      }

      if (data.produceConcert) {
        let name = "produceAudition";
        await autoTrans(data.produceConcert.judges, name, true);
      }

      if (data.produceConcertFanSkillComments) {
        await autoTransText(data.produceConcertFanSkillComments, "comment1");
      }
    } catch (e) {
      log$1(e);
    }
  };

  const fesMatchConcert = async data => {
    if (data.judges) {
      let name = "fesMatchConcert";
      await autoTrans(data.judges, name, true);
    }
  };

  const mypageComments = async data => {
    try {
      let list = [];

      if (data.userHomeDeck.userHomeDeckAnimationMember) {
        list = [...data.userHomeDeck.userHomeDeckAnimationMember.mypageComments];
      }

      let animeMembers = data.userHomeDeck.userHomeAnimationDeck.userHomeAnimationDeckMembers;

      if (animeMembers) {
        animeMembers.forEach(member => {
          member.mypageComments.forEach(comm => {
            list.push(comm);
          });
          member.mypageConversations.forEach(conv => {
            conv.mypageConversationComments.forEach(comm => {
              list.push(comm);
            });
          });
        });
      }

      if (data.userHomeDeck.userHomeDeckMembers.length) {
        data.userHomeDeck.userHomeDeckMembers.forEach(member => {
          member.mypageComments.forEach(comm => {
            list.push(comm);
          });
        });
      }

      await autoTransText(list);
      await transTitleList(list, "speakerName");
    } catch (e) {
      log$1(e);
    }
  };

  const fesDeckReactions = async data => {
    if (!data.userFesDeck) return;

    try {
      let list = [];
      let members = data.userFesDeck.userFesDeckMembers;

      for (let member of members) {
        member.fesTopCharacterReactions.forEach(item => {
          list.push(item);
        });
      }

      await autoTransText(list);
    } catch (e) {
      log$1(e);
    }
  };

  const topCharacterReaction = async data => {
    if (!data.topCharacterReaction) return;

    try {
      const list = [...data.topCharacterReaction.moveReactions, ...data.topCharacterReaction.skillReleasedReactions, ...data.topCharacterReaction.touchExReactions, ...data.topCharacterReaction.touchReactions, ...data.topCharacterReaction.waitReactions];
      await autoTransText(list);
    } catch (e) {
      log$1(e);
    }
  };

  const lessonResult = async data => {
    if (!data.lessonResult) return;
    let lr = data.lessonResult;

    try {
      let list = [];
      if (lr.produceActCutinComment) list = list.concat(lr.produceActCutinComment); // if (lr.produceActIdolComment) list = list.concat(lr.produceActIdolComment)
      // if (lr.produceActSupportIdolComments) list = list.concat(lr.produceActSupportIdolComments)

      if (lr.produceRestBoostIdolComment) list = list.concat(lr.produceRestBoostIdolComment);
      if (lr.produceRestBoostSupportIdolComment) list = list.concat(lr.produceRestBoostSupportIdolComment);
      if (lr.produceRestComments) list = list.concat(lr.produceRestComments);
      await autoTransText(list);
    } catch (e) {
      log$1(e);
    }
  };

  const produceEndWeek$1 = async data => {
    let staff = data.produceStaffComments || [];
    let concert = data.produceStaffConcertComments || [];
    let fail = data.produceStaffFailComments || [];
    let season = data.produceStaffSeasonComments || [];
    let list = [...staff, ...concert, ...fail, ...season];
    await autoTransText(list);
  };

  const resumeGamedata = async data => {
    if (!data.gameData) return;

    try {
      let gData = JSON.parse(data.gameData);

      if (gData.judges) {
        await fesMatchConcert(gData);
      } else {
        await produceAudition(gData);
      }

      data.gameData = JSON.stringify(gData);
    } catch (e) {
      log$1(e);
    }
  };

  const resumeRaidGamedata = async data => {
    if (!data.gameState || !data.gameState.game_data) return;

    try {
      let gData = JSON.parse(data.gameState.game_data);

      if (gData.judges) {
        await fesMatchConcert(gData);
      }

      data.gameState.game_data = JSON.stringify(gData);
    } catch (e) {
      log$1(e);
    }
  };

  const characterComment = async data => {
    if (!data.characterComment) return;
    let list = [];
    list = list.concat(data.characterComment);
    await autoTransText(list);
  };

  const helperSupportIdols = async data => {
    try {
      let name = "helperSupportIdols";
      await autoTrans([data], name, true);
    } catch (e) {
      log$1(e);
    }
  };

  const produceReporterAnswer = async data => {
    try {
      var _data$produceReporter;

      await autoTransText((_data$produceReporter = data.produceReporterEvent) === null || _data$produceReporter === void 0 ? void 0 : _data$produceReporter.produceReporterEventAnswers, "comment2");
    } catch (e) {
      log$1(e);
    }
  };

  const trustLevelUp = async data => {
    try {
      let list = data.characterTrustLevelUpComments;
      await autoTransText(list);
    } catch (e) {
      log$1(e);
    }
  };

  const fesTowerEventTopCharacterReaction = async data => {
    if (!data.userFesTowerEventTopIdols) return;

    try {
      let list = [];
      data.userFesTowerEventTopIdols.forEach(item => {
        list.push(item.fesTowerEventTopCharacterReaction);
      });
      await autoTransText(list);
    } catch (e) {
      log$1(e);
    }
  }; //festours 번역 임의 추가 22.01.02


  const transFesTowerPanels = async data => {
    if (!data) return;

    try {
      let list = [];

      if (data.fesTowerPanelRandom.mainText) {
        list.push(data.fesTowerPanelRandom);
      }

      if (data.fesTowerPanelRandom.fesTowerPanelRandomChoices) {
        data.fesTowerPanelRandom.fesTowerPanelRandomChoices.forEach(choice => {
          if (choice.name) {
            list.push(choice);
          }
        });
      }

      await autoTrans(list, "FesTower", false, true);
    } catch (e) {
      log$1(e);
    }
  };

  const transFesTowerPanelsChoice = async data => {
    if (!data) return;

    try {
      let list = [];

      if (data.fesTowerPanelRandomEffect.resultText) {
        list.push(data.fesTowerPanelRandomEffect);
      }

      await autoTrans(list, "FesTower", false, true);
    } catch (e) {
      log$1(e);
    }
  };

  const transFesTowerPanelHistory = async data => {
    var _data$userFesTowerSta;

    if (!data) return;
    (_data$userFesTowerSta = data.userFesTowerStages) === null || _data$userFesTowerSta === void 0 ? void 0 : _data$userFesTowerSta.forEach(item => {
      if (item.userFesTowerPanelHistory) {
        if (item.userFesTowerPanelHistory.userFesTowerRandomPanelHistory) {
          transFesTowerPanels(item.userFesTowerPanelHistory.userFesTowerRandomPanelHistory);
        }
      }
    });
  };

  const feverComment = async data => {
    var _data$userProduceIdol, _data$userProduceIdol2, _data$userProduceIdol3, _data$userProduceIdol4;

    let list = [];
    list = list.concat(data === null || data === void 0 ? void 0 : (_data$userProduceIdol = data.userProduceIdol) === null || _data$userProduceIdol === void 0 ? void 0 : (_data$userProduceIdol2 = _data$userProduceIdol.userIdol) === null || _data$userProduceIdol2 === void 0 ? void 0 : (_data$userProduceIdol3 = _data$userProduceIdol2.idol) === null || _data$userProduceIdol3 === void 0 ? void 0 : (_data$userProduceIdol4 = _data$userProduceIdol3.character) === null || _data$userProduceIdol4 === void 0 ? void 0 : _data$userProduceIdol4.produceConcertFeverCharacterComment);
    await autoTransText(list);
  };

  router.get([["userProduces", topCharacterReaction], ["fes(Match)?Concert/actions/resume", resumeGamedata] //  ['fesTowerConcert/actions/resume', resumeRaidGamedata],
  ]);
  router.post([["myPage", mypageComments], ["fesTop", fesDeckReactions], ["produces/actions/(resume|next)", [topCharacterReaction, produceEndWeek$1, resumeGamedata, characterComment, produceAudition, produceReporterAnswer]], ["produces/actions/endWeek", produceEndWeek$1], ["produces/actions/act", lessonResult], ["fes(Match|Raid)?Concert/actions/start", fesMatchConcert], ["fes(Match)?Concert/actions/resume", resumeGamedata], ["fesRaidConcert/actions/resume", resumeRaidGamedata], ["fesTowerConcert/actions/start", fesMatchConcert], ["fesTowerConcert/actions/resume", resumeRaidGamedata], ["produces/actions/result", trustLevelUp], ["userFesTowerPanels/{num}/random", transFesTowerPanels], ["userFesTowerPanels/{num}/random/actions/choice", transFesTowerPanelsChoice], ["userFesTowerAreas/{num}", transFesTowerPanelHistory], ["produces/({num}/audition|concert)/actions/(start|finish)", [produceAudition, characterComment]], ["userProduceHelperSupportIdols", helperSupportIdols], ["fesTowerEvents/top", fesTowerEventTopCharacterReaction], ["produces/concert/actions/start", feverComment]]);

  const {
    api: api$b,
    transItem: transItem$b
  } = transApi("etc/idol-filter");

  const transLabel = data => {
    const keys = ["activeSkills", "ideas", "idolArrivalTypes", "knowHowBooks", "supportSkillAttributes", "supportSkillEffects", "fightSkills"];
    keys.forEach(key => {
      var _data$key;

      (_data$key = data[key]) === null || _data$key === void 0 ? void 0 : _data$key.forEach(item => {
        transItem$b(item, "label");
      });
    });
  };

  const filterOptions = data => {
    var _data$businesses, _data$units, _data$produces, _data$characters;

    (_data$businesses = data.businesses) === null || _data$businesses === void 0 ? void 0 : _data$businesses.forEach(item => {
      transItem$b(item, "name");
    });
    (_data$units = data.units) === null || _data$units === void 0 ? void 0 : _data$units.forEach(item => {
      transItem$b(item, "name");
    });
    (_data$produces = data.produces) === null || _data$produces === void 0 ? void 0 : _data$produces.forEach(item => {
      transItem$b(item, "title");
    });
    (_data$characters = data.characters) === null || _data$characters === void 0 ? void 0 : _data$characters.forEach(item => {
      transItem$b(item, "name");
      transItem$b(item, "firstName");
      transItem$b(item.unit, "name");
    });
    transLabel(data);
  };

  api$b.get([["searchPopupContents", filterOptions]]);

  const {
    api: api$c,
    transItem: transItem$c
  } = transApi("etc/help-title");

  const transHelp = data => {
    if (!data) return;
    data.forEach(item => {
      var _item$helpSubGroups;

      transItem$c(item, "title");
      (_item$helpSubGroups = item.helpSubGroups) === null || _item$helpSubGroups === void 0 ? void 0 : _item$helpSubGroups.forEach(subitem => {
        transItem$c(subitem, "title");
      });
    });
  };

  api$c.get([["help", transHelp]]);

  const gashaDrawComment = async data => {
    var _data$gashaDraws;

    const list = [];
    (_data$gashaDraws = data.gashaDraws) === null || _data$gashaDraws === void 0 ? void 0 : _data$gashaDraws.forEach(item => {
      if (item.comment) {
        list.push(item.comment);
      }
    });
    await autoTransText(list);
  };

  const gashaReDrawComment = async data => {
    const list = [];
    data.forEach(item => {
      if (item.comment) {
        list.push(item.comment);
      }
    });
    await autoTransText(list);
  };

  const idolComment = async data => {
    const list = [];
    data.produceIdols.forEach(item => {
      if (item.comment) {
        list.push(item.comment);
      }
    });
    await autoTransText(list);
  };

  router.get("gashas/{num}/redraws", gashaReDrawComment);
  router.post([["characterAlbums/characters/{num}", idolComment], ["gashas/{num}/actions/draw", gashaDrawComment]]);

  const albumTrustLevel = async data => {
    if (data.voices) {
      const list = [];
      data.voices.forEach(item => {
        if (item.characterTrustLevelComment) {
          list.push(item.characterTrustLevelComment);
        }
      });
      await autoTransText(list);
    }
  };

  router.post("characterAlbums/characters/{num}", albumTrustLevel);

  const profileMap = new Map();
  let loaded$4 = false;
  const keys$2 = ["nameKana", "unit", "age", "bloodType", "birthday", "starSign", "height", "weight", "figure", "arm", "place", "hobby", "specialty", "cv"];

  const getProfile = async () => {
    if (!loaded$4) {
      const list = await getList("profile-re");
      list.forEach(item => {
        if (item === null || item === void 0 ? void 0 : item.id) {
          const id = trimWrap(item.id);

          if (id) {
            if (id === "label") {
              const text = trimWrap(item.nameKana);
              const arr = text.split("|");
              profileMap.set(id, new Map(keys$2.map((key, idx) => {
                return [key, tagText(trim(arr[idx]))];
              })));
            } else {
              for (let key in item) {
                item[key] = tagText(trimWrap(item[key]));
              }

              profileMap.set(id, item);
            }
          }
        }
      });
      loaded$4 = true;
    }

    return profileMap;
  };

  const transProfile = async data => {
    const profileMap = await getProfile();
    const textData = profileMap.get(data.id);

    for (let key in textData) {
      if (key !== "id" && data[key]) {
        if (key === "unit") {
          data.unit.name = textData[key];
        } else {
          data[key] = textData[key];
        }
      }
    }
  };

  const albumProfile = async data => {
    await transProfile(data);
  };

  const idolProfile = async data => {
    const chara = data.idol.character;
    await transProfile(chara);
  };

  const sIdolProfile = async data => {
    const chara = data.supportIdol.character;
    await transProfile(chara);
  };

  const fesIdolProfile = async data => {
    const chara = data.userFesIdol.idol.character;
    await transProfile(chara);
  };

  const idolProfiles2 = async data => {
    if (data.beginnerMissionUnits) {
      data.beginnerMissionUnits.forEach(unit => {
        unit.idols.forEach(idol => {
          transProfile(idol.idol.character);
        });
      });
    }

    if (data.units) {
      data.units.forEach(unit => {
        unit.idols.forEach(idol => {
          transProfile(idol.character);
        });
      });
    }
  };

  router.post("characterAlbums/characters/{num}", albumProfile);
  router.get("userIdols/{num}", idolProfile);
  router.get("userSupportIdols/{num}", sIdolProfile);
  router.get("userFesIdols/{num}", fesIdolProfile);
  router.get("userBeginnerMissions/top", idolProfiles2);
  router.get("tutorialIdols", idolProfiles2);

  const phraseMap = new Map();
  let loaded$5 = false;

  const getPhrase = async (full = false) => {
    if (!loaded$5) {
      const list = await getList("phrase");
      list.forEach(item => {
        if (item === null || item === void 0 ? void 0 : item.id) {
          const id = trimWrap(item.id);
          const trans = trimWrap(item.trans, true);

          if (id) {
            if (full) {
              phraseMap.set(id, item.trans);
            } else if (trans) {
              phraseMap.set(id, trans);
            }
          }
        }
      });
      loaded$5 = true;
    }

    return phraseMap;
  };

  let require = null;
  const conditions = new Map([["AOBA", module => {
    return module && module.loaders && module.Text && module.BLEND_MODES;
  }], ["SCENARIO", module => {
    return module && module.default && module.default["load"] && module.default["_errorEvent"] && module.default["_handleError"];
  }], ["PHRASE", module => {
    var _module$default, _module$default$_poly;

    return module === null || module === void 0 ? void 0 : (_module$default = module.default) === null || _module$default === void 0 ? void 0 : (_module$default$_poly = _module$default._polyglot) === null || _module$default$_poly === void 0 ? void 0 : _module$default$_poly.phrases;
  }], ["ENCRYPT", module => {
    var _module$default2;

    return module === null || module === void 0 ? void 0 : (_module$default2 = module.default) === null || _module$default2 === void 0 ? void 0 : _module$default2.decryptResource;
  }]]);
  const resultMap = new Map([["AOBA", module => module], ["SCENARIO", module => module.default], ["PHRASE", module => module.default._polyglot.phrases], ["ENCRYPT", module => module.default]]);

  const isReady = () => {
    return !!require;
  };

  const originFreeze = Object.freeze;
  Object.freeze = new Proxy(originFreeze, {
    apply(target, self, [data]) {
      return data;
    }

  });
  const requireRegExp = /^function\s\w\((\w)\){var\s(\w)=(\w)\[\1\];if\(void\s0!==\2\)return\s\2\.exports;var\s(\w)=\3\[\1\]={id:\1,loaded:!1,exports:{}};return\s\w\[\1\]\.call\(\4\.exports,\4,\4\.exports,\w\),\4\.loaded=!0,\4\.exports}$/;
  const originCall = Function.prototype.call;
  let win$2 = {
    Reflect: window.Reflect
  };
  Function.prototype.call = new Proxy(originCall, {
    apply(target, self, args) {
      var _args$;

      if (args === null || args === void 0 ? void 0 : (_args$ = args[3]) === null || _args$ === void 0 ? void 0 : _args$.toString) {
        if (requireRegExp.test(args[3].toString())) {
          //        if (args[3].caller?.arguments[0]?.length > 1000) {
          //        if (args[3](0).VERSION) {
          //          if (typeof args[3](0).VERSION._version !== "undefined") {
          require = args[3];
          if (ENVIRONMENT === "development") unsafeWindow._require = require;
          Function.prototype.call = originCall; //          }
          //        }
        }
      }

      return win$2.Reflect.apply(target, self, args);
    }

  });
  let OFFSET = 50;

  const setIdList = (id, offset) => {
    let start = id - offset;
    let end = id + offset;
    let list = [];

    for (let i = start; i <= end; i++) {
      if (i >= 0 && i !== id) {
        list.push(i);
      }
    }

    list.unshift(id);
    return list;
  };

  const findModule = (id, conditionFunc) => {
    let idList = setIdList(id, OFFSET);
    let module;
    let realId;

    for (let i = 0; i < idList.length; i++) {
      let _module;

      try {
        _module = require(idList[i]);
      } catch (e) {}

      if (conditionFunc(_module)) {
        module = _module;
        realId = idList[i];
        break;
      }
    }

    return [module, realId];
  };

  const getModule = async name => {
    const {
      moduleId
    } = await getHash;
    let [md, id] = findModule(moduleId[name], conditions.get(name)); // if (!unfreezeflag && name === 'REQUEST') {
    //   md = tryUnfreeze(id)
    // }

    return md ? resultMap.get(name)(md) : null;
  };

  let phraseMap$1 = null;

  const specialKey = ["concert.skill.betweenString", "concert.skill.appealString"];
  async function transPhrase() {
    const obj = await getModule("PHRASE");
    if (!obj) return; // if (ENVIRONMENT === 'development') {
    //   phraseMap = await getPhrase(true)
    //   collectPhrases(obj)
    // }

    phraseMap$1 = await getPhrase();

    for (let [key, value] of phraseMap$1) {
      obj[key] = specialKey.includes(key) ? value : tagText(value);
    }
  }

  let loaded$6 = false;
  let commonMap = null;
  const getBaseMap$1 = commonStore({
    name: "common"
  });

  const getCommMap = async () => {
    if (!loaded$6) {
      commonMap = await getBaseMap$1();
      const nameMap = await getIdolName();
      commonMap = new Map([...nameMap, ...commonMap]);
      loaded$6 = true;
    }

    return commonMap;
  };

  let commMap = new Map();
  let typeTextMap$1 = new Map();
  const typeTextStack = [];

  const setTypeText = text => {
    typeTextStack.push(text);
    if (config.dev && SHOW_UPDATE_TEXT) log$1(typeTextStack);
    setTimeout(() => typeTextStack.shift(), 10000);
  };

  const isTyping = text => {
    let typing = false;
    typeTextStack.forEach(txt => {
      if (txt.startsWith(text)) {
        typing = true;
      }
    });
    return typing;
  };

  const replaceFont = style => {
    if (style && style.fontFamily) {
      if (style.fontFamily === FONT.HEITI_JA) {
        Reflect.set(style, "fontFamily", FONT.HEITI_TRANS);
      } else if (style.fontFamily === FONT.YUAN_JA) {
        Reflect.set(style, "fontFamily", FONT.YUAN_TRANS);
      }
    }
  };

  const restoreFont = style => {
    if (style && style.fontFamily) {
      if (style.fontFamily === FONT.HEITI_TRANS) {
        Reflect.set(style, "fontFamily", FONT.HEITI_JA);
      } else if (style.fontFamily === FONT.YUAN_TRANS) {
        Reflect.set(style, "fontFamily", FONT.YUAN_JA);
      }
    }
  };

  const textInMap = (text, map, style) => {
    let _text = text;
    let key = fixWrap(text);

    if (map.has(key)) {
      _text = "\u200b" + map.get(key);
      replaceFont(style);
    } else if (!text.startsWith("\u200b")) {
      restoreFont(style);
    }

    return _text;
  };

  const fontCheck = (text, style, isType = false) => {
    if (!isString_1(text)) return text;
    let _text = text;

    if (text.startsWith("\u200b")) {
      replaceFont(style);
    } else if (text.trim()) {
      if (isType) {
        _text = textInMap(text, typeTextMap$1, style);

        if (_text === text) {
          setTypeText(text);
        }
      } else if (!isTyping(text) && !text.startsWith("\u200c")) {
        _text = textInMap(text, commMap, style);
      }
    }

    return _text;
  };

  async function watchText() {
    const aoba = await getModule("AOBA");

    try {
      commMap = await getCommMap();
      typeTextMap$1 = await getTypeTextMap();
    } catch (e) {} // watch typeText


    const originTypeText = aoba.Text.prototype.typeText;

    aoba.Text.prototype.typeText = function (...args) {
      const text = args[0];
      if (SHOW_UPDATE_TEXT) log$1("type text", ...args);
      args[0] = fontCheck(text, this.style, true);
      return originTypeText.apply(this, args);
    };

    const originUpdateText = aoba.Text.prototype.updateText;

    aoba.Text.prototype.updateText = function (t) {
      if (this.localStyleID !== this._style.styleID && (this.dirty = !0, this._style.styleID), this.dirty || !t) {
        if (config.dev && SHOW_UPDATE_TEXT) log$1("update text", replaceWrap(this._text));
        const value = fontCheck(this._text, this._style);
        Reflect.set(this, "_text", value);
        return originUpdateText.call(this, t);
      }
    };
  }

  const imageMap = new Map();
  let loaded$7 = false;

  const getImage = async () => {
    if (!loaded$7) {
      const list = await getList("image");
      list.forEach(item => {
        if (item === null || item === void 0 ? void 0 : item.name) {
          const name = trim(item.name);
          const url = trim(item.url);
          const version = trim(item.version) || "1";

          if (name && url) {
            imageMap.set(name, {
              url,
              version
            });
          }
        }
      });
      loaded$7 = true;
    }

    return imageMap;
  };

  const fileMap = new Map();
  let loaded$8 = false;

  const getReplacementFiles = async () => {
    if (!loaded$8) {
      const list = await getList("file-replace");
      list.forEach(item => {
        if (item === null || item === void 0 ? void 0 : item.name) {
          const name = trim(item.name);
          const url = trim(item.url);
          const version = trim(item.version) || "1";

          if (name && url) {
            fileMap.set(name, {
              url,
              version
            });
          }
        }
      });
      loaded$8 = true;
    }

    return fileMap;
  };

  let comicMap = null;

  const getInfo = async () => {
    if (comicMap) return comicMap;

    try {
      const res = await fetch(`https://newbiepr.gitlab.io/shinymaskr.gitlab.io/data/image/comics/4ko.json?t=${Math.floor(Date.now() / (1000 * 60 * 60))}`);
      const list = await res.json();
      comicMap = new Map(list);
    } catch (e) {
      comicMap = new Map();
    }

    return comicMap;
  };

  let promiseObj = null;

  const ensureComicMap = () => {
    if (promiseObj) return promiseObj;
    promiseObj = getInfo();
    return promiseObj;
  };

  const replaceComic = async function (self) {
    if (/^images\/content\/comics\/(web|limited|special)\/page\/[^_]+_\d+\.jpg/.test(self.name)) {
      const id = parseInt(self.name.match(/page\/[^_]+_(\d+)\.jpg/)[1]);
      await ensureComicMap();

      if (comicMap.has(id)) {
        self.url = `https://newbiepr.gitlab.io/shinymaskr.gitlab.io/data/image/comics/4ko/${comicMap.get(id).name}`;
        self.crossOrigin = true;
      }
    }
  };

  const transComicTitle = async data => {
    await ensureComicMap();
    data.comics.forEach(item => {
      const id = parseInt(item.id);

      if (comicMap.has(id)) {
        const title = comicMap.get(id).title;

        if (title) {
          item.title = tagText(title);
        }
      }
    });
  };

  router.get([[["comics"], transComicTitle]]);

  let imageDataPrms = null;

  const ensureImage = async () => {
    if (!imageDataPrms) {
      imageDataPrms = getImage();
    }

    return await imageDataPrms;
  };

  let fileDataPromise = null;

  const ensureFiles = async () => {
    if (!fileDataPromise) {
      fileDataPromise = getReplacementFiles();
    }

    return await fileDataPromise;
  };

  let resName = "";

  const getLocalResName = () => {
    try {
      resName = sessionStorage.getItem("sczh:res-name");
    } catch (e) {}
  };

  getLocalResName();

  const setLocalResName = name => {
    try {
      sessionStorage.setItem("sczh:res-name", name);
    } catch (e) {}
  };

  let win$3 = window.unsafeWindow || window;
  win$3.queryImageName = setLocalResName;
  let replaced = false;
  async function resourceHook() {
    const aoba = await getModule("AOBA");
    const encrypt = await getModule("ENCRYPT");
    if (replaced) return; //  aoba.loaders.Resource.prototype = Object.assign({}, aoba.loaders.Resource.prototype)

    const originLoadElement = aoba.loaders.Resource.prototype._loadElement;

    const newLoadElement = async function (type) {
      if (config.dev && type === "image" && resName && this.url.includes(resName)) {
        log2("%c조회한 이미지：", "color:#66ccff");
        log2(this.url, this.name);
      }

      try {
        const imageMap = await ensureImage();

        if (type === "image") {
          if (imageMap.has(this.name)) {
            const data = imageMap.get(this.name);

            if (this.url.endsWith(`v=${data.version}`)) {
              const imagePath = `image/${data.url}`;
              this.url = `${config.origin}/data/${imagePath}?v=${config.hashes[imagePath]}`;
              this.crossOrigin = true;
            } else {
              log$1("%cimage version not match", "color:#fc4175");
              log$1(this.name, this.url);
            }
          } else if (type === "image" && this.originUrl.includes("idols/name")) {
            log$1("%cidol name display!!", "color:#fc4175");
            log$1(this.name, this.url);
          }

          await replaceComic(this);
        }
      } catch (e) {
        log$1("Error during image substitution: ", e);
      }

      return originLoadElement.call(this, type);
    };

    const originLoadXhr = aoba.loaders.Resource.prototype._loadXhr;

    const newLoadXhr = async function () {
      if (encrypt) {
        try {
          const fileMap = await ensureFiles();

          if (fileMap.has(this.name)) {
            const data = fileMap.get(this.name);

            if (this.url.endsWith(`v=${data.version}`)) {
              const filePath = `file/${data.url}`;
              this.url = `${config.origin}/data/${filePath}?v=${config.hashes[filePath]}`;
            } else {
              log$1("%cfile version not match", "color:#fc4175");
              log$1(this.name, this.url);
            }
          }
        } catch (e) {
          log$1("Error during file substitution: ", e);
        }
      }

      return originLoadXhr.call(this);
    };

    const utf8Decoder = new TextDecoder();
    const originXhrOnLoad = aoba.loaders.Resource.prototype._xhrOnLoad;

    const newXhrOnLoad = async function () {
      if (encrypt) {
        try {
          this.TYPE = {
            UNKNOWN: 0,
            JSON: 1,
            XML: 2,
            IMAGE: 3,
            AUDIO: 4,
            VIDEO: 5,
            TEXT: 6
          };
          const fileMap = await ensureFiles();

          if (fileMap.has(this.name)) {
            const data = fileMap.get(this.name);

            if (this.reqUrl.endsWith(`v=${data.version}`)) {
              // Normally, JSON and text files are encrypted when received,
              // so the onLoad handler decrypts the file during the post-processing step.
              // This obviously isn't the case when the files are swapped resulting in an error.
              // therefore we process the file ourselves here, skipping the decryption step.
              // However, we need to decode the bytes into string manually; this is because in the loadXhr function,
              // responseType for json and text files is overwritten with 'arraybuffer' instead of json and text.
              if (this.xhrType === "json" || this.xhrType === "text") {
                let decoded = utf8Decoder.decode(this.xhr.response);
                this.xhr = new Proxy(this.xhr, {
                  get(target, name, receiver) {
                    if (name === "response") {
                      return decoded;
                    }

                    return target[name] instanceof Function ? Reflect.get(...arguments).bind(target) : target[name];
                  }

                }); //this.xhr.response = decoded

                this.data = this.xhrType === "json" ? JSON.parse(decoded) : decoded;
                this.type = this.xhrType === "json" ? this.TYPE.JSON : this.TYPE.TEXT;
              }

              this.url = this.originUrl, this.complete();
              return;
            }
          }
        } catch (e) {
          log$1("Exception in xhrOnLoad: ", e);
        }
      }

      originXhrOnLoad.call(this);
    };

    if (encrypt) {
      const originDecryptResource = encrypt.decryptResource;

      const newDecryptResource = function (data) {
        // Explaining why this function exists:
        // some parts of code that isn't xhrOnLoad tries to decrypt the response data on their own,
        // even though the data is already decrypted & available as this.data. (e.g. Spine related logics handling Atlas files)
        // This results in an runtime exception in the wasm as you're trying to decrypt already decrypted files.
        // In order to get around this, we replace the response property with the decrypted string if the file is replaced
        // & inject a pre-handler function into decryptResource function so it just returns the string.
        if (typeof data === "string") {
          return data;
        }

        return originDecryptResource(data);
      };

      encrypt.decryptResource = newDecryptResource;
    }

    const Resource = new Proxy(aoba.loaders.Resource, {
      construct(target, args, newtarget) {
        var newObj = Reflect.construct(target, args, newtarget);
        var overrodeObj = new Proxy(newObj, {
          get(target, name, receiver) {
            if (name == "_loadElement") return newLoadElement;else if (name == "_loadXhr") return newLoadXhr;else if (name == "_boundXhrOnLoad") return newXhrOnLoad.bind(target);
            return Reflect.get(target, name, receiver);
          }

        });
        return overrodeObj;
      },

      get(target, name, receiver) {
        return Reflect.get(target, name, receiver);
      }

    });
    Object.defineProperty(aoba.loaders, "Resource", {
      value: Resource
    });
    replaced = true;
  }

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return _root.Date.now();
  };

  var now_1 = now;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  var _trimmedEndIndex = trimmedEndIndex;

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  var _baseTrim = baseTrim;

  /** `Object#toString` result references. */
  var symbolTag$2 = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$2);
  }

  var isSymbol_1 = isSymbol;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol_1(value)) {
      return NAN;
    }
    if (isObject_1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject_1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = _baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber_1(wait) || 0;
    if (isObject_1(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now_1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now_1());
    }

    function debounced() {
      var time = now_1(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  var debounce_1 = debounce;

  const html = `
  <style>
  #sczh-story-tool {
    position: absolute;
    display: none;
    background: #ffffff;
    border-radius: 24px;
    box-sizing: border-box;
    font-family: sczh-yuanti;
    align-items: center;
    justify-content: center;
    color: #ff6499;
    text-shadow: 0 0 6px #fff;
    cursor: pointer;
    user-select: none;
    width: 100px;
    height: 100px;
    font-size: 32px;
    border: 7px solid transparent;
    border-image: url(${config.origin}/data/image/border.png);
    border-image-slice: 7;
    transform-origin: top right;
    transition: opacity 0.3s;
  }
  .story-tool-btns {
    width: 100%;
    height: 100%;
    display: none;
  }
  .story-tool-btns .btn-download-sczh,
  .story-tool-btns label {
    flex: 1;
    height: 100%;
    background: #fff;
    display: flex;
    box-sizing: content-box;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #c0aade;
    text-shadow: 0 0 6px #fff;
  }
  .story-tool-btns .btn-download-sczh:hover {
    color: #9f66ec;
  }
  .story-tool-btns label {
    color: rgb(242, 156, 199);
    border-right: 1px solid #c9c9c9;
  }
  #sczh-story-tool .btn-close-sczh {
    height: 25px;
    width: 50px;
    background: rgba(0, 0, 0, 0.58);
    color: #fff;
    letter-spacing: 2px;
    position: absolute;
    right: -25px;
    top: -20px;
    border-radius: 4px;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1;
    font-family: sczh-heiti;
    font-size: 15px;
  }
  #sczh-story-tool:hover {
    width: 200px;
  }
  #sczh-story-tool:hover .story-tool-btns {
    display: flex;
  }
  #sczh-story-tool:hover .btn-close-sczh {
    display: flex;
  }
  #sczh-story-tool:hover > .text-sczh {
    display: none;
  }
  #sczh-story-tool .btn-close-sczh:hover {
    background: rgba(0, 0, 0, 0.9);
  }
  #sczh-story-tool.blur {
    opacity: 0.2;
  }
  .story-tool-btns label:hover {
    color: #f270b1;
  }
  .story-tool-btns .btn-download-sczh:hover,
  .story-tool-btns label:hover {
    background-color: #f7f7f7;
  }
  </style>
  <div id="sczh-story-tool"><span class="text-sczh">커뮤</span>
    <span id="btn-close-sczh" class="btn-close-sczh">닫기</span>
    <input type="file" style="display:none" id="ipt-preview-sczh" multiple accept=".csv">
    <div class="story-tool-btns">
      <label for="ipt-preview-sczh">실험</label>
      <div id="btn-download-sczh" class="btn-download-sczh">다운</div>
    </div>
  </div>
  `;

  const savePreview = map => {
    const arr = [...map].slice(-PREVIEW_COUNT);
    const newArr = arr.map(item => {
      item[1] = [...item[1]];
      return item;
    });
    sessionStorage.setItem("sczh:preview", JSON.stringify(newArr));
  };

  let showToolFlag = false;

  const showStoryTool = storyCache => {
    if (showToolFlag) return;
    showToolFlag = true;
    document.body.insertAdjacentHTML("beforeend", html);
    const cont = document.getElementById("sczh-story-tool");
    const setToolPos = debounce_1(() => {
      const pos = [0.017, 0.22];
      const height = window.innerHeight;
      const width = window.innerWidth;
      const h_w = height / width;
      let ch = height;
      let cw = width;
      let offsetTop = 0;
      let offsetRight = 0;

      if (h_w > 9 / 16) {
        ch = width * 9 / 16;
        offsetTop = (height - ch) / 2;
      } else {
        cw = height * 16 / 9;
        offsetRight = (width - cw) / 2;
      }

      cont.style.right = Math.floor(offsetRight + pos[0] * cw) + "px";
      cont.style.top = Math.floor(offsetTop + pos[1] * ch) + "px";
      cont.style.transform = `scale(${(ch / 900).toFixed(3)})`; // cont.style.width = Math.floor(size[0] * cw) + 'px'
      // cont.style.height = Math.floor(size[1] * cw) + 'px'
      // cont.style.fontSize = Math.floor(size[1] * cw * 0.35) + 'px'

      if (storyCache.name) {
        cont.style.display = "flex";
      } else {
        cont.style.display = "none";
      }
    }, 300);
    setToolPos();
    window.addEventListener("resize", setToolPos);
    const btnDl = document.getElementById("btn-download-sczh");
    btnDl.addEventListener("click", function () {
      if (storyCache.name) {
        const str = papaparse_min.unparse(storyCache.list);
        tryDownload(str, storyCache.filename);
      }
    });
    const btnClose = document.getElementById("btn-close-sczh");
    btnClose.addEventListener("click", function () {
      cont.style.display = "none";
      config.story = "normal";
      saveConfig();
    });
    const iptPreview = document.getElementById("ipt-preview-sczh");
    iptPreview.addEventListener("change", function () {
      const files = [...this.files];
      if (!files.length) return;
      files.forEach(file => {
        const reader = new FileReader();

        reader.onload = e => {
          const text = e.target.result;
          const storyMap = getStoryMap(text);

          if (storyMap.has("name")) {
            const _name = storyMap.get("name");

            storyCache.preview.set(_name, storyMap);
            savePreview(storyCache.preview);
            alert(`도입${_name}성공`);
          }
        };

        reader.readAsText(file);
      });
    });
    let blurTimer;
    cont.addEventListener("mouseenter", () => {
      clearTimeout(blurTimer);
      cont.classList.remove("blur");
    });

    const contBlur = () => {
      clearTimeout(blurTimer);
      blurTimer = setTimeout(() => {
        cont.classList.add("blur");
      }, 5000);
    };

    cont.addEventListener("mouseleave", contBlur);
    contBlur();
  };

  const iconMap = new Map();
  let loaded$9 = false;

  const getSpeakerIcon = async () => {
    if (!loaded$9) {
      const list = await getList("speaker-icon");
      list.forEach(item => {
        let {
          name,
          id,
          type
        } = item;
        name = trim(name);
        id = trim(id);
        type = trim(type);

        if (name && id) {
          iconMap.set(id, name);
        }
      });
      loaded$9 = true;
    }

    return {
      iconMap
    };
  };

  let namePromise = null;
  let iconMap$1 = new Map();

  const ensureName = async () => {
    if (!namePromise) {
      namePromise = getName();
      iconMap$1 = (await getSpeakerIcon()).iconMap;
    }

    return await namePromise;
  };

  let idolFlag = false;
  let staffFlag = false;

  const checkSpeakerData = (data, type) => {
    var _data$, _data$$, _data$2, _data$2$, _data$4, _data$4$, _data$5, _data$5$;

    if (idolFlag && staffFlag) {
      return false;
    }

    if (type === "idol" && ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : (_data$$ = _data$["002"]) === null || _data$$ === void 0 ? void 0 : _data$$.includes) && ((_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : (_data$2$ = _data$2["002"]) === null || _data$2$ === void 0 ? void 0 : _data$2$.includes("灯織"))) {
      var _data$3, _data$3$;

      idolFlag = true;
      return (_data$3 = data[0]) === null || _data$3 === void 0 ? void 0 : (_data$3$ = _data$3["002"]) === null || _data$3$ === void 0 ? void 0 : _data$3$.includes("灯織");
    } else if (((_data$4 = data[0]) === null || _data$4 === void 0 ? void 0 : (_data$4$ = _data$4[901]) === null || _data$4$ === void 0 ? void 0 : _data$4$.includes) && ((_data$5 = data[0]) === null || _data$5 === void 0 ? void 0 : (_data$5$ = _data$5[901]) === null || _data$5$ === void 0 ? void 0 : _data$5$.includes("はづき"))) {
      var _data$6, _data$6$;

      staffFlag = true;
      return (_data$6 = data[0]) === null || _data$6 === void 0 ? void 0 : (_data$6$ = _data$6[901]) === null || _data$6$ === void 0 ? void 0 : _data$6$.includes("はづき");
    }
  };

  const originObjKeys = Object.keys;
  Object.keys = new Proxy(originObjKeys, {
    apply(target, self, args) {
      if (checkSpeakerData(args, "idol") || checkSpeakerData(args, "staff")) {
        for (let [id, name] of iconMap$1) {
          let _name = tagText(name);

          if (Array.isArray(args[0][id]) && !args[0][id].includes(_name)) {
            args[0][id].push(_name);
          }
        }
      }

      return Reflect.apply(target, self, args);
    }

  });

  const nameWithNum = (name, map) => {
    let text = name;
    let num = "";

    if (/[0-9０-９]$/.test(name)) {
      num = name.match(/([0-9０-９])$/)[1];
      text = name.slice(0, name.length - 1);
    }

    return map.has(text) ? map.get(text) + num : name;
  };

  const splitText = (text, sep, map) => {
    const arr = text.split(sep);

    for (let i = 0; i < arr.length; i++) {
      arr[i] = nameWithNum(arr[i], map);
    }

    return arr.join(sep);
  };

  const transSpeaker = async item => {
    if (item.speaker) {
      const nameMap = await ensureName();
      let text = trim(item.speaker);

      if (nameMap.has(text)) {
        return item.speaker = tagText(nameMap.get(text));
      }

      const sepList = ["＆", "&"];
      sepList.forEach(sep => {
        text = splitText(text, sep, nameMap);
      });

      if (text !== item.speaker) {
        item.speaker = tagText(text);
      }
    }
  };

  const storyCache = {
    name: "",
    filename: "",
    list: "",
    preview: new Map()
  };
  let previewLoaded = false;

  const getPreview = () => {
    if (previewLoaded) return;
    previewLoaded = true;
    const str = sessionStorage.getItem("sczh:preview");
    if (!str) return;

    try {
      const arr = JSON.parse(str);
      const map = new Map(arr);

      for (let [key, value] of map) {
        map.set(key, new Map(value));
      }

      storyCache.preview = map;
    } catch (e) {
      log$1(e);
    }
  };

  const getCid = name => {
    var _res$;

    const res = name.match(/\/(\d+)$/);
    return (_res$ = res === null || res === void 0 ? void 0 : res[1]) !== null && _res$ !== void 0 ? _res$ : "";
  };

  const saveData = (data, name) => {
    const _name = name.replace(".json", "");

    const _cid = getCid(_name);

    let filename = storyTitle.get(_cid) || _name.replace(/\//g, "_");

    filename = filename.replace("\u200b", "");
    const list = [];
    data.forEach(item => {
      let text = trim(replaceWrap(item.text));

      if (text === null || text === void 0 ? void 0 : text.trim()) {
        list.push({
          id: item.id || "0000000000000",
          name: item.speaker || "",
          text,
          trans: ""
        });
      } else if (item.select) {
        list.push({
          id: "select",
          name: "",
          text: trim(replaceWrap(item.select)),
          trans: ""
        });
      }
    });
    list.push({
      id: "info",
      name,
      text: "",
      trans: ""
    });
    list.push({
      id: "번역자",
      name: "",
      text: "",
      trans: ""
    });
    storyCache.name = name;
    storyCache.filename = `${filename}.csv`;
    storyCache.list = list;
  };

  const startTrans = (data, storyMap, commMap) => {
    const getId = uniqueStoryId();
    data.forEach(item => {
      if (item.text) {
        const id = getId(item.id);
        const text = fixWrap(item.text);

        if (id && storyMap.has(`${id}`)) {
          item.text = storyMap.get(`${id}`);
        } else if (storyMap.has(text)) {
          item.text = storyMap.get(text);
        } else if (commMap.has(text)) {
          item.text = tagText(commMap.get(text));
        }
      }

      if (item.select) {
        const select = fixWrap(item.select);
        const sKey = `${select}-select`;

        if (storyMap.has(sKey)) {
          item.select = storyMap.get(sKey);
        } else if (commMap.has(select)) {
          item.select = tagText(commMap.get(item.select));
        }
      }
    });
  };

  const transStory = async () => {
    const scnModule = await getModule("SCENARIO");
    const originLoad = scnModule.load;

    scnModule.load = async function (...args) {
      const res = await originLoad.apply(this, args);
      const type = args[0];
      if (!type) return res;
      if (config.dev && type.includes("/assets/json/")) requestLog("STORY", "#ad37c2", args, res);

      if (type.includes("/produce_events/") || type.includes("/produce_communications/") || type.includes("/produce_communications_promises/") || type.includes("/produce_communication_promise_results/") || type.includes("/support_skills/") || type.includes("/game_event_communications/") || type.includes("/special_communications/") || type.includes("/mypage_communications/") || type.includes("/produce_communication_cheers/") || type.includes("/produce_communication_auditions/") || type.includes("/business_unit_communication/") || type.includes("/produce_communication_televisions/")) {
        try {
          if (!Array.isArray(res)) return res;
          const name = type.replace(/^\/assets\/json\//, "");
          let storyMap;

          if (config.story === "edit") {
            saveData(res, name);
            showStoryTool(storyCache);
          }

          getPreview();

          if (storyCache.preview.has(name)) {
            storyMap = storyCache.preview.get(name);
          } else {
            storyMap = await getStory(name);
          }

          if (storyMap) {
            const commMap = await getCommStory();
            startTrans(res, storyMap, commMap);
          } else {
            await autoTrans(res, name, false, true);
          }

          for (let item of res) {
            await transSpeaker(item);
          }
        } catch (e) {
          log$1(e);
        }
      }

      return res;
    };
  };

  const preload = src => {
    const link = document.createElement("link");
    link.setAttribute("rel", "preload");
    link.setAttribute("href", src);
    link.setAttribute("as", "font");
    link.setAttribute("type", "font/woff2");
    link.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(link);
  };

  const getPath = (name, hashes) => `/data/font/${name}.woff2?v=${hashes[`font/${name}.woff2`]}`;

  const addFont = async () => {
    const tag = document.createElement("style");
    const {
      hashes
    } = await getHash;
    tag.innerHTML = `
  @font-face {
    font-family: "sczh-heiti";
    src: url("${config.origin}${getPath("heiti", hashes)}");
  }
  @font-face {
    font-family: "sczh-yuanti";
    src: url("${config.origin}${getPath("heiti", hashes)}");
  }
  ::-webkit-scrollbar {
    display: none;
  }
  `;

    if (config.font1 === "yuanti") {
      preload(`${config.origin}${getPath("heiti", hashes)}`);
    }

    if (config.font2 === "heiti") {
      preload(`${config.origin}${getPath("heiti", hashes)}`);
    }

    document.head.appendChild(tag);
  };

  const keepBgm = () => {
    window.addEventListener("blur", function (e) {
      if (config.bgm === "on") e.stopImmediatePropagation();
    }, false);
    document.addEventListener("visibilitychange", function (e) {
      if (config.bgm === "on") e.stopImmediatePropagation();
    });
  };

  keepBgm();

  const main = async () => {
    try {
      await Promise.all([resourceHook(), addFont(), transPhrase(), watchText(), transStory()]);
    } catch (e) {
      log$1(e);
    }
  };

  let waitCount = 0;

  const start = async () => {
    if (isReady() || waitCount >= 300) {
      main();
    } else {
      await sleep(100);
      waitCount++;
      if (waitCount % 10 === 0) log$1(`Waiting: ${waitCount / 10}s`);
      await start();
    }
  };

  if (document.readyState != "loading") {
    start();
  } else {
    if (window.unsafeWindow) {
      window.unsafeWindow.addEventListener("DOMContentLoaded", start);
    } else {
      window.addEventListener("DOMContentLoaded", start);
    }
  }

}());
