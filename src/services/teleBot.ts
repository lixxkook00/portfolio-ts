import axios from 'axios';
import { API } from '../env/api';
import { detectBrowserName, detectDeviceType, detectOS, getIP } from 'utils';

export async function sendMessage(message : string, onComplete?: any) {
    const url : string = `${API.TELEGRAM_URL}/bot${API.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${API.TELEGRAM_CHAT_ID}&text=${message}`;

    await axios.post(url).then(response => {
        console.log('Message sent successfully:', response.data);
        onComplete()
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}

export async function getUserInfor() {
    const userAgent: string = navigator.userAgent;

    let browserName = detectBrowserName(userAgent);
    const deviceType = detectDeviceType(userAgent);
    const osType = detectOS(navigator.platform);

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
    console.log(message)

    // await sendMessage(message)

    return ''
}

