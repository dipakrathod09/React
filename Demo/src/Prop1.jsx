import Prop2 from './Prop2'
function Prop1() {
    return (
        <div>
            <Prop2 name="std1" rollNo="101" marks={90}/>
            <Prop2 name="std2" rollNo="102" marks={95} />
            <Prop2 name="std3" rollNo="103" marks={100} />
        </div>
    )
}
export default Prop1;