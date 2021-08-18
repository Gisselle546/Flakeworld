import React from 'react'
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import FlakeNews from '../Components/FlakeNews/FlakeNews';
import FollowList from '../Components/FollowList/FollowList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Infocontainer: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:"1rem",
        
       
      
      
    },

   

}),
);


const Info = () => {

    const classes = useStyles();


    return (
        <div className={classes.Infocontainer}>
            
            <FlakeNews/>
            <FollowList/>
            
        </div>
    )
}

export default Info;
