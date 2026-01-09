// Diamond Logo - Lendaria Brand
function DiamondLogo({ className = "w-12 h-12", fill = "#000000" }: { className?: string; fill?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
    </svg>
  )
}

// URL da Imersao - Link estrategico com UTMs
const IMERSAO_URL = 'https://imersao.academialendaria.ai/?utm_source=calculadora&utm_medium=lp&utm_content=footer&utm_campaign=imersao-jan26&src=calculadora_lp'

export function Footer() {
  return (
    <footer className="bg-black-pure text-white-pure">
      {/* Footer Principal */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Footer Grid - 4 colunas principais + coluna de redes */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

          {/* Mapa do Site */}
          <div>
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              Mapa do Site
            </h4>
            <ul className="space-y-2">
              <li><a href="https://academialendaria.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Pagina Inicial</a></li>
              <li><a href="https://oalanicolas.news/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">NewsLetter</a></li>
            </ul>
          </div>

          {/* Programas */}
          <div>
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              Programas
            </h4>
            <ul className="space-y-2">
              <li><a href="https://academialendaria.ai/comunidade/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Comunidade Lendar[IA]</a></li>
              <li><a href="https://go.academialendaria.ai/gestor/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Certificacao Gestor [IA]</a></li>
              <li><a href="https://lendario.ai/formacao/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Formacao Lendar[IA]</a></li>
              <li><a href={IMERSAO_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white font-medium hover:text-gray-200 transition-colors">Imersao Pratica de IA</a></li>
            </ul>
          </div>

          {/* Ecossistema */}
          <div>
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              Ecossistema
            </h4>
            <ul className="space-y-2">
              <li><a href="https://agencialendaria.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Agencia Lendar[IA]</a></li>
              <li><a href="https://lendario.ai/chat/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Chat Lendario</a></li>
              <li><a href="https://superagentes.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Super Agentes</a></li>
              <li><a href="https://hub.lendario.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Hub Lendario</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              Suporte
            </h4>
            <ul className="space-y-2">
              <li><a href="mailto:suporte@vidalendaria.com" className="text-sm text-white/80 hover:text-white transition-colors">E-mail</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=5551998444171" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Whatsapp</a></li>
              <li className="pt-2"><span className="text-gray-500 text-xs uppercase tracking-wider">Transparencia</span></li>
              <li><a href="https://academialendaria.ai/termos" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Termos de uso</a></li>
              <li><a href="https://academialendaria.ai/privacidade" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors">Politica de privacidade</a></li>
            </ul>
          </div>

          {/* Siga-nos nas redes */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
              Siga-nos nas redes
            </h4>
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              <a href="https://www.youtube.com/@Academia.Lendaria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Youtube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.instagram.com/academialendaria/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://x.com/oalanicolas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@oalanicolas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/academia-lend-r-ia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>

            {/* Tagline */}
            <p className="text-sm text-white/60 leading-relaxed">
              Somos Um <span className="text-white">Ecossistema de Educacao & Inovacao</span> para <span className="text-[#D4AF37]">Pessoas e Negocios</span> serem Potencializados com IA Generativa.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <DiamondLogo className="w-6 h-6" fill="#FFFFFF" />
            <p className="text-sm text-white/40">
              Academia Lendar[IA] © {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
          <p className="text-xs text-white/30">
            CNPJ: 37.348.342/0001-07
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
