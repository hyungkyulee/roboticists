import React from 'react'
import { Item, Statistic, Button, Label, Segment } from 'semantic-ui-react'
import { IPlayer } from '../../../models/player'

interface IProps {
  players: IPlayer[];
  selectPlayer: (id: string) => void;
}

const PlayerList: React.FC<IProps> = (props) => {
  const {players, selectPlayer} = props;

  return (
    <Segment clearing>
      <Item.Group divided>
        {
          players.map(player => (
            <Item key={player.id}>
            {/* <Item.Image size='tiny' src='/images/wireframe/image.png' /> */}
              <Item.Content>
                <Item.Header as='a'>{player.name}</Item.Header>
                <Item.Meta>No.{player.backNumber}, {player.position}</Item.Meta>
                <Item.Meta>{player.debutDate}</Item.Meta>
                <Item.Description>
                  <Statistic.Group>
                    <Statistic color='blue'>
                      <Statistic.Value>{player.goals}</Statistic.Value>
                      <Statistic.Label>Goals</Statistic.Label>
                    </Statistic>
                    <Statistic color='teal'>
                      <Statistic.Value>{player.shoots}</Statistic.Value>
                      <Statistic.Label>Shoots</Statistic.Label>
                    </Statistic>
                    <Statistic color='green'>
                      <Statistic.Value>{player.saves}</Statistic.Value>
                      <Statistic.Label>Saves</Statistic.Label>
                    </Statistic>          
                    <Statistic color='orange'>
                      <Statistic.Value>{player.tackles}</Statistic.Value>
                      <Statistic.Label>Tackles</Statistic.Label>
                    </Statistic>
                    <Statistic color='yellow'>
                      <Statistic.Value>{player.yellowCards}</Statistic.Value>
                      <Statistic.Label>Yellow Card</Statistic.Label>
                    </Statistic>
                    <Statistic color='red'>
                      <Statistic.Value>{player.redCards}</Statistic.Value>
                      <Statistic.Label>Red Card</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                </Item.Description>
                <Item.Extra>
                  <Button 
                    onClick={() => selectPlayer(player.id)}
                    floated='right' content='view' color='blue' />
                  <Label basic content={player.club} />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))
        }
      </Item.Group>
    </Segment>
  )
}

export default PlayerList
