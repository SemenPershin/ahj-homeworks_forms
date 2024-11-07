export class Popover {
    constructor(popoverButton) {
        this.popoverButton = popoverButton;

        this.statusPopover = ["open", "close"];
        this.currentStatus = "close";
    }

    togglePopover() {
        if(this.currentStatus == this.statusPopover[0]) {
            this.closePopover();
        } else {
            this.openPopover();
        }
    }

    openPopover() {
        this.currentStatus = this.statusPopover[0];

        this.popoverBody = document.createElement("div");
        this.popoverTitle = document.createElement("div");
        this.popoverText = document.createElement("div");

        document.body.append(this.popoverBody);
        this.popoverBody.append(this.popoverTitle);
        this.popoverBody.append(this.popoverText);

        this.popoverBody.classList.add("popover_body");
        this.popoverTitle.classList.add("popover_title");
        this.popoverText.classList.add("popover_text");

        this.popoverTitle.textContent = "Popover title";
        this.popoverText.textContent = "And here's some amazing content. It's very engaging. Right?";

        this.popoverBodyPosition = this.popoverBody.getBoundingClientRect();
        this.parentPosition = this.popoverButton.getBoundingClientRect();

        this.popoverBody.style.left = `${0}px`;
        this.popoverBody.style.top = `${-this.popoverBodyPosition.height / 2 - this.parentPosition.height / 2 - 10}px`

    }

    closePopover() {
        this.currentStatus = this.statusPopover[1];
        this.popoverBody.remove();
    }
}