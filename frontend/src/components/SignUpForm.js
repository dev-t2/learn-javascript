import { memo, useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';

import { isLoggedInVar } from '../apollo';
import { SIGN_UP } from '../apollo/mutation';

const SignUpForm = ({ history }) => {
  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signUp);

      isLoggedInVar(true);

      history.replace('/');
    },
  });

  const [values, setValues] = useState();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      signUp({
        variables: {
          ...values,
        },
      });
    },
    [signUp, values]
  );

  const onChange = useCallback((e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <form onSubmit={onSubmit}>
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
            autoComplete="off"
            required
            onChange={onChange}
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
            autoComplete="off"
            required
            onChange={onChange}
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
            autoComplete="off"
            required
            onChange={onChange}
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
            autoComplete="off"
            required
            onChange={onChange}
          />
        </div>

        <div className="mt-12">
          <button
            type="submit"
            className="bg-blue-800 w-full py-3 rounded-md text-white hover:bg-blue-900 focus:outline-none"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
};

export default memo(SignUpForm);
