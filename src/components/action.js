import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const loginActionAsync = (email, password, navigate) => {
    
    return(dispatch, getState, baseUrlLogin) => {
        axios.post(`${baseUrlLogin}/api/v1/users/login`, {
            email,
            password
        }).then((response) => {
            dispatch(loginActionSuccessToken(response.data.data.token))
            console.log(response.data.data.token)
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        })
    }
}

// const loginActionSuccess = (payload) => ({
//     type: 'login/success',
//     payload
// })

const loginActionSuccessToken = (payload) => ({
    type: 'login/success-token',
    payload
})

const fetchUserDetailsAsync = () => {
    return(dispatch, getState, baseUrlLogin) => {
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

const registerUser = (namaLengkap, email, password) => {
    
    return(dispatch, getState, baseUrlLogin) => {
        axios.post(`${baseUrlLogin}/api/v1/users/register`, {
            name: namaLengkap,
            email,
            password
        }).then((response) => {
            console.log(response)
            // navigate('/login')
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
    registerUser
}