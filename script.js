const collapseButtons = document.querySelectorAll(".btn-link");

collapseButtons.forEach((button) => {
  const targetId = button.getAttribute("data-target"); // Get the target ID from the data-target attribute
  const targetContent = document.querySelector(targetId);
  const arrowIcon = button.querySelector(".arrow-down-icon");

  button.addEventListener("click", () => {
    const isCollapsed = targetContent.classList.toggle("show");

    // Toggle the rotation for the arrow icon
    if (isCollapsed) {
      arrowIcon.classList.add("rotate");
    } else {
      arrowIcon.classList.remove("rotate");
    }
  });
});



