import React, {useState, useEffect, Fragment} from 'react';
import { Container } from 'semantic-ui-react'
import './styles.css';
import { IPlayer } from '../../models/player';
import { NavBar } from '../../features/nav/NavBar';
import PlayerDashboard from '../../features/players/dashboard/PlayerDashboard';
import apiAxios from '../api/apiAxios';

const App = () => {

  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectPlayer = (id: string) => {
    setSelectedPlayer(players.filter(x => x.id === id)[0])
    setEditMode(false);
  }

  const handleJoinPlayer = () => {
    setSelectedPlayer(null);
    setEditMode(true);
  }

  const handleAPICreatePlayer = (player: IPlayer) => {
    console.log("create: ", player);
    apiAxios.players.create(player).then(() => {
      setPlayers([...players, player]);
      setSelectedPlayer(player);
      setEditMode(false);
    })
  }

  const handleAPIUpdatePlayer = (player: IPlayer) => {  
    apiAxios.players.update(player).then(() => {
      setPlayers([...players.filter(x => x.id !== player.id), player]);
      setSelectedPlayer(player);
      setEditMode(false);
    })
  }

  const handleAPIDeletePlayer = (id: string) => {
    apiAxios.players.delete(id).then(() => {
      setPlayers([...players.filter(x => x.id !== id)])
    })
  }

  useEffect(() => {
    // axios.get<IPlayer[]>('http://localhost:5000/api/players')
    apiAxios.players.all()
      .then(res => {
        let players: IPlayer[] = [];
        res.forEach((player) => {
          player.debutDate = player.debutDate.split('.')[0];
          players.push(player);
        })
        setPlayers(res)
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
                          setSelectedPlayer={setSelectedPlayer}
                          createPlayer={handleAPICreatePlayer}
                          updatePlayer={handleAPIUpdatePlayer}
                          deletePlayer={handleAPIDeletePlayer} />
      </Container>
    </Fragment>
  );
}

export default App;
