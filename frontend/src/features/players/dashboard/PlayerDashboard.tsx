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
}

const PlayerDashboard: React.FC<IProps> = (props) => {
  const {players, selectPlayer, selectedPlayer} = props;

  return (
    <Grid>
      <Grid.Column width={10}>
        <PlayerList players={players} selectPlayer={selectPlayer} />
      </Grid.Column>
      <Grid.Column width={6}>
        <PlayerStats player={selectedPlayer!}/>
        <PlayerForm />
      </Grid.Column>
    </Grid>
  )
}

export default PlayerDashboard;
