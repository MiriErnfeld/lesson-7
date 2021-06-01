import React from 'react';
import { useSelector } from 'react-redux'
import pupils from '../redux/reducers/pupils'
import { withRouter, useParams } from 'react-router-dom'
import data from '../redux/reducers/data';

export default withRouter(function PupilDetails(props) {

    const { id } = useParams()

    const Data = useSelector(state => state.pupils)
    console.log(Data);

    return (
        <>
            <h1>id: {id} -the pupil is :{Data.Allpupils[id].name}</h1>
            <ul>
                {Data.Allpupils.map(item => <li key={item.id}>name:{item.name}</li>)}
            </ul>
        </>
    )

})

















