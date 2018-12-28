import React from 'react'
import {Project} from '../presentational/Project'

export const FACCOnPropChildRenderer = (projectList) => {
    return projectList.map(project => {
        return <Project key={project.projectId} projectName={project.projectName} captain={project.captain} projectTime={project.projectTime}></Project>
    })
}