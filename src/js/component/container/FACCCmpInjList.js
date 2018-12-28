import React from 'react'

class FACCCmpInjList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectList: []
        }
    }

    fetchProjectList = () => {
        fetch('https://dqjczs.sinaapp.com/libs/projectcategory.php?action=get&start=0&limit=300&debug=true')
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    projectList: obj.items
                })
            })
    }

    componentDidMount() {
        this.fetchProjectList()
    }

    render() {
        const View = this.props.render
        return (
            <div>
                {
                    this.state.projectList.map(project => {
                        return <View key={project.projectId} projectName={project.projectName} captain={project.captain} projectTime={project.projectTime}></View>
                    })
                }
            </div>
        )
    }

}

export default FACCCmpInjList