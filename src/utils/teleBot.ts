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
    const userAgent = navigator.userAgent;
    const deviceInfo = {
        platform: navigator.platform,
        language: navigator.language,
        userAgent: userAgent
    };

    const message = `
        - Time: ${new Date().toLocaleString()} \n\n\n
        - Language : ${deviceInfo.language} \n\n\n
        - Device information: ${deviceInfo.userAgent} \n\n\n
    `

    await sendMessage(message)

    return ''
}