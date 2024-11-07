import { Popover } from "./Popover";
const popoverButton = document.querySelector(".popover_button");
const popover = new Popover(popoverButton);
popoverButton.addEventListener("click", () => {
  popover.togglePopover()
});