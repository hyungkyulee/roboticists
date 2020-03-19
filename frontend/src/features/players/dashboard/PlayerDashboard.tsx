import React from 'react'
import { Grid } from 'semantic-ui-react'
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
  setSelectedPlayer: (player: IPlayer | null) => void;
}

const PlayerDashboard: React.FC<IProps> = (props) => {
  const {players, selectPlayer, selectedPlayer, editMode, setEditMode, setSelectedPlayer} = props;

  return (
    <Grid>
      <Grid.Column width={10}>
        <PlayerList players={players} selectPlayer={selectPlayer} setEditMode={setEditMode} />
      </Grid.Column>
      <Grid.Column width={6}>
        {
          selectedPlayer && !editMode && 
          <PlayerStats 
            player={selectedPlayer} 
            setEditMode={setEditMode}
            setSelectedPlayer={setSelectedPlayer} />
        }
        {
          (editMode) && <PlayerForm setEditMode={setEditMode} player={selectedPlayer!} />
        }
      </Grid.Column>
    </Grid>
  )
}

export default PlayerDashboard;
