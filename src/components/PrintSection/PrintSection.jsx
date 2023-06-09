import './PrintSection.scss';
import SliderPrint from './SliderPrint/SliderPrint';

const PrintSection = () => {

    return (
        <div className='printSection'>
            <div className="printSection__container">
                <SliderPrint />
            </div>
        </div>
    )
}

export default PrintSection;