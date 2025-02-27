function openTab(event, tabName) {
  let i, tabContent, tabLinks;

  // Get all elements with class="tab-content" and hide them
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }
  // Get all elements with class="tab-links" and remove the class "active"
  tabLinks = document.getElementsByClassName("tab-links");

  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.add("active");
    tabLinks[i].classList.remove("active");
    
  }


  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
  // Add the active class to the current/clicked tab and remove the "active" class from the previous/open tab

  
}

// by default, show the first tab;
document.getElementById("tab1").classList.add("active");
document.querySelector(".tab-links").classList.add("active")