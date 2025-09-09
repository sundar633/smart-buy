window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 3000); // total splash time (2s stay + 1s zoom)
});

// ✅ Always get product name correctly
function getProductName(container) {
  return (
    container.querySelector(".product-name-highlight")?.innerText?.trim() ||
    container.querySelector(".popup-text strong")?.innerText?.trim() ||
    container.querySelector("h2")?.innerText?.trim() ||
    container.querySelector("h4")?.innerText?.trim() ||
    ""
  );
}

  function selectItem(category, element) {
  // Vibrate when item is clicked (only on supported devices)
  if ("vibrate" in navigator) {
    navigator.vibrate([100, 50, 100]); // vibrate → pause → vibrate
  }

  // Highlight the selected item
  document.querySelectorAll(".item").forEach(item => {
    item.classList.remove("active");
  });
  if (element) {
    element.classList.add("active");
  }

  // Log selected category
  console.log("Selected category:", category);
}



// Toggle profile dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.closest('.profile')) {
    const dropdown = document.getElementById("profileDropdown");
    if (dropdown) dropdown.style.display = "none";
  }
}
const items = ["clothes", "slippers", "mobiles", "bags", "fruits", "vegetables"];
let index = 0;
const searchBox = document.getElementById("searchBox");

setInterval(() => {
  index = (index + 1) % items.length;
  const newPlaceholder = `Search for ${items[index]}`;
  
  searchBox.classList.add("animating");
  searchBox.setAttribute("placeholder", newPlaceholder);
  
  setTimeout(() => {
    searchBox.classList.remove("animating");
  }, 400);
}, 3000); // every 2 seconds
const searchInput = document.getElementById("searchBox");
const suggestionsBox = document.getElementById("suggestions");
// ✅ Collect all product names (DOM + items.js)
function getAllProducts() {
  const domProducts = Array.from(document.querySelectorAll(".product-name-highlight")).map(p => {
    const section = p.closest(".item-content")?.id || "unknown";
    return {
      name: p.innerText.trim(),
      section,
      element: p.closest(".product-card"),
      image: p.closest(".product-card")?.querySelector("img")?.src || "main/default.png"
    };
  });

  // 🔥 Flatten brandProducts from items.js
  const dataProducts = Object.entries(brandProducts || {}).flatMap(([brand, products]) =>
    products.map(p => ({
      name: p.name,
      section: brand,
      element: null,   // not in DOM yet
      image: p.image || "main/default.png"
    }))
  );

  return [...domProducts, ...dataProducts];
}

let allProducts = getAllProducts();

searchInput.addEventListener("input", () => {
  allProducts = getAllProducts(); // refresh list
  const query = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (query.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = allProducts.filter(p => p.name.toLowerCase().includes(query));

  if (matches.length === 0) {
    suggestionsBox.innerHTML = "<div>No results found</div>";
  } else {
    matches.forEach(product => {
      const imgSrc = product.image || "main/default.png";

      const div = document.createElement("div");
      div.classList.add("suggestion-item");
      div.innerHTML = `
        <img src="${imgSrc}" alt="${product.name}" />
        <span>${product.name}</span>
        <small style="color:#888;margin-left:auto;">${product.section}</small>
      `;

      div.addEventListener("click", () => {
        searchInput.value = product.name;
        suggestionsBox.style.display = "none";

        if (product.element) {
          // ✅ If product exists in DOM → scroll + open popup
          const sectionTab = Array.from(document.querySelectorAll(".item"))
            .find(i => i.getAttribute("onclick")?.includes(product.section));
          if (sectionTab) sectionTab.click();

          setTimeout(() => {
            product.element.scrollIntoView({ behavior: "smooth", block: "center" });
            setTimeout(() => {
              const trigger = product.element.querySelector(".popup-trigger");
              if (trigger) trigger.click();
            }, 200);
          }, 200);
        } else {
          // ✅ If product is from items.js → open full detail popup directly
          const found = (brandProducts[product.section] || []).find(p => p.name === product.name);

          if (found) {
            const imageViewer = document.getElementById('imageViewer');
            const imageGallery = document.getElementById('imageGallery');
            const productDetails = document.getElementById('productDetails');

            // Show detailed viewer
            imageViewer.style.display = 'flex';

            // Populate image gallery
            imageGallery.innerHTML = found.images.map(img =>
              `<img src="${img}" class="gallery-img" style="height: 200px; cursor: pointer;">`
            ).join('');

            // Populate full product details
            productDetails.innerHTML = `
              <h2>${found.name}</h2>
              <div class="price-box">${found.price}</div>

              <div class="options-row" style="display:flex; gap:20px;">
                <div class="option-column"><h3>Storage</h3><div>${found.storage || "-"}</div></div>
                <div class="option-column"><h3>Color</h3><div>${found.color || "-"}</div></div>
              </div>

              <div style="margin-top:10px;">
                <strong>Product Highlights</strong>
                ${(found.features || []).map(f => `
                  <div style="display:flex; align-items:center; font-size:14px; margin-top:5px;">
                    <img src="${f.icon}" width="15" style="margin-right:8px;">
                    <div>${f.text}</div>
                  </div>
                `).join('')}
              </div>

              <div class="spec-desc-container">
                <div class="spec-box">
                  <h3>Specifications</h3>
                  <ul>${found.specifications.map(spec => `<li>${spec}</li>`).join('')}</ul>
                </div>
                <div class="desc-box">
                  <h3>Description</h3>
                  <ul>${found.description.map(desc => `<li>${desc}</li>`).join('')}</ul>
                </div>
              </div>

              <div class="action-buttons">
                <button class="cart-btn">Add to Cart</button>
                <button class="buy-btn">Buy Now</button>
              </div>
            `;
          }
        }
      });

      suggestionsBox.appendChild(div);
    });
  }

  suggestionsBox.style.display = "block";
});

// ✅ Close suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    suggestionsBox.style.display = "none";
  }
});

