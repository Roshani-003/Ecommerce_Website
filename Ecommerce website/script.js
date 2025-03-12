function searchAndRedirect(event) {
    event.preventDefault(); // Prevent form submission reload
    
    let input = document.getElementById("searchBox").value.toLowerCase().trim();
    if (input === "") return; // Don't do anything if input is empty
    
    let products = document.querySelectorAll(".product-item");
    let found = false;
    
    products.forEach(product => {
      let productName = product.getAttribute("data-name").toLowerCase();
      if (productName.includes(input)) {
        product.style.display = "block"; // Show matching products
        found = true;
      } else {
        product.style.display = "none"; // Hide non-matching products
      }
    });
  
    if (found) {
      window.location.hash = "#explore-store"; // Redirect to Explore Our Store section
    } else {
      alert("Product not found!"); // Notify user if no matching product is found
    }
  }
  