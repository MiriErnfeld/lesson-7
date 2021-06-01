import produce from 'immer'
// import execHandler from './reducerUtils';

const initialState = {
    classGrade: 5
}

export default produce((state, action) => {
    switch (action.type) {
        case "CHANGE_CLASS": { state.classGrade = action.payLoad }
            break;
    }
}, initialState)

// const classReducer = {
//     changeClass(state, action) {
//         state.classGrade = action.payLoad
//     },

// }

// export default produce((state, action) => {
//     execHandler(state, action, classReducer)
// }, initialState)