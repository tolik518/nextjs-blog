import Link from 'next/link';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <style jsx>{`
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            background-color: #81caca;
          }

          li {
            display: inline-block;
            margin: 0 1rem;
          }

          ul {
            list-style: none;
            padding: 0;
          }
      `}</style>
    </nav>
  );
}

export default NavBar;
