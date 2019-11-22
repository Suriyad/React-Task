import React from 'react';
import uuid from 'uuid';

class Forms extends React.Component {
    state = {
        Name: "",
        Email: "",
        id: null,
        both: [],

    }
    submitData = (e) => {
        // console.log("e value", e);
        e.preventDefault();
        var Name = e.target.elements.Name.value
        var Email = e.target.elements.Email.value
        var id = uuid();

        this.setState({
            Name,
            Email,
            id,
        })
        this.state.both.push({ Name, Email, id })
        e.target.elements.Name.value = "";
        e.target.elements.Email.value = "";

    };
    delete = (id) => {
        this.state.both.splice(id, 1)
        this.setState({})
    }
    // select = (e) => {
    //     var a = e.target.elements.a.value
    //     var b = e.target.elements.b.value
    //     this.setState({
    //         a,
    //         b,
    //     })

    // }
    render() {
        return (
            <>
                <form onChange={this.submitData}>

                    <p>Name: <input type="text" name="Name" ></input></p>
                    <p>Email: <input type="text" name="Email"></input></p>
                    <button type="submit" >Submit</button><br />

                </form>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.both.map((val, Index) => {
                                return (
                                    <tr>
                                        <td>{val.Name}</td>
                                        <td>{val.Email}</td>
                                        <button type="reset" className="btn btn-primary btn-sm" onChange={this.submitData}>Edit</button>
                                        <button className="btn btn-danger-btn-sm" onClick={() => this.delete(Index)} >Delete</button>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}



export default Forms;