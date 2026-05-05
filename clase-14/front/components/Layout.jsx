import { Link, Outlet } from "react-router"

const Layout = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/dogs">Dogs</Link>
            </nav>

            <Outlet />

            <footer>nada</footer>
        </div>
    )
}

export default Layout