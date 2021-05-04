/*!
 * @form-create/iview v2.5.0-alpha.2
 * (c) 2018-2021 xaboy
 * Github https://github.com/xaboy/form-create
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = global || self, factory(global.formCreate = {}, global.Vue));
}(this, (function (exports, Vue) { 'use strict';

  Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

  function _extends() {
    return _extends = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends.apply(this, arguments);
  }

  var normalMerge = ["attrs", "props", "domProps"],
      toArrayMerge = ["class", "style", "directives"],
      functionalMerge = ["on", "nativeOn"],
      mergeJsxProps = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper = mergeJsxProps;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var NAME = 'fcCheckbox';
  var Checkbox = {
    name: NAME,
    props: {
      formCreateRule: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      formCreateOptions: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      value: {
        type: Array,
        "default": function _default() {
          return [];
        }
      }
    },
    watch: {
      value: function value() {
        this.update();
      }
    },
    data: function data() {
      return {
        trueValue: []
      };
    },
    methods: {
      onInput: function onInput(n) {
        this.$emit('input', this.formCreateOptions.filter(function (opt) {
          return n.indexOf(opt.label) !== -1;
        }).map(function (opt) {
          return opt.value;
        }).filter(function (v) {
          return v !== undefined;
        }));
      },
      update: function update() {
        var _this = this;

        this.trueValue = this.value ? this.formCreateOptions.filter(function (opt) {
          return _this.value.indexOf(opt.value) !== -1;
        }).map(function (option) {
          return option.label;
        }) : [];
      }
    },
    created: function created() {
      this.update();
    },
    render: function render() {
      var h = arguments[0];
      return h("CheckboxGroup", helper([{}, this.formCreateRule, {
        "attrs": {
          "value": this.trueValue
        },
        "on": {
          "input": this.onInput
        }
      }]), [this.formCreateOptions.map(function (opt, index) {
        var props = _objectSpread2({}, opt);

        delete props.value;
        return h("Checkbox", {
          "props": _objectSpread2({}, props),
          "key": '' + index + opt.value
        });
      }), this.$slots["default"]]);
    }
  };

  function _extends$1() {
    return _extends$1 = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends$1.apply(this, arguments);
  }

  var normalMerge$1 = ["attrs", "props", "domProps"],
      toArrayMerge$1 = ["class", "style", "directives"],
      functionalMerge$1 = ["on", "nativeOn"],
      mergeJsxProps$1 = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge$1.indexOf(b)) c[b] = _extends$1({}, c[b], a[b]);else if (-1 !== toArrayMerge$1.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge$1.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn$1(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn$1 = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper$1 = mergeJsxProps$1;

  function toArray(value) {
    return Array.isArray(value) ? value : [null, undefined, ''].indexOf(value) > -1 ? [] : [value];
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "._fc-frame .fc-upload-btn {\n    border: 1px dashed #c0ccda;\n    cursor: pointer;\n}\n\n._fc-frame .fc-upload-cover {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, .6);\n    transition: opacity .3s;\n}\n\n._fc-frame .fc-upload-cover i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n\n._fc-frame .fc-files:hover .fc-upload-cover {\n    opacity: 1;\n}\n\n._fc-frame .ivu-upload-list {\n    margin-top: 0;\n}\n\n._fc-frame .fc-files img {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n._fc-frame .fc-upload-btn, ._fc-frame .fc-files {\n    display: inline-block;\n    width: 58px;\n    height: 58px;\n    text-align: center;\n    line-height: 58px;\n    border: 1px solid #c0ccda;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    margin-right: 4px;\n    box-sizing: border-box;\n}\n";
  styleInject(css_248z);

  var NAME$1 = 'fcFrame';
  function createFrame(config) {
    return {
      name: NAME$1,
      props: {
        formCreateField: String,
        type: {
          type: String,
          "default": 'input'
        },
        field: String,
        helper: {
          type: Boolean,
          "default": true
        },
        disabled: {
          type: Boolean,
          "default": false
        },
        src: {
          type: String,
          required: true
        },
        icon: {
          type: String,
          "default": config.fileUpIcon
        },
        width: {
          type: [Number, String],
          "default": 500
        },
        height: {
          type: [Number, String],
          "default": 370
        },
        maxLength: {
          type: Number,
          "default": 0
        },
        okBtnText: {
          type: String,
          "default": '确定'
        },
        closeBtnText: {
          type: String,
          "default": '关闭'
        },
        modalTitle: String,
        handleIcon: {
          type: [String, Boolean],
          "default": undefined
        },
        title: String,
        allowRemove: {
          type: Boolean,
          "default": true
        },
        onOpen: {
          type: Function,
          "default": function _default() {}
        },
        onOk: {
          type: Function,
          "default": function _default() {}
        },
        onCancel: {
          type: Function,
          "default": function _default() {}
        },
        onLoad: {
          type: Function,
          "default": function _default() {}
        },
        onBeforeRemove: {
          type: Function,
          "default": function _default() {}
        },
        onRemove: {
          type: Function,
          "default": function _default() {}
        },
        onHandle: {
          type: Function,
          "default": function _default(src) {
            this.previewImage = this.getSrc(src);
            this.previewVisible = true;
          }
        },
        modal: {
          type: Object,
          "default": function _default() {
            return {};
          }
        },
        srcKey: {
          type: [String, Number]
        },
        value: [Array, String, Number, Object],
        previewMask: undefined,
        footer: {
          type: Boolean,
          "default": true
        },
        reload: {
          type: Boolean,
          "default": true
        },
        closeBtn: {
          type: Boolean,
          "default": true
        },
        okBtn: {
          type: Boolean,
          "default": true
        }
      },
      data: function data() {
        return {
          fileList: toArray(this.value),
          previewVisible: false,
          frameVisible: false,
          previewImage: ''
        };
      },
      watch: {
        value: function value(n) {
          this.fileList = toArray(n);
        },
        fileList: function fileList(n) {
          var val = this.maxLength === 1 ? n[0] || '' : n;
          this.$emit('input', val);
          this.$emit('change', val);
        },
        src: function src(n) {
          this.modalVm && (this.modalVm.src = n);
        }
      },
      methods: {
        key: function key(unique) {
          return unique;
        },
        closeModel: function closeModel(close) {
          this.$emit(close ? '$close' : '$ok');

          if (this.reload) {
            this.$off('$ok');
            this.$off('$close');
          }

          this.frameVisible = false;
        },
        showModel: function showModel() {
          if (this.disabled || false === this.onOpen()) return;
          this.frameVisible = true;
        },
        makeInput: function makeInput() {
          var _this = this;

          var h = this.$createElement;
          var props = {
            type: 'text',
            value: this.fileList.map(function (v) {
              return _this.getSrc(v);
            }).toString(),
            icon: this.icon,
            readonly: true,
            clearable: false
          };
          return h("Input", helper$1([{}, {
            "props": props
          }, {}, {
            "on": {
              'on-click': function onClick() {
                return _this.showModel();
              }
            }
          }, {
            "key": this.key('input')
          }]));
        },
        makeGroup: function makeGroup(children) {
          var h = this.$createElement;
          if (!this.maxLength || this.fileList.length < this.maxLength) children.push(this.makeBtn());
          return h("div", {
            "key": this.key('group')
          }, _toConsumableArray(children));
        },
        makeItem: function makeItem(index, children) {
          var h = this.$createElement;
          return h("div", {
            "class": 'fc-files',
            "key": this.key('file' + index)
          }, _toConsumableArray(children));
        },
        valid: function valid(f) {
          var field = this.formCreateField || this.field;
          if (field && f !== field) throw new Error('[frame]无效的字段值');
        },
        makeIcons: function makeIcons(val, index) {
          var h = this.$createElement;

          if (this.handleIcon !== false || this.allowRemove === true) {
            var icons = [];
            if (this.type !== 'file' && this.handleIcon !== false || this.type === 'file' && this.handleIcon) icons.push(this.makeHandleIcon(val, index));
            if (this.allowRemove) icons.push(this.makeRemoveIcon(val, index));
            return h("div", {
              "class": 'fc-upload-cover',
              "key": this.key('uc')
            }, [icons]);
          }
        },
        makeHandleIcon: function makeHandleIcon(val, index) {
          var _this2 = this;

          var h = this.$createElement;
          return h("icon", helper$1([{}, {
            "props": {
              type: this.handleIcon === true || this.handleIcon === undefined ? 'ios-eye-outline' : this.handleIcon
            }
          }, {
            "on": {
              "click": function click() {
                return _this2.handleClick(val);
              }
            },
            "key": this.key('hi' + index)
          }]));
        },
        makeRemoveIcon: function makeRemoveIcon(val, index) {
          var _this3 = this;

          var h = this.$createElement;
          return h("icon", helper$1([{}, {
            "props": {
              type: 'ios-trash-outline'
            }
          }, {
            "on": {
              "click": function click() {
                return _this3.handleRemove(val);
              }
            },
            "key": this.key('ri' + index)
          }]));
        },
        makeFiles: function makeFiles() {
          var _this4 = this;

          var h = this.$createElement;
          return this.makeGroup(this.fileList.map(function (src, index) {
            return _this4.makeItem(index, [h("icon", helper$1([{}, {
              "props": {
                type: config.fileIcon,
                size: 40
              }
            }, {
              "on": {
                "click": function click() {
                  return _this4.handleClick(src);
                }
              }
            }])), _this4.makeIcons(src, index)]);
          }));
        },
        makeImages: function makeImages() {
          var _this5 = this;

          var h = this.$createElement;
          return this.makeGroup(this.fileList.map(function (src, index) {
            return _this5.makeItem(index, [h("img", {
              "attrs": {
                "src": _this5.getSrc(src)
              }
            }), _this5.makeIcons(src, index)]);
          }));
        },
        makeBtn: function makeBtn() {
          var _this6 = this;

          var h = this.$createElement;
          return h("div", {
            "class": 'fc-upload-btn',
            "on": {
              "click": function click() {
                return _this6.showModel();
              }
            },
            "key": this.key('btn')
          }, [h("icon", helper$1([{}, {
            "props": {
              type: this.icon,
              size: 20
            }
          }]))]);
        },
        handleClick: function handleClick(src) {
          if (this.disabled) return;
          return this.onHandle(src);
        },
        handleRemove: function handleRemove(src) {
          if (this.disabled) return;

          if (false !== this.onBeforeRemove(src)) {
            this.fileList.splice(this.fileList.indexOf(src), 1);
            this.onRemove(src);
          }
        },
        getSrc: function getSrc(src) {
          return !this.srcKey ? src : src[this.srcKey];
        },
        frameLoad: function frameLoad(iframe) {
          var _this7 = this;

          this.onLoad(iframe);

          try {
            if (this.helper === true) {
              iframe['form_create_helper'] = {
                close: function close(field) {
                  _this7.valid(field);

                  _this7.closeModel();
                },
                set: function set(field, value) {
                  _this7.valid(field);

                  if (!_this7.disabled) _this7.$emit('input', value);
                },
                get: function get(field) {
                  _this7.valid(field);

                  return _this7.value;
                },
                onOk: function onOk(fn) {
                  return _this7.$on('$ok', fn);
                },
                onClose: function onClose(fn) {
                  return _this7.$on('$close', fn);
                }
              };
            }
          } catch (e) {
            console.log(e);
          }
        },
        makeFooter: function makeFooter() {
          var _this8 = this;

          var h = this.$createElement;
          var _this$$props = this.$props,
              okBtnText = _this$$props.okBtnText,
              closeBtnText = _this$$props.closeBtnText,
              closeBtn = _this$$props.closeBtn,
              okBtn = _this$$props.okBtn,
              footer = _this$$props.footer;
          var node = [];
          if (!footer) return node;
          if (closeBtn) node.push(h("Button", {
            "on": {
              "click": function click() {
                return _this8.onCancel() !== false && _this8.closeModel(true);
              }
            }
          }, [closeBtnText]));
          if (okBtn) node.push(h("Button", {
            "attrs": {
              "type": "primary"
            },
            "on": {
              "click": function click() {
                return _this8.onOk() !== false && _this8.closeModel();
              }
            }
          }, [okBtnText]));
          return node;
        }
      },
      render: function render() {
        var _this9 = this;

        var h = arguments[0];
        var type = this.type;
        var node;
        if (type === 'input') node = this.makeInput();else if (type === 'image') node = this.makeImages();else node = this.makeFiles();
        var _this$$props2 = this.$props,
            width = _this$$props2.width,
            height = _this$$props2.height,
            src = _this$$props2.src,
            title = _this$$props2.title,
            modalTitle = _this$$props2.modalTitle;
        this.$nextTick(function () {
          if (_this9.$refs.frame) {
            _this9.frameLoad(_this9.$refs.frame.contentWindow || {});
          }
        });
        return h("div", {
          "class": "_fc-frame"
        }, [node, h("Modal", {
          "attrs": {
            "mask": this.previewMask,
            "title": modalTitle,
            "footerHide": true
          },
          "model": {
            value: _this9.previewVisible,
            callback: function callback($$v) {
              _this9.previewVisible = $$v;
            }
          }
        }, [h("img", {
          "attrs": {
            "alt": "example",
            "src": this.previewImage
          },
          "style": "width: 100%"
        })]), h("Modal", helper$1([{}, {
          "props": _objectSpread2({
            width: width,
            title: title
          }, this.modal)
        }, {
          "on": {
            "on-cancel": function onCancel() {
              return _this9.closeModel(true);
            }
          },
          "model": {
            value: _this9.frameVisible,
            callback: function callback($$v) {
              _this9.frameVisible = $$v;
            }
          }
        }]), [this.frameVisible || !this.reload ? h("iframe", {
          "ref": "frame",
          "attrs": {
            "src": src,
            "frameBorder": "0"
          },
          "style": {
            'height': height,
            'border': '0 none',
            'width': '100%'
          }
        }) : null, h("div", {
          "slot": "footer"
        }, [this.makeFooter()])])]);
      },
      mounted: function mounted() {
        this.$on('fc.closeModal', this.closeModal);
      }
    };
  }

  var frame = createFrame({
    fileIcon: 'md-document',
    fileUpIcon: 'ios-folder-open'
  });
  frame.v2 = createFrame({
    fileIcon: 'document-text',
    fileUpIcon: 'folder'
  });

  function _extends$2() {
    return _extends$2 = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends$2.apply(this, arguments);
  }

  var normalMerge$2 = ["attrs", "props", "domProps"],
      toArrayMerge$2 = ["class", "style", "directives"],
      functionalMerge$2 = ["on", "nativeOn"],
      mergeJsxProps$2 = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge$2.indexOf(b)) c[b] = _extends$2({}, c[b], a[b]);else if (-1 !== toArrayMerge$2.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge$2.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn$2(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn$2 = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper$2 = mergeJsxProps$2;

  var NAME$2 = 'fcRadio';
  var Radio = {
    name: NAME$2,
    props: {
      formCreateRule: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      formCreateOptions: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      value: {}
    },
    watch: {
      value: function value() {
        this.update();
      }
    },
    data: function data() {
      return {
        trueValue: []
      };
    },
    methods: {
      onInput: function onInput(n) {
        this.$emit('input', this.formCreateOptions.filter(function (opt) {
          return opt.label === n;
        }).reduce(function (initial, opt) {
          return opt.value;
        }, ''));
      },
      update: function update() {
        var _this = this;

        this.trueValue = this.formCreateOptions.filter(function (opt) {
          return opt.value === _this.value;
        }).reduce(function (initial, opt) {
          return opt.label;
        }, '');
      }
    },
    created: function created() {
      this.update();
    },
    render: function render() {
      var h = arguments[0];
      return h("RadioGroup", helper$2([{}, this.formCreateRule, {
        "attrs": {
          "value": this.trueValue
        },
        "on": {
          "input": this.onInput
        }
      }]), [this.formCreateOptions.map(function (opt, index) {
        var props = _objectSpread2({}, opt);

        delete props.value;
        return h("Radio", {
          "props": _objectSpread2({}, props),
          "key": '' + index + opt.value
        });
      }), this.$slots["default"]]);
    }
  };

  function _extends$3() {
    return _extends$3 = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends$3.apply(this, arguments);
  }

  var normalMerge$3 = ["attrs", "props", "domProps"],
      toArrayMerge$3 = ["class", "style", "directives"],
      functionalMerge$3 = ["on", "nativeOn"],
      mergeJsxProps$3 = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge$3.indexOf(b)) c[b] = _extends$3({}, c[b], a[b]);else if (-1 !== toArrayMerge$3.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge$3.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn$3(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn$3 = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper$3 = mergeJsxProps$3;

  var is = {
    type: function type(arg, _type) {
      return Object.prototype.toString.call(arg) === '[object ' + _type + ']';
    },
    Undef: function Undef(v) {
      return v === undefined || v === null;
    },
    Element: function Element(arg) {
      return _typeof(arg) === 'object' && arg !== null && arg.nodeType === 1 && !is.Object(arg);
    },
    trueArray: function trueArray(data) {
      return Array.isArray(data) && data.length > 0;
    }
  };
  ['Date', 'Object', 'Function', 'String', 'Boolean', ' Array', 'Number'].forEach(function (t) {
    is[t] = function (arg) {
      return is.type(arg, t);
    };
  });
  function hasProperty(rule, k) {
    return {}.hasOwnProperty.call(rule, k);
  }

  var NAME$3 = 'fcSelect';
  var Select = {
    name: NAME$3,
    functional: true,
    props: {
      formCreateOptions: {
        type: Array,
        "default": function _default() {
          return [];
        }
      }
    },
    render: function render(h, ctx) {
      return h("Select", helper$3([{}, ctx.data]), [ctx.props.formCreateOptions.map(function (props, index) {
        var slot = props.slot;
        return h("Option", {
          "props": _objectSpread2({}, props),
          "key": '' + index + props.value
        }, [slot ? h("template", {
          "slot": props.slotName || 'default'
        }, [is.Function(slot) ? props.slot(h) : slot]) : null]);
      }), ctx.children]);
    }
  };

  function _extends$4() {
    return _extends$4 = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends$4.apply(this, arguments);
  }

  var normalMerge$4 = ["attrs", "props", "domProps"],
      toArrayMerge$4 = ["class", "style", "directives"],
      functionalMerge$4 = ["on", "nativeOn"],
      mergeJsxProps$4 = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge$4.indexOf(b)) c[b] = _extends$4({}, c[b], a[b]);else if (-1 !== toArrayMerge$4.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge$4.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn$4(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn$4 = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper$4 = mergeJsxProps$4;

  var NAME$4 = 'fcTree';
  var Tree = {
    name: NAME$4,
    props: {
      formCreateRule: {
        type: Object,
        "default": function _default() {
          return {
            props: {}
          };
        }
      },
      type: {
        type: String,
        "default": 'checked'
      },
      value: {
        type: [Array, String, Number],
        "default": function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        treeData: []
      };
    },
    watch: {
      value: function value(n) {
        this.setStatus(n);
      }
    },
    created: function created() {
      this.setStatus(this.value);
    },
    methods: {
      setStatus: function setStatus(value) {
        var n = toArray(value);
        var data = this.formCreateRule.props.data;
        this.type === 'selected' ? this.checked(data, n, 'selected') : this.checked(data, n, 'checked');
        this.$forceUpdate();
      },
      checked: function checked(_data, value, type) {
        var _this = this;

        _data.forEach(function (node) {
          _this.$set(node, type, value.indexOf(node.id) !== -1);

          if (node.children !== undefined && Array.isArray(node.children)) _this.checked(node.children, value, type);
        });
      },
      onInput: function onInput(list) {
        this.$emit('input', list.map(function (node) {
          return node.id;
        }));
      }
    },
    render: function render() {
      var h = arguments[0];
      var on = {};

      if (this.type === 'selected') {
        on['on-select-change'] = this.onInput;
      } else {
        on['on-check-change'] = this.onInput;
      }

      return h("Tree", helper$4([{}, this.formCreateRule, {
        "ref": "tree"
      }, {
        "on": on
      }]), [this.$slots["default"]]);
    },
    mounted: function mounted() {
      this.onInput(this.type === 'selected' ? this.$refs.tree.getSelectedNodes() : this.$refs.tree.getCheckedNodes());
    }
  };

  function _extends$5() {
    return _extends$5 = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends$5.apply(this, arguments);
  }

  var normalMerge$5 = ["attrs", "props", "domProps"],
      toArrayMerge$5 = ["class", "style", "directives"],
      functionalMerge$5 = ["on", "nativeOn"],
      mergeJsxProps$5 = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge$5.indexOf(b)) c[b] = _extends$5({}, c[b], a[b]);else if (-1 !== toArrayMerge$5.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge$5.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn$5(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn$5 = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper$5 = mergeJsxProps$5;

  var css_248z$1 = "._fc-upload .fc-upload-btn {\n    border: 1px dashed #c0ccda;\n    cursor: pointer;\n}\n\n._fc-upload .fc-upload-cover {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, .6);\n    transition: opacity .3s;\n}\n\n._fc-upload .fc-upload-cover i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n\n._fc-upload .fc-files:hover .fc-upload-cover {\n    opacity: 1;\n}\n\n._fc-upload .ivu-upload-list {\n    margin-top: 0;\n}\n\n._fc-upload .fc-files img {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n._fc-upload .fc-upload-btn, ._fc-upload .fc-files {\n    display: inline-block;\n    width: 58px;\n    height: 58px;\n    text-align: center;\n    line-height: 58px;\n    border: 1px solid #c0ccda;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    margin-right: 4px;\n    box-sizing: border-box;\n}\n";
  styleInject(css_248z$1);

  function parseFile(file) {
    return {
      url: file,
      name: getFileName(file)
    };
  }

  function getFileName(file) {
    return ('' + file).split('/').pop();
  }

  var NAME$5 = 'fcUpload';
  function createUpload(config) {
    return {
      name: NAME$5,
      props: {
        formCreateRule: {
          type: Object,
          "default": function _default() {
            return {
              props: {}
            };
          }
        },
        onHandle: {
          type: Function,
          "default": function _default(file) {
            this.previewImage = file.url;
            this.previewVisible = true;
          }
        },
        uploadType: {
          type: String,
          "default": 'file'
        },
        maxLength: {
          type: Number,
          "default": 0
        },
        allowRemove: {
          type: Boolean,
          "default": true
        },
        modalTitle: String,
        handleIcon: {
          type: [String, Boolean],
          "default": function _default() {
            return undefined;
          }
        },
        value: [Array, String]
      },
      data: function data() {
        return {
          uploadList: [],
          previewVisible: false,
          previewImage: ''
        };
      },
      created: function created() {
        if (this.formCreateRule.props.showUploadList === undefined) this.formCreateRule.props.showUploadList = false;
        this.formCreateRule.props.defaultFileList = toArray(this.value).map(parseFile);
      },
      watch: {
        value: function value(n) {
          if (this.$refs.upload.fileList.every(function (file) {
            return !file.status || file.status === 'finished';
          })) {
            this.$refs.upload.fileList = toArray(n).map(parseFile);
            this.uploadList = this.$refs.upload.fileList;
          }
        },
        maxLength: function maxLength(n, o) {
          if (o === 1 || n === 1) this.update();
        }
      },
      methods: {
        key: function key(unique) {
          return unique;
        },
        isDisabled: function isDisabled() {
          return this.formCreateRule.props.disabled === true;
        },
        onRemove: function onRemove(file) {
          if (this.isDisabled()) return;
          this.$refs.upload.handleRemove(file);
        },
        handleClick: function handleClick(file) {
          if (this.isDisabled()) return;
          this.onHandle(file);
        },
        makeItem: function makeItem(file, index) {
          var h = this.$createElement;
          return this.uploadType === 'image' ? h("img", {
            "attrs": {
              "src": file.url
            },
            "key": this.key('img' + index)
          }) : h("icon", helper$5([{}, {
            "props": {
              type: config.fileIcon,
              size: 40
            }
          }, {
            "key": this.key('i' + index)
          }]));
        },
        makeRemoveIcon: function makeRemoveIcon(file, index) {
          var _this = this;

          var h = this.$createElement;
          return h("icon", {
            "attrs": {
              "type": 'ios-trash-outline'
            },
            "on": {
              "click": function click() {
                return _this.onRemove(file);
              }
            },
            "key": this.key('ri' + index)
          });
        },
        makeHandleIcon: function makeHandleIcon(file, index) {
          var _this2 = this;

          var h = this.$createElement;
          return h("icon", {
            "attrs": {
              "type": this.handleIcon === true || this.handleIcon === undefined ? 'ios-eye-outline' : this.handleIcon
            },
            "on": {
              "click": function click() {
                return _this2.handleClick(file);
              }
            },
            "key": this.key('hi' + index)
          });
        },
        makeProgress: function makeProgress(file, index) {
          var h = this.$createElement;
          return h("Progress", helper$5([{}, {
            "props": {
              percent: file.percentage,
              hideInfo: true
            }
          }, {
            "style": "width:90%",
            "key": this.key('pg' + index)
          }]));
        },
        makeIcons: function makeIcons(file, index) {
          var h = this.$createElement;
          var icons = [];

          if (this.allowRemove || this.handleIcon !== false) {
            if (this.uploadType !== 'file' && this.handleIcon !== false || this.uploadType === 'file' && this.handleIcon) icons.push(this.makeHandleIcon(file, index));
            if (this.allowRemove) icons.push(this.makeRemoveIcon(file, index));
            return h("div", {
              "class": "fc-upload-cover"
            }, [icons]);
          }
        },
        makeFiles: function makeFiles() {
          var _this3 = this;

          var h = this.$createElement;
          return this.uploadList.map(function (file, index) {
            return _this3.$scopedSlots.fileList ? _this3.$scopedSlots.fileList({
              file: file,
              index: index,
              vm: _this3
            }) : h("div", {
              "key": _this3.key(index),
              "class": "fc-files"
            }, [file.showProgress ? _this3.makeProgress(file, index) : [_this3.makeItem(file, index), _this3.makeIcons(file, index)]]);
          });
        },
        makeUpload: function makeUpload() {
          var h = this.$createElement;
          var isShow = !this.maxLength || this.maxLength > this.uploadList.length;
          return h("Upload", helper$5([{}, this.formCreateRule, {
            "ref": "upload",
            "style": {
              display: 'inline-block'
            },
            "key": this.key('upload')
          }]), [isShow ? h("template", {
            "slot": "default"
          }, [this.$slots["default"] ? this.$slots["default"] : h("div", {
            "class": "fc-upload-btn"
          }, [h("icon", helper$5([{}, {
            "props": {
              type: this.uploadType === 'file' ? 'ios-cloud-upload-outline' : config.imgUpIcon,
              size: 20
            }
          }]))])]) : null]);
        },
        update: function update() {
          var files = this.$refs.upload.fileList.map(function (file) {
            return file.url;
          }).filter(function (url) {
            return url !== undefined;
          });
          this.$emit('input', this.maxLength === 1 ? files[0] || '' : files);
        },
        handleCancel: function handleCancel() {
          this.previewVisible = false;
        }
      },
      render: function render() {
        var _this4 = this;

        var h = arguments[0];

        if (this.$refs.upload) {
          if (this.formCreateRule.props.showUploadList === undefined) this.formCreateRule.props.showUploadList = this.$refs.upload.showUploadList;
          this.formCreateRule.props.defaultFileList = this.$refs.upload.defaultFileList;
        }

        return h("div", {
          "class": "_fc-upload"
        }, [[this.formCreateRule.props.showUploadList ? [] : this.makeFiles(), this.makeUpload()], h("Modal", {
          "attrs": {
            "title": this.modalTitle,
            "footerHide": true
          },
          "model": {
            value: _this4.previewVisible,
            callback: function callback($$v) {
              _this4.previewVisible = $$v;
            }
          }
        }, [h("img", {
          "attrs": {
            "alt": "example",
            "src": this.previewImage
          },
          "style": "width: 100%"
        })])]);
      },
      mounted: function mounted() {
        var _this5 = this;

        this.uploadList = this.$refs.upload.fileList;
        this.$watch(function () {
          return _this5.$refs.upload.fileList;
        }, function () {
          _this5.update();
        }, {
          deep: true
        });
      }
    };
  }

  var upload = createUpload({
    fileIcon: 'md-document',
    imgUpIcon: 'md-images'
  });
  upload.v2 = createUpload({
    fileIcon: 'document-text',
    imgUpIcon: 'image'
  });

  function _extends$6() {
    return _extends$6 = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends$6.apply(this, arguments);
  }

  var normalMerge$6 = ["attrs", "props", "domProps"],
      toArrayMerge$6 = ["class", "style", "directives"],
      functionalMerge$6 = ["on", "nativeOn"],
      mergeJsxProps$6 = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge$6.indexOf(b)) c[b] = _extends$6({}, c[b], a[b]);else if (-1 !== toArrayMerge$6.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge$6.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn$6(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn$6 = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper$6 = mergeJsxProps$6;

  var NAME$6 = 'fcGroup';
  function createGroup(config) {
    return {
      name: NAME$6,
      props: {
        field: String,
        rule: Object,
        rules: Array,
        expand: Number,
        options: Object,
        formCreate: Object,
        button: {
          type: Boolean,
          "default": true
        },
        max: {
          type: Number,
          "default": 0
        },
        min: {
          type: Number,
          "default": 0
        },
        value: {
          type: Array,
          "default": function _default() {
            return [];
          }
        },
        disabled: {
          type: Boolean,
          "default": false
        },
        fontSize: {
          type: Number,
          "default": 28
        }
      },
      data: function data() {
        return {
          len: 0,
          cacheRule: {},
          cacheValue: {}
        };
      },
      computed: {
        formRule: function formRule() {
          if (this.rule) {
            return [this.rule];
          }

          if (this.rules) {
            return this.rules;
          }

          return [];
        }
      },
      watch: {
        disabled: function disabled(n) {
          var lst = this.cacheRule;
          Object.keys(lst).forEach(function (k) {
            lst[k].$f.disabled(n);
          });
        },
        expand: function expand(n) {
          var d = n - this.value.length;

          if (d > 0) {
            this.expandRule(d);
          }
        },
        value: function value(n) {
          var _this = this;

          n = n || [];
          var keys = Object.keys(this.cacheRule),
              total = keys.length,
              len = total - n.length;

          if (len < 0) {
            for (var i = len; i < 0; i++) {
              this.addRule(n.length + i);
            }

            for (var _i = 0; _i < total; _i++) {
              this.setValue(keys[_i], n[_i]);
            }
          } else {
            if (len > 0) {
              for (var _i2 = 0; _i2 < len; _i2++) {
                this.removeRule(keys[total - _i2 - 1]);
              }

              this.subForm();
            }

            n.forEach(function (val, i) {
              _this.setValue(keys[i], n[i]);
            });
          }
        }
      },
      methods: {
        _value: function _value(v) {
          return v && hasProperty(v, this.field) ? v[this.field] : v;
        },
        cache: function cache(k, val) {
          this.cacheValue[k] = JSON.stringify(val);
        },
        input: function input(value) {
          this.$emit('input', value);
          this.$emit('change', value);
        },
        formData: function formData(key, _formData) {
          var _this2 = this;

          var cacheRule = this.cacheRule;
          var keys = Object.keys(cacheRule);

          if (keys.filter(function (k) {
            return cacheRule[k].$f;
          }).length !== keys.length) {
            return;
          }

          var value = keys.map(function (k) {
            var data = key === k ? _formData : _objectSpread2({}, _this2.cacheRule[k].$f.form);
            var value = _this2.field ? data[_this2.field] || null : data;

            _this2.cache(k, value);

            return value;
          });
          this.input(value);
        },
        setValue: function setValue(key, value) {
          var field = this.field,
              $f = this.cacheRule[key].$f;

          if (field) {
            value = _defineProperty({}, field, this._value(value));
          }

          if (this.cacheValue[key] === JSON.stringify(field ? value[field] : value)) {
            return;
          }

          this.cache(key, value);
          $f.coverValue(value || {});
        },
        addRule: function addRule(i, emit) {
          var _this3 = this;

          var rule = this.$formCreate.copyRules(this.formRule);
          var options = this.options ? this.options : {
            submitBtn: false,
            resetBtn: false,
            page: false,
            formData: this.field ? _defineProperty({}, this.field, this._value(this.value[i])) : this.value[i] || {}
          };
          this.$set(this.cacheRule, ++this.len, {
            rule: rule,
            options: options
          });

          if (emit) {
            this.$nextTick(function () {
              return _this3.$emit('add', rule, Object.keys(_this3.cacheRule).length - 1);
            });
          }
        },
        add$f: function add$f(i, key, $f) {
          this.cacheRule[key].$f = $f;
          this.subForm();
          this.$emit('itemMounted', $f, Object.keys(this.cacheRule).indexOf(key));
        },
        subForm: function subForm() {
          var _this4 = this;

          this.$emit('fc.sub-form', Object.keys(this.cacheRule).map(function (k) {
            return _this4.cacheRule[k].$f;
          }));
        },
        removeRule: function removeRule(key, emit) {
          var _this5 = this;

          var index = Object.keys(this.cacheRule).indexOf(key);
          this.$delete(this.cacheRule, key);
          this.$delete(this.cacheValue, key);

          if (emit) {
            this.$nextTick(function () {
              return _this5.$emit('remove', index);
            });
          }
        },
        add: function add(i) {
          !this.disabled && this.addRule(i, true);
        },
        del: function del(index, key) {
          if (this.disabled) {
            return;
          }

          this.removeRule(key, true);
          this.subForm();
          this.value.splice(index, 1);
          this.input(this.value);
        },
        addIcon: function addIcon(key) {
          var h = this.$createElement;
          return h("Icon", {
            "key": "a".concat(key),
            "attrs": {
              "type": config.addIcon
            },
            "style": "font-size:".concat(this.fontSize, "px;cursor:").concat(this.disabled ? 'not-allowed;color:#c9cdd4' : 'pointer;color:#000'),
            "on": {
              "click": this.add
            }
          });
        },
        delIcon: function delIcon(index, key) {
          var _this6 = this;

          var h = this.$createElement;
          return h("Icon", {
            "key": "d".concat(key),
            "attrs": {
              "type": config.removeIcon
            },
            "style": "font-size:".concat(this.fontSize, "px;cursor:").concat(this.disabled ? 'not-allowed;color:#c9cdd4' : 'pointer', ";"),
            "on": {
              "click": function click() {
                return _this6.del(index, key);
              }
            }
          });
        },
        makeIcon: function makeIcon(total, index, key) {
          var _this7 = this;

          if (this.$scopedSlots.button) {
            return this.$scopedSlots.button({
              total: total,
              index: index,
              vm: this,
              key: key,
              del: function del() {
                return _this7.del(index, key);
              },
              add: this.add
            });
          }

          if (index === 0) {
            return [this.max !== 0 && total >= this.max ? null : this.addIcon(key), this.min === 0 || total > this.min ? this.delIcon(index, key) : null];
          }

          if (index >= this.min) {
            return this.delIcon(index, key);
          }
        },
        emitEvent: function emitEvent(name, args, index, key) {
          this.$emit.apply(this, [name].concat(_toConsumableArray(args), [this.cacheRule[key].$f, index]));
        },
        expandRule: function expandRule(n) {
          for (var i = 0; i < n; i++) {
            this.value.push(this.field ? null : {});
          }
        }
      },
      created: function created() {
        var d = (this.expand || 0) - this.value.length;

        if (d > 0) {
          this.expandRule(d);
        }

        for (var i = 0; i < this.value.length; i++) {
          this.addRule(i);
        }
      },
      render: function render() {
        var _this8 = this;

        var h = arguments[0];
        var keys = Object.keys(this.cacheRule);
        var button = this.button;
        return keys.length === 0 ? this.$scopedSlots["default"] ? this.$scopedSlots["default"]({
          vm: this,
          add: this.add
        }) : h("Icon", {
          "key": 'a_def',
          "attrs": {
            "type": config.addIcon
          },
          "style": "font-size:".concat(this.fontSize, "px;vertical-align:middle;cursor:").concat(this.disabled ? 'not-allowed;color:#c9cdd4' : 'pointer', ";"),
          "on": {
            "click": this.add
          }
        }) : h("div", {
          "key": 'con'
        }, [keys.map(function (key, index) {
          var _this8$cacheRule$key = _this8.cacheRule[key],
              rule = _this8$cacheRule$key.rule,
              options = _this8$cacheRule$key.options;
          return h("Row", {
            "attrs": {
              "align": "middle",
              "type": "flex"
            },
            "key": key,
            "style": "border-bottom:1px dashed #dcdee2;margin-bottom:10px;"
          }, [h("Col", {
            "attrs": {
              "span": button ? 20 : 24
            }
          }, [h("FormItem", [h("FormCreate", helper$6([{
            "key": key
          }, {
            "on": {
              'update:value': function updateValue(formData) {
                return _this8.formData(key, formData);
              },
              'emit-event': function emitEvent(name) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }

                return _this8.emitEvent(name, args, index, key);
              },
              input: function input($f) {
                return _this8.add$f(index, key, $f);
              }
            }
          }, {
            "attrs": {
              "rule": rule,
              "option": options,
              "extendOption": true
            }
          }]))])]), button ? h("Col", {
            "attrs": {
              "span": 2,
              "pull": 1,
              "push": 1
            }
          }, [_this8.makeIcon(keys.length, index, key)]) : null]);
        })]);
      }
    };
  }

  var group = createGroup({
    removeIcon: 'ios-remove-circle-outline',
    addIcon: 'ios-add-circle-outline'
  });
  group.v2 = createGroup({
    addIcon: 'ios-plus-outline',
    removeIcon: 'ios-minus-outline'
  });

  function _extends$7() {
    return _extends$7 = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends$7.apply(this, arguments);
  }

  var normalMerge$7 = ["attrs", "props", "domProps"],
      toArrayMerge$7 = ["class", "style", "directives"],
      functionalMerge$7 = ["on", "nativeOn"],
      mergeJsxProps$7 = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge$7.indexOf(b)) c[b] = _extends$7({}, c[b], a[b]);else if (-1 !== toArrayMerge$7.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge$7.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn$7(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn$7 = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper$7 = mergeJsxProps$7;

  var NAME$7 = 'fcSubForm';
  var Sub = {
    name: NAME$7,
    props: {
      rule: Array,
      options: Object,
      formCreate: Object,
      value: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      disabled: {
        type: Boolean,
        "default": false
      }
    },
    data: function data() {
      return {
        cacheRule: {},
        cacheValue: {}
      };
    },
    watch: {
      disabled: function disabled(n) {
        this.cacheRule.$f.disabled(n);
      },
      value: function value(n) {
        this.setValue(n);
      }
    },
    methods: {
      formData: function formData(value) {
        this.cacheValue = JSON.stringify(value);
        this.$emit('input', value);
        this.$emit('change', value);
      },
      setValue: function setValue(value) {
        var str = JSON.stringify(value);

        if (this.cacheValue === str) {
          return;
        }

        this.cacheValue = str;
        this.cacheRule.$f.coverValue(value || {});
      },
      addRule: function addRule() {
        var options = this.options ? this.options : {
          submitBtn: false,
          resetBtn: false,
          page: false,
          formData: _objectSpread2({}, this.value || {})
        };
        this.cacheRule = {
          rule: this.rule,
          options: options
        };
      },
      add$f: function add$f($f) {
        this.cacheRule.$f = $f;
        this.subForm();
        this.$emit('itemMounted', $f);
      },
      subForm: function subForm() {
        this.$emit('fc.sub-form', this.cacheRule.$f);
      },
      emitEvent: function emitEvent(name) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        this.$emit.apply(this, [name].concat(args));
      }
    },
    created: function created() {
      this.addRule();
    },
    render: function render() {
      var h = arguments[0];
      var _this$cacheRule = this.cacheRule,
          rule = _this$cacheRule.rule,
          options = _this$cacheRule.options;
      return h("FormCreate", helper$7([{}, {
        "on": {
          'update:value': this.formData,
          'emit-event': this.emitEvent,
          input: this.add$f
        }
      }, {
        "attrs": {
          "rule": rule,
          "option": options,
          "extendOption": true
        }
      }]));
    }
  };

  var components = [Checkbox, Radio, Select, Tree, Sub, frame, upload, group];

  function $set(target, field, value) {
    Vue.set(target, field, value);
  }
  function $del(target, field) {
    Vue["delete"](target, field);
  }

  var _extends$8 = Object.assign || function (a) {
    for (var b, c = 1; c < arguments.length; c++) {
      for (var d in b = arguments[c], b) {
        Object.prototype.hasOwnProperty.call(b, d) && $set(a, d, b[d]);
      }
    }

    return a;
  };

  function extend() {
    return _extends$8.apply(this, arguments);
  }

  var NAME$8 = 'FormCreate';
  function $FormCreate(FormCreate) {
    return {
      name: NAME$8,
      componentName: NAME$8,
      model: {
        prop: 'api'
      },
      provide: function provide() {
        return {
          $pfc: this
        };
      },
      inject: {
        $pfc: {
          "default": null
        }
      },
      props: {
        rule: {
          type: Array,
          required: true
        },
        option: {
          type: Object,
          "default": function _default() {
            return {};
          }
        },
        extendOption: Boolean,
        value: Object,
        api: Object
      },
      data: function data() {
        return {
          formData: undefined,
          validate: {},
          $f: undefined,
          isShow: true,
          unique: 1,
          renderRule: _toConsumableArray(this.rule || []),
          updateValue: ''
        };
      },
      render: function render() {
        return this.formCreate.render();
      },
      methods: {
        _refresh: function _refresh() {
          ++this.unique;
        },
        _renderRule: function _renderRule() {
          this.renderRule = _toConsumableArray(this.rule || []);
        },
        _updateValue: function _updateValue(value) {
          if (this._isDestroyed) return;
          this.updateValue = JSON.stringify(value);
          this.$emit('update:value', value);
        }
      },
      watch: {
        value: {
          handler: function handler(n) {
            if (JSON.stringify(n) === this.updateValue) return;
            this.$f.setValue(n);
          },
          deep: true
        },
        option: {
          handler: function handler(n) {
            this.formCreate.initOptions(n);
            this.$f.refresh();
          },
          deep: true
        },
        rule: function rule(n) {
          var _this = this;

          if (n.length === this.renderRule.length && n.every(function (v) {
            return _this.renderRule.indexOf(v) > -1;
          })) return;
          this.formCreate.$handle.reloadRule(n);

          this._renderRule();
        }
      },
      beforeCreate: function beforeCreate() {
        var _this2 = this;

        var _this$$options$propsD = this.$options.propsData,
            rule = _this$$options$propsD.rule,
            option = _this$$options$propsD.option,
            value = _this$$options$propsD.value;
        this.formCreate = new FormCreate(this, rule, option);
        value && is.Object(value) && this.formCreate.updateOptions({
          formData: value
        });
        Object.keys(this.formCreate.prop).forEach(function (k) {
          extend(_this2.$options[k], _this2.formCreate.prop[k]);
        });
      }
    };
  }

  var normalMerge$8 = ['attrs', 'props', 'domProps', 'scopedSlots'];
  var toArrayMerge$8 = ['class', 'style', 'directives'];
  var functionalMerge$8 = ['on', 'nativeOn'];

  var mergeProps = function mergeProps(objects) {
    var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _normalMerge = [].concat(normalMerge$8, _toConsumableArray(opt['normal'] || []));

    var _toArrayMerge = [].concat(toArrayMerge$8, _toConsumableArray(opt['array'] || []));

    var _functionalMerge = [].concat(functionalMerge$8, _toConsumableArray(opt['functional'] || []));

    var propsMerge = opt['props'] || [];
    return objects.reduce(function (a, b) {
      for (var key in b) {
        if (a[key]) {
          if (propsMerge.indexOf(key) > -1) {
            a[key] = mergeProps([b[key]], a[key]);
          } else if (_normalMerge.indexOf(key) > -1) {
            a[key] = _objectSpread2(_objectSpread2({}, a[key]), b[key]);
          } else if (_toArrayMerge.indexOf(key) > -1) {
            var arrA = a[key] instanceof Array ? a[key] : [a[key]];
            var arrB = b[key] instanceof Array ? b[key] : [b[key]];
            a[key] = [].concat(_toConsumableArray(arrA), _toConsumableArray(arrB));
          } else if (_functionalMerge.indexOf(key) > -1) {
            for (var event in b[key]) {
              if (a[key][event]) {
                var _arrA = a[key][event] instanceof Array ? a[key][event] : [a[key][event]];

                var _arrB = b[key][event] instanceof Array ? b[key][event] : [b[key][event]];

                a[key][event] = [].concat(_toConsumableArray(_arrA), _toConsumableArray(_arrB));
              } else {
                a[key][event] = b[key][event];
              }
            }
          } else if (key === 'hook') {
            for (var hook in b[key]) {
              if (a[key][hook]) {
                a[key][hook] = mergeFn$8(a[key][hook], b[key][hook]);
              } else {
                a[key][hook] = b[key][hook];
              }
            }
          } else {
            a[key] = b[key];
          }
        } else {
          if (_normalMerge.indexOf(key) > -1 || _functionalMerge.indexOf(key) > -1 || propsMerge.indexOf(key) > -1) {
            a[key] = _objectSpread2({}, b[key]);
          } else if (_toArrayMerge.indexOf(key) > -1) {
            a[key] = b[key] instanceof Array ? _toConsumableArray(b[key]) : _typeof(b[key]) === 'object' ? _objectSpread2({}, b[key]) : b[key];
          } else a[key] = b[key];
        }
      }

      return a;
    }, initial);
  };

  var mergeFn$8 = function mergeFn(fn1, fn2) {
    return function () {
      fn1 && fn1.apply(this, arguments);
      fn2 && fn2.apply(this, arguments);
    };
  };

  var keyAttrs = ['type', 'slot', 'emitPrefix', 'value', 'name', 'native', 'hidden', 'display', 'inject', 'options', 'emit', 'nativeEmit', 'link', 'prefix', 'suffix', 'update'];
  var arrayAttrs = ['validate', 'children', 'control'];
  var normalAttrs = ['effect'];
  function attrs() {
    return [].concat(keyAttrs, _toConsumableArray(normalMerge$8), _toConsumableArray(toArrayMerge$8), _toConsumableArray(functionalMerge$8), arrayAttrs, normalAttrs);
  }

  function deepExtend(origin) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mode = arguments.length > 2 ? arguments[2] : undefined;
    var isArr = false;

    for (var key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        var clone = target[key];

        if ((isArr = Array.isArray(clone)) || is.Object(clone)) {
          var nst = origin[key] === undefined;

          if (isArr) {
            isArr = false;
            nst && $set(origin, key, []);
          } else if (clone._clone && mode !== undefined) {
            if (mode) {
              clone = clone.getRule();
              nst && $set(origin, key, {});
            } else {
              $set(origin, key, clone._clone());
              continue;
            }
          } else {
            nst && $set(origin, key, {});
          }

          origin[key] = deepExtend(origin[key], clone, mode);
        } else {
          $set(origin, key, clone);
        }
      }
    }

    return mode !== undefined && Array.isArray(origin) ? origin.filter(function (v) {
      return !v || !v.__ctrl;
    }) : origin;
  }
  function deepCopy(value) {
    return deepExtend({}, {
      value: value
    }).value;
  }

  function format(type, msg, rule) {
    return "[form-create ".concat(type, "]: ").concat(msg) + (rule ? '\n\nrule: ' + JSON.stringify(rule.getRule ? rule.getRule() : rule) : '');
  }
  function tip(msg, rule) {
    console.warn(format('tip', msg, rule));
  }
  function err(msg, rule) {
    console.error(format('err', msg, rule));
  }
  function logError(e) {
    err(e.toString());
    console.error(e);
  }

  var PREFIX = '[[FORM-CREATE-PREFIX-';
  var SUFFIX = '-FORM-CREATE-SUFFIX]]';
  function toJson(obj) {
    return JSON.stringify(deepExtend([], obj, true), function (key, val) {
      if (val && val._isVue === true) return undefined;

      if (typeof val !== 'function') {
        return val;
      }

      if (val.__inject) val = val.__origin;
      if (val.__emit) return undefined;
      return PREFIX + val + SUFFIX;
    });
  }

  function makeFn(fn) {
    return eval('(function(){return ' + fn + ' })()');
  }

  function parseJson(json, mode) {
    return JSON.parse(json, function (k, v) {
      if (is.Undef(v) || !v.indexOf) return v;

      try {
        if (v.indexOf(SUFFIX) > 0 && v.indexOf(PREFIX) === 0) {
          v = v.replace(SUFFIX, '').replace(PREFIX, '');
          return makeFn(v.indexOf('function') === -1 && v.indexOf('(') !== 0 ? 'function ' + v : v);
        } else if (!mode && v.indexOf('function') > -1) return makeFn(v);
      } catch (e) {
        err("\u89E3\u6790\u5931\u8D25:".concat(v));
        return undefined;
      }

      return v;
    });
  }
  function enumerable(value, writable) {
    return {
      value: value,
      enumerable: false,
      configurable: false,
      writable: !!writable
    };
  } //todo 优化位置

  function copyRule(rule, mode) {
    return copyRules([rule], mode || false)[0];
  }
  function copyRules(rules, mode) {
    return deepExtend([], _toConsumableArray(rules), mode || false);
  }
  function mergeRule(rule, merge) {
    mergeProps([merge], rule, {
      array: arrayAttrs,
      normal: normalAttrs
    });
    return rule;
  }
  function getRule(rule) {
    return is.Function(rule.getRule) ? rule.getRule() : rule;
  }
  function mergeGlobal(target, merge) {
    if (!target) return merge;
    Object.keys(merge || {}).forEach(function (k) {
      mergeRule(target[k], merge[k] || {});
    });
  }
  function funcProxy(that, proxy) {
    Object.defineProperties(that, Object.keys(proxy).reduce(function (initial, k) {
      initial[k] = {
        get: function get() {
          return proxy[k]();
        }
      };
      return initial;
    }, {}));
  }
  function byCtx(rule) {
    return rule.__fc__ || (rule.__origin__ ? rule.__origin__.__fc__ : null);
  }
  function invoke(fn, def) {
    try {
      def = fn();
    } catch (e) {
      logError(e);
    }

    return def;
  }

  function debounce(fn, wait) {
    var timeout = null;
    return function () {
      var _this = this;

      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      if (timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(function () {
        return fn.call.apply(fn, [_this].concat(arg));
      }, wait);
    };
  }

  function toString$1(val) {
    return val == null ? '' : _typeof(val) === 'object' ? JSON.stringify(val, null, 2) : String(val);
  }

  function toLine(name) {
    var line = name.replace(/([A-Z])/g, '-$1').toLocaleLowerCase();
    if (line.indexOf('-') === 0) line = line.substr(1);
    return line;
  }

  var id = 0;
  function uniqueId() {
    return Math.random().toString(36).substr(3, 3) + Number("".concat(Date.now()).concat(++id)).toString(36);
  }

  function baseRule() {
    return {
      props: {},
      on: {},
      options: [],
      col: {},
      children: [],
      control: [],
      emit: [],
      link: [],
      hidden: false,
      display: true,
      value: undefined
    };
  }
  function creatorFactory(name, init) {
    return function (title, field, value) {
      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var maker = new Creator(name, title, field, value, props);

      if (init) {
        if (is.Function(init)) init(maker);else maker.props(init);
      }

      return maker;
    };
  }
  function Creator(type, title, field, value, props) {
    this._data = extend(baseRule(), {
      type: type,
      title: title,
      field: field,
      value: value,
      props: props || {}
    });
    this.event = this.on;
  }
  extend(Creator.prototype, {
    getRule: function getRule() {
      return this._data;
    },
    setProp: function setProp(key, value) {
      $set(this._data, key, value);
      return this;
    },
    _clone: function _clone() {
      var clone = new this.constructor();
      clone._data = copyRule(this._data);
      return clone;
    }
  });
  function appendProto(attrs) {
    attrs.forEach(function (name) {
      Creator.prototype[name] = function (key) {
        mergeRule(this._data, _defineProperty({}, name, arguments.length < 2 ? key : _defineProperty({}, key, arguments[1])));
        return this;
      };
    });
  }
  appendProto(attrs());

  var commonMaker = creatorFactory('');
  function create(type, field, title) {
    var make = commonMaker('', field);
    make._data.type = type;
    make._data.title = title;
    return make;
  }
  function createTmp(template, vm, field, title) {
    var make = commonMaker('', field);
    make._data.type = 'template';
    make._data.template = template;
    make._data.title = title;
    make._data.vm = vm;
    return make;
  }
  function makerFactory() {
    return {
      create: create,
      createTmp: createTmp,
      template: createTmp,
      factory: creatorFactory
    };
  }

  function copy(value) {
    return deepCopy(value);
  }

  function byRules(ctxs, origin) {
    return Object.keys(ctxs).reduce(function (initial, key) {
      initial[key] = origin ? ctxs[key].origin : ctxs[key].rule;
      return initial;
    }, {});
  }

  function Api(h) {
    function tidyFields(fields) {
      if (is.Undef(fields)) fields = h.fields();else if (!Array.isArray(fields)) fields = [fields];
      return fields;
    }

    function props(fields, key, val) {
      tidyFields(fields).forEach(function (field) {
        var ctx = h.getCtx(field);
        if (!ctx) return;
        $set(ctx.rule, key, val);
        h.$render.clearCache(ctx);
      });
    }

    function allSubForm() {
      var subs = h.subForm;
      return Object.keys(subs).reduce(function (initial, k) {
        var sub = subs[k];
        if (!sub) return initial;
        if (Array.isArray(sub)) initial.push.apply(initial, _toConsumableArray(sub));else initial.push(sub);
        return initial;
      }, []);
    }

    var api = {
      helper: {
        tidyFields: tidyFields,
        props: props,
        allSubForm: allSubForm
      },

      get config() {
        return h.options;
      },

      get options() {
        return h.options;
      },

      get form() {
        return h.form;
      },

      get rule() {
        return h.rules;
      },

      formData: function formData(fields) {
        return tidyFields(fields).reduce(function (initial, id) {
          var ctx = h.fieldCtx[id];
          if (!ctx) return initial;
          initial[ctx.field] = copy(ctx.rule.value);
          return initial;
        }, {});
      },
      getValue: function getValue(field) {
        var ctx = h.fieldCtx[field];
        if (!ctx) return;
        return copy(ctx.rule.value);
      },
      coverValue: function coverValue(formData) {
        Object.keys(h.fieldCtx).forEach(function (key) {
          var ctx = h.fieldCtx[key];
          if (!ctx) return h.appendData[key] = formData[key];
          ctx.rule.value = hasProperty(formData, key) ? formData[key] : undefined;
        });
      },
      setValue: function setValue(field) {
        var formData = field;
        if (arguments.length >= 2) formData = _defineProperty({}, field, arguments[1]);
        Object.keys(formData).forEach(function (key) {
          var ctx = h.fieldCtx[key];
          if (!ctx) return h.appendData[key] = formData[key];
          ctx.rule.value = formData[key];
        });
      },
      removeField: function removeField(field) {
        var ctx = h.getCtx(field);
        if (!ctx) return;
        ctx.rm();
        return ctx.origin;
      },
      removeRule: function removeRule(rule) {
        var ctx = rule && byCtx(rule);
        if (!ctx) return;
        ctx.rm();
        return ctx.origin;
      },
      destroy: function destroy() {
        h.vm.$el.parentNode && h.vm.$el.parentNode.removeChild(h.vm.$el);
        h.vm.$destroy();
      },
      fields: function fields() {
        return h.fields();
      },
      append: function append(rule, after, child) {
        var fields = Object.keys(h.fieldCtx),
            index = h.sort.length - 1,
            rules;
        if (rule.field && fields.indexOf(rule.field) > -1) return err("".concat(rule.field, " \u5B57\u6BB5\u5DF2\u5B58\u5728"), rule);
        var ctx = h.getCtx(after);

        if (ctx) {
          if (child) {
            rules = ctx.rule.children;
            index = ctx.rule.children.length - 1;
          } else {
            index = ctx.root.indexOf(ctx.origin);
            rules = ctx.root;
          }
        } else rules = h.rules;

        rules.splice(index + 1, 0, rule);
      },
      prepend: function prepend(rule, after, child) {
        var fields = Object.keys(h.fieldCtx),
            index = 0,
            rules;
        if (rule.field && fields.indexOf(rule.field) > -1) return err("".concat(rule.field, " \u5B57\u6BB5\u5DF2\u5B58\u5728"), rule);
        var ctx = h.getCtx(after);

        if (ctx) {
          if (child) {
            rules = ctx.rule.children;
          } else {
            index = ctx.root.indexOf(ctx.origin);
            rules = ctx.root;
          }
        } else rules = h.rules;

        rules.splice(index, 0, rule);
      },
      hidden: function hidden(state, fields) {
        props(fields, 'hidden', !!state);
        h.refresh();
      },
      hiddenStatus: function hiddenStatus(id) {
        var ctx = h.getCtx(id);
        if (!ctx) return;
        return !!ctx.rule.hidden;
      },
      display: function display(state, fields) {
        props(fields, 'display', !!state);
        h.refresh();
      },
      displayStatus: function displayStatus(id) {
        var ctx = h.getCtx(id);
        if (!ctx) return;
        return !!ctx.rule.display;
      },
      disabled: function disabled(_disabled, fields) {
        tidyFields(fields).forEach(function (field) {
          var ctx = h.fieldCtx[field];
          if (!ctx) return;
          $set(ctx.rule.props, 'disabled', !!_disabled);
        });
        h.refresh();
      },
      model: function model(origin) {
        return byRules(h.fieldCtx, origin);
      },
      component: function component(origin) {
        return byRules(h.nameCtx, origin);
      },
      bind: function bind() {
        return api.form;
      },
      reload: function reload(rules) {
        h.reloadRule(rules);
      },
      updateOptions: function updateOptions(options) {
        h.fc.updateOptions(options);
        api.refresh();
      },
      onSubmit: function onSubmit(fn) {
        api.updateOptions({
          onSubmit: fn
        });
      },
      sync: function sync(field) {
        var ctx = is.Object(field) ? byCtx(field) : h.getCtx(field);

        if (ctx) {
          var subForm = h.subForm[field];

          if (subForm) {
            if (Array.isArray(subForm)) {
              subForm.forEach(function (form) {
                form.refresh();
              });
            } else if (subForm) {
              subForm.refresh();
            }
          } //ctx.updateKey(true);


          h.$render.clearCache(ctx);
          h.refresh();
        }
      },
      refresh: function refresh() {
        allSubForm().forEach(function (sub) {
          sub.refresh();
        });
        h.$render.clearCacheAll();
        h.refresh();
      },
      refreshOptions: function refreshOptions() {
        h.$manager.updateOptions(h.options);
        api.refresh();
      },
      hideForm: function hideForm(hide) {
        $set(h.vm, 'isShow', !hide);
      },
      changeStatus: function changeStatus() {
        return h.changeStatus;
      },
      clearChangeStatus: function clearChangeStatus() {
        h.changeStatus = false;
      },
      updateRule: function updateRule(id, rule) {
        var r = api.getRule(id);
        r && extend(r, rule);
      },
      updateRules: function updateRules(rules) {
        Object.keys(rules).forEach(function (id) {
          api.updateRule(id, rules[id]);
        });
      },
      mergeRule: function mergeRule$1(id, rule) {
        var ctx = h.getCtx(id);
        ctx && mergeRule(ctx.rule, rule);
      },
      mergeRules: function mergeRules(rules) {
        Object.keys(rules).forEach(function (id) {
          api.mergeRule(id, rules[id]);
        });
      },
      getRule: function getRule(id, origin) {
        var ctx = h.getCtx(id);

        if (ctx) {
          return origin ? ctx.origin : ctx.rule;
        }
      },
      updateValidate: function updateValidate(id, validate, merge) {
        if (merge) {
          api.mergeRule(id, {
            validate: validate
          });
        } else {
          props(id, 'validate', validate);
        }
      },
      updateValidates: function updateValidates(validates, merge) {
        Object.keys(validates).forEach(function (id) {
          api.updateValidate(id, validates[id], merge);
        });
      },
      refreshValidate: function refreshValidate() {
        h.vm.validate = {};
        api.refresh();
      },
      resetFields: function resetFields(fields) {
        var ctxs = h.fieldCtx;
        tidyFields(fields).forEach(function (field) {
          var ctx = ctxs[field];
          if (!ctx) return;
          h.$render.clearCache(ctx);
          ctx.rule.value = copy(ctx.defaultValue);
          h.refreshControl(ctx);
        });
      },
      method: function method(id, name) {
        var el = api.el(id);
        if (!el || !el[name]) throw new Error(format('err', "".concat(name, "\u65B9\u6CD5\u4E0D\u5B58\u5728")));
        return function () {
          return el[name].apply(el, arguments);
        };
      },
      exec: function exec(id, name) {
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        return invoke(function () {
          return api.method(id, name).apply(void 0, args);
        });
      },
      toJson: function toJson$1() {
        return toJson(api.rule);
      },
      trigger: function trigger(id, event) {
        var el = api.el(id);

        for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        el && el.$emit.apply(el, [event].concat(args));
      },
      el: function el(id) {
        var ctx = h.getCtx(id);
        if (ctx) return ctx.el || h.vm.$refs[ctx.ref];
      },
      closeModal: function closeModal(id) {
        var el = api.el(id);
        el && el.$emit && el.$emit('close-modal');
      },
      getSubForm: function getSubForm(field) {
        return h.subForm[field];
      },
      nextTick: function nextTick(fn) {
        h.bus.$once('next-tick', fn);
        h.refresh();
      },
      nextRefresh: function nextRefresh(fn) {
        invoke(function () {
          return fn();
        });
        h.nextRefresh(function () {
          return api.refresh();
        });
      }
    };
    ['on', 'once', 'off', 'set'].forEach(function (n) {
      api[n] = function () {
        var _h$vm;

        (_h$vm = h.vm)["$".concat(n)].apply(_h$vm, arguments);
      };
    });
    api.changeValue = api.changeField = api.setValue;
    return api;
  }

  function useCache(Render) {
    extend(Render.prototype, {
      initCache: function initCache() {
        this.clearCacheAll();
      },
      clearCache: function clearCache(ctx) {
        if (!this.cache[ctx.id]) {
          ctx.parent && this.clearCache(ctx.parent);
          return;
        }

        if (this.cache[ctx.id].use === true || this.cache[ctx.id].parent) {
          this.$handle.refresh();
        }

        var parent = this.cache[ctx.id].parent;
        this.cache[ctx.id] = null;
        parent && this.clearCache(parent);
      },
      clearCacheAll: function clearCacheAll() {
        this.cache = {};
      },
      setCache: function setCache(ctx, vnode, parent) {
        this.cache[ctx.id] = {
          vnode: vnode,
          use: false,
          parent: parent
        };
      },
      getCache: function getCache(ctx) {
        var cache = this.cache[ctx.id];
        cache.use = true;
        return cache.vnode;
      }
    });
  }

  function toCase(str) {
    var to = str.replace(/(-[a-z])/g, function (v) {
      return v.replace('-', '').toLocaleUpperCase();
    });
    return lower(to);
  }
  function lower(str) {
    return str.replace(str[0], str[0].toLowerCase());
  }

  function setTempProps(vm, ctx, api) {
    if (!vm.$props) return;
    var prop = ctx.prop;
    var keys = Object.keys(vm.$props);
    var inject = injectProp(ctx, api);
    var injectKeys = Object.keys(inject);
    keys.forEach(function (key) {
      if (hasProperty(prop.props, key)) vm.$props[key] = prop.props[key];else if (injectKeys.indexOf(key) > -1) vm.$props[key] = inject[key];
    });
    var key = vm.$options.model && vm.$options.model.prop || 'value';

    if (keys.indexOf(key) > -1) {
      vm.$props[key] = prop.value;
    }
  }

  function injectProp(ctx, api) {
    return {
      formCreate: api,
      formCreateField: ctx.field,
      formCreateOptions: ctx.rule.options,
      formCreateRule: function () {
        var temp = _objectSpread2({}, ctx.prop);

        return temp.on = temp.on ? _objectSpread2({}, temp.on) : {}, temp;
      }()
    };
  }

  function useRender(Render) {
    extend(Render.prototype, {
      initRender: function initRender() {
        this.renderList = {};
        this.clearOrgChildren();
      },
      initOrgChildren: function initOrgChildren() {
        var ctxs = this.$handle.ctxs;
        this.orgChildren = Object.keys(ctxs).reduce(function (initial, id) {
          var children = ctxs[id].rule.children;
          initial[id] = is.trueArray(children) ? _toConsumableArray(children) : [];
          return initial;
        }, {});
      },
      clearOrgChildren: function clearOrgChildren() {
        this.orgChildren = {};
      },
      render: function render() {
        var _this = this;

        if (!this.vm.isShow) {
          return;
        }

        this.$h = this.vm.$createElement;
        this.$manager.beforeRender();
        var vn = this.sort.map(function (id) {
          return _this.renderCtx(_this.$handle.ctxs[id]);
        }).filter(function (val) {
          return val !== undefined;
        });
        return this.$manager.render(vn);
      },
      makeVm: function makeVm(rule) {
        var _this2 = this;

        var vm = rule.vm;
        if (!vm) return new _vue();else if (is.Function(vm)) return invoke(function () {
          return vm(_this2.$handle.getInjectData(rule));
        });else if (!vm._isVue) return new _vue(vm);
        return vm;
      },
      mergeGlobal: function mergeGlobal(ctx) {
        var g = this.$handle.options.global;
        if (!g) return; //todo 缓存配置,更新 option 更新

        if (!ctx.cacheConfig) ctx.cacheConfig = g[ctx.originType] || g[ctx.type] || g[ctx.trueType] || {};
        ctx.prop = mergeProps([g['*'], ctx.cacheConfig, ctx.prop]);
      },
      renderTemp: function renderTemp(ctx) {
        var _this3 = this;

        if (!_vue.compile) {
          tip('当前使用的Vue构建版本不支持compile,无法使用template功能');
          return [];
        }

        var rule = ctx.prop;
        var id = ctx.id,
            key = ctx.key;

        if (!this.renderList[id]) {
          if (!ctx.el) {
            ctx.el = this.makeVm(rule);
            this.vm.$nextTick(function () {
              return ctx.parser.mounted(ctx);
            });
          }

          var _vm = ctx.el;
          if (ctx.input) _vm.$on(_vm.$options.model && _vm.$options.model.event || 'input', function (value) {
            _this3.onInput(ctx, value);
          });
          this.renderList[id] = {
            vm: _vm,
            template: _vue.compile(rule.template)
          };
        }

        var _this$renderList$id = this.renderList[id],
            vm = _this$renderList$id.vm,
            template = _this$renderList$id.template;
        setTempProps(vm, ctx, this.$handle.api);
        var vn = template.render.call(vm);
        if (is.Undef(vn.data)) vn.data = {};
        vn.key = key;
        vn.data.ref = ctx.ref;
        vn.data.key = key;
        return vn;
      },
      renderSides: function renderSides(vn, ctx, temp) {
        var prop = ctx[temp ? 'rule' : 'prop'];
        return [this.renderRule(prop.prefix), vn, this.renderRule(prop.suffix)];
      },
      renderCtx: function renderCtx(ctx, parent) {
        if (ctx.type === 'hidden') return;

        if (!this.cache[ctx.id]) {
          var vn;
          var cacheFlag = true;
          var _type = ctx.trueType;
          var none = !(is.Undef(ctx.rule.display) || !!ctx.rule.display);

          if (_type === 'template' && !ctx.rule.template) {
            vn = this.renderSides(this.renderChildren(ctx), ctx, true);

            if (none) {
              this.display(vn);
            }

            vn = this.item(ctx, vn);
          } else if (_type === 'fcFragment') {
            vn = this.renderChildren(ctx);
          } else {
            ctx.initProp();
            this.mergeGlobal(ctx);
            this.$manager.tidyRule(ctx);
            this.ctxProp(ctx);
            var prop = ctx.prop;

            if (prop.hidden) {
              this.setCache(ctx, undefined, parent);
              return;
            }

            if (_type === 'template' && prop.template) {
              vn = this.renderTemp(ctx);
              cacheFlag = false;
            } else {
              vn = ctx.parser.render(this.renderChildren(ctx), ctx);
            }

            vn = this.renderSides(vn, ctx);

            if (!(!ctx.input && is.Undef(prop["native"])) && prop["native"] !== true) {
              vn = this.$manager.makeWrap(ctx, vn);
            }

            if (none) {
              vn = this.display(vn);
            }

            vn = this.item(ctx, vn);
          }

          if (cacheFlag) {
            this.setCache(ctx, vn, parent);
          }

          return vn;
        }

        return this.getCache(ctx);
      },
      display: function display(vn) {
        var _this4 = this;

        if (Array.isArray(vn)) {
          var data = [];
          vn.forEach(function (v) {
            if (Array.isArray(v)) return _this4.display(v);
            if (_this4.none(v)) data.push(v);
          });
          return data;
        } else {
          return this.none(vn);
        }
      },
      none: function none(vn) {
        if (vn && vn.data) {
          if (Array.isArray(vn.data.style)) {
            vn.data.style.push({
              display: 'none'
            });
          } else {
            vn.data.style = [vn.data.style, {
              display: 'none'
            }];
          }

          return vn;
        }
      },
      item: function item(ctx, vn) {
        return this.$h('fcFragment', {
          slot: ctx.rule.slot,
          key: ctx.key
        }, [vn]);
      },
      ctxProp: function ctxProp(ctx, custom) {
        var _this5 = this;

        var ref = ctx.ref,
            key = ctx.key;
        this.$manager.mergeProp(ctx, custom);
        ctx.parser.mergeProp(ctx, custom);
        var props = [{
          props: injectProp(ctx, this.$handle.api),
          ref: ref,
          key: "".concat(key, "fc"),
          slot: undefined
        }];

        if (!custom) {
          props.push({
            on: {
              'hook:mounted': function hookMounted() {
                _this5.onMounted(ctx);
              },
              'fc.sub-form': function fcSubForm(subForm) {
                _this5.$handle.addSubForm(ctx, subForm);
              }
            },
            model: ctx.input ? {
              value: this.$handle.getFormData(ctx),
              callback: function callback(value) {
                _this5.onInput(ctx, value);
              },
              expression: "formData.".concat(ctx.field)
            } : undefined
          });
        }

        mergeProps(props, ctx.prop);
        return ctx.prop;
      },
      onMounted: function onMounted(ctx) {
        ctx.el = this.vm.$refs[ctx.ref];
        ctx.parser.mounted(ctx);
        this.$handle.effect(ctx, 'mounted');
      },
      onInput: function onInput(ctx, value) {
        this.$handle.onInput(ctx, value);
      },
      renderChildren: function renderChildren(ctx) {
        var _this6 = this;

        var children = ctx.rule.children,
            orgChildren = this.orgChildren[ctx.id];

        if (!is.trueArray(children) && orgChildren) {
          orgChildren.forEach(function (child) {
            if (!is.String(child) && child.__fc__) {
              _this6.$handle.rmCtx(child.__fc__);
            }
          });
          this.orgChildren[ctx.id] = [];
          return [];
        }

        orgChildren && orgChildren.forEach(function (child) {
          if (children.indexOf(child) === -1 && !is.String(child) && child.__fc__) {
            _this6.$handle.rmCtx(child.__fc__);
          }
        });
        return children.map(function (child) {
          if (is.String(child)) return child;

          if (child.__fc__) {
            return _this6.renderCtx(child.__fc__, ctx);
          }

          if (!_this6.$handle.isRepeatRule(child.__origin__ || child) && child.type) {
            _this6.vm.$nextTick(function () {
              _this6.$handle.loadChildren(children, ctx);

              _this6.$handle.refresh();
            });
          }
        });
      },
      defaultRender: function defaultRender(ctx, children) {
        var prop = ctx.prop;
        if (this.vNode[ctx.type]) return this.vNode[ctx.type](prop, children);
        if (this.vNode[ctx.originType]) return this.vNode[ctx.originType](prop, children);
        return this.vNode.make(lower(ctx.originType), prop, children);
      },
      renderRule: function renderRule(rule, children, origin) {
        var _this7 = this;

        if (!rule) return undefined;
        if (is.String(rule)) return rule;
        var type;

        if (origin) {
          type = rule.type;
        } else {
          type = rule.is;

          if (rule.type) {
            type = toCase(rule.type);
            var alias = this.vNode.aliasMap[type];
            if (alias) type = toCase(alias);
          }
        }

        if (!type) return undefined;
        var data = [[children]];

        if (is.trueArray(rule.children)) {
          data.push(rule.children.map(function (v) {
            return _this7.renderRule(v);
          }));
        }

        return this.$h(type, _objectSpread2({}, rule), data);
      }
    });
  }

  function Render(handle) {
    extend(this, {
      $handle: handle,
      fc: handle.fc,
      vm: handle.vm,
      $manager: handle.$manager,
      vNode: new handle.fc.CreateNode(handle.vm)
    });
    funcProxy(this, {
      options: function options() {
        return handle.options;
      },
      sort: function sort() {
        return handle.sort;
      }
    });
    this.initCache();
    this.initRender();
  }
  useCache(Render);
  useRender(Render);

  function useInject(Handler) {
    extend(Handler.prototype, {
      parseInjectEvent: function parseInjectEvent(rule, on) {
        var _this = this;

        if (rule.inject === false) return;
        var inject = rule.inject || this.options.injectEvent;
        if (is.Undef(inject)) return;
        Object.keys(on).forEach(function (k) {
          if (is.Function(on[k])) on[k] = _this.inject(rule, on[k], inject);
        });
        return on;
      },
      parseEmit: function parseEmit(ctx, on) {
        var _this2 = this;

        var event = {},
            rule = ctx.rule,
            emitPrefix = rule.emitPrefix,
            field = rule.field,
            name = rule.name,
            inject = rule.inject;
        var emit = rule[on ? 'emit' : 'nativeEmit'] || [];

        if (is.trueArray(emit)) {
          var emitKey = emitPrefix || field || name;

          if (emitKey) {
            if (!on) emitKey = "native-".concat(emitKey);
            emit.forEach(function (eventName) {
              if (!eventName) return;
              var eventInject;

              if (is.Object(eventName)) {
                eventInject = eventName.inject;
                eventName = eventName.name;
              }

              var fieldKey = toLine("".concat(emitKey, "-").concat(eventName));

              var fn = function fn() {
                var _this2$vm, _this2$vm2;

                for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
                  arg[_key] = arguments[_key];
                }

                (_this2$vm = _this2.vm).$emit.apply(_this2$vm, [fieldKey].concat(arg));

                (_this2$vm2 = _this2.vm).$emit.apply(_this2$vm2, ['emit-event', fieldKey].concat(arg));
              };

              fn.__emit = true;

              if (!eventInject && inject === false) {
                event[eventName] = fn;
              } else {
                var _inject = eventInject || inject || _this2.options.injectEvent;

                event[eventName] = is.Undef(_inject) ? fn : _this2.inject(rule, fn, _inject);
              }
            });
          }
        }

        ctx.computed[on ? 'on' : 'nativeOn'] = event;
        return event;
      },
      getInjectData: function getInjectData(self, inject) {
        var _this$vm$$options$pro = this.vm.$options.propsData,
            option = _this$vm$$options$pro.option,
            rule = _this$vm$$options$pro.rule;
        return {
          $f: this.api,
          rule: rule,
          self: self.__origin__,
          option: option,
          inject: inject
        };
      },
      inject: function inject(self, _fn, _inject2) {
        if (_fn.__inject) {
          if (this.watching) return _fn;
          _fn = _fn.__origin;
        }

        var h = this;

        var fn = function fn() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          args.unshift(h.getInjectData(self, _inject2));
          return _fn.apply(this, args);
        };

        fn.__inject = true;
        fn.__origin = _fn;
        return fn;
      }
    });
  }

  function usePage(Handler) {
    extend(Handler.prototype, {
      usePage: function usePage() {
        var _this = this;

        var page = this.options.page;
        if (!page) return;
        var first = 25;
        var limit = getLimit(this.rules);

        if (is.Object(page)) {
          if (page.first) first = parseInt(page.first, 10) || first;
          if (page.limit) limit = parseInt(page.limit, 10) || limit;
        }

        extend(this, {
          first: first,
          limit: limit,
          pageEnd: this.rules.length <= first
        });
        this.bus.$on('page-end', function () {
          return _this.vm.$emit('page-end', _this.api);
        });
        this.pageLoad();
      },
      pageLoad: function pageLoad() {
        var _this2 = this;

        var pageFn = function pageFn() {
          if (_this2.pageEnd) {
            _this2.vm.$off('hook:updated', pageFn);

            _this2.bus.$emit('page-end');
          } else {
            _this2.first += _this2.limit;
            _this2.pageEnd = _this2.rules.length <= _this2.first;

            _this2.loadRule();

            _this2.refresh();
          }
        };

        this.vm.$on('hook:updated', pageFn);
      }
    });
  }

  function getLimit(rules) {
    return rules.length < 31 ? 31 : Math.ceil(rules.length / 3);
  }

  function useRender$1(Handler) {
    extend(Handler.prototype, {
      clearNextTick: function clearNextTick() {
        this.nextTick && clearTimeout(this.nextTick);
        this.nextTick = null;
      },
      bindNextTick: function bindNextTick(fn) {
        var _this = this;

        this.clearNextTick();
        this.nextTick = setTimeout(function () {
          fn();
          _this.nextTick = null;
        }, 10);
      },
      render: function render() {
        // console.warn('%c render', 'color:green');
        ++this.loadedId;
        if (this.vm.unique > 0) return this.$render.render();else {
          this.vm.unique = 1;
          return [];
        }
      }
    });
  }

  function bind(ctx) {
    Object.defineProperties(ctx.origin, {
      __fc__: enumerable(ctx, true)
    });
  }

  function RuleContext(handle, rule) {
    var id = uniqueId();
    extend(this, {
      id: id,
      ref: id,
      wrapRef: id + 'fi',
      rule: rule,
      origin: rule.__origin__ || rule,
      name: rule.name,
      watch: [],
      linkOn: [],
      root: [],
      ctrlRule: [],
      parent: null,
      cacheConfig: null,
      prop: _objectSpread2({}, rule),
      computed: {},
      input: !!rule.field,
      el: undefined,
      defaultValue: rule.field ? deepCopy(rule.value) : undefined,
      field: rule.field || undefined
    });
    this.updateType();
    this.updateKey();
    bind(this);
    this.update(handle, true);
  }
  extend(RuleContext.prototype, {
    updateKey: function updateKey(flag) {
      this.key = uniqueId();
      flag && this.parent && this.parent.updateKey(flag);
    },
    updateType: function updateType() {
      this.originType = this.rule.type;
      this.type = toCase(this.rule.type);
    },
    setParser: function setParser(parser) {
      this.parser = parser;
      parser.init(this);
    },
    initProp: function initProp() {
      this.prop = mergeProps([this.rule, this.computed]);
    },
    check: function check(handle) {
      return this.vm === handle.vm;
    },
    unwatch: function unwatch() {
      this.watch.forEach(function (un) {
        return un();
      });
      this.watch = [];
    },
    unlink: function unlink() {
      this.linkOn.forEach(function (un) {
        return un();
      });
      this.linkOn = [];
    },
    link: function link() {
      this.unlink();
      this.$handle.appendLink(this);
    },
    watchTo: function watchTo() {
      this.$handle.watchCtx(this);
    },
    "delete": function _delete() {
      var undef = void 0;
      this.unwatch();
      this.unlink();
      this.rmCtrl();
      extend(this, {
        deleted: true,
        prop: _objectSpread2({}, this.rule),
        computed: {},
        el: undef,
        $handle: undef,
        $render: undef,
        vm: undef,
        vNode: undef,
        parent: null,
        cacheConfig: null
      });
    },
    rmCtrl: function rmCtrl() {
      this.ctrlRule.forEach(function (ctrl) {
        return ctrl.__fc__.rm();
      });
      this.ctrlRule = [];
    },
    rm: function rm() {
      var index = this.root.indexOf(this.origin);

      if (index > -1) {
        this.root.splice(index, 1);
      }

      if (this.deleted) {
        return;
      }

      this.rmCtrl();
      this.$handle.rmCtx(this);
      extend(this, {
        root: []
      });
    },
    update: function update(handle, init) {
      extend(this, {
        deleted: false,
        $handle: handle,
        $render: handle.$render,
        vm: handle.vm,
        trueType: handle.getType(this.originType),
        vNode: handle.$render.vNode,
        updated: false
      });
      !init && this.unwatch();
      this.watchTo();
      this.link();
    }
  });

  function useLoader(Handler) {
    extend(Handler.prototype, {
      nextRefresh: function nextRefresh(fn) {
        var _this = this;

        var id = this.loadedId;
        this.vm.$nextTick(function () {
          id === _this.loadedId && (fn ? fn() : _this.refresh());
        });
      },
      parseRule: function parseRule(_rule) {
        var _this2 = this;

        var rule = getRule(_rule);
        Object.defineProperties(rule, {
          __origin__: enumerable(_rule, true)
        });
        fullRule(rule);
        if (rule.field && hasProperty(this.options.formData || {}, rule.field)) rule.value = this.options.formData[rule.field];
        rule.options = Array.isArray(rule.options) ? rule.options : [];
        ['on', 'props', 'nativeOn'].forEach(function (k) {
          _this2.parseInjectEvent(rule, rule[k] || {});
        });
        return rule;
      },
      isRepeatRule: function isRepeatRule(rule) {
        return this.repeatRule.indexOf(rule) > -1;
      },
      loadRule: function loadRule() {
        // console.warn('%c load', 'color:blue');
        this.cycleLoad = false;

        if (this.pageEnd) {
          this.bus.$emit('load-start');
        }

        this._loadRule(this.rules);

        if (this.cycleLoad && this.pageEnd) {
          return this.loadRule();
        }

        if (this.pageEnd) {
          this.bus.$emit('load-end');
        }

        this.vm._renderRule();

        this.$render.initOrgChildren();
        this.syncForm();
      },
      loadChildren: function loadChildren(children, parent) {
        this.cycleLoad = false;
        this.bus.$emit('load-start');

        this._loadRule(children, parent);

        if (this.cycleLoad) {
          return this.loadRule();
        }

        this.$render.clearCache(parent);
      },
      _loadRule: function _loadRule(rules, parent) {
        var _this3 = this;

        var preIndex = function preIndex(i) {
          var pre = rules[i - 1];

          if (!pre || !pre.__fc__) {
            return i > 0 ? preIndex(i - 1) : -1;
          }

          var index = _this3.sort.indexOf(pre.__fc__.id);

          return index > -1 ? index : preIndex(i - 1);
        };

        var loadChildren = function loadChildren(children, parent) {
          if (is.trueArray(children)) {
            _this3._loadRule(children, parent);
          }
        };

        var initEvent = function initEvent(rule) {
          return _this3.ruleEffect(rule, 'init');
        };

        this.loading = true;
        rules.map(function (_rule, index) {
          if (parent && is.String(_rule)) return;
          if (!_this3.pageEnd && !parent && index >= _this3.first) return;
          if (!is.Object(_rule) || !getRule(_rule).type) return err('未定义生成规则的 type 字段', _rule);

          if (_rule.__fc__ && _rule.__fc__.root === rules && _this3.ctxs[_rule.__fc__.id]) {
            loadChildren(_rule.__fc__.rule.children, _rule.__fc__);
            return _rule.__fc__;
          }

          var rule = getRule(_rule);
          if (!rule.__fc__) initEvent(rule);

          if (rule.field && _this3.fieldCtx[rule.field] && _this3.fieldCtx[rule.field] !== _rule.__fc__) {
            _this3.repeatRule.push(_rule);

            return err("".concat(rule.field, " \u5B57\u6BB5\u5DF2\u5B58\u5728"), _rule);
          }

          var ctx;

          if (_rule.__fc__) {
            ctx = _rule.__fc__;
            var check = !ctx.check(_this3);

            if (ctx.deleted) {
              if (check) {
                if (isCtrl(ctx)) {
                  return;
                }

                ctx.update(_this3);
              }
            } else {
              if (check) {
                if (isCtrl(ctx)) {
                  return;
                }

                rules[index] = _rule = _rule._clone ? _rule._clone() : copyRule(_rule);
                initEvent(getRule(_rule));
                ctx = null;
              }
            }
          }

          if (!ctx) {
            ctx = new RuleContext(_this3, _this3.parseRule(_rule));

            _this3.bindParser(ctx);
          } else if (ctx.originType !== ctx.rule.type) {
            ctx.updateType();

            _this3.bindParser(ctx);
          }

          _this3.appendValue(ctx.rule);

          [false, true].forEach(function (b) {
            return _this3.parseEmit(ctx, b);
          });
          ctx.parent = parent || null;
          ctx.root = rules;

          _this3.setCtx(ctx);

          loadChildren(ctx.rule.children, ctx);

          if (!parent) {
            var _preIndex = preIndex(index);

            if (_preIndex > -1) {
              _this3.sort.splice(_preIndex + 1, 0, ctx.id);
            } else {
              _this3.sort.push(ctx.id);
            }
          }

          var r = ctx.rule;

          if (!ctx.updated) {
            ctx.updated = true;

            if (is.Function(r.update)) {
              _this3.bus.$once('load-end', function () {
                _this3.refreshUpdate(ctx, r.value);
              });
            }

            _this3.effect(ctx, 'loaded');
          }

          if (ctx.input) Object.defineProperty(r, 'value', _this3.valueHandle(ctx));
          if (_this3.refreshControl(ctx)) _this3.cycleLoad = true;
          return ctx;
        });
        this.loading = false;
      },
      refreshControl: function refreshControl(ctx) {
        return ctx.input && ctx.rule.control && this.useCtrl(ctx);
      },
      useCtrl: function useCtrl(ctx) {
        var _this4 = this;

        var controls = getCtrl(ctx),
            validate = [],
            api = this.api;
        if (!controls.length) return false;

        var _loop = function _loop(i) {
          var control = controls[i],
              handleFn = control.handle || function (val) {
            return val === control.value;
          };

          var data = _objectSpread2(_objectSpread2({}, control), {}, {
            valid: invoke(function () {
              return handleFn(ctx.rule.value, api);
            }),
            ctrl: findCtrl(ctx, control.rule)
          });

          if (data.valid && data.ctrl || !data.valid && !data.ctrl) return "continue";
          validate.push(data);
        };

        for (var i = 0; i < controls.length; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        }

        if (!validate.length) return false;
        var flag = false;
        validate.reverse().forEach(function (_ref) {
          var valid = _ref.valid,
              rule = _ref.rule,
              prepend = _ref.prepend,
              append = _ref.append,
              child = _ref.child,
              ctrl = _ref.ctrl;

          if (valid) {
            flag = true;
            var ruleCon = {
              type: 'fcFragment',
              "native": true,
              __ctrl: true,
              children: rule
            };
            ctx.ctrlRule.push(ruleCon);

            _this4.bus.$once('load-start', function () {
              // this.cycleLoad = true;
              if (prepend) {
                api.prepend(ruleCon, prepend, child);
              } else if (append || child) {
                api.append(ruleCon, append || ctx.id, child);
              } else {
                ctx.root.splice(ctx.root.indexOf(ctx.origin) + 1, 0, ruleCon);
              }
            });
          } else {
            ctx.ctrlRule.splice(ctx.ctrlRule.indexOf(ctrl), 1);
            var ctrlCtx = byCtx(ctrl);
            ctrlCtx && ctrlCtx.rm();
          }
        });
        this.vm.$emit('control', ctx.origin, this.api);
        this.effect(ctx, 'control');
        return flag;
      },
      reloadRule: debounce(function (rules) {
        return this._reloadRule(rules);
      }, 1),
      _reloadRule: function _reloadRule(rules) {
        var _this5 = this;

        // console.warn('%c reload', 'color:red');
        if (!rules) rules = this.rules;

        var ctxs = _objectSpread2({}, this.ctxs);

        this.clearNextTick();
        this.$render.clearOrgChildren();
        this.initData(rules);
        this.bus.$once('load-end', function () {
          Object.keys(ctxs).filter(function (id) {
            return _this5.ctxs[id] === undefined;
          }).forEach(function (id) {
            return _this5.rmCtx(ctxs[id]);
          });

          _this5.$render.clearCacheAll();
        });
        this.reloading = true;
        this.loadRule();
        this.reloading = false;
        this.refresh();
        this.bus.$off('next-tick', this.nextReload);
        this.bus.$once('next-tick', this.nextReload);
      },
      //todo 组件生成全部通过 alias
      refresh: function refresh() {
        this.vm._refresh();
      }
    });
  }

  function fullRule(rule) {
    var def = baseRule();
    Object.keys(def).forEach(function (k) {
      if (!hasProperty(rule, k)) rule[k] = def[k];
    });
    return rule;
  }

  function getCtrl(ctx) {
    var control = ctx.rule.control || [];
    if (is.Object(control)) return [control];else return control;
  }

  function findCtrl(ctx, rule) {
    for (var i = 0; i < ctx.ctrlRule.length; i++) {
      var ctrl = ctx.ctrlRule[i];
      if (ctrl.children === rule) return ctrl;
    }
  }

  function isCtrl(ctx) {
    return !!ctx.rule.__ctrl;
  }

  function useInput(Handler) {
    extend(Handler.prototype, {
      getValue: function getValue(ctx) {
        if (!hasProperty(ctx, 'cacheValue')) {
          ctx.cacheValue = ctx.parser.toValue(this.getFormData(ctx), ctx);
        }

        return ctx.cacheValue;
      },
      setValue: function setValue(ctx, value, formValue, setFlag) {
        ctx.cacheValue = value;
        this.changeStatus = true;
        this.nextRefresh();
        this.$render.clearCache(ctx);
        this.setFormData(ctx, formValue);
        this.syncValue();
        this.valueChange(ctx, value);
        this.vm.$emit('change', ctx.field, value, ctx.origin, this.api, setFlag);
        this.effect(ctx, 'value');
      },
      onInput: function onInput(ctx, value) {
        var val;

        if (ctx.input && (this.isQuote(ctx, val = ctx.parser.toValue(value, ctx)) || this.isChange(ctx, val))) {
          this.setValue(ctx, val, value);
        }
      },
      setFormData: function setFormData(ctx, value) {
        $set(this.formData, ctx.field, value);
      },
      getFormData: function getFormData(ctx) {
        return this.formData[ctx.field];
      },
      validate: function validate() {
        var _this = this;

        toEmpty(this.vm.validate);
        Object.keys(this.fieldCtx).forEach(function (id) {
          var ctx = _this.fieldCtx[id];
          _this.vm.validate[ctx.field] = toArray(ctx.rule.validate);
        });
        return this.vm.validate;
      },
      syncForm: function syncForm() {
        var _this2 = this;

        toEmpty(this.form);
        Object.defineProperties(this.form, Object.keys(this.formData).reduce(function (initial, field) {
          var ctx = _this2.getCtx(field);

          var handle = _this2.valueHandle(ctx);

          handle.configurable = true;
          initial[field] = handle;
          return initial;
        }, {}));
        this.syncValue();
      },
      valueHandle: function valueHandle(ctx) {
        var _this3 = this;

        return {
          enumerable: true,
          get: function get() {
            return _this3.getValue(ctx);
          },
          set: function set(value) {
            if (_this3.isChange(ctx, value)) {
              _this3.setValue(ctx, value, ctx.parser.toFormValue(value, ctx), true);
            }
          }
        };
      },
      appendValue: function appendValue(rule) {
        if (!rule.field || !hasProperty(this.appendData, rule.field)) return;
        rule.value = this.appendData[rule.field];
        delete this.appendData[rule.field];
      },
      addSubForm: function addSubForm(ctx, subForm) {
        this.subForm[ctx.field] = subForm;
      },
      syncValue: function syncValue() {
        this.vm._updateValue(_objectSpread2({}, this.form));
      },
      isChange: function isChange(ctx, value) {
        return JSON.stringify(ctx.rule.value) !== JSON.stringify(value);
      },
      isQuote: function isQuote(ctx, value) {
        return (is.Object(value) || Array.isArray(value)) && value === ctx.rule.value;
      },
      refreshUpdate: function refreshUpdate(ctx, val) {
        var _this4 = this;

        var fn = ctx.rule.update;

        if (is.Function(fn)) {
          var state = invoke(function () {
            return fn(val, ctx.origin, _this4.api);
          });
          if (state === undefined) return;
          ctx.rule.hidden = state === true;
        }
      },
      valueChange: function valueChange(ctx, val) {
        this.refreshRule(ctx, val);
        this.bus.$emit('change-' + ctx.field, val);
      },
      refreshRule: function refreshRule(ctx, val) {
        if (this.refreshControl(ctx)) {
          this.$render.clearCacheAll();
          this.loadRule();
          this.refresh();
        }

        this.refreshUpdate(ctx, val);
      },
      appendLink: function appendLink(ctx) {
        var _this5 = this;

        var link = ctx.rule.link;
        is.trueArray(link) && link.forEach(function (field) {
          var fn = function fn() {
            return _this5.refreshRule(ctx, ctx.rule.value);
          };

          _this5.bus.$on('change-' + field, fn);

          ctx.linkOn.push(function () {
            return _this5.bus.$off('change-' + field, fn);
          });
        });
      },
      fields: function fields() {
        return Object.keys(this.formData);
      }
    });
  }

  function toEmpty(obj) {
    Object.keys(obj).forEach(function (k) {
      return delete obj[k];
    });
  }

  function useHelper(rules) {
    if (!Array.isArray(rules) || rules.findField) return;
    Object.defineProperties(rules, {
      findField: enumerable(findField),
      findName: enumerable(findName),
      setValue: enumerable(setValue)
    });
  }

  function find(field, name, origin) {
    if (!this.length) return;
    var children = [];

    for (var i = 0; i < this.length; i++) {
      if (!is.Object(this[i])) continue;
      var rule = getRule(this[i]);
      if (rule[name] === field) return origin ? rule : this[i];
      if (is.trueArray(rule.children)) children = children.concat(rule.children);
      is.trueArray(rule.control) && rule.control.forEach(function (r) {
        children = children.concat(r.rule);
      });
    }

    return find.call(children, field, name, origin);
  }

  function findField(field) {
    return find.call(this, field, 'field');
  }

  function findName(field) {
    return find.call(this, field, 'name');
  }

  function setValue(formData) {
    var _this = this;

    Object.keys(formData).forEach(function (field) {
      var rule = find.call(_this, field, 'field', true);
      if (rule) rule.value = formData[field];
    });
  }

  var BaseParser = {
    init: function init(ctx) {},
    toFormValue: function toFormValue(value, ctx) {
      return value;
    },
    toValue: function toValue(formValue, ctx) {
      return formValue;
    },
    mounted: function mounted(ctx) {},
    render: function render(children, ctx) {
      return ctx.$render.defaultRender(ctx, children);
    },
    mergeProp: function mergeProp(ctx) {}
  };

  function useContext(Handler) {
    extend(Handler.prototype, {
      getCtx: function getCtx(id) {
        return this.fieldCtx[id] || this.nameCtx[id] || this.ctxs[id];
      },
      setCtx: function setCtx(ctx) {
        var id = ctx.id,
            field = ctx.field,
            name = ctx.name,
            rule = ctx.rule;
        this.ctxs[id] = ctx;
        if (name) $set(this.nameCtx, name, ctx);
        if (!ctx.input) return;
        this.fieldCtx[field] = ctx;
        $set(this.formData, field, ctx.parser.toFormValue(rule.value, ctx));
      },
      getParser: function getParser(ctx) {
        var list = this.fc.parsers;
        return list[ctx.originType] || list[toCase(ctx.type)] || list[ctx.trueType] || BaseParser;
      },
      bindParser: function bindParser(ctx) {
        ctx.setParser(this.getParser(ctx));
      },
      getType: function getType(alias) {
        var map = this.fc.CreateNode.aliasMap;
        var type = map[alias] || map[toCase(alias)] || alias;
        return toCase(type);
      },
      watchCtx: function watchCtx(ctx) {
        var _this = this;

        var vm = this.vm;
        var none = ['field', 'value', 'vm', 'template', 'name', 'config', 'control', 'inject'];
        Object.keys(ctx.rule).filter(function (k) {
          return none.indexOf(k) === -1;
        }).forEach(function (key) {
          var flag = key === 'children';
          ctx.watch.push(vm.$watch(function () {
            return ctx.rule[key];
          }, function (n, o) {
            if (_this.loading || _this.reloading) return;
            _this.watching = true; // if (key === 'hidden')
            //     ctx.updateKey(true);
            // else

            if (key === 'link') {
              ctx.link();
              return;
            } else if (['props', 'on', 'nativeOn'].indexOf(key) > -1) _this.parseInjectEvent(ctx.rule, n || {});else if (['emit', 'nativeEmit'].indexOf(key) > -1) _this.parseEmit(ctx, key === 'emit');else if (key === 'type') {
              ctx.updateType();

              _this.bindParser(ctx);
            } else if (key === 'children') {
              var _flag = is.trueArray(n);

              if (n !== o) {
                _this.rmSub(o);

                _this.$render.initOrgChildren();
              }

              _flag && _this.loadChildren(n, ctx);
            }

            _this.$render.clearCache(ctx);

            _this.watching = false;
          }, {
            deep: !flag,
            sync: flag
          }));
        });
        this.watchEffect(ctx);
      },
      rmSub: function rmSub(sub) {
        var _this2 = this;

        is.trueArray(sub) && sub.forEach(function (r) {
          r && r.__fc__ && _this2._rmCtx(r.__fc__);
        });
      },
      rmCtx: function rmCtx(ctx) {
        this._rmCtx(ctx);

        if (!this.reloading) {
          this.$render.initOrgChildren();
          this.syncValue();
        }
      },
      _rmCtx: function _rmCtx(ctx) {
        var _this3 = this;

        if (ctx.deleted) return;
        var id = ctx.id,
            field = ctx.field,
            name = ctx.name;

        if (ctx.input) {
          Object.defineProperty(ctx.rule, 'value', {
            value: ctx.rule.value,
            writable: true
          });
        }

        if (is.trueArray(ctx.rule.children)) {
          ctx.rule.children.forEach(function (h) {
            return h.__fc__ && _this3._rmCtx(h.__fc__);
          });
        }

        $del(this.ctxs, id);
        $del(this.$render.renderList, id);
        $del(this.$render.cache, id);
        $del(this.$render.orgChildren, id);
        $del(ctx, 'cacheValue');
        var f = this.fieldCtx[field];

        if (field && (!f || f === ctx)) {
          $del(this.formData, field);
          $del(this.form, field);
          $del(this.fieldCtx, field);
          $del(this.subForm, field);
        }

        if (name && this.nameCtx[name] === ctx) {
          $del(this.nameCtx, name);
        }

        var index = this.sort.indexOf(id);

        if (index > -1) {
          this.sort.splice(index, 1);
        }

        ctx["delete"]();
        this.effect(ctx, 'deleted');
        return ctx;
      }
    });
  }

  function useLifecycle(Handler) {
    extend(Handler.prototype, {
      mounted: function mounted() {
        var _this = this;

        var _mounted = function _mounted() {
          _this.isMounted = true;

          _this.lifecycle('mounted');
        };

        if (this.pageEnd) {
          _mounted();
        } else {
          this.bus.$once('page-end', _mounted);
        }
      },
      lifecycle: function lifecycle(name) {
        var _this2 = this;

        var fn = this.options[name];
        is.Function(fn) && invoke(function () {
          return fn(_this2.api);
        });
        this.vm.$emit(name, this.api);
      }
    });
  }

  function useEffect(Handler) {
    extend(Handler.prototype, {
      useProvider: function useProvider() {
        var _this = this;

        var ps = this.fc.providers;
        Object.keys(ps).forEach(function (k) {
          var prop = ps[k];
          prop._c = getComponent(prop);

          _this.onEffect(prop);

          _this.providers[k] = prop;
        });
      },
      onEffect: function onEffect(provider) {
        var _this2 = this;

        var used = [];
        (provider._c || ['*']).forEach(function (name) {
          var type = name === '*' ? '*' : _this2.getType(name);
          if (used.indexOf(type) > -1) return;
          used.push(type);

          _this2.bus.$on("p:".concat(provider.name, ":").concat(type, ":").concat(provider.input ? 1 : 0), function (event, args) {
            provider[event] && provider[event].apply(provider, _toConsumableArray(args));
          });
        });
        provider._used = used;
      },
      watchEffect: function watchEffect(ctx) {
        var _this3 = this;

        var vm = this.vm;
        Object.keys(ctx.rule.effect || {}).forEach(function (k) {
          ctx.watch.push(vm.$watch(function () {
            return ctx.rule.effect[k];
          }, function (n) {
            _this3.effect(ctx, 'watch', _defineProperty({}, k, n));
          }));
        });
      },
      effect: function effect(ctx, event, custom) {
        this.emitEffect({
          rule: ctx.rule,
          input: ctx.input,
          type: ctx.trueType,
          custom: custom
        }, event);
      },
      ruleEffect: function ruleEffect(rule, event) {
        this.emitEffect({
          rule: rule,
          input: !!rule.field,
          type: this.getType(rule.type)
        }, event);
      },
      emitEffect: function emitEffect(_ref, event) {
        var _this4 = this;

        var rule = _ref.rule,
            input = _ref.input,
            type = _ref.type,
            custom = _ref.custom;
        if (!type || type === 'fcFragment') return;
        var effect = custom ? custom : rule.effect || {};
        Object.keys(effect).forEach(function (attr) {
          var p = _this4.providers[attr];
          if (!p || p.input && !input) return;

          var _type;

          if (!p._c) {
            _type = '*';
          } else if (p._used.indexOf(type) > -1) {
            _type = type;
          } else {
            return;
          }

          _this4.bus.$emit("p:".concat(attr, ":").concat(_type, ":").concat(p.input ? 1 : 0), event, [effect[attr], rule, _this4.api]);
        });
      }
    });
  }

  function unique(arr) {
    return arr.filter(function (item, index, arr) {
      return arr.indexOf(item, 0) === index;
    });
  }

  function getComponent(p) {
    var c = p.components;
    if (Array.isArray(c)) return unique(c.filter(function (v) {
      return v !== '*';
    }));else if (is.String(c)) return [c];else return false;
  }

  function Handler(fc) {
    var _this = this;

    extend(this, {
      fc: fc,
      vm: fc.vm,
      watching: false,
      loading: false,
      reloading: false,
      isMounted: false,
      formData: {},
      subForm: {},
      form: {},
      appendData: {},
      providers: {},
      cycleLoad: null,
      loadedId: 1,
      nextTick: null,
      changeStatus: false,
      pageEnd: true,
      nextReload: function nextReload() {
        _this.lifecycle('reload');
      }
    });
    funcProxy(this, {
      options: function options() {
        return fc.options;
      },
      bus: function bus() {
        return fc.bus;
      }
    });
    this.initData(fc.rules);
    this.$manager = new fc.manager(this);
    this.$render = new Render(this);
    this.api = fc.extendApi(Api(this), this);
  }
  extend(Handler.prototype, {
    initData: function initData(rules) {
      extend(this, {
        fieldCtx: {},
        ctxs: {},
        nameCtx: {},
        sort: [],
        rules: rules,
        repeatRule: []
      });
      useHelper(rules);
    },
    init: function init() {
      this.useProvider();
      this.usePage();
      this.loadRule();

      this.$manager.__init();

      this.vm.$set(this.vm, 'formData', this.formData);
    }
  });
  useInject(Handler);
  usePage(Handler);
  useRender$1(Handler);
  useLoader(Handler);
  useInput(Handler);
  useContext(Handler);
  useLifecycle(Handler);
  useEffect(Handler);

  var NAME$9 = 'fcFragment';
  var fragment = {
    name: NAME$9,
    functional: true,
    render: function render(h, ctx) {
      return ctx.children;
    }
  };

  function parseProp(prop) {
    if (is.String(prop)) return {
      domProps: {
        innerHTML: prop
      }
    };
    return prop;
  }

  function CreateNodeFactory() {
    var aliasMap = {};

    function CreateNode(vm) {
      vm && this.setVm(vm);
    }

    extend(CreateNode.prototype, {
      setVm: function setVm(vm) {
        this.vm = vm;
        this.$h = vm.$createElement;
      },
      make: function make(tag, data, children) {
        if (Vue.config.isReservedTag(tag) && data.nativeOn) delete data.nativeOn;
        var Node = this.$h(tag, parseProp(data), children || []);
        Node.context = this.vm;
        return Node;
      },
      aliasMap: aliasMap
    });
    extend(CreateNode, {
      aliasMap: aliasMap,
      alias: function alias(_alias, name) {
        aliasMap[_alias] = name;
      },
      use: function use(nodes) {
        Object.keys(nodes).forEach(function (k) {
          var line = toLine(k);
          var lower = toString$1(k).toLocaleLowerCase();
          var v = nodes[k];
          [k, line, lower].forEach(function (n) {
            CreateNode.alias(k, v);

            CreateNode.prototype[n] = function (data, children) {
              return this.make(v, data, children);
            };
          });
        });
      }
    });
    return CreateNode;
  }

  function createManager(proto) {
    var CustomManager = /*#__PURE__*/function (_Manager) {
      _inherits(CustomManager, _Manager);

      var _super = _createSuper(CustomManager);

      function CustomManager() {
        _classCallCheck(this, CustomManager);

        return _super.apply(this, arguments);
      }

      return CustomManager;
    }(Manager);

    Object.assign(CustomManager.prototype, proto);
    return CustomManager;
  }
  function Manager(handler) {
    extend(this, {
      $handle: handler,
      vm: handler.vm,
      options: {},
      ref: 'fcForm',
      mergeOptionsRule: {
        normal: ['form', 'row', 'info', 'submitBtn', 'resetBtn']
      }
    });
    this.updateKey();
    this.init();
  }
  extend(Manager.prototype, {
    __init: function __init() {
      var _this = this;

      this.$render = this.$handle.$render;

      this.$r = function () {
        var _this$$render;

        return (_this$$render = _this.$render).renderRule.apply(_this$$render, arguments);
      };
    },
    updateKey: function updateKey() {
      this.key = uniqueId();
    },
    //TODO interface
    init: function init() {},
    update: function update() {},
    beforeRender: function beforeRender() {},
    form: function form() {
      return this.vm.$refs[this.ref];
    },
    mergeOptions: function mergeOptions(args, opt) {
      var _this2 = this;

      return mergeProps(args.map(function (v) {
        return _this2.tidyOptions(v);
      }), opt, this.mergeOptionsRule);
    },
    updateOptions: function updateOptions(options) {
      this.options = this.mergeOptions([options], this.getDefaultOptions());
      this.update();
    },
    tidyOptions: function tidyOptions(options) {
      return options;
    },
    tidyRule: function tidyRule(ctx) {},
    mergeProp: function mergeProp(ctx) {},
    getDefaultOptions: function getDefaultOptions() {
      return {};
    },
    render: function render(children) {}
  });

  var _vue = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue;

  function _parseProp(name, id) {
    var prop;

    if (arguments.length === 2) {
      prop = arguments[1];
      id = prop[name];
    } else {
      prop = arguments[2];
    }

    return {
      id: id,
      prop: prop
    };
  }

  function nameProp() {
    return _parseProp.apply(void 0, ['name'].concat(Array.prototype.slice.call(arguments)));
  }

  function _getEl(options) {
    if (!options || !options.el) return window.document.body;
    return is.Element(options.el) ? options.el : document.querySelector(options.el);
  }

  function mountForm(rules, option) {
    var $vm = new _vue({
      data: function data() {
        //todo 外部无法修改
        return {
          rule: rules,
          option: option || {}
        };
      },
      render: function render(h) {
        return h('FormCreate', {
          ref: 'fc',
          props: this.$data
        });
      }
    });
    $vm.$mount();
    return $vm;
  }

  function exportAttrs(attrs) {
    var key = attrs.key || [];
    var array = attrs.array || [];
    var normal = attrs.normal || [];
    keyAttrs.push.apply(keyAttrs, _toConsumableArray(key));
    arrayAttrs.push.apply(arrayAttrs, _toConsumableArray(array));
    normalAttrs.push.apply(normalAttrs, _toConsumableArray(normal));
    appendProto([].concat(_toConsumableArray(key), _toConsumableArray(array), _toConsumableArray(normal)));
  } //todo 表单嵌套


  function FormCreateFactory(config) {
    var components = _defineProperty({}, fragment.name, fragment);

    var parsers = {};
    var directives = {};
    var providers = {};
    var maker = makerFactory();
    var globalConfig = {
      global: {}
    };
    var data = {};
    var CreateNode = CreateNodeFactory();
    exportAttrs(config.attrs || {});

    function directive() {
      var data = nameProp.apply(void 0, arguments);
      if (data.id && data.prop) directives[data.id] = data.prop;
    }

    function register() {
      var data = nameProp.apply(void 0, arguments);
      if (data.id && data.prop) providers[data.id] = _objectSpread2(_objectSpread2({}, data.prop), {}, {
        name: data.id
      });
    }

    function componentAlias(alias) {
      CreateNode.use(alias);
    }

    function parser() {
      var data = nameProp.apply(void 0, arguments);
      if (!data.id || !data.prop) return;
      var name = toCase(data.id);
      var parser = data.prop;
      var base = parser.merge === true ? parsers[name] : undefined;
      parsers[name] = _objectSpread2(_objectSpread2({}, base || BaseParser), parser);
      maker[name] = creatorFactory(name);
      parser.maker && extend(maker, parser.maker);
    }

    function component(id, component) {
      var name;

      if (is.String(id)) {
        name = toCase(id);

        if (['form-create', 'formcreate'].indexOf(name) > -1) {
          return $form();
        } else if (component === undefined) {
          return components[name];
        }
      } else {
        name = toCase(id.name);
        component = id;
      }

      if (!name || !component) return;
      components[name] = component;
      if (component.formCreateParser) parser(name, component.formCreateParser);
    }

    function $form() {
      return _vue.extend($FormCreate(FormCreate));
    } //todo 检查回调函数作用域


    function use(fn, opt) {
      if (is.Function(fn.install)) fn.install(create, opt);else if (is.Function(fn)) fn(create, opt);
      return this;
    }

    function create(rules, _opt, parent) {
      var $vm = mountForm(rules, _opt || {});
      var _this = $vm.$refs.fc.formCreate;
      _this.$parent = parent;

      _getEl(_this.options).appendChild($vm.$el);

      return _this.api();
    }

    function FormCreate(vm, rules, options) {
      extend(this, {
        vm: vm,
        manager: createManager(config.manager),
        parsers: parsers,
        providers: providers,
        rules: Array.isArray(rules) ? rules : [],
        prop: {
          components: components,
          directives: directives
        },
        CreateNode: CreateNode,
        bus: new _vue(),
        unwatch: null,
        extendApi: config.extendApi || function (api) {
          return api;
        }
      });
      this.init();
      this.initOptions(options || {});
    }

    extend(FormCreate.prototype, {
      init: function init() {
        var _this2 = this;

        var vm = this.vm;
        var h = new Handler(this);
        this.$handle = h;
        vm.$f = h.api;
        vm.$emit('input', h.api);
        vm.$on('hook:created', function () {
          if (_this2.isSub()) {
            _this2.unwatch = vm.$watch(function () {
              return vm.$pfc.option;
            }, function () {
              _this2.initOptions(_this2.options);

              vm.$f.refresh();
            }, {
              deep: true
            });

            _this2.initOptions(_this2.options);
          }

          _this2.created();
        });
        vm.$on('hook:mounted', function () {
          _this2.mounted();
        });
        vm.$on('hook:beforeDestroy', function () {
          _this2.unwatch && _this2.unwatch();
          h.reloadRule([]);
        });
        vm.$on('hook:updated', function () {
          h.bindNextTick(function () {
            return _this2.bus.$emit('next-tick', h.api);
          });
        });
      },
      isSub: function isSub() {
        return this.vm.$pfc && this.vm.extendOption;
      },
      initOptions: function initOptions(options) {
        this.options = _objectSpread2({
          formData: {},
          submitBtn: {},
          resetBtn: {}
        }, globalConfig);

        if (this.isSub()) {
          this.mergeOptions(this.options, this.vm.$pfc.$f.config);
        }

        this.updateOptions(options);
      },
      mergeOptions: function mergeOptions(target, opt) {
        if (opt.global) {
          target.global = mergeGlobal(target.global, opt.global);
        }

        this.$handle.$manager.mergeOptions([opt], target);
        return target;
      },
      updateOptions: function updateOptions(options) {
        this.mergeOptions(this.options, options);
        this.$handle.$manager.updateOptions(this.options);
      },
      created: function created() {
        this.$handle.init();
      },
      api: function api() {
        return this.$handle.api;
      },
      render: function render() {
        return this.$handle.render();
      },
      mounted: function mounted() {
        this.$handle.mounted();
      }
    });

    function useAttr(formCreate) {
      extend(formCreate, {
        version: config.version,
        ui: config.ui,
        data: data,
        maker: maker,
        component: component,
        directive: directive,
        register: register,
        parser: parser,
        use: use,
        componentAlias: componentAlias,
        copyRule: copyRule,
        copyRules: copyRules,
        $form: $form,
        parseJson: parseJson
      });
    }

    function useStatic(FormCreate) {
      extend(FormCreate, {
        create: create,
        install: function install(Vue, options) {
          globalConfig = _objectSpread2(_objectSpread2({}, globalConfig), options || {});
          if (Vue._installedFormCreate === true) return;
          Vue._installedFormCreate = true;
          _vue = Vue;

          var $formCreate = function $formCreate(rules) {
            var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return create(rules, opt, this);
          };

          useAttr($formCreate);
          Vue.prototype.$formCreate = $formCreate;
          Vue.component('FormCreate', $form());
        },
        init: function init(rules) {
          var _opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var $vm = mountForm(rules, _opt),
              _this = $vm.$refs.fc.formCreate;
          return {
            mount: function mount($el) {
              if ($el && is.Element($el)) _this.options.el = $el;

              _getEl(_this.options).appendChild($vm.$el);

              return _this.api();
            },
            remove: function remove() {
              $vm.$el.parentNode && $vm.$el.parentNode.removeChild($vm.$el);
            },
            destroy: function destroy() {
              this.remove();
              $vm.$destroy();
            },
            $f: _this.api()
          };
        }
      });
    }

    useAttr(create);
    useStatic(create);
    CreateNode.use({
      fragment: 'fcFragment'
    });
    if (config.install) create.use(config);
    return create;
  }

  function timeStampToDate(timeStamp) {
    if (is.Date(timeStamp)) return timeStamp;else {
      var date = new Date(timeStamp);
      return date.toString() === 'Invalid Date' ? timeStamp : date;
    }
  }
  var name = 'datePicker';
  var datePicker = {
    name: name,
    maker: function () {
      return ['date', 'dateRange', 'datetime', 'datetimeRange', 'year', 'month'].reduce(function (maker, type) {
        maker[type] = creatorFactory(name, {
          type: type.toLowerCase()
        });
        return maker;
      }, {});
    }(),
    mergeProp: function mergeProp(ctx) {
      var props = ctx.prop.props;

      if (props.startDate) {
        props.startDate = props.startDate && timeStampToDate(props.startDate);
      }
    },
    isRange: function isRange(el) {
      return el.type.includes('range') || el.multiple;
    },
    _toValue: function _toValue(val, ctx) {
      var value = ctx.el.formatDate(val || ''),
          separator = ctx.el.separator,
          isRange = this.isRange(ctx.el);
      if (!value) return isRange ? ctx.el.multiple ? [] : ['', ''] : value;else if (isRange) return value.split(separator);else return value;
    },
    toValue: function toValue(formValue, ctx) {
      var el = ctx.el;

      if (el) {
        this.el = el;
        return this._toValue(formValue, ctx);
      }

      return formValue;
    },
    toFormValue: function toFormValue(value, ctx) {
      if (ctx.el) {
        var v = ctx.el.parseDate(value);
        return this.isRange(ctx.el) ? v : v[0];
      } else {
        var isArr = Array.isArray(value),
            props = ctx.prop.props,
            parseValue,
            type = props.type || 'date';

        if (['daterange', 'datetimerange'].indexOf(type) !== -1) {
          if (isArr) {
            parseValue = value.map(function (time) {
              return !time ? '' : timeStampToDate(time);
            });
          } else {
            parseValue = ['', ''];
          }
        } else if ('date' === type && props.multiple === true) {
          parseValue = toString(value);
        } else {
          parseValue = isArr ? value[0] || '' : value;
          parseValue = !parseValue ? '' : timeStampToDate(parseValue);
        }

        return parseValue;
      }
    },
    mounted: function mounted(ctx) {
      ctx.rule.value = this.toValue(ctx.$handle.getFormData(ctx), ctx);
    }
  };

  var name$1 = 'hidden';
  var hidden = {
    name: name$1,
    maker: _defineProperty({}, name$1, function (field, value) {
      return creatorFactory(name$1)('', field, value);
    }),
    render: function render() {
      return [];
    }
  };

  var name$2 = 'input';
  var input = {
    name: name$2,
    maker: function () {
      var maker = ['password', 'url', 'email', 'text', 'textarea'].reduce(function (maker, type) {
        maker[type] = creatorFactory(name$2, {
          type: type
        });
        return maker;
      }, {});
      maker.idate = creatorFactory(name$2, {
        type: 'date'
      });
      return maker;
    }(),
    mergeProp: function mergeProp(ctx) {
      var props = ctx.prop.props;

      if (props.autosize && props.autosize.minRows) {
        props.rows = props.autosize.minRows || 2;
      }
    }
  };

  var name$3 = 'slider';
  var slider = {
    name: name$3,
    maker: {
      sliderRange: creatorFactory(name$3, {
        range: true
      })
    },
    toFormValue: function toFormValue(value, ctx) {
      var isArr = Array.isArray(value),
          props = ctx.prop.props,
          min = props.min || 0,
          parseValue;

      if (props.range === true) {
        parseValue = isArr ? value : [min, parseFloat(value) || min];
      } else {
        parseValue = isArr ? parseFloat(value[0]) || min : parseFloat(value);
      }

      return parseValue;
    }
  };

  var iswitch = {
    name: 'switch',
    mergeProp: function mergeProp(ctx) {
      var prop = ctx.prop.props.slot || {};
      var slot = ctx.prop.scopedSlots || {};
      if (prop.open) slot.open = function () {
        return prop.open;
      };
      if (prop.close) slot.close = function () {
        return prop.close;
      };
      ctx.prop.scopedSlots = slot;
    }
  };

  var parsers = [datePicker, hidden, input, slider, iswitch];

  var alias = {
    button: 'iButton',
    icon: 'Icon',
    slider: 'Slider',
    rate: 'Rate',
    upload: 'fcUpload',
    cascader: 'Cascader',
    colorPicker: 'ColorPicker',
    timePicker: 'TimePicker',
    datePicker: 'DatePicker',
    'switch': 'iSwitch',
    select: 'fcSelect',
    checkbox: 'fcCheckbox',
    radio: 'fcRadio',
    inputNumber: 'InputNumber',
    input: 'iInput',
    formItem: 'FormItem',
    form: 'iForm',
    frame: 'fcFrame',
    col: 'iCol',
    row: 'row',
    tree: 'fcTree',
    autoComplete: 'AutoComplete',
    group: 'fcGroup',
    subForm: 'fcSubForm',
    object: 'fcSubForm'
  };

  var iviewConfig = {
    resetBtnType: 'default',
    resetBtnIcon: 'md-refresh',
    infoIcon: 'ios-information-circle-outline'
  };
  function info() {
    return {
      type: 'poptip',
      trigger: 'hover',
      placement: 'top-start',
      wordWrap: true,
      icon: iviewConfig.infoIcon
    };
  }
  function getConfig() {
    return {
      form: {
        inline: false,
        labelPosition: 'right',
        labelWidth: 125,
        showMessage: true,
        autocomplete: 'off',
        size: undefined
      },
      row: {
        gutter: 0
      },
      submitBtn: {
        type: 'primary',
        disabled: false,
        innerText: '提交',
        loading: false,
        show: true,
        click: undefined
      },
      resetBtn: {
        type: iviewConfig.resetBtnType,
        disabled: false,
        icon: iviewConfig.resetBtnIcon,
        innerText: '重置',
        loading: false,
        show: false,
        click: undefined
      }
    };
  }

  function tidy(props, name) {
    if (!hasProperty(props, name)) return;

    if (is.String(props[name])) {
      var _props$name;

      props[name] = (_props$name = {}, _defineProperty(_props$name, name, props[name]), _defineProperty(_props$name, "show", true), _props$name);
    }
  }

  function isFalse(val) {
    return val === false;
  }

  function tidyBool(opt, name) {
    if (hasProperty(opt, name) && !is.Object(opt[name])) {
      opt[name] = {
        show: !!opt[name]
      };
    }
  }

  var manager = {
    validate: function validate(call) {
      this.form().validate(call);
    },
    validateField: function validateField(field, call) {
      this.form().validateField(field, call);
    },
    clearValidateState: function clearValidateState(ctx) {
      var fItem = this.vm.$refs[ctx.wrapRef];

      if (fItem) {
        fItem.validateMessage = '';
        fItem.validateState = '';
      }
    },
    tidyOptions: function tidyOptions(options) {
      ['submitBtn', 'resetBtn', 'row', 'info', 'wrap', 'col'].forEach(function (name) {
        tidyBool(options, name);
      });
      return options;
    },
    tidyRule: function tidyRule(_ref) {
      var prop = _ref.prop;
      tidy(prop, 'title');
      tidy(prop, 'info');
      return prop;
    },
    mergeProp: function mergeProp(ctx) {
      ctx.prop = mergeProps([{
        info: this.options.info || {},
        wrap: this.options.wrap || {},
        col: this.options.col || {}
      }, ctx.prop], {
        info: info(),
        title: {},
        col: {
          span: 24
        },
        wrap: {}
      }, {
        normal: ['title', 'info', 'col', 'wrap']
      });
      this.setSize(ctx.prop.props);
    },
    setSize: function setSize(props) {
      if (!props.size && this.options.form.size) {
        props.size = this.options.form.size;
      }
    },
    getDefaultOptions: function getDefaultOptions() {
      return getConfig();
    },
    update: function update() {
      var form = this.options.form;
      this.rule = {
        props: _objectSpread2({}, form),
        nativeOn: {
          submit: function submit(e) {
            e.preventDefault();
          }
        },
        "class": [form.className, form["class"], 'form-create'],
        style: form.style,
        type: 'form'
      };
    },
    beforeRender: function beforeRender() {
      var key = this.key,
          ref = this.ref,
          $handle = this.$handle;
      extend(this.rule, {
        key: key,
        ref: ref
      });
      extend(this.rule.props, {
        model: $handle.formData,
        rules: $handle.validate()
      });
    },
    render: function render(children) {
      if (children.length) {
        children.push(this.makeFormBtn());
      }

      return this.$r(this.rule, isFalse(this.options.row.show) ? children : [this.makeRow(children)]);
    },
    makeWrap: function makeWrap(ctx, children) {
      var rule = ctx.prop;
      var uni = "".concat(this.key).concat(ctx.key);
      var col = rule.col;
      var labelWidth = !col.labelWidth && isFalse(rule.title.show) ? 0 : col.labelWidth;
      var _this$rule$props = this.rule.props,
          inline = _this$rule$props.inline,
          _col = _this$rule$props.col;
      var item = isFalse(rule.wrap.show) ? children : this.$r(mergeProps([rule.wrap, {
        props: _objectSpread2(_objectSpread2({
          label: rule.title.title,
          labelWidth: labelWidth
        }, rule.wrap || {}), {}, {
          prop: ctx.field,
          rules: rule.validate
        }),
        "class": rule.className,
        key: "".concat(uni, "fi"),
        ref: ctx.wrapRef,
        type: 'formItem'
      }]), [children, this.makeInfo(rule, uni)]);
      return inline === true || isFalse(_col) || isFalse(col.show) ? item : this.makeCol(rule, uni, [item]);
    },
    makeInfo: function makeInfo(rule, uni) {
      var _this = this;

      var titleProp = rule.title;
      var infoProp = rule.info;
      if (!titleProp.title && !titleProp["native"] || isFalse(titleProp.show)) return;
      var children = [titleProp.title];

      var titleFn = function titleFn(pop) {
        return _this.$r(mergeProps([titleProp, {
          props: titleProp,
          slot: titleProp.slot || (pop ? 'default' : 'label'),
          key: "".concat(uni, "tit"),
          type: titleProp.type || 'span'
        }]), children);
      };

      if (!isFalse(infoProp.show) && (infoProp.info || infoProp["native"])) {
        if (infoProp.icon !== false) {
          children[infoProp.align !== 'left' ? 'unshift' : 'push'](this.$r({
            type: 'icon',
            props: {
              type: infoProp.icon === true ? iviewConfig.infoIcon : infoProp.icon,
              size: 16
            },
            style: 'margin-top: -1px',
            key: "".concat(uni, "i")
          }));
        }

        var prop = {
          type: infoProp.type || 'poptip',
          props: _objectSpread2({}, infoProp),
          key: "".concat(uni, "pop"),
          slot: 'label'
        };
        var field = 'content';

        if (infoProp.info && !hasProperty(prop.props, field)) {
          prop.props[field] = infoProp.info;
        }

        return this.$r(mergeProps([infoProp, prop]), [titleFn(true)]);
      }

      return titleFn();
    },
    makeCol: function makeCol(rule, uni, children) {
      var col = rule.col;
      return this.$r({
        "class": col["class"],
        type: 'col',
        props: col || {
          span: 24
        },
        key: "".concat(uni, "col")
      }, children);
    },
    makeRow: function makeRow(children) {
      var row = this.options.row || {};
      return this.$r({
        type: 'row',
        props: row,
        "class": row["class"],
        key: "".concat(this.key, "row")
      }, children);
    },
    makeFormBtn: function makeFormBtn() {
      var vn = [];

      if (!isFalse(this.options.submitBtn.show)) {
        vn.push(this.makeSubmitBtn());
      }

      if (!isFalse(this.options.resetBtn.show)) {
        vn.push(this.makeResetBtn());
      }

      if (!vn.length) {
        return;
      }

      var item = this.$r({
        type: 'formItem',
        key: "".concat(this.key, "fb")
      }, vn);
      return this.rule.props.inline === true ? item : this.$r({
        type: 'col',
        props: {
          span: 24
        },
        key: "".concat(this.key, "fc")
      }, [item]);
    },
    makeResetBtn: function makeResetBtn() {
      var _this2 = this;

      var resetBtn = this.options.resetBtn;
      this.setSize(resetBtn);
      return this.$r({
        type: 'button',
        props: resetBtn,
        style: {
          width: resetBtn.width,
          marginLeft: '15px'
        },
        on: {
          click: function click() {
            var fApi = _this2.$handle.api;
            resetBtn.click ? resetBtn.click(fApi) : fApi.resetFields();
          }
        },
        key: "".concat(this.key, "b2")
      }, [resetBtn.innerText]);
    },
    makeSubmitBtn: function makeSubmitBtn() {
      var _this3 = this;

      var submitBtn = this.options.submitBtn;
      this.setSize(submitBtn);
      return this.$r({
        type: 'button',
        props: submitBtn,
        style: {
          width: submitBtn.width
        },
        on: {
          click: function click() {
            var fApi = _this3.$handle.api;
            submitBtn.click ? submitBtn.click(fApi) : fApi.submit();
          }
        },
        key: "".concat(this.key, "b1")
      }, [submitBtn.innerText]);
    }
  };

  var maker = {};
  var names = ['upload', 'select', 'tree', 'checkbox', 'autoComplete', 'cascader', 'colorPicker', 'frame', 'inputNumber', 'radio', 'rate', 'timePicker', 'group'];

  function useAlias(maker) {
    names.forEach(function (name) {
      maker[name] = creatorFactory(name);
    });
    maker.auto = maker.autoComplete;
    maker.number = maker.inputNumber;
    maker.color = maker.colorPicker;
  }

  function useUpload(maker) {
    var name = 'upload';
    var types = {
      image: ['image', 0],
      file: ['file', 0],
      uploadFileOne: ['file', 1],
      uploadImageOne: ['image', 1]
    };
    Object.keys(types).reduce(function (maker, key) {
      maker[key] = creatorFactory(name, function (m) {
        return m.props({
          uploadType: types[key][0],
          maxLength: types[key][1]
        });
      });
      return maker;
    }, maker);
    maker.uploadImage = maker.image;
    maker.uploadFile = maker.file;
  }

  function useTree(maker) {
    var name = 'tree';
    var types = {
      'treeSelected': 'selected',
      'treeChecked': 'checked'
    };
    Object.keys(types).reduce(function (maker, key) {
      maker[key] = creatorFactory(name, {
        type: types[key]
      });
      return maker;
    }, maker);
  }

  function useTimePicker(maker) {
    var name = 'timePicker';
    maker.time = creatorFactory(name, {
      type: 'time'
    });
    maker.timeRange = creatorFactory(name, {
      type: 'timerange'
    });
  }

  function useSelect(maker) {
    var name = 'select';
    maker.selectMultiple = creatorFactory(name, {
      multiple: true
    });
    maker.selectOne = creatorFactory(name, {
      multiple: false
    });
  }

  function useFrame(maker) {
    var name = 'frame';
    var types = {
      frameInputs: ['input', 0],
      frameFiles: ['file', 0],
      frameImages: ['image', 0],
      frameInputOne: ['input', 1],
      frameFileOne: ['file', 1],
      frameImageOne: ['image', 1]
    };
    Object.keys(types).reduce(function (maker, key) {
      maker[key] = creatorFactory(name, function (m) {
        return m.props({
          type: types[key][0],
          maxLength: types[key][1]
        });
      });
      return maker;
    }, maker);
    maker.frameInput = maker.frameInputs;
    maker.frameFile = maker.frameFiles;
    maker.frameImage = maker.frameImages;
  }

  useAlias(maker);
  useUpload(maker);
  useTree(maker);
  useSelect(maker);
  useFrame(maker);
  useTimePicker(maker);

  var css_248z$2 = ".form-create .form-create .ivu-form-item {\n    margin-bottom: 24px;\n}\n\n.form-create .form-create .ivu-form-item .ivu-form-item {\n    margin-bottom: 0px;\n}\n";
  styleInject(css_248z$2);

  function tidyBtnProp(btn, def) {
    if (is.Boolean(btn)) btn = {
      show: btn
    };else if (!is.Undef(btn) && !is.Object(btn)) btn = {
      show: def
    };
    return btn;
  }

  function extendApi(api, h) {
    extend(api, {
      validate: function validate(callback) {
        var _this = this;

        var state = false;

        var subForm = _objectSpread2(_objectSpread2({}, {
          ___this: {
            validate: function validate(call) {
              h.$manager.validate(call);
            }
          }
        }), h.subForm);

        var keys = Object.keys(subForm).filter(function (field) {
          var sub = subForm[field];
          return Array.isArray(sub) ? sub.length : !is.Undef(sub);
        }),
            len = keys.length,
            subLen;

        var validFn = function validFn(args, field) {
          if (args[0]) {
            if (subLen > 1) subLen--;else if (len > 1) len--;else callback && callback.apply(void 0, _toConsumableArray(args));
          } else {
            if (!state) {
              callback && callback.apply(void 0, _toConsumableArray(args));
              state = true;
            }

            field && _this.clearValidateState(field, false);
          }
        };

        keys.forEach(function (field) {
          var sub = subForm[field];

          if (Array.isArray(sub)) {
            subLen = sub.length;
            sub.forEach(function (form) {
              form.validate(function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                return validFn(args, field);
              });
            });
          } else if (sub) {
            subLen = 1;
            sub.validate(function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              return validFn(args);
            });
          }
        });
      },
      validateField: function validateField(field, callback) {
        if (!h.fieldCtx[field]) return;
        h.$manager.validateField(field, callback);
      },
      clearValidateState: function clearValidateState(fields) {
        var _this2 = this;

        var clearSub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        api.helper.tidyFields(fields).forEach(function (field) {
          if (clearSub) _this2.clearSubValidateState(field);
          var ctx = h.fieldCtx[field];
          if (!ctx) return;
          h.$manager.clearValidateState(ctx);
        });
      },
      clearSubValidateState: function clearSubValidateState(fields) {
        api.helper.tidyFields(fields).forEach(function (field) {
          var subForm = h.subForm[field];
          if (!subForm) return;

          if (Array.isArray(subForm)) {
            subForm.forEach(function (form) {
              form.clearValidateState();
            });
          } else if (subForm) {
            subForm.clearValidateState();
          }
        });
      },
      btn: {
        loading: function loading() {
          var _loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          api.submitBtnProps({
            loading: !!_loading
          });
        },
        disabled: function disabled() {
          var _disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          api.submitBtnProps({
            disabled: !!_disabled
          });
        },
        show: function show() {
          var isShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          api.submitBtnProps({
            show: !!isShow
          });
        }
      },
      resetBtn: {
        loading: function loading() {
          var _loading2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          api.resetBtnProps({
            loading: !!_loading2
          });
        },
        disabled: function disabled() {
          var _disabled2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          api.resetBtnProps({
            disabled: !!_disabled2
          });
        },
        show: function show() {
          var isShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          api.resetBtnProps({
            show: !!isShow
          });
        }
      },
      submitBtnProps: function submitBtnProps() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var btn = tidyBtnProp(h.options.submitBtn, true);
        extend(btn, props);
        h.options.submitBtn = btn;
        api.refreshOptions();
      },
      resetBtnProps: function resetBtnProps() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var btn = tidyBtnProp(h.options.resetBtn, false);
        extend(btn, props);
        h.options.resetBtn = btn;
        api.refreshOptions();
      },
      submit: function submit(successFn, failFn) {
        var _arguments = arguments,
            _this3 = this;

        api.validate(function (valid) {
          if (valid) {
            var formData = api.formData();
            if (is.Function(successFn)) invoke(function () {
              return successFn(formData, _this3);
            });else {
              is.Function(h.options.onSubmit) && invoke(function () {
                return h.options.onSubmit(formData, _this3);
              });
              h.vm.$emit('submit', formData, _this3);
            }
          } else {
            is.Function(failFn) && invoke(function () {
              return failFn.apply(void 0, [_this3].concat(_toConsumableArray(_arguments)));
            });
          }
        });
      }
    });
    return api;
  }

  function install(FormCreate) {
    FormCreate.componentAlias(alias);
    components.forEach(function (component) {
      FormCreate.component(component.name, component);
    });
    parsers.forEach(function (parser) {
      FormCreate.parser(parser);
    });
    Object.keys(maker).forEach(function (name) {
      FormCreate.maker[name] = maker[name];
    });
  }

  function ivuFormCreate() {
    return FormCreateFactory({
      ui: "".concat("iview"),
      version: "".concat("2.5.0-alpha.2"),
      manager: manager,
      install: install,
      extendApi: extendApi,
      attrs: {
        normal: ['col', 'wrap'],
        array: ['className'],
        key: ['title', 'info']
      }
    });
  }

  var FormCreate = ivuFormCreate();

  if (typeof window !== 'undefined') {
    window.formCreate = FormCreate;

    if (window.Vue) {
      FormCreate.install(window.Vue);
    }
  }

  var maker$1 = FormCreate.maker;

  exports.default = FormCreate;
  exports.maker = maker$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
