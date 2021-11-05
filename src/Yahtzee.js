import './gameStyles/Yahtzee.css'
import {Component} from 'react'
import Dices from './gameDices/Dices';
import Rules from './gameRules/Rules';

class Yahtzee extends Component{

  constructor(props){
    super(props)
    this.state = {
      importedDices : [],
      importedBasicRules : [],
      score : 0
    }
  }

  //TODO - Restart game after choosing a rule and getting points.

  importDices = (dices) =>{
    this.setState({
      importedDices : dices
    })
  }
  
  importClickedRule = (id) =>{
    let clickedRule = id

    if(this.state.importedDices.length === 6){
      const dicesMatchingRule = this.state.importedDices.filter(dice =>{
        return(dice === clickedRule)
      })
      
      let scoreSum = 0;

      for (let i = 0; i < dicesMatchingRule.length; i++) {
          scoreSum += dicesMatchingRule[i];
      }
      this.setState({
        score : scoreSum
      })
    }
  }

  render(){
    console.log(this.state.score)
   
    return(
      <div className = "Yahtzee">

        <Dices exportChosenDices = {this.importDices} />

        <Rules exportBasic = {this.importClickedRule} />

        <p className = "score">{`TOTAL SCORE: ${this.state.score}`}</p>

      </div>
    )
  }
}

export default Yahtzee;