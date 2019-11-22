import React from 'react';
import uuid from 'uuid';
class Page extends React.Component {
    state = {
        id: null,
        Name: "",
        Email: "",
        both: [],
        editchange: true,
        currentstate: ""
    }
    changeData = (e) => {
        {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }
    deleteFunction = (e) => {
        this.state.both.splice(e, 1)
        this.setState({})
    }
    clickData = (e) => {
        e.preventDefault();
        var id = uuid();
        this.state.both.push({ id: id, Name: this.state.Name, Email: this.state.Email })
        this.setState({
            Name: "",
            Email: ""
        })
    }
    editFunction = (e) => {
        this.setState(
            {
                Name: this.state.both[e].Name,
                Email: this.state.both[e].Email,
                editchange: !this.state.editchange,
                currentstate: e
            }
        )
    }
    updatefunction = (e) => {
        e.preventDefault()
        this.state.both[this.state.currentstate].Name = this.state.Name
        this.state.both[this.state.currentstate].Email = this.state.Email
        this.setState({ editchange: !this.state.editchange, Name: "", Email: "" })
    }
    render() {
        // console.log(this.state.both) 
        return (
            <>
                <form >
                    <input type="text" name="Name" value={this.state.Name} onChange={this.changeData} /><br></br>
                    <input type="text" name="Email" value={this.state.Email} onChange={this.changeData} /><br></br>
                    {this.state.editchange ?
                        <button type="submit" className="btn btn-primary btn-sm" onClick={this.clickData}>Submit</button>
                        :
                        <button type="reset" className="btn btn-primary btn-sm" onClick={this.updatefunction}>Update</button>
                    }
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
                                        <button type="reset" className="btn btn-primary btn-sm" onClick={() => this.editFunction(Index)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => this.deleteFunction(Index)}>Delete</button>
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
export default Page;
