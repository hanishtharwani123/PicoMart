const product = [
  {
    id: 1,
    name: " SAMSUNG Galaxy Z Flip3 5G (Phantom Black, 128 GB)",
    price: "₹49,999",
    description: "8 GB RAM | 128 GB ROM",
    image: "images/mobile1.webp",
    rating: "⭐⭐⭐⭐⭐",
    category: "mobile",
  },

  {
    id: 2,
    name: " APPLE iPhone 14 (Purple, 128 GB)",
    price: "₹54,999",
    description: "15.49 cm (6.1 inch)super...",
    image: "images/mobile2.webp",
    rating: "⭐⭐⭐",
    category: "mobile",
  },

  {
    id: 3,
    name: " realme 11 Pro+ 5G (Sunrise Beige, 256 GB)",
    price: "₹25,999",
    description: "8 GB RAM | 256 GB ROM",
    image: "images/mobile3.webp",
    rating: "⭐⭐⭐⭐⭐",
    category: "mobile",
  },

  {
    id: 4,
    name: " OnePlus Nord CE 3 Lite 5G (Pastel Lime, 128 GB)",
    price: "₹19,583",
    description: "17.07 cm (6.72 inch) Display",
    image: "images/mobile4.webp",
    rating: "⭐⭐⭐⭐",
    category: "mobile",
  },

  {
    id: 5,
    name: " realme 11x 5G (Purple Dawn, 128 GB) | Expandable Upto 2 TB",
    price: "₹13,499",
    description: "6 GB RAM | 128 GB ROM",
    image: "images/mobile5.webp",
    rating: "⭐⭐⭐⭐⭐",
    category: "mobile",
  },

  {
    id: 6,
    name: " SAMSUNG Galaxy F14 5G (GOAT Green, 128 GB)...",
    price: "₹12,490",
    description: "6 GB RAM | 128 GB ROM ",
    image: "images/mobile6.webp",
    rating: "⭐⭐⭐",
    category: "mobile",
  },

  {
    id: 7,
    name: " SAMSUNG Galaxy Book Go Snapdragon 7c Gen 2 - (4 GB/128 GB...",
    price: "₹29,990",
    description: "14 Inch Full HD TFT LED Display",
    image: "images/laptop1.webp",
    rating: "⭐⭐",
    category: "laptop",
  },

  {
    id: 8,
    name: " Lenovo Lenovo V15 Celeron Dual Core 4th Gen - (8 GB/256 GB SSD/Wi...",
    price: "₹19,990",
    description: "15.6 inch Full HD",
    image: "images/laptop2.webp",
    rating: "⭐⭐⭐⭐",
    category: "laptop",
  },

  {
    id: 9,
    name: " Infinix X2 Slim Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/...",
    price: "₹26,990",
    description: "Light Laptop without Optical",
    image: "images/laptop3.webp",
    rating: "⭐⭐⭐",
    category: "laptop",
  },

  {
    id: 10,
    name: " HP Intel Core i3 11th Gen 1115G4 - (8 GB/256 GB SSD/Windows 11 Ho...",
    price: "₹32,990",
    description: "14 inch FHD, LED, micro-edge",
    image: "images/laptop4.webp",
    rating: "⭐⭐⭐⭐⭐",
    category: "laptop",
  },

  {
    id: 11,
    name: "Infinix INBook X1 Core i3 10th Gen 1005G1 - (8 GB/256 GB SSD/Wind...",
    price: "₹28,390",
    description: "Stylish & Portable Thin lap.",
    image: "images/laptop5.webp",
    rating: "⭐⭐⭐⭐",
    category: "laptop",
  },

  {
    id: 12,
    name: " HP 255 G9 841W6pa Ryzen 3 Dual Core - (8 GB/512 GB SSD/DOS) 6E3Z0...",
    price: "₹26,890",
    description: "Light Laptop without Optical ..",
    image: "images/laptop6.webp",
    rating: "⭐⭐⭐",
    category: "laptop",
  },

  {
    id: 13,
    name: " boAt Airdopes 131 with upto 60 Hours and ASAP Charge Bl...",
    price: "₹799",
    description: "Active Black, True Wireless",
    image: "images/headphone1.webp",
    rating: "⭐⭐⭐",
    category: "headphone",
  },

  {
    id: 13,
    name: " boAt Rockerz 235 Pro with upto 20 Hours Playback & ASAP...",
    price: "₹799",
    description: "Furious Blue, In the Ear",
    image: "images/headphone2.webp",
    rating: "⭐⭐",
    category: "headphone",
  },

  {
    id: 15,
    name: " Noise Buds VS102 Pro with ANC (25dB), 70 Hours Playtime...",
    price: "₹1,299",
    description: "Calm Beige, In the Ear",
    image: "images/headphone3.webp",
    rating: "⭐⭐⭐⭐⭐",
    category: "headphone",
  },

  {
    id: 16,
    name: " boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback,...",
    price: "₹3,499",
    description: "Sage Green, On the Ear",
    image: "images/headphone4.webp",
    rating: "⭐⭐⭐⭐",
    category: "headphone",
  },

  {
    id: 17,
    name: " boAt Airdopes 161 with 40 Hours Playback, ASAP Charge &...",
    price: "₹99",
    description: "Cool Sapphire, True Wireless",
    image: "images/headphone5.webp",
    rating: "⭐⭐⭐",
    category: "headphone",
  },

  {
    id: 18,
    name: " boAt Immortal 131 with Beast Mode, 40 Hours Playback an...",
    price: "₹1,099",
    description: "Black sabre, True Wireless",
    image: "images/headphone.webp",
    rating: "⭐⭐⭐",
    category: "headphone",
  },

  {
    id: 19,
    name: " SAMSUNG Watch 4, 44mmSuper AMOLED bluetooth calling function & bo...",
    price: "₹9,999",
    description: "With Call Function",
    image: "images/watch1.webp",
    rating: "⭐⭐⭐⭐",
    category: "watch",
  },

  {
    id: 20,
    name: " SAMSUNG Watch 4 Classic LTE 46mm Super AMOLED LTE Calling with Bo...",
    price: "₹10,999",
    description: "Bioelectrical Impedance",
    image: "images/watch2.webp",
    rating: "⭐⭐⭐",
    category: "watch",
  },

  {
    id: 21,
    name: " Fastrack Optimus with 1.43'' AMOLED Display with AOD(466x466)|BT...",
    price: "₹2,299",
    description: "Fitness & Outdoor",
    image: "images/watch3.webp",
    rating: "⭐⭐",
    category: "watch",
  },

  {
    id: 22,
    name: " SAMSUNG Watch 4 Classic, 46mm Super AMOLED BT Calling with Body C...",
    price: "₹17,799",
    description: "Touchscreen",
    image: "images/watch4.webp",
    rating: "⭐⭐⭐⭐⭐",
    category: "watch",
  },

  {
    id: 23,
    name: " SAMSUNG Watch 4, 44mmSuper AMOLED bluetooth calling function & bo...",
    price: "₹10,999",
    description: "Battery Runtime: Upto 40 hrs",
    image: "images/watch5.webp",
    rating: "⭐⭐⭐⭐",
    category: "watch",
  },

  {
    id: 24,
    name: " SAMSUNG Watch 5 44mmSuper AMOLED displayLTE calling & body compos...",
    price: "₹35,999",
    description: "With Call Function",
    image: "images/watch6.webp",
    rating: "⭐⭐⭐",
    category: "watch",
  },

  {
    id: 25,
    name: " SAMSUNG Crystal 4K iSmart Series 138 cm (55 inch) Ultra HD (4K) L...",
    price: "₹43,990",
    description: "Operating System: Tizen",
    image: "images/tv1.webp",
    rating: "⭐⭐⭐",
    category: "acessories",
  },

  {
    id: 26,
    name: " SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition ...",
    price: "₹14,490",
    description: "Sound Output: 20 W",
    image: "images/tv2.webp",
    rating: "⭐⭐⭐",
    category: "acessories",
  },

  {
    id: 27,
    name: " SAMSUNG Crystal 4K iSmart Series 108 cm (43 inch) Ultra HD (4K) L...",
    price: "₹28,490",
    description: "Resolution: HD Ready 136..",
    image: "images/tv3.webp",
    rating: "⭐⭐⭐",
    category: "acessories",
  },

  {
    id: 28,
    name: " LG 80 cm (32 inch) HD Ready LED Smart WebOS TV 2023 Edition with ...",
    price: "₹14,490",
    description: "Refresh Rate: 50 Hz",
    image: "images/tv4.webp",
    rating: "⭐⭐⭐",
    category: "acessories",
  },

  {
    id: 29,
    name: " Foxsky 102 cm (40 inch) Full HD LED Smart Android TV...",
    price: "₹12,499",
    description: "Operating System: Tizen",
    image: "images/tv5.webp",
    rating: "⭐⭐⭐",
    category: "acessories",
  },

  {
    id: 30,
    name: " Sansui 127 cm (50 inch) Ultra HD (4K) LED Smart Google TV 2023 Ed...",
    price: "₹26,999",
    description: "Supported Apps: Netflix|Prime",
    image: "images/tv6.webp",
    rating: "⭐⭐⭐",
    category: "acessories",
  },
];

export default product;
