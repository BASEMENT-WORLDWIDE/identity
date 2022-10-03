import { useRouter } from "next/router";
import DefaultApplicationLoginPage from "./DefaultApplicationPages/login";
import DefaultApplicationPasswordResetPage from "./DefaultApplicationPages/reset-password";
import DefaultApplicationSignupPage from "./DefaultApplicationPages/signup";

function DefaultApplicationPages() {
  const router = useRouter();
  const [applicationName, type] =
    (router.query.default as string[] | undefined) ?? [];
  const isLogin = type === "login";
  const isSignup = type === "signup";
  const isPasswordReset = type === "reset-password";
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
