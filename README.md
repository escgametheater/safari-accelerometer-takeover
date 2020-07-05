# safari-accelerometer-takeover

This provides tools for detecting accelerometer support, and rendering a takeover that instructs the user on how to enable motion support.

## Why

The iOS 12.2 release is now disabling the accelerometer in Safari by default. This is particularly frustrating for ESC Games, as many games in our portfolio rely on device motion to play. We believe while it is important to protect privacy, users should be given the choice to opt in to the feature on a per instance bases similar to notifications.

## How to use

### Higher Order Component

This library provides a [Higher Order Component](https://reactjs.org/docs/higher-order-components.html) to automatically detect and render the takeover.

```
import {withDeviceMotionDetector} from "@esc_games/safari-accelerometer-takeover";

class App extends React.Component {...}

module.exports = withDeviceMotionDetector(App);
```



### Manually

Here is an example of how you would use the feature detector, and takeover component together:

```
import SafariAccelerometerTakeover from "@esc_games/safari-accelerometer-takeover/Takeover";
import deviceMotionChecker from "@esc_games/safari-accelerometer-takeover/deviceMotionChecker";

class App extends React.Component {
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
			return <SafariAccelerometerTakeover />;
		}

		return <div>My App</div>;
	}
}
```

## API

### deviceMotionChecker() => Promise

deviceMotionChecker will listen for motion, and once detected will resolve the returned promise. If no motion is detected after 250ms, the checker will timeout and we will assume that the device does not support motion.

*Potential Response*
```
{
	working: Boolean,  // When the feature is detected to be working for the device, this will be true
	timedOut: Boolean, // True if the capture times out
	iOS12_2: Boolean,  // True if the device is detected to be using iOS 12.2
	secure: Boolean	   // True if the location is using SSL (HTTPS)
}
```

### SafariAccelerometerTakeover => Functional React Component

The SafariAccelerometerTakeover renders a fixed element to the screen with informational text, and an image to notify the user of how to enable motion support in settings.

*Props*
```
containerStyles: Object     // Override styles on the fixed container
infoStyles: Object	        // Override styles on the text info container
imgContainerStyles: Object  // Override styles on the image container
infoImg: React.Element      // Override the image used
infoText: React.Element     // Override the info text
```

## LICENSE MIT

Copyright 2019 ESC Games

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

