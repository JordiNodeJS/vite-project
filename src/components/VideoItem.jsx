import styles from './VideoItem.module.css'

const VideoItem = ({ title, duracion, uploadDate, description }) => {
	let seconds = duracion % 60
	console.table('seg', seconds);
	if (seconds < 10) {
		seconds = '0' + seconds
	}

	const minutes = Math.floor(duracion / 60)

	return (
		<div className={styles.container}>
			<h3>{title}</h3>
			<div>
				<span className='styles.duration'>
					{minutes}: {seconds} --
				</span>
				<span> {uploadDate.toLocaleDateString()}</span>
			</div>
			<p>{description}</p>
		</div>
	)
}

export default VideoItem
