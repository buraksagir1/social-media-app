import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Authentication from '../pages/Authentication'
import Profile from '../pages/Profile'
import ProfilePosts from '../pages/ProfilePosts'


export default function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/profile/:userId' element={<Profile />} />
            <Route path='/profile/:userId/:postId' element={<ProfilePosts />} />

        </Routes>
    )
}
