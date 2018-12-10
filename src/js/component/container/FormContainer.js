import React, { Component } from 'react'
import Input from '../presentational/Input'

class FormContainer extends Component {
    constructor() {
        super()

        this.state = {
            seo_title: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.id]: evt.target.value
        })
    }

    render() {
        const {seo_title} = this.state
        return (
            <form id="active-form">
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
            </form>
        )
    }
}

export default FormContainer