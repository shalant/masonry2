import React from 'react';
import '../styles.css';
import Pin from './Pin';
import DW from '../images/DW.jpg';

const images = [
    {   key: 1,
        img: DW
    }
]

const PinterestLayout = () => {
    return (
        <div style={styles.pin_container}>
            <Pin size='small' img={images[0]} classname='dw' />
                {/* <img src='../images/DW.jpg' /> */}
            
            <Pin size='medium'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='large'/>
            <Pin size='small'/>
            <Pin size='medium'/>
            <Pin size='large'/>
            <Pin size='large'/>
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        backgroundColor: 'black',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent: 'center'
    }
}

export default PinterestLayout;
