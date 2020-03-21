import React from 'react'
import { Item, Button, Label, Segment } from 'semantic-ui-react'
import { IPlayer } from '../../../models/player'

interface IProps {
  players: IPlayer[];
  selectPlayer: (id: string) => void;
  setEditMode: (editMode:boolean) => void;
  deletePlayer: (id: string) => void;
}

const PlayerList: React.FC<IProps> = (props) => {
  const {players, selectPlayer, setEditMode, deletePlayer} = props;

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
                  
                </Item.Description>
                <Item.Extra>
                  <Button 
                    onClick={() => {deletePlayer(player.id); setEditMode(false);}}
                    floated='right' content='Delete' color='red' />
                  <Button 
                    onClick={() => {selectPlayer(player.id); setEditMode(false);}}
                    floated='right' content='Stats' color='blue' />
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
