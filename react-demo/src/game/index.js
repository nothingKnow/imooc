import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './index.css';


// function squareClick(e,number) {
//     if(number % 2 === 0) {
//         return '0';
//     }else {
//         return 'X';
//     }
// }
// function NumberList() {
//     const arr = [1,2,3,4,5,6,7,8,9];
//     this.state = {
//         value: null,
//     };
//     const listItems = arr.map((number) => {
//         return <span onClick={(e) => this.setState({value: 'X'})} key={number}>{this.state.value}</span>
//     });
//     return (
//         <div className="square-wrap">{listItems}</div>
//     );
// }

ReactDOM.render(<Board/>, document.getElementById('root'));