// src/app/page.js

// 1. Importamos os "blocos" (componentes) que acabamos de criar
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

export default function HomePage() {
  return (
    // 2. Mudamos o fundo principal para cinza claro ('bg-gray-50')
    //    Isso vai fazer o card branco das 'Features' se destacar, como no print
    <main className="bg-gray-50 min-h-screen">
      
      {/* 3. Criamos um container 'bg-white' para o Header e o Hero */}
      <div className="bg-white">
        <Header />
        <Hero />
      </div>

      {/* 4. A seção 'Features' fica sobre o fundo cinza principal */}
      <Features />

    </main>
  )
}