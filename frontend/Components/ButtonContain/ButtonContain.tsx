import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-solid-svg-icons';
import { faRetweet} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

interface Props{
    data:any,
   
  }
  
  


const ButtonContain = ({data}:Props) => {
    const [retweet,setRetweet] = useState(false);
    const [counterlike,setCounterlike] = useState(0)
    const [countertweet,setCountertweet] = useState(0)
    const [likes,setLikes] = useState(false)
  
    let onClick = likes ? unlike : add;
    let retweetCliker = retweet? untweet : addtweet; 

    

    let comments = data.post?.comments.map((child:any)=>{
       return child.children.length;
    })
    
  
    useEffect(() => {
      
     console.log(counterlike)
    }, [counterlike,countertweet])
  
  
  async function untweet(){
    setRetweet(false);
    setCountertweet(0);
    
  }
  
  
  async function addtweet(){
      setRetweet(true);
      setCountertweet(1);
  }
  
  async function add(){
    setLikes(true);
    setCounterlike(1);
    const monkey={likes:1,id:data.id}
    
    
  }
  
  
  async function unlike(){
    setLikes(false);
    setCounterlike(0);
    const monkey={likes:0,id:data.id}
   
    
  }


  const button = 

      
  (
  <>
       <div style={{display:"flex"}}>
     <FontAwesomeIcon icon={faComment} size="lg" style={{cursor:"pointer"}}/>
     <div style={{marginLeft:"0.4rem"}}>
              {
                data.comments?
             data.comments.length>0&&data.comments.length:null
              
              }
              {
               comments?
             comments>0&&comments:null
              
              }
             
              
              </div>

     </div>

     <div style={{display:"flex"}} >
       
     <FontAwesomeIcon icon={faRetweet} size="lg" onClick={retweetCliker}  style={{color: retweet? 'green' : "rgb(169,169,169)",cursor:"pointer"}} />
     <div style={{marginLeft:"0.4rem"}}>
       {
      countertweet>0&&countertweet
       
       }
       
       </div>
     </div>
     
     <div style={{display:"flex"}} >
     <FontAwesomeIcon icon={faHeart} size="lg" onClick={onClick} style={{color: likes? 'red' : "rgb(169,169,169)", cursor:"pointer"}}/>
     <div style={{marginLeft:"0.4rem"}}>
       {
      counterlike>0&&counterlike
       
       }
       
       </div>
     </div>
  </>
  );



    return (
        <div style={{display:"flex", justifyContent:"space-around", padding:"1rem", border:"0.4px solid #efefef"}}>
            {button}
        </div>
    )
}

export default ButtonContain;
