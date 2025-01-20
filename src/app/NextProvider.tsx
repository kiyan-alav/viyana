"use client";
import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

const NextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
};

export default NextProvider;
