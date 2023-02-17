import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Home from './home/Home';
import Login from './user/Login';
import Register from './user/Register';
import { isAuthenticated } from '../utils/auth';
class Main extends Component {
    state = {
        auth: false,
    }
    useAuth = () => {
        this.setState({
            auth: isAuthenticated()
        });
    }
    render() {
        this.useAuth();
        return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={this.state.auth || isAuthenticated() ? (<Home />) : (<Login />)} />
                <Route path='/register' element={this.state.auth || isAuthenticated() ? (<Home />) : (<Register />)} />
                <Route path='/logout' element={<Navigate to='/Login' />} />

            </Routes>
        );
    }
}

export default Main;