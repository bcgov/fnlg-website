/*
 * === MOBILE NAV ========================================
 * handles the visibility, functionality, and accessibility concerns for the
 * primary hamburger navigation
 */
document.addEventListener('DOMContentLoaded', () => {
  const navBtn = document.getElementById("navBtn");
  const navCloseBtn = document.getElementById("navCloseBtn");
  const primaryNav = document.getElementById("primaryNav");
  const listItems = primaryNav.querySelectorAll("li a");

  function openNavigation() {
    navBtn.setAttribute("aria-expanded", "true");
    primaryNav.classList.remove("hidden");
  }

  function closeNavigation() {
    navBtn.setAttribute("aria-expanded", "false");
    primaryNav.classList.add("hidden");
  }

  function toggleNavigation() {
    const open = navBtn.getAttribute("aria-expanded");
    open === "false" ? openNavigation() : closeNavigation();      
  }

  function checkScreenWidth() {
    setTimeout(() => {
      const pageWidth = window.innerWidth;
      if (pageWidth >= 768) {
        openNavigation();
      } else {
        closeNavigation();
      }
    }, 10);
  }

  // Closes an open primaryNav if a user tabs away from the last anchor element in the list.
  function handleBlur() {
    const navList = event.currentTarget.closest(".header__nav__list");
    if (!event.relatedTarget || !navList.contains(event.relatedTarget)) {
      closeNavigation();
    }
  }

  navBtn.addEventListener("click", toggleNavigation);
  navCloseBtn.addEventListener("click", closeNavigation);
  
  listItems.forEach(item => {
    item.addEventListener("click", closeNavigation);
  });

  screen.orientation.addEventListener("change", (event) => {
    checkScreenWidth();
  });

  // Add event to the last item in the nav list to trigger the primaryNav to close if the user tabs out of the primaryNav
  listItems[listItems.length - 1].addEventListener("blur", handleBlur);

  // Close the primaryNav if a user presses the escape key
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      navBtn.focus();
      closeNavigation();
    }
  });
})