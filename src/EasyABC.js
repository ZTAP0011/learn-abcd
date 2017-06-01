import React, {Component} from 'react';
import alphabets from './alphabets.json';
import classNames from 'classnames';
class EasyABC extends Component{
    constructor(props){
        super(props);
        this.state={
            alphabets:alphabets,
            currentPosition:0,
            currentTick:0,
            random:false,
            sound:true
        }
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.playSound = this.playSound.bind(this);
        this.switchRandom = this.switchRandom.bind(this);
        this.switchSound = this.switchSound.bind(this);
        this.manualPlaySound = this.manualPlaySound.bind(this);
    }

    randomNumber(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    next() {

        if(this.state.random){
            console.log("random ");
            if(this.state.currentTick<2){
                this.setState({currentTick:this.state.currentTick+1});
            }else{
                this.setState({currentPosition:this.randomNumber(0,25),currentTick:0});
            }
        }else{
            if(this.state.currentPosition === this.state.alphabets.length-1){
            if(this.state.currentTick<2){
            this.setState(
            {currentTick: this.state.currentTick + 1}
        )
        }else{
            this.setState(
            {currentPosition: 0,currentTick: 0}
        )
        }
        }else{
            if(this.state.currentTick<2){
            this.setState(
            {currentTick: this.state.currentTick + 1}
        )
        }else{
            this.setState(
            {currentPosition: this.state.currentPosition + 1,currentTick: 0}
        )
        }
        }
        }




    }

    prev() {

        if(this.state.currentPosition>0){
            this.setState(
            {currentPosition: this.state.currentPosition - 1}
        )
        }else{
            this.setState(
            {currentPosition: this.state.alphabets.length-1}
        )
        }


    }

    switchRandom(){
        this.setState({random:!this.state.random});
    }

     switchSound(){
        this.setState({sound:!this.state.sound});
    }

    componentDidMount(){
        console.log("Component did mount");
        let letterSound = document.querySelector(`audio[data-key="letter"]`);
        if(this.state.currentPosition===0){
            letterSound.currentTime=0;
            letterSound.play();
        }
    }

    componentDidUpdate(){
         console.log("Component did update");
        this.playSound();
    }

    manualPlaySound(){
    let letterSound = document.querySelector(`audio[data-key="letter"]`);
        let wordSound = document.querySelector(`audio[data-key="word"]`);

            if(this.state.currentTick===0){
            letterSound.currentTime=0;
            letterSound.play();
        }else{
            wordSound.currentTime=0;
            wordSound.play();
        }

    }

    playSound(){
        let letterSound = document.querySelector(`audio[data-key="letter"]`);
        let wordSound = document.querySelector(`audio[data-key="word"]`);
        if(this.state.sound){
            if(this.state.currentTick===0){
            letterSound.currentTime=0;
            letterSound.play();
        }else{
            wordSound.currentTime=0;
            wordSound.play();
        }
        }

    }
    render(){
        console.log("Rendering ");
        let showImage = this.state.currentTick!==0?true:false;
        let showWord =this.state.currentTick===2?true:false;
        return (
            <div>
            <div className="game">
                <span className="random-label">Random Letters: </span>
                <label className="switch">
                <input type="checkbox"
                    onClick={this.switchRandom}
                defaultValue="false"
                defaultChecked={this.state.random}/>
                    <div className="slider round"></div>
                </label>
                <span className="random-label">Sound: </span>
                <label className="switch">
                <input type="checkbox"
                    onClick={this.switchSound}
                defaultValue="true"
                defaultChecked={this.state.sound}/>
                    <div className="slider round"></div>
                </label>
            <div className="option">
            <div className="fields">
            <div className="field-block">
            {this.state.alphabets[this.state.currentPosition].letter}
            </div>
           <audio src={this.state.alphabets[this.state.currentPosition].letterSound} data-key="letter"/>
            </div>
                <div className="buttons">
                <a href="#" className="button prev" onClick={this.prev}>Previous</a>
                    <a href="#" className="button sound" onClick={this.playSound}>Play Sound Again</a>
                    <a href="#" className="button next" onClick={this.next}>Next</a>

                </div>
                <div className="fields">
                <div className="field-block">
                <div className="left-field">

                <div className={classNames('placeholder-span',{hide:showImage})}>Click Next to view Image</div>
                    <img className={classNames('letter-image',{hide:!showImage})} alt={this.state.alphabets[this.state.currentPosition].word}
                        src={this.state.alphabets[this.state.currentPosition].image}/>
                    <audio src={this.state.alphabets[this.state.currentPosition].wordSound} data-key="word"/>
                </div>
                     <div className="right-field">
                         <div className={classNames('placeholder-span',{hide:showWord})}>Click Next to view Spelling</div>
                          <div className={classNames('word',{hide:!showWord})}>
                    {this.state.alphabets[this.state.currentPosition].word.toUpperCase()}
                    </div>
                     </div>

                </div>
                </div>
            </div>

            </div>
            <span className="message">Made with <img width="20px" alt="love" height="20px" src="data:image/png;base64,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"/> by Abhay Patidar for the kids!!</span>
                </div>
        )
    }
}

export default EasyABC;