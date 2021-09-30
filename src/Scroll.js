import React from 'react';

const Scroll = (props) => {
    return(
        <div style = {{overflowY: 'scroll', border: '', height: '550px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;