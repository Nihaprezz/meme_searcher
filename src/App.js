import React from 'react';
import SearchContainer from '../src/containers/SearchContainer'
import ResultsContainer from '../src/containers/ResultsContainer'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      allMemes: [],
      searchText: ""
    }
  }

  searchMemes = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }



  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
      this.setState({
        allMemes: data.data.memes
      })
    })
  }

  render(){
      return (
      <div className="App">
        < SearchContainer searchMemes={this.searchMemes}/> 
        < ResultsContainer memesArray={this.state.allMemes.filter(meme => meme.name.toLowerCase().includes(this.state.searchText)).slice(0, 30)}/>
      </div>
    );
  }
}

export default App;
