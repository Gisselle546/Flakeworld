import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


async function fetchQuery(path:any, params = ''||null) {
    
    let url:string;

    (params !== null)?url = `${baseUrl}/${path}/${params}`: url = `${baseUrl}/${path}`

    console.log(url,params)
    
    const response = await axios.get(`${url}`);
    
    return response.data;

}








export {baseUrl,fetchQuery}