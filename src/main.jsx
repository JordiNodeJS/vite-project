import ReactDom from 'react-dom'
import VideoItem from './components/VideoItem'
import './index.css'

const VideoList = ({ title, children }) => {
	return (
		<div>
			<h1>{title}</h1>
			{children}
		</div>
	)
}

const app = (
	<>
		<VideoList title='Curso de React'>
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
		</VideoList>
	</>
)

ReactDom.render(app, document.getElementById('root'))
