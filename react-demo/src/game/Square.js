import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
    }
    // handleClick() {
    //     const squares = this.state.squares.slice();
    //     if(i % 2) {
    //         squares[i] = 'X';
    //     }else {
    //         squares[i] = 'O';
    //     }
    //     this.setState({squares: squares});
    // }
    render() {
        return (
            <span onClick={() => this.props.onClick()}>{this.props.value}</span>
        )
    }
}

export default Square;