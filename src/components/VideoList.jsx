import styles from './VideoList.module.css'

const VideoList = ({ title, children }) => (
	<div className={`${styles.wrapperList} ${styles.margin}`}>
		<h2>{title}</h2>
		{children || <p>No hay vídeos</p>}
	</div>
)

export default VideoList
