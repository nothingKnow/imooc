import React from 'react';
import Square from './Square';

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            history: [],
            stepNumber: 0,
            sortId: 1,
        };
    }
    handleClick(i) {
        console.log(i);
        const squares = this.state.squares.slice();
        if(this.calculateWinner(squares) || squares[i]) {
            return;
        }
        const stepNumber = this.state.stepNumber;
        let history = this.state.history;
        squares[i] = this.renderItem();
        if(stepNumber > -1) {
            history = history.slice(0, stepNumber + 1);
        }
        history.push({
            squares: squares,
            name: squares[i]
        });
        this.setState({
            squares: squares,
            history: history,
            stepNumber: history.length,
        });
    }
    handleHisotoryClick(item, index) {
        const history = this.state.history;
        this.setState({
            squares: history[index].squares,
            stepNumber: index,
        });
    }
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    renderSquare(i, j) {
        const index = (i - 1) * 3 + (j - 1);
        return <Square value={this.state.squares[index]} onClick={() => this.handleClick(index)} key={i + ',' + j}/>;
    }
    renderItem() {
        return (
            this.state.stepNumber % 2 === 0 ? 'X' : 'O'
        );
    }
    handleSortFn() {
        const history = this.state.history;
        this.setState({
            history: history.sort((item1, item2) => {}),
            sortId: -this.state.sortId
        });
    }
    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if(winner) {
            status = 'Winnner:' + winner;
        }else {
            status = 'Next player: ' + this.renderItem();
        }
        let squaresList = [];
        for(let i = 1; i <= 3; i++) {
            for(let j = 1; j <= 3; j++) {
                squaresList.push(this.renderSquare(i, j));
            }
        }
        const history = this.state.history;
        const historyList = history.map((item,index) => {
            const desc = index ?
                'Go to move #' + index :
                'Go to game start';
            return <li onClick={(e) => this.handleHisotoryClick(item, index)} key={index}>{desc}</li>
        });
        return (
            <div className="game-wrap">
                <p>{status}</p>
                {/*<div className="square-wrap">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>*/}
                <button onClick={() => this.handleSortFn}>sort</button>
                <div className="square-wrap">{squaresList}</div>
                <ul className='history-list'>{historyList}</ul>
            </div>
        )
    }
}
export default Board;