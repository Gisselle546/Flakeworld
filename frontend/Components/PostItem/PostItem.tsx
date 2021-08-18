import React from 'react'
import Image from 'next/image';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useStore } from '../../context/Auth';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Navbar from '../Navbar/Navbar';
import { longtime } from '../../utils/time';
import ButtonContain from '../ButtonContain/ButtonContain';
import CreateComment from '../CreateComment/CreateComment';
import Comments from '../Comments/Comments';
import ButtonContainer from '../ButtonContainer/ButtonContainer';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    emptyHeader:{
      margin:"0 auto",
      color:"rgb(29,161,242)",
      letterSpacing:"1px"
    },
    
    feedContainer:{
      display:"flex",
      border:"0.4px solid #efefef",
      padding:"2rem",
      [theme.breakpoints.down('md')]: {
        padding:"2rem"
      },
    },
    image:{
      borderRadius:"100px"
    },

    feedheader:{
      display:"flex",
      
    },

    feed:{
    //   border:"0.4px solid #efefef",
      padding:"1.2rem",
      cursor:"pointer",
      "&:hover":{
        
    } 
      
    },
    headingContainer:{
      display:"flex",
      marginLeft:"20px",
      marginTop:"10px"
    },

    profile:{
      fontSize:"20px",
      marginTop:"0.8rem"
    },


    username:{
      marginLeft:"10px",
      color:"#938f8f"
    },
    description:{
      display:"flex",
      flexDirection:"column",
      
      marginLeft:"0.4rem",
     

    },

   

}),
);


interface Props{
    data:any
    post:any
}


const PostItem = ({data,post}:Props) => {

   
    const classes = useStyles();  
    const {user} = useStore();
    
 
   if(!data){
     <div>loading...</div>
   }

   


    return (
        <>
       
      
         <div className={classes.feed}>
             <div className={classes.feedheader} >
                 <div style={{border:"10px", height:'5vh',marginTop:"1rem"}}>
                 <Image
                     src={data.profile?.avatar}
                     width={53}
                     height={53}
                     className={classes.image}
                 /> 
                 </div>
                   <div className={classes.headingContainer}>
                         <p className={classes.profile}>
                         {data.profile?.name}
                         <div style={{color:"#938f8f",fontSize:"0.92rem"}}>@{data.profile?.user?.username}</div>
                         </p>
                         
                       
                     </div>
                 </div>
                 <div className={classes.description}>
                     <div style={{marginBottom:"1.0rem"}}> {data.description}</div>
                     {
                         data.image
                         ? (
                         <div  style={{ display:"flex", height: "26vh", width: "26vw"}}>
                             <img style= {{height:"100%", width:"100%",borderRadius:"10px"}} src={data.image}/>

                         </div>
                         )
                         : null
                     }
                 
                 </div>
                 <div style={{marginTop:"0.8rem",color:"#938f8f"}}>
                  { longtime(data.created_at)}
             </div>
         </div>
      
     { 


     data.likes>0||data.retweet>0 && <div style={{ height:"6vh"}}>
          <div style={{display:"flex", alignItems:'center', height:"6vh",marginLeft:"2rem"}}>
              <h4 style={{marginRight:"0.3rem"}}>{data.retweet} </h4> <div style={{color:"#938f8f"}}>Retweet</div> <h4 style={{marginLeft:"0.3rem"}}>{data.likes} </h4> <div style={{marginLeft:"0.3rem", color:"#938f8f"}}>Likes</div>
          </div>
      </div>
     }

     {

       !post?<ButtonContain data={data} />:<ButtonContainer data={data} />
     
    }
     
     </>
    )
}

export default PostItem;
