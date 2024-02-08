import { Link } from "../../node_modules/react-router-dom/dist/index"

export const Nav = () => {

    return (
        <div className="flex gap-4">
            <Link to="/">home</Link>
            <Link to="/mypage">my page</Link>
        </div>
    )
}
