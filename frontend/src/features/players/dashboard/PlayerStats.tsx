import React from 'react'
import { Card, Image, Button, Statistic } from 'semantic-ui-react'
import { IPlayer } from '../../../models/player'

interface IProps {
  player: IPlayer;
  setEditMode: (editMode: boolean) => void;
  setSelectedPlayer: (player: IPlayer | null) => void;
}

const PlayerStats: React.FC<IProps> = (props) => {
  const {player, setEditMode, setSelectedPlayer} = props;

  return (
    <Card>
      <Image src={`/assets/images/players/${player.name.replace(/\s/g,"")}.jpg`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{player.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{player.debutDate}</span>
        </Card.Meta>
        <Card.Description>
          = Score of player =
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
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button onClick={() => setEditMode(true)} color='teal' content='Edit' />
          <Button onClick={() => setSelectedPlayer(null)} color='grey' content='Cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default PlayerStats
