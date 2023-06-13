import './Title.scss';

const Title = (props) => {

    const { title, isVisible = false, className = '' } = props;

    return (
        <div className={`title titleVideo-${isVisible ? 'vizible' : 'noVizible'} title-${className}`}>
            {title}
        </div>
    );
};

export default Title;