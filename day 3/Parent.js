 import Child from './Components/Child.js';
 const Parent =()=>{
    var n="S.Nigitha";
    var r= "727722EUCS118";
    var y="II";
    var d="18/10/2004"
    var de="CSE";
    return(
        <>
        <Child name={n} rollno={r} year={y} dob={d} dept={de}></Child>
        </>
    )
}
export default Parent;