import React from 'react'
import {useFormik} from 'formik';
import {ContainerWrapper,
    IconWrapper,
    Loginheader,
    ButtonWrapper,
    SignupWrapper} from './index.style';
import * as Yup from 'yup';
import {faSnowflake} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {useStore} from '../../context/Auth';
import {useRouter} from 'next/router';

const Login = () => {

    const {login} = useStore();
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
          
        },
        validationSchema: Yup.object({
            email: Yup.string()
                      .email('Invalid email address')
                      .required('Email is required'),
            password: Yup.string()
                         .required('Password is required')

        }),
        onSubmit: values => {
           login(values);
           router.push("/")
        },
      });




    return (
       <ContainerWrapper>
           <SignupWrapper>
                <IconWrapper>
                            <FontAwesomeIcon 
                                style={{height:'4.9rem',width:'4.9rem', color:'rgb(29,161,242)'}}
                                size='10x'
                                icon={faSnowflake}
                            />
                </IconWrapper>
            <Loginheader>feed your curiousity</Loginheader>
            <form onSubmit={formik.handleSubmit} style={{display:'flex', flexDirection:'column', width:'100%',alignItems: 'center',justifyContent:"space-between",height:'30vh'}}>
               
               <div>
               <input
                    style={{ width: "100%",
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
                    style={{ width: "100%",
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
                <div style={{display:'flex', flexDirection:"column", alignItems:"center", marginTop:'5rem'}}>  
                <ButtonWrapper  type="submit" style={{backgroundColor:"rgb(56,72,87)"}}>
                                    Login
                </ButtonWrapper>
                <h3 style={{fontFamily: 'Montserrat, sans-serif'}}>Or</h3>

                <Link href={{pathname: '/login'}}>
                    <ButtonWrapper style={{backgroundColor:"rgb(29,161,242)"}}>
                    Sign up
                    </ButtonWrapper>
                </Link>
                </div>

           </form>
           </SignupWrapper>
       </ContainerWrapper>
    )
}

export default Login;
