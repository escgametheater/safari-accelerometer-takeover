"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = require("react");

var Takeover = require("./Takeover");

var deviceMotionChecker = require("./deviceMotionChecker");

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

module.exports = function withDeviceMotionDetector(WrappedComponent) {
  var DeviceMotionDetector =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(DeviceMotionDetector, _React$PureComponent);

    function DeviceMotionDetector() {
      var _this;

      _classCallCheck(this, DeviceMotionDetector);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DeviceMotionDetector).call(this));
      _this.state = {
        deviceMotionDetected: false
      };
      deviceMotionChecker().then(function (result) {
        _this.setState({
          deviceMotionDetected: true,
          hasDeviceMotion: result.working,
          isIOS12_2: result.iOS12_2
        });
      });
      return _this;
    }

    _createClass(DeviceMotionDetector, [{
      key: "render",
      value: function render() {
        if (this.state.deviceMotionDetected && !this.state.hasDeviceMotion && this.state.isIOS12_2) {
          return React.createElement(Takeover, null);
        }

        return React.createElement(WrappedComponent, this.props);
      }
    }]);

    return DeviceMotionDetector;
  }(React.PureComponent);

  DeviceMotionDetector.displayName = "WithDeviceMotionDetector(".concat(getDisplayName(WrappedComponent), ")");
  return DeviceMotionDetector;
};