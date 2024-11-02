import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">О проекте</h2>
        <p>
          Это веб-приложение позволяет пользователям искать информацию о фильмах, используя сервис OMDb API.
          Реализовано с использованием Next.js и React.
        </p>
      </main>
    </div>
  );
}