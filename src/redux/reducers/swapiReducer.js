import produce from 'immer'
import execHandler from './reducerUtils';

const initialState = {
    id: "",
    name: "",
    hairColor: ""
}


const swapiData = {
    setId(state, action) {
        debugger
        state.id = action.payLoad;
    },
    setNameFromSwapi(state, action) {
        debugger
        state.name = action.payLoad.name;
    },
    setHairColorFromSwapi(state, action) {
        debugger
        // alert("setHairColorFromSwapi")
        state.hairColor = action.payLoad.hair_color;
    },

}
export default produce((state, action) => {
    execHandler(state, action, swapiData)
}, initialState)