import './TourPrint.scss';
import printImg from '../../../assets/image/exposurePrint/interiorFullPrint-new.png';
import { useState } from 'react';

const TourPrint = () => {

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className='tourPrint'>
            <div className="tourPrint__conteiner">
                <img
                    src={printImg}
                    alt="tourPrint"
                    className='tourPrint__img' />
            </div>
        </div>
    )
}

export default TourPrint;