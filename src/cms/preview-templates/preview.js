import React from 'react'
import { StillTemplate } from '../../templates/still-page'

const Preview = ({ widgetFor }) => {
    return (
        <StillTemplate
            content={widgetFor('body')}
        />
    )
}


export default Preview