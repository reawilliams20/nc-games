import { useContext, useEffect, useState } from "react"
import { getUsers } from "./apis"
import { UserContext} from "./User"

export const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const userValue = useContext(UserContext)

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
            setIsLoading(false)
        })
    }, [])

    const changeUser = (user) => {
        userValue.setUser(user)
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(user));
        alert(`You are now signed in as ${user.username}`)
    }

    return isLoading ? (<p> Loading...</p>)
    :
    (<main className="users">
        <h2> Users </h2>
        <p> Choose one of the users below to sign in: </p>
    <ul className="userList">
        {users.map((user) => {
            return (
                <li className="userCard" key={user.name} onClick={() =>  {changeUser(user)}}>
                    <img src={user.avatar_url} alt={user.username} height="200" width="200"/>
                    <p>{user.name}</p>
                </li>
            );
        })}
    </ul>
    </main>
    )
}