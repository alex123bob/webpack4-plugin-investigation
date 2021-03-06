import React, { Component } from 'react'
import Input from '../presentational/Input'
import * as context from '../context/InputContext'

let InputContext = context.InputContext

class FormContainer extends Component {
    static getDerivedStateFromProps (){
        console.log('getDerivedStateFromProps')
        return null
    }

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

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot)
    }

    render() {
        console.log('render')
        const {seo_title} = this.state
        return (
            <InputContext.Provider value={{backgroundColor: 'green'}}>
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
            </InputContext.Provider>
        )
    }
}

export default FormContainer