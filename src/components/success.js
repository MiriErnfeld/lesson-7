import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'


export default withRouter(function Success(props) {

    const { history } = props


    function beack(e) {
        setTimeout(() => history.push("/Login"), e)
    }


    const data = useSelector(state => state.Login)

    console.log(data);
    return (
        <div>
            <h2>Login is success!!!!!!!!</h2>
            <h1>hello to : {data.name} </h1>
            <h1>your age is: {data.age} </h1>
            <input type="text" placeholder="beack to Login" onBlur={e => beack(e.target.value)}></input>


        </div>
    )
})
