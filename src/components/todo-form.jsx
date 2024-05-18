"use client"
import React from 'react'
import { Button, Form } from 'react-bootstrap'

const TodoForm = ({ todo, setTodo, handleSubmit }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label htmlFor="todotxt">New Todo</Form.Label>
            <Form.Control
                type="text"
                id="todotxt"
                placeholder="Enter Todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <Button type='submit' disabled={!todo} className='mt-3'>Create Note</Button>
        </Form>
    )
}

export default TodoForm
