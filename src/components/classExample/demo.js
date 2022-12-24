import React, { Component } from "react";

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Hi',
            show: false
        }
    }
    componentDidMount() {
        // console.log("from component did mount")
        // setTimeout(() => {
        //     this.setState({
        //         show: true
        //     })
        // }, 1000);
    }
    handler = () =>{
        this.setState({ name: "welcome" })
    }
    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <button
                    onClick={this.handler}
                >
                    Change
                </button>
            </>
        )
    }
}
export default Demo