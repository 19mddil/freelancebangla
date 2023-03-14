import React from "react";
import { Component } from "react";
import { isAuthenticated, userInfo } from '../../utils/auth';
import Layout from "../Layout";
import LoadJobs from "../user/worker/LoadJobs";
// ayer utsho akhn desher website ah
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
                            {userInfo().role === 'worker' && (<LoadJobs />)}
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