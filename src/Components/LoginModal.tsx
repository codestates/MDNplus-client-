
import axios from 'axios'
import React, { useState } from 'react'
// require('dotenv').config();

// const clientID = process.env.GITHUB_CLIENT_ID;
// const clientSecret = process.env.GITHUB_CLIENT_SECRET;

const REST_API_KEY = '144bf580b6a5f37255716facf6728b0d'
const REDIRECT_URI = 'http://localhost:3000/kakaoLogin'
const { Kakao }:any = window


function LoginModal() {
    const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize/?client_id=6247a72ec8e51735ea34`
    const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}
    `

    const socialLoginHandler = () => { // 깃허브로 로그인 버튼이 클릭이 되면, 깃허브 로그인 주소로 이동하게 됨
        console.log('깃허브 로그인 실행됨')
        window.location.assign(GITHUB_LOGIN_URL)
    }

    const kakaoLoginHandler = () => { // 깃허브로 로그인 버튼이 클릭이 되면, 깃허브 로그인 주소로 이동하게 됨
        // console.log('카카오 로그인 실행됨')
        // window.location.assign(KAKAO_LOGIN_URL)
        // console.log('리다이렉션 페이지로 이동')
        Kakao.Auth.authorize({
            redirectUri: REDIRECT_URI
        });
    }
        




    return (
        <div>
            <button onClick={socialLoginHandler}>깃허브로 로그인</button>
            <button onClick={kakaoLoginHandler}>카카오로 로그인</button>
        </div>
    )
}

export default LoginModal

