import styled from 'styled-components';
import {device} from '../../utils/device';

export const ContainerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    [@media ${device.mobile}]:{
        width:100vw;
        height:100vh;
       
     }
   
`;


export const SignupWrapper = styled.div({
    border:"1px solid rgb(56,72,87)",
    width:"30%",
    height:"59vh",
    [`@media ${device.mobile}`]:{
        width:"100vw",
        height:"100vh"
       
     }

})
export const ButtonWrapper = styled.button({

borderRadius:"60px",
height:"2.3rem",
fontSize:"1rem",
border:"none",
color:"#fff",
cursor:"pointer",
width:"20vw",


[`@media ${device.mobile}`]:{
    width:"80vw",
    
   
 }



})