import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './styles.css';
import axios from 'axios';

class App extends Component {
  state = {
    players: [],
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
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
          {this.state.players.map((player: any) => (
            <List.Item key={player.id}>{player.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
