import React from 'react'
import { Menu, Button, Container, Icon } from 'semantic-ui-react'

interface IProps {
  joinPlayer: () => void;
}

export const NavBar: React.FC<IProps> = (props) => {
  const {joinPlayer} = props;

  return (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        {/* <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} /> */}
        <Icon name='puzzle' />
        Roboleague
      </Menu.Item>
      <Menu.Item name='Players' />
      <Menu.Item>
        <Button onClick={() => joinPlayer()} positive content='Join Player' />
      </Menu.Item>
    </Container>
  </Menu>
  )
}
