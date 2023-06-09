import disableContextMenu from '../../../../../utils/disableContextMenu';
import './ContentBlockImage.scss';

const ContentBlockImage = ({ imagesArchitecture, className, text }) => {

    return (
        <div className="contentBlock__imageBlock contentBlockImage">
            <div className={`contentBlockImage__container contentBlockImage-${className}__container`}>
                <img
                    onContextMenu={disableContextMenu}
                    src={imagesArchitecture}
                    alt={className}
                />
                <div className="contentBlockImage__text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default ContentBlockImage;