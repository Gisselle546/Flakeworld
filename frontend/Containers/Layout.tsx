import React from 'react'
import{ Grid, useMediaQuery }from '@material-ui/core'
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Sidebar from '../Components/Sidebar/Sidebar';
import {useStore} from '../context/Auth';
import { device } from '../utils/device';
import Minibar from '../Components/Minibar/Minibar';
import Info from './Info';



type Props = {
    
    children?: React.ReactNode;
  };

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item2: {
      order: 1,
      [theme.breakpoints.down('md')]: {
        order: 2,
        border:"0px"
      },
    },
    item3: {
      order: 2,
      [theme.breakpoints.down('md')]: {
        order: 1,
      },
    },

    item1:{
        order:3,
        [theme.breakpoints.down('md')]: {
            display:"none"
          },
    }, 

    bar:{
        [theme.breakpoints.down('md')]: {
            display:"none"
          },
    }

}),
);


const Layout = ({children }: Props) => {
    const classes = useStyles();
    const {user} = useStore();
    const theme = useTheme();
    const greater = useMediaQuery(theme.breakpoints.up('md'));

   
    
    

    return (

      
user!==null?(

  
     <Grid container>
            <Grid item xs={12} md={3} style={{height:"100vh",borderRight:"1px solid #efefef"}} className={classes.item2}>
               
             {greater?<Sidebar/>: <Minibar />}     
                    
            </Grid>
            <Grid item xs={12} md={4} className={classes.item3}>
               {children}
            </Grid>
            <Grid item xs={12} md={5} style={{borderLeft:"1px solid #efefef"}}className={classes.item1}>
               <Info/>
            </Grid>
        </Grid>
    
):(
    <div>
        {children}
    </div>
)
       
   
   
   
   
   
   
   )
}

export default Layout;
