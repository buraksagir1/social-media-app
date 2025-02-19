import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import google from "../public/google.png";
import microsoft from "../public/microsoft.png";
import playstore from "../public/playstore.png";

export default function Authentication() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleAuth = () => {
        if (!inputs.email || !inputs.password) {
            alert("Lütfen e-posta ve şifre giriniz.");
            return;
        }
        if (!isLogin && inputs.password !== inputs.confirmPassword) {
            alert("Şifreler uyuşmuyor!");
            return;
        }
        navigate("/");
    };

    return (
        <Container maxWidth="md">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={15}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={2}
                    sx={{ border: "2px solid gray", borderRadius: 4, p: 2, width: "100%", maxWidth: 400 }}
                >
                    <Typography variant="h4" fontWeight="bold" fontStyle="italic">
                        BAKGÖR
                    </Typography>

                    <TextField
                        fullWidth
                        label="E-posta veya Telefon"
                        variant="outlined"
                        type="email"
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />

                    <TextField
                        fullWidth
                        label="Şifre"
                        variant="outlined"
                        type="password"
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />

                    {!isLogin && (
                        <TextField
                            fullWidth
                            label="Şifreyi Tekrar Giriniz"
                            variant="outlined"
                            type="password"
                            value={inputs.confirmPassword}
                            onChange={(e) =>
                                setInputs({ ...inputs, confirmPassword: e.target.value })
                            }
                        />
                    )}

                    <Button fullWidth variant="contained" onClick={handleAuth}>
                        {isLogin ? "Giriş Yap" : "Kayıt Ol"}
                    </Button>

                    <Typography variant="body2">Veya</Typography>

                    <Box display="flex" alignItems="center" gap={1} sx={{ cursor: "pointer" }}>
                        <img src={google} alt="Google" width={30} height={30} />
                        <Typography color="primary">Google ile giriş yap</Typography>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ border: "2px solid gray", borderRadius: 4, p: 2, mt: 2, width: "100%", maxWidth: 400 }}
                >
                    <Typography variant="body2">
                        {isLogin ? "Hesabın yok mu?" : "Hesabın var mı?"}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="primary"
                        sx={{ cursor: "pointer", ml: 1 }}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Kayıt Ol" : "Giriş Yap"}
                    </Typography>
                </Box>

                <Typography variant="body2" mt={2}>
                    Uygulamayı İndir
                </Typography>

                <Box display="flex" gap={2} mt={1}>
                    <img src={microsoft} alt="Microsoft Store" width={120} height={40} style={{ cursor: "pointer" }} />
                    <img src={playstore} alt="Google Play" width={120} height={40} style={{ cursor: "pointer" }} />
                </Box>
            </Box>
        </Container>
    );
}
