/* ============================================================
   LISTA DE LINKS DA PÁGINA INICIAL  (único arquivo que você edita)
   - Cole as URLs entre aspas. Deixe '' enquanto não existir.
   - Para adicionar algo novo, copie uma linha parecida e mude.
   - Salve e envie ao GitHub: a página atualiza sozinha.
   ============================================================ */
window.SITE = {

  /* Formulário que o candidato recebe (só o botão "Copiar link") */
  form: { url: 'https://goroyugengaisha-rgb.github.io/curriculo-goro/' },

  /* Controles da equipe */
  team: [
    { id: 'planilha',  icon: 'sheet', tone: 1, url: '' },   /* link da planilha "Respostas" */
    { id: 'imoveis',   icon: 'build', tone: 2, url: '' },   /* Controle de Imóveis */
    { id: 'uniformes', icon: 'box',   tone: 3, url: '' }    /* Estoque de Uniformes */
  ],

  /* PDFs para enviar. pt = Português+日本語, en = English+日本語,
     fil = Filipino+日本語, ja = só japonês */
  pdfs: [
    { icon: 'home', tone: 2,
      title: { pt: 'Termos de mudança', en: 'Moving terms', ja: '引っ越しに関する規約' },
      files: { pt: 'https://github.com/goroyugengaisha-rgb/Inicio/mudanca-pt.pdf', en: 'https://goroyugengaisha-rgb.github.io/Inicio/mudanca-en.pdf', fil: 'https://goroyugengaisha-rgb.github.io/Inicio/mudanca-fil.pdf', ja: 'https://goroyugengaisha-rgb.github.io/Inicio/mudanca-ja.pdf' } },
    { icon: 'build', tone: 3,
      title: { pt: 'Termos de utilização do apartamento', en: 'Apartment usage terms', ja: '社宅（アパート）利用規約' },
      files: { pt: '', en: '', fil: '', ja: '' } },
    { icon: 'doc', tone: 1,
      title: { pt: 'Documentos para o cadastro na empresa', en: 'Documents for company registration', ja: '入社登録に必要な書類' },
      files: { pt: '', en: '', fil: '', ja: '' } },
    { icon: 'factory', tone: 2,
      title: { pt: 'Regras básicas da fábrica', en: 'Basic factory rules', ja: '工場の基本ルール' },
      files: { pt: '', en: '', fil: '', ja: '' } }
  ],

  /* Em construção: formulários e links ainda não prontos */
  building: [
    { title: { pt: '[Nome do novo formulário]', en: '[New form name]', ja: '[新しいフォーム名]' }, url: '' }
  ]
};
