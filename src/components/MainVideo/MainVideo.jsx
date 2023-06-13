import './MainVideo.scss'

const MainVideo = ({ video, currentTime }) => {

	return (
		<div className={`mainVideo`}>
			<video
				className='mainVideo__video'
				ref={video}
				loop={false}
				muted
			/>
		</div>
	)
}

export default MainVideo;