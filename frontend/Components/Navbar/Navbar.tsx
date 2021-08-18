import React from 'react'
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import {useStore} from '../../context/Auth';
import{ CircularProgress, useMediaQuery }from '@material-ui/core'



interface Props{
   title:any
  }
  

const Navbar = ({title}:Props) => {

    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbarcontainer: {
        marginTop:'0.3rem', 
        display:"flex",
        borderBottom:"0.4px solid #efefef",
        height:'5vh',
        justifyContent:"space-between",
        [theme.breakpoints.down('md')]: {
            marginTop: "0.5rem",
            paddingBottom:"4rem",
            height:'8vh'
          },
    },
    
    imageContainer:{
        display:"flex",
        height:'150px',
        width:'150px', 
       
    
    },


    logoutButton:{
        backgroundColor: "rgb(29,161,242)",
        marginBottom:"0.2rem",
        border: "none",
        color: "white",
        padding: "8px 20px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "16px",
        borderRadius:"25px",
        cursor:"pointer",
        marginRight:"0.6rem",
        [theme.breakpoints.down('md')]: {
            display:"none"
          },
    },



    homeHeader:{
        marginLeft:"20px",
        fontFamily:"Roboto, sans-serif",
        fontWeight:900
    },

    imageSize:{
        [theme.breakpoints.up('md')]: {
            display:"true"
        }
    }

}),
);

    const classes = useStyles();
    const {profile,logout} = useStore();
    const theme = useTheme();
    const greater = useMediaQuery(theme.breakpoints.up('md'));
    
    
    
    if(!profile){
        
        return <CircularProgress/>
    }

    return (
        <div className={classes.navbarcontainer}>
            <div  className={classes.imageContainer}>
                     { !greater&&<img style= {{height:"40%", width:"40%", borderRadius:"100px",marginLeft:'20px'}} className={classes.imageSize}src={profile.avatar}/>}
                      <h3 className={classes.homeHeader}>{title}</h3>
            
                     
            
            </div>
            <button onClick={logout}className={classes.logoutButton}>Logout</button>
        </div>
    )
}

export default Navbar;
