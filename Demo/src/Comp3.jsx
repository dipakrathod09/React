import { useContext } from 'react'
import {CC} from './Comp1'
import {CC1} from './Comp2'

function Comp3() {
    const css = useContext(CC)
    const text = useContext(CC1)
    return (
        <h1 style={css}>Welcome to useContext {text}</h1>
    )
}
export default Comp3;