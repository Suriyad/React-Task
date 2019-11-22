import React from 'react';
class Number extends React.Component {
    state = {
        click: 1,
    }
    change = () => {
        this.setState({ click: this.state.click + 1 })
    }
    render() {
        return (<div>
            {this.state.click}
            <button type="button" onClick={this.change}>Click Here</button>
        </div>
        )
    }
}
export default Number;