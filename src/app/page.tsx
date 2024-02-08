import React from "react";
import Link from "next/link";
export default function Home() {

  return (
    <div className="Error">
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/analytics">
        <button>Go to Analytics</button>
      </Link>
    </div>
  );;
}
