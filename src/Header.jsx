import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./User"

export const Header = () => {
    const {user} = useContext(UserContext)
    return (
        <header className="header">
            <Link className="link" to={`/reviews`}><h1>House of Games</h1></Link>
            <ul className="headerList">
            <li><img src={user.avatar_url} alt={`${user.username} profile pic`} id="profile" height="100" width="100" /></li>
            <li>logged in as: <strong>{user.username}</strong></li>
            <li><Link to={`/users`}><button class="switch">Switch User</button></Link></li>
            </ul>
        </header>
    )
}