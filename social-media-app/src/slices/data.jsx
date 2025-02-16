import { createSlice } from '@reduxjs/toolkit'
import img1 from '../public/img1.png'
import img2 from '../public/img2.png'
import img3 from '../public/img3.png'
import papi from '../public/papi.jpeg'
import amca1 from '../public/amca1.jpg'
import amca2 from '../public/amca2.gif'
import dostlar from '../public/dostlar.jpg'
import kale from '../public/kale.jpg'
import pala from '../public/pala.webp'



const initialState = {
    users: [{
        userName: "ayse_yilmaz",
        name: "Ayşe Yılmaz",
        userId: 1,
        avatar: img1,
        followers: 56,
        following: 13,
        postCount: 2,
        bio: "Hacettepe Üniversitesi Hemşirelik ",
        posts: [
            {
                postId: 1,
                image: img1,
                description: "Çekim günü 📸",
                likes: 41,
                isLiked: false,
                comments: [{
                    commentId: 1,
                    commenterName: "Burak Koç",
                    commenterImg: img2,
                    comment: "Bravo!! 🙌"
                }, {
                    commentId: 2,
                    commenterName: "Sevda Alagöz",
                    commenterImg: img3,
                    comment: "Harika"
                }]
            }, {
                postId: 2,
                image: dostlar,
                description: "Tüm zamanların en iyi şarkısı🎶",
                likes: 12,
                isLiked: false,
                comments: [{
                    commentId: 3,
                    commenterName: "Burak Yılmaz",
                    commenterImg: img2,
                    comment: "Nostaljik 🙌"
                }]
            }]
    }, {
        userName: "burak.koc",
        name: "Burak Koç",
        userId: 2,
        avatar: img2,
        followers: 234,
        following: 201,
        postCount: 1,
        bio: "Kars Sarıkamış Micingirt Köyü",
        posts: [{
            postId: 4,
            image: kale,
            description: "Hele bizim köyün kalesine bakın",
            likes: 4,
            isLiked: false,
            comments: [{
                commentId: 6,
                commenterName: "pala.dayi",
                commenterImg: pala,
                comment: "Ağliram"
            }, {
                commentId: 7,
                commenterName: "Sevda Alagöz",
                commenterImg: img3,
                comment: "Vay canına"
            }]
        }]

    }, {
        userName: "ayse_fatma_hayriye",
        name: "Ayşe Fatma Hayriye",
        userId: 3,
        avatar: img3,
        followers: 514,
        following: 131,
        postCount: 1,
        bio: "Ankara ",
        posts: [{
            postId: 3,
            image: img3,
            description: "Çekim günü 📸",
            likes: 212,
            isLiked: false,
            comments: [{
                commentId: 4,
                commenterName: "sarıgamıs_ayisi36",
                commenterImg: amca1,
                comment: "evli misin?"
            }, {
                commentId: 5,
                commenterName: "ogretmenler.sayfasi",
                commenterImg: amca2,
                comment: "çok guselsiniz hanfendi"
            }, {
                commentId: 11,
                commenterName: "juan-alvarez-junior",
                commenterImg: papi,
                comment: "commenta jele vustas teq tuyoni"
            }]
        }]
    }],
}

export const dataSlice = createSlice({
    name: 'dataReducer',
    initialState,
    reducers: {
        likePost: (state, action) => {
            state.users.forEach((user) => {
                const likedPost = user.posts.find((post) => (post.postId === action.payload.postId))
                if (likedPost) {
                    if (likedPost.isLiked === false) {
                        likedPost.isLiked = true;
                        likedPost.likes++
                    } else {
                        likedPost.isLiked = false;
                        likedPost.likes--
                    }
                }
            })
        }, addComment: (state, action) => {
            const { commentedPostId, commentToAdd } = action.payload
            state.users.forEach(user => {
                const commentedPost = user.posts.find((post) => (post.postId === commentedPostId))

                if (commentedPost) {
                    commentedPost.comments.push(
                        commentToAdd
                    )
                }
            });
        }

    }
})

export const { likePost, displayComments, addComment } = dataSlice.actions

export default dataSlice.reducer