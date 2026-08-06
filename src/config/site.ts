export type NavigationItem = { label: string; href: `#${string}` }
export type Service = { id: string; title: string; description: string }
export type ContentSection = { eyebrow?: string; title: string; description: string }
export type FaqItem = { question: string; answer: string }

export const siteConfig = {
  brand: {
    name: 'JB Soluções Tech',
    shortName: 'JB',
    tagline: 'Tecnologia simples. Atendimento de confiança.',
    owner: 'Jonathan Braga',
    cnpj: '66.948.009/0001-37',
  },
  whatsapp: {
    number: '5521973379432',
    displayNumber: '(21) 97337-9432',
    defaultMessage:
      'Olá! Encontrei a JB Soluções Tech pelo site e gostaria de solicitar uma avaliação.',
  },
  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ] satisfies NavigationItem[],
  hero: {
    eyebrow: 'Tecnologia sem complicação',
    title: 'Soluções de tecnologia para facilitar sua rotina',
    description:
      'Suporte para computadores, redes, Wi-Fi, impressoras e home office com atendimento direto, transparente e sem complicação.',
    primaryAction: 'Solicitar avaliação pelo WhatsApp',
    secondaryAction: 'Conhecer os serviços',
  },
  problems: {
    eyebrow: 'Suporte próximo',
    title: 'Problemas de tecnologia não precisam travar sua rotina',
    description: 'Identificamos a necessidade e explicamos os próximos passos com clareza.',
  } satisfies ContentSection,
  servicesSection: {
    eyebrow: 'Serviços',
    title: 'Ajuda prática para sua tecnologia',
  },
  services: [
    { id: 'computadores', title: 'Computadores e notebooks', description: 'Diagnóstico, configuração e otimização.' },
    { id: 'redes', title: 'Redes e Wi-Fi', description: 'Conexões mais estáveis e bem configuradas.' },
    { id: 'impressoras', title: 'Impressoras e equipamentos', description: 'Instalação e integração de dispositivos.' },
    { id: 'home-office', title: 'Home office', description: 'Um ambiente de trabalho funcional e conectado.' },
    { id: 'negocios', title: 'Pequenos negócios', description: 'Tecnologia organizada para a operação do dia a dia.' },
    { id: 'orientacao', title: 'Orientação e treinamento', description: 'Explicações práticas em linguagem simples.' },
  ] satisfies Service[],
  howItWorks: {
    eyebrow: 'Como funciona',
    title: 'Um atendimento direto e transparente',
    description: 'Você explica a necessidade, recebe uma avaliação inicial e combina os próximos passos.',
  } satisfies ContentSection,
  differentials: {
    title: 'Tecnologia explicada em linguagem simples',
    description: 'Contato direto, orientação clara e solução adequada à necessidade apresentada.',
  } satisfies ContentSection,
  diagnostic: {
    title: 'Conte o que está acontecendo',
    description: 'Descreva sua necessidade para iniciar uma avaliação pelo WhatsApp.',
  } satisfies ContentSection,
  about: {
    eyebrow: 'Sobre',
    title: 'Atendimento próximo por Jonathan Braga',
    description: 'A JB Soluções Tech nasceu para tornar a tecnologia mais simples e acessível para pessoas e pequenos negócios.',
  } satisfies ContentSection,
  finalCta: {
    title: 'Precisa resolver um problema de tecnologia?',
    description: 'Conte o que está acontecendo e inicie uma avaliação pelo WhatsApp.',
    action: 'Falar com a JB Soluções Tech',
  },
  faqSection: {
    eyebrow: 'Dúvidas',
    title: 'Perguntas frequentes',
  },
  faq: [] as FaqItem[],
  seo: {
    title: 'JB Soluções Tech | Tecnologia simples e atendimento de confiança',
    description:
      'Suporte para computadores, redes, Wi-Fi, impressoras e home office com atendimento direto e sem complicação.',
    canonicalUrl: '',
  },
  links: { email: '', social: [] },
  features: {
    diagnostic: false,
    faq: false,
    professionalPhoto: false,
    credentials: false,
    reviews: false,
    socialLinks: false,
  },
  pending: {
    // TODO: preencher somente após confirmação do responsável.
    serviceModality: '',
    businessHours: '',
    technicalVisitPolicy: '',
    paymentMethods: '',
    warrantyPolicy: '',
    professionalEmail: '',
  },
} as const

export function createWhatsAppUrl(message: string = siteConfig.whatsapp.defaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`
}
