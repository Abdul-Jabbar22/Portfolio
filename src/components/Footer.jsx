import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t py-4 text-center text-sm text-gray-500 mt-10">
      © {new Date().getFullYear()} Abdul Jabbar. All rights reserved.
    </footer>
  );
};

export default Footer;
