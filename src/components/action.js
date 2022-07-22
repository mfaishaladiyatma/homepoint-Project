import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const loginActionAsync = (email, password, navigate, toast) => {

    // const bodyFormData = new FormData()
    // bodyFormData.append('email', email)
    // bodyFormData.append('password', password)
    // console.log(bodyFormData)

    const urlEncodedBody = new URLSearchParams()
    urlEncodedBody.append('email', email)
    urlEncodedBody.append('password', password)
    

    return (dispatch, getState, baseUrlLogin) => {
        axios({
            method: "post",
            url: `${baseUrlLogin}/api/v1/users/login`,
            data: urlEncodedBody,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }).then((response) => {
            //handle success
            dispatch(loginActionSuccessToken((response.data.data.token), (response.data.data.name), (response.data.data.id)))
            console.log(response.data.data.name)
            navigate('/')
            toast.success('Login Sukses')
        }).catch((error) => {
            //handle error
            toast.error('Login Gagal')
            console.log(error)
        })

        // axios.post(`${baseUrlLogin}/api/v1/users/login`, {
        //     email,
        //     password
        // }, {
        //     headers: { "Content-type": "application/x-www-form-urlencoded" }
        // }).then((response) => {
        //     dispatch(loginActionSuccessToken((response.data.data.token), (response.data.data.name), (response.data.data.id)))
        //     console.log(response.data.data.token)
        //     navigate('/')
        // }).catch((error) => {
        //     console.log(error)
        // })

    }
}
// `${baseUrlLogin}/api/v1/users/login`
// const loginActionSuccess = (payload) => ({
//     type: 'login/success',
//     payload
// })

const loginActionSuccessToken = (payload, nama, id) => ({
    type: 'login/success-token',
    payload,
    nama,
    id
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