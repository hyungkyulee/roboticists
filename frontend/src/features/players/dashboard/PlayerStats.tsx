import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { IPlayer } from '../../../models/player'

interface IProps {
  player: IPlayer;
  setEditMode: (editMode: boolean) => void;
}

const PlayerStats: React.FC<IProps> = (props) => {
  const {player, setEditMode} = props;

  return (
    <Card>
      <Image src={`/assets/images/players/${player.name.replace(/\s/g,"")}.jpg`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{player.name}</Card.Header>
        <Card.Meta>
          <span className='date'>player.debutDate</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button onClink={() => setEditMode(true)} basic color='olive' content='Edit' />
          <Button basic color='grey' content='Delete' />
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default PlayerStats
