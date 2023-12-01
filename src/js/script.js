// Navbar Active Pelanggan
window.addEventListener('load', function () {
  var nav = document.querySelector('nav');
  var sections = document.querySelectorAll('body');
  var currentSectionIndex = 0;
  var isNavVisible = false;

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var rect = section.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom > 0) {
      currentSectionIndex = i;
      break;
    }
  }

  var currentSectionLink = document.querySelector('nav div[href="#' + sections[currentSectionIndex].id + '"]');

  var rect = currentSectionLink.getBoundingClientRect();

  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    currentSectionLink.classList.add('active-pelanggan');
  } else {
    currentSectionLink.classList.remove('active-pelanggan');
  }

  // tambahan kode untuk menghapus class 'active'
  for (var i = 0; i < sections.length; i++) {
    var sectionLink = document.querySelector('nav div[href="#' + sections[i].id + '"]');

    if (i !== currentSectionIndex) {
      sectionLink.classList.remove('active-pelanggan');
    }
  }

  if (window.scrollY > 100) {
    if (!isNavVisible) {
      nav.style.display = 'block';
      isNavVisible = true;
    }
  } else {
    if (isNavVisible) {
      nav.style.display = 'none';
      isNavVisible = false;
    }
  }
});

// Navbar Active Admin
window.addEventListener('load', function () {
  var nav = document.querySelector('aside');
  var sections = document.querySelectorAll('body');
  var currentSectionIndex = 0;
  var isNavVisible = false;

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var rect = section.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom > 0) {
      currentSectionIndex = i;
      break;
    }
  }

  var currentSectionLink = document.querySelector('aside div[href="#' + sections[currentSectionIndex].id + '"]');

  var rect = currentSectionLink.getBoundingClientRect();

  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    currentSectionLink.classList.add('active-admin');
  } else {
    currentSectionLink.classList.remove('active-admin');
  }

  // tambahan kode untuk menghapus class 'active'
  for (var i = 0; i < sections.length; i++) {
    var sectionLink = document.querySelector('aside div[href="#' + sections[i].id + '"]');

    if (i !== currentSectionIndex) {
      sectionLink.classList.remove('active-admin');
    }
  }

  if (window.scrollY > 100) {
    if (!isNavVisible) {
      nav.style.display = 'block';
      isNavVisible = true;
    }
  } else {
    if (isNavVisible) {
      nav.style.display = 'none';
      isNavVisible = false;
    }
  }
});

// Toggle class active navbar
const navbarNav = document.querySelector('#navbar');

document.querySelector('#navbar-button').onclick = (e) => {
  navbarNav.classList.toggle('hidden');
  e.preventDefault();
};

// Toggle class active sidebar
const sidebarNav = document.querySelector('#sidebar');

document.querySelector('#sidebar-button').onclick = (e) => {
  sidebarNav.classList.toggle('-translate-x-full');
  e.preventDefault();
};