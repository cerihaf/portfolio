import Head from "next/head";
import Image from "next/image";
import Portfolio from "../components/Portfolio";
import HubSpotContactForm from "../components/HubSpotContactForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ceri Trammell</title>
        <meta name="description" content="Full-Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
<script async defer src="https://storage.googleapis.com/lucky-orange-staging-public/core/lo.js?site-id=8332ac46"></script>      </Head>

      <header className="w-full bg-navy text-gold font-brand uppercase">
        <nav className="py-4 max-w-4xl mx-auto ">
          <ul className="flex items-center w-full">
            <li className="pl-4 flex-1">Ceri Trammell</li>
            <li className="pr-4">
              <a href="#whos-ceri">About</a>
            </li>
            <li className="pr-4">
              <a href="#what-can-she-do">Projects</a>
            </li>
            <li className="pr-4">
              <a href="#come-say-hi">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="font-body">
        {/* About Me Section */}
        <section id="whos-ceri" className="bg-navy-light text-gold py-8 px-4">
          <div className="flex max-w-4xl mx-auto items-center justify-center flex-col md:flex-row">
            <div className="md:w-1/4 flex justify-center">
              <Image
                src="/Memoji.png"
                width={250}
                height={250}
                alt="memoji of Ceri Trammell"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl pb-4 font-brand">WHO&apos;S CERI?</h1>
              <p>
                Hi! I am a Full-Stack Web developer with a passion for crafting
                aesthetically pleasing user interfaces. Previous management
                history has attested that I am proficient working alone, with a
                team, and am comfortable taking lead in any situation. As well
                as being capable of leading a team, I&apos;m also a &quot;go
                with the flow&quot; kind of person and take direction very well.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="what-can-she-do" className="py-8 px-4 max-w-4xl mx-auto ">
          <h2 className="text-2xl pb-8 font-brand">WHAT CAN SHE DO?</h2>
          <Portfolio />
        </section>

        {/* Contact Section */}
        <section id="come-say-hi" className="py-8 px-4 max-w-4xl mx-auto ">
          <div className="bg-gold text-navy p-6 md:p-8">
            <div className="text-center">
              <h2 className="text-2xl pb-4 font-brand">COME SAY HI</h2>
              <p className="mx-auto max-w-xl pb-6">
                Send me a quick note and I&apos;ll get back to you soon.
              </p>
            </div>
            <div className="mx-auto max-w-xl">
              <HubSpotContactForm />
            </div>
            <ul className="pt-6 text-center">
              <li>
                <a href="tel:9135583590">913.558.3590</a>
              </li>
              <li>
                <a href="mailto:cerihaf@gmail.com">cerihaf@gmail.com</a>
              </li>
              <li>
                <a href="https://github.com/cerihaf">GitHub</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="p-4 text-center">
        Made with ❤️ using Next.js x Tailwind
      </footer>
    </div>
  );
}
