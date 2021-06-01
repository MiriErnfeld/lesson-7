import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import Success from './success'
import Flash from './flash'

import actions from '../redux/actions/actions'

export default withRouter(function Login(props) {

    const data = useSelector(state => state.Login)

    const { history } = props


    const dispatch = useDispatch()
    // const [check, setCheck] = useState(false)
    const [nameValue, setnameValue] = useState()
    const [ifEmpty, setifEmpty] = useState(false)

    const refName = useRef()
    const refAge = useRef()


    function setAlldetails() {

        dispatch(actions.setName(refName.current.value))

        dispatch(actions.setAge(refAge.current.value))

        setnameValue(refName.current.value)

        // setifEmpty(true)
        //   
        // }
    }

    if (nameValue) {
        setTimeout(() => history.push("/Success"), 500)
    }

    // if (nameValue)
    //     return <Redirect to="/Success" />
    // if (ifEmpty)
    //     return <Redirect to={{ pathname: "/Login", state: { flash: "plese enter your name first" } }} />

    return (
        <div>
            <h2>login page:</h2>
            <br></br>
            <label>name :</label>
            <input type="text" ref={refName} type="string" ></input>
            <br></br>
            <label>my age</label>
            <input type="number" ref={refAge} type="string"></input>
            <br></br>
            <button type="button" onClick={setAlldetails}>Save</button>

        </div>
    )
})