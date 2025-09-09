
function showMessage(message, type = "success", duration = 2000) {
    const box = document.getElementById("messageBox");
    box.innerText = message;
    box.className = type;
    box.style.display = "block";
    setTimeout(() => { box.style.display = "none"; }, duration);
}

window.addEventListener("load", async () => {
    const ordersContainer = document.getElementById("ordersContainer");

    let allOrders = [];
    try {
        const res = await fetch("https://shoping-1-ezxv.onrender.com/orders");
        if (res.ok) {
            allOrders = await res.json();
            localStorage.setItem("allOrders", JSON.stringify(allOrders));
        } else {
            allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
        }
    } catch {
        allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
    }

    if (allOrders.length > 0) {
        ordersContainer.innerHTML = allOrders.map((order, index) => `
        <div class="customer-card">
            <h6>Customer Name: <strong>${order.userDetails?.name || "N/A"}</strong></h6>
            <p>📞 Customer Mobile: ${order.userDetails?.mobile || "N/A"}</p>
            <p>📞 Receiver Mobile: ${order.receiver?.mobile || "N/A"}</p>
            <p>📍 Location: ${order.userDetails?.gpsAddress || "N/A"}</p>
            ${order.userDetails?.lat && order.userDetails?.lon ? `
            <div>
                <a href="https://www.google.com/maps?q=${order.userDetails.lat},${order.userDetails.lon}" 
                   target="_blank" 
                   style="color:#007bff;text-decoration:underline;">
                   📍 View on Map
                </a>
            </div>
            ` : ""}
            <div class="mt-2">
                <h6>📦 Products:</h6>
                ${order.items.map(item => `
                <div class="d-flex align-items-center mb-2 justify-content-between">
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}" 
                             style="width:50px; height:60px; object-fit:contain; border-radius:4px; margin-right:10px;">
                        <div>
                            <div>${item.name}</div>
                            <div style="font-size:13px; color:#555;">
                                Price: ${item.price || "N/A"} | ${order.payment || "COD"}
                            </div>
                        </div>
                    </div>
                </div>`).join("")}
            </div>

            <div class="mt-2 d-flex gap-2">
                <button class="btn btn-sm btn-warning order-action-btn" data-index="${index}" data-action="on-the-way">🚚 On the Way</button>
                <button class="btn btn-sm btn-success order-action-btn" data-index="${index}" data-action="delivered">✅ Delivered</button>
                <button class="btn btn-sm btn-danger order-action-btn" data-index="${index}" data-action="cancel">❌ Cancel</button>
            </div>
        </div>`).join("");
    } else {
        ordersContainer.innerHTML = "<p>Available Soon⏳</p>";
    }
});

// Handle action buttons
document.addEventListener("click", async (e) => {
    if (e.target.classList.contains("order-action-btn")) {
        const index = e.target.getAttribute("data-index");
        const action = e.target.getAttribute("data-action");
        let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
        let order = allOrders[index];
        if (!order) return;

        if (action === "cancel") {
            if (confirm(`Are you sure you want to cancel the order for ${order.userDetails?.name}? ❌`)) {
                allOrders.splice(index, 1);
                localStorage.setItem("allOrders", JSON.stringify(allOrders));

                try {
                    await fetch("https://shoping-1-ezxv.onrender.com/orders/update", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(allOrders)
                    });
                    showMessage("Order cancelled successfully!", "success");
                } catch {
                    showMessage("Order cancelled locally, but failed to update backend.", "error");
                }

                e.target.closest(".customer-card").remove();

                if (allOrders.length === 0) {
                    document.getElementById("ordersContainer").innerHTML = "<p>Available Soon⏳</p>";
                }
            }
        }
    }
});
async function fetchLocation() {
    const locationElement = document.getElementById('location');

    if (!navigator.geolocation) {
        locationElement.textContent = 'Geolocation is not supported by your browser.';
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
            // Reverse geocoding using OpenStreetMap Nominatim API
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
            const data = await response.json();

            const address = data.address;
            const street = address.road || address.neighbourhood || '';
            const city = address.city || address.town || address.village || '';
            const state = address.state || '';
            const country = address.country || '';
            const postcode = address.postcode || '';

            locationElement.textContent = `${street}, ${city}, ${state}, ${country} - ${postcode}`;
        } catch (err) {
            locationElement.textContent = 'Unable to fetch location details.';
            console.error(err);
        }
    }, (error) => {
        locationElement.textContent = 'Permission denied or unable to get location.';
        console.error(error);
    });
}

// Call the function
fetchLocation();
