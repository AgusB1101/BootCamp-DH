import { useParams } from 'react-router'
import './Image.css'

const Image = () => {
  const { width } = useParams()
  return (
    <div className="image">
      <img src={`https://picsum.photos/${width}/${width}`} alt="" />
    </div>
  )
}

export default Image
