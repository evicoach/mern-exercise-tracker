import React, { Component } from 'react';
import { Link } from 'react-dom';
import axios from 'axios';

class ExerciseList extends Component {
    // start with a constructor to initialize the state
    // with an empty array
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = { exercises: [] }
    }

    componentDidMount() {
        axios.get('https://quick-fix-service.herokuapp.com/exercises/')
            .then(response => {
                this.setState({
                exercises: response.data
            })
            }).catch(err => {
                console.log(err);
        })
    }

    deleteExercise(id) {
        
    }
    render() {
        return (<div>
            <p>You are on the Exercises List component</p>
        </div>);
    }
}

export default ExerciseList;