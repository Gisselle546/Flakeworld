import React, { useEffect, useState } from 'react'
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import { fetchQuery } from '../../utils/fetchQuery';
import { useStore } from '../../context/Auth';
import Image from 'next/image';
import Link from 'next/link';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    followlistcontainer: {
         backgroundColor:"#ededed",
         height:"30vh",
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
        marginLeft:"1rem"
       
        
       
    },

    flakenewsheaderfont:{
        fontFamily:"Roboto, sans-serif",
        fontWeight:900,
        fontSize:"1.2rem"
        
       
    }

   
    

}),
);




const FollowList = () => {

    const classes = useStyles();
    const {profile} = useStore();
    const[profiles,setProfiles] = useState([])

    
    
    const allusers = async()=>{
        const allusers = await fetchQuery('profiles');
        setProfiles(allusers);
    }


    useEffect(() => {
      
        allusers();
    }, [])

  
console.log(profiles);
console.log(profile)

  const data = profiles.filter((code:any)=>code.id!==profile.id)
  
  var result = data.filter((code:any) => 
  profile.followings?.every((balanceCode:any) => balanceCode.profile !== code.id));

console.log(result);
  

    return (
        <div className={classes.followlistcontainer}>
            <div className={classes.flakenewsheader}> 
                <p className={classes.flakenewsheaderfont}>Who to Follow</p>
              
            </div>
            {
                    result.length>0? result.map((results:any)=>{
                        return(
                            <div style={{display:"flex", marginTop:"1rem", justifyContent:"center",cursor:"pointer"}}>
                                    <Image
                                    
                                    src={results.avatar}
                                    alt="Picture of the author"
                                    width={65}
                                    height={65}
                                />
                               <Link href={`/profiles/${results.user?.username}`}><div style={{margin:"2rem 0rem 0rem 1rem"}}> {results.name}</div></Link>
                          </div>
                        )
                    })
                    :<div>No one left to follow..</div>
                }   

            
        </div>
    )
}

export default FollowList;
