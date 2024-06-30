document.addEventListener("DOMContentLoaded", function() {
    const tagContainer = document.getElementById("tagContainer");

    tagContainer.addEventListener("click", function(event) {
        const target = event.target.closest(".tag");
        if (!target) return;

        event.preventDefault();
        const selectedTag = target.dataset.tag;

        // Toggle active class
        target.classList.toggle("active");

        filterItems();
    });

function filterItems() {
    const activeTags = Array.from(document.querySelectorAll(".tag.active"))
                             .map(tag => tag.dataset.tag);

    const itemsToDisplay = document.querySelectorAll("#filteredItems > div");
    itemsToDisplay.forEach(item => {
        const itemTags = item.dataset.tags.split(",");
        const matches = activeTags.length === 0 || activeTags.some(tag => itemTags.includes(tag));
        item.style.display = matches ? "block" : "none";
    });
}

// Initially display all items
filterItems();
});