import React, { Component } from 'react'

export default class PyramidContainer extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'skyblue',
                width: '50px',
                height: '50px',
                borderTop: '50px solid red',
                borderRight: '50px solid transparent',
                borderLeft: '50px solid transparent',
                borderBottom: '50px solid transparent'
            }}></div>
        )
    }

    constructor() {
        super()
    }
}