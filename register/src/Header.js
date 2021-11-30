import React from "react";

let renderCount = 0;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    renderCount = renderCount + 1;

    return (
        <div>
            <span style={{ color: '#000' }}>Render count: {renderCount / 2}</span>
        </div>
    );
}