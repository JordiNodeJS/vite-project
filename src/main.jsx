import ReactDom from 'react-dom'
import './index.css'

const Video = ({ title, duracion, uploadDate, description }) => {
	return (
		<>
			<h3>{title}</h3>
			<div>
				<span>{duracion}</span>
				<span>{uploadDate}</span>
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
			durantion='25:04'
			uploadDate='06/03/2022'
			description='Componentes en React'
		></Video>
		<Video
			title='useState'
			durantion='27:05'
			uploadDate='08/03/2022'
			description='Cómo utilizar estados en React'
		></Video>
	</>
)

ReactDom.render(app, document.getElementById('root'))
