import { Avatar, Box, Stack, Modal, Button, InputBase } from '@mui/material';
import React, { useState, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import '../index.css'
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import LogoutIcon from '@mui/icons-material/Logout';
import kasadam from '../public/kasadam.jpg'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Sidebar() {

    const navigate = useNavigate();
    const [searchedUser, setSearchedUser] = useState("");
    const users = useSelector((state) => state.data.users);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        setSearchedUsers([]);
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {

        const filteredUser = users.filter((user) => (user.userName.toLowerCase().includes(searchedUser.toLowerCase())))

        setSearchedUsers(filteredUser);
    }, [searchedUser])


    return (

        <Stack sx={{
            width: { sm: "20%", md: "25%", lg: "25%" },
            maxWidth: "300px",
            borderRight: "solid 1px gray"
        }}
            pt={3}
            paddingLeft={"20px"}
            paddingRight={"20px"}
            direction={"column"}
            position={"fixed"}
            left={0}
            top={0}
            bottom={0}
            gap={4}
        >
            <Box marginTop={"10px"} >
                <Box sx={{ display: { xs: "none", sm: "none", md: "block", cursor: "pointer" } }}><h3 style={{ fontSize: "23px", fontWeight: "bold", fontStyle: "italic" }} onClick={() => (navigate("/"))}>Bakgör</h3></Box>
                <Box sx={{ display: { md: "none", sm: "block" }, cursor: "pointer" }}><LocalSeeIcon fontSize="large" /></Box>

            </Box>
            <Box sx={{ cursor: "pointer" }} display={"flex"} columnGap={"6px"} alignItems={"center"}>
                <HomeIcon onClick={() => (navigate("/"))} fontSize="large" />
                <Box sx={{ display: { md: "block", xs: "none" } }}><h3 style={{ fontSize: "21px" }} onClick={() => (navigate("/"))}>Ana Sayfa</h3></Box>
            </Box>

            <Box display={"flex"} columnGap={"6px"} alignItems={"center"}>
                <SearchIcon fontSize="large" onClick={() => (handleOpen())} />
                <Box sx={{ display: { md: "block", xs: "none" }, cursor: "pointer" }}><h3 onClick={() => (handleOpen())} style={{ fontSize: "21px", cursor: "pointer" }} >Ara</h3></Box>                     </Box>


            <Box display={"flex"} columnGap={"6px"} alignItems={"center"}>
                <Avatar src={kasadam} />
                <Box sx={{ display: { md: "block", xs: "none" } }}><h3 style={{ fontSize: "21px" }}>Profil</h3></Box>                     </Box>


            <Box marginTop={"auto"} display={"flex"} columnGap={"6px"} alignItems={"center"}>
                <LogoutIcon onClick={() => (navigate("/auth"))} fontSize='large' />
                <Box sx={{ display: { md: "block", xs: "none" } }}><h3 style={{ fontSize: "21px" }}>Çıkış Yap</h3></Box>
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <InputBase
                        value={searchedUser}
                        onChange={(e) => setSearchedUser(e.target.value)}
                        sx={{ ml: 1, flex: 1, marginLeft: "0px" }}
                        placeholder="Kişi Ara"
                    />

                    {searchedUsers.map((user) => (
                        <Box display={"flex"} flexDirection={"column"} key={user.userId}>
                            <Box my={1} gap={2} display={"flex"} alignItems="center" >
                                <Avatar style={{ cursor: "pointer" }} onClick={() => (navigate("/profile/" + user.userId), handleClose())} src={user.avatar} />
                                <h4 style={{ cursor: "pointer" }} onClick={() => (navigate("/profile/" + user.userId), handleClose())}>{user.userName}</h4>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Modal>

        </Stack>

    )
}
