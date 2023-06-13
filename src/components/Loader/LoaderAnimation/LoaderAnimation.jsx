import './LoaderAnimation.scss';
import logoVideo from '../../../assets/videos/logoBlack.mp4';
import { useRef, useEffect } from 'react';
import { getPageDimensions } from '../../../utils/getPageDimensions';

const LoaderAnimation = ({ progress }) => {

    const logoVireoRef = useRef(null);
    const browserInnerX = window.innerWidth;
    const browserInnerY = window.innerHeight;
    let pageDimensions = getPageDimensions(browserInnerX, browserInnerY);

    useEffect(() => {

        if (progress < 100) {
            let duration = !!logoVireoRef.current.duration ? logoVireoRef.current.duration : 0;
            logoVireoRef.current.currentTime = duration * progress / 100;
        }

    }, [progress]);

    return (
        <div className='loader__animation animation'>
            <video
                className='animation__video'
                style={{ pageDimensions }}
                ref={logoVireoRef}
                src={logoVideo}
                muted
            />
        </div>
    )
}

export default LoaderAnimation;