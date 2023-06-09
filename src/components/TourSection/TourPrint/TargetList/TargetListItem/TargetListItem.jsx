import './TargetListItem.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListIndexContext } from '../../../../../context/ListIndexContext';
import { addClassNamesByIndex } from '../../../../../utils/addClassNamesByIndex';

const TargetListItem = (props) => {

    const { hoverIndex } = useContext(ListIndexContext);

    const { children, size, className, onMouseEnter, onMouseLeave, link } = props;

    let classHover = addClassNamesByIndex(hoverIndex);

    return (
        <Link to={link}>
            <div
                className={`targetListItem targetListItem-${size} ${className}-${classHover}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className="targetListItem__name">
                    {children.name}
                </div>
                <div className="targetListItem__symbol">
                    {children.symbol}
                </div>
            </div>
        </Link>
    )
}

export default TargetListItem;