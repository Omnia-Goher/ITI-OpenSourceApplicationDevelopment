import { Component } from "react";
import Register from "./Register/register";
import Students from "./Students/students";


class Home extends Component{
    constructor(){
        super();
        this.state = {
            AllStudents : []
        }
    }
    ReciveStudentData = (newStudent)=>{
        this.setState(prevState => ({
            AllStudents: [...prevState.AllStudents, newStudent]
          }))
        console.log(this.state.AllStudents)
    }

    render(){
        return(
            <div className="container d-flex justify-content-evenly align-items-center flex-wrap">
                <div className="row">
                    <div className="col-12">
                        <Register onSubmit={this.ReciveStudentData}/>
                    </div>
                    <div className="col-12">
                    <Students studentsList={this.state.AllStudents} />
                    </div>

                </div>
               
                
            </div>
        )
    }
             
}
export default Home;