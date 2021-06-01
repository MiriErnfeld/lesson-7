
// export function addPupil(newPupil) {
//      
//     return { type: "ADD_NEW_PUPIL", payLoad: newPupil }
// }

// export function updatePupil(pupil) {
//      
//     return { type: "UPDATE_PUPIL", payLoad: pupil }
// }

// export function deletePupil(pupilId) {
//      
//     return { type: "DELETE_PUPIL", payLoad: pupilId }
// }


// export function updateClass(newClass) {
//     return { type: 'CHANGE_CLASS', payLoad: newClass }
// }

/////////////////////////////////////////////////

function convertActionName(actionName) {//addPupil

    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();//ADD_PUPIL
}

//let x=actions.addPupil(name="sasi",id="12345654")
const actions = new Proxy(
    {},
    {
        get: function (target, prop) {//prop='addPupil'
            ;
            if (target[prop] === undefined)
                return function (args) {//arge={name="dasi",id="12345654"}
                    return { type: convertActionName(prop), payLoad: args }//{type:"ADD_PUYPIL", payload:name="sasi",id="12345654"}
                }
            else
                return target[prop];
        },

    }
)
export default actions;










