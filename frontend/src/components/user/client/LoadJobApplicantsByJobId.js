import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userInfo } from "../../../utils/auth";
import { loadJobApplicantsByJobId, selectWorkersApplication } from "../../../api/apiClient";
import Layout from "../../Layout";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { showLoading, showSuccess, showError } from "../../../utils/messages";

const LoadJobApplicantsByJobId = () => {
    const { job_id } = useParams();
    const [tkn, setTkn] = useState('');
    const [workerId, setWorkerId] = useState('');
    const [resData, setResData] = useState(null);
    const [selected, setSelected] = useState(false);
    const [rejected, setRejected] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');



    useEffect(() => {
        const { token, id } = userInfo();
        setWorkerId(id);
        setTkn(token);
        loadJobApplicantsByJobId(token, job_id, id)
            .then(res => {
                setResData(res.data);
            })
            .catch(err => { })
    }, []);

    const handleSelect = (applicationId) => {
        console.log("here");
        selectWorkersApplication(tkn, {
            selected_application_id: applicationId,
        })
            .then(res => {
                setSelected(true);
                setSuccess(true);

            })
            .catch(err => {
                setSelected(false);
            })
    }


    const handleReject = () => {


    }
    return (
        <div>
            <Layout title="Job Applicants" className="container">
                <h5>Select,Reject, if selected insert to a new Table</h5>
                <div style={{ width: '100%' }}>
                    {showLoading(loading)}
                    {showError(error, "You have already applied for this job")}
                    {showSuccess(success, "The worker is selected")}
                </div>
                <ListGroup>
                    {resData && resData.map(data =>
                    (<ListGroupItem>
                        <Link>{data.email}</Link>
                        <Button color="danger" size="sm" style={{ margin: "1%", float: "right" }} onClick={() => handleReject()}>Reject</Button>
                        <Button onClick={() => handleSelect(data.application_id)} disabled={selected} color="success" size="sm" style={{ margin: "1%", float: "right" }} > {selected === true ? 'Selected' : 'Select'}</Button>
                    </ListGroupItem>)
                    )}
                </ListGroup>
            </Layout>
        </div>
    )
}

export default LoadJobApplicantsByJobId;