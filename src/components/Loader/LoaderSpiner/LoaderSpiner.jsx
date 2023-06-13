import './LoaderSpiner.scss';

const LoaderSpiner = ({ progress }) => {

    let progressLoading = (progress * 210 / 100 < 210) ? progress * 210 / 100 : '210';

    return (
        <div className='loader__spiner spiner'>
            <div className='spiner__wrapper'>
                <svg className='spiner__svg svg'>
                    <rect
                        className='svg-border'
                        x="11"
                        y="14"
                        rx="14"
                        ry="14"
                        width="210"
                        height="22"
                        style={{
                            fill: 'rgba(0, 0, 0, 0)',
                            stroke: '#884234',
                            strokeWidth: 2
                        }}
                    />
                    <rect
                        className='svg-bar'
                        x="11"
                        y="14.5"
                        rx="10" ry="10"
                        width={progressLoading}
                        height="21"
                        style={{ fill: '#884234' }}
                    />
                </svg>
            </div>
        </div>
    )
}

export default LoaderSpiner;