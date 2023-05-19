let Students = function ({studentsList}) { 
    let RenderStudents = (All)=>{
        if(All.length){
            return All.map((student)=>{
                return (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                    </tr>          
                )
            })
        }
        else{
            return(
                <tr>
                    <td colSpan="6">No Data in the Table</td>
                </tr>           
            )
        }
    }

    return (
        <div className="container mt-5" style={{height:"100px"}}>
            <table className="table table-striped text-center rounded-5 shadow-lg p-3" >
                <thead className="table-header rounded-5">
                    <tr>
                        <th colSpan="6" className="fs-5 rounded-5">All Students Data</th>
                    </tr>
                    <tr>
                        <th scope="col" className="px-5">Name</th>
                        <th scope="col" className="px-5">Age</th>
                    </tr>
                </thead>
                <tbody className="" style={{minHeight:"100px"}}>
                    { RenderStudents(studentsList) }
                    <td colSpan="6" className="rounded-top rounded-5 text-white p-2">.........</td>
                </tbody>
            </table>         
        </div>                
    )
 } 
 export default Students;