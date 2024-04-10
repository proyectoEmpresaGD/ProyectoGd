import Link from "next/link"

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
