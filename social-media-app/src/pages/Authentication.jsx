import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import authImg from '../public/auth.png'
import logo from '../public/logo.png'
import google from '../public/google.png'
import microsoft from '../public/microsoft.png'
import playstore from '../public/playstore.png'
import { useNavigate } from 'react-router-dom';




export default function Authentication() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState(
        {
            email: "",
            password: "",
            confirmPassword: ""
        });

    const handleAuth = () => {
        if (!inputs.email || !inputs.password) {
            alert("Lütfen eposta ve şifre giriniz")
        }
        else { navigate("/") }
    }
    return (
        <Container maxWidth="md">

            <Box display="flex" gap="5px" marginTop="150px" >

                <Box sx={{
                    display: { xs: 'none', sm: 'block' }, width: {
                        md: '60%',
                    }
                }}>
                    <img src={authImg} alt="" />
                </Box>

                <Box sx={{
                    width: {
                        sm: '100%',
                        md: '40%',
                    },
                }} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'5px'} >
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} rowGap={'10px'} sx={{
                        border: "2px solid gray",
                        borderRadius: 4,
                        paddingRight: "10px",
                        paddingLeft: "10px",

                    }}>

                        <img src={logo} alt="" />
                        <TextField value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })} type='email' sx={{ width: "96%" }} label="E Posta veya Telefon Giriniz" variant="outlined" />

                        <TextField value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            sx={{ width: "96%" }} label="Şifre Giriniz" variant="outlined" type='password' />

                        {isLogin ? (null) : (<TextField value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            sx={{ width: "96%" }} label="Tekrar Şifre Giriniz" variant="outlined" type='password' />)}

                        <Button onClick={() => handleAuth()} sx={{ width: "96%" }} variant="contained">Giriş Yap</Button>
                        <h4>Veya</h4>

                        <Box display={'flex'} gap={'10px'} alignItems={'center'}  >
                            <img style={{ width: "30px", height: "30px", cursor: "pointer" }} src={google} alt="" />
                            <p style={{ color: "lightblue" }}>Google ile giriş yap</p>
                        </Box>
                    </Box>

                    {isLogin ? (<Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
                        border: "2px solid gray",
                        borderRadius: 4,
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        width: { sm: "100%", md: "106%", height: "50px" },
                        gap: "5px"
                    }}>
                        <p>Hesabın yok mu?</p>
                        <p onClick={() => (setIsLogin(false))} style={{ color: 'lightblue', cursor: "pointer" }} >Kayıt Ol</p>
                    </Box>) : (<Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
                        border: "2px solid gray",
                        borderRadius: 4,
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        width: { sm: "100%", md: "106%" },
                        gap: "5px"
                    }}>
                        <p>Hesabın var mı?</p>
                        <p onClick={() => (setIsLogin(true))} style={{ color: 'lightblue', cursor: "pointer" }} >Giriş Yap</p>
                    </Box>)}

                    <p>Uygulamayı İndir</p>
                    <Box display={'flex'} columnGap={'30px'} >
                        <img style={{ width: "45%", height: "40px", cursor: "pointer" }} src={microsoft} alt="" />
                        <img style={{ width: "45%", height: "40px", cursor: "pointer" }} src={playstore} alt="" />
                    </Box>

                </Box>




            </Box>


        </Container >
    )
}
