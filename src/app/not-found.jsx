import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | SarkariResult6.com",
  description:
    "The page you are looking for does not exist or may have been moved.",
};

export default function NotFound() {
  return (
    <div className="site-container py-16 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-6">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/admit-card"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-md transition"
      >
        Go to Latest Admit Cards
      </Link>
    </div>
  );
}