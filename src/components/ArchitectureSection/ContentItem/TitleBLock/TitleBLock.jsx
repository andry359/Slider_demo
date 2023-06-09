import './TitleBLock.scss';
import horizon from '../../../../assets/image/horizon.svg';

const TitleBLock = ({ title }) => {

    return (
        <div className="contentItem__titleBLock titleBLock">
            <div className="titleBLock__title">
                {title}
            </div>
            <div className="titleBLock__horizon">
                <img src={horizon} alt="horizon" />
            </div>
        </div>
    )
}

export default TitleBLock;