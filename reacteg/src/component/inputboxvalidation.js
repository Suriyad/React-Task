import React from "react";
import "./inputboxvalidation.css"
class Inputbox extends React.Component {
    state = {
        firstname: "",
        message: "",
        bordercolor: ""
    }
    onlyAlphabets = (e) => {
        var regex = /^[a-zA-Z]*$/;
        if (regex.test(e.target.value)) {
            this.setState({
                firstname: e.target.value,
                message: "",
                bordercolor: ""
            })
        } else {
            this.setState({
                firstname: e.target.value,
                message: "Enter only letters",
                bordercolor: "bordercolor"
            })
        }
    }
    render() {
        return (
            <form style={{ marginTop: "30px" }}>
                <label >First name *</label>
                <input type="text"
                    className={`form-control ${this.state.bordercolor}`}
                    placeholder="First name"
                    value={this.state.firstname}
                    required
                    name="firstname"
                    style={{ width: "30%" }}
                    onChange={this.onlyAlphabets}
                >
                </input>
                <div style={{ color: "red" }}>
                    {this.state.message}
                </div>
                <button class="btn btn-primary" style={{ marginTop: "30px" }} type="submit">Submit form</button>
            </form>
        )
    }
}
export default Inputbox;