import { Component } from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
    }
    getStudent = (event) => {
        if (event !== undefined && event.preventDefault) {
            event.preventDefault();
            const formData = new FormData(event.target);
            this.state.name = formData.get('name');
            this.state.age = Number(formData.get('age'));
            this.props.onSubmit(this.state);
            this.setState(() => ({
                name: "",
                age: ""
            }));
            document.querySelector("#name").value=""
            document.querySelector("#age").value=""
            console.log('Student is Added Successfully!');
        } else {
            console.log('Error Occurred When Adding A new Student');
        }
    }
    render() {
        return (
            <div className="container rounded-5 shadow-lg px-5 py-4 mt-5">
                <form className="col bg-white" onSubmit={this.getStudent} method="post" autocomplete="off">
                    <h3 className='text text-center fw-bold'>Registration Form</h3>
                    <hr />
                    <div class="col">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" id="name" placeholder="Enter Your Name" autoComplete="off" required />
                    </div>
                    <div class="col mt-3">
                        <label for="age" class="form-label">Age</label>
                        <input type="text" class="form-control" name="age" id="age" placeholder="Enter Your Age" autoComplete="off" required />
                    </div>
                    <div class="col mt-2 justify-content-center align-self-center text-center">
                        <button className="btn btn-dark mt-4 px-5" id="add" type="submit">ADD</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default Register;