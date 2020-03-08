import React from 'react'
import { Icon } from 'antd';

function Footer() {
    return (
        <div style={{
            backgroundColor: '#607d8b',
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem'
        }}>
            <p>MIT ECE SEC A <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
