import './ControlButton.scss';
import { useState } from 'react';

const ControlButton = ({ name, img, handler = null }) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <button className='controlButton' onClick={handler}>
            <img
                className={`controlButton__img controlButton__img-${name}`}
                src={img}
                alt={name}
                style={{
                    filter: isHover ? 'brightness(0) saturate(100%) invert(70%) sepia(3%) saturate(5813%) hue-rotate(349deg) brightness(86%) contrast(85%)' : 'none',
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            />
        </button>
    )
}

export default ControlButton;