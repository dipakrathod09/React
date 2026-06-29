import { createContext } from 'react'
import Comp3 from './Comp3'
const CC1 = createContext()
function Comp2() {
    return(
        <>
            <CC1.Provider value="Student">
                <Comp3/>
            </CC1.Provider>
        </>
    )
}
export default Comp2;
export {CC1}