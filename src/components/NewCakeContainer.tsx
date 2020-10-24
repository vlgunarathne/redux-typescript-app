import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'

function NewCakeContainer(props:any) {
    const [number, setNumber] = useState(1);

    return (
        <div>
            <h2>Number of cakes - {props.numberOfCakes}</h2>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/><br/>
            <button onClick={() => props.buyCake(number)}>Buy {number} cake(s)</button>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        buyCake : (number:number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)