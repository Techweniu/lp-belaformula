// src/app/components/Features.js

export default function Features() {
  return (
    // Esta seção tem um espaçamento e é nela que o card vai "flutuar"
    <section className="py-16">
      <div className="container mx-auto">
        {/* O CARD: Fundo branco, bordas 'rounded-xl', 'shadow-lg' (sombra)
          'grid grid-cols-1 md:grid-cols-3' (1 coluna mobile, 3 desktop)
          'md:divide-x' adiciona as linhas divisórias verticais APENAS no desktop.
        */}
        <div className="bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-200">
          
          {/* ITEM 1: Qualidade */}
          <div className="p-8 flex flex-col items-center text-center">
            {/* Placeholder do Ícone */}
            <div className="bg-gray-300 w-20 h-20 rounded-lg mb-4"></div>
            <h3 className="text-2xl font-bold text-black mb-2">Qualidade</h3>
            <p className="text-gray-600">
              Grupos de profissionais focados no controle de qualidade
            </p>
          </div>

          {/* ITEM 2: Agilidade */}
          <div className="p-8 flex flex-col items-center text-center">
            {/* Placeholder do Ícone */}
            <div className="bg-gray-300 w-20 h-20 rounded-lg mb-4"></div>
            <h3 className="text-2xl font-bold text-black mb-2">Agilidade</h3>
            <p className="text-gray-600">
              Receba seus manipulados no conforto da sua casa
            </p>
          </div>

          {/* ITEM 3: Atendimento */}
          <div className="p-8 flex flex-col items-center text-center">
            {/* Placeholder do Ícone */}
            <div className="bg-gray-300 w-20 h-20 rounded-lg mb-4"></div>
            <h3 className="text-2xl font-bold text-black mb-2">Atendimento</h3>
            <p className="text-gray-600">
              Um grupo completo de atendentes prontos para te auxiliar da melhor forma
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}