import React from 'react'
import { Form, Segment } from 'semantic-ui-react'

const PlayerForm = () => {
  return (
    <Segment>
      <Form>
        <Form.Input placeholder='Name' />
        <Form.Input placeholder='Back Number' />
        <Form.Input placeholder='Position' />
        <Form.Input placeholder='Goals' />
        <Form.Input placeholder='Saves' />
        <Form.Input placeholder='Shoots' />
        <Form.Input placeholder='Tackels' />
        <Form.Input placeholder='Yellow Cards' />
        <Form.Input placeholder='Red Cards' />
        <Form.Input placeholder='Debut Date' />
        <Form.Input placeholder='Club' />
      </Form>
    </Segment>
  )
}

export default PlayerForm
