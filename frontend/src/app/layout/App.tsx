import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './styles.css';
import axios from 'axios';
import { IPlayer } from '../../models/player';

interface IState {
  players: IPlayer[] 
}
class App extends Component<{}, IState> {
  state: IState = {
    players: [],
  }

  componentDidMount() {
    axios.get<IPlayer[]>('http://localhost:5000/api/players')
      .then(res => {
        console.log(res)  
        this.setState({
          players: res.data,
        })
    })

  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='puzzle' />
          <Header.Content>Robot Premier League - Base Station</Header.Content>
        </Header>

        <List>
          {this.state.players.map((player) => (
            <List.Item key={player.id}>{player.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
