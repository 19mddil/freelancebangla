import React from "react";
import { useEffect, useState } from 'react';
import { confirmApplication } from "../../../api/apiWorker";
import { userInfo } from "../../../utils/auth";
import Layout from "../../Layout";
import { useParams } from 'react-router-dom';
import { API } from '../../../utils/config';
import { Link } from 'react-router-dom';
import { showSuccess, showError } from '../../../utils/messages';
import ApplicationModal from "./ApplicationModal";
import { getJobAdvertiseDetails } from "../../../api/apiWorker";

const Application = () => {

    const { job_id } = useParams();
    const [job, setJob] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [token, setToken] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    useEffect(() => {
        const { token } = userInfo();
        setToken(token);
        getJobAdvertiseDetails(token, job_id)
            .then(res => {
                setJob(res.data);
            })
            .catch(err => setError("Failed to load job advertise"))
    }, []);

    const handleClick = () => {
        //confirmApplication
        setSuccess(true)
        toggle();
    }

    return (
        <div>
            <Layout title="Apply Job" className="container">
                <div style={{ width: '100%' }}>
                    {showError(error, error)}
                    {showSuccess(success, "You have applied for the job")}
                </div>
                <ApplicationModal job={job} toggle={toggle} modal={modal} handleClick={handleClick} />
            </Layout>
        </div>
    )
}

export default Application;