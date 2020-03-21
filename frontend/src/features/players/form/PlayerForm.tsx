import React, {useState, ChangeEvent, FormEvent} from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import { IPlayer } from '../../../models/player';
import {v4 as uuid} from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  player: IPlayer;
  createPlayer: (player: IPlayer) => void;
  updatePlayer: (player: IPlayer) => void;
}

const PlayerForm: React.FC<IProps> = (props) => {
  const {setEditMode, player: initPlayer, createPlayer, updatePlayer} = props;

  const initialiseForm = () => {
    if(initPlayer) {
      return initPlayer;
    } else {
      return {
        id: '',
        name: '',
        backNumber: '',
        position: '',
        goals: 0,
        saves: 0,
        shoots: 0,
        tackles: 0,
        yellowCards: 0,
        redCards: 0,
        debutDate: '',
        club: '' 
      };
    }
  }

  const [player, setPlayer] = useState<IPlayer>(initialiseForm);

  const handleFormSubmit = () => {
    if(player.id.length == 0) {
      let newPlayer = {...player, id: uuid()};
      // setPlayer({...player, id: uuid()});

      createPlayer(newPlayer);
    }
    else {
      updatePlayer(player);
    }
  }
  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.currentTarget;
    setPlayer({...player, [name]: value})
  }

  return (
    <Segment>
      <Form>
        <Form.Input onChange={handleInputChange} placeholder='Name' name='name' value={player.name} />
        <Form.Input onChange={handleInputChange} placeholder='Back Number' name='backNumber' value={player.backNumber} />
        <Form.Input onChange={handleInputChange} placeholder='Position' name='position' value={player.position} />
        <Form.Input onChange={handleInputChange} placeholder='Goals' name='goals' value={player.goals} />
        <Form.Input onChange={handleInputChange} placeholder='Saves' name='saves' value={player.saves} />
        <Form.Input onChange={handleInputChange} placeholder='Shoots' name='shoots' value={player.shoots} />
        <Form.Input onChange={handleInputChange} placeholder='Tackels' name='tackles' value={player.tackles} />
        <Form.Input onChange={handleInputChange} placeholder='Yellow Cards' name='yellowCards' value={player.yellowCards} />
        <Form.Input onChange={handleInputChange} placeholder='Red Cards' name='redCards' value={player.redCards} />
        <Form.Input onChange={handleInputChange} placeholder='Debut Date' type='datetime-local' name='debutDate' value={player.debutDate} />
        <Form.Input onChange={handleInputChange} placeholder='Club' name='club' value={player.club} />
        <Button.Group widths={2}>
          <Button onClick={() => {setEditMode(false); handleFormSubmit()}} floated='right' positive type='submit' color='olive' content='Submit' />
          <Button onClick={() => setEditMode(false)} floated='right' type='button' color='grey' content='Cancel' />
        </Button.Group>
      </Form>
    </Segment>
  )
}

export default PlayerForm
