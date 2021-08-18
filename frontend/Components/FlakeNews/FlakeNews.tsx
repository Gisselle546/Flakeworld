import React, { useEffect, useState } from 'react'
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import { getTopnnews } from '../../utils/newsapi';
import Link from 'next/link';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flakenewscontainer: {
         backgroundColor:"#ededed",
         height:"60vh",
         width:"20vw",
         marginLeft:"0.6rem",
         marginTop:"1rem",
         borderRadius:"30px"
    },

    flakenewsheader:{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        borderBottom:"2px solid #bdbdbd",
        margin:"1rem",
       
        
       
    },

    flakenewsheaderfont:{
        fontFamily:"Roboto, sans-serif",
        fontWeight:900,
        fontSize:"1.2rem"
        
       
    }
    

}),
);


interface topnews{
    title:string,
    url:string
}



const FlakeNews = () => {

    const classes = useStyles()
    const [news, setNews] = useState<topnews[]>([])

    const getNews=async()=>{
        const data=await getTopnnews();
        setNews(data)
      }

    useEffect(() => {
        getNews()
    }, [])

    console.log(news);

    return (
        <div className={classes.flakenewscontainer}>
            <div className={classes.flakenewsheader}> <p className={classes.flakenewsheaderfont}>Flake News</p>   </div>
            {
                news?.map((yay:any)=>{
                    console.log(yay);
                    return(
                        <div>
                            <ul style={{listStyleType:"none"}}>
                              <Link href={`${yay.url}`|| " "}>
                                  <a>
                                    <li style={{marginRight:"20px", cursor:"pointer"}}> {yay.title}</li>
                                  </a>
                              </Link>  
                            </ul>

                        
                            
                        </div>
                    )
                })
            }
           
            
        </div>
    )
}






export default FlakeNews;
