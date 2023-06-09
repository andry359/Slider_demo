import './TourTitle.scss';
import Title from '../../UI/Title/Title';

const TourTitle = () => {

    const textTitles = 'Кунсткамера и Библиотека';

    return (
        <div className='tourTitle'>
            <div className="tourTitle__conteiner">
                <Title title={textTitles} isActive={true} className={'tourTitle'} />
            </div>
        </div>
    )
}

export default TourTitle;