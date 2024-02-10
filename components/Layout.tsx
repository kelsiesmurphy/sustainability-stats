import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className='flex min-h-screen items-center justify-center px-4 py-12'>
      {children}
    </section>
  );
};

export default Layout;