// ✅ Enter key → open first suggestion
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const firstSuggestion = suggestionsBox.querySelector(".suggestion-item");
    if (firstSuggestion) firstSuggestion.click();
  }
});

// home buuton 
function goToHomeSection() {
    
    const mobilesItem = document.querySelector('.items-row .item');

    if (mobilesItem) {
      
      selectItem('mobiles', mobilesItem);

      
      mobilesItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }





// Get user location using geolocation + OpenStreetMap
function getUserLocation() {
  const locationDiv = document.getElementById('location');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
        .then(res => res.json())
        .then(data => {
          const village = data.address.village || data.address.town || data.address.city || "Your Area";
          const state = data.address.state || "";
          locationDiv.innerText = `${village}, ${state}`;
        })
        .catch(() => {
          locationDiv.innerText = "Location unavailable";
        });
    }, () => {
      locationDiv.innerText = "Permission denied";
    });
  } else {
    locationDiv.innerText = "Geolocation not supported";
  }
}

function selectItem(itemName, element) {
  document.querySelectorAll('.item').forEach(item => item.classList.remove('active'));
  element.classList.add('active');

  // Hide all
  document.querySelectorAll('.item-content').forEach(section => {
    section.style.display = 'none';
    section.classList.remove('section-animate'); // Remove old animation class
  });

  // Show selected with animation
  const selectedContent = document.getElementById(itemName);
  if (selectedContent) {
    selectedContent.style.display = 'block';
    selectedContent.classList.add('section-animate'); // 🎉 Animate it
  } else {
    const coming = document.getElementById('comingSoon');
    coming.style.display = 'block';
    coming.classList.add('section-animate');
  }
}


getUserLocation(); // Call on load

function initSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const totalSlides = slider.children.length;
  let currentSlide = 0;

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }, 3000);
}
const blowRows = document.querySelectorAll(".blow-row");

let isSyncingScroll = false;
blowRows.forEach((row, index) => {
  row.addEventListener("scroll", () => {
    if (isSyncingScroll) return;
    isSyncingScroll = true;

    const scrollLeft = row.scrollLeft;
    blowRows.forEach((r, i) => {
      if (i !== index) r.scrollLeft = scrollLeft;
    });

    setTimeout(() => isSyncingScroll = false, 10);
  });
});

const airtelScroll = document.getElementById('airtelScroll');
  let scrollAmount = 0;

  setInterval(() => {
    scrollAmount += 1;
    airtelScroll.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });

    // Reset scroll when reached end
    if (scrollAmount >= airtelScroll.scrollWidth - airtelScroll.clientWidth) {
      scrollAmount = 0;
    }
  }, 30); // smaller = faster scroll
// Initialize all sliders by ID
[
  "slider",          // mobiles
  "slider-clothes",  // Clothes
  "slider-Fashion",    // Shoes
  "slider-Slippers",     // Bags
  "slider-Groceries",   // Fruits
  "slider-Beauty",  // Veggies
  "slider-Fresh",
  "slider-Foods",
  "slider-Home"   // Laptop
].forEach(initSlider);
const names = ["PRICE CRASH", "Starting From $20"];
  let current = 0;
  const textElement = document.getElementById("changingText");

  function updateText() {
    current = (current + 1) % names.length;

    // Reset animation
    textElement.style.animation = "none";
    void textElement.offsetWidth; // force reflow
    textElement.textContent = names[current];

    // Re-apply animation
    textElement.style.animation = "slideZoomIn 0.5s ease forwards";
  }

  setInterval(updateText, 3000);
  
  
const zanTrack = document.querySelector('.zan-track');
  const zanSlides = document.querySelectorAll('.zan-track img');
  let zanIndex = 0;

  setInterval(() => {
    zanIndex++;
    if (zanIndex >= zanSlides.length) {
      zanIndex = 0;
    }
    zanTrack.style.transform = `translateX(-${zanIndex * 100}%)`;
  }, 3000);
  const boreTitles = ["Food Lovers", "Veg Lovers", "Nonveg Lovers"];
const boreImages = [
  "foods/3.png",
  "foods/1.png",
  "foods/2.png"
];

let boreIndex = 0;
const boreTitleElement = document.getElementById("boreTitle");
const boreImageElement = document.getElementById("boreImage");

setInterval(() => {
  boreIndex = (boreIndex + 1) % boreTitles.length;

  // Change text
  boreTitleElement.textContent = boreTitles[boreIndex];
  boreTitleElement.classList.add("bore-animate");

  // Change image
  boreImageElement.src = boreImages[boreIndex];
  boreImageElement.classList.add("bore-animate");

  // Remove animations to reset
  setTimeout(() => {
    boreTitleElement.classList.remove("bore-animate");
    boreImageElement.classList.remove("bore-animate");
  }, 500); // match CSS
}, 3000);
const heading1 = document.querySelector('.changing-heading');
const texts1 = ['Latest Mobile Trends 📱', 'Power Packed Devices ⚡','Pocket Friendly Phones 💰','Stylish Smart Phones 🌟'];
let headingIndex1 = 0;

