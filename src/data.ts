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
const storeNames = ['Digos City Essentials', 'Sulop Finds', 'Bansalan Market Hub', 'Padada Fresh Picks', 'Hagonoy Home Goods', 'Matanao Local Deals', 'Sta. Cruz Daily', 'Malalag Corner', 'Davao del Sur Marketplace', 'Digos City Groceries']
const locations = ['Digos City', 'Sulop', 'Bansalan', 'Padada', 'Hagonoy', 'Matanao', 'Sta. Cruz', 'Malalag', 'Davao City', 'Digos City']
export const seedStores: Store[] = storeNames.map((name, index) => ({ id: `demo-store-${index + 1}`, name, slug: slugify(name), logo: name.split(' ').map((part) => part[0]).slice(0, 2).join(''), banner: storeImage(index), description: ['Useful local finds for everyday life.', 'Thoughtful pieces, shared simply.', 'Good products from a good place.'][index % 3], location: locations[index % locations.length], sellerId: `demo-seller-${index + 1}`, rating: 4.5 + (index % 5) / 10, salesCount: 120 + index * 67, followers: 80 + index * 31, verified: index % 3 !== 0, isDemo: true, isOpen: true }))
const samples: [string, string, number, number][] = [
  ['Wireless Earbuds', 'Tech', 1290, 1590], ['Bluetooth Speaker', 'Tech', 890, 1090], ['Portable Power Bank', 'Tech', 990, 1290], ['Smart Watch', 'Tech', 1890, 2290], ['USB-C Hub', 'Tech', 1150, 1390], ['Travel Backpack', 'Fashion', 980, 1250], ['Canvas Tote Bag', 'Fashion', 420, 550], ['Running Sneakers', 'Fashion', 1490, 1790], ['Cotton Oversized Tee', 'Fashion', 690, 850], ['Coffee Beans', 'Food', 480, 590], ['Banana Bread', 'Food', 280, 350], ['Homemade Chips', 'Food', 160, 210], ['Local Rice Cakes', 'Food', 220, 280], ['Natural Facial Cleanser', 'Beauty & Personal Care', 420, 520], ['Daily Sunscreen', 'Beauty & Personal Care', 550, 690], ['Body Lotion', 'Beauty & Personal Care', 380, 470], ['Floral Perfume', 'Beauty & Personal Care', 890, 1090], ['Adjustable Desk Lamp', 'Home & Living', 1250, 1490], ['Storage Organizer', 'Home & Living', 540, 680], ['Insulated Tumbler', 'Home & Living', 620, 790], ['Minimal Wall Decor', 'Home & Living', 850, 1050], ['Dotted Notebook', 'School', 180, 240], ['School Supplies Set', 'School', 460, 590], ['Scientific Calculator', 'School', 890, 1090], ['Everyday Backpack', 'School', 1390, 1690], ['Study Planner', 'School', 260, 340], ['Resistance Bands', 'Sports', 390, 490], ['Yoga Mat', 'Sports', 990, 1250], ['Stainless Water Bottle', 'Sports', 520, 650], ['Jump Rope', 'Sports', 290, 370], ['Sports Towel', 'Sports', 340, 430], ['Handmade Bracelet', 'Local / Handmade', 320, 420], ['Crochet Market Bag', 'Local / Handmade', 850, 1050], ['Soy Candle', 'Local / Handmade', 490, 620], ['Woven Basket', 'Local / Handmade', 760, 940], ['Custom Keychain', 'Local / Handmade', 180, 250], ['Local Coffee Blend', 'Local / Handmade', 520, 640]
]
export const seedProducts: Product[] = samples.map(([name, category, price, originalPrice], index) => {
  const store = seedStores[index % seedStores.length]
  const productSlug = slugify(name)
  const images = [0, 1, 2].map((offset) => image(imageIds[(index + offset) % imageIds.length]))
  const primaryImage = images[0]
  return { id: `${productSlug}-${String(index + 1).padStart(3, '0')}`, name, description: `A useful ${name.toLowerCase()} from a local seller in ${store.location}, chosen for everyday life.`, price, originalPrice, images, primaryImage, category, subcategory: category, stock: 8 + (index * 7) % 45, variations: [], sellerId: store.sellerId, storeId: store.id, rating: 4.2 + (index % 8) / 10, reviewCount: 18 + index * 3, salesCount: 32 + index * 11, location: store.location, shippingInfo: 'Ships in 2-4 days', status: 'active', isDemo: true, createdAt: new Date(Date.now() - index * 86400000).toISOString(), productSlug, shareableLink: `/p/${productSlug}` }
})
function slugify(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }
