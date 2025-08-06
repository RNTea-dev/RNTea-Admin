// src/pages/NotFound.jsx
export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! The page you’re looking for does not exist.</p>
      <a
        href="/"
        className="text-orange-500 hover:text-orange-700 font-semibold underline"
      >
        Go Back Home
      </a>
    </div>
  );
}
