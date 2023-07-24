import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const RedLink = styled.a`
  color: red;
`;

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <RedLink>Home</RedLink>
      </Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
