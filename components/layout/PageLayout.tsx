import { ReactNode } from "react";
import { Container } from "./Container";

type PageProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageProps) {
  return (
    <Container>
      <div className="py-12">
        {children}
      </div>
    </Container>
  );
}