import React, { Component } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterName: '',
            characterGender: '',
            characterAge: 0,
            characterArray:[],
        }
    }

    componentDidMount = () =>{
        //     this.state.characterArray.push(
        //     {
        //         characterName : 'Charlie Brown',
        //         characterGender: 'Male',
        //         characterAge: 6
        //     }
        // )

        // this.state.characterArray.push(
        //     {
        //         characterName : 'Betty Boop',
        //         characterGender: 'Female',
        //         characterAge: 16
        //     }
        // )
        //     //reset array globally
        // this.setState({characterArray : this.state.characterArray});
    }

    handleInputs = (event) =>{
        if(event.target.name==='name'){
            this.setState({characterName:event.target.value})
        } else if(event.target.name==='gender'){
            this.setState({characterGender:event.target.value})
        } else if(event.target.name==='age'){
            this.setState({characterAge:event.target.value})
        }
    }

    handleSubmission = (event) =>{
        event.preventDefault();

        console.log(this.state)
    }


    render() {
        return (
            <div>
                <h1>Simple Mern Application</h1>
                <form action="">

                    <label htmlFor="name">Character Name:</label>
                    <br />
                    <input type="text" name='name' id='name' value={this.state.characterName} onChange={this.handleInputs} />
                    <br />
                    <br />
                    <label htmlFor="gender">Character Gender:</label>
                    <br />
                    <input type="text" name='gender' id='gender' value={this.state.characterGender} onChange={this.handleInputs} />
                    <br />
                    <br />
                    <label htmlFor="age">Character Age:</label>
                    <br />
                    <input type="number" name='age' id='age' value={this.state.characterAge} onChange={this.handleInputs} />
                    <br/>
                    <br/>
                    <button onClick={this.handleSubmission}>Add Character</button>

                </form>

                <div>
                    {
                        this.state.characterArray.map((character,index)=>{
                            return(
                                <div key={index}>
                                    <p>Character: {character.characterName}</p>
                                    <p>Gender: {character.characterGender}</p>
                                    <p>Age: {character.characterAge}</p>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default AppContainer;