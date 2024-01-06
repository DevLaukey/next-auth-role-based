"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}
export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button className="w-full font-normal" variant="link" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
