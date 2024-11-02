import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          OMDb поиск
        </Link>
        <div>
          <Link href="/about" className="text-white hover:underline">
            О нас
          </Link>
        </div>
      </nav>
    </header>
  );
}