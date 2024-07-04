import './index.css'
const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="appItems">
      <img className="appImage" src={imageUrl} alt={appName} />
      <p className="appName">{appName}</p>
    </li>
  )
}
export default AppItem
