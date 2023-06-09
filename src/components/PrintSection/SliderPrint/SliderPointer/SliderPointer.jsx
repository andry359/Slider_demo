import './SliderPointer.scss';
import PointerAarrows from '../../../../assets/image/PointerAarrows.svg';
import { useEffect, useState } from 'react';

const SliderPointer = ({ targetArchitecture, targetExposition }) => {

    const [side, isSide] = useState('');

    useEffect(() => {
        setTimeout(() => {
            if (targetArchitecture === targetExposition) {
                isSide('');
            } else if (!targetExposition) {
                isSide('right');
            } else if (!targetArchitecture) {
                isSide('left');
            }
        }, 340);
    }, [targetArchitecture, targetExposition]);

    return (
        <div className={`
        sliderPointer
        sliderPointer-${side}-${(!targetArchitecture && !targetExposition) ? 'start' : ''}
        `}>
            <div className={`
            sliderPointer__position
            sliderPointer__position-${targetArchitecture ? 'architecture' : ''}
            sliderPointer__position-${targetExposition ? 'exposition' : ''}
            `}>
                <div className="pointer__wrapper">
                    <div className="pointer__column"></div>
                    <div className="pointer__body">
                        <img src={PointerAarrows} alt="pointerAarrows" className='pointer__pointerAarrows' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderPointer;