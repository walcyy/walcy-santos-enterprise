(() => {
  const allowed = new Set([
    'javascript',
    'java',
    'delphi',
    'node.js',
    'mysql',
    'firebird',
    'sql',
    'aws cloud',
    'oracle cloud',
    'suporte técnico',
    'technical support',
    'infraestrutura',
    'infrastructure',
    'infraestrutura de ti',
    'it infrastructure'
  ]);

  const normalize = (value = '') => value.trim().toLowerCase();

  const categoryIcons = [
    `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    `<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="7" ry="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 18h9.7a4.1 4.1 0 0 0 .6-8.15A5.8 5.8 0 0 0 6.7 8.6 4.7 4.7 0 0 0 7.2 18Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="6" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="18" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 7.2 10.8 16M16 7.2 13.2 16M8.2 6h7.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
  ];

  const brandIcons = {
    firebird: `<svg class="tech-logo tech-logo-firebird" viewBox="0 0 48 48" aria-hidden="true"><path d="M29.8 5.5c1.3 6.3-2.4 8.9-4.5 11.3-2.3 2.7-1.8 5.4.6 7.1-5.8-.6-8.7 3.5-8.7 7.8 0 5.1 3.9 9.1 9.2 9.1 6.7 0 11.6-5 11.6-11.9 0-8-5.8-13.8-8.2-23.4Z" fill="#ff5f45"/><path d="M25.5 21.4c.4 3-2.2 4.8-3.2 6.5-1.7 2.8-.3 6.4 3.4 6.4 3.4 0 5.7-2.5 5.7-5.8 0-3.8-2.7-6.1-5.9-7.1Z" fill="#ffc247"/></svg>`,
    'aws cloud': `<svg class="tech-logo tech-logo-aws" viewBox="0 0 48 48" aria-hidden="true"><text x="7" y="25" class="aws-word">aws</text><path class="aws-smile" d="M10 31c8.2 5 18.8 5.4 27.6.7M33.5 30.2l4.6 1.5-1.7 4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'oracle cloud': `<svg class="tech-logo tech-logo-oracle" viewBox="0 0 48 48" aria-hidden="true"><rect x="5.5" y="13" width="37" height="22" rx="11" class="oci-ring"/><text x="24" y="28.4" class="oci-word" text-anchor="middle">OCI</text></svg>`
  };

  function ensureStyles() {
    if (document.getElementById('technology-refinement-styles')) return;
    const style = document.createElement('style');
    style.id = 'technology-refinement-styles';
    style.textContent = `
      .technology-group-index{width:34px!important;height:34px!important;border-radius:10px!important;color:#78e4ff!important;background:linear-gradient(145deg,rgba(73,215,255,.13),rgba(24,120,255,.05))!important;box-shadow:inset 0 0 18px rgba(73,215,255,.04)}
      .technology-group-index svg{width:17px;height:17px;display:block}
      .technology-symbol.tech-refined-brand{overflow:hidden}
      .technology-symbol.tech-refined-brand .technology-code{display:none!important}
      .technology-symbol.tech-refined-brand .tech-logo{width:30px!important;height:30px!important;display:block;filter:none!important;transform:none!important}
      .technology-symbol.tech-refined-brand .tech-logo-firebird{width:27px!important;height:27px!important;filter:drop-shadow(0 0 8px rgba(255,95,69,.28))!important}
      .technology-symbol.tech-refined-brand .aws-word{fill:#f3f8fc;font:700 15px Arial,sans-serif;letter-spacing:-1px}
      .technology-symbol.tech-refined-brand .aws-smile{stroke:#ff9900;stroke-width:2.2}
      .technology-symbol.tech-refined-brand .tech-logo-aws{width:31px!important;height:31px!important}
      .technology-symbol.tech-refined-brand .oci-ring{fill:none;stroke:#ff4d4d;stroke-width:2.8}
      .technology-symbol.tech-refined-brand .oci-word{fill:#f8fbff;font:800 9px Arial,sans-serif;letter-spacing:.4px}
      .technology-symbol.tech-refined-brand .tech-logo-oracle{width:31px!important;height:31px!important}
      .technology-group[data-visible-count="3"] .technology-item.tech-visible-last{grid-column:1 / -1}
      @media(max-width:480px){.technology-group[data-visible-count="3"] .technology-item.tech-visible-last{grid-column:auto}}
    `;
    document.head.appendChild(style);
  }

  function refineCategoryIcons(groups) {
    groups.forEach((group, index) => {
      const badge = group.querySelector('.technology-group-index');
      if (badge && categoryIcons[index]) {
        badge.innerHTML = categoryIcons[index];
        badge.setAttribute('aria-hidden', 'true');
      }
    });
  }

  function refineBrandIcon(item, normalizedName) {
    const svg = brandIcons[normalizedName];
    if (!svg) return;
    const symbol = item.querySelector('.technology-symbol');
    if (!symbol) return;
    symbol.classList.add('tech-refined-brand');
    symbol.innerHTML = svg;
  }

  function applyTechnologyFilter() {
    const groups = [...document.querySelectorAll('.technology-group')];
    if (!groups.length) return false;

    ensureStyles();
    refineCategoryIcons(groups);

    groups.forEach((group) => {
      const items = [...group.querySelectorAll('.technology-item')];
      const visibleItems = [];

      items.forEach((item) => {
        item.classList.remove('tech-visible-last');
        item.style.gridColumn = '';
        const name = item.querySelector('.technology-copy strong')?.textContent || '';
        const normalizedName = normalize(name);
        const keep = allowed.has(normalizedName);
        item.style.display = keep ? '' : 'none';
        if (keep) {
          visibleItems.push(item);
          refineBrandIcon(item, normalizedName);
        }
      });

      const visibleCount = visibleItems.length;
      group.dataset.visibleCount = String(visibleCount);
      if (visibleCount === 3) visibleItems[2]?.classList.add('tech-visible-last');

      const counter = group.querySelector('header small');
      if (counter) {
        const isEnglish = /technolog/i.test(counter.textContent || '') && !/tecnolog/i.test(counter.textContent || '');
        counter.textContent = `${String(visibleCount).padStart(2, '0')} ${isEnglish ? 'TECHNOLOGIES' : 'TECNOLOGIAS'}`;
      }

      group.style.display = visibleCount ? '' : 'none';
    });

    return true;
  }

  let attempts = 0;
  const timer = setInterval(() => {
    attempts += 1;
    if (applyTechnologyFilter() || attempts >= 50) clearInterval(timer);
  }, 100);

  document.addEventListener('click', (event) => {
    if (event.target.closest('.language-switch')) {
      setTimeout(applyTechnologyFilter, 120);
      setTimeout(applyTechnologyFilter, 350);
    }
  });
})();
