import axios from "axios";

export async function upload({ type, file }:any) {
  const formData = new FormData();
  formData.append("upload_preset",`${process.env.NEXT_PUBLIC_PRESET}`);
  formData.append("file", file);

  const response = await axios
    .post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/${type}/upload`, formData)
    .then((res) => res.data)
    .catch((e) => 
      console.log(e))
      

  return response.secure_url;
}
