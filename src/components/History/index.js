import './index.css'

const History = props => {
  const {historyList, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <p>{timeAccessed}</p>
      <div className="domain">
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}
export default History
