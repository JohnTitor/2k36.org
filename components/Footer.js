import Link from 'next/link';

import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer className="mb-8">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <div className="w-full max-w-2xl grid grid-cols-1 text-center gap-4 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              About
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              href="/blog"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Blog
            </Link>
            <Link
              href="/feed.xml"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Feed
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <ExternalLink href="https://mastodon.online/@ggwp">
              Mastodon
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
