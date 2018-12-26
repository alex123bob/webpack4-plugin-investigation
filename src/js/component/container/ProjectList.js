import React, {Component} from 'react'
import {Project} from '../presentational/Project'

export class ProjectList extends Component {
    fetchProjectList = () => {
        fetch('https://dqjczs.sinaapp.com/libs/projectcategory.php?action=get&start=0&limit=300&debug=true')
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    projectList: obj.items
                })
            })
    }

    constructor(props) {
        super(props)
        this.state = {
            projectList: []
        }
    }

    componentDidMount() {
        this.fetchProjectList()
    }

    render() {
        return (
            <div>
                {
                    this.state.projectList.map(project => (
                        <Project key={project.projectId} {...project}></Project>
                    ))
                }
            </div>
        )
    }
   
}