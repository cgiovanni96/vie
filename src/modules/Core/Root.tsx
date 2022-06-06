import React from "react";
import { ApiProvider } from "./Providers/ApiProviders";
import { Router } from "./Router";
import "../../languages";

export const Root = () => {
  return (
    <React.StrictMode>
      <ApiProvider>
        <Router />
      </ApiProvider>
    </React.StrictMode>
  );
};
