import React from 'react';
import { Avatar, Box, Grid, Typography, Button, Container } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// yeni profile
const ProfilePage = () => {
    const { userId } = useParams()
    const users = useSelector((state) => (state.data.users));
    const displayedUser = users.find((user) => (Number(user.userId) === Number(userId)));
    const navigate = useNavigate()
    const displayedUserId = displayedUser.userId

    return (

        <Container maxWidth="lg">
            <Sidebar style={{ width: "15%" }} />
            <Box display={"flex"} flexDirection={"column"}>
                <Box sx={{ width: "75%" }} display={"flex"} alignItems={"center"} ml={50} mt={10} columnGap={3}>
                    <Box>
                        <Avatar style={{ width: "150px", height: "150px" }} src={displayedUser.avatar} alt="" />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Box><h3>{displayedUser.userName}</h3></Box>
                        <Box><h3>{displayedUser.name}</h3></Box>
                        <Box display={"flex"} columnGap={2}>
                            <h3>{displayedUser.followers} takipçi</h3>
                            <h3>{displayedUser.following} takip</h3>
                            <h3>{displayedUser.postCount} paylaşım</h3>
                        </Box>
                        <Box>
                            <p>{displayedUser.bio}</p>
                        </Box>

                    </Box>
                </Box>
                <Box sx={{ width: "75%" }} ml={20} mt={5}>
                    <Grid container spacing={14} ml={3}>
                        {displayedUser.posts.map((post) => (
                            <Grid item xs={12} sm={6} md={4} key={post.postId}>
                                <Box style={{ cursor: "pointer" }} onClick={() => (navigate("/profile/" + displayedUserId + "/" + post.postId))}
                                    component="img"
                                    src={post.image}
                                    alt={post.description}
                                    sx={{
                                        width: '300px',
                                        height: '250px',
                                        objectFit: 'cover',
                                        borderRadius: 1
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default ProfilePage;



