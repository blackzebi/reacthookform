import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data, reset, defaultValues }) => (
    <>
        {data && (
            <pre style={{ textAlign: "left", color: "white" }}>
                {JSON.stringify(data, null, 2)}
            </pre>
        )}

        <button
            className="button buttonBlack"
            type="button"
            onClick={() => {
                reset(defaultValues);
            }}
        >
            Reset Form
        </button>
        <button className="button">submit</button>
    </>
);
