import React from 'react';

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      style={{
        position: 'relative',
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
}

interface PageWrapperProps {
  children: React.ReactNode;
}

export default PageWrapper;
