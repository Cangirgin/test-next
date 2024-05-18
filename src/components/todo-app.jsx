"use client"
import React, { useEffect, useState } from 'react';
import TodoList from './todo-list';
import TodoForm from './todo-form';
import { Col, Container, Row } from 'react-bootstrap';

const TodoApp = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    // LocalStorage'dan veriyi yükleme
    useEffect(() => {
        const storedTodoList = localStorage.getItem('todoList');
        if (storedTodoList) {
            setTodoList(JSON.parse(storedTodoList));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodoList = [...todoList, todo];
        setTodoList(newTodoList);
        localStorage.setItem('todoList', JSON.stringify(newTodoList));
        setTodo('');
    };

    const handleDelete = (index) => {
        const newTodo = todoList.filter((_, i) => i !== index);
        const answer = window.confirm("Are you sure you want to delete?");
        if (!answer) return;
        setTodoList(newTodo);
        localStorage.setItem('todoList', JSON.stringify(newTodo));
    };

    return (
        <Container fluid>
            <Row className='g-5'>
                <Col md={4} >
                    <TodoForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
                </Col>
                <Col md={8}>
                    <TodoList todoList={todoList} handleDelete={handleDelete} />
                </Col>
            </Row>
        </Container>
    );
};

export default TodoApp;
