import { QueryClient, QueryClientProvider } from "react-query";
import { Children } from "../../../types";

export const client = new QueryClient();

type Props = Children;

export const ApiProvider = ({ children }: Props) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
