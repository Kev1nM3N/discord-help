function openMenu() {
    // keep the 'open' classes, remove the 'closed' classes
    document.body.classList.add("menu--open");
    document.body.classList.remove("menu--close");
  }
  
  function closeMenu() {
    // keep the 'closed' classes, remove the 'open' classes
    document.body.classList.remove("menu--open");
    document.body.classList.add("menu--close");
  }