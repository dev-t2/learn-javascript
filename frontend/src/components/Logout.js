import { memo } from 'react';

const Logout = ({ className }) => {
  return <button className={`w-16 header-logout ${className}`}>Logout</button>;
};

export default memo(Logout);
