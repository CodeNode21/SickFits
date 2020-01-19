// routing configuration is not needed because Next.js does the routing for us
import Link from 'next/link';

const Sell = props => (
    <div>
        <p>Sell</p>
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
);

export default Sell;