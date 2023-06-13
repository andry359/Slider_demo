import './HelpWidget.scss';
import HelpWidgetIcon from '../../assets/image/HelpWidgetIcon.svg';

const HelpWidget = () => {

    return (
        <div className='helpWidget__container'>
            <div className='helpWidget'>
                <div className="helpWidget__text helpWidgetText">
                    <div className="helpWidgetText__subtitle">
                        <span>
                            Листайте вниз,
                        </span>
                    </div>
                    <div className="helpWidgetText__text">
                        <span>
                            чтобы узнать больше
                        </span>
                    </div>
                </div>
                <div className="helpWidget__icon">
                    <img
                        src={HelpWidgetIcon}
                        alt="HelpWidgetIcon"
                    />
                </div>
            </div>
        </div>
    )
}

export default HelpWidget;