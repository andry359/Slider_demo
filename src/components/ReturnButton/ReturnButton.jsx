import './ReturnButton.scss';
import ControlButton from '../UI/ControlButton/ControlButton';
import imageReturn from '../../assets/image/iconClose.svg';
import { Link } from 'react-router-dom';

const ReturnButton = () => {

    const arrControlButtons = [
        ['return', imageReturn,]
    ];

    return (
        <div className='returnButton'>
            <Link to='/print'>
                {arrControlButtons.map(([name, img]) =>
                    <ControlButton
                        key={name}
                        name={name}
                        img={img}
                    />)}
            </Link>
        </div>
    )
}

export default ReturnButton;