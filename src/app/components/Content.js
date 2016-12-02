import React from 'react'

import PureContent from './parts/PureContent'

const Content = ({content}) => {
    return(
        <div>
            {content && content.map((item, index) => {
                return item ? PureContent({content: item}) : null;
            })} 
        </div>
    )    
};

Content.PropTypes = {
    content: React.PropTypes.object.isRequired
};

export default Content;