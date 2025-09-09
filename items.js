const brandProducts = {
  Apple: [
  {
    image: "pm/Apple/1.jpg",
    name: "iPhone 15pro",
    brand: "Apple",
    rating: "★★★☆☆",
    price: "₹1,20,000",
    warranty: "1 Year",
    storage: "128GB",
    ram: "3GB",
    images: ["pm/Apple/2.jpg", "pm/Apple/3.jpg", "pm/Apple/4.jpg"],
    color: "Red, White",
    capacity: "128GB",
    specifications: [
      "4.7-inch Retina HD Display",
      "A13 Bionic Chip",
      "Single-camera system",
      "Touch ID",
      "Water and Dust Resistance",
      "Wireless charging"
    ],
    description: [
      "Compact and lightweight",
      "Affordable iPhone experience",
      "Fast chip for the size",
      "Easy to use with one hand",
      "Great build quality",
      "iOS updates guaranteed"
    ],
    features: [
      { icon: "main/201.png", text: "12 MP Rear Camera" },
      { icon: "main/200.png", text: "7 MP Front Camera" },
      { icon: "main/203.png", text: "1821mAh Battery" },
      { icon: "main/204.png", text: "A13 Bionic Chip" },
      { icon: "main/202.png", text: "3GB RAM & 64GB Storage" }
    ]
  },
  {
    image: "pm/Apple/5.jpg",
    name: "iPhone 13 Pro Max",
    brand: "Apple",
    rating: "★★★★☆",
    price: "₹1,70,000",
    warranty: "1 Year",
    storage: "128GB",
    ram: "3GB",
    images: ["pm/Apple/6.jpg", "pm/Apple/7.jpg", "pm/Apple/8.jpg"],
    color: "Blue, White",
    capacity: "128GB",
    specifications: [
      "6.1-inch Liquid Retina Display",
      "A12 Bionic Chip",
      "Single 12MP rear camera",
      "Face ID",
      "Water and Dust Resistance",
      "Wireless Charging"
    ],
    description: [
      "Vibrant display",
      "Strong battery life",
      "Fast and responsive",
      "Face ID is smooth",
      "Great sound quality",
      "Sleek design"
    ],
    features: [
      { icon: "main/201.png", text: "12 MP Rear Camera" },
      { icon: "main/200.png", text: "7 MP Front Camera" },
      { icon: "main/203.png", text: "2942mAh Battery" },
      { icon: "main/204.png", text: "A12 Bionic Chip" },
      { icon: "main/202.png", text: "3GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "pm/Apple/9.jpg",
    name: "iPhone 11",
    brand: "Apple",
    rating: "★★★★☆",
    price: "₹43,000",
    warranty: "1 Year",
    storage: "128GB",
    ram: "4GB",
    images: ["pm/Apple/10.jpg", "pm/Apple/11.jpg", "pm/Apple/12.jpg"],
    color: "Purple, Black",
    capacity: "128GB",
    specifications: [
      "6.1-inch Liquid Retina Display",
      "A13 Bionic Chip",
      "Dual-camera system",
      "All-day battery life",
      "Water and Dust Resistance",
      "Face ID"
    ],
    description: [
      "Excellent value for price",
      "Smooth iOS performance",
      "Durable and reliable",
      "Perfect for daily use",
      "Good night photography",
      "Great audio playback"
    ],
    features: [
      { icon: "main/201.png", text: "12 MP Dual Camera" },
      { icon: "main/200.png", text: "12 MP Front Camera" },
      { icon: "main/203.png", text: "3110mAh Battery" },
      { icon: "main/204.png", text: "A13 Bionic Chip" },
      { icon: "main/202.png", text: "4GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "pm/Apple/13.jpg",
    name: "iPhone 12",
    brand: "Apple",
    rating: "★★★★☆",
    price: "₹49,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "4GB",
    images: ["pm/Apple/14.jpg", "pm/Apple/15.jpg", "pm/Apple/16.jpg"],
    color: "Blue, Black",
    capacity: "128GB",
    specifications: [
      "6.1-inch Super Retina XDR Display",
      "A14 Bionic Chip",
      "Ceramic Shield front",
      "MagSafe compatibility",
      "5G connectivity",
      "Dual 12MP cameras"
    ],
    description: [
      "High-quality OLED display",
      "Future-ready with 5G",
      "Great low-light photography",
      "Fast performance",
      "Slim and stylish",
      "MagSafe adds convenience"
    ],
    features: [
      { icon: "main/201.png", text: "12 MP Dual Camera" },
      { icon: "main/200.png", text: "12 MP Front Camera" },
      { icon: "main/203.png", text: "2815mAh Battery" },
      { icon: "main/204.png", text: "A14 Bionic Chip" },
      { icon: "main/202.png", text: "4GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "pm/Apple/17.jpg",
    name: "iPhone 13",
    brand: "Apple",
    rating: "★★★★★",
    price: "₹45,000",
    warranty: "2 Years",
    storage: "128GB",
    ram: "4GB",
    images: ["pm/Apple/18.jpg", "pm/Apple/19.jpg", "pm/Apple/20.jpg"],
    color: "Starlight, Pink",
    capacity: "128GB",
    specifications: [
      "6.1-inch Super Retina XDR Display",
      "A15 Bionic Chip",
      "Improved low-light performance",
      "Cinematic video mode",
      "Sensor-shift stabilization",
      "Longer battery life"
    ],
    description: [
      "Top-tier camera system",
      "Smooth UI transitions",
      "Bright and vivid display",
      "Incredible video shooting",
      "Excellent performance",
      "Premium finish"
    ],
    features: [
      { icon: "main/201.png", text: "12 MP Dual Camera" },
      { icon: "main/200.png", text: "12 MP Front Camera" },
      { icon: "main/203.png", text: "3240mAh Battery" },
      { icon: "main/204.png", text: "A15 Bionic Chip" },
      { icon: "main/202.png", text: "4GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "pm/Apple/21.jpg",
    name: "iPhone 14",
    brand: "Apple",
    rating: "★★★★★",
    price: "₹51,999",
    warranty: "2 Years",
    storage: "128GB",
    ram: "6GB",
    images: ["pm/Apple/22.jpg", "pm/Apple/23.jpg", "pm/Apple/24.jpg"],
    color: "Midnight, Blue",
    capacity: "128GB",
    specifications: [
      "6.1-inch Super Retina XDR Display",
      "A15 Bionic Chip with 5-core GPU",
      "Photonic Engine",
      "Crash Detection",
      "Emergency SOS via Satellite",
      "Enhanced thermal performance"
    ],
    description: [
      "Superb durability",
      "Top-notch photo clarity",
      "Excellent battery optimization",
      "Smooth gameplay performance",
      "Modern safety features",
      "iOS runs flawlessly"
    ],
    features: [
      { icon: "main/201.png", text: "12 MP Dual Camera" },
      { icon: "main/200.png", text: "12 MP Front Camera" },
      { icon: "main/203.png", text: "3279mAh Battery" },
      { icon: "main/204.png", text: "A15 Bionic Chip" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "pm/Apple/25.jpg",
    name: "iPhone 14 Pro",
    brand: "Apple",
    rating: "★★★★★",
    price: "₹1,50,000",
    warranty: "2 Years",
    storage: "128GB",
    ram: "6GB",
    images: ["pm/Apple/26.jpg", "pm/Apple/27.jpg", "pm/Apple/28.jpg"],
    color: "Deep Purple, Gold",
    capacity: "128GB",
    specifications: [
      "6.1-inch Super Retina XDR Display",
      "Always-On Display",
      "Dynamic Island",
      "A16 Bionic Chip",
      "ProMotion Technology",
      "Triple camera system"
    ],
    description: [
      "Flagship camera setup",
      "Dynamic UI changes",
      "Blazing fast processor",
      "Battery lasts all day",
      "Exceptional night shots",
      "Luxury hardware design"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Triple Camera" },
      { icon: "main/200.png", text: "12 MP Front Camera" },
      { icon: "main/203.png", text: "3200mAh Battery" },
      { icon: "main/204.png", text: "A16 Bionic Chip" },
      { icon: "main/202.png", text: "6GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "pm/Apple/29.jpg",
    name: "iPhone 15",
    brand: "Apple",
    rating: "★★★★★",
    price: "₹65,999",
    warranty: "2 Years",
    storage: "128GB",
    ram: "8GB",
    images: ["pm/Apple/30.jpg", "pm/Apple/31.jpg", "pm/Apple/32.jpg"],
    color: "Titanium Black, Blue",
    capacity: "128GB",
    specifications: [
      "6.1-inch Super Retina XDR Display",
      "Dynamic Island",
      "A16 Bionic Chip",
      "Advanced dual-camera system",
      "USB-C Charging",
      "Ceramic Shield front"
    ],
    description: [
      "Flagship performance",
      "Stunning display",
      "Premium feel and design",
      "Advanced camera features",
      "USB-C brings convenience",
      "Top-tier thermal control"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Dual Camera" },
      { icon: "main/200.png", text: "28 MP Front Camera" },
      { icon: "main/203.png", text: "3000mAh Battery" },
      { icon: "main/204.png", text: "A16 Bionic Chip" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  }
  ],






// samsung products
  


Samsung: [
  {
    image: "samsung/1.jpg",
    name: "Samsung Galaxy A14",
    brand: "Samsung",
    rating: "★★★☆☆",
    price: "₹13,499",
    warranty: "1 Year",
    storage: "128GB",
    ram: "4GB",
    images: ["samsung/1.jpg", "samsung/2.jpg", "samsung/3.jpg"],
    color: "Black, Silver",
    capacity: "128GB",
    specifications: [
      "6.6-inch FHD+ PLS LCD",
      "Exynos 850 Processor",
      "Triple rear camera",
      "5000mAh Battery",
      "15W Fast Charging",
      "Android 13 OS"
    ],
    description: [
      "Great value for budget users",
      "Large display for media",
      "Good battery backup",
      "Simple and elegant design",
      "Runs latest Android version",
      "Smooth for day-to-day tasks"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "13 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Exynos 850 Chipset" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  },
  {
    image: "samsung/4.jpg",
    name: "Samsung Galaxy M14",
    brand: "Samsung",
    rating: "★★★★☆",
    price: "₹12,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["samsung/4.jpg", "samsung/5.jpg", "samsung/6.jpg"],
    color: "Blue, Green",
    capacity: "128GB",
    specifications: [
      "6.6-inch PLS LCD Display",
      "Exynos 1330 Processor",
      "Triple rear camera",
      "6000mAh Battery",
      "25W Fast Charging",
      "5G Connectivity"
    ],
    description: [
      "Excellent battery life",
      "Ready for 5G network",
      "Good performance at price",
      "Nice build and finish",
      "Smooth UI experience",
      "Reliable daily usage"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "13 MP Front Camera" },
      { icon: "main/203.png", text: "6000mAh Battery" },
      { icon: "main/204.png", text: "Exynos 1330 Chip" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "samsung/7.jpg",
    name: "Samsung Galaxy S21",
    brand: "Samsung",
    rating: "★★★★☆",
    price: "₹49,999",
    warranty: "2 Years",
    storage: "128GB",
    ram: "8GB",
    images: ["samsung/7.jpg", "samsung/8.jpg", "samsung/9.jpg"],
    color: "Phantom Gray, Violet",
    capacity: "128GB",
    specifications: [
      "6.2-inch Dynamic AMOLED 2X",
      "Exynos 2100 / Snapdragon 888",
      "Triple rear camera",
      "4000mAh Battery",
      "25W Fast Charging",
      "120Hz Refresh Rate"
    ],
    description: [
      "Premium look and feel",
      "Flagship performance",
      "Super AMOLED display",
      "Great camera flexibility",
      "Fast refresh rate",
      "Compact and lightweight"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Triple Camera" },
      { icon: "main/200.png", text: "10 MP Front Camera" },
      { icon: "main/203.png", text: "4000mAh Battery" },
      { icon: "main/204.png", text: "Exynos 2100 Chip" },
      { icon: "main/202.png", text: "8GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "samsung/10.jpg",
    name: "Samsung Galaxy S22",
    brand: "Samsung",
    rating: "★★★★★",
    price: "₹59,999",
    warranty: "2 Years",
    storage: "128GB",
    ram: "8GB",
    images: ["samsung/10.jpg", "samsung/11.jpg", "samsung/12.jpg"],
    color: "Phantom Black, White",
    capacity: "128GB",
    specifications: [
      "6.1-inch FHD+ AMOLED",
      "Snapdragon 8 Gen 1",
      "Triple rear camera",
      "3700mAh Battery",
      "45W Fast Charging",
      "Gorilla Glass Victus+"
    ],
    description: [
      "Ultra-compact flagship",
      "Fast and smooth UI",
      "Incredible camera clarity",
      "Glass build looks premium",
      "Powerful chipset",
      "Very lightweight and sleek"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "10 MP Front Camera" },
      { icon: "main/203.png", text: "3700mAh Battery" },
      { icon: "main/204.png", text: "Snapdragon 8 Gen 1" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "samsung/13.jpg",
    name: "Samsung Galaxy M04",
    brand: "Samsung",
    rating: "★★★☆☆",
    price: "₹7,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "4GB",
    images: ["samsung/13.jpg", "samsung/14.jpg", "samsung/15.jpg"],
    color: "Mint Green, Dark Blue",
    capacity: "128GB",
    specifications: [
      "6.5-inch PLS LCD Display",
      "MediaTek Helio P35",
      "Dual rear camera",
      "5000mAh Battery",
      "15W Fast Charging",
      "Android 12 Go Edition"
    ],
    description: [
      "Affordable price",
      "Long battery backup",
      "Decent for basic use",
      "Runs Go Edition smoothly",
      "Sleek and lightweight",
      "Ideal for students or backup"
    ],
    features: [
      { icon: "main/201.png", text: "13 MP Dual Camera" },
      { icon: "main/200.png", text: "5 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Helio P35 Processor" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  },
  {
    image: "samsung/16.jpg",
    name: "Samsung Galaxy A23",
    brand: "Samsung",
    rating: "★★★★☆",
    price: "₹17,499",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["samsung/16.jpg", "samsung/17.jpg", "samsung/18.jpg"],
    color: "Peach, Light Blue",
    capacity: "128GB",
    specifications: [
      "6.6-inch TFT LCD Display",
      "Snapdragon 680 Processor",
      "Quad rear camera",
      "5000mAh Battery",
      "25W Fast Charging",
      "Gorilla Glass 5 Protection"
    ],
    description: [
      "Nice performance for daily use",
      "Camera is solid for this price",
      "Build feels sturdy",
      "Clean One UI experience",
      "Fast enough for casual gaming",
      "Excellent battery life"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Quad Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Snapdragon 680 Chip" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "samsung/19.jpg",
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    rating: "★★★★★",
    price: "₹74,999",
    warranty: "2 Years",
    storage: "128GB",
    ram: "8GB",
    images: ["samsung/19.jpg", "samsung/20.jpg", "samsung/21.jpg"],
    color: "Cream, Green",
    capacity: "128GB",
    specifications: [
      "6.1-inch Dynamic AMOLED 2X",
      "Snapdragon 8 Gen 2",
      "Triple rear camera",
      "3900mAh Battery",
      "45W Fast Charging",
      "IP68 Water Resistance"
    ],
    description: [
      "Top-tier Android flagship",
      "Powerful performance",
      "Amazing camera quality",
      "Stylish and compact",
      "Clean One UI 6 experience",
      "Excellent build materials"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "12 MP Front Camera" },
      { icon: "main/203.png", text: "3900mAh Battery" },
      { icon: "main/204.png", text: "Snapdragon 8 Gen 2" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "samsung/22.jpg",
    name: "Samsung Galaxy F13",
    brand: "Samsung",
    rating: "★★★☆☆",
    price: "₹9,499",
    warranty: "1 Year",
    storage: "128GB",
    ram: "4GB",
    images: ["samsung/22.jpg", "samsung/23.jpg", "samsung/24.jpg"],
    color: "Sunrise Copper, Green",
    capacity: "128GB",
    specifications: [
      "6.6-inch FHD+ LCD Display",
      "Exynos 850 Processor",
      "Dual rear camera",
      "6000mAh Battery",
      "15W Fast Charging",
      "Side Fingerprint Sensor"
    ],
    description: [
      "Massive battery backup",
      "Good display for price",
      "Basic performance for daily use",
      "Sturdy and heavy feel",
      "Attractive color options",
      "Perfect for multimedia"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Dual Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "6000mAh Battery" },
      { icon: "main/204.png", text: "Exynos 850 Chip" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  }
],

// moto 



Motorola:[
  {
    image: "motorola/17.jpg",
    name: "Moto G73",
    brand: "Motorola",
    rating: "★★★☆☆",
    price: "₹12,200",
    warranty: "1 Year",
    storage: "128GB",
    ram: "8GB",
    images: ["motorola/36.jpg", "motorola/37.jpg", "motorola/38.jpg"],
    color: "Midnight Blue, Lucent White",
    capacity: "128GB",
    specifications: [
      "6.5-inch FHD+ LCD Display",
      "MediaTek Dimensity 930",
      "Dual rear camera",
      "5000mAh Battery",
      "30W Turbo Charging",
      "Android 13"
    ],
    description: [
      "Good performance for price",
      "Dual stereo speakers",
      "Near-stock Android UI",
      "Solid battery backup",
      "Nice display clarity",
      "Reliable multitasking"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Dual Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Dimensity 930 Chip" },
      { icon: "main/202.png", text: "8GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "motorola/18.jpg",
    name: "Moto E13",
    brand: "Motorola",
    rating: "★★★★★",
    price: "₹6,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "2GB",
    images: ["motorola/39.jpg", "motorola/40.jpg", "motorola/41.jpg"],
    color: "Cosmic Black, Aurora Green",
    capacity: "128GB",
    specifications: [
      "6.5-inch HD+ LCD",
      "UNISOC T606 Processor",
      "Single rear camera",
      "5000mAh Battery",
      "10W Charging",
      "Android 13 Go Edition"
    ],
    description: [
      "Great for basic use",
      "Affordable and simple",
      "Clean UI experience",
      "Durable build quality",
      "Excellent standby battery",
      "Ideal for students"
    ],
    features: [
      { icon: "main/201.png", text: "13 MP Rear Camera" },
      { icon: "main/200.png", text: "5 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Unisoc T606 Chip" },
      { icon: "main/202.png", text: "2GB RAM & 64GB Storage" }
    ]
  },
  {
    image: "motorola/19.jpg",
    name: "Moto G60",
    brand: "Motorola",
    rating: "★★★★☆",
    price: "₹15,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["motorola/42.jpg", "motorola/43.jpg", "motorola/44.jpg"],
    color: "Dynamic Gray, Frosted Champagne",
    capacity: "128GB",
    specifications: [
      "6.8-inch FHD+ HDR10 Display",
      "Snapdragon 732G",
      "Triple rear camera",
      "6000mAh Battery",
      "20W Turbo Charging",
      "Android 11"
    ],
    description: [
      "Massive battery backup",
      "Great display and brightness",
      "High-resolution main camera",
      "Gaming-friendly chip",
      "Stock Android experience",
      "Solid build quality"
    ],
    features: [
      { icon: "main/201.png", text: "108 MP Triple Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "6000mAh Battery" },
      { icon: "main/204.png", text: "Snapdragon 732G" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "motorola/20.jpg",
    name: "Moto G32",
    brand: "Motorola",
    rating: "★★★☆☆",
    price: "₹9,490",
    warranty: "1 Year",
    storage: "128GB",
    ram: "4GB",
    images: ["motorola/45.jpg", "motorola/46.jpg", "motorola/47.jpg"],
    color: "Mineral Gray, Satin Silver",
    capacity: "128GB",
    specifications: [
      "6.5-inch FHD+ LCD 90Hz",
      "Snapdragon 680 Processor",
      "Triple rear camera",
      "5000mAh Battery",
      "33W Turbo Charging",
      "Android 12"
    ],
    description: [
      "Smooth scrolling with 90Hz",
      "Good camera for segment",
      "Stereo speakers sound great",
      "Minimal bloatware UI",
      "Perfect for daily use",
      "Stylish matte finish"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Snapdragon 680 Chip" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  },
  {
    image: "motorola/21.jpg",
    name: "Moto E7 Power",
    brand: "Motorola",
    rating: "★★★★☆",
    price: "₹6,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "2GB",
    images: ["motorola/48.jpg", "motorola/49.jpg", "motorola/50.jpg"],
    color: "Tahiti Blue, Coral Red",
    capacity: "128GB",
    specifications: [
      "6.5-inch HD+ LCD",
      "MediaTek Helio G25",
      "Dual rear camera",
      "5000mAh Battery",
      "10W Charging",
      "Android 10"
    ],
    description: [
      "Affordable for entry users",
      "Simple Android experience",
      "Solid battery life",
      "Tough plastic back",
      "Good display size",
      "Ideal for calling and browsing"
    ],
    features: [
      { icon: "main/201.png", text: "13 MP Dual Camera" },
      { icon: "main/200.png", text: "5 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Helio G25 Processor" },
      { icon: "main/202.png", text: "2GB RAM & 32GB Storage" }
    ]
  },
  {
    image: "motorola/22.jpg",
    name: "Moto G71",
    brand: "Motorola",
    rating: "★★★☆☆",
    price: "₹13,599",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["motorola/51.jpg", "motorola/52.jpg", "motorola/53.jpg"],
    color: "Neptune Green, Arctic Blue",
    capacity: "128GB",
    specifications: [
      "6.4-inch FHD+ AMOLED",
      "Snapdragon 695 5G",
      "Triple rear camera",
      "5000mAh Battery",
      "33W Charging",
      "Android 11"
    ],
    description: [
      "5G ready smartphone",
      "Vibrant AMOLED panel",
      "Power-efficient chipset",
      "Clean and smooth UI",
      "Fast charging support",
      "Well-built and modern"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Snapdragon 695 5G" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "motorola/23.jpg",
    name: "Moto Edge 30",
    brand: "Motorola",
    rating: "★★★☆☆",
    price: "₹20,000",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["motorola/54.jpg", "motorola/55.jpg", "motorola/56.jpg"],
    color: "Meteor Gray, Aurora Green",
    capacity: "128GB",
    specifications: [
      "6.5-inch FHD+ pOLED Display",
      "Snapdragon 778G+ 5G",
      "Dual rear camera",
      "4020mAh Battery",
      "33W Turbo Charging",
      "144Hz Refresh Rate"
    ],
    description: [
      "Sleek and ultra-lightweight",
      "High refresh rate display",
      "Smooth animations",
      "Fast 5G speeds",
      "Clean Android 12",
      "Great for streaming"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Dual Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "4020mAh Battery" },
      { icon: "main/204.png", text: "Snapdragon 778G+" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "motorola/24.jpg",
    name: "Moto G22",
    brand: "Motorola",
    rating: "★★★☆☆",
    price: "₹28,483",
    warranty: "1 Year",
    storage: "128GB",
    ram: "4GB",
    images: ["motorola/57.jpg", "motorola/58.jpg", "motorola/59.jpg"],
    color: "Iceberg Blue, Cosmic Black",
    capacity: "128GB",
    specifications: [
      "6.5-inch HD+ 90Hz Display",
      "MediaTek Helio G37",
      "Quad rear camera",
      "5000mAh Battery",
      "20W Turbo Charging",
      "Android 12"
    ],
    description: [
      "High refresh display",
      "Stylish design",
      "Nice camera UI",
      "Good for light gaming",
      "Clean software experience",
      "Value for money"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Quad Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Helio G37 Chip" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  }
],










//// infinix products


Infinix:[
  {
  image: "infinix/1.jpg",
  name: "Infinix Zero 5G",
  brand: "Infinix",
  rating: "★★★☆☆",
  price: "₹14,962",
  warranty: "1 Year",
  storage: "128GB",
  ram: "8GB",
  images: ["infinix/1.jpg", "infinix/2.jpg", "infinix/3.jpg"],
  color: "Skylight Orange, Horizon Blue",
  capacity: "128GB",
  specifications: [
    "6.78-inch FHD+ IPS Display",
    "MediaTek Dimensity 900 5G Processor",
    "50MP AI Triple Rear Camera",
    "5000mAh Battery with 33W Fast Charging",
    "120Hz Refresh Rate",
    "XOS 10 based on Android 11"
  ],
  description: [
    "Powerful 5G performance with Dimensity 900",
    "Smooth scrolling experience with 120Hz display",
    "Big battery life for all-day usage",
    "Triple camera setup for versatile photography",
    "Modern design with glossy finish",
    "Ideal for gaming and multitasking"
  ],
  features: [
    { icon: "main/201.png", text: "50 MP Rear Camera" },
    { icon: "main/200.png", text: "16 MP Front Camera" },
    { icon: "main/203.png", text: "5000mAh Battery" },
    { icon: "main/204.png", text: "Octa-Core CPU" },
    { icon: "main/202.png", text: "8GB RAM & 128GB Storage" }
  ]
},
{
  image: "infinix/4.jpg",
  name: "Infinix Smart 6",
  brand: "Infinix",
  rating: "★★★☆☆",
  price: "₹29,482",
  warranty: "1 Year",
  storage: "128GB",
  ram: "2GB",
  images: ["infinix/4.jpg", "infinix/5.jpg", "infinix/6.jpg"],
  color: "Polar Black, Heart of Ocean",
  capacity: "128GB",
  specifications: [
    "6.6-inch HD+ Display",
    "MediaTek Helio A22 Processor",
    "8MP Dual Rear Camera",
    "5000mAh Battery",
    "DTS Audio Processing",
    "Android 11 (Go Edition)"
  ],
  description: [
    "Budget-friendly smartphone",
    "Decent display for media viewing",
    "Long-lasting battery life",
    "Smooth performance for light tasks",
    "Dual SIM with face unlock",
    "Simple and clean UI"
  ],
  features: [
    { icon: "main/201.png", text: "8 MP Rear Camera" },
    { icon: "main/200.png", text: "5 MP Front Camera" },
    { icon: "main/203.png", text: "5000mAh Battery" },
    { icon: "main/204.png", text: "Quad-Core CPU" },
    { icon: "main/202.png", text: "2GB RAM & 64GB Storage" }
  ]
},
{
  image: "infinix/7.jpg",
  name: "Infinix Note 12",
  brand: "Infinix",
  rating: "★★★★☆",
  price: "₹9,684",
  warranty: "1 Year",
  storage: "128GB",
  ram: "6GB",
  images: ["infinix/7.jpg", "infinix/8.jpg", "infinix/9.jpg"],
  color: "Force Black, Jewel Blue",
  capacity: "128GB",
  specifications: [
    "6.7-inch FHD+ AMOLED Display",
    "MediaTek Helio G88 Processor",
    "50MP Dual Rear Camera",
    "5000mAh Battery with 33W Charging",
    "Widevine L1 Certified",
    "XOS 10.6 on Android 11"
  ],
  description: [
    "Stunning AMOLED display",
    "High-resolution camera system",
    "Fast and responsive UI",
    "Big storage for multimedia lovers",
    "Quick charging supported",
    "Slim and premium design"
  ],
  features: [
    { icon: "main/201.png", text: "50 MP Rear Camera" },
    { icon: "main/200.png", text: "16 MP Front Camera" },
    { icon: "main/203.png", text: "5000mAh Battery" },
    { icon: "main/204.png", text: "Octa-Core CPU" },
    { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
  ]
},
{
  image: "infinix/10.jpg",
  name: "Infinix Hot 30i",
  brand: "Infinix",
  rating: "★★★★☆",
  price: "₹53,559",
  warranty: "1 Year",
  storage: "128GB",
  ram: "8GB",
  images: ["infinix/10.jpg", "infinix/11.jpg", "infinix/12.jpg"],
  color: "Glacier Blue, Mirror Black",
  capacity: "128GB",
  specifications: [
    "6.6-inch HD+ Display",
    "Unisoc T606 Processor",
    "13MP Dual Rear Camera",
    "5000mAh Battery with 18W Charging",
    "90Hz Refresh Rate",
    "Android 12 with XOS 12"
  ],
  description: [
    "Fluid visuals with 90Hz screen",
    "Good performance with 8GB RAM",
    "Large battery capacity",
    "Attractive glass-like design",
    "Rear-mounted fingerprint sensor",
    "Expandable storage support"
  ],
  features: [
    { icon: "main/201.png", text: "13 MP Rear Camera" },
    { icon: "main/200.png", text: "8 MP Front Camera" },
    { icon: "main/203.png", text: "5000mAh Battery" },
    { icon: "main/204.png", text: "Octa-Core CPU" },
    { icon: "main/202.png", text: "8GB RAM & 128GB Storage" }
  ]
},
{
 image: "infinix/13.jpg",
  name: "Infinix Smart 7",
  brand: "Infinix",
  rating: "★★★☆☆",
  price: "₹18,378",
  warranty: "1 Year",
  storage: "128GB",
  ram: "4GB",
  images: ["infinix/13.jpg", "infinix/14.jpg", "infinix/15.jpg"],
  color: "Emerald Green, Night Black",
  capacity: "128GB",
  specifications: [
    "6.6-inch HD+ IPS Display",
    "Unisoc SC9863A Processor",
    "13MP AI Rear Camera",
    "6000mAh Battery",
    "Fingerprint & Face Unlock",
    "Android 12 Go Edition"
  ],
  description: [
    "Massive battery for extended use",
    "AI-enhanced rear camera",
    "Textured wave finish design",
    "Great for daily apps and media",
    "Power-efficient performance",
    "Dual SIM with microSD support"
  ],
  features: [
    { icon: "main/201.png", text: "13 MP Rear Camera" },
    { icon: "main/200.png", text: "5 MP Front Camera" },
    { icon: "main/203.png", text: "6000mAh Battery" },
    { icon: "main/204.png", text: "Octa-Core CPU" },
    { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
  ]
},
{
   image: "infinix/16.jpg",
  name: "Infinix Zero 30",
  brand: "Infinix",
  rating: "★★★☆☆",
  price: "₹45,972",
  warranty: "1 Year",
  storage: "128GB",
  ram: "12GB",
  images: ["infinix/16.jpg", "infinix/17.jpg", "infinix/18.jpg"],
  color: "Rome Green, Golden Hour",
  capacity: "128GB",
  specifications: [
    "6.78-inch AMOLED FHD+ Display (120Hz)",
    "MediaTek Dimensity 8020 Processor",
    "108MP Rear + 50MP Front Camera",
    "5000mAh Battery with 68W Fast Charging",
    "4K 60FPS Video Recording",
    "Android 13 with XOS 13"
  ],
  description: [
    "Flagship-grade cameras",
    "Elegant curved AMOLED display",
    "High refresh rate for smooth UX",
    "Ultra-fast 68W charging",
    "Great for vloggers and creators",
    "Premium glass body build"
  ],
  features: [
    { icon: "main/201.png", text: "108 MP Rear Camera" },
    { icon: "main/200.png", text: "50 MP Front Camera" },
    { icon: "main/203.png", text: "5000mAh Battery" },
    { icon: "main/204.png", text: "Octa-Core CPU" },
    { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
  ]
},
{
  image: "infinix/19.jpg",
  name: "Infinix Note 11",
  brand: "Infinix",
  rating: "★★★★★",
  price: "₹52,251",
  warranty: "1 Year",
  storage: "128GB",
  ram: "6GB",
  images: ["infinix/19.jpg", "infinix/20.jpg", "infinix/21.jpg"],
  color: "Graphite Black, Celestial Snow",
  capacity: "128GB",
  specifications: [
    "6.7-inch FHD+ AMOLED Display",
    "MediaTek Helio G88 Processor",
    "50MP Triple Rear Camera",
    "5000mAh Battery with 33W Fast Charging",
    "Slim 7.9mm Body",
    "Android 11 with XOS 10"
  ],
  description: [
    "Ultra-slim and lightweight design",
    "Powerful G88 gaming processor",
    "Fast charging support",
    "Immersive AMOLED viewing",
    "High-quality triple camera system",
    "Stereo speakers with DTS support"
  ],
  features: [
    { icon: "main/201.png", text: "50 MP Rear Camera" },
    { icon: "main/200.png", text: "16 MP Front Camera" },
    { icon: "main/203.png", text: "5000mAh Battery" },
    { icon: "main/204.png", text: "Octa-Core CPU" },
    { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
  ]
},
{
  image: "infinix/22.jpg",
  name: "Infinix Hot 20",
  brand: "Infinix",
  rating: "★★★★★",
  price: "₹46,031",
  warranty: "1 Year",
  storage: "128GB",
  ram: "6GB",
  images: ["infinix/22.jpg", "infinix/23.jpg", "infinix/24.jpg"],
  color: "Sonic Black, Tempo Blue",
  capacity: "128GB",
  specifications: [
    "6.82-inch HD+ Punch-Hole Display",
    "MediaTek Helio G85 Processor",
    "50MP Rear AI Camera",
    "5000mAh Battery with 18W Fast Charging",
    "120Hz Touch Sampling",
    "XOS 10.6 based on Android 12"
  ],
  description: [
    "Large immersive display",
    "Smooth performance with G85 chip",
    "Durable battery with decent fast charging",
    "Stylish design with thin bezels",
    "Rear fingerprint + face unlock",
    "Optimized for gaming & media"
  ],
  features: [
    { icon: "main/201.png", text: "50 MP Rear Camera" },
    { icon: "main/200.png", text: "8 MP Front Camera" },
    { icon: "main/203.png", text: "5000mAh Battery" },
    { icon: "main/204.png", text: "Octa-Core CPU" },
    { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
  ]
},
{
   image: "infinix/25.jpg",
  name: "Infinix Note 30",
  brand: "Infinix",
  rating: "★★★★★",
  price: "₹28,547",
  warranty: "1 Year",
  storage: "128GB",
  ram: "8GB",
  images: ["infinix/25.jpg", "infinix/26.jpg", "infinix/27.jpg"],
  color: "Obsidian Black, Sunset Gold",
  capacity: "128GB",
  specifications: [
    "6.78-inch FHD+ 120Hz Display",
    "MediaTek Helio G99 Processor",
    "64MP Triple Rear Camera",
    "5000mAh Battery with 45W Charging",
    "Stereo Dual Speakers by JBL",
    "Android 13 with XOS 13"
  ],
  description: [
    "High refresh rate for gaming",
    "JBL-tuned dual stereo speakers",
    "Excellent photo quality with 64MP lens",
    "Premium design with gold accents",
    "Advanced cooling technology",
    "Smooth multitasking with 8GB RAM"
  ],
  features: [
    { icon: "main/201.png", text: "64 MP Rear Camera" },
    { icon: "main/200.png", text: "16 MP Front Camera" },
    { icon: "main/203.png", text: "5000mAh Battery" },
    { icon: "main/204.png", text: "Octa-Core CPU" },
    { icon: "main/202.png", text: "8GB RAM & 128GB Storage" }
  ]
}
],










// Honors srtars ------

Honor: [
  {
    image: "honor/1.jpg",
    name: "Honor X9",
    brand: "Honor",
    rating: "★★★★★",
    price: "₹69,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["honor/1.jpg", "honor/2.jpg", "honor/3.jpg"],
    color: "Black, Green",
    capacity: "256GB",
    specifications: [
      "6.8-inch LTPO OLED Display",
      "Snapdragon 8 Gen 3 Processor",
      "50MP Triple Camera",
      "5600mAh Battery",
      "120Hz Refresh Rate",
      "IP68 Water & Dust Resistance"
    ],
    description: [
      "Flagship performance with stunning display",
      "Ultra-fast charging",
      "Pro-grade photography",
      "Durable and water resistant",
      "Immersive sound quality",
      "Premium curved design"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "5600mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "honor/4.jpg",
    name: "Honor 90",
    brand: "Honor",
    rating: "★★★★☆",
    price: "₹29,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["honor/4.jpg", "honor/5.jpg", "honor/6.jpg"],
    color: "Midnight Black, Sunrise Orange",
    capacity: "256GB",
    specifications: [
      "6.78-inch AMOLED Display",
      "Snapdragon 6 Gen 1 Processor",
      "108MP Main Camera",
      "5800mAh Battery",
      "120Hz Refresh Rate",
      "Drop-Resistant Build"
    ],
    description: [
      "Strong build with drop resistance",
      "High-resolution AMOLED display",
      "Massive battery life",
      "Excellent mid-range performance",
      "Slim and stylish design",
      "Smooth multitasking experience"
    ],
    features: [
      { icon: "main/201.png", text: "108 MP Main Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5800mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "honor/7.jpg",
    name: "Honor X7",
    brand: "Honor",
    rating: "★★★★★",
    price: "₹1,24,999",
    warranty: "1 Year",
    storage: "512GB",
    ram: "16GB",
    images: ["honor/7.jpg", "honor/8.jpg", "honor/9.jpg"],
    color: "Purple, Black",
    capacity: "512GB",
    specifications: [
      "7.92-inch Foldable OLED Display",
      "Snapdragon 8 Gen 2 Processor",
      "54MP Main Camera",
      "5000mAh Battery",
      "66W Fast Charging",
      "Stylus Support"
    ],
    description: [
      "Premium foldable with slim profile",
      "Smooth multitasking experience",
      "Professional-grade camera system",
      "Large battery with fast charging",
      "Stylus support for productivity",
      "Flagship-level design and feel"
    ],
    features: [
      { icon: "main/201.png", text: "54 MP Main Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "16GB RAM & 512GB Storage" }
    ]
  },
  {
    image: "honor/10.jpg",
    name: "Honor 70",
    brand: "Honor",
    rating: "★★★★☆",
    price: "₹37,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["honor/10.jpg", "honor/11.jpg", "honor/12.jpg"],
    color: "Emerald Green, Midnight Black",
    capacity: "256GB",
    specifications: [
      "6.7-inch AMOLED Display",
      "Snapdragon 7 Gen 1 Processor",
      "200MP Ultra-Clear Camera",
      "5000mAh Battery",
      "66W Fast Charging",
      "Eye Comfort Display"
    ],
    description: [
      "Ultra-high resolution photography",
      "Eye-friendly AMOLED screen",
      "Fast charging support",
      "Premium slim design",
      "Smooth 120Hz refresh rate",
      "Powerful yet efficient performance"
    ],
    features: [
      { icon: "main/201.png", text: "200 MP Camera" },
      { icon: "main/200.png", text: "50 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "honor/13.jpg",
    name: "Honor X8a",
    brand: "Honor",
    rating: "★★★★☆",
    price: "₹22,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["honor/13.jpg", "honor/14.jpg", "honor/15.jpg"],
    color: "Sunrise Orange, Black",
    capacity: "256GB",
    specifications: [
      "6.78-inch AMOLED Curved Display",
      "Snapdragon 6 Gen 1 Processor",
      "108MP Main Camera",
      "5800mAh Battery",
      "Drop-Resistant Glass",
      "66W Fast Charging"
    ],
    description: [
      "Tough build for daily use",
      "Large high-quality display",
      "Excellent battery backup",
      "Stylish color options",
      "Good mid-range camera performance",
      "Fast charging for convenience"
    ],
    features: [
      { icon: "main/201.png", text: "108 MP Main Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "5800mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "honor/16.jpg",
    name: "Honor 50",
    brand: "Honor",
    rating: "★★★☆☆",
    price: "₹15,499",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["honor/16.jpg", "honor/17.jpg", "honor/18.jpg"],
    color: "Black, Blue",
    capacity: "128GB",
    specifications: [
      "6.74-inch LCD Display",
      "MediaTek Dimensity 6020 Processor",
      "50MP Dual Camera",
      "6000mAh Battery",
      "90Hz Refresh Rate",
      "Side Fingerprint Sensor"
    ],
    description: [
      "Affordable 5G experience",
      "Large battery for long usage",
      "Decent camera for its price",
      "Good performance for budget range",
      "Simple, sturdy design",
      "Smooth scrolling with 90Hz"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Dual Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "6000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "honor/19.jpg",
    name: "Honor 90 Lite",
    brand: "Honor",
    rating: "★★★★★",
    price: "₹98,999",
    warranty: "2 Years",
    storage: "512GB",
    ram: "16GB",
    images: ["honor/19.jpg", "honor/20.jpg", "honor/21.jpg"],
    color: "Black, Gold",
    capacity: "512GB",
    specifications: [
      "6.81-inch LTPO OLED Display",
      "Snapdragon 8 Gen 2 Processor",
      "50MP Quad Camera",
      "5450mAh Battery",
      "IP68 Water Resistance",
      "100W Fast Charging"
    ],
    description: [
      "Top-tier performance",
      "Luxury finish and build",
      "Industry-leading camera system",
      "Fastest charging in its class",
      "Water and dust resistant",
      "Flagship audio experience"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Quad Camera" },
      { icon: "main/200.png", text: "12 MP Front Camera" },
      { icon: "main/203.png", text: "5450mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "16GB RAM & 512GB Storage" }
    ]
  },
  {
    image: "honor/22.jpg",
    name: "Honor 20",
    brand: "Honor",
    rating: "★★★☆☆",
    price: "₹16,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["honor/22.jpg", "honor/23.jpg", "honor/24.jpg"],
    color: "Cyan Lake, Titanium Silver",
    capacity: "128GB",
    specifications: [
      "6.7-inch LCD Display",
      "MediaTek Helio G88 Processor",
      "100MP Main Camera",
      "4500mAh Battery",
      "22.5W Fast Charging",
      "Slim Bezel Design"
    ],
    description: [
      "Affordable phone with high-res camera",
      "Sleek and lightweight",
      "Smooth user experience",
      "Decent battery backup",
      "Fast charging capability",
      "Vibrant and sharp display"
    ],
    features: [
      { icon: "main/201.png", text: "100 MP Main Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "4500mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "honor/25.jpg",
    name: "Honor 9X",
    brand: "Honor",
    rating: "★★★★☆",
    price: "₹45,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["honor/25.jpg", "honor/26.jpg", "honor/27.jpg"],
    color: "Blue, Pink",
    capacity: "256GB",
    specifications: [
      "6.78-inch AMOLED Display",
      "Snapdragon 8+ Gen 1 Processor",
      "160MP Main Camera",
      "4800mAh Battery",
      "66W Fast Charging",
      "Curved Glass Design"
    ],
    description: [
      "High-res photography at its best",
      "Premium display quality",
      "Elegant design",
      "Strong battery life",
      "Flagship-grade chipset",
      "Vivid and immersive visuals"
    ],
    features: [
      { icon: "main/201.png", text: "160 MP Main Camera" },
      { icon: "main/200.png", text: "50 MP Front Camera" },
      { icon: "main/203.png", text: "4800mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  }
],







// one plus--------------------------------




OnePlus: [
  {
    image: "oneplus/1.jpg",
    name: "OnePlus Nord CE 2",
    brand: "OnePlus",
    rating: "★★★★★",
    price: "₹79,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["oneplus/1.jpg", "oneplus/2.jpg", "oneplus/3.jpg"],
    color: "Flowy Emerald, Silky Black",
    capacity: "256GB",
    specifications: [
      "6.82-inch AMOLED Display",
      "Snapdragon 8 Gen 3 Processor",
      "50MP Triple Camera",
      "5400mAh Battery",
      "120Hz Refresh Rate",
      "IP68 Water Resistance"
    ],
    description: [
      "Flagship speed and design",
      "High-quality curved AMOLED",
      "All-day battery with fast charging",
      "Premium build quality",
      "Excellent low-light photography",
      "Smooth OxygenOS experience"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "5400mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
   image: "oneplus/4.jpg",
    name: "OnePlus 10R",
    brand: "OnePlus",
    rating: "★★★★☆",
    price: "₹44,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["oneplus/4.jpg", "oneplus/5.jpg", "oneplus/6.jpg"],
    color: "Sonic Black, Galactic Silver",
    capacity: "256GB",
    specifications: [
      "6.7-inch AMOLED Display",
      "Snapdragon 8+ Gen 1 Processor",
      "50MP Main Camera",
      "5000mAh Battery",
      "100W SUPERVOOC Charging",
      "HDR10+ Support"
    ],
    description: [
      "Fast charging powerhouse",
      "Vibrant AMOLED visuals",
      "Strong performance for gamers",
      "Flagship camera experience",
      "Sleek and light design",
      "Lag-free OxygenOS"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Main Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
   image: "oneplus/7.jpg",
    name: "OnePlus 11",
    brand: "OnePlus",
    rating: "★★★★★",
    price: "₹1,39,999",
    warranty: "1 Year",
    storage: "512GB",
    ram: "16GB",
    images: ["oneplus/7.jpg", "oneplus/8.jpg", "oneplus/9.jpg"],
    color: "Voyager Black, Emerald Dusk",
    capacity: "512GB",
    specifications: [
      "7.82-inch Foldable AMOLED Display",
      "Snapdragon 8 Gen 2 Processor",
      "48MP Triple Hasselblad Camera",
      "4805mAh Battery",
      "67W SUPERVOOC Charging",
      "Dolby Vision Support"
    ],
    description: [
      "Premium foldable flagship",
      "Hasselblad-tuned photography",
      "Ultra-bright foldable display",
      "Compact yet powerful design",
      "Smooth multi-tasking",
      "High durability hinge system"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Triple Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "4805mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "16GB RAM & 512GB Storage" }
    ]
  },
  {
    image: "oneplus/10.jpg",
    name: "OnePlus Nord 2T",
    brand: "OnePlus",
    rating: "★★★★☆",
    price: "₹33,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["oneplus/10.jpg", "oneplus/11.jpg", "oneplus/12.jpg"],
    color: "Tempest Gray, Misty Green",
    capacity: "256GB",
    specifications: [
      "6.74-inch AMOLED Display",
      "MediaTek Dimensity 9000 Processor",
      "50MP OIS Camera",
      "5000mAh Battery",
      "80W SUPERVOOC Charging",
      "120Hz Refresh Rate"
    ],
    description: [
      "Premium Nord experience",
      "Bright and colorful AMOLED",
      "Super fast charging",
      "Smooth OxygenOS animations",
      "Reliable all-day performance",
      "Elegant glass design"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP OIS Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
   image: "oneplus/13.jpg",
    name: "OnePlus 9R",
    brand: "OnePlus",
    rating: "★★★★☆",
    price: "₹45,999",
    warranty: "1 Year",
    storage: "512GB",
    ram: "16GB",
    images: ["oneplus/13.jpg", "oneplus/14.jpg", "oneplus/15.jpg"],
    color: "Aurora Silver, Dark Gray",
    capacity: "512GB",
    specifications: [
      "6.74-inch AMOLED Display",
      "Snapdragon 8 Gen 2 Processor",
      "50MP Sony IMX890 Camera",
      "5000mAh Battery",
      "150W SUPERVOOC Charging",
      "Pro Gaming Mode"
    ],
    description: [
      "Blazing fast charging",
      "Gaming-optimized performance",
      "Ultra-smooth visuals",
      "High-end camera sensor",
      "Large storage for heavy users",
      "Excellent thermal management"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP IMX890 Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "16GB RAM & 512GB Storage" }
    ]
  },
  {
    image: "oneplus/16.jpg",
    name: "OnePlus Nord CE 3",
    brand: "OnePlus",
    rating: "★★★★☆",
    price: "₹61,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["oneplus/16.jpg", "oneplus/17.jpg", "oneplus/18.jpg"],
    color: "Volcanic Black, Emerald Forest",
    capacity: "256GB",
    specifications: [
      "6.7-inch AMOLED Display",
      "Snapdragon 8 Gen 1 Processor",
      "48MP Hasselblad Camera",
      "5000mAh Battery",
      "80W SUPERVOOC Charging",
      "LTPO 2.0 Technology"
    ],
    description: [
      "Smooth flagship performance",
      "Natural Hasselblad color tuning",
      "Gorgeous curved display",
      "Long-lasting battery life",
      "Premium metal-glass build",
      "Advanced cooling system"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Hasselblad Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "oneplus/19.jpg",
    name: "OnePlus 8T",
    brand: "OnePlus",
    rating: "★★★☆☆",
    price: "₹19,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "8GB",
    images: ["oneplus/19.jpg", "oneplus/20.jpg", "oneplus/21.jpg"],
    color: "Pastel Lime, Chromatic Gray",
    capacity: "128GB",
    specifications: [
      "6.72-inch LCD Display",
      "Snapdragon 695 Processor",
      "108MP Main Camera",
      "5000mAh Battery",
      "67W SUPERVOOC Charging",
      "Stereo Speakers"
    ],
    description: [
      "Budget-friendly 5G",
      "High megapixel photography",
      "Loud and clear stereo sound",
      "Fast charging for daily use",
      "Large battery for binge watching",
      "Smooth scrolling with 120Hz"
    ],
    features: [
      { icon: "main/201.png", text: "108 MP Main Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 128GB Storage" }
    ]
  },
  {
   image: "oneplus/22.jpg",
    name: "OnePlus Nord",
    brand: "OnePlus",
    rating: "★★★★☆",
    price: "₹42,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["oneplus/22.jpg", "oneplus/23.jpg", "oneplus/24.jpg"],
    color: "Hacker Black, Nano Silver",
    capacity: "256GB",
    specifications: [
      "6.62-inch AMOLED Display",
      "Snapdragon 888 Processor",
      "50MP Main Camera",
      "4500mAh Battery",
      "65T Warp Charging",
      "Hyper Touch Gaming"
    ],
    description: [
      "High refresh rate gaming",
      "Responsive touch experience",
      "Strong flagship-grade camera",
      "Fast charging and long battery",
      "Sleek design and lightweight",
      "OxygenOS optimized performance"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Main Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "4500mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
   image: "oneplus/25.jpg",
    name: "OnePlus 10T",
    brand: "OnePlus",
    rating: "★★★☆☆",
    price: "₹25,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["oneplus/25.jpg", "oneplus/26.jpg", "oneplus/27.jpg"],
    color: "Nitro Blue, Gray Shadow",
    capacity: "256GB",
    specifications: [
      "6.59-inch LCD Display",
      "MediaTek Dimensity 8100-Max Processor",
      "64MP Triple Camera",
      "5000mAh Battery",
      "67W SUPERVOOC Charging",
      "Gaming Triggers"
    ],
    description: [
      "Affordable gaming powerhouse",
      "Smooth performance in heavy titles",
      "Fast charging support",
      "Durable design",
      "Good camera for the price",
      "Cool under long gaming sessions"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Triple Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "oneplus/28.jpg",
    name: "OnePlus 12",
    brand: "OnePlus",
    rating: "★★★★☆",
    price: "₹28,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "8GB",
    images: ["oneplus/28.jpg", "oneplus/29.jpg", "oneplus/30.jpg"],
    color: "Gray Shadow, Jade Fog",
    capacity: "128GB",
    specifications: [
      "6.43-inch AMOLED Display",
      "MediaTek Dimensity 1300 Processor",
      "50MP OIS Camera",
      "4500mAh Battery",
      "80W SUPERVOOC Charging",
      "Dual Stereo Speakers"
    ],
    description: [
      "Compact yet powerful",
      "Vibrant AMOLED visuals",
      "Quick charge for on-the-go use",
      "Smooth UI with OxygenOS",
      "Flagship-level camera for mid-range",
      "Lightweight and comfortable grip"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP OIS Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "4500mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 128GB Storage" }
    ]
  }
],













/// real me ---------
Realme: [
  {
    image: "realme/1.jpg",
    name: "Realme Narzo 50",
    brand: "Realme",
    rating: "★★★★★",
    price: "₹58,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["realme/1.jpg", "realme/2.jpg", "realme/3.jpg"],
    color: "Red Rock, Starry Night",
    capacity: "256GB",
    specifications: [
      "6.78-inch AMOLED Display",
      "Snapdragon 8 Gen 3 Processor",
      "50MP Triple Camera",
      "5400mAh Battery",
      "120Hz Refresh Rate",
      "150W UltraDart Charging"
    ],
    description: [
      "Blazing-fast flagship performance",
      "Flagship-level AMOLED display",
      "Ultra-fast charging technology",
      "Premium leather finish",
      "Versatile camera system",
      "Smooth and responsive UI"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "5400mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
   image: "realme/4.jpg",
    name: "Realme 11x",
    brand: "Realme",
    rating: "★★★★☆",
    price: "₹14,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["realme/4.jpg", "realme/5.jpg", "realme/6.jpg"],
    color: "Nebula Purple, Stellar Green",
    capacity: "128GB",
    specifications: [
      "6.6-inch LCD Display",
      "MediaTek Dimensity 6100+ Processor",
      "64MP AI Camera",
      "5000mAh Battery",
      "33W Fast Charging",
      "120Hz Refresh Rate"
    ],
    description: [
      "Budget-friendly 5G experience",
      "High refresh rate display",
      "Decent AI camera performance",
      "Long-lasting battery",
      "Fast charging in budget segment",
      "Attractive dual-tone design"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP AI Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "realme/7.jpg",
    name: "Realme C55",
    brand: "Realme",
    rating: "★★★★★",
    price: "₹34,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["realme/7.jpg", "realme/8.jpg", "realme/9.jpg"],
    color: "Submarine Blue, Navigator Beige",
    capacity: "256GB",
    specifications: [
      "6.7-inch Curved AMOLED Display",
      "Snapdragon 7s Gen 2 Processor",
      "64MP Periscope Camera",
      "5000mAh Battery",
      "67W Fast Charging",
      "IP65 Water Resistance"
    ],
    description: [
      "Premium periscope zoom camera",
      "Stunning curved display design",
      "Smooth performance for daily use",
      "Fast charging support",
      "Water-resistant build",
      "Great for photography lovers"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Periscope Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "realme/10.jpg",
    name: "Realme C33",
    brand: "Realme",
    rating: "★★★☆☆",
    price: "₹8,999",
    warranty: "1 Year",
    storage: "64GB",
    ram: "4GB",
    images: ["realme/10.jpg", "realme/11.jpg", "realme/12.jpg"],
    color: "Feather Gold, Starlight Black",
    capacity: "64GB",
    specifications: [
      "6.74-inch LCD Display",
      "Unisoc T612 Processor",
      "50MP AI Camera",
      "5000mAh Battery",
      "33W Fast Charging",
      "90Hz Refresh Rate"
    ],
    description: [
      "Affordable entry-level smartphone",
      "Decent display for its price",
      "Large battery backup",
      "Lightweight and slim profile",
      "Good camera for casual shots",
      "Fast charging in budget"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP AI Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  },
  {
    image: "realme/13.jpg",
    name: "Realme GT Neo 2",
    brand: "Realme",
    rating: "★★★★☆",
    price: "₹27,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["realme/13.jpg", "realme/14.jpg", "realme/15.jpg"],
    color: "Final Fantasy, Polar White",
    capacity: "256GB",
    specifications: [
      "6.74-inch AMOLED Display",
      "Snapdragon 7+ Gen 2 Processor",
      "64MP Triple Camera",
      "5500mAh Battery",
      "100W UltraDart Charging",
      "144Hz Refresh Rate"
    ],
    description: [
      "High refresh rate AMOLED display",
      "Fast charging mid-range device",
      "Powerful gaming-friendly chipset",
      "Sleek and premium design",
      "Long battery endurance",
      "Great multimedia experience"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Triple Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5500mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "realme/16.jpg",
    name: "Realme Narzo N55",
    brand: "Realme",
    rating: "★★★★☆",
    price: "₹15,499",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["realme/16.jpg", "realme/17.jpg", "realme/18.jpg"],
    color: "Purple Dawn, Midnight Black",
    capacity: "128GB",
    specifications: [
      "6.6-inch LCD Display",
      "MediaTek Dimensity 6100+ Processor",
      "64MP AI Camera",
      "5000mAh Battery",
      "33W Fast Charging",
      "Dynamic Mini Capsule UI"
    ],
    description: [
      "Stylish mid-range 5G device",
      "Reliable day-to-day performance",
      "Good display quality",
      "Long battery backup",
      "Attractive design with mini capsule UI",
      "Fast charging supported"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP AI Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "realme/19.jpg",
    name: "Realme 9 Pro",
    brand: "Realme",
    rating: "★★★☆☆",
    price: "₹13,499",
    warranty: "1 Year",
    storage: "128GB",
    ram: "4GB",
    images: ["realme/19.jpg", "realme/20.jpg", "realme/21.jpg"],
    color: "Sunny Oasis, Dark Purple",
    capacity: "128GB",
    specifications: [
      "6.6-inch LCD Display",
      "MediaTek Dimensity 6100+ Processor",
      "64MP AI Camera",
      "5000mAh Battery",
      "33W Fast Charging",
      "IP54 Dust & Splash Resistance"
    ],
    description: [
      "Affordable 5G device",
      "Dust and splash resistance",
      "Smooth daily performance",
      "Long battery endurance",
      "Fast charging in budget",
      "Bright and vivid colors"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP AI Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "realme/22.jpg",
    name: "Realme X7 Max",
    brand: "Realme",
    rating: "★★★★☆",
    price: "₹25,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["realme/22.jpg", "realme/23.jpg", "realme/24.jpg"],
    color: "Dash Yellow, Shade Black",
    capacity: "256GB",
    specifications: [
      "6.62-inch AMOLED Display",
      "Snapdragon 870 Processor",
      "64MP Triple Camera",
      "5000mAh Battery",
      "80W UltraDart Charging",
      "Racing Stripe Design"
    ],
    description: [
      "Sporty racing stripe design",
      "Smooth gaming performance",
      "Bright and colorful display",
      "Fast charging supported",
      "Premium build quality",
      "Long-lasting battery"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Triple Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "realme/25.jpg",
    name: "Realme Narzo 30",
    brand: "Realme",
    rating: "★★★☆☆",
    price: "₹10,999",
    warranty: "1 Year",
    storage: "64GB",
    ram: "4GB",
    images: ["realme/25.jpg", "realme/26.jpg", "realme/27.jpg"],
    color: "Sunshower, Rainy Night",
    capacity: "64GB",
    specifications: [
      "6.72-inch LCD Display",
      "MediaTek Helio G88 Processor",
      "64MP Dual Camera",
      "5000mAh Battery",
      "33W Fast Charging",
      "Mini Capsule UI"
    ],
    description: [
      "Budget smartphone with large display",
      "Smooth casual performance",
      "Good battery backup",
      "Fast charging support",
      "Clean and simple design",
      "Useful mini capsule UI features"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Dual Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  },
  {
    image: "realme/28.jpg",
    name: "Realme 8i",
    brand: "Realme",
    rating: "★★★★☆",
    price: "₹21,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["realme/28.jpg", "realme/29.jpg", "realme/30.jpg"],
    color: "Hyper Black, Hyper Blue",
    capacity: "128GB",
    specifications: [
      "6.4-inch AMOLED Display",
      "MediaTek Dimensity 920 Processor",
      "48MP Triple Camera",
      "5000mAh Battery",
      "33W Dart Charging",
      "In-Display Fingerprint"
    ],
    description: [
      "Smooth AMOLED visuals",
      "Reliable mid-range performance",
      "Strong battery backup",
      "Fast charging support",
      "Slim and comfortable design",
      "Good camera quality"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Triple Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  }
],




// oppo -------------------






Oppo: [
  {
    "image": "oppo/1.jpg",
    "name": "Oppo A17",
    "brand": "Oppo",
    "rating": "★★★★★",
    "price": "₹71,999",
    "warranty": "1 Year",
    "storage": "256GB",
    "ram": "12GB",
    "images": ["oppo/1.jpg", "oppo/2.jpg", "oppo/3.jpg"],
    "color": "Black, Green",
    "capacity": "256GB",
    "specifications": [
      "6.82-inch AMOLED LTPO Display",
      "Snapdragon 8 Gen 2 Processor",
      "50MP Triple Camera with Hasselblad",
      "5000mAh Battery",
      "IP68 Water Resistance",
      "100W SuperVOOC Fast Charging"
    ],
    "description": [
      "Flagship-level performance",
      "Best-in-class camera setup",
      "Curved edge display",
      "Super-fast charging",
      "Premium glass build",
      "Water and dust resistant"
    ],
    "features": [
      { "icon": "main/201.png", "text": "50 MP Triple Camera" },
      { "icon": "main/200.png", "text": "32 MP Front Camera" },
      { "icon": "main/203.png", "text": "5000mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "12GB RAM & 256GB Storage" }
    ]
  },
  {
    "image": "oppo/4.jpg",
    "name": "Oppo A78",
    "brand": "Oppo",
    "rating": "★★★★☆",
    "price": "₹54,999",
    "warranty": "1 Year",
    "storage": "256GB",
    "ram": "12GB",
    "images": ["oppo/4.jpg", "oppo/5.jpg", "oppo/6.jpg"],
    "color": "Glossy Purple, Silvery Grey",
    "capacity": "256GB",
    "specifications": [
      "6.7-inch AMOLED Display",
      "Snapdragon 8+ Gen 1 Processor",
      "64MP Periscope Telephoto Camera",
      "4700mAh Battery",
      "80W SuperVOOC Fast Charging",
      "120Hz Refresh Rate"
    ],
    "description": [
      "Elegant slim profile",
      "Superb zoom capability",
      "Bright and smooth display",
      "Ultra-fast charging",
      "Powerful processor",
      "Perfect for photography lovers"
    ],
    "features": [
      { "icon": "main/201.png", "text": "64 MP + 50 MP + 8 MP" },
      { "icon": "main/200.png", "text": "32 MP Front Camera" },
      { "icon": "main/203.png", "text": "4700mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "12GB RAM & 256GB Storage" }
    ]
  },
  {
    "image": "oppo/7.jpg",
    "name": "Oppo Reno 8",
    "brand": "Oppo",
    "rating": "★★★★☆",
    "price": "₹27,999",
    "warranty": "1 Year",
    "storage": "128GB",
    "ram": "8GB",
    "images": ["oppo/7.jpg", "oppo/8.jpg", "oppo/9.jpg"],
    "color": "Ocean Blue, Lava Red",
    "capacity": "128GB",
    "specifications": [
      "6.7-inch AMOLED Display",
      "MediaTek Dimensity 7050",
      "64MP Triple Camera",
      "5000mAh Battery",
      "67W SuperVOOC Charging",
      "120Hz Refresh Rate"
    ],
    "description": [
      "Stylish design with gradient finish",
      "Great value for money",
      "Strong midrange performance",
      "Smooth scrolling experience",
      "Reliable battery life",
      "Fast charging supported"
    ],
    "features": [
      { "icon": "main/201.png", "text": "64 MP Triple Camera" },
      { "icon": "main/200.png", "text": "32 MP Front Camera" },
      { "icon": "main/203.png", "text": "5000mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "8GB RAM & 128GB Storage" }
    ]
  },
  {
    "image": "oppo/10.jpg",
    "name": "Oppo K10",
    "brand": "Oppo",
    "rating": "★★★★☆",
    "price": "₹18,999",
    "warranty": "1 Year",
    "storage": "128GB",
    "ram": "8GB",
    "images": ["oppo/10.jpg", "oppo/11.jpg", "oppo/12.jpg"],
    "color": "Glowing Black, Glowing Blue",
    "capacity": "128GB",
    "specifications": [
      "6.56-inch LCD Display",
      "MediaTek Dimensity 700",
      "50MP Dual Camera",
      "5000mAh Battery",
      "33W SuperVOOC Charging",
      "90Hz Refresh Rate"
    ],
    "description": [
      "Affordable 5G smartphone",
      "Large battery capacity",
      "Bright display for daily use",
      "Fast and efficient charging",
      "Decent performance for its price",
      "Sleek and lightweight design"
    ],
    "features": [
      { "icon": "main/201.png", "text": "50 MP Dual Camera" },
      { "icon": "main/200.png", "text": "8 MP Front Camera" },
      { "icon": "main/203.png", "text": "5000mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "8GB RAM & 128GB Storage" }
    ]
  },
  {
    "image": "oppo/13.jpg",
    "name": "Oppo F21 Pro",
    "brand": "Oppo",
    "rating": "★★★★☆",
    "price": "₹21,999",
    "warranty": "1 Year",
    "storage": "256GB",
    "ram": "8GB",
    "images": ["oppo/13.jpg", "oppo/14.jpg", "oppo/15.jpg"],
    "color": "Moon Shadow Gray, Glacier Blue",
    "capacity": "256GB",
    "specifications": [
      "6.7-inch AMOLED Display",
      "Snapdragon 782G Processor",
      "108MP Triple Camera",
      "5000mAh Battery",
      "100W SuperVOOC Charging",
      "120Hz Refresh Rate"
    ],
    "description": [
      "High-res 108MP camera",
      "Ultra-fast charging speed",
      "Smooth 120Hz display",
      "Powerful Snapdragon chipset",
      "Slim and modern look",
      "Great value flagship killer"
    ],
    "features": [
      { "icon": "main/201.png", "text": "108 MP Triple Camera" },
      { "icon": "main/200.png", "text": "16 MP Front Camera" },
      { "icon": "main/203.png", "text": "5000mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "8GB RAM & 256GB Storage" }
    ]
  },
  {
    "image": "oppo/16.jpg",
    "name": "Oppo A57",
    "brand": "Oppo",
    "rating": "★★★★★",
    "price": "₹45,999",
    "warranty": "1 Year",
    "storage": "256GB",
    "ram": "12GB",
    "images": ["oppo/16.jpg", "oppo/17.jpg", "oppo/18.jpg"],
    "color": "Glazed Green, Glazed Black",
    "capacity": "256GB",
    "specifications": [
      "6.7-inch AMOLED Display",
      "MediaTek Dimensity 8100-MAX",
      "50MP Triple Camera",
      "4500mAh Battery",
      "80W SuperVOOC Charging",
      "120Hz Refresh Rate"
    ],
    "description": [
      "Elegant slim design",
      "Pro-grade camera quality",
      "Excellent low-light performance",
      "Smooth and fluid visuals",
      "Fast charging supported",
      "Perfect for multimedia use"
    ],
    "features": [
      { "icon": "main/201.png", "text": "50 MP Triple Camera" },
      { "icon": "main/200.png", "text": "32 MP Front Camera" },
      { "icon": "main/203.png", "text": "4500mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "12GB RAM & 256GB Storage" }
    ]
  },
  {
    "image": "oppo/19.jpg",
    "name": "Oppo A77s",
    "brand": "Oppo",
    "rating": "★★★★☆",
    "price": "₹24,999",
    "warranty": "1 Year",
    "storage": "128GB",
    "ram": "8GB",
    "images": ["oppo/19.jpg", "oppo/20.jpg", "oppo/21.jpg"],
    "color": "Sunset Orange, Cosmic Black",
    "capacity": "128GB",
    "specifications": [
      "6.43-inch AMOLED Display",
      "Snapdragon 695 5G",
      "64MP Triple Camera",
      "4500mAh Battery",
      "33W SuperVOOC Charging",
      "90Hz Refresh Rate"
    ],
    "description": [
      "Vibrant AMOLED screen",
      "Compact and stylish build",
      "Balanced performance",
      "Fast charging convenience",
      "Great selfie camera",
      "Perfect for everyday use"
    ],
    "features": [
      { "icon": "main/201.png", "text": "64 MP Triple Camera" },
      { "icon": "main/200.png", "text": "16 MP Front Camera" },
      { "icon": "main/203.png", "text": "4500mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "8GB RAM & 128GB Storage" }
    ]
  },
  {
   "image": "oppo/22.jpg",
    "name": "Oppo A16k",
    "brand": "Oppo",
    "rating": "★★★★☆",
    "price": "₹20,999",
    "warranty": "1 Year",
    "storage": "256GB",
    "ram": "8GB",
    "images": ["oppo/22.jpg", "oppo/23.jpg", "oppo/24.jpg"],
    "color": "Dreamy Blue, Cool Black",
    "capacity": "256GB",
    "specifications": [
      "6.72-inch LCD Display",
      "Snapdragon 695 5G",
      "64MP Dual Camera",
      "5000mAh Battery",
      "67W Fast Charging",
      "120Hz Refresh Rate"
    ],
    "description": [
      "Huge battery backup",
      "Strong mid-range performance",
      "Smooth 120Hz display",
      "Good camera performance",
      "Ample storage capacity",
      "Excellent price-to-performance ratio"
    ],
    "features": [
      { "icon": "main/201.png", "text": "64 MP Dual Camera" },
      { "icon": "main/200.png", "text": "32 MP Front Camera" },
      { "icon": "main/203.png", "text": "5000mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "8GB RAM & 256GB Storage" }
    ]
  },
  {
    "image": "oppo/25.jpg",
    "name": "Oppo F19",
    "brand": "Oppo",
    "rating": "★★★★☆",
    "price": "₹16,999",
    "warranty": "1 Year",
    "storage": "128GB",
    "ram": "6GB",
    "images": ["oppo/25.jpg", "oppo/26.jpg", "oppo/27.jpg"],
    "color": "Dazzling Purple, Glowing Black",
    "capacity": "128GB",
    "specifications": [
      "6.56-inch LCD Display",
      "MediaTek Dimensity 6020",
      "50MP Dual Camera",
      "5000mAh Battery",
      "33W Fast Charging",
      "90Hz Refresh Rate"
    ],
    "description": [
      "Affordable 5G option",
      "Long-lasting battery",
      "Decent everyday performance",
      "Attractive color options",
      "Smooth basic gaming",
      "Value for money"
    ],
    "features": [
      { "icon": "main/201.png", "text": "50 MP Dual Camera" },
      { "icon": "main/200.png", "text": "8 MP Front Camera" },
      { "icon": "main/203.png", "text": "5000mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "6GB RAM & 128GB Storage" }
    ]
  },
  {
    "image": "oppo/28.jpg",
    "name": "Oppo Reno 7",
    "brand": "Oppo",
    "rating": "★★★★☆",
    "price": "₹28,999",
    "warranty": "1 Year",
    "storage": "256GB",
    "ram": "8GB",
    "images": ["oppo/28.jpg", "oppo/29.jpg", "oppo/30.jpg"],
    "color": "Startrails Blue, Starlight Black",
    "capacity": "256GB",
    "specifications": [
      "6.43-inch AMOLED Display",
      "MediaTek Dimensity 900",
      "64MP Triple Camera",
      "4500mAh Battery",
      "65W SuperVOOC Charging",
      "90Hz Refresh Rate"
    ],
    "description": [
      "Compact and stylish",
      "Excellent selfie camera",
      "Good gaming performance",
      "Fast charging support",
      "Bright and vivid display",
      "Durable build quality"
    ],
    "features": [
      { "icon": "main/201.png", "text": "64 MP Triple Camera" },
      { "icon": "main/200.png", "text": "32 MP Front Camera" },
      { "icon": "main/203.png", "text": "4500mAh Battery" },
      { "icon": "main/204.png", "text": "Octa-Core CPU" },
      { "icon": "main/202.png", "text": "8GB RAM & 256GB Storage" }
    ]
  }
],





/// poco --------------------------







Poco: [
  {
    image: "poco/1.jpg",
    name: "Poco X5",
    brand: "Poco",
    rating: "★★★★★",
    price: "₹7,699",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["poco/1.jpg", "poco/2.jpg", "poco/3.jpg"],
    color: "Yellow, Black",
    capacity: "128GB",
    specifications: [
      "6.67-inch AMOLED Display",
      "Snapdragon 778G Processor",
      "108MP Triple Camera",
      "5000mAh Battery",
      "120Hz Refresh Rate",
      "Side Fingerprint Sensor"
    ],
    description: [
      "Flagship-level performance",
      "High-refresh AMOLED display",
      "Long battery life",
      "Slim and stylish design",
      "Ideal for gaming",
      "Fast charging support"
    ],
    features: [
      { icon: "main/201.png", text: "108 MP Triple Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
     image: "poco/4.jpg",
    name: "Poco F4",
    brand: "Poco",
    rating: "★★★★☆",
    price: "₹15,499",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["poco/4.jpg", "poco/5.jpg", "poco/6.jpg"],
    color: "Nebula Green, Night Black",
    capacity: "256GB",
    specifications: [
      "6.67-inch AMOLED Display",
      "Snapdragon 870 Processor",
      "64MP OIS Triple Camera",
      "4500mAh Battery",
      "67W Turbo Charging",
      "Dual Stereo Speakers"
    ],
    description: [
      "High-performance Snapdragon 870 chip",
      "Sleek and modern glass design",
      "Smooth 120Hz display",
      "Immersive stereo sound",
      "Excellent for multitasking",
      "Supports HDR10+"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Triple Camera" },
      { icon: "main/200.png", text: "20 MP Front Camera" },
      { icon: "main/203.png", text: "4500mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "poco/7.jpg",
    name: "Poco C55",
    brand: "Poco",
    rating: "★★★★☆",
    price: "₹14,000",
    warranty: "1 Year",
    storage: "64GB",
    ram: "4GB",
    images: ["poco/7.jpg", "poco/8.jpg", "poco/9.jpg"],
    color: "Power Black, Cool Blue",
    capacity: "64GB",
    specifications: [
      "6.6-inch FHD+ Display",
      "MediaTek Dimensity 810 Processor",
      "50MP Dual Camera",
      "5000mAh Battery",
      "33W Fast Charging",
      "90Hz Refresh Rate"
    ],
    description: [
      "Affordable 5G performance",
      "Bright and sharp display",
      "Long battery endurance",
      "Stylish dual-tone back",
      "Smooth app navigation",
      "Quick charging capability"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Dual Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  },
  {
     image: "poco/10.jpg",
    name: "Poco M4 Pro",
    brand: "Poco",
    rating: "★★★☆☆",
    price: "₹9,499",
    warranty: "1 Year",
    storage: "64GB",
    ram: "4GB",
    images: ["poco/10.jpg", "poco/11.jpg", "poco/12.jpg"],
    color: "Forest Green, Cool Blue",
    capacity: "64GB",
    specifications: [
      "6.71-inch HD+ Display",
      "MediaTek Helio G85 Processor",
      "50MP Dual Camera",
      "5000mAh Battery",
      "Leather-texture Design",
      "Rear Fingerprint Sensor"
    ],
    description: [
      "Budget-friendly smartphone",
      "Premium leather-like finish",
      "Good daylight camera",
      "Massive battery backup",
      "Smooth casual usage",
      "Dual SIM support"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Dual Camera" },
      { icon: "main/200.png", text: "5 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  },
  {
     image: "poco/13.jpg",
    name: "Poco X4 Pro",
    brand: "Poco",
    rating: "★★★★☆",
    price: "₹24,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "8GB",
    images: ["poco/13.jpg", "poco/14.jpg", "poco/15.jpg"],
    color: "Silver, Black",
    capacity: "128GB",
    specifications: [
      "6.6-inch LCD 144Hz Display",
      "MediaTek Dimensity 8100 Processor",
      "64MP Triple Camera",
      "5080mAh Battery",
      "67W Fast Charging",
      "LiquidCool Technology 2.0"
    ],
    description: [
      "Top-tier performance for gamers",
      "Ultra-smooth 144Hz display",
      "Excellent heat dissipation",
      "All-day battery life",
      "Flagship-level charging speed",
      "Crisp stereo audio"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Triple Camera" },
      { icon: "main/200.png", text: "20 MP Front Camera" },
      { icon: "main/203.png", text: "5080mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 128GB Storage" }
    ]
  },
  {
     image: "poco/16.jpg",
    name: "Poco C3",
    brand: "Poco",
    rating: "★★★★☆",
    price: "₹8,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["poco/16.jpg", "poco/17.jpg", "poco/18.jpg"],
    color: "Gunmetal Silver, Predator Black",
    capacity: "128GB",
    specifications: [
      "6.67-inch AMOLED 120Hz Display",
      "MediaTek Dimensity 1200 Processor",
      "64MP Triple Camera",
      "5065mAh Battery",
      "Magnetic Trigger Buttons",
      "Dual Stereo Speakers"
    ],
    description: [
      "Gaming-focused flagship killer",
      "High refresh rate AMOLED panel",
      "Trigger buttons for pro gaming",
      "Fast and smooth UI",
      "Great battery endurance",
      "Premium metal frame"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Triple Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5065mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
     image: "poco/19.jpg",
    name: "Poco X3 Pro",
    brand: "Poco",
    rating: "★★★☆☆",
    price: "₹19,499",
    warranty: "1 Year",
    storage: "64GB",
    ram: "4GB",
    images: ["poco/19.jpg", "poco/20.jpg", "poco/21.jpg"],
    color: "Icy Blue, Power Black",
    capacity: "64GB",
    specifications: [
      "6.58-inch FHD+ Display",
      "MediaTek Helio G99 Processor",
      "50MP Triple Camera",
      "5000mAh Battery",
      "90Hz Refresh Rate",
      "Leather-texture Design"
    ],
    description: [
      "Stylish budget gaming phone",
      "Smooth 90Hz panel",
      "Power-efficient G99 chip",
      "Long-lasting battery",
      "Premium feel back panel",
      "Quick face unlock"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  },
  {
     image: "poco/22.jpg",
    name: "Poco M3",
    brand: "Poco",
    rating: "★★★☆☆",
    price: "₹12,999",
    warranty: "1 Year",
    storage: "32GB",
    ram: "3GB",
    images: ["poco/22.jpg", "poco/23.jpg", "poco/24.jpg"],
    color: "Royal Blue, Shadow Grey",
    capacity: "32GB",
    specifications: [
      "6.53-inch HD+ Display",
      "MediaTek Helio G35 Processor",
      "13MP Triple Camera",
      "5000mAh Battery",
      "P2i Splash Protection",
      "Rear Fingerprint Sensor"
    ],
    description: [
      "Affordable everyday smartphone",
      "Splash-resistant coating",
      "Reliable battery backup",
      "Good for basic usage",
      "Compact and easy to hold",
      "Dual SIM support"
    ],
    features: [
      { icon: "main/201.png", text: "13 MP Triple Camera" },
      { icon: "main/200.png", text: "5 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "3GB RAM & 32GB Storage" }
    ]
  },
  {
     image: "poco/25.jpg",
    name: "Poco X2",
    brand: "Poco",
    rating: "★★★★☆",
    price: "₹20,499",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["poco/25.jpg", "poco/26.jpg", "poco/27.jpg"],
    color: "Steel Blue, Shadow Black",
    capacity: "128GB",
    specifications: [
      "6.67-inch FHD+ Display",
      "Snapdragon 860 Processor",
      "48MP Quad Camera",
      "5160mAh Battery",
      "120Hz Refresh Rate",
      "LiquidCool Technology 1.0 Plus"
    ],
    description: [
      "Gaming beast at an affordable price",
      "Extra smooth 120Hz display",
      "Powerful Snapdragon chip",
      "Massive battery life",
      "Dynamic dual-tone design",
      "Immersive stereo audio"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Quad Camera" },
      { icon: "main/200.png", text: "20 MP Front Camera" },
      { icon: "main/203.png", text: "5160mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
     image: "poco/28.jpg",
    name: "Poco F5",
    brand: "Poco",
    rating: "★★★★☆",
    price: "₹33,499",
    warranty: "1 Year",
    storage: "64GB",
    ram: "4GB",
    images: ["poco/28.jpg", "poco/29.jpg", "poco/30.jpg"],
    color: "Power Black, Cool Blue",
    capacity: "64GB",
    specifications: [
      "6.5-inch FHD+ Display",
      "MediaTek Dimensity 700 Processor",
      "48MP Triple Camera",
      "5000mAh Battery",
      "90Hz Adaptive Refresh Rate",
      "Side Fingerprint Sensor"
    ],
    description: [
      "Budget 5G smartphone",
      "Sharp FHD+ display",
      "Good performance for the price",
      "Reliable camera setup",
      "Excellent battery endurance",
      "Fast network speeds"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Triple Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  }
],







// vivo--------------------











Vivo: [
  {
    image: "vivo/1.jpg",
    name: "Vivo T2",
    brand: "Vivo",
    rating: "★★★★★",
    price: "₹79,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["vivo/1.jpg", "vivo/2.jpg", "vivo/3.jpg"],
    color: "Blue, Black",
    capacity: "256GB",
    specifications: [
      "6.78-inch AMOLED Display",
      "Dimensity 9300 Processor",
      "50MP Triple Camera",
      "5000mAh Battery",
      "120W Fast Charging",
      "In-Display Fingerprint Sensor"
    ],
    description: [
      "Premium flagship experience",
      "Exceptional camera performance",
      "Super-fast charging",
      "Immersive AMOLED display",
      "Elegant design",
      "Best for photography lovers"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
     image: "vivo/4.jpg",
    name: "Vivo Y16",
    brand: "Vivo",
    rating: "★★★★☆",
    price: "₹39,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["vivo/4.jpg", "vivo/5.jpg", "vivo/6.jpg"],
    color: "Blue, Red",
    capacity: "256GB",
    specifications: [
      "6.78-inch AMOLED Display",
      "Dimensity 8200 Processor",
      "50MP Triple Camera",
      "4600mAh Battery",
      "80W Flash Charge",
      "5G Connectivity"
    ],
    description: [
      "Slim and stylish",
      "Excellent low-light photography",
      "Vibrant AMOLED screen",
      "Fast charging capability",
      "Good battery backup",
      "Perfect for daily use"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Triple Camera" },
      { icon: "main/200.png", text: "50 MP Front Camera" },
      { icon: "main/203.png", text: "4600mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
     image: "vivo/7.jpg",
    name: "Vivo Y22",
    brand: "Vivo",
    rating: "★★★★☆",
    price: "₹21,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "8GB",
    images: ["vivo/7.jpg", "vivo/8.jpg", "vivo/9.jpg"],
    color: "Blue, Orange",
    capacity: "128GB",
    specifications: [
      "6.38-inch AMOLED Display",
      "Dimensity 900 Processor",
      "64MP OIS Camera",
      "4500mAh Battery",
      "44W Flash Charge",
      "Color Changing Glass"
    ],
    description: [
      "Trendy design with color-changing back",
      "Good performance for price",
      "Sharp AMOLED visuals",
      "Fast charging support",
      "Great for multimedia",
      "Comfortable in-hand feel"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP OIS Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "4500mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 128GB Storage" }
    ]
  },
  {
     image: "vivo/10.jpg",
    name: "Vivo V27",
    brand: "Vivo",
    rating: "★★★★★",
    price: "₹86,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["vivo/10.jpg", "vivo/11.jpg", "vivo/12.jpg"],
    color: "Black, Grey",
    capacity: "256GB",
    specifications: [
      "6.78-inch AMOLED Display",
      "Snapdragon 8 Gen 1 Processor",
      "50MP Quad Camera",
      "4700mAh Battery",
      "80W Fast Charging",
      "ZEISS Optics"
    ],
    description: [
      "Ultra-premium flagship",
      "Top-tier camera hardware",
      "Smooth performance",
      "Vibrant display with HDR10+",
      "Fast wired and wireless charging",
      "Built for creators"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Quad Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "4700mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
     image: "vivo/13.jpg",
    name: "Vivo Y21",
    brand: "Vivo",
    rating: "★★★★☆",
    price: "₹35,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["vivo/13.jpg", "vivo/14.jpg", "vivo/15.jpg"],
    color: "Blue, Black",
    capacity: "256GB",
    specifications: [
      "6.56-inch AMOLED Display",
      "Dimensity 1300 Processor",
      "64MP OIS Camera",
      "4830mAh Battery",
      "66W Fast Charging",
      "Color Changing Glass"
    ],
    description: [
      "Premium mid-range phone",
      "Excellent daylight shots",
      "Smooth performance",
      "Long battery life",
      "Sleek and lightweight",
      "Fast charging included"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP OIS Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "4830mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
     image: "vivo/16.jpg",
    name: "Vivo Y02",
    brand: "Vivo",
    rating: "★★★★☆",
    price: "₹19,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["vivo/16.jpg", "vivo/17.jpg", "vivo/18.jpg"],
    color: "Black, Gold",
    capacity: "128GB",
    specifications: [
      "6.58-inch LCD Display",
      "Dimensity 700 Processor",
      "50MP Dual Camera",
      "5000mAh Battery",
      "18W Charging",
      "Side Fingerprint Sensor"
    ],
    description: [
      "Affordable 5G phone",
      "Decent camera setup",
      "Good battery backup",
      "Reliable performance",
      "Simple yet elegant design",
      "Value for money"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Dual Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "vivo/19.jpg",
    name: "Vivo V25",
    brand: "Vivo",
    rating: "★★★★★",
    price: "₹79,990",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["vivo/19.jpg", "vivo/20.jpg", "vivo/21.jpg"],
    color: "Black, Blue",
    capacity: "256GB",
    specifications: [
      "6.78-inch AMOLED Display",
      "Snapdragon 888+ Processor",
      "50MP Quad Camera",
      "4500mAh Battery",
      "55W Fast Charging",
      "ZEISS Optics"
    ],
    description: [
      "Top-tier photography",
      "Vibrant curved display",
      "Powerful processor",
      "Premium feel",
      "Good battery life",
      "Flagship-level performance"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Quad Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "4500mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
     image: "vivo/22.jpg",
    name: "Vivo Y75",
    brand: "Vivo",
    rating: "★★★★☆",
    price: "₹14,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["vivo/22.jpg", "vivo/23.jpg", "vivo/24.jpg"],
    color: "Black, Purple",
    capacity: "128GB",
    specifications: [
      "6.64-inch LCD Display",
      "Helio G85 Processor",
      "50MP Dual Camera",
      "5000mAh Battery",
      "44W Flash Charge",
      "Waterdrop Notch Design"
    ],
    description: [
      "Stylish budget phone",
      "Decent gaming performance",
      "Long-lasting battery",
      "Bright display",
      "Fast charging support",
      "User-friendly interface"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Dual Camera" },
      { icon: "main/200.png", text: "8 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "vivo/25.jpg",
    name: "Vivo T1",
    brand: "Vivo",
    rating: "★★★★☆",
    price: "₹38,990",
    warranty: "1 Year",
    storage: "256GB",
    ram: "8GB",
    images: ["vivo/25.jpg", "vivo/26.jpg", "vivo/27.jpg"],
    color: "Sunshine Gold, Stardust Black",
    capacity: "256GB",
    specifications: [
      "6.56-inch AMOLED Display",
      "Dimensity 1200 Processor",
      "108MP Triple Camera",
      "4300mAh Battery",
      "44W Fast Charging",
      "Color Changing Glass"
    ],
    description: [
      "Ultra-slim profile",
      "High-resolution camera",
      "Beautiful AMOLED visuals",
      "Premium glass back",
      "Lightweight design",
      "Fast charging ready"
    ],
    features: [
      { icon: "main/201.png", text: "108 MP Triple Camera" },
      { icon: "main/200.png", text: "50 MP Front Camera" },
      { icon: "main/203.png", text: "4300mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "8GB RAM & 256GB Storage" }
    ]
  },
  {
     image: "vivo/28.jpg",
    name: "Vivo V21",
    brand: "Vivo",
    rating: "★★★☆☆",
    price: "₹10,999",
    warranty: "1 Year",
    storage: "64GB",
    ram: "4GB",
    images: ["vivo/28.jpg", "vivo/29.jpg", "vivo/30.jpg"],
    color: "Black, Gold",
    capacity: "64GB",
    specifications: [
      "6.51-inch LCD Display",
      "Helio P35 Processor",
      "13MP Dual Camera",
      "5000mAh Battery",
      "10W Charging",
      "Funtouch OS 12"
    ],
    description: [
      "Affordable entry-level phone",
      "Good for basic use",
      "Long-lasting battery",
      "Sleek matte finish",
      "Easy to hold",
      "Reliable daily driver"
    ],
    features: [
      { icon: "main/201.png", text: "13 MP Dual Camera" },
      { icon: "main/200.png", text: "5 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  }

],










// mi ------------
Mi: [
  {
   image: "mi/16.jpg",
    name: "Mi 11X",
    brand: "Mi",
    rating: "★★★★☆",
    price: "₹27,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["mi/16.jpg", "mi/17.jpg", "mi/18.jpg"],
    color: "Cosmic Black, Frost White",
    capacity: "128GB",
    specifications: [
      "6.67-inch AMOLED Display",
      "Snapdragon 870 Processor",
      "48MP Triple Camera",
      "4520mAh Battery",
      "120Hz Refresh Rate",
      "5G Connectivity"
    ],
    description: [
      "Powerful Snapdragon 870 chipset",
      "Smooth 120Hz AMOLED panel",
      "Durable glass design",
      "Reliable all-day battery",
      "Great for gaming and media",
      "Stereo sound experience"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Triple Camera" },
      { icon: "main/200.png", text: "20 MP Front Camera" },
      { icon: "main/203.png", text: "4520mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "mi/19.jpg",
    name: "Mi 10T",
    brand: "Mi",
    rating: "★★★★☆",
    price: "₹18,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["mi/19.jpg", "mi/20.jpg", "mi/21.jpg"],
    color: "Lunar Silver, Cosmic Black",
    capacity: "128GB",
    specifications: [
      "6.67-inch FHD+ LCD Display",
      "Snapdragon 865 Processor",
      "64MP Triple Camera",
      "5000mAh Battery",
      "144Hz Refresh Rate",
      "33W Fast Charging"
    ],
    description: [
      "Flagship-level Snapdragon 865",
      "Ultra-smooth 144Hz display",
      "High-resolution 64MP camera",
      "Massive 5000mAh battery",
      "Premium glass build",
      "Optimized for gaming"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Triple Camera" },
      { icon: "main/200.png", text: "20 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
   image: "mi/22.jpg",
    name: "Mi Note 10",
    brand: "Mi",
    rating: "★★★★☆",
    price: "₹12,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["mi/22.jpg", "mi/23.jpg", "mi/24.jpg"],
    color: "Aurora Green, Midnight Black",
    capacity: "128GB",
    specifications: [
      "6.47-inch AMOLED Display",
      "Snapdragon 730G Processor",
      "108MP Penta Camera",
      "5260mAh Battery",
      "30W Fast Charging",
      "In-display Fingerprint"
    ],
    description: [
      "World’s first 108MP Penta camera",
      "Beautiful curved AMOLED screen",
      "Strong battery life",
      "Fast charging supported",
      "Premium glass body",
      "Perfect for photography lovers"
    ],
    features: [
      { icon: "main/201.png", text: "108 MP Penta Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "5260mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
   image: "mi/25.jpg",
    name: "Mi 11 Lite",
    brand: "Mi",
    rating: "★★★★☆",
    price: "₹23,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["mi/25.jpg", "mi/26.jpg", "mi/27.jpg"],
    color: "Tuscany Coral, Jazz Blue",
    capacity: "128GB",
    specifications: [
      "6.55-inch AMOLED Display",
      "Snapdragon 732G Processor",
      "64MP Triple Camera",
      "4250mAh Battery",
      "33W Fast Charging",
      "Slim & Lightweight"
    ],
    description: [
      "Ultra-thin lightweight design",
      "Vibrant AMOLED display",
      "Decent gaming performance",
      "Fast charging supported",
      "Ideal for one-hand use",
      "Premium aesthetics"
    ],
    features: [
      { icon: "main/201.png", text: "64 MP Triple Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "4250mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "mi/28.jpg",
    name: "Mi A3",
    brand: "Mi",
    rating: "★★★☆☆",
    price: "₹12,999",
    warranty: "1 Year",
    storage: "64GB",
    ram: "4GB",
    images: ["mi/28.jpg", "mi/29.jpg", "mi/30.jpg"],
    color: "Not Just Blue, More Than White",
    capacity: "64GB",
    specifications: [
      "6.08-inch Super AMOLED Display",
      "Snapdragon 665 Processor",
      "48MP Triple Camera",
      "4030mAh Battery",
      "18W Fast Charging",
      "Android One Experience"
    ],
    description: [
      "Stock Android with Android One",
      "Compact AMOLED screen",
      "Decent triple cameras",
      "Good build quality",
      "Perfect for casual usage",
      "Lightweight design"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Triple Camera" },
      { icon: "main/200.png", text: "32 MP Front Camera" },
      { icon: "main/203.png", text: "4030mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  },
  {
   image: "mi/31.jpg",
    name: "Mi Mix 3",
    brand: "Mi",
    rating: "★★★★☆",
    price: "₹34,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["mi/31.jpg", "mi/32.jpg", "mi/33.jpg"],
    color: "Onyx Black, Jade Green",
    capacity: "128GB",
    specifications: [
      "6.39-inch AMOLED Display",
      "Snapdragon 845 Processor",
      "12MP Dual Camera",
      "3200mAh Battery",
      "Magnetic Slider Design",
      "Wireless Charging Support"
    ],
    description: [
      "Unique magnetic sliding camera",
      "Bezel-less AMOLED screen",
      "Fast Snapdragon performance",
      "Supports wireless charging",
      "Stylish futuristic design",
      "Compact and premium build"
    ],
    features: [
      { icon: "main/201.png", text: "12 MP Dual Camera" },
      { icon: "main/200.png", text: "24 MP Front Camera" },
      { icon: "main/203.png", text: "3200mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "mi/34.jpg",
    name: "Mi 10i",
    brand: "Mi",
    rating: "★★★★☆",
    price: "₹21,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["mi/34.jpg", "mi/35.jpg", "mi/36.jpg"],
    color: "Atlantic Blue, Midnight Black",
    capacity: "128GB",
    specifications: [
      "6.67-inch FHD+ Display",
      "Snapdragon 750G Processor",
      "108MP Quad Camera",
      "4820mAh Battery",
      "33W Fast Charging",
      "120Hz Adaptive Sync"
    ],
    description: [
      "Affordable 5G smartphone",
      "108MP quad-camera versatility",
      "Smooth 120Hz refresh rate",
      "Solid build quality",
      "Long-lasting battery",
      "Great for photography lovers"
    ],
    features: [
      { icon: "main/201.png", text: "108 MP Quad Camera" },
      { icon: "main/200.png", text: "16 MP Front Camera" },
      { icon: "main/203.png", text: "4820mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "mi/37.jpg",
    name: "Mi 9T Pro",
    brand: "Mi",
    rating: "★★★★☆",
    price: "₹28,999",
    warranty: "1 Year",
    storage: "128GB",
    ram: "6GB",
    images: ["mi/37.jpg", "mi/38.jpg", "mi/39.jpg"],
    color: "Flame Red, Glacier Blue",
    capacity: "128GB",
    specifications: [
      "6.39-inch AMOLED Display",
      "Snapdragon 855 Processor",
      "48MP Triple Camera",
      "4000mAh Battery",
      "27W Fast Charging",
      "Pop-up Selfie Camera"
    ],
    description: [
      "Full-screen AMOLED experience",
      "Fast Snapdragon 855 processor",
      "Stylish pop-up selfie design",
      "Good battery with fast charging",
      "Flagship features at mid-range price",
      "Premium glass finish"
    ],
    features: [
      { icon: "main/201.png", text: "48 MP Triple Camera" },
      { icon: "main/200.png", text: "20 MP Front Camera" },
      { icon: "main/203.png", text: "4000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "6GB RAM & 128GB Storage" }
    ]
  },
  {
    image: "mi/40.jpg",
    name: "Mi 11 Ultra",
    brand: "Mi",
    rating: "★★★★★",
    price: "₹69,999",
    warranty: "1 Year",
    storage: "256GB",
    ram: "12GB",
    images: ["mi/40.jpg", "mi/41.jpg", "mi/42.jpg"],
    color: "Ceramic White, Cosmic Black",
    capacity: "256GB",
    specifications: [
      "6.81-inch AMOLED WQHD+ Display",
      "Snapdragon 888 Processor",
      "50MP Triple Camera with 120x Zoom",
      "5000mAh Battery",
      "67W Wired & Wireless Charging",
      "Secondary Rear Display"
    ],
    description: [
      "Ultra-premium ceramic design",
      "Pro-grade camera with 120x zoom",
      "Stunning AMOLED WQHD+ display",
      "Dual charging (wired & wireless)",
      "Rear secondary display",
      "Top-tier flagship performance"
    ],
    features: [
      { icon: "main/201.png", text: "50 MP Pro Triple Camera" },
      { icon: "main/200.png", text: "20 MP Front Camera" },
      { icon: "main/203.png", text: "5000mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "12GB RAM & 256GB Storage" }
    ]
  },
  {
    image: "mi/43.jpg",
    name: "Mi Max 2",
    brand: "Mi",
    rating: "★★★☆☆",
    price: "₹16,999",
    warranty: "1 Year",
    storage: "64GB",
    ram: "4GB",
    images: ["mi/43.jpg", "mi/44.jpg", "mi/45.jpg"],
    color: "Gold, Matte Black",
    capacity: "64GB",
    specifications: [
      "6.44-inch FHD Display",
      "Snapdragon 625 Processor",
      "12MP Rear Camera",
      "5300mAh Battery",
      "Dual Stereo Speakers",
      "Quick Charge 3.0"
    ],
    description: [
      "Massive display for multimedia",
      "Long-lasting 5300mAh battery",
      "Decent Snapdragon 625 performance",
      "Good sound with stereo speakers",
      "Large but comfortable to hold",
      "Great for binge-watching"
    ],
    features: [
      { icon: "main/201.png", text: "12 MP Rear Camera" },
      { icon: "main/200.png", text: "5 MP Front Camera" },
      { icon: "main/203.png", text: "5300mAh Battery" },
      { icon: "main/204.png", text: "Octa-Core CPU" },
      { icon: "main/202.png", text: "4GB RAM & 64GB Storage" }
    ]
  }
]



  
};

window.brandProducts = brandProducts;
