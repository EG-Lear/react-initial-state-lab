import React, { Component } from 'react';


class ImageSlider extends Component {

    state = {
        currentSlideIndex: 0
    }

    render() {
        const current = this.state.currentSlideIndex
        return (
            <div>
                {'I am on slide ' + current}
            </div>
        )
    }
}

export default ImageSlider