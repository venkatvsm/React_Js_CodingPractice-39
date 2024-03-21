// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const {name, imageUrl, description} = planetsList
  return (
    <div className="PlanetItem-Container">
      <img src={imageUrl} className="PlanetItem-image" alt={`planet ${name}`} />
      <h1 className="PlanetItem-heading">{name}</h1>
      <p className="PlanetItem-para">{description}</p>
    </div>
  )
}
export default PlanetItem
