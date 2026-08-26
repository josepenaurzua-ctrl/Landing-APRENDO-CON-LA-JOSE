document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
