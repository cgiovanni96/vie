import { useBreakpoint } from "@vie/hooks/useBreakpoint";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation = () => {
  const { mediaQuery } = useBreakpoint("md");

  return <>{mediaQuery ? <DesktopNavigation /> : <MobileNavigation />}</>;
};
