import React, {Component} from 'react'

export const Project = ({projectName, captain, projectTime}) => (
    <div style={{borderRadius: 5, border: '1px solid #cccccc', padding: '5px', margin: '10px auto'}} className="projectCt">
        <div>Project Name: {projectName}</div>
        <div>Project Manager: {captain}</div>
        <div>Project Create Time: {projectTime}</div>
    </div>
)