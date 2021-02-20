import { memo } from 'react';

const SignUpForm = () => {
  return (
    <form>
      <div className="max-w-lg mx-auto bg-white p-4">
        <div className="mb-4">
          <label htmlFor="nickname" className="signup-label">
            Nickname
          </label>
          <input type="text" name="nickname" id="nickname" className="signup-input" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="signup-label">
            Email
          </label>
          <input type="email" name="email" id="email" className="signup-input" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="signup-label">
            Password
          </label>
          <input type="password" name="password" id="password" className="signup-input" />
        </div>

        <div className="mb-4">
          <label htmlFor="password-check" className="signup-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="password-check"
            id="password-check"
            className="signup-input"
          />
        </div>

        <div className="mt-12">
          <button
            type="submit"
            className="bg-blue-800 w-full py-2 rounded-md font-medium text-white hover:bg-blue-900 focus:outline-none"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
};

export default memo(SignUpForm);
