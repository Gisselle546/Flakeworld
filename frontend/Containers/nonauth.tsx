import {Grid} from '@material-ui/core';
import Link from 'next/link'
import styled from 'styled-components';
import React from 'react'
import {faSnowflake} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{Container,ButtonWrapperContainer,ButtonWrapper} from './nonauth.style';

const Picture = styled.div`
display:flex;
flex: 1;
background:url(/images/flakes.jpg);
height:100vh;

`;

const Icon = styled.div`
display:flex;
justify-content: center;
align-items:center;
color:rgb(29,161,242);
width:100%;
`


const NonAuth = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Picture>
                    
                    
                        <Icon> 
                        <FontAwesomeIcon 
                        style={{height:'17.9rem',width:'17.9rem'}}
                        size='10x'
                        icon={faSnowflake}
                       />
                    
                        </Icon>
              
                    
                    </Picture>
                
                </Grid>
                <Grid item xs={12} md={6}>
                <Container>
                    
                    <FontAwesomeIcon 
                        style={{height:'1.9rem',width:'1.9rem', color:'rgb(29,161,242)'}}
                        size='10x'
                        icon={faSnowflake}
                       />
                       <h1 style={{fontFamily: 'Montserrat, sans-serif', fontSize:'2.4rem'}}>feed your curiousity</h1>
                    <ButtonWrapperContainer>
                    <Link href={{pathname: '/signup'}}>
                        <ButtonWrapper style={{backgroundColor:"rgb(29,161,242)"}}>
                         Sign up 
                        </ButtonWrapper>
                    </Link>

                    <Link href={{pathname: '/login'}}>
                        <ButtonWrapper style={{marginTop:'1rem',backgroundColor:"rgb(56,72,87)"}}>
                        Log in
                        </ButtonWrapper>
                    </Link>
            </ButtonWrapperContainer>

                    
                </Container>
                </Grid>
                
             </Grid>
            
        </div>
    )
}

export default NonAuth;