(() => {
  const projects = {
    pt: [
      {
        category: 'Software',
        title: 'Sistema de Comissão Multi-filial',
        description: 'API central, sincronização recorrente e processamento de vendas, produtos, vendedores, metas e comissões para múltiplas lojas.',
        tags: ['Node.js','MySQL','Delphi','Oracle Cloud','REST API'],
        status: 'Implantado'
      },
      {
        category: 'Software',
        title: 'Vezly',
        description: 'Plataforma multiempresa e multifilial de agendamentos, com fluxo público, painel administrativo, API, autenticação e gestão de profissionais e serviços.',
        tags: ['Node.js','JavaScript','MySQL','JWT','Delphi'],
        status: 'Produção inicial'
      },
      {
        category: 'Dados',
        title: 'Migração Firebird → MySQL & Performance',
        description: 'Conversão e saneamento de bases legadas, revisão de consultas, views, índices e validações para preservar a operação durante migrações.',
        tags: ['Firebird','MySQL','SQL','ETL'],
        status: 'Implementado'
      },
      {
        category: 'Dados',
        title: 'Conversor Farmaflex Excel/CSV',
        description: 'Conversor para importação de planilhas e CSVs com reconhecimento de layouts, EAN, estoque, preços, custos e campos fiscais para o banco Farmaflex.',
        tags: ['Delphi','MySQL','Excel/CSV','Dados'],
        status: 'Validado'
      },
      {
        category: 'Fiscal',
        title: 'Financeiro DF-e / SEFAZ',
        description: 'Aplicação para consulta e persistência de DF-e, controle de NSU, certificados digitais A1, logs e documentos fiscais.',
        tags: ['Delphi','ACBr','MySQL','SEFAZ'],
        status: 'Operacional'
      },
      {
        category: 'Integração',
        title: 'Integração COMPETTI / Farmaflex',
        description: 'Contrato de integração por views padronizadas para filiais, vendedores, categorias, produtos, vendas e regras de premiação, preparado para evolução entre ERPs.',
        tags: ['SQL','MySQL','Views','Integração'],
        status: 'Estruturado'
      },
      {
        category: 'Fiscal',
        title: 'Relatórios Fiscais & Tributários',
        description: 'Consultas e relatórios para ICMS, PIS/COFINS, monofásicos e Simples Nacional, com visão por loja e apoio à conferência fiscal.',
        tags: ['SQL','MySQL','ICMS','PIS/COFINS'],
        status: 'Implementado'
      },
      {
        category: 'Cloud',
        title: 'Infraestrutura Cloud para APIs e Portais',
        description: 'Provisionamento e sustentação de aplicações em nuvem, com Linux, serviços de aplicação, proxy reverso, HTTPS e bancos centralizados.',
        tags: ['Oracle Cloud','AWS','Linux','Nginx','PM2'],
        status: 'Em produção'
      },
      {
        category: 'Integração',
        title: 'Sincronizador ERP → Cloud',
        description: 'Sincronizador multiempresa e multifilial para levar dados operacionais do ERP local para serviços centrais com identificação de origem e autenticação por token.',
        tags: ['Delphi','MySQL','REST API','Sincronização'],
        status: 'Implementado'
      },
      {
        category: 'Software',
        title: 'Plataforma de Barbearia & Agendamentos',
        description: 'Arquitetura de clientes, serviços, profissionais, agenda e assinaturas, incluindo fluxo de cobrança pós-atendimento para serviços avulsos.',
        tags: ['Node.js','MySQL','JWT','API'],
        status: 'Em desenvolvimento'
      },
      {
        category: 'Software',
        title: 'InfinitInvest Desktop',
        description: 'Aplicação desktop estruturada em JavaFX com persistência local e organização de dependências e execução para ambiente desktop.',
        tags: ['Java','JavaFX','SQLite'],
        status: 'Protótipo'
      },
      {
        category: 'Software',
        title: 'Portfólio Profissional Enterprise',
        description: 'Identidade digital corporativa e responsiva com apresentação técnica, catálogo de projetos, versão bilíngue e publicação contínua.',
        tags: ['UI/UX','GitHub','Netlify','Responsivo'],
        status: 'Publicado'
      }
    ],
    en: [
      {
        category: 'Software',
        title: 'Multi-branch Commission Platform',
        description: 'Central API, recurring synchronization and processing for sales, products, sellers, targets and commissions across multiple stores.',
        tags: ['Node.js','MySQL','Delphi','Oracle Cloud','REST API'],
        status: 'Deployed'
      },
      {
        category: 'Software',
        title: 'Vezly',
        description: 'Multi-company and multi-branch scheduling platform with public booking flow, admin panel, API, authentication and professional/service management.',
        tags: ['Node.js','JavaScript','MySQL','JWT','Delphi'],
        status: 'Initial production'
      },
      {
        category: 'Data',
        title: 'Firebird → MySQL Migration & Performance',
        description: 'Legacy database conversion and cleanup, query review, views, indexes and validation to preserve operations during migrations.',
        tags: ['Firebird','MySQL','SQL','ETL'],
        status: 'Implemented'
      },
      {
        category: 'Data',
        title: 'Farmaflex Excel/CSV Converter',
        description: 'Converter for spreadsheet and CSV imports with layout recognition, EAN, stock, pricing, costs and fiscal fields for the Farmaflex database.',
        tags: ['Delphi','MySQL','Excel/CSV','Data'],
        status: 'Validated'
      },
      {
        category: 'Fiscal',
        title: 'DF-e / SEFAZ Financial Application',
        description: 'Application for DF-e querying and persistence, NSU control, A1 digital certificates, logs and fiscal documents.',
        tags: ['Delphi','ACBr','MySQL','SEFAZ'],
        status: 'Operational'
      },
      {
        category: 'Integration',
        title: 'COMPETTI / Farmaflex Integration',
        description: 'Standardized view contract for branches, sellers, categories, products, sales and reward rules, designed to evolve across ERPs.',
        tags: ['SQL','MySQL','Views','Integration'],
        status: 'Structured'
      },
      {
        category: 'Fiscal',
        title: 'Fiscal & Tax Reporting',
        description: 'Queries and reports for ICMS, PIS/COFINS, monophase taxation and Simples Nacional with per-store analysis and fiscal review support.',
        tags: ['SQL','MySQL','ICMS','PIS/COFINS'],
        status: 'Implemented'
      },
      {
        category: 'Cloud',
        title: 'Cloud Infrastructure for APIs & Portals',
        description: 'Provisioning and operation of cloud applications with Linux, application services, reverse proxy, HTTPS and centralized databases.',
        tags: ['Oracle Cloud','AWS','Linux','Nginx','PM2'],
        status: 'In production'
      },
      {
        category: 'Integration',
        title: 'ERP → Cloud Synchronizer',
        description: 'Multi-company and multi-branch synchronizer that sends operational ERP data to central services with source identification and token authentication.',
        tags: ['Delphi','MySQL','REST API','Synchronization'],
        status: 'Implemented'
      },
      {
        category: 'Software',
        title: 'Barbershop Scheduling Platform',
        description: 'Architecture for customers, services, professionals, scheduling and subscriptions, including post-service charging for one-off appointments.',
        tags: ['Node.js','MySQL','JWT','API'],
        status: 'In development'
      },
      {
        category: 'Software',
        title: 'InfinitInvest Desktop',
        description: 'JavaFX desktop application structure with local persistence, dependency organization and desktop runtime configuration.',
        tags: ['Java','JavaFX','SQLite'],
        status: 'Prototype'
      },
      {
        category: 'Software',
        title: 'Enterprise Professional Portfolio',
        description: 'Corporate responsive digital identity with technical presentation, project catalogue, bilingual experience and continuous publishing.',
        tags: ['UI/UX','GitHub','Netlify','Responsive'],
        status: 'Published'
      }
    ]
  };

  const labels = {
    pt: {
      filters: ['Todos','Software','Cloud','Dados','Integração','Fiscal'],
      search: 'Buscar projeto ou tecnologia',
      empty: 'Nenhum projeto encontrado.'
    },
    en: {
      filters: ['All','Software','Cloud','Data','Integration','Fiscal'],
      search: 'Search project or technology',
      empty: 'No projects found.'
    }
  };

  let activeFilter = null;
  let query = '';
  let lastLang = null;
  let scheduled = false;

  function language() {
    const text = document.querySelector('.language-switch')?.textContent || 'EN';
    return text.includes('EN') ? 'pt' : 'en';
  }

  function searchIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.6-3.6"></path></svg>';
  }

  function normalizeCategory(value, lang) {
    if (lang === 'pt') return value;
    return value;
  }

  function renderList(root, lang) {
    const data = projects[lang];
    const q = query.trim().toLowerCase();
    const allLabel = lang === 'pt' ? 'Todos' : 'All';
    const selected = activeFilter || allLabel;
    const filtered = data.filter(project => {
      const byCategory = selected === allLabel || normalizeCategory(project.category,lang) === selected;
      const haystack = [project.title,project.description,project.category,project.status,...project.tags].join(' ').toLowerCase();
      return byCategory && (!q || haystack.includes(q));
    });

    const list = root.querySelector('.portfolio-projects-list');
    list.innerHTML = '';

    if (!filtered.length) {
      const empty = document.createElement('div');
      empty.className = 'portfolio-projects-empty';
      empty.innerHTML = `<strong>${labels[lang].empty}</strong>`;
      list.appendChild(empty);
      return;
    }

    filtered.forEach(project => {
      const article = document.createElement('article');
      article.className = 'portfolio-project-card';
      article.innerHTML = `
        <div class="portfolio-project-meta">
          <span class="portfolio-project-category">${project.category}</span>
          <span class="portfolio-project-status">${project.status}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="portfolio-project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      `;
      list.appendChild(article);
    });
  }

  function render(lang) {
    const section = document.getElementById('projetos');
    const shell = section?.querySelector('.shell');
    const heading = shell?.querySelector('.projects-heading');
    if (!section || !shell || !heading) return false;

    let root = shell.querySelector('.portfolio-projects-custom');
    if (!root) {
      root = document.createElement('div');
      root.className = 'portfolio-projects-custom';
      heading.insertAdjacentElement('afterend',root);
    }

    if (lastLang !== lang || !root.querySelector('.portfolio-projects-toolbar')) {
      lastLang = lang;
      activeFilter = lang === 'pt' ? 'Todos' : 'All';
      query = '';
      root.innerHTML = `
        <div class="portfolio-projects-toolbar">
          <div class="portfolio-projects-filters"></div>
          <label class="portfolio-project-search">
            ${searchIcon()}
            <input type="search" placeholder="${labels[lang].search}" aria-label="${labels[lang].search}">
          </label>
        </div>
        <div class="portfolio-projects-list"></div>
      `;

      const filters = root.querySelector('.portfolio-projects-filters');
      labels[lang].filters.forEach(filter => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `portfolio-project-filter${filter === activeFilter ? ' active' : ''}`;
        button.textContent = filter;
        button.addEventListener('click',() => {
          activeFilter = filter;
          root.querySelectorAll('.portfolio-project-filter').forEach(btn => btn.classList.toggle('active',btn.textContent === filter));
          renderList(root,lang);
        });
        filters.appendChild(button);
      });

      const input = root.querySelector('input');
      input.addEventListener('input',event => {
        query = event.target.value;
        renderList(root,lang);
      });
    }

    renderList(root,lang);
    return true;
  }

  function ensure() {
    scheduled = false;
    render(language());
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(ensure);
  }

  const observer = new MutationObserver(schedule);
  observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
  document.addEventListener('click',event => {
    if (event.target.closest('.language-switch')) setTimeout(schedule,80);
  });
  schedule();
})();
