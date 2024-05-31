const products = [
  {
    name: "boAt Airdopes 121v2 TWS Earbuds",
    image: "/images/boatHeadfone.jpg",
    description:
      "boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black) ",
    brand: "Boat",
    category: "Electronics",
    price: 20.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Micromax IN 1b (Purple, 32 GB)",
    image: "/images/micromaxInB.jpg",
    description:
      "Say hello to the Micromax IN 1b smartphone whose powerful MediaTek Helio G35 gaming processor and a 5000 mAh battery will pave the way for effortless multitasking and usage.",
    brand: "Micromax",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Sony Playstation 4 Pro White Version",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "Apple iPhone 13",
    image:
      "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UF1000,1000_QL80_.jpg",
    description:
      "iPhone 13 with A15 Bionic chip, 6.1-inch Super Retina XDR display, and advanced dual-camera system.",
    brand: "Apple",
    category: "Electronics",
    price: 799.0,
    countInStock: 25,
    rating: 4.5,
    numReviews: 1345,
  },
  {
    name: "Samsung Galaxy S21",
    image:
      "https://m.media-amazon.com/images/I/61uhL-Bb4xL._AC_UF894,1000_QL80_.jpg",
    description:
      "Galaxy S21 with Dynamic AMOLED 2X display, 64MP high resolution camera, and 8K video recording.",
    brand: "Samsung",
    category: "Electronics",
    price: 699.99,
    countInStock: 15,
    rating: 4.6,
    numReviews: 1120,
  },
  {
    name: "Sony WH-1000XM4",
    image:
      "https://d1ncau8tqf99kp.cloudfront.net/converted/106682_original_local_1200x1050_v3_converted.webp",
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI.",
    brand: "Sony",
    category: "Electronics",
    price: 348.0,
    countInStock: 30,
    rating: 4.7,
    numReviews: 890,
  },
  {
    name: "Dell XPS 13",
    image:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315-2in1/media-gallery/blue/tablet-xps-13-9315-blue-gallery-8.psd?fmt=pjpg&pscan=auto&scl=1&wid=4465&hei=2407&qlt=100,1&resMode=sharp2&size=4465,2407&chrss=full&imwidth=5000",
    description:
      "Dell XPS 13 laptop with 11th Gen Intel Core processors, stunning 13.4-inch display, and long battery life.",
    brand: "Dell",
    category: "Electronics",
    price: 999.99,
    countInStock: 10,
    rating: 4.8,
    numReviews: 450,
  },
  {
    name: "Nintendo Switch",
    image:
      "https://www.scoop.com.tn/41746-home_default/console-nintendo-switch-joy-con-neon.jpg",
    description:
      "Nintendo Switch gaming console with versatile play modes and a wide selection of games.",
    brand: "Nintendo",
    category: "Electronics",
    price: 299.99,
    countInStock: 40,
    rating: 4.9,
    numReviews: 2250,
  },
  {
    name: "Apple MacBook Air",
    image:
      "https://bl-i.thgim.com/public/incoming/fk5hrs/article67097604.ece/alternates/FREE_1200/MacBookAir%2015inch_5.JPG",
    description:
      "MacBook Air with Apple M1 chip, 13.3-inch Retina display, and all-day battery life.",
    brand: "Apple",
    category: "Electronics",
    price: 999.0,
    countInStock: 20,
    rating: 4.8,
    numReviews: 530,
  },
  {
    name: "Amazon Fire TV Stick 4K",
    image:
      "https://images.thdstatic.com/productImages/3893d753-2f16-421f-b76b-a7cbd27f235e/svn/black-amazon-media-streaming-devices-b08xvyz1y5-64_600.jpg",
    description:
      "Fire TV Stick 4K streaming device with Alexa Voice Remote, supports Dolby Vision, HDR, and HDR10+.",
    brand: "Amazon",
    category: "Electronics",
    price: 49.99,
    countInStock: 100,
    rating: 4.7,
    numReviews: 3200,
  },
  {
    name: "Bose QuietComfort 35 II",
    image:
      "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_black_EC_hero.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
    description:
      "Wireless Bluetooth headphones with world-class noise cancellation, and Alexa voice control.",
    brand: "Bose",
    category: "Electronics",
    price: 299.0,
    countInStock: 35,
    rating: 4.6,
    numReviews: 870,
  },
  {
    name: "GoPro HERO9 Black",
    image: "https://www.nanotek.lk/uploads/product/2194-20230105080506-G11.png",
    description:
      "GoPro HERO9 Black action camera with 5K video, 20MP photo resolution, and HyperSmooth 3.0 stabilization.",
    brand: "GoPro",
    category: "Electronics",
    price: 399.99,
    countInStock: 22,
    rating: 4.5,
    numReviews: 560,
  },
  {
    name: "JBL Flip 5",
    image: "https://m.media-amazon.com/images/I/7141ueFQWzL.jpg",
    description:
      "Portable waterproof Bluetooth speaker with 12 hours of playtime and premium sound quality.",
    brand: "JBL",
    category: "Electronics",
    price: 119.95,
    countInStock: 50,
    rating: 4.8,
    numReviews: 2100,
  },
  {
    name: "Fitbit Charge 4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweWhF1ZubAjDLT_4z6CTm-1sCoZHgNmY3ajuPPtaGcg&s",
    description:
      "Fitness and activity tracker with built-in GPS, heart rate monitor, and sleep tracking.",
    brand: "Fitbit",
    category: "Electronics",
    price: 149.95,
    countInStock: 60,
    rating: 4.4,
    numReviews: 650,
  },
  {
    name: "Canon EOS Rebel T7",
    image:
      "https://images-cdn.ubuy.co.in/65e836ce67ffa003d3115c41-canon-eos-rebel-t7-ef-s-18-55mm-is-ii.jpg",
    description:
      "Digital SLR camera with 24.1MP CMOS sensor, built-in Wi-Fi, and Full HD video recording.",
    brand: "Canon",
    category: "Electronics",
    price: 449.0,
    countInStock: 18,
    rating: 4.5,
    numReviews: 300,
  },
  {
    name: "Roku Streaming Stick+",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81OTQ-onQWL._AC_UL600_SR600,600_.jpg",
    description:
      "Streaming stick with 4K HDR support and long-range wireless receiver for enhanced streaming.",
    brand: "Roku",
    category: "Electronics",
    price: 39.99,
    countInStock: 85,
    rating: 4.6,
    numReviews: 1900,
  },
  {
    name: "Logitech MX Master 3",
    image:
      "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Advanced wireless mouse with ergonomic design, customizable buttons, and fast charging.",
    brand: "Logitech",
    category: "Electronics",
    price: 99.99,
    countInStock: 55,
    rating: 4.7,
    numReviews: 480,
  },
  {
    name: "Samsung Galaxy Tab S7",
    image:
      "https://images.samsung.com/is/image/samsung/assets/in/tablet/galaxy-tab-s7-s7plus-spen-mystic-navy-mo-alt2.jpg",
    description:
      "Galaxy Tab S7 tablet with 11-inch LTPS TFT display, Snapdragon 865+ processor, and S Pen included.",
    brand: "Samsung",
    category: "Electronics",
    price: 649.99,
    countInStock: 12,
    rating: 4.6,
    numReviews: 310,
  },
  {
    name: "Anker PowerCore 10000",
    image:
      "https://www.reliancedigital.in/medias/Anker-A1266H11-Power-Banks-491420251-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMDkyOXxpbWFnZS9qcGVnfGltYWdlcy9oYWEvaDI0LzkzNjY2MDYwNTM0MDYuanBnfGI2NDEwMTA1NDFlNDg1MjkxZDQxMGRmMTMyMWFhZDZmNmJlM2Y0YWQ4MzM1NzJkMGY0ZmEzZDEyMjUyNGFhNWM",
    description:
      "Ultra-compact portable charger with 10000mAh capacity and high-speed charging technology.",
    brand: "Anker",
    category: "Electronics",
    price: 29.99,
    countInStock: 75,
    rating: 4.8,
    numReviews: 2200,
  },
  {
    name: "Ring Video Doorbell 3",
    image:
      "https://www.jbhifi.com.au/cdn/shop/products/647056-Product-0-I-638191049409381704_grande.jpg",
    description:
      "Smart video doorbell with enhanced Wi-Fi, 1080p HD video, and improved motion detection.",
    brand: "Ring",
    category: "Electronics",
    price: 199.99,
    countInStock: 45,
    rating: 4.4,
    numReviews: 650,
  },
  {
    name: "Kindle Paperwhite",
    image:
      "https://cdnmedia.placewellretail.com/pub/media/catalog/product/cache/d2f155c8ae3423b25125c336aa39579e/k/i/kindle-paperwhite.webp",
    description:
      "Waterproof e-reader with 6-inch high-resolution display, adjustable light, and weeks of battery life.",
    brand: "Amazon",
    category: "Electronics",
    price: 129.99,
    countInStock: 33,
    rating: 4.7,
    numReviews: 3100,
  },
  {
    name: "Apple Watch Series 6",
    image:
      "https://images-cdn.ubuy.co.in/64c4dcdf103a1d7994286587-apple-watch-series-6-gps-44mm-silver.jpg",
    description:
      "Smartwatch with blood oxygen sensor, ECG app, and always-on Retina display.",
    brand: "Apple",
    category: "Electronics",
    price: 399.0,
    countInStock: 22,
    rating: 4.8,
    numReviews: 1700,
  },
];

module.exports = products;
