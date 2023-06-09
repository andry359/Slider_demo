import './TargetBlockItem.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListIndexContext } from '../../../../../context/ListIndexContext';
import { addClassNamesByIndex } from '../../../../../utils/addClassNamesByIndex';
import disableContextMenu from '../../../../../utils/disableContextMenu';

const TargetBlockItem = (props) => {

    const { hoverIndex } = useContext(ListIndexContext);

    const { className, onMouseEnter, onMouseLeave, link, img } = props;

    let classHover = addClassNamesByIndex(hoverIndex);

    return (
        <Link
            to={link}
            className={`${className} block-item ${className}-${classHover}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onContextMenu={disableContextMenu}
        >
            <img className='block-item__img' src={img} alt="preview" />
        </Link>
    )
}

export default TargetBlockItem;