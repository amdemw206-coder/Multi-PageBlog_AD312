import { Link, Outlet, Links, Meta, Scripts, ScrollRestoration } from "react-router";

export const Layout = ({ children }: any) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="p-6 max-w-2xl mx-auto font-sans">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const Root = () => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
        <Link to="/" style={{ color: '#0066cc', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#0066cc', textDecoration: 'none' }}>About</Link>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
