import { useState } from 'react';
import LandingPage from "./components/LandingPage";
import LikeButton from "./components/LikeButton";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import './components/styles/main.css';


const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'Dylan'
    }
  });

  const handleClick = () => {
    setGame(prevState => ({
      ...prevState,
      player: {
        ...prevState.player,
        name: 'John'
      }
    }));
    console.log('Name has changed:', game.player.name);
  };

  const items = ["Goku", "Gohan", "Krillin", "Vegeta", "Piccolo"];

  return (
    <>
      <Navbar />
      <LandingPage />
      <ListGroup items={items} header={'Pick Your Favorite Character!'}/>
      <LikeButton onClick={handleClick} />
    </>
  );
};

export default App;



