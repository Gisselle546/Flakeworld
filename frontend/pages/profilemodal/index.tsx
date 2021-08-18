import React, { useEffect } from 'react'
import {Modal,Dialog, DialogContent, Typography, DialogActions, Button, TextField} from '@material-ui/core';
import {useStore} from '../../context/Auth';
import { upload } from '../../utils/upload';
import {useFormik} from 'formik';
import * as Yup from 'yup';


const ProfileModal = () => {
    
    const [open, setOpen] = React.useState(true);
    const {user,update} = useStore(); 
    const [banner, setBanner] = React.useState('/images/flakes.jpg'||user?.user.banner );
    const [avatar, setAvatar] = React.useState('/images/images.png'||user?.user.avatar);
    
    
   
  const handleClose = () => {
    setOpen(false);

  };


  async function uploadProfileImage(event:any) {
    const file = event.target.files[0];

    if (file) {
      const avatar = await upload({
        type: "image",
        file,
       
      });
      setAvatar(avatar);
      formik.values.avatar=avatar;
    }
  }

  async function uploadCoverImage(event:any) {
    const file = event.target.files[0];

    if (file) {
      const banner = await upload({
        type: "image",
        file,
       
      });
     setBanner(banner)
     formik.values.banner=banner;
    }
  }
    
  const formik = useFormik({
    initialValues: {
     
      name: '',
      bio:   '',
      location:  '', 
      website: '',
      banner:banner,
      avatar:avatar
    },
    validationSchema: Yup.object({

        name:Yup.string(),
       
        bio: Yup.string(),
        
        location:Yup.string(),
        
        website:Yup.string()

    }),
    onSubmit: values => {
     update(values)
    },
  });


  
    
    return (
        <div>
           
            <Modal
                    open={open}
                    disableEnforceFocus
                    disableAutoFocus
                   
                >

                <Dialog open={true} >
                
        <DialogContent dividers>
         <div style={{height:"62vh", width:"30vw"}}>
         <form onSubmit={formik.handleSubmit}>
           <div style={{
                height: "200px",
                width: "100%",
                backgroundImage: `url(${banner})`,
                backgroundSize:'cover'
              }}>
                
                <label
                htmlFor="cover-image"
                style={{color:"#fff", display:"flex",justifyContent:"flex-end", marginRight:"1rem", cursor:"pointer"}}
               >
                Edit cover image

                <input
                onChange={uploadCoverImage}
                style={{ display: "none" }}
                id="cover-image"
                type="file"
                accept="img/*"
               
              />
               </label>
               
               <label htmlFor="profile-image">
                  <div  style={{ display:"flex", height: "200px", width: "200px", alignItems:"flex-end", marginLeft:"1rem" }}>
                      <img style= {{height:"40%", width:"40%", borderRadius:"100px"}} src={avatar}/>

                  </div>
                  <input
                    style={{ display: "none" }}
                    onChange={uploadProfileImage}
                    
                    id="profile-image"
                    type="file"
                    accept="img/*"
                  />
              </label>
          
          </div>
           <div style={{display:'flex',flexDirection:"column", marginTop:"2rem"}}>
           <TextField style={{marginTop:"1.0rem"}}id="name" label="Name" onChange={formik.handleChange}
                    value={formik.values.name} />
           <TextField style={{marginTop:"1.0rem"}}id="bio" label="Bio"  onChange={formik.handleChange}
                    value={formik.values.bio} />
           <TextField style={{marginTop:"1.0rem"}}id="location" label="Location" onChange={formik.handleChange}
                    value={formik.values.location}/>
           <TextField style={{marginTop:"1.0rem"}}id="website" label="Website"  onChange={formik.handleChange}
                    value={formik.values.website}/>

           </div>
            
         
              
           <Button style={{display:"flex", width:"100%", marginTop:"2rem",backgroundColor:"rgb(29,161,242)",color:"rgb(56,72,87)"}}type="submit"  color="primary">
            Save 
          </Button>
         
           </form>
         </div>
        </DialogContent>
        
                </Dialog>
            
            </Modal>
           
        </div>
    )
}

export default ProfileModal;
