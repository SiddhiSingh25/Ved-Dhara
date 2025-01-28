// let buttonHandle = document.querySelectorAll(".btn-link");
// let collapse = document.querySelectorAll(".collapse");

// buttonHandle.forEach((elm) => {
//     console.log(elm.childNodes)
//     elm.addEventListener("click", (e) => {
//         console.log(e)
//         elm.style.background = "yellow";
//     })
// });


// console.log(buttonHandle)




//  const collapseButton = document.querySelector(".btn-select");
// const collapseContent = document.querySelector(".collapse");
// const arrowIcon = document.querySelector(".arrow-down-icon");

// collapseButton.addEventListener("click", () => {
//   const isCollapsed = collapseContent.classList.toggle("show");
//   console.log(isCollapsed)
//   console.log(arrowIcon)
//   // Toggle the rotation for the arrow icon
//   if (isCollapsed) {
//     arrowIcon.classList.add("rotate");
//   } else {
//     arrowIcon.classList.remove("rotate");
//   }
// });

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