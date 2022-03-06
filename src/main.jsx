import ReactDom from 'react-dom'
import './index.css'

const Video = ({ title, duracion, uploadDate, description }) => {
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

const app = (
	<>
		<h1>Vamos que podemos.</h1>
		<Video
			title='Componentes'
			duracion={2760}
			uploadDate={new Date(2022, 2, 25)}
			description='Componentes en React'
		></Video>
		<Video
			title='useState'
			duracion={3145}
			uploadDate={new Date(2022, 3, 26)}
			description='Cómo utilizar estados en React'
		></Video>
	</>
)

ReactDom.render(app, document.getElementById('root'))
