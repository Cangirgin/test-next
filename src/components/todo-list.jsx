import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Todos from './todos'

const TodoList = ({ todoList, handleDelete }) => {
    return (
        <>

            <Row className='g-4'>

                {
                    todoList.map((todo, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={4}>
                                < Todos todo={todo} index={index} handleDelete={handleDelete} />
                            </Col>
                        )
                    })
                }
            </Row>
        </ >
    )
}

export default TodoList