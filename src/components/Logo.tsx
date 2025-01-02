import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="https://961.co" target="_blank">
        <img
          src="/961-Logo-White.png"
          alt=""
          className="mr-1 h-8"
        />
      </Link>
      <Link href="/"><span className="text-[2rem] font-bold tracking-wide">News</span></Link>
    </div>
  );
}