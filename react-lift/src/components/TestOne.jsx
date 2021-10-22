import React from 'react';

class TestOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'init data'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({data: 'data 1'});
            console.log("dom value", document.querySelector('#state').innerHTML);
            this.setState({data: 'data 2'});
            console.log("dom value", document.querySelector('#state').innerHTML);
            this.setState({data: 'data 3'});
            console.log("dom value", document.querySelector('#state').innerHTML);
        }, 1000)
        // this.setState({data: 'data 1'});
        // console.log("dom value", document.querySelector('#state').innerHTML);
        // this.setState({data: 'data 2'});
        // console.log("dom value", document.querySelector('#state').innerHTML);
        // this.setState({data: 'data 3'});
        // console.log("dom value", document.querySelector('#state').innerHTML);
    }
    
    render() { 
        return (
            <div id="state">
                {this.state.data}
            </div>
        );
    }
}
 
export default TestOne;