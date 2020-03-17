import React, {useState, useEffect, Fragment} from 'react';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import './styles.css';
import axios from 'axios';
import { IPlayer } from '../../models/player';
import { NavBar } from '../../features/nav/NavBar';
import PlayerDashboard from '../../features/players/dashboard/PlayerDashboard';

const App = () => {

  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer | null>(null);

  const handleSelectPlayer = (id: string) => {
    setSelectedPlayer(players.filter(x => x.id === id)[0])
  }

  useEffect(() => {
    axios.get<IPlayer[]>('http://localhost:5000/api/players')
      .then(res => {
        setPlayers(res.data)
      })
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: '100px'}}>
        <PlayerDashboard players={players} 
                          selectPlayer={handleSelectPlayer}
                          selectedPlayer={selectedPlayer} />
      </Container>
    </Fragment>
  );
}

export default App;
