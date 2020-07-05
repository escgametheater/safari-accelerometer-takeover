const React = require("react");
const Takeover = require("./Takeover");
const deviceMotionChecker = require("./deviceMotionChecker");

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

module.exports = function withDeviceMotionDetector(WrappedComponent) {
  class DeviceMotionDetector extends React.PureComponent {
    constructor() {
      super();
      this.state = {
        deviceMotionDetected: false,
      }

      deviceMotionChecker().then((result) => {
        this.setState({
          deviceMotionDetected: true,
          hasDeviceMotion: result.working,
          isIOS12_2: result.iOS12_2,
        })
      });
    }
    render() {
      if (this.state.deviceMotionDetected && !this.state.hasDeviceMotion && this.state.isIOS12_2) {
        return <Takeover />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  DeviceMotionDetector.displayName = `WithDeviceMotionDetector(${getDisplayName(WrappedComponent)})`

  return DeviceMotionDetector;
}