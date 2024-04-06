import { Nav, NavLink } from "@/components/Nav"
import { ReactNode } from "react"

export const dynamic = "force-dynamic"

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">My orders</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  )
}
