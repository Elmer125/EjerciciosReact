import React from 'react'

export const Message = ({msg,bgcolor}) => {
    let styles={
        padding:"1rem",
        marginBottom:"1rem",
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold",
        backgroundColor:bgcolor
    }
    return (
        <div style={styles}>
            {/* <p>{msg}</p> */}
            <p dangerouslySetInnerHTML={{__html:msg}}/> {/* para poder insertarle codigo html*/ }
        </div>
    )
}
