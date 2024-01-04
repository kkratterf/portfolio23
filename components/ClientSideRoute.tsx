"use client"

// Import core
import React from "react";
import Link from "next/link";
// Import customs

function ClientSideRoute({ children, route }: { children: React.ReactNode, route: string }) {
  return (
    <Link href={route}>
      {children}
    </Link>
  );
}

export default ClientSideRoute;
