"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Socials } from "./socials";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
          <CardContent>{children}</CardContent>
          {
              showSocial && (<CardFooter>
                  <Socials />
              </CardFooter>)
          }
          <CardFooter>
              <BackButton label={backButtonLabel}
                  href={ backButtonHref} />

          </CardFooter>
    </Card>
  );
};
