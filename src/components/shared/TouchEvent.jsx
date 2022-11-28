import React from 'react'
import PropTypes from 'prop-types'



export const TouchEvent = () => {



    return () => {
        Children
    }
}

ReactTouchEvents.defaultProps = {
    disableClick: false,
    tapTolerance: 10,
    swipeTolerance: 30,
    touchClass: '',
};

ReactTouchEvents.propTypes = {
    children: PropTypes.node,
    tapTolerance: PropTypes.number,
    swipeTolerance: PropTypes.number,
    onTap: PropTypes.func,
    onSwipe: PropTypes.func,
};