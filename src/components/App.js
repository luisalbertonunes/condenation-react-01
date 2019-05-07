import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'
import { history } from 'react-router'

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchString:''
    }
  }

  
  // arrayLetters = [];
  lettersChange = (e) => {
    // console.log(letters);
    const { name, value } = e.target;
    this.setState({[name]: value }, () => { 
      return  this.props.history.push(this.state.searchString);
    });
  
   

  }
  
  render() {
    const { results } = recipes;
    return (
      <div className="App">
          {/* TODO: Navbar precisa receber a string da URL */}
          <Navbar {...this.props.match.params} searchString={this.state.searchString} getSearchBoxLetters={this.lettersChange}/>
        )}/>

        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Home {...this.props} recipes={results} />
        </div>
      </div>
    )
  }
}

export default App