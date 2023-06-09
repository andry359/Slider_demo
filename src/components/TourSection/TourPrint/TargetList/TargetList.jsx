import React from 'react';
import './TargetList.scss';
import { useContext } from 'react';
import { ListIndexContext } from './../../../../context/ListIndexContext';
import TargetListItem from './TargetListItem/TargetListItem';

const TargetList = () => {

    const { setHoverIndex } = useContext(ListIndexContext);

    const arrNames = [
        [
            [{ name: 'Анатомический театр', symbol: '| NN' }, 'anatomicalTheater', 0, '/tour?stage=1'],
            [{ name: 'Коллекции Рюйша и Себы', symbol: '| OO' }, 'naturalia1ndFloor', 6, '/tour?stage=2',],
            [{ name: 'Натуралии', symbol: '| LL' }, 'naturalia2ndFloor', 7, ''],
            [{ name: 'Мюнц-кабинет', symbol: '| SS, TT, UU' }, 'münzkabinet', 4, ''],
            [{ name: 'Артифициалии', symbol: '| BB' }, 'artifialia3rdFloor', 10, ''],
        ],
        [
            [{ name: 'Готторпский глобус', symbol: 'X |' }, 'gottorpGlobe', 9, ''],
            [{ name: 'Кабинет Петра Великого', symbol: 'II, KK |' }, 'cabinetOfPeter1', 5, ''],
            [{ name: 'Скелеты', symbol: 'MM |' }, 'gallery', 8, ''],
            [{ name: 'Библиотека (галерея)', symbol: 'W |' }, 'library3rdFloor', 3, ''],
            [{ name: 'Библиотека (2-й этаж)', symbol: 'P |' }, 'library2rdFloor', 2, ''],
            [{ name: 'Библиотека (1-й этаж)', symbol: 'H |' }, 'library1rdFloor', 1, '/tour?stage=3'],
        ],
    ];

    return (
        <div className='targetList'>
            <div className="targetList__left">
                {arrNames[0].map(([item, className, id, link]) =>
                    <TargetListItem
                        key={id}
                        size={'left'}
                        children={item}
                        className={className}
                        onMouseEnter={() => setHoverIndex(id)}
                        onMouseLeave={() => setHoverIndex(null)}
                        link={link}
                    />)
                }
            </div >
            <div className="targetList__right">
                {arrNames[1].map(([item, className, id, link]) =>
                    <TargetListItem
                        key={id}
                        size={'right'}
                        children={item}
                        className={className}
                        onMouseEnter={() => setHoverIndex(id)}
                        onMouseLeave={() => setHoverIndex(null)}
                        link={link}
                    />)
                }
            </div >
        </div >
    )
}

export default TargetList;