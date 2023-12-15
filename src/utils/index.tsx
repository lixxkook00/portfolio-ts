import axios from 'axios';
import { IpifyResponse } from 'types';

export async function getIP() {
    axios.get<IpifyResponse>('https://api.ipify.org?format=json')
    .then(
        response => {
            console.log(response.data.ip.toString())
            return response.data.ip.toString()
        }
    )
    .catch(
        error => {
            console.log("getIP : ", error)
            return ""
        }
    );
}

// export async function getLocation() {
//     axios.get<IpifyResponse>(`https://ipapi.co/${userIp}/json/`)
//     .then(
//         response => {
//             console.log(response)
//             return response
//         }
//     )
//     .catch(
//         error => {
//             console.log("getLocation : ", error)
//             return ""
//         }
//     );
// }

export function detectDeviceType(userAgent : string) {
    let deviceType;
    
    const isMobile: boolean = /(iphone|ipod|ipad|android|blackberry|windows phone)/.test(userAgent);
    if (isMobile) {
        deviceType = /iphone|ipod|ipad/.test(userAgent.toLowerCase()) ? 'iOS' : 'Android';
    } else {
        deviceType = 'Desktop';
    }

    return deviceType;
}

export function detectOS(platform : string) {
    const isWindows: boolean = platform.indexOf('Win') !== -1;
    const isMac: boolean = platform.indexOf('Mac') !== -1;
    const isLinux: boolean = platform.indexOf('Linux') !== -1;
    
    let osType: string;
    if (isWindows) {
        osType = 'Windows';
    } else if (isMac) {
        osType = 'macOS';
    } else if (isLinux) {
        osType = 'Linux';
    } else {
        osType = 'Unknown';
    }

    return osType;
}

export function detectBrowserName(userAgent : string) {
    let browserName;
    if (/Edge\//.test(userAgent)) {
        browserName = 'Microsoft Edge';
    } else if (/Trident\/|MSIE /.test(userAgent)) {
        browserName = 'Internet Explorer';
    } else if (/Firefox\//.test(userAgent)) {
        browserName = 'Mozilla Firefox';
    } else if (/Chrome\//.test(userAgent)) {
        browserName = 'Google Chrome';
    } else if (/Safari\//.test(userAgent)) {
        browserName = 'Apple Safari';
    }

    return browserName;
}