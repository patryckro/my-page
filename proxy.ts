import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista de todos os locales suportados
  locales: ['pt-BR', 'en-US'],

  // Locale padrão caso o usuário acesse a raiz '/'
  defaultLocale: 'pt-BR'
});

export const config = {
  // O matcher diz ao Next.js em quais rotas o middleware deve rodar.
  // Ignora arquivos estáticos da pasta public e _next
  matcher: ['/((?!api|_next|.*\\..*).*)']
};