import { useRouter } from "next/router";
import { useEffect } from "react";
import DefaultApplicationLoginPage from "./DefaultApplicationPages/login";
import DefaultApplicationPasswordResetPage from "./DefaultApplicationPages/reset-password";
import DefaultApplicationSignupPage from "./DefaultApplicationPages/signup";

function DefaultApplicationPages() {
  const router = useRouter();
  const [applicationName, path] =
    (router.query.default as string[] | undefined) ?? [];
  const isLogin = path === "login";
  const isSignup = path === "signup";
  const isPasswordReset = path === "reset-password";
  if (!applicationName) {
    // default return loader or something...
    return <div />;
  }
  if (isLogin) {
    return <DefaultApplicationLoginPage applicationName={applicationName} />;
  } else if (isSignup) {
    return <DefaultApplicationSignupPage applicationName={applicationName} />;
  } else if (isPasswordReset) {
    return (
      <DefaultApplicationPasswordResetPage applicationName={applicationName} />
    );
  }
  // default return loader or something...
  return <div></div>;
}

export default DefaultApplicationPages;
