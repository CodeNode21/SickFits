import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/sell">
            <a title="Sell Page">Sell</a>
        </Link>
        <Link href="/">
            <a title="Home Page">Home</a>
        </Link>
    </div>
)

export default Nav;