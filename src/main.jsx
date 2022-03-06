import ReactDom from 'react-dom'
import VideoItem from './components/VideoItem'
import './index.css'

const app = (
	<>
		<h1>Vamos que podemos.</h1>
		<VideoItem
			title='Componentes'
			duracion={2760}
			uploadDate={new Date(2022, 2, 25)}
			description='Componentes en React'
		></VideoItem>
		<VideoItem
			title='useState'
			duracion={3145}
			uploadDate={new Date(2022, 3, 26)}
			description='Cómo utilizar estados en React'
		></VideoItem>
	</>
)

ReactDom.render(app, document.getElementById('root'))
