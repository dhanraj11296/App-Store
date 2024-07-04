import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    setActiveTabId(tabId)
  }
  const tabBtnClassName = isActive ? 'tabButtonActive' : 'tabButton'
  return (
    <li className="tabitem">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
