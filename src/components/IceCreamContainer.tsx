import React from 'react';
import { buyIceCream} from '../redux';
import { connect } from 'react-redux';

function IceCreamContainer(props:any) {
    return (
        <div>
            <h2> Ice Cream - {props.numberOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        numberOfIceCream: state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        buyIceCream: () => { dispatch(buyIceCream())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
