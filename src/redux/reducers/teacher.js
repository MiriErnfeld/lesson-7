import produce from 'immer'

const initialState = {
    teacher: {
        name: "Dina",
        family: "Cohen",
    }
}

export default produce((state, action) => {
    switch (action.type) {
        case "SET_TEACHER_NAME": { state.teacher.name = action.payLoad }
            break;
        case "SET_TAECHER_FAMILY": { state.teacher.family = action.payLoad }
            break;

    }
}, initialState)