const VideoList = ({ title, children }) => {
    const videos = children || <p>No hay vídeos</p>
	return (
		<div>
			<h2>{title}</h2>
			{videos}
		</div>
	)
}
export default VideoList
