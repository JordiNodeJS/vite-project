const VideoItem = ({ title, duracion, uploadDate, description }) => {
	const seconds = duracion % 60
	const minutes = Math.floor(duracion / 60)
	return (
		<>
			<h3>{title}</h3>
			<div>
				<span>
					{minutes}: {seconds} --
				</span>
				<span> {uploadDate.toLocaleDateString()}</span>
			</div>
			<p>{description}</p>
		</>
	)
}

export default VideoItem
