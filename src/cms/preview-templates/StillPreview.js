import React from 'react'
import { StillTemplate } from '../../templates/still-page'

const StillPreview = ({ entry, widgetFor }) => {
    return (
        <StillTemplate
            title={entry.getIn(['data', 'title'])}
            content={widgetFor('body')}
        />
    )
}


export default StillPreview