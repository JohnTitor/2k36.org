import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="mb-8">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <div className="w-full max-w-2xl grid grid-cols-1 text-center gap-4 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-500 hover:text-gray-600 transition">
                About
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/blog">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Blog
              </a>
            </Link>
            <Link href="/feed.xml">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Feed
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href="https://twitter.com/fr4ternite">
              Twitter
            </ExternalLink>
            <ExternalLink href="https://github.com/JohnTitor">
              GitHub
            </ExternalLink>
          </div>
        </div>
      </div>
      <p className="text-center font-medium text-gray-600">
        Copyright © 2021 Yuki Okushi
      </p>
    </footer>
  );
}
