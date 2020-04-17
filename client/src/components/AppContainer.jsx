import React, { Component } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterName: '',
            characterGender: '',
            characterAge: 0,
            characterArray: [],
        }
    }

    //when component mounts run load data function
    componentDidMount = () => {
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
        this.loadData();

    }

    //fetch documents from database
    loadData = async () => {
        let response = await fetch('/api');
        //sanity
        console.log(response);
        let json = await response.json();
        //sanity
        console.table(json);
        //place imported json in array
        this.setState({ characterArray: json })
    }

    //handle inputs in form to upate in state
    handleInputs = (event) => {
        if (event.target.name === 'name') {
            this.setState({ characterName: event.target.value })
        } else if (event.target.name === 'gender') {
            this.setState({ characterGender: event.target.value })
        } else if (event.target.name === 'age') {
            this.setState({ characterAge: event.target.value })
        }
    }

    //handle submission in form//make asyncronous
    handleSubmission = async (event) => {
        event.preventDefault();

        //what allows us to send json data
        let formData = {
            characterName: this.state.characterName,
            characterGender: this.state.characterGender,
            characterAge: this.state.characterAge,
        }
        console.log(JSON.stringify(formData))
        let response = await fetch('/api', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        let json = await response.json();
        //sanity
        console.log(json);

        //clear form field
        this.setState(
            {
                characterName: '',
                characterGender: '',
                characterAge: 0,
            }
        )


        // console.log(this.state)
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
                    {/* TODO//SELECTOR VALUE DOES NOT SHOW IN INPUT WHEN CLICKED */}
                    <select name="gender" id="gender" value={this.state.characterGender} onChange={this.handleInputs}>
                        <option value="">--Please choose an option--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="age">Character Age:</label>
                    <br />
                    <input type="number" name='age' id='age' value={this.state.characterAge} onChange={this.handleInputs} />
                    <br />
                    <br />
                    <button onClick={this.handleSubmission}>Add Character</button>

                </form>

                <div>
                    {
                        this.state.characterArray.map((character, index) => {
                            return (
                                <div key={index}>
                                    <p>Character: {character.characterName}</p>
                                    <p>Gender: {character.characterGender}</p>
                                    <p>Age: {character.characterAge}</p>
                                    <hr />
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