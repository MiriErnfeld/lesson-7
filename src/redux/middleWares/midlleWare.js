
import actions from '../actions/actions'
// export const setAlert = (store) => (next) => (action) => {
//      
//     if (action.type == 'ADD_NEW_PUPIL')
//         alert("firstPupil: " + store.getState().pupils.Allpupils[0].name + " " + "classNum:  " + store.getState().classReducer.classGrade)
//     return next(action)
// }
// export const logAction = (store) => (next) => (action) => {
//     alert('action: ' + JSON.stringify(action));
//     return next(action);
// }
// export const timeOut = (store) => (next) => (action) => {
//     if (action.type == "UPDATE_PUPIL") {
//         // store.dispatch(action.addPupil());
//         setTimeout(() => { return next(action) }, 1000)
//     }
//     else
//         return next(action);

// }



export const getDataFromSwapi = ({ getState, dispatch }) => (next) => (action) => {

    // if (action.type == "SET_CURRENT_DATA") {

    //     let id = action.payLoad

    //     axios.get(`https://swapi.dev/api/people/${id}/`).then(response => {
    //         console.log(response)
    //         return response.data
    //     }).catch(o => {
    //         console.log(o);
    //     });
    // }
    if (action.type == "SET_CURRENT_DATA") {
        debugger
        let id = action.payLoad
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "cf_ob_info=502:653dc5431dd14c13:AMS; cf_use_ob=0");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch(`https://swapi.dev/api/people/${id}/`, requestOptions)
            .then(response => response.json())
            .then(result => {
                debugger
                console.log(result);
                dispatch(actions.setId(id));
                dispatch(actions.setNameFromSwapi(result));
                debugger
                dispatch(actions.setHairColorFromSwapi(result));
            })
            .catch(error => console.log('error', error));
        return next(action)
    }
    return next(action)
}