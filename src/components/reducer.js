const inistialState = {
    email: '',
    password: '',
    token:'',
}

export default function userReducer(state = inistialState, action) {
    const { type, payload } = action

    switch(type){
        case 'login/success':
            
            return {
                ...state,
                ...payload
            }
        case 'login/success-token':
            
            return {
                ...state,
                token: payload
            }
        case 'logout':

            return {
                ...state,
                token: ''
            }
        default:
            return state
    }
}