import { createContext } from 'react'
import  Comp2  from './Comp2'
const CC = createContext()
const css = {backgroundColor:'yellow',color:'red',fontSize:'45px'}
function Comp1() {
   return (
   <>
     <CC1.Provider value={css}>
        <Comp2/>
     </CC1.Provider>
</>
    )
}
export default Comp1
export {CC}