import React from 'react';
class Input extends React.Component {
    state = {
        Name: "",
        a: ""
    }
    changeFunction = (e) => {
        this.setState({
            a: e.target.value

        })
    }
    clickFunction = () => {
        this.setState({
            Name: this.state.a
        })

    }
    render() {
        return (
            <div>
                Name:<input type="text" onChange={this.changeFunction} ></input><br />
                <button onClick={this.clickFunction}>click</button>
                <p>{this.state.Name}</p>

            </div>

        )
    }

}

export default Input;

