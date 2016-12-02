import React from 'react'

const PureContent = ({content}) => {
    return (
        <div>
            <p><span>{content.author}</span></p>
            <p><span>{content.text}</span></p>
            <p>
                {content.tags && content.tags.map((item, index) => {
                    return item ? <span>{item}</span> : null;
                })}
            </p>
        </div>
    )
};

PureContent.PropTypes = {
    content: React.PropTypes.object.isRequired
};

export default PureContent;