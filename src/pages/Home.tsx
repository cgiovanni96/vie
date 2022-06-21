import { Page } from "@vie/components/Page";
import { Navigation } from "@vie/modules/Core/Navigation";
import { Hero } from "@vie/modules/Home/Hero";

export const HomePage = () => {
  return (
    <Page>
      <Navigation />
      <Hero />
    </Page>
  );
};
