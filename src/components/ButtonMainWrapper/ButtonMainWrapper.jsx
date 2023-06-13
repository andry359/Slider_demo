import ButtonMain from '../UI/ButtonMain/ButtonMain';
import './ButtonMainWrapper.scss';
import { useNavigate } from 'react-router-dom';
import { useCallback, useContext } from 'react';
import { RouteShiftingContext } from '../../context/RouteShiftingContext';

const ButtonMainWrapper = ({ currentTime }) => {

    // const navigate = useNavigate();

    // const routeShifting = useContext(RouteShiftingContext);

    // const handleClick = useCallback(() => {
    //     routeShifting('/');
    // }, [routeShifting]);

    const objButtonScrollingEnd = {
        text: 'Продолжить',
        className: 'next',
    }

    return (
        <div
            className="buttonMainWrapper"
        // onClick={handleClick}
        >
            {(currentTime >= 9.8) ?
                <ButtonMain
                    objButtonScrolling={objButtonScrollingEnd}
                />
                : ''}
        </div>
    )
};

export default ButtonMainWrapper;