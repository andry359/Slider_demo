import './Print.scss';
import { Link } from 'react-router-dom';

const Print = ({ targetArchitecture, targetExposition, setTargetArchitecture, setTargetExposition }) => {

    return (
        <div className='print'>
            <div className="print__container">
                <div className="print__buffer"></div>
                <div
                    className={`print__clip clip-architecture`}
                    onMouseEnter={() => setTargetExposition(true)}
                    onMouseLeave={() => setTargetExposition(false)}
                >
                    <Link to='/map'>
                        <div className={`print__block print__blockExposition print__blockExposition-${targetExposition ? 'expand' : ''}`}>
                            <div className={`
                            print-block__text 
                            block-text 
                            block-text-${!targetArchitecture ? 'visible' : 'hidden'}`}>
                                <div className="block-text__title">
                                    Кунсткамера и Библиотека
                                </div>
                                <div className="block-text__subtitle">
                                    Интерактивный тур,
                                    просмотр экспонатов
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div
                    className={`print__clip clip-exposition`}
                    onMouseEnter={() => setTargetArchitecture(true)}
                    onMouseLeave={() => setTargetArchitecture(false)}
                >
                    <Link to='/architecture'>
                        <div className={`print__block print__blockArchitecture print__blockArchitecture-${targetArchitecture ? 'expand' : ''}`}>
                            <div className={`
                            print-block__text 
                            block-text 
                            block-text-${!targetExposition ? 'visible' : 'hidden'}`}>
                                <div className="block-text__title">
                                    Архитектура
                                </div>
                                <div className="block-text__subtitle">
                                    История строительства
                                    здания Кунсткамеры
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Print;