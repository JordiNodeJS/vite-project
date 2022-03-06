import ReactDom from 'react-dom'
import './index.css'

const Video = props => {
    return (
    <>
        <h3>{props.title}</h3>
        <div>
            <span>{props.duracion}</span>
            <span>{props.uploadDate}</span>
        </div>
        <p>{props.description}</p>
    </>)
}

const app = (
    <>
        <h1>Vamos que podemos.</h1>
        <Video></Video>
    </>
)



ReactDom.render(app, document.getElementById('root'))
