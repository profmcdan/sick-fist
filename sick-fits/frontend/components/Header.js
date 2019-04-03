import Link from "next/link";

const Header = () => (
  <div>
    <div className="bar">
      <Link href="/">
        <a>Sick Fist</a>
      </Link>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
  </div>
);
