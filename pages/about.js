import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About Me – 2k36.org">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-2 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            I&apos;m a self-taught programmer with interests in FLOSS
            (Free/Libre and Open Source Software). I&apos;m mainly working on
            the Rust programming language as a contributor and a member of some
            teams/WGs.
          </p>
          <p>More details will be written later.</p>
        </div>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
            What&apos;s the "2k36"?
          </h2>
          <p>
            I'm also known as "John Titor" because of my GitHub name. John Titor
            is a time traveler came from the year 2036.
          </p>
        </div>
      </div>
    </Container>
  );
}
