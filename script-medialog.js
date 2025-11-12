// SCROLL-TO-TOP ELEMENT
// (found a way to do it with pure css but leaving here for future ref)

// // Get the button:
let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// } 

// //on-click function 
// // mybutton.addEventListener("click",topFunction)

// GALLERY CAPTION TOGGLE

// getting container element
const favouritesContainer = document.querySelector(".favourites-container")

// checking for clicks in container
favouritesContainer.addEventListener("click", (event) => {

if (event.target.matches(".caption-button")){
   console.log(event.target);
  //  prevents the a element from acting like a standard link by default
   event.preventDefault();
  //  going into the corrisponding container to where you clicked then specifying to the caption
   const caption = event.target.closest(".gallery-img-wrapper").querySelector(".caption-collapse");
 
  // TOGGLE FUNCTION
   if (!caption.classList.contains("expanded")){
    // adds expanded class
    caption.classList.add("expanded");
   } 
   else {
    // removes expanded class
    caption.classList.remove("expanded");
   }
  }
})



