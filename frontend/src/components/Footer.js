import { memo } from 'react';

const Footer = ({ title }) => {
  return <footer className="p-4 text-center text-gray-500 text-sm">{title}</footer>;
};

export default memo(Footer);
