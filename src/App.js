
import './App.css';
import React from "react";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            count: 0,
            globalcountX: 0,
            globalcountO: 0,
            drawcount: 0,
            allcount: 0,
            current: "",
            x: 0,
            o: 0
        }
        this.winnerLine = [
            [0, 1, 2],
            [3, 4 ,5],
            [6, 7 ,8],
            [0, 3 ,6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

    }


    resetGame = () => {
        this.setState({squares : Array(9).fill(null)});
        this.setState({count: 0});
    }

    draw = () =>{
        if (this.state.count === this.state.squares.length - 1) {
            alert("draw");
            console.log("draw");
            this.setState({drawcount: this.state.drawcount + 1});
            this.setState({allcount: this.state.allcount + 1});
        }

    }

    winner() {
        let checkElem = (this.state.count % 2 === 0) ? (this.state.current === 'X') ? "X" : "O" : "O";
        for (let i = 0; i < 8; i++) {
            let line = this.winnerLine[i];
            if (this.state.squares[line[0]] === checkElem &&
                this.state.squares[line[1]] === checkElem &&
                this.state.squares[line[2]] === checkElem) {
                alert(checkElem + " " + "win");
                if (checkElem === "X") {
                    this.setState({globalcountX: this.state.globalcountX + 1});
                }
                if (checkElem === "O") {
                    this.setState({globalcountO: this.state.globalcountO + 1});
                }
                this.setState({allcount: this.state.allcount + 1});
            }

        }
    }

    clickHandler = event => {
            let data = event.target.getAttribute('data');
            let currentSquare = this.state.squares;
            if (currentSquare[data] === null) {
                if (this.state.current === "X") {
                    currentSquare[data] = (this.state.count % 2 === 0) ? "X" : "O";

                } else {
                    currentSquare[data] = (this.state.count % 2 === 0) ? "O" : "X";
                }
                this.setState({count: this.state.count + 1});
                this.setState({squares: currentSquare});
                this.winner();
                this.draw();
            }
    }


    reset = () => {
        this.setState({squares : Array(9).fill(null)});
        this.setState({count: 0});
        this.setState({globalcountX: 0});
        this.setState({globalcountO: 0});
        this.setState({drawcount: 0});
        this.setState({allcount: 0});

    }
    checkFirst = (event) => {
        let step = event.target.getAttribute('data');
        this.setState({current: step});
    }

  render() {

      return (
          <div className="App">
              <header className="App-header">
               <div className="checkplayer">
                   <p>Кто первый ходит???</p>
                   <button className="first" onClick={this.checkFirst} data='X'>X</button>
                   <button className="second" onClick={this.checkFirst} data='O'>O</button>
               </div>
             <div className="tic-tac-toe">
             <div className="ttt-grid" onClick={this.clickHandler} data="0">
                 {this.state.squares[0]}
             </div>
                 <div className="ttt-grid" onClick={this.clickHandler} data="1">
                     {this.state.squares[1]}
                 </div>
                 <div className="ttt-grid" onClick={this.clickHandler} data="2">
                     {this.state.squares[2]}
                 </div>
                 <div className="ttt-grid" onClick={this.clickHandler} data="3">
                     {this.state.squares[3]}
                 </div>
                 <div className="ttt-grid" onClick={this.clickHandler} data="4">
                     {this.state.squares[4]}
                 </div>
                 <div className="ttt-grid" onClick={this.clickHandler} data="5">
                     {this.state.squares[5]}
                 </div>
                 <div className="ttt-grid" onClick={this.clickHandler} data="6">
                     {this.state.squares[6]}
                 </div>
                 <div className="ttt-grid" onClick={this.clickHandler} data="7">
                     {this.state.squares[7]}
                 </div>
                 <div className="ttt-grid" onClick={this.clickHandler} data="8">
                     {this.state.squares[8]}
                 </div>
             </div>
                  <button className="resetgame" onClick={this.resetGame}>New Game</button>
                  <button className="allzerostatus" onClick={this.reset}>Reset</button>
                  <p> Побед "X" :  {this.state.globalcountX}</p>
                  <p> Побед "O" :  {this.state.globalcountO}</p>
                  <p> Ничьих  :  {this.state.drawcount}</p>
                  <p> Сыгранных игр : {this.state.allcount}</p>

              </header>
          </div>

      );

  }
}

export default App;
