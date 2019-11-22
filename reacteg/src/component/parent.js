import React from 'react';
import Second from './child';

class First extends React.Component {
    state = {
        name: "suriya"
    }
    change = () => {
        this.setState({ name: "priya" })
    }
    render() {
        const { name } = this.state
        return (
            <div>My name is {this.state.name}
                <Second value={name} />
                <button type="button" onClick={this.change}>Click Here</button>

            </div>
        )
    }
}
export default First;

