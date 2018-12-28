import React, {Component} from 'react'

class FACCOnPropList extends Component {
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
        return (
            this.props.render(this.state.projectList)
        )
    }
}

export default FACCOnPropList