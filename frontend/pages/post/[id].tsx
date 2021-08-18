import {GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image'
import Navbar from '../../Components/Navbar/Navbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import { fetchQuery } from '../../utils/fetchQuery';
import { useRouter } from 'next/router'
import {time, longtime} from '../../utils/time';
import {useStore} from '../../context/Auth';
import ButtonContain from '../../Components/ButtonContain/ButtonContain';
import CreateComment from '../../Components/CreateComment/CreateComment';
import Comments from '../../Components/Comments/Comments';

 



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
      border:"0.4px solid #efefef",
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









const Flake = ({data}:any) => {
    const router = useRouter()
    const classes = useStyles();  
    const {user} = useStore();
    
 console.log(data.likes.length>0);
 console.log(data.retweets.length>0)
  
    
    if(!user)return<div>..</div>
    
    return (
        <>
           <div style={{display:"flex", justifyContent:'flex-start',marginLeft:'2rem',borderBottom:"0.4px solid #efefef",}}>
           <ArrowBackIcon style={{alignSelf:"center", fontSize: 31, marginTop:'0.6rem', color:"rgb(29,161,242)",cursor:"pointer"}} onClick={() => router.back()}/>
           <Navbar title={"Tweet"}/>
           </div>
         
            <div className={classes.feed}>
                <div className={classes.feedheader} >
                    <div style={{border:"10px", height:'5vh',marginTop:"1rem"}}>
                    <Image
                        src={data.profile.avatar}
                        width={53}
                        height={53}
                        className={classes.image}
                    />
                    </div>
                      <div className={classes.headingContainer}>
                            <p className={classes.profile}>
                            {data.profile.name}
                            <div style={{color:"#938f8f",fontSize:"0.92rem"}}>@{data.profile.user.username}</div>
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

          
         (data.likes.length>0||data.retweets.length>0)&&<div style={{border:"0.4px solid #efefef", height:"6vh"}}>
             <div style={{display:"flex", alignItems:'center', height:"6vh",marginLeft:"2rem"}}>
                 <h4 style={{marginRight:"0.3rem"}}>{data.retweets.length} </h4> <div style={{color:"#938f8f"}}>Retweet</div> <h4 style={{marginLeft:"0.3rem"}}>{data.likes.length} </h4> <div style={{marginLeft:"0.3rem", color:"#938f8f"}}>Likes</div>
             </div>
         </div>
        }
        <ButtonContain data={data} />
        <CreateComment data={data}/>

        <div style={{backgroundColor:"rgb(239, 243, 244)",height:"15px"}}></div>
       
       
       { 
          data.comments.length>0&& <Comments data={data.comments} />
       }
       
        
        
        
        </>
    )
}

export default Flake;


export const getStaticProps: GetStaticProps = async ({ params }:any) => {

    const data = await fetchQuery('posts',params.id)

   
  
    return {
      props: {
        
        data
  
      },
     
    };
  
  
  
  }


  export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetchQuery('posts')

    

    const paths = data.map(((flake:any)=>{
        return{
            params:{id: String(flake.id)}
        }
    }))

    

    return { 
        paths, 
        fallback:false
    }
}