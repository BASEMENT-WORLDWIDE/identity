import Link from "next/link";
import type { FormEventHandler } from "react";

type ThemeDefaultLoginPageProps = {
  applicationName: string;
};

const ThemeDefaultLoginPage = (props: ThemeDefaultLoginPageProps) => {
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
          <button type="submit">Log In</button>
          <Link replace href={"/reset-password"}>
            Reset Password
          </Link>
          <div>
            Need an account?
            <Link replace href={"/signup"}>
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ThemeDefaultLoginPage;
