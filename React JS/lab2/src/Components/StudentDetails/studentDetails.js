import { useParams } from "react-router-dom";

let StudentDetails = ()=>{
    let {id} = useParams();
    return(
        <div className="container shadow-lg rounded-5 p-5 border w-25 text-center" style={{marginTop:"200px"}}>
        <div className="card-container">
            <div className="top-card"></div>
            <div className="top-card2"></div>
            <div className="circle"></div>
            <p className="fw-bold fs-3 mt-3">Your Entered id is {id}</p>
            <p className="mb-3"> <strong>User :</strong>  <i>Omnia Goher</i></p>
        </div>
    </div>
    )
}
export default StudentDetails;