import styles from './VideoItem.module.css'

const VideoItem = ({ title, duracion, uploadDate, description }) => {
	const seconds = duracion % 60
	const minutes = Math.floor(duracion / 60)

	return (
		<div className={styles.container}>
			<h3>{title}</h3>
			<div>
				<span>
					{minutes}: {seconds} --
				</span>
				<span> {uploadDate.toLocaleDateString()}</span>
			</div>
			<p>{description}</p>
		</div>
	)
}

export default VideoItem
