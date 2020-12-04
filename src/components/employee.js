import React from "react";

import "../styles/employeecard.css";

function EmployeeCard({ name, image, dept, email, phone }) {
    return (
        <div className="card">
            <div><img
                style={{ maxWidth: "110px"}}
                className="image"
                src={image}
                alt="employee"
            /></div>
            <div>{name}</div>
            <div>{dept}</div>
            <div>{email}</div>
            <div>{phone}</div>
        </div>
    )
};

export default EmployeeCard;