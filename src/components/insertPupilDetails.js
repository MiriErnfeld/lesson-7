import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'
import './pupil.css'

import actions from '../redux/actions/actions';
import { Redirect } from 'react-router';


export default function InsertPupilDetails() {

    const [state, setstate] = useState("")
    const [idState, setidState] = useState("")
    const dispatch = useDispatch()
    const nameRef = useRef('');
    const idRef = useRef('');

    function removePupil() {

        dispatch(actions.deletePupil(idRef.current.value))
    }

    function update() {
        dispatch(actions.updatePupil({ name: nameRef.current.value, id: idRef.current.value }))
    }

    function insertPupil() {

        setstate(nameRef.current.value)
        setidState(idRef.current.value)
        dispatch(actions.addNewPupil({ name: nameRef.current.value, id: idRef.current.value }))

        if (idState === "") { <Redirect to="./Home"></Redirect> }
    }
    // if (idState === " ") {
    //      

    // }
    return (
        <>

            <label >name:
            <input ref={nameRef} type="string"></input>
            </label>
            <label >id:
            <input ref={idRef} type="string"></input>
            </label>
            <button className="button1" onClick={insertPupil}>insert pupil</button>
            <button className="button1" onClick={removePupil}>remove</button>
            <button className="button1" onClick={update}>update</button>
        </>
    )

}
