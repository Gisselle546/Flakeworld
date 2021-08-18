import React from 'react';
import Image from 'next/image'
import { useStore } from '../../context/Auth';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {time} from '../../utils/time';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import Link from 'next/link'
import { useRouter } from 'next/router';


interface Props{
  data:any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createfeedcontainer: {
        
        
       
    },
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
      border:"0.4px solid #efefef",
      padding:"1.2rem",
      cursor:"pointer",
      "&:hover":{
        backgroundColor:"#f2efef"
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
      
      marginLeft:"5.4rem",
     

    },

   

}),
);




const Comments = ({data}:Props) =>{
  const classes = useStyles();  
  const {user,updatepost} = useStore();
  const { asPath }  = useRouter()
  let values = asPath.includes('comment')
 
  

  const feedinfo =  (data.length>0)?(data.map((feed:any)=>{
    if(!feed)return<div>..</div>

    const{created_at,image} = feed;

   
     console.log(feed)
     return(
     <div className={classes.feed}>
       
       <Link href={`/post/comment/${feed.id}`}>
         <a>

       <div className={classes.feedheader} >
                <Image
                    src={feed.profile.avatar}
                    width={65}
                    height={65}
                    className={classes.image}
                  />
          <div className={classes.headingContainer}>
            <p className={classes.profile}>
              {feed.profile.name}
            </p>
              
            <p className={classes.username}>
              @{feed.profile.user.username}
             
            </p> 
            <p style={{marginLeft:"5px"}}>
            &middot;   { time(created_at)}
            </p>
          </div>
          
       </div>
       <div className={classes.description}>
        <div style={{marginBottom:"1.0rem"}}> {feed.description}</div>
         {
            image
            ? (
              <div  style={{ display:"flex", height: "26vh", width: "26vw"}}>
                <img style= {{height:"100%", width:"100%",borderRadius:"10px"}} src={image}/>

              </div>
            )
            : null
          }
        <ButtonContainer data={feed} met={updatepost}/>
       </div>
       </a>
       </Link>

      </div>
     )
  })):(
    <div  className={classes.feedContainer}>

      {
        values&&<h4 className={classes.emptyHeader}>No comments to see</h4>

      }



      <h4 className={classes.emptyHeader}>No posts to see</h4>
    </div>
  )



  

 


  
   
    return (

      
      <div >
        {feedinfo}
      
      </div>
    );
  };
  
  
  export default Comments;