import React, { Component } from 'react'
import './Editor.css'
class Editor extends Component {
    constructor(){
        super()
        this.state = {
            input : "Please Enter Text under Input Box ;)"
        }
    }

    changeText(e){
        this.setState({
            input : e.target.value
        })
    }



    textReset(){
        this.setState({
            input : ''
            
        })
        console.log("wow")
    }


    

  render() {
    return (
      <div className='containerFull'>

        <div className='inputContainer'>
            <h2>Input</h2>
            <textarea id='input' value={this.state.input} onChange={(textChanged) => this.changeText(textChanged)} />
            <button className='reset' onClick={()=>(this.textReset())  }>Reset</button>
        </div>
        <div className='outputContainer'>
            <h2>Pro Note</h2>
            <div id='output'>{this.state.input}</div>
        </div>
        
      </div>
    )
  }
}

export default Editor
