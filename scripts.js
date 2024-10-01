document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const inputItem = document.getElementById("item-id");
  const itemList = document.querySelector(".item-list");
  const alert = document.querySelector(".alert");

  form.onsubmit = function(event) {
    event.preventDefault();
    const inputValue = inputItem.value.trim();
    if (inputValue) {
      if (!itemList.querySelector('.items span').textContent) {
        itemList.querySelector('.items span').textContent = inputValue;
        itemList.classList.remove("hide");
      } else {
        const newItem = document.createElement("li");
        newItem.classList.add("items");
        newItem.innerHTML = `
          <div class="checkbox">
            <img src="assets/icons/check.svg" alt="">
          </div>
          <div class="item">
            <span>${inputValue}</span>
          </div>
          <div class="item-delete flex flex-centralized">
            <img src="assets/icons/trash.svg" alt="Delete">
          </div>
        `;
        itemList.appendChild(newItem);
      }
      inputItem.value = "";
    }
  };

  itemList.addEventListener("click", function(event) {
    if (event.target.closest(".item-delete")) {
      const item = event.target.closest(".items");
      itemList.removeChild(item);
      if (!itemList.querySelector('.items')) {
        itemList.classList.add("hide");
      }
      showAlert();
    }
  
    if (event.target.classList.contains("checkbox") || event.target.parentNode.classList.contains("checkbox")) {
      const checkbox = event.target.classList.contains("checkbox") ? event.target : event.target.parentNode;
      checkbox.classList.toggle("checked");
      const svg = checkbox.querySelector('img');
      svg.style.display = svg.style.display === 'block' ? 'none' : 'block';
    }
  });

  function showAlert() {
    alert.classList.remove("hide");
    setTimeout(() => {
      alert.classList.add("hide");
    }, 3000);
  }
});
