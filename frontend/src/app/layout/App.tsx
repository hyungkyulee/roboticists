import React, {useState, useEffect} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './styles.css';
import axios from 'axios';
import { IPlayer } from '../../models/player';

const App = () => {

  const [players, setPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    axios.get<IPlayer[]>('http://localhost:5000/api/players')
      .then(res => {
        setPlayers(res.data)
      })
  }, []);

  return (
    <div>
      <Header as='h2'>
        <Icon name='puzzle' />
        <Header.Content>Robot Premier League - Base Station</Header.Content>
      </Header>

      <List>
        {players.map((player) => (
          <List.Item key={player.id}>{player.name}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
