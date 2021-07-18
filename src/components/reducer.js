export default function(state, action){
    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                posts: action.payload
            }
        case 'users':
            return {
                ...state,
                type: action.payload
            }
        case 'posts':
            return {
                ...state,
                type: action.payload
            }
        case 'theme':
            return {
                ...state,
                theme: state.theme === 'dark' ? 'light' : 'dark',
                check: !state.check
            }

        default:
            return state
    }
}