import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-solid-svg-icons';
import { faRetweet} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import updatepost from '../../pages/api/updatepost';
import { useStore } from '../../context/Auth';
import { CircularProgress } from '@material-ui/core';

const buttonContain =[
    {
      name: "Comment",
      icon: faComment,
      likes:0
    },
  
    {
      name: "Retweet",
      icon: faRetweet,
      retweet:0
      
    },
  
    {
      name: "Likes",
      icon: faHeart,
      likes:0
    },
  
  ]

 
  interface Props{
    data:any,
    
    
  }
  


const ButtonContainer = ({data}:Props) =>{
  const{user,removeretweet,createretweet,createlike,removelike,getprofile}= useStore();
  const [counterlike,setCounterlike] = useState(0)
  const [countertweet,setCountertweet] = useState(0)
  const isAlreadyLiked = data.likes?.some(( currentuser:any ) => currentuser.user===user.id);
  const isAlreadyRetweeted= data.retweets?.some((currentuser:any)=>currentuser.user===user.id);
  const [likes,setLikes] = useState(isAlreadyLiked);
  const [retweet,setRetweet] = useState(isAlreadyRetweeted);

 console.log(retweet);

  let onClick = likes ? unlike : add;
  let retweetCliker = retweet? untweet : addtweet; 
  
useEffect(() => {
  getprofile()
}, [])
  

async function untweet(){
  setRetweet(false);
  setCountertweet(0);
  const lik = data.retweets.find((userlike:any)=>userlike.user===user.id)

  removeretweet(lik?.id);
}


async function addtweet(){
    setRetweet(true);
    setCountertweet(1);
    const monkey={user:user,counter:1,post:data}
    createretweet(monkey)
  
}

async function add(){
  setLikes(true);
  setCounterlike(1);
  const monkey={counter:1,user:user,post:data}
  createlike(monkey)

  
}


async function unlike(){
  setLikes(false);
  setCounterlike(0);

  const lik = data.likes.find((userlike:any)=>userlike.user===user.id)

  removelike(lik?.id);
  
}




    const button = 

      
         (
         <>
        <div style={{display:"flex"}}>
        <FontAwesomeIcon icon={faComment} size="1x" />
        <div style={{marginLeft:"0.4rem"}}>
              {
                data.comments?
             data.comments.length>0&&data.comments.length:null
              
              }
              
              {
                data.children?
             data.children.length>0&&data.children.length:null
              
              }
              
              
              
              
              
              </div>
      
        </div>




            <div style={{display:"flex"}} >
            <FontAwesomeIcon icon={faRetweet} size="1x" onClick={retweetCliker}  style={{color: retweet? 'green' : "rgb(169,169,169)",}} />
            <div style={{marginLeft:"0.4rem"}}>
              {
             (data.retweets?.length>0||countertweet>0)?(data.retweets.length||countertweet):null
              
              }

             
              
              </div>
            </div>
            
            <div style={{display:"flex"}} >
            <FontAwesomeIcon icon={faHeart} size="1x" onClick={onClick} style={{color: likes? 'red' : "rgb(169,169,169)",}}/>
            <div style={{marginLeft:"0.4rem"}}>
              {
                 (data.likes?.length>0||counterlike>0)?(data.likes.length||counterlike):null
              }

              
              </div>
            </div>
         </>
         );
       
         
   
   
       return (
        <div style={{display:"flex",justifyContent:"space-around", margin: "5px 0px 0px -52px", color:"rgb(169,169,169)",cursor:"pointer"}}>
            {button}
        </div>
    )
}

export default ButtonContainer;
