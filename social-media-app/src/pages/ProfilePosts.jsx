import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Avatar, Box, Container } from '@mui/material';

export default function ProfilePosts() {
    const users = useSelector((state) => state.data.users);
    const navigate = useNavigate()
    const { userId, postId } = useParams();
    const displayedUser = users.find((user) => Number(user.userId) === Number(userId));

    if (!displayedUser || !displayedUser.posts) {
        return <div>Kullanıcı veya gönderi bulunamadı.</div>;
    }

    const displayedPost = displayedUser.posts.find((post) => Number(post.postId) === Number(postId));

    if (!displayedPost) {
        return <div>Gönderi bulunamadı.</div>;
    }

    return (
        <Container maxWidth={"lg"}>
            <Box mt={10} gap={4} display={"flex"} justifyContent={"center"}>
                <Box>
                    <h4 style={{ cursor: "pointer" }} onClick={() => (navigate("/profile/" + displayedUser.userId))}>Geri Dön</h4>
                </Box>
                <Box display={"flex"} flexDirection={"column"} >
                    <img style={{ width: { md: "45%", sm: "45%", xs: "45%" }, maxWidth: "460px" }} src={displayedPost.image} alt="" />
                    <Box mt={2}>
                        <h4>{displayedPost.likes} Beğenme</h4>
                    </Box>
                    <Box mt={2} display={"flex"} columnGap={1}>
                        <h4>{displayedUser.userName}</h4>
                        <p>{displayedPost.description}</p>

                    </Box>
                </Box>
                <Box display={"flex"} rowGap={2} flexDirection={"column"}>
                    <h3>Yorumlar</h3>
                    {displayedPost.comments.map((comment) => (
                        <Box alignItems={"center"} gap={1} style={{ display: "flex", paddingLeft: "7px" }}>
                            <Avatar src={comment.commenterImg} />
                            <h4>{comment.commenterName}</h4>
                            <p>{comment.comment}</p>
                        </Box>
                    ))}

                </Box>

            </Box>

        </Container>



    );
}
