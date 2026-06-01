import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/">
            Kyle Marcy
          </Link>

          <div className="flex gap-6">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}