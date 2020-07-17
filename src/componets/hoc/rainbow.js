import React from 'react'

const Rainbow = (WrappedComponet) => {

    const colours = ["red","pink","orange","blue","green", "yellow"]

    const randomColour = colours[Math.floor(Math.random()*5)];
    const className = randomColour + '-text';

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponet {...props}/>
            </div>
        )
    }


}

export default Rainbow