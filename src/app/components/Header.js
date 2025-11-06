// src/app/components/Header.js

export default function Header() {
  return (
    // 'nav' é a tag para navegação. Colocamos um fundo branco.
    <nav className="bg-white">
      {/* 'container mx-auto' centraliza o conteúdo.
        'flex justify-between items-center' alinha o logo à esquerda e os links à direita.
        'py-6' dá um espaçamento vertical (padding).
      */}
      <div className="container mx-auto flex justify-between items-center py-6 px-4">
        
        {/* LADO ESQUERDO: Placeholder do Logo */}
        {/* Um card cinza com largura de 48 (w-48) e altura de 10 (h-10) */}
        <div className="bg-gray-300 w-48 h-10 rounded"></div>

        {/* LADO DIREITO: Links de Navegação */}
        {/* 'space-x-6' adiciona um espaço horizontal entre os links */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">
            Sobre nós
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-gray-700 hover:text-black">
            Para você
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-gray-700 hover:text-black">
            Contato
          </a>
        </div>
      </div>
    </nav>
  )
}