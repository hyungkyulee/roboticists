import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IPlayer } from '../../../models/player';
import PlayerList from './PlayerList';
import PlayerStats from './PlayerStats';
import PlayerForm from '../form/PlayerForm';

interface IProps {
  players: IPlayer[];
  selectPlayer: (id: string) => void;
  selectedPlayer: IPlayer | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

const PlayerDashboard: React.FC<IProps> = (props) => {
  const {players, selectPlayer, selectedPlayer, editMode, setEditMode} = props;

  return (
    <Grid>
      <Grid.Column width={10}>
        <PlayerList players={players} selectPlayer={selectPlayer} setEditMode={setEditMode} />
      </Grid.Column>
      <Grid.Column width={6}>
        {
          (selectedPlayer && !editMode) && <PlayerStats player={selectedPlayer} setEditMode={setEditMode} />
        }
        {
          (editMode) && <PlayerForm />
        }
      </Grid.Column>
    </Grid>
  )
}

export default PlayerDashboard;
