import type { FormEventHandler } from "react";

type ThemeDefaultPasswordResetPageProps = {
  applicationName: string;
};

const ThemeDefaultPasswordResetPage = (
  props: ThemeDefaultPasswordResetPageProps
) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const email = formData.get("email");
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
          <button type="submit">Send Password Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ThemeDefaultPasswordResetPage;
