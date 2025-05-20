import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found - Data Flour Mills (DFM)';
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-16 bg-gray-100 flex items-center">
      <div className="container-custom text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-4 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Link to="/contact" className="text-primary hover:text-primary-dark underline">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;