//your code here
document.addEventListener("DOMContentLoaded", function () {
    const parent = document.getElementById("parent");
    let draggedItem = null;

    // Add drag event listeners to all draggable elements
    document.querySelectorAll(".image").forEach(item => {
        item.addEventListener("dragstart", function (event) {
            draggedItem = this;
            event.dataTransfer.effectAllowed = "move";
            setTimeout(() => this.classList.add("selected"), 0);
        });

        item.addEventListener("dragend", function () {
            setTimeout(() => this.classList.remove("selected"), 0);
            draggedItem = null;
        });

        item.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        item.addEventListener("drop", function (event) {
            event.preventDefault();
            if (draggedItem !== this) {
                let parent = this.parentNode;
                let children = Array.from(parent.children);
                let draggedIndex = children.indexOf(draggedItem);
                let droppedIndex = children.indexOf(this);

                if (draggedIndex > droppedIndex) {
                    parent.insertBefore(draggedItem, this);
                } else {
                    parent.insertBefore(draggedItem, this.nextSibling);
                }
            }
        });
    });
});
