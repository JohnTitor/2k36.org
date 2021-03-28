export default function AccountCard({ title, description, href }) {
  return href === '' ? (
    <div className="flex items-center border border-gray-200 hover:shadow dark:border-gray-800 rounded p-4">
      <div>
        <h4 className="text-lg font-bold mb-3 tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="leading-5 text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  ) : (
    <a
      className="hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        <div>
          <h4 className="text-lg font-bold mb-3 tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
