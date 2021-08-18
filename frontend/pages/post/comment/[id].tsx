import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import Feed from '../../../Components/Feed/Feed';
import PostItem from '../../../Components/PostItem/PostItem';
import {fetchQuery } from '../../../utils/fetchQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Navbar from '../../../Components/Navbar/Navbar';
import { useRouter } from 'next/router';
import CreateComment from '../../../Components/CreateComment/CreateComment';
import { useStore } from '../../../context/Auth';
import Comments from '../../../Components/Comments/Comments';




const corip = ({data}:any) => {

    const router = useRouter();
    
    
    
    
    
    console.log(data);
  



    return (
        <div>
               <div style={{display:"flex", justifyContent:'flex-start',marginLeft:'2rem',borderBottom:"0.4px solid #efefef",}}>
                <ArrowBackIcon style={{alignSelf:"center", fontSize: 31, marginTop:'0.6rem', color:"rgb(29,161,242)",cursor:"pointer"}} onClick={() => router.back()}/>
                <Navbar title={"Tweet"}/>
              </div>
           <PostItem data={data.post} post={true}/>
           <PostItem data={data} post={false}/>
           <CreateComment data={data}/>
           <div style={{backgroundColor:"rgb(239, 243, 244)",height:"15px"}}></div>
         
        
           {
             data.post.comments.map((comment:any)=>{
               return(
                 <Comments data={comment.children}/>
               )
             })
           }
          
        
        
        
        
        </div>
    )
}

export default corip;


export const getStaticProps: GetStaticProps = async ({ params }:any) => {

    const data = await fetchQuery('comments',params.id)

    
    return {
      props: {
        
        data
  
      },
     
    };
  
  
  
  }


  export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetchQuery('comments')

    

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
