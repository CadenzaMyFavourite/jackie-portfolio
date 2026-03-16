export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
      <div className="mb-4 sm:mb-0">&copy; 2026 Jackie Zou. All rights reserved.</div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-gray-900 transition">
          LinkedIn
        </a>
        <a href="#" className="hover:text-gray-900 transition">
          GitHub
        </a>
        <a href="#" className="hover:text-gray-900 transition">
          Email
        </a>
      </div>
    </footer>
  );
}
