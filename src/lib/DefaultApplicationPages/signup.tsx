import Link from "next/link";
import { FormEventHandler } from "react";

type DefaultApplicationSignupPageProps = {
  applicationName: string;
};

const DefaultApplicationSignupPage = (
  props: DefaultApplicationSignupPageProps
) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="jane.doe@example.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Sign Up</button>
          <span>
            Already have an account?{" "}
            <Link replace href={"/login"}>
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default DefaultApplicationSignupPage;
