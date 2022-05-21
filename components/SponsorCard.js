export default function SponsorCard({ imageUrl, name }) {
  return (
    <a
      className="hover:shadow"
      href={`https://github.com/${name}`}
      aria-label={name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex border border-gray-200 dark:border-gray-800 rounded p-4 justify-center">
        <div className="grid grid-col-1">
          <img // eslint-disable-line @next/next/no-img-element
            className="inline-block mb-3 mx-auto tracking-tight rounded-full place-self-center"
            src={imageUrl}
            width="40"
            weight="40"
          />
          <p className="leading-5 text-gray-700 dark:text-gray-300 place-self-center">
            {name}
          </p>
        </div>
      </div>
    </a>
  );
}
