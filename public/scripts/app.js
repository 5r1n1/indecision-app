"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var IndecisionApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));
    _this.addOption = _this.addOption.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeAll = _this.removeAll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeOption = _this.removeOption.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.pickRand = _this.pickRand.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      appSubtitle: 'Computer decides life for you!',
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "addOption",
    value: function addOption(item) {
      var _this2 = this;

      if (!item) return 'Enter valid value to add item';else if (this.state.options.indexOf(item) > -1) return 'This option already exists';
      this.setState(function () {
        return {
          options: _this2.state.options.concat(item)
        };
      });
    }
  }, {
    key: "removeOption",
    value: function removeOption(idx) {
      var _this3 = this;

      this.setState(function () {
        return {
          options: _this3.state.options.filter(function (item, index) {
            return index !== idx;
          })
        };
      });
    }
  }, {
    key: "pickRand",
    value: function pickRand() {
      var r = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[r]);
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Header, {
        subtitle: this.state.appSubtitle
      }), React.createElement(Action, {
        opt: this.state.options,
        rmvAll: this.removeAll,
        handlePick: this.pickRand
      }), React.createElement(Options, {
        opt: this.state.options,
        rmvOpt: this.removeOption
      }), React.createElement(AddOption, {
        addOpt: this.addOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

;
IndecisionApp.defaultProps = {
  options: ['Finish ReactJS Course', 'Contribute to PRaaS', 'Backup Sarayu Machine', 'Install Debian 9 in Sarayu Computer']
};

var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("h1", null, props.title), props.subtitle && React.createElement("h4", null, props.subtitle));
};

Header.defaultProps = {
  title: 'Indecision App'
};

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: function onClick(e) {
      return props.rmvAll();
    }
  }, "Remove All Options"), React.createElement("button", {
    disabled: !props.opt.length,
    onClick: function onClick(e) {
      return props.handlePick();
    }
  }, "What should I do?"));
};

var Options = function Options(props) {
  return React.createElement("ol", null, props.opt.map(function (itm, idx) {
    return React.createElement(Option, {
      key: idx,
      keyValue: idx,
      item: itm,
      rmvOption: props.rmvOpt
    });
  }));
};

var Option = function Option(props) {
  return React.createElement("li", null, props.item, React.createElement("button", {
    onClick: function onClick(e) {
      return props.rmvOption(props.keyValue);
    }
  }, "Remove"));
};

var AddOption =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    var _this4;

    _classCallCheck(this, AddOption);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this4.onFormSubmit = _this4.onFormSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this4)));
    _this4.state = {
      error: undefined
    };
    return _this4;
  }

  _createClass(AddOption, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.addOpt(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      if (option) e.target.elements.option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, React.createElement("input", {
        type: "text",
        name: "option"
      }), React.createElement("button", null, "Add option")));
    }
  }]);

  return AddOption;
}(React.Component);

;
ReactDOM.render(React.createElement(IndecisionApp, {
  options: ['Watch Movie', 'Supper @Rayar ', 'Kabali Pradakshanam', 'KAJ Schmidt', 'Bicycle to Beach']
}), document.getElementById('app'));
