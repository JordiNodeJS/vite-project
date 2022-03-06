import ReactDom from 'react-dom'
import VideoItem from './components/VideoItem'
import VideoList from './components/VideoList'
import './index.css'

const App = () => (
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

ReactDom.render(<App />, document.getElementById('root'))
