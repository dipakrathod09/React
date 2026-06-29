import Prop1  from "./Prop1";

function Prop2(props) {
    return(
        <div>
            <ul>
                <li>Name : {props.name}</li>
                <li>Roll No : {props.rollNo}</li>
                <li>Updated Marks : {props.marks+1}</li>
            </ul>
        </div>
    )
}
export default Prop2;