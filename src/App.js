import React, { Component } from 'react';
import CatList from './CatList'
import {connect} from 'react-redux'
import { fetchCats } from './actions/catActions';

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        {this.props.loading ? 
        <h1>Loading!</h1>
        :
        <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
        </div>
        }
      </div>
    );
  }
}

const msp = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mdp = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(msp, mdp)(App)