function animateHeading(text) {
  heading1.innerHTML = ''; 
  [...text].forEach((letter, i) => {
    const span = document.createElement('span');
    span.innerHTML = letter === " " ? "&nbsp;" : letter; // keep spaces visible
    span.style.animationDelay = `${i * 0.08}s`; 
    heading1.appendChild(span);
  });
}

animateHeading(texts1[headingIndex1]);

setInterval(() => {
  headingIndex1 = (headingIndex1 + 1) % texts1.length;
  animateHeading(texts1[headingIndex1]);
}, 3000);

// For .big-heading
const heading2 = document.querySelector('.big-heading');
const texts2 = ['Fresh Daily Groceries 🛒', 'Everyday Kitchen Needs 🍳','Weekly Grocery Basket 🧺','Pantry Staples Stock 🥫'];
let headingIndex2 = 0;

setInterval(() => {
  headingIndex2 = (headingIndex2 + 1) % texts2.length;
  heading2.style.opacity = 0;
  setTimeout(() => {
    heading2.textContent = texts2[headingIndex2];
    heading2.style.opacity = 1;
  }, 500);
}, 2000);
const heading = document.querySelector('.bufalo');
const texts = ['Classic Shirts ✨','Party Dresses 🎉','Classic Jeans 👖','Stylish Blazers 🎩'];
let headingIndex = 0;

setInterval(() => {
  headingIndex = (headingIndex + 1) % texts.length;
  heading.style.opacity = 0;
  setTimeout(() => {
    heading.textContent = texts[headingIndex];
    heading.style.opacity = 1;
  }, 500);
}, 2000);

// For .semi
const heading4 = document.querySelector('.semi');
const texts4 = [' Style Picks ✨',' Trendy Fits 🔥',' Fashion Edit 🌟', ' Shop the Trend 🛍️'];
let headingIndex4 = 0;

setInterval(() => {
  headingIndex4 = (headingIndex4 + 1) % texts4.length;
  heading4.style.opacity = 0;
  setTimeout(() => {
    heading4.textContent = texts4[headingIndex4];
    heading4.style.opacity = 1;
  }, 500);
}, 2000);


