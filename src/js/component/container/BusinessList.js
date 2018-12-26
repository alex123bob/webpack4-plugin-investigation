import React, {Component} from 'react'
import {Business} from '../presentational/Business'

export class BusinessList extends Component {
    fetchBusinessList = () => {
        fetch('https://dqjczs.sinaapp.com/libs/business.php?action=getBusinessAggregation&isDead=false&isFrozen=false&isWaiting=false&start=0&limit=800&debug=true')
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    businessList: obj.data
                })
            })
    }

    constructor(props) {
        super(props)
        this.state = {
            businessList: []
        }
    }

    componentDidMount() {
        this.fetchBusinessList()
    }

    render() {
        return (
            <div>
                {
                    this.state.businessList.map(business => (
                        <Business key={business.id} {...business}></Business>
                    ))
                }
            </div>
        )
    }
   
}