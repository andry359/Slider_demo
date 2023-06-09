import './SliderPrint.scss';
import { useState } from 'react';
import Print from './Print/Print';
import SliderPointer from './SliderPointer/SliderPointer';

const SliderPrint = () => {

    const [targetArchitecture, setTargetArchitecture] = useState(false);
    const [targetExposition, setTargetExposition] = useState(false);

    return (
        <div className='sliderPrint' >
            <Print
                targetArchitecture={targetArchitecture}
                targetExposition={targetExposition}
                setTargetArchitecture={setTargetArchitecture}
                setTargetExposition={setTargetExposition}
            />
            <SliderPointer
                targetArchitecture={targetArchitecture}
                targetExposition={targetExposition}
            />
        </div>
    )
}

export default SliderPrint;