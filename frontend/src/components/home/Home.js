import React from "react";
import { Component } from "react";
import { isAuthenticated, userInfo } from '../../utils/auth';
import Layout from "../Layout";

class Home extends Component {
    render() {
        return (
            <div>
                {
                    isAuthenticated()
                    &&
                    <Layout title='Home Page' className='container' >

                        <div className='row'>
                            <p>Hi, {userInfo().role} user, email: {userInfo().email}</p>
                        </div>
                    </Layout>
                }
                {
                    !isAuthenticated()
                    &&
                    <Layout title='Home Page' className='container' >
                        <p>Hi, guest user</p>
                    </Layout>
                }
            </div>
        )
    }
}

export default Home;