import { Children } from 'react';
import './ContentItem.scss';

const ContentItem = ({ className }) => {

    return (
        <div className={`content__item contentItem ${className}`}>
            {Children}
        </div>
    )
}

export default ContentItem;