const data = require('../Webdev_data2.json')

//action created for retrieving data. 
export const getData = (dispatch) => {
    dispatch ({
        type: 'GET_DATA',
        payload: data
    })
}
