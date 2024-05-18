import React from 'react';

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: 'auto',
        marginInline: 'auto',
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
