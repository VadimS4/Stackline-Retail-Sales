const data = require('../Webdev_data2.json');

const appReducer = (state = data, action) => {
    console.log("reducer state:", state)
    console.log("reducer action:", action)
    switch(action.type) {
        case 'GET_DATA': {
            console.log("getting data", action)
            return {
                ...state,
                data: action.payload
            }
        }
        default:
            return state;
    }
}

export default appReducer;