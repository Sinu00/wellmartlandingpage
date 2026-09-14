export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function onScrollTo(id) {
  return (e) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToId(id);
  };
}
