import React, {Component} from 'react'
import {unstable_scheduleCallback} from 'scheduler'

const NUMBER_OF_BLOCKS = 50000

class BlockList extends Component {
    constructor() {
        super()
    }

    render() {
        let {numberOfBlocks, timeOfBtnClicked} = this.props
        let blocks = []

        while (numberOfBlocks-- > 0) {
            blocks.push(
                <div key={numberOfBlocks} style={{
                    backgroundColor: 'skyblue',
                    width: '100px',
                    height: '20px',
                    marginTop: '2px'}}>
                    {timeOfBtnClicked}
                </div>
            )
        }
        
        return (
            <div>
                {blocks}
            </div>
        )
    }
}

class FiberContainer extends Component {
    constructor() {
        super()
        this.state = {
            timeOfBtnClicked: 0
        }
    }

    _addTimesOfBtnClicked = () => {
        const {timeOfBtnClicked} = this.state
        unstable_scheduleCallback(() => {
            this.setState(state => 
                {
                    timeOfBtnClicked: state.timeOfBtnClicked + 1
                }
            );
        })
        this.setState({
            timeOfBtnClicked: timeOfBtnClicked + 1
        })
    }

    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={this._addTimesOfBtnClicked}>
                    Click Me
                </button>

                <BlockList numberOfBlocks={NUMBER_OF_BLOCKS} timeOfBtnClicked={this.state.timeOfBtnClicked}></BlockList>
            </div>
        )
    }
}

export default FiberContainer