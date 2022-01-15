import React from 'react';
import DW from '../images/DW.jpg';


const Pin = (props) => {
    return (
        <div 
            style={{
                ...styles.pin,
                ...styles[props.size]
            }}
            image={{
                ...images[props.key]
            }}
        >
        </div>
    )
}

const styles = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'green'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

const images = [
    {   key: 1,
        img: DW
    }
]

export default Pin;