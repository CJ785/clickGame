import React, { Component } from "react";
import Tile from "./components/Tile";
import Header from "./components/Header";
import Title from "./components/Title";
import dogs from "./dogs.json";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";


class App extends Component {

  state = {
    dogs
  };

  render() {
    return (
      <div>
        <Header>
          <Score>
          </Score>
        </Header>
        <Wrapper>
          <Title>Clicky Game</Title>
          {this.state.dogs.map(dog => (
            <Tile
              image={dog.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
