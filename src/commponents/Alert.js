import React from 'react'

export default function Alert(props) {
    // to capitalize the first letter of message we have created this function capitalize
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);//lower.slice(1) will add whole word from the first index.
    }
    return (
        <div style={{height:'50px'}}>
            {/* it will first evaluate the props.alert and if it returns null or false then it will be able to do further things otherwise it will do. */}
            {props.alert && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
                </div>
            )}
        </div>
    )
}
