import { useState } from 'react';
import Loader from "../components/Loader/Loader";
import VideoSection from "../components/VideoSection/VideoSection";
import HelpWidget from '../components/HelpWidget/HelpWidget';

const StartingPage = () => {

    let [isLoading, setIsLoading] = useState(true);
    const [isVisibleLoader, setIsVisibleLoader] = useState(true);
    const [isVisibleWidget, setIsVisibleWidget] = useState(false);

    return (
        <div className="page startingPage" onScroll={() => setIsVisibleLoader(false)}>
            <Loader
                setIsLoading={setIsLoading}
                setIsVisibleWidget={setIsVisibleWidget}
                isVisibleLoader={isVisibleLoader}
            />
            <VideoSection
                setIsVisibleLoader={setIsVisibleLoader}
                setIsVisibleWidget={setIsVisibleWidget}
                isLoading={isLoading}
            />
            {isVisibleWidget && !isLoading && <HelpWidget />}
        </div>
    )
}

export default StartingPage;