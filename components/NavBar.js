import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

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
      <DarkModeButton />
      <style jsx>{`
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0;
            margin: 0 0;
            background-color: rgb(63, 162, 219);
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
