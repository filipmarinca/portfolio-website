// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Filip Marinca. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/filipmarinca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/filipmarinca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:filipmarinca@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
