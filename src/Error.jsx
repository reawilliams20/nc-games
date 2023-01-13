import { Link } from "react-router-dom"

export const Error = ({errorStatus}) => {

    return (
        <main className="Error">
            <h2 id="errorMessage">Page Not Found/ Broken Link</h2>
            <img src="https://img.icons8.com/ios/500/broken-robot.png" alt="broken-page" height="200" width="200"></img>
            <p>Sorry, we're unable to bring you the page you're looking for. Please try:</p>
            <ul>
                <li> Double checking the url </li>
                <li> Refresh the browser </li>
                <li> Search via navbar, links and drop down menus </li>
            </ul>
            <p> Click Here to return to <Link to="/reviews">NC-Games Homepage</Link></p>
        </main>
    )
}