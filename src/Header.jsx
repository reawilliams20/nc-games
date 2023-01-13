import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./User"

export const Header = () => {
    const {user} = useContext(UserContext)
    return (
        <header className="header">
            <Link to={`/Reviews`}><h1> NC Games </h1></Link>
            <p>logged in as: {user.username}</p>
            <img src={user.avatar_url} alt={`${user.username} profile pic`}></img>
        </header>
    )
}