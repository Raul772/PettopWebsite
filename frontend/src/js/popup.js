
export default function show(){
  const modal = document.querySelector("[modal-popup]");
  modal.classList.remove("d-none");
  modal.style.position = "absolute";
  modal.style.top = "0";
}