import type { Product, Store, User } from './types'

// Replace files in public/images/products or public/images/stores to update demo imagery.
export const publicImage = (path: string) => `${import.meta.env.BASE_URL}${path}`
export const appPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
const image = (id: string) => {
  const productImages: Record<string, string> = {
    'photo-1601593346740-925612772716': publicImage('images/products/product-01.jpg'),
    'photo-1507473885765-e6ed057f782c': publicImage('images/products/product-02.jpg'),
    'photo-1490481651871-ab68de25d43d': publicImage('images/products/product-03.jpg'),
    'photo-1544787219-7f47ccb76574': publicImage('images/products/product-04.jpg'),
    'photo-1556228578-8c89e6adf883': publicImage('images/products/product-06.jpg'),
    'photo-1525966222134-fcfa99b8ae77': publicImage('images/products/product-05.jpg'),
    'photo-1523275335684-37898b6baf30': publicImage('images/products/product-07.jpg'),
    'photo-1495474472287-4d71bcdd2085': publicImage('images/products/product-08.jpg'),
  }
  return productImages[id] || publicImage('images/products/product-01.jpg')
}
const storeImage = (index: number) => publicImage(`images/stores/store-${String((index % 6) + 1).padStart(2, '0')}.jpg`)
const imageIds = ['photo-1601593346740-925612772716', 'photo-1507473885765-e6ed057f782c', 'photo-1490481651871-ab68de25d43d', 'photo-1544787219-7f47ccb76574', 'photo-1525966222134-fcfa99b8ae77', 'photo-1556228578-8c89e6adf883', 'photo-1523275335684-37898b6baf30', 'photo-1495474472287-4d71bcdd2085']
export const seedUsers: User[] = [{ id: 'user-john', name: 'John Dela Cruz', email: 'john@clink.ph', roles: ['buyer', 'seller'] }, { id: 'user-demo', name: 'Maya Santos', email: 'maya@clink.ph', roles: ['buyer'] }]
const storeNames = ['Davao Gadget Hub', 'Cebu Streetwear', 'Manila Home Finds', 'CDO Tech Corner', 'Island Beauty PH', 'Urban Essentials', 'Local Finds PH', 'Daily Gadget Shop', 'Trendy Threads', 'Home Haven PH', 'Campus Essentials', 'Sports Central PH', 'Glow & Care', 'Kitchen Corner', 'Pet Supplies PH', 'Outdoor Life PH', 'Fashion Finds PH', 'Tech Essentials', 'Local Crafts PH', 'Everyday Deals']
const locations = ['Davao', 'Cebu', 'Manila', 'Cagayan de Oro', 'Iloilo', 'Bacolod']
export const seedStores: Store[] = storeNames.map((name, index) => ({ id: `demo-store-${index + 1}`, name, slug: slugify(name), logo: name.split(' ').map((part) => part[0]).slice(0, 2).join(''), banner: storeImage(index), description: ['Useful local finds for everyday life.', 'Thoughtful pieces, shared simply.', 'Good products from a good place.'][index % 3], location: locations[index % locations.length], sellerId: `demo-seller-${index + 1}`, rating: 4.5 + (index % 5) / 10, salesCount: 120 + index * 67, followers: 80 + index * 31, verified: index % 3 !== 0, isDemo: true, isOpen: true }))
const samples: [string, string, number, number][] = [
  ['Wireless Earbuds', 'Tech', 1290, 1590], ['Bluetooth Speaker', 'Tech', 890, 1090], ['Phone Case', 'Tech', 349, 499], ['Power Bank', 'Tech', 990, 1290], ['USB-C Hub', 'Tech', 1150, 1390], ['Wireless Mouse', 'Tech', 580, 720], ['Mechanical Keyboard', 'Tech', 2490, 2990], ['Smart Watch', 'Tech', 1890, 2290],
  ['Oversized Shirt', 'Fashion', 690, 850], ['Cargo Pants', 'Fashion', 1190, 1490], ['Everyday Sneakers', 'Fashion', 1490, 1790], ['Canvas Tote Bag', 'Fashion', 420, 550], ['Baseball Cap', 'Fashion', 390, 490], ['Zip Hoodie', 'Fashion', 1290, 1590], ['Crossbody Bag', 'Fashion', 980, 1250],
  ['Local Cookies', 'Food', 220, 280], ['Banana Bread', 'Food', 280, 350], ['Chocolate Brownies', 'Food', 320, 390], ['Coffee Beans', 'Food', 480, 590], ['Homemade Chips', 'Food', 160, 210], ['Mini Donuts', 'Food', 250, 320], ['Filipino Snack Box', 'Food', 390, 480],
  ['Facial Cleanser', 'Beauty & Personal Care', 420, 520], ['Daily Sunscreen', 'Beauty & Personal Care', 550, 690], ['Tinted Lip Balm', 'Beauty & Personal Care', 240, 310], ['Body Lotion', 'Beauty & Personal Care', 380, 470], ['Hair Serum', 'Beauty & Personal Care', 460, 580], ['Floral Perfume', 'Beauty & Personal Care', 890, 1090],
  ['Adjustable Desk Lamp', 'Home & Living', 1250, 1490], ['Storage Organizer', 'Home & Living', 540, 680], ['Insulated Tumbler', 'Home & Living', 620, 790], ['Memory Pillow', 'Home & Living', 780, 950], ['Portable Mini Fan', 'Home & Living', 490, 620], ['Minimal Room Decor', 'Home & Living', 850, 1050],
  ['Dotted Notebook', 'School', 180, 240], ['School Supplies Set', 'School', 460, 590], ['Scientific Calculator', 'School', 890, 1090], ['Everyday Backpack', 'School', 1390, 1690], ['Pastel Highlighters', 'School', 150, 190], ['Weekly Study Planner', 'School', 260, 340],
  ['Resistance Bands', 'Sports', 390, 490], ['Non-slip Yoga Mat', 'Sports', 990, 1250], ['Stainless Water Bottle', 'Sports', 520, 650], ['Speed Jump Rope', 'Sports', 290, 370], ['Quick-dry Sports Towel', 'Sports', 340, 430],
  ['Handmade Beaded Bracelet', 'Local / Handmade', 320, 420], ['Crochet Market Bag', 'Local / Handmade', 850, 1050], ['Local Roast Coffee', 'Local / Handmade', 520, 640], ['Handmade Soy Candle', 'Local / Handmade', 490, 620], ['Customized Keychain', 'Local / Handmade', 180, 250], ['Local Woven Crafts', 'Local / Handmade', 760, 940],
]
export const seedProducts: Product[] = samples.map(([name, category, price, originalPrice], index) => {
  const store = seedStores[index % seedStores.length]
  const productSlug = slugify(name)
  const images = [0, 1, 2].map((offset) => image(imageIds[(index + offset) % imageIds.length]))
  const primaryImage = images[0]
  return { id: `${productSlug}-${String(index + 1).padStart(3, '0')}`, name, description: `A useful ${name.toLowerCase()} from a local seller, chosen for everyday life.`, price, originalPrice, images, primaryImage, category, subcategory: category, stock: 8 + (index * 7) % 45, variations: [], sellerId: store.sellerId, storeId: store.id, rating: 4.2 + (index % 8) / 10, reviewCount: 18 + index * 3, salesCount: 32 + index * 11, location: store.location, shippingInfo: 'Ships in 2-4 days', status: 'active', isDemo: true, createdAt: new Date(Date.now() - index * 86400000).toISOString(), productSlug, shareableLink: `/p/${productSlug}` }
})
function slugify(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }
