const unselect = () => {
  const selected = document.querySelector(".active");
  selected.classList.remove("active");
};

const handleClick = (e) => {
  const marker = e.target.closest(".marker");
  if (marker) {
    if (marker.classList.contains("active")) {
      unselect();
      return
    } else {
      marker.classList.add("active");
      return;
    }
  }
  unselect();
};

document.onclick = handleClick;
