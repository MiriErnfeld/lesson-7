import produce from 'immer'
import execHandler from './reducerUtils';

const initialState = {
    Allpupils: [
        { name: "Batya", id: "4512365" },
        { name: "Tamar", id: "54214545" },
        { name: "Noah", id: "458754215" }
    ]
}


const pupils = {
    addNewPupil(state, action) {

        state.Allpupils.push(action.payLoad)
    },
    updatePupil(state, action) {
        state.Allpupils.find(x => x.id == action.payLoad.id).name = action.payLoad
    },
    deletePupil(state, action) {
        const index = state.Allpupils.indexOf(state.Allpupils.find(x => x.id == action.payLoad))
        if (index !== -1)
            state.Allpupils.splice(index, 1)
    }

}
export default produce((state, action) => {
    ;
    execHandler(state, action, pupils)
}, initialState)