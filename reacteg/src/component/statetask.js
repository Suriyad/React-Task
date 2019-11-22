import React from 'react';
class Statetask extends React.Component {
    state = {
        colour: "red",
        shape: "round",
        leaves: 5,
    }
    clrchange = () => {
        this.setState({ colour: "pink" });
    }
    render() {
        return (
            <div>
                <p>It's a  {this.state.colour} flower</p>
                <button type="button" onClick={this.clrchange}>Click Here</button>
            </div>
        )
    }
}
export default Statetask;