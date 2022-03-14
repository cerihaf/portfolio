import Image from "next/image";
import Link from "next/link";

export default function PortfolioItem({ title, desc, url, repo, thumbnail }) {
  return (
    <article className="bg-navy-light border-navy border-8 rounded">
      <div className="flex justify-center">
        <Image src={thumbnail} width={640} height={302} alt={title} />
      </div>
      <div className="px-4 py-4">
        <h3 className="text-center text-gold font-brand pb-4 text-2xl">
          {title}
        </h3>
        <p className="text-gold">{desc}</p>
        <div className="w-full flex justify-center pt-4">
          <Link href={url}>
            <a className="border-navy border-4 uppercase bg-gold text-navy px-4 py-2 rounded w-full text-center">
              Demo
            </a>
          </Link>
          <Link href={repo}>
            <a className="ml-4 border-navy border-4 uppercase bg-gold text-navy px-4 py-2 rounded w-full text-center">
              GitHub
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}
