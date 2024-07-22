import { Link, Outlet } from "react-router-dom";
import "./header.scss"

function Header() {
    return (
        <>
            <nav>
                <Link to={'/'}>
                    <h2>My React Lab</h2>
                </Link>
                <div>
                    <Link to={'/canvas'}>
                        <button>Canvas</button>
                    </Link>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Header;