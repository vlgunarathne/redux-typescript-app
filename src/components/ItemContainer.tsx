import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props:any) {
    return (
        <div>
            <h2>{props.itemName} - {props.itemCount}</h2>
            <button onClick={props.buyItem}>BuyItem</button>
        </div>
    )
}

const mapStateToProps = (state:any, ownProps:any) => {
    const itemCount = ownProps.item === "Cake" ? state.cake.numberOfCakes : state.iceCream.numberOfIceCream
    const itemName = ownProps.item
    return {
        itemCount: itemCount,
        itemName: itemName
    }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
     const dispatchFunction = ownProps.item === "Cake" ? 
     () => dispatch(buyCake())
     :
     () => dispatch(buyIceCream())

     return {
         buyItem : dispatchFunction
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
