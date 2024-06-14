import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem vindo ao Portal de Receitas</h1>
      <div className="home-link"><Link href="/recipes">Ver receitas</Link></div>
    </div>
  );
}
