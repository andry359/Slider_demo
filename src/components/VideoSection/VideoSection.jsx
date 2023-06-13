import './VideoSection.scss';
import VideoTitle from './VideoTitle/VideoTitle';
import { useEffect, useRef, useState } from 'react';
import ButtonMainWrapper from '../ButtonMainWrapper/ButtonMainWrapper';
import MainVideo from '../MainVideo/MainVideo';

const VideoSection = ({ setIsVisibleLoader, isLoading, setIsVisibleWidget }) => {

    const [currentTime, setCurrentTime] = useState(0.1);
    const [isSetTimeout, setIsSetTimeout] = useState(1500);
    const video = useRef(null);

    // console.log(currentTime);
    // console.log('isSetTimeout=', isSetTimeout);

    const movement = (event) => {
        setIsVisibleLoader(false);
        if (event.deltaY >= 0) {
            if (video.current.paused && video.current.currentTime < 10) {
                video.current?.play();
            }
        } else {
            video.current.currentTime -= 0.3;
            setCurrentTime(video.current.currentTime);
        }
    }

    const loadVideo = async () => {
        const response = await fetch('assets/videos/backgroundVideo60Fixed-fade.mp4');
        const blobFile = await response.blob();
        video.current.src = URL.createObjectURL(blobFile);
        video.current.playbackRate = 1.8;
        setCurrentTime(video.current.currentTime);
    };

    useEffect(() => {
        if (currentTime > 8.9) {
            setIsVisibleWidget(false);
        } else if (currentTime < 8.9) {
            setIsVisibleWidget(true);
        }
    }, [currentTime]);

    useEffect(() => {
        loadVideo();
        document.addEventListener('wheel', movement);

        const interval = setInterval(() => {
            if (!video.current.paused) {
                setCurrentTime(video.current.currentTime);
                video.current?.pause();
            }
            if (video.current.paused) {
                setCurrentTime(video.current.currentTime);
            }
        }, 2600);

        return () => {
            clearInterval(interval);
            document.removeEventListener('wheel', movement);
        }
    }, []);
    // console.log(video.current.paused);
    // useEffect(() => {
    //     if (currentTime >= 0.2) {
    //         setIsSetTimeout(3600);
    //     }
    // }, [currentTime])

    return (
        <div className='container'>
            {isLoading || <ButtonMainWrapper
                currentTime={currentTime}
            />}
            <VideoTitle currentTime={currentTime} />
            <MainVideo
                video={video}
                currentTime={currentTime}
            />
        </div>
    )
}

export default VideoSection;