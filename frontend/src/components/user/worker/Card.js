import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ job }) => {
    return (
        <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="card" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'black' }}>
                <div className="card-body" >
                    <div style={{ minHeight: "3em" }}>
                        <h5 class="card-title">{job.title}</h5>
                    </div>
                    <p class="card-text" >Requires Skills: {job.required_skills}</p>
                    <p class="card-text" >Application Starting Time: {job.application_start_time}</p>
                    <p class="card-text" >Application Ending Time: {job.application_ending_date}</p>
                    <p class="card-text"  >Possible Job Starting Time: {job.starting_date}</p>
                    <Link to={`/worker/jobs/apply/${job.id}`}>
                        <button className="btn btn-outline-warning btn-sm">Apply Now</button>
                    </Link>
                    <Link to={`/`}>
                        <button className="btn btn-outline-success btn-sm" style={{ marginLeft: '2%' }}>View Description</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;