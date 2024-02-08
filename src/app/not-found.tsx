import Link from "next/link";

export default function NotFound() {
  return (
    <div className="Error">
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}
