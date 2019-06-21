import React, { Component } from 'react';
import SearchBox from  "./components/SearchBox";
import MCardList from "./components/MCardList";
import "./assets/css/main.css";

class App extends Component 
{
  state = {
  };

  render() {
    return(
      <div className="app">
        <SearchBox id="searchBox"/>
        <MCardList id="mcardList" mlist={this.state.mlist} />
      </div>
    )
  }

  getMovieList = () => {
    return (
      fetch("https://yts.lt/api/v2/list_movies.json?sort_by=like_count")
      .then(res=>res.json())
      .then(json=>json.data.movies)
      .catch(err=>{
        console.log(err.message);
      })
    )
  }

  async componentDidMount() {
    this.setState({
      mlist: await this.getMovieList()
    });
  }
}

export default App;
