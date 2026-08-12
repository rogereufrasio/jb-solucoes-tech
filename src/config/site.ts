export type NavigationItem = { label: string; href: `#${string}` }
export type Service = {
  id: string
  title: string
  description: string
  examples: readonly string[]
  whatsappMessage: string
}
export type FaqItem = { question: string; answer: string }

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const siteConfig = {
  brand: {
    name: 'JB Soluções',
    shortName: 'JB',
    tagline: 'Tecnologia simples. Atendimento de confiança.',
    owner: 'Jonathan Braga',
    cnpj: '66.948.009/0001-37',
  },
  assets: {
    logo: assetUrl('brand/logo-horizontal.svg'),
    logoLight: assetUrl('brand/logo-horizontal-light.svg'),
    mark: assetUrl('brand/logo-mark.svg'),
  },
  whatsapp: {
    number: '5521973379432',
    displayNumber: '(21) 97337-9432',
    defaultMessage: 'Olá! Encontrei a JB Soluções pelo site e gostaria de solicitar uma avaliação.',
  },
  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ] satisfies NavigationItem[],
  hero: {
    eyebrow: 'Suporte de tecnologia para pessoas e pequenos negócios',
    title: 'Soluções de tecnologia para facilitar sua rotina',
    description: 'Suporte para computadores, redes, Wi-Fi, impressoras e home office com atendimento direto, transparente e sem complicação.',
    primaryAction: 'Descrever meu problema',
    directService: 'Atendimento direto com Jonathan Braga',
  },
  problems: {
    eyebrow: 'Você se identifica?',
    title: 'Problemas de tecnologia não precisam travar sua rotina',
    description: 'Da lentidão no computador à conexão instável, começamos entendendo o que está acontecendo.',
    items: [
      'Meu computador está lento ou apresentando erros',
      'O Wi-Fi não funciona bem em todos os ambientes',
      'Preciso instalar uma impressora ou equipamento novo',
      'Quero organizar a tecnologia do meu home office',
      'Preciso configurar a rede do meu pequeno negócio',
      'Tenho dificuldade para usar ferramentas digitais',
    ],
  },
  servicesSection: {
    eyebrow: 'Serviços',
    title: 'Ajuda prática para sua tecnologia',
    description: 'Escolha o assunto mais próximo da sua necessidade para iniciar uma conversa contextualizada.',
  },
  services: [
    { id: 'computadores', title: 'Computadores e notebooks', description: 'Diagnóstico e configuração para equipamentos mais funcionais.', examples: ['Hardware e software', 'Formatação e sistemas', 'Otimização e periféricos'], whatsappMessage: 'Olá! Encontrei a JB Soluções pelo site e gostaria de solicitar uma avaliação para computador ou notebook.' },
    { id: 'redes', title: 'Redes e Wi-Fi', description: 'Conectividade organizada para residências e pequenos negócios.', examples: ['Roteadores e repetidores', 'Cobertura Wi-Fi', 'Conexões e cabeamento'], whatsappMessage: 'Olá! Encontrei a JB Soluções pelo site e gostaria de solicitar uma avaliação para melhorar minha rede Wi-Fi.' },
    { id: 'impressoras', title: 'Impressoras e equipamentos', description: 'Instalação e integração de equipamentos ao seu ambiente.', examples: ['Impressoras e scanners', 'Periféricos', 'Integração à rede'], whatsappMessage: 'Olá! Encontrei a JB Soluções pelo site e gostaria de solicitar uma avaliação para impressora ou equipamento.' },
    { id: 'home-office', title: 'Home office', description: 'Uma estrutura de trabalho conectada e pronta para a rotina.', examples: ['Computador e webcam', 'Headset e impressora', 'Conectividade'], whatsappMessage: 'Olá! Encontrei a JB Soluções pelo site e gostaria de solicitar uma avaliação para organizar meu home office.' },
    { id: 'negocios', title: 'Pequenos negócios', description: 'Tecnologia organizada para apoiar a operação do dia a dia.', examples: ['Computadores e rede', 'Compartilhamento', 'Suporte técnico'], whatsappMessage: 'Olá! Encontrei a JB Soluções pelo site e gostaria de solicitar uma avaliação para meu pequeno negócio.' },
    { id: 'orientacao', title: 'Orientação e treinamento', description: 'Apoio prático para usar tecnologia com mais segurança.', examples: ['Informática básica', 'Uso seguro da internet', 'Ferramentas digitais'], whatsappMessage: 'Olá! Encontrei a JB Soluções pelo site e gostaria de saber mais sobre orientação e treinamento em tecnologia.' },
  ] satisfies Service[],
  howItWorks: {
    eyebrow: 'Como funciona',
    title: 'Um caminho simples até a solução',
    steps: [
      { title: 'Conte o que precisa', description: 'Escolha um serviço ou descreva o problema diretamente pelo WhatsApp.' },
      { title: 'Receba uma avaliação inicial', description: 'As informações ajudam a entender o cenário e definir os próximos passos.' },
      { title: 'Combine o atendimento', description: 'Disponibilidade, necessidade de visita e orçamento são alinhados diretamente.' },
    ],
  },
  differentials: {
    eyebrow: 'Por que a JB',
    title: 'Tecnologia explicada em linguagem simples',
    description: 'Atendimento profissional não precisa ser distante ou complicado.',
    items: ['Contato direto pelo WhatsApp', 'Explicações em linguagem simples', 'Solução adequada à necessidade', 'Atendimento a pessoas e pequenos negócios', 'Transparência antes da execução', 'Cuidado com equipamentos, dados e ambiente'],
  },
  diagnostic: {
    eyebrow: 'Diagnóstico rápido',
    title: 'Conte o que está acontecendo',
    description: 'Preencha apenas o necessário. As respostas montam uma mensagem no seu dispositivo e não são armazenadas pelo site.',
    needOptions: [
      { value: 'Computador ou notebook', label: 'Computadores e notebooks' },
      { value: 'Rede ou Wi-Fi', label: 'Redes e Wi-Fi' },
      { value: 'Impressora ou equipamento', label: 'Impressoras e equipamentos' },
      { value: 'Home office', label: 'Home office' },
      { value: 'Pequeno negócio', label: 'Pequenos negócios' },
      { value: 'Orientação ou treinamento', label: 'Orientação e treinamento' },
      { value: 'Outro assunto de tecnologia', label: 'Outros assuntos' },
    ],
    submitLabel: 'Continuar no WhatsApp',
  },
  about: {
    eyebrow: 'Sobre',
    title: 'Tecnologia mais simples e acessível',
    description: 'A JB Soluções foi criada por Jonathan Braga para ajudar pessoas e pequenos negócios a resolver problemas de conectividade, configuração e uso de equipamentos com atendimento próximo e transparente.',
    commitmentTitle: 'Compromisso em cada contato',
    commitments: ['Clareza para explicar', 'Cuidado ao orientar', 'Transparência nos próximos passos'],
  },
  faqSection: { eyebrow: 'Dúvidas frequentes', title: 'Informação clara antes do contato' },
  faq: [
    { question: 'Como solicitar uma avaliação ou orçamento?', answer: 'Use um dos botões de WhatsApp da página e conte brevemente o que está acontecendo. A necessidade será avaliada antes da definição dos próximos passos.' },
    { question: 'Que tipos de problema a JB Soluções atende?', answer: 'A JB atua com computadores e notebooks, redes e Wi-Fi, impressoras e equipamentos, home office, tecnologia para pequenos negócios e orientação digital.' },
    { question: 'Vocês atendem residências e pequenos negócios?', answer: 'Sim. Os serviços são direcionados a clientes residenciais, profissionais autônomos, home offices e pequenos negócios.' },
    { question: 'Preciso informar senhas pelo site?', answer: 'Não. Nunca envie senhas, credenciais, dados bancários ou outras informações sensíveis pelo site.' },
    { question: 'O orçamento pode depender de análise ou visita?', answer: 'Sim. A definição do serviço e do orçamento pode depender de uma avaliação mais detalhada do equipamento ou ambiente.' },
  ] satisfies FaqItem[],
  finalCta: { title: 'Precisa resolver um problema de tecnologia?', description: 'Conte o que está acontecendo para iniciar uma avaliação.', action: 'Descrever meu problema' },
  legal: {
    privacy: {
      title: 'Política de Privacidade',
      intro: 'Esta política explica de forma simples como o site da JB Soluções funciona em relação aos seus dados.',
      sections: [
        { title: 'Diagnóstico e contato', paragraphs: ['O diagnóstico rápido funciona somente no seu dispositivo. O site usa as respostas para montar uma mensagem e não mantém uma cópia dessas informações.', 'Ao escolher enviar a mensagem, você será direcionado ao WhatsApp. A partir desse momento, o tratamento das informações também segue os termos e a política de privacidade da plataforma.'] },
        { title: 'Informações sensíveis', paragraphs: ['Não informe senhas, credenciais, dados bancários, documentos ou qualquer outra informação sensível nos campos do site ou na mensagem inicial.'] },
        { title: 'Métricas e cookies', paragraphs: ['A página funciona sem cookies não essenciais e sem ferramentas externas de análise. Uma integração de métricas poderá ser ativada futuramente somente depois de configurada e informada adequadamente.'] },
        { title: 'Atualizações', paragraphs: ['Este texto poderá ser atualizado para acompanhar mudanças no site ou nas ferramentas utilizadas.'] },
      ],
    },
    terms: {
      title: 'Termos de Uso',
      intro: 'Ao utilizar este site, você concorda com as condições abaixo, apresentadas em linguagem direta.',
      sections: [
        { title: 'Finalidade do site', paragraphs: ['A página apresenta os serviços de tecnologia da JB Soluções e facilita o primeiro contato pelo WhatsApp. O conteúdo tem caráter informativo.'] },
        { title: 'Avaliação e orçamento', paragraphs: ['O envio de uma mensagem não confirma contratação, disponibilidade, preço ou execução do serviço. A definição dos próximos passos pode depender de análise do equipamento ou ambiente.'] },
        { title: 'Uso responsável', paragraphs: ['Não utilize os campos para enviar conteúdo ilegal, ofensivo ou informações sensíveis. Informe apenas dados necessários para explicar sua necessidade de tecnologia.'] },
        { title: 'Links externos', paragraphs: ['Ao abrir o WhatsApp, você passa a utilizar um serviço externo sujeito aos próprios termos e políticas.'] },
      ],
    },
  },
  seo: { title: 'JB Soluções | Tecnologia simples e atendimento de confiança', description: 'Suporte para computadores, redes, Wi-Fi, impressoras e home office com atendimento direto e sem complicação.', canonicalUrl: '', ogImage: assetUrl('og.png') },
  reviews: [] as Array<{ author: string; text: string; source?: string }>,
  features: { diagnostic: true, faq: true, professionalPhoto: false, credentials: false, reviews: false, socialLinks: false, legalPages: true },
  pending: {
    // TODO: preencher somente após confirmação do responsável.
    serviceModality: '', businessHours: '', technicalVisitPolicy: '', paymentMethods: '', warrantyPolicy: '', professionalEmail: '', socialLinks: [], professionalPhoto: '', credentials: [], reviews: [],
  },
} as const

export function createWhatsAppUrl(message: string = siteConfig.whatsapp.defaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`
}
