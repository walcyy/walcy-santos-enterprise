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

  function applyTechnologyFilter() {
    const groups = document.querySelectorAll('.technology-group');
    if (!groups.length) return false;

    groups.forEach((group) => {
      const items = [...group.querySelectorAll('.technology-item')];
      let visibleCount = 0;

      items.forEach((item) => {
        const name = item.querySelector('.technology-copy strong')?.textContent || '';
        const keep = allowed.has(normalize(name));
        item.style.display = keep ? '' : 'none';
        if (keep) visibleCount += 1;
      });

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
