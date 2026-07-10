import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  const lower = location.pathname.toLowerCase();
  if (lower !== location.pathname) {
    return <Navigate to={lower + location.search + location.hash} replace />;
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Helmet>
        <title>Page not found | Kalilur Rahman</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          Oops! The page <code>{location.pathname}</code> does not exist.
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
