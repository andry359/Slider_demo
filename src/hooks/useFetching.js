import { useState, useEffect } from 'react';

export const useFetching = () => {

    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const loadingDuration = 6000;

    useEffect(() => {
        let loadingTimeout = setTimeout(() => {
            if (!loading) return
            setProgress(progress + 1)
        }, loadingDuration / 100)

        if (progress === 100) {
            setLoading(false)
        }

        return () => {
            clearTimeout(loadingTimeout)
        }
    }, [progress, loading])

    return [loading, progress];
} 