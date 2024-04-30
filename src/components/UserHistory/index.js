import './index.css'

const UserHistory = props => {
  const {userDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="carditem">
      <p>{timeAccessed}</p>
      <div className="infodata">
        <img src={logoUrl} alt="app logo" className="logoimgr" />
        <p className="nameinfo">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div className="butt">
        <button className="button" onClick={onDelete} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default UserHistory