document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById('brandPopup');
  const popupContent = document.getElementById('popupContent');
  const closeBtn = document.getElementById('closePopupBtn'); // new ID
  

  const imageViewer = document.getElementById('imageViewer');
  const imageGallery = document.getElementById('imageGallery');
  const productDetails = document.getElementById('productDetails');
  const backToList = document.getElementById('backToList');
  const closeImageViewer = document.getElementById('closeImageViewer');

  // Show popup with product list
  document.querySelectorAll('.brand-square').forEach(el => {
    el.addEventListener('click', () => {
      const brand = el.dataset.brand;
      const products = brandProducts[brand] || [];

      if (products.length === 0) {
        popupContent.innerHTML = `<p>No products available for ${brand}.</p>`;
      } else {
        popupContent.innerHTML = products.slice(0, 8).map((p, index) => `
          <div class="popup-item" data-index="${index}" data-brand="${brand}" style="display: flex; gap: 12px; align-items: center; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 10px; padding: 10px;">
            <img src="${p.image}" class="product-img popup-image" alt="${p.name}">

            <div class="popup-text">
              <div><strong>${p.name}</strong> <span style="font-size: 12px;">(${p.storage || '-'} & ${p.ram || '-'})</span></div>
              <div>${p.brand}</div>
              <div>${p.rating}</div>
              <div>${p.price}</div>
              <div>${p.warranty} Warranty</div>
            </div>
          </div>
        `).join('');
      }

      popup.style.display = 'flex';
    
    });
  });
  

  // Close main popup
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

  // Handle click on popup item to show detailed image viewer
  popupContent.addEventListener('click', (e) => {
    const item = e.target.closest('.popup-item');
    if (!item) return;

    const itemIndex = item.dataset.index;
    const brand = item.dataset.brand;
    const product = brandProducts[brand][itemIndex];

    // Close main popup
    popup.style.display = 'none';

    // Show image viewer
    imageViewer.style.display = 'flex';

    // Populate image gallery
    imageGallery.innerHTML = product.images.map(img =>
      `<img src="${img}" class="gallery-img" style="height: 200px; cursor: pointer;">`
    ).join('');

    // Fullscreen view on image click
    setTimeout(() => {
      document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', () => {
          const overlay = document.createElement('div');
          overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 99999;
          `;
          overlay.innerHTML = `
            <img src="${img.src}" style="max-width: 90%; max-height: 90%;">
            <button style="position: absolute; top: 20px; right: 30px; font-size: 20px; background: white; border: none;">✕</button>
          `;
          overlay.querySelector('button').onclick = () => overlay.remove();
          document.body.appendChild(overlay);
        });
      });
    }, 50);

    // Product details
   // Product details
productDetails.innerHTML = `
 <h2>${product.name}</h2>

<div class="price-box">${product.price}</div>

<div class="options-row" style="display: flex; gap: 20px;">

  <!-- Storage Dropdown -->
  <!-- Storage Dropdown -->
<div class="option-column">
  <h3>Storage</h3>
  <select id="storage-select" class="value-box storage-select">
    <option value="" disabled selected>Select Storage</option>
    <option value="8">8 GB</option>
    <option value="16">16 GB</option>
    <option value="64">64 GB</option>
    <option value="128">128 GB</option>
  </select>
</div>

<!-- Color Dropdown -->
<div class="option-column">
  <h3>Color</h3>
  <select id="color-select" class="value-box color-select"> 
    <option value="" disabled selected>Select Color</option>
    <option value="white">White</option>
    <option value="black">Black</option>
    <option value="grey">Grey</option>
  </select>
</div>


</div>


<div class="features-row" style="padding-left: 16px;">
  <div style="text-align: center; font-size: 15px; line-height: 1.2;">
    <img src="main/service.png" width="20"><br>
    <span>7 Days Service</span>
  </div>

  <div style="text-align: center; font-size: 15px; line-height: 1.2;">
    <img src="main/cod.png" width="20"><br>
    <span>Cash on Delvery</span>
  </div>

  <div style="text-align: center; font-size: 15px; line-height: 1.2;">
    <img src="main/verified.png" width="20"><br>
    <span>Verified</span>
  </div>
</div>

<!-- Dynamic Features Start -->
<div style="margin-top: 10px;">
<strong>Product Highlights</strong>
  ${(product.features || []).map(f => `
    <div style="display: flex; align-items: center; font-size: 14px; margin-top: 5px;">
      <img src="${f.icon}" width="15" style="margin-right: 8px;">
      <div>${f.text}</div>
    </div>
  `).join('')}
</div>
<!-- Dynamic Features End -->

<div class="spec-desc-container">
  <div class="spec-box">
    <h3>Specifications</h3>
    <ul>${product.specifications.map(spec => `<li>${spec}</li>`).join('')}</ul>
  </div>

  <div class="desc-box">
    <h3>Description</h3>
    <ul>${product.description.map(desc => `<li>${desc}</li>`).join('')}</ul>
  </div>
</div>

<div class="action-buttons">
  <button class="cart-btn">Add to Cart</button>
  <button class="buy-btn">Buy Now</button>
</div>
`;


// Default selected
document.querySelector('#storageOptions .option-box')?.classList.add('selected');
document.querySelector('#colorOptions .color-text-box')?.classList.add('selected');

// Re-bind event listeners AFTER DOM is updated
document.querySelectorAll('#storageOptions .option-box').forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('#storageOptions .option-box').forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
  });
});

document.querySelectorAll('#colorOptions .color-text-box').forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('#colorOptions .color-text-box').forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
  });
});
  });
  
  // Handle storage selection
document.querySelectorAll('#storageOptions .option-box').forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('#storageOptions .option-box').forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
  });
});

// Handle color selection
document.querySelectorAll('#colorOptions .color-text-box').forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('#colorOptions .color-text-box').forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
  });
});


  // Back and close buttons
  backToList.onclick = () => {
    imageViewer.style.display = 'none';
    popup.style.display = 'flex';
  };

  closeImageViewer.onclick = () => {
    imageViewer.style.display = 'none';
  };
});


function openProfilePopup() {
  const profilePopup = document.getElementById('profilePopup');
  
  // Read the same key as login.html writes
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
  const glowContainer = profilePopup.querySelector('.glow-container');
  const quickActions = profilePopup.querySelector('.quick-actions');
  const pastOrders = profilePopup.querySelector('.past-orders');
  const loginPrompt = document.getElementById('login-prompt');

  if (loggedInUser && loggedInUser.name && loggedInUser.mobile) {
    glowContainer.style.display = 'block';
    quickActions.style.display = 'flex';
    pastOrders.style.display = 'block';
    loginPrompt.style.display = 'none';

    document.getElementById('profile-name').textContent = loggedInUser.name;
    document.getElementById('profile-mobile').textContent = loggedInUser.mobile;
    // ✅ Save profile to localStorage (so shop.html can read)
localStorage.setItem("userProfile", JSON.stringify({
  name: loggedInUser.name,
  mobile: loggedInUser.mobile
}));
  } else {
    glowContainer.style.display = 'none';
    quickActions.style.display = 'none';
    pastOrders.style.display = 'none';
    loginPrompt.style.display = 'block';
  }

  profilePopup.style.display = 'flex';
}




function closeProfilePopup() {
  document.getElementById('profilePopup').style.display = 'none';
}
function toggleOptions() {
  const menu = document.getElementById('profileOptions');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
let lastScrollY = window.scrollY;
const bottomNav = document.getElementById("bottomNav");


window.addEventListener("DOMContentLoaded", () => {
  const bottomNav = document.getElementById("bottomNav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY + 5) {
      bottomNav.style.transform = "translateY(100%)"; // hide
    } else if (currentScrollY < lastScrollY - 5) {
      bottomNav.style.transform = "translateY(0)"; // show
    }

    lastScrollY = currentScrollY;
  });
});


function selectItem(category, element) {
  // Step 1: Remove all active and category-based classes
  const allCategories = ['mobiles', 'Clothes', 'Slippers', 'Groceries', 'Beauty', 'Foods', 'Home', 'Fresh'];
  document.querySelectorAll('.item').forEach(item => {
    item.classList.remove('active', ...allCategories);
  });

  // Step 2: Set the clicked item as active and add its category class
  element.classList.add('active', category);

  // Step 3: Hide all item-content sections
  document.querySelectorAll('.item-content').forEach(section => {
    section.style.display = 'none';
    section.classList.remove('section-animate');
  });

  // Step 4: Show selected content (matching ID)
  const selectedContent = document.getElementById(category);
  if (selectedContent) {
    selectedContent.style.display = 'block';
    selectedContent.classList.add('section-animate');
  } else {
    const coming = document.getElementById('comingSoon');
    if (coming) {
      coming.style.display = 'block';
      coming.classList.add('section-animate');
    }
  }

  // 🔥 Step 5: Change header background color (location + search + categories)
  const header = document.getElementById('header-bg'); 
  if (header) {
    header.className = '';        // reset
    header.classList.add(category); // add the selected category class
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Simulate clicking on Mobiles at start
  const defaultItem = document.querySelector('.item[onclick*="mobiles"]');
  if (defaultItem) {
    selectItem('mobiles', defaultItem);
  }
});


document.addEventListener("DOMContentLoaded", () => {

  const banners = document.querySelectorAll(".three-banner-row img");
  const brandSquares = document.querySelectorAll(".brand-square");

  // Map banner index to actual data-brand names
  const bannerBrandMap = {
    0: "Vivo",
    1: "Samsung",
    2: "Poco",
    3: "Mi"
  };

  banners.forEach((img, index) => {
    img.addEventListener("click", () => {
      const brandName = bannerBrandMap[index];
      if (!brandName) return;

      // Find the matching brand square
      const targetBrand = Array.from(brandSquares).find(
        square => square.dataset.brand.toLowerCase() === brandName.toLowerCase()
      );

      if (targetBrand) {
        targetBrand.click(); // open the popup
      } else {
        console.warn("Brand not found:", brandName);
      }
    });
  });

});



(function() {
 const titles = [
  "Fresh Fruits Collection 🍎",
  "Organic Bananas 🍌",
  "Juicy Oranges 🍊",
  "Sweet Grapes 🍇",
  "Seasonal Mangoes 🥭",
  "Summer Watermelons 🍉"
];


  let index = 0; // now private, won’t clash with global variables
  const titleElement = document.getElementById("fruit-title");

  setInterval(() => {
    titleElement.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % titles.length;
      titleElement.textContent = titles[index];
      titleElement.classList.remove("fade-out");
    }, 600);
  }, 2000);
})();


// Wait for DOM to load
  document.addEventListener("DOMContentLoaded", () => {

    // Select all promo boxes
    const promoBoxes = document.querySelectorAll(".promo-box");
    const brandSquares = document.querySelectorAll(".brand-square");

    promoBoxes.forEach(box => {
      box.addEventListener("click", () => {
        const brandName = box.querySelector(".promo-brand").textContent.trim();

        // Find matching brand square
        const targetBrand = Array.from(brandSquares).find(
          square => square.dataset.brand.toLowerCase() === brandName.toLowerCase()
        );

        if (targetBrand) {
          // Trigger the click on the brand square to open the popup
          targetBrand.click();
        } else {
          console.warn("Brand not found:", brandName);
        }
      });
    });

  });









// Select all triggers
const popupTriggers = document.querySelectorAll(".popup-trigger");
const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");


// For each trigger
popupTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    // Find the popup corresponding to this trigger
    const popup = trigger.closest(".product-card").nextElementSibling;
    if (!popup) return;

    // Get product image from trigger
    const productImage = trigger.src || trigger.getAttribute("data-image");

    // Update only the main image inside the popup
    const imgEl = popup.querySelector(".Kerala"); // main image in gallery
    if (imgEl) imgEl.src = productImage;

    // Show popup
    popup.style.display = "flex";
    document.body.classList.add("popup-open");

    // Close button inside this popup
    const closeBtn = popup.querySelector("#closePopup");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
        document.body.classList.remove("popup-open");
      });
    }
  });
});



// Close when clicking outside content
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
    document.body.classList.remove("popup-open");
  }
});

document.querySelectorAll('.Karnataka').forEach((gallery) => {
  const dots = gallery.nextElementSibling.querySelectorAll('.dot');

  gallery.addEventListener('scroll', () => {
    const scrollLeft = gallery.scrollLeft;
    const totalWidth = gallery.scrollWidth;
    const imgCount = gallery.querySelectorAll('img').length;
    const imgWidth = totalWidth / imgCount;

    // Find nearest image index
    const index = Math.round(scrollLeft / imgWidth);

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  });
});
// Update dots when scrolling gallery
document.querySelectorAll('.Karnataka').forEach((gallery) => {
  const dots = gallery.nextElementSibling?.querySelectorAll('.dot');
  if (!dots) return;

  gallery.addEventListener('scroll', () => {
    const scrollLeft = gallery.scrollLeft;
    const totalWidth = gallery.scrollWidth;
    const imgCount = gallery.querySelectorAll('img').length;
    const imgWidth = totalWidth / imgCount;

    // Find which image is in view
    const index = Math.round(scrollLeft / imgWidth);

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  });
});
document.querySelectorAll('.Karnataka').forEach((gallery) => {
  const images = gallery.querySelectorAll('img');

  // Create dots container
  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('dots');

  images.forEach((img, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active'); // first active

    // Clicking a dot scrolls to that image
    dot.addEventListener('click', () => {
      gallery.scrollTo({
        left: img.offsetLeft,
        behavior: 'smooth'
      });
    });

    dotsContainer.appendChild(dot);
  });

  // Insert dots right after gallery
  gallery.insertAdjacentElement('afterend', dotsContainer);

  const dots = dotsContainer.querySelectorAll('.dot');

  // Update active dot on scroll
  gallery.addEventListener('scroll', () => {
    const scrollLeft = gallery.scrollLeft;
    const imgWidth = gallery.scrollWidth / images.length;
    const index = Math.round(scrollLeft / imgWidth);

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  });
});
function openBrand(brandName) {
  // find the brand-square that already exists
  const brandSquare = document.querySelector(`.brand-square[data-brand="${brandName}"]`);
  if (brandSquare) {
    brandSquare.click(); // trigger its click → opens popup
  }
}
document.querySelectorAll(".jion").forEach(item => {
  item.addEventListener("click", () => {
    const popupId = item.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "flex";
  });
});

function closeVillage(id) {
  document.getElementById(id).style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  const cartBar = document.getElementById("bottomCartBar");
  const cartImages = document.getElementById("cartImages");
  const itemCount = document.getElementById("itemCount");
  const closeCart = document.getElementById("closeCart");

  let cartItems = [];

  // Update Cart UI
  function updateCartUI() {
    if (cartItems.length > 0) {
      cartBar.style.display = "flex";
    }

    // Show only last 3 images
    cartImages.innerHTML = "";
     const lastThree = cartItems.slice(-3);
    lastThree.forEach(item => {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.style.width = "40px";
      img.style.height = "40px";
      img.style.borderRadius = "10%"; // ✅ circle
      img.style.objectFit = "contain";
      cartImages.appendChild(img);
    });

    // Update item count
    itemCount.textContent = `${cartItems.length} item${cartItems.length > 1 ? "s" : ""}`;
  }

function addToCart({ name, price, image, storage, size, color, grams, warranty, rating, ram, extra }) {
  cartItems.push({ name, price, image, storage, size, color, grams, warranty, rating, ram, extra });


  // Store in localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Update cart UI (but show only what you want)
  updateCartUI();
}

  // ✅ Event Delegation: handle all Add to Cart buttons
// ✅ Event Delegation: handle all Add to Cart buttons
// ✅ Event Delegation: handle all Add to Cart buttons
document.addEventListener("click", (e) => {

  // + button (from product card)
if (e.target.classList.contains("add-button")) {
  const card = e.target.closest(".product-card");
  if (!card) return;

  // Detect category (by parent section or dataset)
  const category = card.closest("#mobiles, #Clothes, #Slippers")?.id || "";

  let storage = "", color = "", size = "";

  if (category === "mobiles") {
    // ✅ Mobiles need storage + color
    storage = card.querySelector("#storage-select")?.value || 
              card.querySelector("#storage-options .active")?.dataset.value || "";
    color = card.querySelector("#color-select")?.value || 
            card.querySelector("#color-options .active")?.dataset.value || "";

    if (!storage || !color) {
      alert(" Please select both Storage and Color before adding to cart😁.");
      return;
    }
  } 
  else if (category === "Clothes") {
    // ✅ Clothes need size + color
    size = card.querySelector("#size-select")?.value || 
           card.querySelector("#size-options .active")?.dataset.value || "";
    color = card.querySelector("#color-select")?.value || 
            card.querySelector("#color-options .active")?.dataset.value || "";

    if (!size || !color) {
      alert("Please select both Size and Color before adding clothes to cart😁.");
      return;
    }
  } 
  else if (category === "Slippers") {
    // ✅ Slippers need size + color
    size = card.querySelector("#size-select")?.value || 
           card.querySelector("#size-options .active")?.dataset.value || "";
    color = card.querySelector("#color-select")?.value || 
            card.querySelector("#color-options .active")?.dataset.value || "";

    if (!size || !color) {
      alert(" Please select both Size and Color before adding slippers to cart😁.");
      return;
    }
  }

  // Add to cart with relevant details
  addToCart({
    name: getProductName(card || details),
    price: card.querySelector(".current-price, .price-box")?.innerText || "N/A",
    image: card.querySelector("img, .gallery-img")?.src || "",
    storage,
    size,
    color,
    grams: card.querySelector("#grams")?.innerText || "", // ✅ grams added
    warranty: card.querySelector(".warranty")?.innerText || "",
    rating: card.querySelector(".rating")?.innerText || "",
    ram: card.querySelector(".ram")?.innerText || "",
    extra: card.querySelector(".extra-details")?.innerText || ""
  });
}


  // Old popup button (inside popup)
if (e.target.classList.contains("Nagaland")) {
  const popup = e.target.closest(".AndhraPradesh");
  const card = popup?.previousElementSibling;
  if (!card) return;

  // Detect category from parent section
  const category = card.closest("#mobiles, #Clothes, #Slippers")?.id || "";

  let storage = "", size = "", color = "";

  if (category === "mobiles") {
    storage = popup.querySelector("#storage-select")?.value || 
              popup.querySelector("#storage-options .active")?.dataset.value || "";
    color = popup.querySelector("#color-select")?.value || 
            popup.querySelector("#color-options .active")?.dataset.value || "";

    if (!storage || !color) {
      alert(" Please select both Storage and Color😁");
      return;
    }
  } 
  else if (category === "Clothes") {
    size = popup.querySelector("#size-select")?.value || 
           popup.querySelector("#size-options .active")?.dataset.value || "";
    color = popup.querySelector("#color-select")?.value || 
            popup.querySelector("#color-options .active")?.dataset.value || "";

    if (!size || !color) {
      alert(" Please select both Size and Color😁");
      return;
    }
  } 
  else if (category === "Slippers") {
    size = popup.querySelector("#size-select")?.value || 
           popup.querySelector("#size-options .active")?.dataset.value || "";
    color = popup.querySelector("#color-select")?.value || 
            popup.querySelector("#color-options .active")?.dataset.value || "";

    if (!size || !color) {
      alert(" Please select both Size and Color😁");
      return;
    }
  }

  addToCart({
   name: getProductName(card || details),
    price: card.querySelector(".current-price, .price-box")?.innerText || "N/A",
    image: popup.querySelector(".Kerala")?.src 
        || card.querySelector("img, .gallery-img")?.src 
        || "",
    storage,
    size,
    color,
     grams: card.querySelector("#grams")?.innerText || "", 
    warranty: card.querySelector(".warranty")?.innerText || "",
    rating: card.querySelector(".rating")?.innerText || "",
    ram: card.querySelector(".ram")?.innerText || "",
    extra: card.querySelector(".extra-details")?.innerText || ""
  });
}



// ✅ New product details button (Cart)
if (e.target.classList.contains("cart-btn")) {
  const details = e.target.closest(".action-buttons")?.parentElement;
  if (!details) return;

  let storage = "", color = "";

  // Only validate if storage/color selectors exist
  const storageEl = details.querySelector("#storage-select");
  const colorEl = details.querySelector("#color-select");

  if (storageEl && colorEl) {
    storage = storageEl.value || "";
    color = colorEl.value || "";

    if (!storage || !color) {
      alert(" Please select both Storage and Color😁");
      return;
    }
  }

  addToCart({
    name: details.querySelector("h2, .product-name-highlight")?.innerText || "Unknown Item",
    price: details.querySelector(".price-box, .current-price")?.innerText || "N/A",
    image: document.querySelector("#imageGallery img")?.src 
    || details.querySelector(".gallery-img, img")?.src 
    || "",

    storage,
    color,
    warranty: details.querySelector(".warranty")?.innerText || "",
    rating: details.querySelector(".rating")?.innerText || "",
    ram: details.querySelector(".ram")?.innerText || "",
    extra: details.querySelector(".extra-details")?.innerText || ""
  });
}
if (e.target.classList.contains("buy-btn")) {
  const details = e.target.closest(".action-buttons")?.parentElement;
  if (!details) return;

  const storageEl = details.querySelector("#storage-select");
  const colorEl = details.querySelector("#color-select");

  let storage = "", color = "";

  // Validate storage and color are selected
  if (storageEl && colorEl) {
    storage = storageEl.value || "";
    color = colorEl.value || "";

    if (!storage || !color) {
      alert("Please select both Storage and Color😁");
      return;  // stop here, don't proceed to redirect
    }
  }

  // Prepare product data
  const item = {
    name: details.querySelector("h2, .product-name-highlight")?.innerText || "Unknown Item",
    price: details.querySelector(".price-box, .current-price")?.innerText || "N/A",
    image: document.querySelector("#imageGallery img")?.src 
      || details.querySelector(".gallery-img, img")?.src 
      || "",
    storage,
    color,
    warranty: details.querySelector(".warranty")?.innerText || "",
    rating: details.querySelector(".rating")?.innerText || "",
    ram: details.querySelector(".ram")?.innerText || "",
    extra: details.querySelector(".extra-details")?.innerText || ""
  };

  // Save product to localStorage
  localStorage.setItem("buyNowItem", JSON.stringify(item));

  // Redirect to cart.html with the product
  window.location.href = "cart.html";
}



// ✅ Card Buy Now (.Manipur)
document.addEventListener("click", (e) => {
  const cardBtn = e.target.closest(".Manipur");
  if (!cardBtn) return;

    e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  // Find the popup that belongs to this product card
  const popup = cardBtn.closest(".AndhraPradesh") || cardBtn.parentElement;
  const card = popup?.previousElementSibling || cardBtn.closest(".product-card");
  if (!card) {
    console.warn("⚠️ No product-card found for .Manipur button");
    return;
  }

  // Detect category
  const category = card.closest("#mobiles, #Clothes, #Slippers")?.id || "";

  let storage = "", size = "", color = "";

  if (category === "mobiles") {
    storage = popup.querySelector("#storage-select")?.value || "";
    color = popup.querySelector("#color-select")?.value || "";
    if (!storage || !color) {
      alert(" Please select both Storage and Color before buying😁.");
      return;
    }
  } else if (category === "Clothes") {
    size = popup.querySelector("#size-select")?.value || "";
    color = popup.querySelector("#color-select")?.value || "";
    if (!size || !color) {
      alert(" Please select both Size and Color before buying😁.");
      return;
    }
  } else if (category === "Slippers") {
    size = popup.querySelector("#size-select")?.value || "";
    color = popup.querySelector("#color-select")?.value || "";
    if (!size || !color) {
      alert(" Please select both Size and Color before buying😁.");
      return;
    }
  }

  const newItem = {
   name: getProductName(card || details),
    price: card.querySelector(".current-price, .price-box")?.innerText || "N/A",
    image: popup.querySelector(".Kerala")?.src 
        || card.querySelector(".gallery-img, img")?.src 
        || "",
    storage,
    size,
    color,
    grams: card.querySelector("#grams")?.innerText || "",
    warranty: card.querySelector(".warranty")?.innerText || "",
    rating: card.querySelector(".rating")?.innerText || "",
    ram: card.querySelector(".ram")?.innerText || "",
    extra: card.querySelector(".extra-details")?.innerText || ""
  };

  saveToCart(newItem);
});

// ✅ Buy Now (popup/details) works same as .Manipur
if (e.target.classList.contains("buy-btn")) {
  const details = e.target.closest(".action-buttons")?.parentElement;
  if (!details) return;

  let storage = "", size = "", color = "";

  const storageEl = details.querySelector("#storage-select");
  const colorEl = details.querySelector("#color-select");
  const sizeEl = details.querySelector("#size-select");

  if (storageEl && colorEl) {
    storage = storageEl.value || "";
    color = colorEl.value || "";
    if (!storage || !color) {
      alert("Please select both Storage and Color😁");
      return;
    }
  } else if (sizeEl && colorEl) {
    size = sizeEl.value || "";
    color = colorEl.value || "";
    if (!size || !color) {
      alert("Please select both Size and Color😁");
      return;
    }
  }

  const item = {
    name: details.querySelector("h2, .product-name-highlight")?.innerText || "Unknown Item",
    price: details.querySelector(".price-box, .current-price")?.innerText || "N/A",
    image: document.querySelector("#imageGallery img")?.src 
      || details.querySelector(".gallery-img, img")?.src 
      || "",
    storage,
    size,
    color,
    warranty: details.querySelector(".warranty")?.innerText || "",
    rating: details.querySelector(".rating")?.innerText || "",
    ram: details.querySelector(".ram")?.innerText || "",
    extra: details.querySelector(".extra-details")?.innerText || ""
  };

  // ✅ Save same way as .Manipur
  saveToCart(item);
}




function saveToCart(item) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // ✅ Build unique key depending on available attributes
  let uniqueKey = item.name;
  if (item.storage) uniqueKey += `-${item.storage}`;
  if (item.size) uniqueKey += `-${item.size}`;
  if (item.color) uniqueKey += `-${item.color}`;

  // ✅ Check if same product already exists
  const existing = cartItems.find(p => {
    let pKey = p.name;
    if (p.storage) pKey += `-${p.storage}`;
    if (p.size) pKey += `-${p.size}`;
    if (p.color) pKey += `-${p.color}`;
    return pKey === uniqueKey;
  });

  if (existing) {
    // Increase qty if already exists
    existing.qty = (existing.qty || 1) + 1;
  } else {
    // Add as new product
    item.qty = 1;
    cartItems.push(item);
  }

  // ✅ Save full details in localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // ✅ Redirect to cart page (with all details preserved)
  window.location.href = "cart.html";
}




updateCartUI();

  });

  // Close cart bar
  if (closeCart) {
    closeCart.addEventListener("click", () => {
      cartBar.style.display = "none";
      cartItems = [];
      cartImages.innerHTML = "";
      itemCount.textContent = "0 items";
    });
  }
});

document.getElementById("cartArrow")?.addEventListener("click", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser && loggedInUser.name && loggedInUser.mobile) {
    // ✅ User is logged in → send name & mobile to cart.html
    const userName = encodeURIComponent(loggedInUser.name);
    const userMobile = encodeURIComponent(loggedInUser.mobile);

    window.location.href = `cart.html?name=${userName}&mobile=${userMobile}`;
  } else {
    // ❌ Not logged in → send to login
    window.location.href = "login.html";
  }
});


function logoutUser() {
  // Remove login data
  localStorage.removeItem("loggedInUser");

  // Optional: also clear cart if you want
  // localStorage.removeItem("cartItems");

  // Redirect to login page
  window.location.href = "login.html";
}
// Handle Storage & Color selection
document.querySelectorAll(".option-group").forEach(group => {
  const options = group.querySelectorAll(".option-box, .color-text-box");
  options.forEach(option => {
    option.addEventListener("click", () => {
      // Remove active from others in the same group
      options.forEach(o => o.classList.remove("active"));
      // Set active on clicked
      option.classList.add("active");
    });
  });
});
// voice Ai
const voiceBtn = document.getElementById("voiceSearchBtn");

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;

  let stopTimer; // ⏳ for 6 seconds

  voiceBtn.addEventListener("click", () => {
    recognition.start();
    searchInput.placeholder = "Listening... 🎤"; // UX feedback
    voiceBtn.classList.add("listening");

    // stop after 6 sec
    clearTimeout(stopTimer);
    stopTimer = setTimeout(() => {
      recognition.stop();
    }, 6000);
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript; // ✅ voice → text in search box
    searchInput.dispatchEvent(new Event("input")); // ✅ auto search
    voiceBtn.classList.remove("listening");
    searchInput.placeholder = "Search for items";
  };

  recognition.onerror = () => {
    voiceBtn.classList.remove("listening");
    searchInput.placeholder = "Search for items";
  };

  recognition.onend = () => {
    voiceBtn.classList.remove("listening");
    searchInput.placeholder = "Search for items";
    clearTimeout(stopTimer); // ✅ cleanup
  };
} else {
  voiceBtn.style.display = "none"; // just hide quietly
}

const headings = [
  "Shop by Style ✨",
  "Discover New Arrivals 🛍️",
  "Trending Products 🔥",
  "Best Deals Today 💰"
];

const headingElement = document.getElementById("animated-heading");
let currentIndex = 0;

// Function to show the next heading
function showNextHeading() {
  // Fade out
  headingElement.style.opacity = 0;
  headingElement.style.transform = "translateY(20px)";

  setTimeout(() => {
    // Update text
    currentIndex = (currentIndex + 1) % headings.length;
    headingElement.textContent = headings[currentIndex];

    // Fade in
    headingElement.style.transition = "all 1s ease";
    headingElement.style.opacity = 1;
    headingElement.style.transform = "translateY(0)";
  }, 1000); // matches fade out duration
}

// Initial animation
headingElement.style.opacity = 1;
headingElement.style.transform = "translateY(0)";
headingElement.style.transition = "all 1s ease";

// Change heading every 4 seconds
setInterval(showNextHeading, 4000);