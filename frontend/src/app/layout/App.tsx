import React, {useState, useEffect, Fragment} from 'react';
import { Container } from 'semantic-ui-react'
import './styles.css';
import axios from 'axios';
import { IPlayer } from '../../models/player';
import { NavBar } from '../../features/nav/NavBar';
import PlayerDashboard from '../../features/players/dashboard/PlayerDashboard';

const App = () => {

  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectPlayer = (id: string) => {
    setSelectedPlayer(players.filter(x => x.id === id)[0])
  }

  const handleJoinPlayer = () => {
    setSelectedPlayer(null);
    setEditMode(true);
  }

  useEffect(() => {
    axios.get<IPlayer[]>('http://localhost:5000/api/players')
      .then(res => {
        setPlayers(res.data)
      })
  }, []);

  return (
    <Fragment>
      <NavBar joinPlayer={handleJoinPlayer} />
      <Container style={{marginTop: '100px'}}>
        <PlayerDashboard players={players}
                          selectPlayer={handleSelectPlayer}
                          selectedPlayer={selectedPlayer}
                          editMode={editMode}
                          setEditMode={setEditMode}
                          setSelectedPlayer={setSelectedPlayer} />
      </Container>
    </Fragment>
  );
}

export default App;
