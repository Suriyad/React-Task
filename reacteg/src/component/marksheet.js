import React from 'react';
class Mark extends React.Component {
    state = {
        Tamil: "",
        English: "",
        Maths: "",
        Science: "",
        Socialscience: "",
        tot: "",
    }
    add = () => {
        this.setState({ tot: this.state.Tamil + this.state.English + this.state.Maths + this.state.Science + this.state.Socialscience })
    }
    change = (event) => {
        this.setState({
            // Tamil: event.target.value,
            // English: event.target.value,
            // Maths: event.target.value,
            // Science: event.target.value,
            // Socialscience: event.target.value
            [event.target.name]: Number(event.target.value)
        })
    }

    render() {
        return (
            <form>
                {this.state.tot}
                <p>Enter your Tamil Mark: <input type="text" name={"Tamil"} onChange={this.change}></input></p>
                <p>Enter your English Mark: <input type="text" name={"English"} onChange={this.change}></input></p>
                <p>Enter your Maths Mark: <input type="text" name={"Maths"} onChange={this.change}></input></p>
                <p>Enter your Science Mark: <input type="text" name={"Science"} onChange={this.change}></input></p>
                <p>Enter your Socialscience Mark: <input type="text" name={"Socialscience"} onChange={this.change}></input></p>
                <button type="button" onClick={this.add}>Total Marks</button>
            </form>
        )
    }
}
export default Mark;