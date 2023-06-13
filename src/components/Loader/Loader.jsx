import './Loader.scss';
import LoaderAnimation from './LoaderAnimation/LoaderAnimation';
import { useFetching } from '../../hooks/useFetching';
import { useState, useEffect, useMemo } from 'react';

const Loader = ({ isVisibleLoader, setIsLoading, setIsVisibleWidget }) => {

    let [loading, progress] = useFetching();

    const [isHidden, setIsHidden] = useState(false);

    useMemo(() => {
        if (!isVisibleLoader) {
            setTimeout(() => {
                setIsHidden(true);
            }, 1000);
        }
    }, [isVisibleLoader]);

    useEffect(() => {
        if (progress >= 75) {
            setIsVisibleWidget(true);
        };
    }, [progress])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(loading);
        }, 1500);
    }, [loading]);

    return (
        <div
            className={`
            loader 
            loader-${!loading ? 'animation' : ''} 
            loader-${!isVisibleLoader ? 'noVisible' : ''} 
            loader-${isHidden ? 'hidden' : ''}
            `}
        >
            <div className="loader__wrapper">
                <LoaderAnimation progress={progress} />
            </div>
        </div>
    )
};

export default Loader;