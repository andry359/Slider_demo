import './IconScroll.scss';
import iconScroll from '../../../assets/image/iconScroll.svg';
import { useState, useEffect } from 'react';

const IconScroll = ({ pageHeightNumber, pageY }) => {

    const [iconVisible, setIconVisible] = useState(true);

    useEffect(() => {
        (pageY < pageHeightNumber * 0.02) ? setIconVisible(true) : setIconVisible(false);
    }, [pageY]);

    return (
        <div className={`iconScroll iconScroll-${iconVisible ? '' : 'hidden'}`}>
            <img src={iconScroll} alt="iconScroll" />
        </div>
    )
};

export default IconScroll;