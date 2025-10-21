const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;

    // Close all other items
    document.querySelectorAll(".accordion-item").forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });

    // Toggle the selected item
    accordionItem.classList.toggle("active");
  });
});
