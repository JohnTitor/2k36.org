import Image from 'next/image';
import Link from 'next/link';

import ExternalLink from '@/components/ExternalLink';
import SponsorCard from '@/components/SponsorCard';

import AccountCard from '../components/AccountCard';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import content from '../data/sponsors';
import Avatar from '../public/me.jpg';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Image
          alt="Yuki Okushi"
          height={100}
          width={100}
          src={Avatar}
          className="rounded-full"
          placeholder="blur"
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
        <p className="prose text-gray-600 dark:text-gray-400 mb-4">
          ...and more! See the <Link href="/about">about page</Link> for more
          details.
        </p>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Social accounts &amp; Contacts
        </h3>
        <p className="prose text-gray-600 dark:text-gray-400 mb-4">
          I may respond quickly on the accounts having &quot;thumbs-up&quot;.
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
            description="@sn0bbery"
            href="https://twitter.com/sn0bbery"
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
            href="https://keys.openpgp.org/vks/v1/by-fingerprint/0A509961228F3E440FA2E02F379CEEFDD63E5DD7"
            recommended="false"
          />
          <AccountCard
            title="Keybase"
            description="justmonika"
            href="https://keybase.io/justmonika"
            recommended="false"
          />
          <AccountCard
            title="Last.fm"
            description="ShirayukiChiyo"
            href="https://www.last.fm/user/ShirayukiChiyo"
            recommended="false"
          />
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Sponsors
        </h3>
        <p className="prose text-gray-600 dark:text-gray-400 mb-4">
          A huge thanks to all my sponsors!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-3">
          {content.user.sponsorable.sponsors.Nodes.map((element) => {
            return (
              <SponsorCard
                key={element.user.username}
                imageUrl={element.user.avatarUrl}
                name={element.user.username}
              />
            );
          })}
        </div>
        <ExternalLink href="https://github.com/sponsors/JohnTitor">
          <button className="inline-block px-6 py-2.5 bg-gray-300 text-gray-700 leading-tight rounded shadow-md hover:bg-gray-400 hover:shadow-lg hover:text-white focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out mt-5">
            Become a sponsor to Yuki Okushi on GitHub →
          </button>
        </ExternalLink>
      </div>
    </Container>
  );
}
