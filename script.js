document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.querySelector('.search-icon');
  const searchInput = document.querySelector('.search-input');
  const searchSelect = document.querySelector('.search-select');

  searchIcon.addEventListener('click', () => {
    const category = searchSelect.value;
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for "${query}" in category "${category}"`);
    } else {
      alert('Please enter a search term');
    }
  });

  searchSelect.addEventListener('change', () => {
    console.log('Category changed to:', searchSelect.value);
  });

  const pannelAll = document.querySelector('.pannel-all');
  const pannelOps = document.querySelector('.pannel-ops');

  pannelAll.addEventListener('click', () => {
    if (pannelOps.style.display === 'block') {
      pannelOps.style.display = 'none';
    } else {
      pannelOps.style.display = 'block';
    }
  });

  const backToTop = document.querySelector('.foot-pannel1');
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
