import React, { useEffect, useState } from 'react'
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import { faImage, faSmile } from '@fortawesome/free-solid-svg-icons';
import { upload } from '../../utils/upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from '../../context/Auth';
import { useRouter } from 'next/router';



interface Props{
    data:any,
    
  }

  

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createpostcontainer: {
         
        display:"flex",
        padding:'1rem'
        
    },

    textarecontain:{
        maxHeight: "80vh",
        marginTop:'1rem', 
        width:"100%", 
        padding:"0.4rem",
        border:"none",
        resize: "none",
        fontSize:"1.1rem",
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
        marginRight:'30px',
        marginBottom:"0.4rem",
        border: "none",
        color: "white",
        padding: "12px 26px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "16px",
        borderRadius:"25px",
        cursor:"pointer"
    }

}),
);

const CreateComment:React.FC<Props> = ({data}) => {
    const classes = useStyles();
    const {profile,user,createcomment} = useStore();
    const [image,setImage] = useState('')
    const [form,setShowForm]=useState(false);
    const[commentdata,setCommentdata]=useState();
    const [reply,setReply] = useState(false);
    const [description,setDescription] = useState('');
    const { query, asPath }  = useRouter()
    const num:any ={profile,description,image,parent:null,children:null,post:query.id}
    const newcomment:any={profile,description,image,parent:data,children:null,post:data.post}
    let values =asPath.includes('comment')?newcomment:num;


    

    


    async function handleSubmit(e:any){
        e.preventDefault();
        createcomment(commentdata);
        setDescription("");
       
    }
    
    
    
   
  
    useEffect(() => {
      
        let values;
        if(description!==''||image!==''){
          values =asPath.includes('comment')?newcomment:num;
        }

        setCommentdata(values);

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

    return (
        <div  onMouseEnter={()=>setReply(!reply)} style={{borderBottom:"1px solid #f4f5f7"}}>
    {reply&&<div style={{display:"flex", marginLeft:"5rem", height:"10px"}}><h5>Replying to </h5><p style={{margin:"1.2rem 0rem 0rem 0.4rem",color:'rgb(29,161,242)'}}> @{data.profile.user.username}</p></div>}
            <div className={classes.createpostcontainer}>
             <img
            style={{borderRadius:"50px"}}
            src={profile?.avatar}
            alt={profile?.name}
            width={55}
            height={55}
          />
           <textarea
            onMouseEnter={()=>setShowForm(!form)}
            className={classes.textarecontain}
            name="text"
            placeholder="Tweet your Reply"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
          />
          </div>

      {   form &&
           <>
          
        <form onSubmit={handleSubmit}>
           
           <div className={classes.buttonContain}>
               <div style={{ fontSize: "1.1em" }}>
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
               <div>
                   <button type={'submit'}className={classes.tweetButton}>Tweet</button>
               </div>
               
           </div>
           </form>      
           </>
           }


        </div>
    )
}

export default CreateComment;
