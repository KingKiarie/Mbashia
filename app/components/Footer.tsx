export default function Footer() {
  return (
    <footer className="w-full mx-auto max-w-[80%] text-gray-500 py-10">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Feel free to reach out to me for collaboration, inquiries, or just to
          say hello!
        </p>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Instagram
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Victor Mbaashia. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
