import React from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return{
        smurf: state.smurf,
        isLoading: state.isLoading
    }
};

 const SmurfList = (props) => {
    const {smurf, isLoading} = props
    console.log(props)
    console.log(smurf)
    console.log(typeof(smurf))

    if (isLoading) {
        return <h1>Loading...</h1>;
    };

    return(
        <div className="listContainer">
            {smurf.map((smurf, id) =>{
                return <Smurf key={id} smurf={smurf}/>
            })}
        </div>
    )};

export default connect(null, mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.