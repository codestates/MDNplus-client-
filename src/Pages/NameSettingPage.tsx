import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

axios.defaults.withCredentials=true;

const NameSettingPage = () => {
    const [nickname, setNickname] = useState('')
    const history = useHistory()

    const handleSubmit = () => {
        console.log(nickname)
        axios.post('http://localhost:80/oauth/nick', {nickName: nickname})
        .then(res => {
            history.push('/')
        })
        .catch(err => console.log('안됨'))
    }

    const handleChangeName = (e:any) => {
        console.log(e.target.value)
        setNickname(e.target.value)
    }

    return (
        <>
        <input onChange={handleChangeName} placeholder="닉네임을 입력해주세요"></input>
        <div onClick={handleSubmit}>다음</div>
        </>
    )
}

export default NameSettingPage;