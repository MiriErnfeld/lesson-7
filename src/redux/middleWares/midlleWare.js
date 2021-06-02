
import actions from '../actions/actions'
import axios from 'axios'

export const getDataFromSwapi = ({ getState, dispatch }) => (next) => (action) => {

    if (action.type == "SET_CURRENT_DATA") {

        let id = action.payLoad

        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(response => {
                debugger
                console.log(response)
                dispatch(actions.setId(id))
                debugger
                dispatch(actions.setNameFromSwapi(response.data))
                debugger
                dispatch(actions.setHairColorFromSwapi(response.data))
            }).catch(error => {
                alert(error);
            });
    }
    // if (action.type == "SET_CURRENT_DATA") {
    //     debugger
    //     let id = action.payLoad//6

    //     fetch(`https://swapi.dev/api/people/${id}/`, {"method":"GET"})
    //         .then(response => response.json())
    //         .then(result => {
    //             debugger
    //             console.log(result);
    //             dispatch(actions.setId(id));
    //             dispatch(actions.setNameFromSwapi(result));
    //             debugger
    //             dispatch(actions.setHairColorFromSwapi(result));
    //         })
    //         .catch(error => console.log('error', error));
    // }
    return next(action)
}