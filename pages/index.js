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
          src="/avatar.jpg"
          className="rounded-full"
        />
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Yuki Okushi
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
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
        <div className="grid grid-cols-2 w-full gap-3">
          <AccountCard
            title="E-mail"
            description="huyuumi@neet.club"
            href="mailto:huyuumi@neet.club"
          />
          <AccountCard
            title="Twitter"
            description="@fr4ternite"
            href="https://twitter.com/fr4ternite"
          />
          <AccountCard
            title="GitHub"
            description="@JohnTitor"
            href="https://github.com/JohnTitor"
          />
          <AccountCard
            title="Keybase"
            description="justmonika"
            href="https://keybase.io/justmonika"
          />
          <AccountCard
            title="Discord"
            description="huyuumi#8864"
            href=""
          />
          <AccountCard
            title="Telegram"
            description="@sn0bbery"
            href="https://t.me/sn0bbery"
          />
          <AccountCard
            title="Mastodon"
            description="@h@mastodon.online"
            href="https://mastodon.online/@h"
          />
        </div>
      </div>
    </Container>
  );
}
