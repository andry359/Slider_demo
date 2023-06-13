import { useState } from 'react';
import './ButtonMain.scss';

const ButtonMain = (props) => {

    const [isHover, setIsHover] = useState(false);

    let { text, hover = "", className = "", ...objButtonScrolling } = props.objButtonScrolling;

    return (
        <button
            className={`buttonMain buttonMain-${className}-${isHover ? 'hover' : ''}`}
            style={objButtonScrolling}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {text}
        </button>
    )
}

export default ButtonMain;