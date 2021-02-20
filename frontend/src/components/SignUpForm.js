import { memo } from 'react';

const SignUpForm = () => {
  return (
    <form>
      <div className="max-w-lg mx-auto bg-white p-4">
        <div className="mb-4">
          <label className="signup-label" htmlFor="nickname">
            Nickname
          </label>
          <input
            className="signup-input"
            type="text"
            name="nickname"
            id="nickname"
            placeholder="Please enter your nickname"
            required
          />
        </div>

        <div className="mb-4">
          <label className="signup-label" htmlFor="email">
            Email
          </label>
          <input
            className="signup-input"
            type="email"
            name="email"
            id="email"
            placeholder="Please enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="signup-label" htmlFor="password">
            Password
          </label>
          <input
            className="signup-input"
            type="password"
            name="password"
            id="password"
            placeholder="Please enter your password"
            required
          />
        </div>

        <div className="mb-4">
          <label className="signup-label" htmlFor="password-check">
            Confirm Password
          </label>
          <input
            type="password"
            name="password-check"
            id="password-check"
            className="signup-input"
            placeholder="Please enter your password again"
            required
          />
        </div>

        <div className="mt-12">
          <button
            type="submit"
            className="bg-blue-800 w-full py-3 rounded-md font-medium text-white hover:bg-blue-900 focus:outline-none"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
};

export default memo(SignUpForm);
