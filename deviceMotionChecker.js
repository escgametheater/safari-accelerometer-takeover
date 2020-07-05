module.exports = function deviceMotionChecker () {
    
    return new Promise((s, f) => {
        const status = {
            working: false,
            timedOut: false,
            // iOS12_2: navigator.userAgent.includes("OS 12_2"),
            secure: location.protocol === 'https:'
        };

        const isIOS = navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad");
        const version = navigator.userAgent.match(/OS (\d+)\_(\d+)/);

        status.iOS12_2 = isIOS && parseFloat(`${version[1]}.${version[2]}`) >= 12.2;

        function noDeviceMotionCheck() {
            status.timedOut = true;
            s(status);
        }

        const noDeviceMotionTimeout = setTimeout(noDeviceMotionCheck, 250);

        function deviceMotionChecker() {
            window.removeEventListener('devicemotion', deviceMotionChecker, true);
            clearTimeout(noDeviceMotionTimeout);
            status.working = true;
            s(status);
        }

        window.addEventListener("devicemotion", deviceMotionChecker, true);
    });
}
