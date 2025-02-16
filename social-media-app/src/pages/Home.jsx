import React, { useState } from 'react';
import { Container, Avatar, Box, Stack, Modal, Typography, Button, InputBase } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Recommendations from '../components/Recommendations';
import { useDispatch, useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import { likePost } from '../slices/data';
import '../index.css';
import kasadam from '../public/kasadam.jpg'
import { addComment } from '../slices/data';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const users = useSelector((state) => state.data.users);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedComments, setSelectedComments] = React.useState([]);
  const [addedComment, setAddedComment] = useState("")
  const navigate = useNavigate()

  const handleOpen = (comments) => {
    setSelectedComments(comments);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="lg">
      <Box display="flex" columnGap={"100px"}>
        <Sidebar />

        <Stack
          display={"flex"}
          ml={{ xs: 14, sm: 23, md: 34 }}
          mt={7}
          flexDirection={"column"}
          gap={2}
          sx={{
            width: { xs: "60%", sm: "70%", md: "65%", lg: "65%" },
            maxWidth: "560px",
          }}
        >
          {users.map((user) => (
            user.posts.map((post) => (
              <Box key={post.postId} display="flex" flexDirection="column" gap={1}>
                <Box alignItems={"center"} display={"flex"} style={{ width: "100%", maxWidth: "560px" }}>
                  <Box display={"flex"} columnGap={"6px"} alignItems={"center"}>
                    <Avatar sx={{ cursor: "pointer" }} onClick={() => (navigate("/profile/" + user.userId))} src={user.avatar} />
                    <h4 style={{ cursor: "pointer" }} onClick={() => (navigate("/profile/" + user.userId))} >{user.userName}</h4>
                  </Box>
                  <Box color={"lightblue"} marginLeft={"auto"}>
                    <h4>Takip Et</h4>
                  </Box>
                </Box>


                <Box key={post.postId} display="flex" flexDirection="column" gap={1}>
                  <img
                    style={{
                      width: "100%",
                      maxWidth: "560px",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                    src={post.image}
                    alt={post.description}
                  />

                  <Box columnGap={"7px"} display={"flex"} mt={"10px"}>
                    {post.isLiked ? (
                      <FavoriteIcon
                        onClick={() => dispatch(likePost(post))}
                        sx={{ cursor: "pointer", color: "red" }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        onClick={() => dispatch(likePost(post))}
                        sx={{ cursor: "pointer" }}
                      />
                    )}

                    <ChatBubbleOutlineIcon
                      onClick={() => handleOpen(post.comments)}
                      sx={{ cursor: "pointer" }}
                    />
                  </Box>

                  <Box>
                    <h4>{post.likes} Beğenme</h4>
                  </Box>

                  <Box
                    columnGap={"7px"}
                    display={"flex"}
                    alignItems={"center"}
                    sx={{
                      maxWidth: "560px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <h4>{user.userName}</h4> <p>{post.description}</p>
                  </Box>

                  <Box>
                    <h4 onClick={() => handleOpen(post.comments)} style={{ color: "gray", cursor: "pointer" }}>Yorumları gör</h4>
                  </Box>

                  <Box display={"flex"}>
                    <InputBase
                      value={addedComment}
                      onChange={(e) => (setAddedComment(e.target.value))}
                      sx={{ ml: 1, flex: 1, marginLeft: "0px" }}
                      placeholder="Yorum Ekle"
                    />
                    <SendIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(addComment({
                          commentedPostId: post.postId,
                          commentToAdd: {
                            commentId: Date.now(),
                            commenterName: "burak.sagir",
                            commenterImg: kasadam,
                            comment: addedComment
                          }
                        }));
                        setAddedComment("");
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            ))
          ))}
        </Stack>
        <Recommendations />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Yorumlar
          </Typography>
          {selectedComments.map((comment) => (
            <Box key={comment.commentId} display="flex" gap={2} alignItems="center" mt={2}>
              <Avatar src={comment.commenterImg} />
              <Box>
                <Typography fontSize={17} variant="body2" fontWeight="bold">{comment.commenterName}</Typography>
                <Typography fontSize={17} variant="body2">{comment.comment}</Typography>
              </Box>
            </Box>
          ))}

          <Button onClick={handleClose} sx={{ mt: 3 }}>Kapat</Button>
        </Box>
      </Modal>
    </Container>
  );
}
