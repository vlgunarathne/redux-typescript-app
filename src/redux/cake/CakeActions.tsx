import { BUY_CAKE } from './CakeTypes'

export const buyCake = (number:number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}