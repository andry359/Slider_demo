import './TourSection.scss';
import ReturnButton from '../ReturnButton/ReturnButton';
import TourPrint from './TourPrint/TourPrint';

const TourSection = () => {

    return (
        <div className="tourSection">
            <div className="tourSection__conteiner">
                <TourPrint />
                <div className="tourSection__buttons">
                    <ReturnButton />
                </div>
            </div>
        </div>
    )
}

export default TourSection;