document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelector('.animate-title');
  console.log(el)
  console.log(el.innerHTML.trim());
  const str = el.innerHTML.trim();

  for (let c of str) {
    console.log(`<span class="char>${c}</span>`);
  }
})