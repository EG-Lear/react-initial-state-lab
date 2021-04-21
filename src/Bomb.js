import React, { Component } from 'react';


class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    render() {
        const timer = this.state.secondsLeft

        if (timer > 0) {
            return (
                <div>
                    {timer + ' seconds left before I go boom!'}
                </div>
            )
        } else {
            return (
                <div>
                    {'Boom!'}
                </div>
            )
        }
    }
}

export default Bomb