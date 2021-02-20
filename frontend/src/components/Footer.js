import { memo } from 'react';

const Footer = ({ title }) => {
  return <footer className="mb-8 text-center text-gray-400 text-sm">{title}</footer>;
};

export default memo(Footer);
