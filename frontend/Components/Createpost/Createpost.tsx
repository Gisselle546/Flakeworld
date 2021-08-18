import React,{useState,useEffect} from 'react'
import {useStore} from '../../context/Auth';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSmile } from '@fortawesome/free-solid-svg-icons';
import { upload } from '../../utils/upload';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createpostcontainer: {
         
        display:"flex",
        padding:"1.6rem"
        
    },

    textarecontain:{
        maxHeight: "80vh", 
        width:"100%", 
        padding:"0.4rem",
        border:"none",
        resize: "none",
        fontSize:"1.2rem",
        outline:"none",
        fontFamily:"Roboto, sans-serif",
        fontWeight:500 

    },
    buttonContain:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },

    tweetButton:{
        backgroundColor: "rgb(29,161,242)",
        marginBottom:"0.4rem",
        border: "none",
        color: "white",
        padding: "12px 26px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "16px",
        borderRadius:"25px",
        cursor:"pointer",
        '&:disabled': {
            background: "#d3d3d3",
         },


        
    },

   
    

}),
);



const Createpost = () => {
    const {profile,user,createpost} = useStore();
    const classes = useStyles();
    const [description,setDescription] = useState('')
    const [data,setData] =useState();
    const [image,setImage] = useState('');

  

    async function handleSubmit(e:any){
        e.preventDefault();
       createpost(data)
       setDescription("");
       
    }

   

    useEffect(() => {
      
        const num:any ={profile,description,image}
        
         setData(num);
    }, [description,image])


    async function uploadCoverImage(event:any) {
        const file = event.target.files[0];
    
        if (file) {
          const banner = await upload({
            type: "image",
            file,
           
          });
          setImage(banner)
         
        }
      }
        
      console.log(description.trim()==="")


    return (
        <div style={{borderBottom:"1px solid #f4f5f7"}}>
            <div className={classes.createpostcontainer}>
             <img
            style={{borderRadius:"50px"}}
            src={profile?.avatar}
            alt={profile?.name}
            width={55}
            height={55}
          />
           <textarea
            className={classes.textarecontain}
            name="text"
            placeholder="What's happening?"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
          />
           </div>
           <form onSubmit={handleSubmit}>
           <div className={classes.buttonContain}>
               <div style={{ fontSize: "1.1em",marginLeft:"30px" }}>
               <FontAwesomeIcon style={{color:"rgb(29,161,242)",marginLeft:"10px"}}size="lg" icon={faSmile} />
                <label
                    htmlFor="cover-image">
                        <FontAwesomeIcon style={{color:"rgb(29,161,242)",marginLeft:"15px", cursor:"pointer"}}size="lg" icon={faImage} />

                        <input
                        onChange={uploadCoverImage}
                        style={{ display: "none" }}
                        id="cover-image"
                        type="file"
                        accept="img/*"
                    
                    />
                
                </label>
               </div>
               <div style={{marginRight:"1rem"}}>
                   <button disabled={description.trim()==="" }type={'submit'}className={classes.tweetButton}>Tweet</button>
               </div>
               
           </div>
           </form>     
            
        </div>
    )
}

export default Createpost;
