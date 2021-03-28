export default function AccountCard({ title, description, href, recommended }) {
  return href === '' ? (
    recommended === 'true' ? (
      <div
        className="flex items-center border border-gray-200 hover:shadow dark:border-gray-800 rounded p-4"
        title="Recommended to contact"
      >
        <div>
          <h4 className="text-lg font-bold mb-3 tracking-tight text-gray-900 dark:text-gray-100">
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-1 h-4 w-4 text-gray-800 dark:text-gray-200 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    ) : (
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
    )
  ) : recommended === 'true' ? (
    <a
      className="hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      title="Recommended to contact"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        <div>
          <h4 className="text-lg font-bold mb-3 tracking-tight text-gray-900 dark:text-gray-100">
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-1 h-4 w-4 text-gray-800 dark:text-gray-200 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
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
