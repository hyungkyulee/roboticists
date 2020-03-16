import React from 'react'
import { Menu, Button, Container, Icon } from 'semantic-ui-react'

export const NavBar = () => {
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
        <Button positive content='Join Player' />
      </Menu.Item>
    </Container>
  </Menu>
  )
}
