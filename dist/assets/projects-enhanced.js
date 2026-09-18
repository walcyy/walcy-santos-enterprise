(() => {
  const P = {
    pt: [
      ['Software','Sistema de Comissão Multi-filial','API central, sincronização recorrente e processamento de vendas, produtos, vendedores, metas e comissões para múltiplas lojas.',['Node.js','MySQL','Delphi','Oracle Cloud','REST API'],'Implantado'],
      ['Software','Vezly','Plataforma multiempresa e multifilial de agendamentos, com fluxo público, painel administrativo, API, autenticação e gestão de profissionais e serviços.',['Node.js','JavaScript','MySQL','JWT','Delphi'],'Produção inicial'],
      ['Dados','Migração Firebird → MySQL & Performance','Conversão e saneamento de bases legadas, revisão de consultas, views, índices e validações para preservar a operação durante migrações.',['Firebird','MySQL','SQL','ETL'],'Implementado'],
      ['Dados','Conversor Farmaflex Excel/CSV','Conversor para importação de planilhas e CSVs com reconhecimento de layouts, EAN, estoque, preços, custos e campos fiscais para o banco Farmaflex.',['Delphi','MySQL','Excel/CSV','Dados'],'Validado'],
      ['Fiscal','Financeiro DF-e / SEFAZ','Aplicação para consulta e persistência de DF-e, controle de NSU, certificados digitais A1, logs e documentos fiscais.',['Delphi','ACBr','MySQL','SEFAZ'],'Operacional'],
      ['Integração','Integração COMPETTI / Farmaflex','Contrato de integração por views padronizadas para filiais, vendedores, categorias, produtos, vendas e regras de premiação, preparado para evolução entre ERPs.',['SQL','MySQL','Views','Integração'],'Estruturado'],
      ['Fiscal','Relatórios Fiscais & Tributários','Consultas e relatórios para ICMS, PIS/COFINS, monofásicos e Simples Nacional, com visão por loja e apoio à conferência fiscal.',['SQL','MySQL','ICMS','PIS/COFINS'],'Implementado'],
      ['Cloud','Infraestrutura Cloud para APIs e Portais','Provisionamento e sustentação de aplicações em nuvem, com Linux, serviços de aplicação, proxy reverso, HTTPS e bancos centralizados.',['Oracle Cloud','AWS','Linux','Nginx','PM2'],'Em produção'],
      ['Integração','Sincronizador ERP → Cloud','Sincronizador multiempresa e multifilial para levar dados operacionais do ERP local para serviços centrais com identificação de origem e autenticação por token.',['Delphi','MySQL','REST API','Sincronização'],'Implementado'],
      ['Software','Plataforma de Barbearia & Agendamentos','Arquitetura de clientes, serviços, profissionais, agenda e assinaturas, incluindo fluxo de cobrança pós-atendimento para serviços avulsos.',['Node.js','MySQL','JWT','API'],'Em desenvolvimento'],
      ['Software','InfinitInvest Desktop','Aplicação desktop estruturada em JavaFX com persistência local e organização de dependências e execução para ambiente desktop.',['Java','JavaFX','SQLite'],'Protótipo'],
      ['Software','Portfólio Profissional Enterprise','Identidade digital corporativa e responsiva com apresentação técnica, catálogo de projetos, versão bilíngue e publicação contínua.',['UI/UX','GitHub','Netlify','Responsivo'],'Publicado']
    ],
    en: [
      ['Software','Multi-branch Commission Platform','Central API, recurring synchronization and processing for sales, products, sellers, targets and commissions across multiple stores.',['Node.js','MySQL','Delphi','Oracle Cloud','REST API'],'Deployed'],
      ['Software','Vezly','Multi-company and multi-branch scheduling platform with public booking flow, admin panel, API, authentication and professional/service management.',['Node.js','JavaScript','MySQL','JWT','Delphi'],'Initial production'],
      ['Data','Firebird → MySQL Migration & Performance','Legacy database conversion and cleanup, query review, views, indexes and validation to preserve operations during migrations.',['Firebird','MySQL','SQL','ETL'],'Implemented'],
      ['Data','Farmaflex Excel/CSV Converter','Converter for spreadsheet and CSV imports with layout recognition, EAN, stock, pricing, costs and fiscal fields for the Farmaflex database.',['Delphi','MySQL','Excel/CSV','Data'],'Validated'],
      ['Fiscal','DF-e / SEFAZ Financial Application','Application for DF-e querying and persistence, NSU control, A1 digital certificates, logs and fiscal documents.',['Delphi','ACBr','MySQL','SEFAZ'],'Operational'],
      ['Integration','COMPETTI / Farmaflex Integration','Standardized view contract for branches, sellers, categories, products, sales and reward rules, designed to evolve across ERPs.',['SQL','MySQL','Views','Integration'],'Structured'],
      ['Fiscal','Fiscal & Tax Reporting','Queries and reports for ICMS, PIS/COFINS, monophase taxation and Simples Nacional with per-store analysis and fiscal review support.',['SQL','MySQL','ICMS','PIS/COFINS'],'Implemented'],
      ['Cloud','Cloud Infrastructure for APIs & Portals','Provisioning and operation of cloud applications with Linux, application services, reverse proxy, HTTPS and centralized databases.',['Oracle Cloud','AWS','Linux','Nginx','PM2'],'In production'],
      ['Integration','ERP → Cloud Synchronizer','Multi-company and multi-branch synchronizer that sends operational ERP data to central services with source identification and token authentication.',['Delphi','MySQL','REST API','Synchronization'],'Implemented'],
      ['Software','Barbershop Scheduling Platform','Architecture for customers, services, professionals, scheduling and subscriptions, including post-service charging for one-off appointments.',['Node.js','MySQL','JWT','API'],'In development'],
      ['Software','InfinitInvest Desktop','JavaFX desktop application structure with local persistence, dependency organization and desktop runtime configuration.',['Java','JavaFX','SQLite'],'Prototype'],
      ['Software','Enterprise Professional Portfolio','Corporate responsive digital identity with technical presentation, project catalogue, bilingual experience and continuous publishing.',['UI/UX','GitHub','Netlify','Responsive'],'Published']
    ]
  };

  const L = {
    pt: {filters:['Todos','Software','Cloud','Dados','Integração','Fiscal'],search:'Buscar projeto ou tecnologia',empty:'Nenhum projeto encontrado.'},
    en: {filters:['All','Software','Cloud','Data','Integration','Fiscal'],search:'Search project or technology',empty:'No projects found.'}
  };

  const lang = () => (document.querySelector('.language-switch')?.textContent || 'EN').includes('EN') ? 'pt' : 'en';
  const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.6-3.6"></path></svg>';

  function build(current) {
    const shell = document.querySelector('#projetos > .shell');
    const heading = shell?.querySelector('.projects-heading');
    if (!shell || !heading) return false;

    let root = shell.querySelector('.portfolio-projects-custom');
    if (root?.dataset.lang === current) return true;
    root?.remove();

    root = document.createElement('div');
    root.className = 'portfolio-projects-custom';
    root.dataset.lang = current;
    root.innerHTML = `<div class="portfolio-projects-toolbar"><div class="portfolio-projects-filters"></div><label class="portfolio-project-search">${icon}<input type="search" placeholder="${L[current].search}" aria-label="${L[current].search}"></label></div><div class="portfolio-projects-list"></div>`;
    heading.insertAdjacentElement('afterend',root);

    let selected = L[current].filters[0];
    let query = '';
    const filters = root.querySelector('.portfolio-projects-filters');
    const list = root.querySelector('.portfolio-projects-list');

    const render = () => {
      const all = L[current].filters[0];
      const q = query.trim().toLowerCase();
      const rows = P[current].filter(([category,title,description,tags,status]) => {
        const categoryOk = selected === all || category === selected;
        const text = [category,title,description,status,...tags].join(' ').toLowerCase();
        return categoryOk && (!q || text.includes(q));
      });
      list.innerHTML = rows.length ? rows.map(([category,title,description,tags,status]) => `<article class="portfolio-project-card"><div class="portfolio-project-meta"><span class="portfolio-project-category">${category}</span><span class="portfolio-project-status">${status}</span></div><h3>${title}</h3><p>${description}</p><div class="portfolio-project-tags">${tags.map(t=>`<span>${t}</span>`).join('')}</div></article>`).join('') : `<div class="portfolio-projects-empty"><strong>${L[current].empty}</strong></div>`;
    };

    L[current].filters.forEach(name => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `portfolio-project-filter${name === selected ? ' active' : ''}`;
      button.textContent = name;
      button.onclick = () => {
        selected = name;
        root.querySelectorAll('.portfolio-project-filter').forEach(b => b.classList.toggle('active',b.textContent === name));
        render();
      };
      filters.appendChild(button);
    });

    root.querySelector('input').oninput = e => { query = e.target.value; render(); };
    render();
    return true;
  }

  let tries = 0;
  const timer = setInterval(() => {
    tries++;
    if (build(lang()) || tries > 60) clearInterval(timer);
  },100);

  document.addEventListener('click',e => {
    if (!e.target.closest('.language-switch')) return;
    setTimeout(() => build(lang()),120);
    setTimeout(() => build(lang()),420);
  });
})();
