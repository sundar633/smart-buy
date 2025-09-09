window.addEventListener("load", async () => {
  const ordersContainer = document.getElementById("ordersContainer");

  // ✅ Try to get orders from backend first
  let allOrders = [];
  try {
    const res = await fetch("https://shoping-1-ezxv.onrender.com/orders");
    if (res.ok) {
      allOrders = await res.json();
      localStorage.setItem("allOrders", JSON.stringify(allOrders)); // 🔄 keep local copy
    } else {
      console.warn("⚠️ Backend fetch failed, using localStorage");
      allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
    }
  } catch (err) {
    console.error("❌ Error fetching orders:", err);
    allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
  }

  // ✅ get user profile from localStorage (index.html)
const userProfile = JSON.parse(localStorage.getItem("loggedInUser")) || {
  name: "N/A",
  mobile: "N/A"
};


if (allOrders.length > 0) {
  ordersContainer.classList.remove("empty");
  ordersContainer.innerHTML = allOrders.map((order, index) => `
    <div class="order-card">
      <h2>Order #${index + 1}</h2>

      <div class="order-info"><b>Account Name:</b> ${order.userDetails?.name || "N/A"}</div>
<div class="order-info"><b>Profile Number:</b> ${order.userDetails?.mobile || "N/A"}</div>


      <!-- ✅ Delivery Details -->
      <div class="order-info"><b>House No:</b> ${order.userDetails?.houseNo || "N/A"}</div>
      <div class="order-info"><b>Street:</b> ${order.userDetails?.street || "N/A"}</div>
      <div class="order-info"><b>Building:</b> ${order.userDetails?.building || "N/A"}</div>

      <!-- ✅ Receiver Details (from backend) -->
      <div class="order-info"><b>Receiver Name:</b> ${order.receiver?.name || "N/A"}</div>
      <div class="order-info"><b>Receiver Mobile:</b> ${order.receiver?.mobile || "N/A"}</div>
      <div class="order-info"><b>Order For:</b> ${order.receiver?.orderFor || "N/A"}</div>

      <!-- ✅ Full Address -->
      <div class="order-info"><b>Address:</b> ${order.userDetails?.gpsAddress || "N/A"}</div>

      <!-- ✅ Map Link if GPS available -->
      ${order.userDetails?.lat && order.userDetails?.lon ? `
        <div class="order-info">
          <a href="https://www.google.com/maps?q=${order.userDetails.lat},${order.userDetails.lon}" 
             target="_blank" 
             style="color:#007bff;text-decoration:underline">
             📍 View on Map
          </a>
        </div>
      ` : ""}

      <!-- ✅ Other Order Info -->
      <div class="order-info"><b>Total:</b> ${order.total}</div>
      <div class="order-info"><b>Payment:</b> ${order.payment}</div>
      <div class="order-info"><b>Time:</b> ${order.orderTime}</div>

      <!-- ✅ Products -->
      <h3>Products:</h3>
      <table border="1" cellspacing="0" cellpadding="6" style="width:100%;border-collapse:collapse;font-size:14px;">
        <thead style="background:#f2f2f2;">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Details</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map(item => `
            <tr>
              <td style="text-align:center;">
                <img src="${item.image}" alt="${item.name}" style="width:60px;height:60px;object-fit:conatin;">
              </td>
              <td>${item.name}</td>
              <td>
                ${item.color ? `<div>Color: ${item.color}</div>` : ""}
                ${item.size ? `<div>Size: ${item.size}</div>` : ""}
                ${item.storage ? `<div>Storage: ${item.storage}</div>` : ""}
                ${item.ram ? `<div>RAM: ${item.ram}</div>` : ""}
                ${item.warranty ? `<div>Warranty: ${item.warranty}</div>` : ""}
                ${item.brand ? `<div>Brand: ${item.brand}</div>` : ""}
                ${item.rating ? `<div>Rating: ${item.rating}</div>` : ""}
                ${item.grams ? `<div>Weight: ${item.grams} g</div>` : ""}
              </td>
              <td>${item.qty || 1}</td>
              <td>${item.price}</td>
              <td>
                <button class="delivered-product-btn" 
                  data-order="${index}" 
                  data-item="${item.name}"
                  style="padding:4px 8px;background:#28a745;color:#fff;
                  border:none;border-radius:4px;cursor:pointer;font-size:12px;">
                  ✅ Delivered
                </button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `).join("");
}

else{
    ordersContainer.innerHTML = "No orders yet.";
    ordersContainer.classList.add("empty");
  }
});

// ✅ Handle delivered click (still updates local copy)
document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delivered-product-btn")) {
    const orderIndex = e.target.getAttribute("data-order");
    const itemName = e.target.getAttribute("data-item");

    let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];

    let order = allOrders[orderIndex];
    if (order && order.items) {
      order.items = order.items.filter(i => i.name !== itemName);

      if (order.items.length === 0) {
        allOrders.splice(orderIndex, 1);
      }

      localStorage.setItem("allOrders", JSON.stringify(allOrders));

      // 🔄 Optionally send update to backend
      try {
        await fetch("https://shoping-1-ezxv.onrender.com/orders/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(allOrders)
        });
      } catch (err) {
        console.error("⚠️ Could not sync with backend:", err);
      }
    }

    e.target.closest("tr").remove();

    const tableBody = e.target.closest("tbody");
    if (tableBody.children.length === 0) {
      e.target.closest(".order-card").remove();
    }

    if (allOrders.length === 0) {
      const container = document.getElementById("ordersContainer");
      container.innerHTML = "No orders yet.";
      container.classList.add("empty");
    }
  }
});
