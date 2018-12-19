import React, {Component} from 'react'

const NUMBER_OF_BLOCKS = 10000

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

class PerformanceExampleContainer extends Component {
    constructor() {
        super()
        this.state = {
            timeOfBtnClicked: 0
        }
    }

    _addTimesOfBtnClicked = () => {
        const {timeOfBtnClicked} = this.state
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

export default PerformanceExampleContainer