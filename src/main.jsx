import ReactDom from 'react-dom'
import './index.css'

const Video = ({title, duracion, uploadDate, description}) => {
    return (
    <>
        <h3>{title}</h3>
        <div>
            <span>{duracion}</span>
            <span>{uploadDate}</span>
        </div>
        <p>{description}</p>
    </>)
}

const app = (
    <>
        <h1>Vamos que podemos.</h1>
        <Video></Video>
    </>
)



ReactDom.render(app, document.getElementById('root'))
