window.addEventListener("load", () => {
  Swal.fire({
    title: "Would you like to play a love song?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#ff7e5f",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, please!",
    cancelButtonText: "No, thanks",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animateMessage();
    } else {
      animateMessage();
    }
  });
});

function animateMessage() {
  const message = document.querySelector(".message");
  message.classList.add("animated");
}

document.getElementById("replay").addEventListener("click", () => {
  document.querySelector(".song").play();
  animateMessage();
});
