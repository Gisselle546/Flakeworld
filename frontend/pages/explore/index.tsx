import React, { useEffect, useState } from 'react'
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import SearchBar from '../../Components/SearchBar/SearchBar'
import { getNewsstory } from '../../utils/newsapi';
import { CircularProgress } from '@material-ui/core';
import Link from 'next/link';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    mainnews:{
        height:"10vh"
    },
    news:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#ededed",
        
    },

    headlines:{
        color:"#f5fdfe",
        cursor:"pointer",
        
    }
   

}),
);

interface newsType{
    content:string,
    description:string,
    title:string,
    url:string,
    urlToImage:string
}



const explore = () => {
    const classes = useStyles();  
    const [news,setNews]= useState<newsType[]>([])

   
  const getNews=async()=>{
      const data= await getNewsstory();
      console.log(data);
      setNews(data);
  }

  useEffect(() => {
      
     getNews();
  }, [])

  if(!news){
      return <CircularProgress/>
  }

    const title= news[0]?.title;
    const description= news[0]?.description;
    const url = news[0]?.url;
    const urlToString = news[0]?.urlToImage;
   
console.log(news[0])
  
  
    const data =news.slice(1).map((today:any)=>{
        
        return(
            <ul style={{listStyleType:"none",  padding:"1.7rem",cursor:"pointer"}}>
                <Link href={`${today.url}`|| " "}>
                    <li>{today.title}</li>
                </Link>
            </ul>
        )
    })

 

    return (
        <>
            <div style={{height:'20vh',backgroundImage:`linear-gradient(to top, rgb(56,72,87), rgba(255, 0, 0, 0)), url(${urlToString})`, display:"flex", alignItems:"flex-end"}}>
                <Link href={`${url}`|| " "}>
                    <h4 className={classes.headlines}>{title}</h4>
                </Link>
            </div>
            
        <div className={classes.news}>
            {data}
            
        </div>
       </>
    )
}

export default explore;
