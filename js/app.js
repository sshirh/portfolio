// Simple renderer for projects.json
async function loadProjects() {
  try {
    const res = await fetch('data/projects.json', {cache:'no-store'});
    const list = await res.json();
    const grid = document.getElementById('project-grid');
    grid.innerHTML = '';
    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'bg-white border border-auburnBlue/10 rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-md transition-shadow';
      const tags = (p.tags || []).map(t => `<span class="px-2 py-0.5 rounded bg-white/10 text-xs">${t}</span>`).join(' ');
      const links = (p.links || []).map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-sm hover:text-[#00ADB5]">${l.label}<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z"/><path d="M5 5h5V3H3v7h2V5Z"/></svg></a>`).join('');
      card.innerHTML = `
        <div class="flex-1">
          <h3 class="font-semibold text-lg">${p.title}</h3>
          <p class="text-sm text-white/60">${p.subtitle || ''}</p>
          <p class="mt-3 text-sm text-white/80">${p.description || ''}</p>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">${tags}</div>
        <div class="mt-4 flex flex-wrap gap-4">${links}</div>
      `;
      grid.appendChild(card);
    });
  } catch (e) {
    console.error(e);
    document.getElementById('project-grid').innerHTML = '<p class="text-white/70">Failed to load projects.</p>';
  }
}
document.addEventListener('DOMContentLoaded', loadProjects);
