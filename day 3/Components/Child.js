const Child =(props)=>
{
    return(
        <>
        <table border='3'>
            <tr>
                <td>Student Name: </td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>Roll no: </td>
                <td>{props.rollno}</td>
            </tr>
            <tr>
                <td>Year of study: </td>
                <td>{props.year}</td>
            </tr>
            <tr>
                <td>Date of Birth: </td>
                <td>{props.dob}</td>
            </tr>
            <tr>
                <td>Department: </td>
                <td>{props.dept}</td>
            </tr>
        </table>
        </>
    )
}
export default Child;