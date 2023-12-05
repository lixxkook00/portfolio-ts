import axios from 'axios';
import { API } from '../env/api';
import { getIP } from '.';

const BOT_TOKEN : string = '6084681241:AAG7pDcmH0nWymfUu8h28XmEpG5stpXZ3JQ';


async function sendMessage(message : string) {
    const url : string = `${API.TELEGRAM_URL}/bot${API.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${API.TELEGRAM_CHAT_ID}&text=${message}`;

    await axios.post(url).then(response => {
        console.log('Message sent successfully:', response.data);
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });

    console.log(url)
}

export async function getUserVisitInfor() {
    // const [data1] = await Promise.all([getIP()]);

    // await getLocation()

    // Get the visitor's device information
    const userAgent: string = navigator.userAgent;

    // Detect browser name
    const regex: RegExp = /(?:Trident\/.*?rv:|MSIE\s|Edge\/)([\d\.]+)/;
    let browserName: string | undefined;
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

    // Detect device infor
    const isMobile: boolean = /(iphone|ipod|ipad|android|blackberry|windows phone)/.test(userAgent);
    let deviceType: string;
    if (isMobile) {
        deviceType = /iphone|ipod|ipad/.test(userAgent.toLowerCase()) ? 'iOS' : 'Android';
    } else {
        deviceType = 'Desktop';
    }
    const isWindows: boolean = navigator.platform.indexOf('Win') !== -1;
    const isMac: boolean = navigator.platform.indexOf('Mac') !== -1;
    const isLinux: boolean = navigator.platform.indexOf('Linux') !== -1;
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

    const deviceInfo = {
        platform: navigator.platform,
        language: navigator.language,
        userAgent: userAgent,
        browserName : browserName,
        osType : osType,
        deviceType : deviceType
    };

    const message = `
        - Time: ${new Date().toLocaleString()} \n
        - Language : ${deviceInfo.language} \n
        - Browser name : ${deviceInfo.browserName} \n
        - Device information: ${deviceInfo.userAgent} \n
    `
    console.log(deviceInfo)
    
    for (const key in deviceInfo) {
        if (deviceInfo.hasOwnProperty(key)) {
            console.log(`${key}: `);
        }
    }

    // await sendMessage(message)

    return ''
}