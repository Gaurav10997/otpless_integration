export const initOTPless = () => {

    var otplessInit = window[otplessInit];

    const loadScript = () =>{
        const script = document.createElement("script")
        script.src = "https://otpless.com/auth.js";
        script.cid = "V2NA1B1H1F32X4JONYCRLNG27VE692BO";
        document.body.appendChild(script)
    }

    if (otplessInit) {
        otplessInit()
    }
    else {
        loadScript()
    }

    window.otpless = (otplessUser) => {
        const currentURL = window.location.href;
        const urlWithoutParams = currentURL.split("?")[0];
        window.history.pushState(null, "", urlWithoutParams);
        alert("OTPLESS DATA :"+JSON.stringify(otplessUser))
        window.location.href = '/dashboard';
    };
}