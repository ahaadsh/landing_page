/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables (allsections,navbar_ls)
 * and
 * Building the navbar for sections
 */

let allsections = document.querySelectorAll("section");
navbar_ls = document.getElementById("navbar__list");

function navigation() {
  //loop for every section
  allsections.forEach((getsection) => {
    navbar_ls.insertAdjacentHTML(
      "beforebegin",
      `<li> <a class="menu__link" href="#${getsection.id}"> ${getsection.dataset.nav} </a> </li>`
    );
  });
}
navigation();

// Add class 'active' to section when near top of viewport
/*
TIPS:
first, we need to loop over the sections
1then we need to calculate the position of each section using the getboundingclientrect function
2then we need to compare that position with a value like 200 and -200
if the section position is between these values then we need to add a class that represents the 
active sections like (adding the class your-active-class to the active section)
if not then we need to remove the class from the section.
*/

// we need to calculate the position of each section using the getboundingclientrect function
function boundingsection(sections) {
  return sections.getBoundingClientRect().top;
}

//'active' function
function ActiveClass() {
  allsections.forEach((sections) => {
    let positionvlaue = boundingsection(sections);
    if (positionvlaue > -350 && positionvlaue <= 350) {
      return sections.classList.add("active-class");
    } else {
      return sections.classList.remove("active-class");
    }
  });
}

// Scrolling top. when click go to top
let topbutton = document.getElementById("topbutton");
topbutton.addEventListener("click", scrollFunction);
window.onscroll = function () {
  scrollFunction();
};

// when scroll to section change to "display = block;
// and when go top the page change to " display = none;"
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", ActiveClass);
