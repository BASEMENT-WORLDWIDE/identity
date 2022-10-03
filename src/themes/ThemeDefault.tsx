import { useRouter } from "next/router";
import LoginPage from "./ThemeDefault/Login";
import PasswordResetPage from "./ThemeDefault/ResetPassword";
import SignupPage from "./ThemeDefault/Signup";

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
    return <LoginPage applicationName={applicationName} />;
  } else if (isSignup) {
    return <SignupPage applicationName={applicationName} />;
  } else if (isPasswordReset) {
    return <PasswordResetPage applicationName={applicationName} />;
  }
  // default return loader or something...
  return <div></div>;
}

export default DefaultApplicationPages;
