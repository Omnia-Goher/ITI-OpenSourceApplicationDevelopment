import { Component } from "react"

class DynamicInput extends Component {
    constructor() {
        super()
        this.state = {
            textInput: ""
        }
    }

    getData = (e)=>{
        this.setState({textInput: e.target.value})
    }

    clearInput = () => {
        this.setState({textInput: ""})
    }

    render() {
        return (
            <div className="container mt-5 shadow-lg rounded-5 w-50 py-5 border mx-auto text-center">
                <label for="text" className="fs-6 fw-semibold">Text</label>
                <input 
                    type="text" 
                    name="text"
                    value={this.state.textInput}
                    onChange={this.getData} 
                    placeholder="Enter any Text.." 
                    className="ms-5 mb-5 w-50 rounded-3 ps-2" 
                />
                <p className="mb-5">Output : <span className="fst-italic">{ this.state.textInput }</span></p>
                <button onClick={this.clearInput} type="button" className="btn btn-dark" >Clear</button>
            </div>
        )
    }
}

export default DynamicInput