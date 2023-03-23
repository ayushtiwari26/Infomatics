import React, { useState, useEffect } from "react";
import "./InfoCareerDashboard.css";
import useRandomNumber from "../../hooks/useRandomNumber";

const InfoCareerDashboard = () => {
  const ExpertiseNumber = useRandomNumber(25);
  const ProjectsDoneNumber = useRandomNumber(236);
  const ClientsNumber = useRandomNumber(56);
  const usersNumber = useRandomNumber(410);

  return (
    <>
      <div className="container-fluid icd-container">
        <div className="row icd-main-row">

          <div className="col">
            <div className="row">{ExpertiseNumber !== null ? ExpertiseNumber : "Loading..."}+</div>
            <div className="row">Years of Expertise</div>
          </div>

          <div className="col">
            <div className="row">{ProjectsDoneNumber !== null ? ProjectsDoneNumber : "Loading..."}</div>
            <div className="row">Projects Done</div>
          </div>

          <div className="col">
            <div className="row">{ClientsNumber !== null ? ClientsNumber : "Loading..."}</div>
            <div className="row">Clients</div>
          </div>

          <div className="col">
            <div className="row">{usersNumber !== null ? usersNumber : "Loading..."}</div>
            <div className="row">Users</div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCareerDashboard;
