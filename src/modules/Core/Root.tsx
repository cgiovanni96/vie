import React from "react";
import { ApiProvider } from "./Providers/ApiProviders";
import { Router } from "./Router";

export const Root = () => {
  return (
    <React.StrictMode>
      <ApiProvider>
        <Router />
      </ApiProvider>
    </React.StrictMode>
  );
};
