import React, { Profiler, useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import RoomIcon from '@material-ui/icons/Room';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { fetchQuery } from '../../utils/fetchQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Navbar from '../../Components/Navbar/Navbar';
import { CircularProgress, Button } from '@material-ui/core';
import { useStore } from '../../context/Auth';
import { longprofiletime } from '../../utils/time';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    image:{
      borderRadius:"100px"
    },
    

   

}),
);





const profileDta = () => {
   

   const classes = useStyles(); 
   const router = useRouter();
   const {profile,getprofile,createFollowing,createFollowers,user} = useStore()
   const[data,setData]=useState([])
   const {slug}= router.query;


   console.log(profile)
  const getSlug=async(slug:any)=>{
    const data=await fetchQuery('profiles',slug);
    setData(data)
  }

  useEffect(() => {
    getprofile()
   getSlug(slug)
  }, [])

  if(!data){
    return <CircularProgress/>
  }


 const clickhandler= async(profiledata:any)=>{
   
  let monkey={counter:1,profile:profiledata,mainid:profile}
  let reverse={counter:1,profile:profile,mainid:profiledata}
  
 
  createFollowing(monkey);
  createFollowers(reverse);
}


  
 
 const returneddata= data!.map((datafield:any)=>{
   console.log(datafield)
   return(
     <>
     <div style={{borderBottom:"0.4px solid #efefef"}}>
          <div style={{display:"flex", justifyContent:'flex-start',marginLeft:'2rem'}}>
          <ArrowBackIcon style={{alignSelf:"center", fontSize: 31, marginTop:'0.6rem', color:"rgb(29,161,242)",cursor:"pointer"}} onClick={() => router.back()}/>
          
          <Navbar title={`${datafield?.name}`} />
          </div>
          <div style={{display:"flex",marginLeft:"5rem", marginBottom:"1rem"}}>{datafield?.posts.length} Flakes</div>
     </div>
     
     <div style={{height:'20vh',backgroundImage: `url(${datafield?.banner})`,backgroundSize:'cover',display:"flex",alignItems:'flex-end'}}></div>
        <img src={datafield?.avatar} style={{height:"11vh", width:"7rem", borderRadius:"50%",margin:"-5rem 0rem 0rem 1rem"}} />
       
    <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{display:'flex',margin:"-1rem 0rem 0rem 1.8rem",flexDirection:"column"}}>
          <h3>{datafield?.name}</h3>
          <div style={{color:"#938f8f",fontSize:"1rem",marginTop:"-1rem"}}>@{datafield?.user.username}</div>
        </div>
        <div style={{marginRight:"2rem"}}>
       {   
       
          profile?.id===datafield?.id&&<Button variant="contained" color="primary">
                                         Edit Profile
                                        </Button>
      }
      
     
      
      {

              (profile?.followings?.length===0)&&<Button variant="contained" color="primary" onClick={()=>clickhandler(datafield)}>
              add
            </Button>
      }
        
        </div>
        
    </div>
    <div style={{display:"flex", flexDirection:"column",margin:"1rem 0rem 0rem 1.6rem",height:"8vh",justifyContent:"space-around"}}>
      <div>{datafield?.bio}</div>
      <div style={{display:"flex",height:"2vh", marginRight:"0.9rem"}}> <RoomIcon style={{marginBottom:"1rem"}}/>{datafield?.location}   <div style={{marginLeft:"2rem"}}>Joined { longprofiletime(datafield?.created_at)}</div></div>
      <div style={{display:"flex",flexDirection:"row", justifyContent:"flex-start"}}> <div>Following: {datafield?.followings.length}</div>          <div style={{marginLeft:"1rem"}}>Followers: {datafield?.followers?.length}</div></div>
    
    </div>
      
    </>
   )
 })
  
   
    return (
        <div>
         
          {returneddata}
        </div>
    )
}

export default profileDta;


