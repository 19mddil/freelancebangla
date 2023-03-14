import React from "react";
import { Component } from "react";
import { loadAllJobAdvertise } from "../../../api/apiClient";
import { userInfo } from "../../../utils/auth";
import Layout from "../../Layout";

class LoadAdvertisedJobs extends Component {
    state = {
        jobs: null
    }
    componentDidMount() {
        const { token } = userInfo();
        loadAllJobAdvertise(token)
            .then(res => {
                console.log(res.data);
                this.setState({
                    jobs: res.data
                })
                console.log(this.state.jobs);
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <Layout title="clients advertised jobs" className="container">
                    <h1>View Applictions</h1>
                    {JSON.stringify(this.state.jobs, null, 4)}
                </Layout>
            </div>
        )
    }
}

export default LoadAdvertisedJobs;