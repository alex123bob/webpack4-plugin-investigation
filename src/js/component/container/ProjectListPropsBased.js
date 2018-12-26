import React, {Component} from 'react'
import {Project} from '../presentational/Project'

export const ProjectListPropsBased = ({data, ...props}) => (
    data ? data.map(project => <Project key={project.projectId} projectName={project.projectName} captain={project.captain} projectTime={project.projectTime}></Project>) : []
)