import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const loginActionAsync = (email, password, navigate) => {

    const bodyFormData = new FormData()
    bodyFormData.append('email', email)
    bodyFormData.append('password', password)
    console.log(bodyFormData)

    return (dispatch, getState, baseUrlLogin) => {
        axios({
            method: "post",
            url: `${baseUrlLogin}/api/v1/users/login`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {
            //handle success
            dispatch(loginActionSuccessToken((response.data.data.token), (response.data.data.name)))
            console.log(response.data.data.name)
            navigate('/')
        }).catch((error) => {
            //handle error
            console.log(error)
        })
    }
}
// `${baseUrlLogin}/api/v1/users/login`
// const loginActionSuccess = (payload) => ({
//     type: 'login/success',
//     payload
// })

const loginActionSuccessToken = (payload, nama) => ({
    type: 'login/success-token',
    payload,
    nama
})

const logoutAction = () => ({
    type: 'logout'
})

const fetchUserDetailsAsync = () => {
    return (dispatch, getState, baseUrlLogin) => {
        const { token } = getState()
        console.log(token)

        axios.get(`${baseUrlLogin}/api/v1/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
}

const registerUser = (namaLengkap, email, password, navigate) => {

    return (dispatch, getState, baseUrlLogin) => {
        axios.post(`${baseUrlLogin}/api/v1/users/register`, {
            name: namaLengkap,
            email,
            password
        }).then((response) => {
            console.log(response)
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        })
    }
}

export {
    loginActionAsync,
    // loginActionSuccess,
    loginActionSuccessToken,
    fetchUserDetailsAsync,
    registerUser,
    logoutAction
}