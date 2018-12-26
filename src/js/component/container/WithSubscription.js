import React, {Component} from 'react'

export function WithSubscription(Cmp, fetchData) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: null
            }
        }

        componentDidMount() {
            fetchData.then(res => {
                this.setState({
                    data: res
                })
            })
        }

        render() {
            return <Cmp data={this.state.data} {...this.props}></Cmp>
        }
    }
}