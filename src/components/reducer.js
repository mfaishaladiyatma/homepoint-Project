const inistialState = {
    email: '',
    password: '',
    token: '',
    name: '',
    id: '',
    cart: [],
}

export default function userReducer(state = inistialState, action) {
    const { type, payload, nama, id, cartItems } = action

    switch (type) {
        case 'login/success':

            return {
                ...state,
                ...payload
            }
        case 'login/success-token':
            return {
                ...state,
                token: payload,
                name: nama,
                id
            }
        case 'logout':
            return {
                ...state,
                token: '',
                name: '',
                id: '',
                cart: []
            }
        case 'checkout':
            return{
                ...state,
                cart: [...state.cart, ...cartItems]
            }
        default:
            return state
    }
}