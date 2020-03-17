import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { IPlayer } from '../../../models/player'

interface IProps {
  player: IPlayer;
}

const PlayerStats: React.FC<IProps> = (props) => {
  const {player} = props;

  return (
    <Card>
      <Image src='/assets/images/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>player.name</Card.Header>
        <Card.Meta>
          <span className='date'>player.debutDate</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button basic color='olive' content='Edit' />
          <Button basic color='grey' content='Delete' />
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default PlayerStats
