const unselect = () => {
  const selected = document.querySelectorAll(".active");
  selected.forEach((item) => {
    item.classList.remove("active");
  });
};

const handleClick = (e) => {
  const marker = e.target.closest(".marker");
  if (marker) {
    if (marker.classList.contains("active")) {
      unselect();
      return;
    } else {
      unselect();
      marker.classList.add("active");
      return;
    }
  }
  unselect();
};

document.onclick = handleClick;
