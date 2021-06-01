import produce from 'immer'
import execHandler from './reducerUtils';

const initialState = {
    name: "",
    age: ""
}


const loginData = {
    setName(state, action) {

        state.name = action.payLoad;
    },
    setAge(state, action) {

        state.age = action.payLoad;
    }
}
export default produce((state, action) => {
    ;
    execHandler(state, action, loginData)
}, initialState)