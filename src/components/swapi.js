import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../redux/actions/actions'

export default function Swapi() {
    const dispatch = useDispatch()
    const Data = useSelector(state => state.swapiData)

    function setId(id) {
        debugger

        dispatch(actions.setCurrentData(id));
        // dispatch(actions.setId(id));
    }

    return (
        <>
            <label>id:</label>

            <input type="number" onChange={(e) => setId(e.target.value)} />

            <h2>
                <label>id  :</label>{Data.id}</h2>
            <h2>
                <label>name   :</label>{Data.name}
            </h2>
            <h2>
                <label>hairColor :</label>{Data.hairColor}
            </h2>
        </>
    )
}