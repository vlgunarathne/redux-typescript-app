import React from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {

    const numberOfCakes = useSelector((state:RootStateOrAny) => state.cake.numberOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Num of cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
