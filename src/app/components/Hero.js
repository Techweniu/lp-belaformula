// src/app/components/Hero.js

export default function Hero() {
  return (
    // Seção com fundo branco e um grande espaçamento vertical (py-20)
    <section className="bg-white py-20">
      {/* 'grid grid-cols-1 md:grid-cols-2' cria 1 coluna no mobile e 2 no desktop.
        'gap-12' dá um espaço entre as colunas.
      */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        
        {/* COLUNA ESQUERDA: Textos e Botão */}
        <div className="text-left">
          {/* Título: 'text-5xl' (tamanho 5), 'font-bold', 'text-green-700' (cor verde) */}
          <h1 className="text-5xl font-bold text-green-700 mb-6">
            A sua saúde passa pelo nosso cuidado
          </h1>
          {/* Subtítulo: 'text-lg' (tamanho grande), 'text-gray-600' (cor cinza) */}
          <p className="text-lg text-gray-600 mb-8">
            Uma história de dedicação e respeito com a saúde e bem estar dos nossos clientes. Cadastre seu cupom pelo nosso canal de atendimento clicando no botão abaixo
          </p>
          {/* Botão: Fundo vermelho, texto branco, padding, uppercase, etc. */}
          <a
            href="#"
            className="bg-red-700 text-white font-bold py-3 px-8 uppercase rounded hover:bg-red-800 transition-colors"
          >
            Usar meu cupom!
          </a>
        </div>

        {/* COLUNA DIREITA: Placeholder da Imagem */}
        <div className="flex justify-center items-center">
          {/* Um card cinza de 96x96 (w-96 h-96)
            'rounded-full' transforma o quadrado em um círculo perfeito.
          */}
          <div className="bg-gray-300 w-96 h-96 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}