import { useEffect, useState } from 'react';
import Title from '../../UI/Title/Title.jsx';
import './VideoTitle.scss';

const VideoTitle = ({ currentTime }) => {

    const [isContainerVisible, setIsContainerVisible] = useState(false);
    const [headers, setHeaders] = useState([

        [
            true,
            'Как многое в замыслах Петра I, Кунсткамера своим силуэтом напоминает корабль над водами Невы. С 6 декабря 1728 года она открыта для публики, чтобы, как задумал император, «люди смотрели и учились».'],

        [
            false,
            'Кунсткамера – колыбель науки и первый музей России. Основанная Петром I в 1714 году, она служит хранилищем коллекций и исследовательской лабораторией для созданной в 1724 году Академии наук и художеств. Все академические экспедиции XVIII века передают свои коллекции в Кунсткамеру.'
        ],
    ]);

    useEffect(() => {
        if (currentTime >= 0.2) {
            setIsContainerVisible(true);
        }
        if (currentTime >= 7.1) {
            setIsContainerVisible(false);
        }
    }, [currentTime]);

    useEffect(() => {
        if (currentTime >= 4.2) {
            setHeaders([
                [
                    false,
                    'Как многое в замыслах Петра I, Кунсткамера своим силуэтом напоминает корабль над водами Невы. С 6 декабря 1728 года она открыта для публики, чтобы, как задумал император, «люди смотрели и учились».'
                ],
                [
                    true,
                    'Кунсткамера – колыбель науки и первый музей России. Основанная Петром I в 1714 году, она служит хранилищем коллекций и исследовательской лабораторией для созданной в 1724 году Академии наук и художеств. Все академические экспедиции XVIII века передают свои коллекции в Кунсткамеру.'
                ]
            ]);
        } else if (currentTime <= 4.2) {
            setHeaders([
                [
                    true,
                    'Как многое в замыслах Петра I, Кунсткамера своим силуэтом напоминает корабль над водами Невы. С 6 декабря 1728 года она открыта для публики, чтобы, как задумал император, «люди смотрели и учились».'
                ],
                [
                    false,
                    'Кунсткамера – колыбель науки и первый музей России. Основанная Петром I в 1714 году, она служит хранилищем коллекций и исследовательской лабораторией для созданной в 1724 году Академии наук и художеств. Все академические экспедиции XVIII века передают свои коллекции в Кунсткамеру.'
                ]
            ]);
        }

    }, [currentTime]);

    return (
        <div className={`videoTitle videoTitle-${isContainerVisible ? '' : 'hidden'}`}>
            <div className='videoTitle__container'>
                {headers.map(([visible, title]) => (
                    <Title title={title} isVisible={visible} className={'video'} key={title} />
                ))}
            </div>
        </div>
    );
};

export default VideoTitle;