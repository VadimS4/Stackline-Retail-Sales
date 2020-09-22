const data = require('../Webdev_data2.json')

export const getData = (dispatch) => {
    dispatch ({
        type: 'GET_DATA',
        payload: data
    })
}
