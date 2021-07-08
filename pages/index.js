import Image from 'next/image';

import AccountCard from '../components/AccountCard';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Image
          alt="Yuki Okushi"
          height={100}
          width={100}
          src="/realpic.jpg"
          className="rounded-full"
        />
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Yuki Okushi
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-8">
          Yuki Okushi is a FLOSS nerd, Japanese codewriting ninja, Rustacean,
          etc.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          I&apos;m involved in...
        </h3>
        <div className="w-full">
          <ProjectCard
            title="Rust"
            description="I'm working on the Rust language as a contributor/member with various ways."
            href="https://www.rust-lang.org/"
          />
          <ProjectCard
            title="Node.js"
            description="I'm mainly working on i18n stuff as a part of i18n WG."
            href="https://nodejs.org/"
          />
          <ProjectCard
            title="GNOME"
            description="I'm working on Japanese translations as a GNOME foundation member."
            href="https://www.gnome.org/"
          />
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Social accounts &amp; Contacts
        </h3>
        <p className="prose text-gray-600 dark:text-gray-400 mb-4">
          I may response quickly on the accounts having &quot;thumbs-up&quot;.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
          <AccountCard
            title="E-mail"
            description="jtitor@2k36.org"
            href="mailto:jtitor@2k36.org"
            recommended="true"
          />
          <AccountCard
            title="Twitter"
            description="@fr4ternite"
            href="https://twitter.com/fr4ternite"
            recommended="false"
          />
          <AccountCard
            title="GitHub"
            description="@JohnTitor"
            href="https://github.com/JohnTitor"
            recommended="false"
          />
          <AccountCard
            title="GitLab"
            description="@ambivalence"
            href="https://gitlab.com/ambivalence"
            recommended="false"
          />
          <AccountCard
            title="PGP"
            description="0A50 9961 228F 3E44 0FA2  E02F 379C EEFD D63E 5DD7"
            href="https://pgp.mit.edu/pks/lookup?op=get&search=0x379CEEFDD63E5DD7"
            recommended="false"
          />
          <AccountCard
            title="Keybase"
            description="justmonika"
            href="https://keybase.io/justmonika"
            recommended="false"
          />
          <AccountCard
            title="Discord"
            description="huyuumi#8864"
            href=""
            recommended="true"
          />
          <AccountCard
            title="Matrix"
            description="@snobbery:matrix.org"
            href="https://matrix.to/#/@snobbery:matrix.org"
            recommended="false"
          />
          <AccountCard
            title="Telegram"
            description="@sn0bbery"
            href="https://t.me/sn0bbery"
            recommended="false"
          />
        </div>
      </div>
    </Container>
  );
}
