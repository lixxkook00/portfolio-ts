import axios from 'axios';

interface IpifyResponse {
  ip: string;
}

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