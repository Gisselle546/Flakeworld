import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {ContainerWrapper,
    SignupWrapper, ButtonWrapper} from './index.style';
import {faSnowflake} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useStore} from '../../context/Auth';

const Signup = () => {

    const {register} = useStore();
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
          username:''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                      .email('Invalid email address')
                      .required('Email is required'),
            password: Yup.string()
                         .required('Password is required'),
            username: Yup.string()

        }),
        onSubmit: values => {
           register(values);
           router.push("/profilemodal")
            
        },
      });




    return (
        <ContainerWrapper>
            
                    <SignupWrapper>
                        <div style={{display:"flex",justifyContent:'center',marginTop:'1rem'}}>
                            
                            <FontAwesomeIcon 
                                style={{height:'4.9rem',width:'4.9rem', color:'rgb(29,161,242)'}}
                                size='10x'
                                icon={faSnowflake}
                            />
                       </div>
                       <h1 style={{fontFamily: 'Montserrat, sans-serif', fontSize:'1.4rem',display:"flex",justifyContent:'center'}}>feed your curiousity</h1>
                    
                    
                       <form onSubmit={formik.handleSubmit} style={{display:'flex', marginTop:'1rem',flexDirection:'column', width:'100%',alignItems: 'center',justifyContent:"space-between",height:'24vh'}}>
               
                        <div style={{marginLeft:'6rem'}}>
                       <input
                                    style={{ width: "80%",
                                        padding: "12px 20px",
                                        margin: "14px 0",
                                        boxSizing: "border-box"}}
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                />
                                {formik.touched.username&&formik.errors.username?<div>{formik.errors.username}</div>:null}
                            
                            



                            <input
                                    style={{ width: "80%",
                                        padding: "12px 20px",
                                        margin: "14px 0",
                                        boxSizing: "border-box"}}
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.touched.email&&formik.errors.email?<div>{formik.errors.email}</div>:null}
                                <input
                                    style={{ width: "80%",
                                    padding: "12px 20px",
                                    margin: "14px 0",
                                    boxSizing: "border-box"}}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.touched.password&&formik.errors.password?<div>{formik.errors.password}</div>:null}
                                </div>
                                <div style={{display:'flex', flexDirection:"column", alignItems:"center",marginTop:"1rem" }}>                          
                                <ButtonWrapper  type="submit" style={{backgroundColor:"rgb(29,161,242)"}}>
                                Sign up 
                                </ButtonWrapper>
                                    
                                <h3 style={{fontFamily: 'Montserrat, sans-serif'}}>Or</h3>

                                <Link href={{pathname: '/login'}}>
                                    <ButtonWrapper style={{backgroundColor:"rgb(56,72,87)"}}>
                                    Login
                                    </ButtonWrapper>
                                </Link>
                                
                                </div>

                    </form>
                    
                    
                    
                    
                    
                    
                    </SignupWrapper>
                   
           
        </ContainerWrapper>
    )
}

export default Signup;
