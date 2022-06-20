import { useBreakpoint } from "@vie/hooks/useBreakpoint";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation = () => {
  const { mediaQuery } = useBreakpoint("md");

  return <>{mediaQuery ? <>Desktop</> : <MobileNavigation />}</>;
};
