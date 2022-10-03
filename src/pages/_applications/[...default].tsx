import { NextPage } from "next";
import ThemeDefault from "~/themes/ThemeDefault";

const DefaultApplicationPage: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <ThemeDefault />
    </div>
  );
};

export default DefaultApplicationPage;
