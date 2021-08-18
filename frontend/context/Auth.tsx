import {createContext, useContext, useState,useEffect} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios'
import Cookies from 'js-cookie';
import { CircularProgress } from '@material-ui/core';
import updateuser from '../pages/api/updateuser';


const AuthContext = createContext<{
    
    register:(token:any)=>void
    login:(token:any)=>void
    logout:()=>void
    update:(datar:any)=>void
    getprofile:()=>void
    createpost:(datar:any)=>void
    createlike:(datar:any)=>void
    createretweet:(datar:any)=>void
    createcomment:(datar:any)=>void
    removeretweet:(datar:any)=>void
    removelike:(datar:any)=>void
    createFollowing:(datar:any)=>void
    createFollowers:(datar:any)=>void
    profile:any
    user:any
   
    
}>({
    
    register:()=>{},
    login:()=>{},
    logout:()=>{},
    update:()=>{},
    user:{},
    profile:{},
    getprofile:()=>{},
    createpost: (datar) => {},
    createlike:()=>{},
    createcomment:()=>{},
    removelike:()=>{},
    createretweet:()=>{},
    removeretweet:()=>{},
    createFollowing:()=>{},
    createFollowers:()=>{}
   
});


export const AuthProvider = (props: { children: React.ReactNode; } )=>{
    const [post,setPost] = useState(null)
    const [user, setUser] = useState(null);
    const [like, setLike] = useState(null);
    const [profile, setProfile] = useState(null);
    const [comment,setComment] = useState(null);
    const [error, setError] = useState(null);
    const [retweet,setRetweet] = useState(null);
    const[following,setFollowing] =  useState(null)
    const[followers,setFollowers] =  useState(null)
    
    const router = useRouter()

    async function createFollowers(datar:any){
      const res = await axios.post(`/api/createfollowers`,{
        datar
       })
      
      if (res.data) {
        setFollowers(res.data.followers)
        
      } else {
        setError(error)
        setProfile(null)
      }
    
    
    }
  



  
   

  async function createFollowing(datar:any){
    const res = await axios.post(`/api/createfollowing`,{
      datar
     })
    
    if (res.data) {
      setFollowing(res.data.followings)
      
    } else {
      setError(error)
      setProfile(null)
    }
  
  
  }





    
  async function getprofile(){
   
    if(Cookies.get('user')==undefined){
      return
    }
    

    const res = await axios.get(`/api/profile`)
    
     
    
      if (res.data) {
        setProfile(res.data.profile)
        
      } else {
        setError(error)
        setProfile(null)
      }
   
    
  }

  

   

    
    async function check(){

      if(Cookies.get('user')==undefined){
        return
      }
    
    
      const res = await axios.get(`/api/user`)
    
     
    
      if (res.data) {
        setUser(res.data.user)
        
      } else {
        
        setUser(null)
      }
   
    }

    async function update(datar:any){
      const res = await axios.post(`/api/updateuser`,{
       datar
      })

     
    
      if (res.data) {
        setUser(res.data);
        setProfile(res.data)
        router.push('/')
        
      }else {
             
        setError(res.data.message)
        setError(null)
      }
    
    
    }
  
     
    
    useEffect(() => {
      
      if(Cookies.get('user')!==undefined){
        
          check()
          
      }
       
    }, [user===null])


  
       
     async function register (token:any){
        const res = await axios.post(`/api/register`, {
            
           token
          })
      
         
          if (res.data) {

            Cookies.set('user', `${Math.random()}`, { expires: 7 });

            

            setUser(res.data);
            
            router.push("/profilemodal")
            
          } else {
             
            setError(res.data.message)
            setError(null)
          }
        
      }

    async function createlike(datar:any){

      const res = await axios.post(`/api/createLike`,{
        datar
       })

       if (res.data) {
       
       setLike(res.data);
      
     } else {
        
       setError(res.data.message)
       setError(null)
     }

    }

    async function createretweet(datar:any){

      const res = await axios.post(`/api/createRetweet`,{
        datar
       })

       if (res.data) {
       
       setRetweet(res.data);
      
     } else {
        
       setError(res.data.message)
       setError(null)
     }

    }




    async function removeretweet(datar:any){

      const res = await axios.delete(`/api/removeRetweet`,{
        data:datar
       })

       if (res.data) {
       
       setRetweet(res.data);
      
     } else {
        
       setError(res.data.message)
       setError(null)
     }

    }

    async function removelike(datar:any){

      const res = await axios.delete(`/api/removeLike`,{
        data:datar
       })

       if (res.data) {
       
       setLike(res.data);
      
     } else {
        
       setError(res.data.message)
       setError(null)
     }

    }






     async function login(token:any){
         const res = await axios.post(`/api/login`,{
             token
         })
    
         if (res.data) {
             Cookies.set('user', `${Math.random()}`, { expires: 7 });
            setUser(res.data)
           
           
          } else {
             
            setError(res.data.message)
            setError(null)
          }
    
    }


    async function logout () {
     
      Cookies.remove("token");
      Cookies.remove("user");
     
        setUser(null)
        router.push('/')
      
    }
  
    


    async function createpost(datar:any){
      const res = await axios.post(`/api/createpost`,{
       datar
      })

        
     
    
      if (res.data) {
        setPost(res.data)
        router.push('/')
        
      }else {
             
        setError(res.data.message)
        setError(null)
      }
    
    
    }


    async function createcomment(datar:any){
      const res = await axios.post(`/api/createcomment`,{
        datar
      });
      
      if (res.data) {
        setComment(res.data)
        
        
      }else {
             
        setError(res.data.message)
        setError(null)
      }
    
    return res.data;
    
    }

    

    return(
        <AuthContext.Provider value={{register,login,logout,user,update,getprofile,profile,createpost,createlike,createcomment,removelike,createretweet,removeretweet,createFollowing,createFollowers}}>
            {props.children}
        </AuthContext.Provider>
        );



};

export const useStore = () => useContext(AuthContext);
