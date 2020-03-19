import React, {useState, ChangeEvent} from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import { IPlayer } from '../../../models/player';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  player: IPlayer;
}

const PlayerForm: React.FC<IProps> = (props) => {
  const {setEditMode, player: initPlayer} = props;

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
        debutDate: '',
        club: '' 
      };
    }
  }

  const [player, setPlayer] = useState<IPlayer>(initPlayer);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    console.log(event.target.value);
    setPlayer({...player, [name]: value})
  }

  return (
    <Segment>
      <Form clearing>
        <Form.Input onChange={handleInputChange} placeholder='Name' name='name' value={player.name} />
        <Form.Input onChange={handleInputChange} placeholder='Back Number' name='backNumber' value={player.backNumber} />
        <Form.Input onChange={handleInputChange} placeholder='Position' name='position' value={player.position} />
        <Form.Input onChange={handleInputChange} placeholder='Goals' name='goals' value={player.goals} />
        <Form.Input onChange={handleInputChange} placeholder='Saves' name='saves' value={player.saves} />
        <Form.Input onChange={handleInputChange} placeholder='Shoots' name='shoots' value={player.shoots} />
        <Form.Input onChange={handleInputChange} placeholder='Tackels' name='tackles' value={player.tackles} />
        <Form.Input onChange={handleInputChange} placeholder='Yellow Cards' name='yellowCards' value={player.yellowCards} />
        <Form.Input onChange={handleInputChange} placeholder='Red Cards' name='redCards' value={player.redCards} />
        <Form.Input onChange={handleInputChange} placeholder='Debut Date' name='debutDate' value={player.debutDate} />
        <Form.Input onChange={handleInputChange} placeholder='Club' name='club' value={player.club} />
        <Button.Group widths={2}>
          <Button onClick={() => setEditMode(false)} basic color='grey' content='Cancel' />
          <Button onClick={() => setEditMode(false)} basic color='blue' content='Submit' />
        </Button.Group>
      </Form>
    </Segment>
  )
}

export default PlayerForm
