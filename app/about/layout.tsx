import React from "react";
import Link from "next/link";

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className={"title"}>About us</h1>
      <ul>
        <li>
          <Link href={"/about/contacts"}>Contacts</Link>
        </li>
        <li>
          <Link href={"/about/team"}>Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
