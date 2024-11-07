/**
 * @jest-environment jsdom
 */

import { Popover } from "./Popover";

test("Всплывающее окно создается корректно", () => {
  const div = document.createElement("div");
  document.body.append(div);
  div.classList.add("popover_button");
  const popover = new Popover(document.querySelector(".popover_button"));

  popover.openPopover();

  expect(popover.popoverTitle.textContent).toEqual("Popover title");
})
