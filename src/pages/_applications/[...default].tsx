import { NextPage } from "next";
import DefaultApplicationPages from "~/lib/DefaultApplicationPages";

const DefaultApplicationPage: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <DefaultApplicationPages />
    </div>
  );
};

export default DefaultApplicationPage;
