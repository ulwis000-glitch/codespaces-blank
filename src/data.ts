import type { Product, Store, User } from './types'

// Replace files in public/images/products or public/images/stores to update demo imagery.
const image = (id: string) => {
  const productImages: Record<string, string> = {
    'photo-1601593346740-925612772716': '/images/products/product-01.jpg',
    'photo-1507473885765-e6ed057f782c': '/images/products/product-02.jpg',
    'photo-1490481651871-ab68de25d43d': '/images/products/product-03.jpg',
    'photo-1544787219-7f47ccb76574': '/images/products/product-04.jpg',
    'photo-1525966222134-fcfa99b8ae77': '/images/products/product-05.jpg',
    'photo-1556228578-8c89e6adf883': '/images/products/product-06.jpg',
    'photo-1523275335684-37898b6baf30': '/images/products/product-07.jpg',
    'photo-1495474472287-4d71bcdd2085': '/images/products/product-08.jpg',
  }
  return productImages[id] || '/images/products/product-01.jpg'
}
const storeImage = (index: number) => `/images/stores/store-${String((index % 6) + 1).padStart(2, '0')}.jpg`
export const seedUsers: User[] = [{ id: 'user-john', name: 'John Dela Cruz', email: 'john@clink.ph', roles: ['buyer', 'seller'] }, { id: 'user-demo', name: 'Maya Santos', email: 'maya@clink.ph', roles: ['buyer'] }]
const storeNames = ['Davao Gadget Hub', 'Cebu Streetwear', 'Manila Home Finds', 'CDO Tech Corner', 'Island Beauty PH', 'Urban Essentials', 'Local Finds PH', 'Daily Gadget Shop', 'Trendy Threads', 'Home Haven PH', 'Campus Essentials', 'Sports Central PH', 'Glow & Care', 'Kitchen Corner', 'Pet Supplies PH', 'Outdoor Life PH', 'Fashion Finds PH', 'Tech Essentials', 'Local Crafts PH', 'Everyday Deals']
const locations = ['Davao', 'Cebu', 'Manila', 'Cagayan de Oro', 'Iloilo', 'Bacolod']
export const seedStores: Store[] = storeNames.map((name, index) => ({ id: `demo-store-${index + 1}`, name, slug: slugify(name), logo: name.split(' ').map((part) => part[0]).slice(0, 2).join(''), banner: storeImage(index), description: ['Useful local finds for everyday life.', 'Thoughtful pieces, shared simply.', 'Good products from a good place.'][index % 3], location: locations[index % locations.length], sellerId: `demo-seller-${index + 1}`, rating: 4.5 + (index % 5) / 10, salesCount: 120 + index * 67, followers: 80 + index * 31, verified: index % 3 !== 0, isDemo: true, isOpen: true }))
const raw: [string, string, string, number, number, string, string, string, string][] = [
  ['iphone-case-001', 'MagSafe Crystal Case', 'Gadgets', 349, 499, 'photo-1601593346740-925612772716', 'The Daily Carry', 'Manila', 'store-daily'],
  ['desk-lamp-002', 'Aurora Desk Lamp', 'Home & Living', 1250, 1499, 'photo-1507473885765-e6ed057f782c', 'Nest & Nook', 'Cebu', 'store-nest'],
  ['linen-set-003', 'Linen Co-ord Set', 'Fashion', 899, 1199, 'photo-1490481651871-ab68de25d43d', 'Sinta Studio', 'Davao', 'store-sinta'],
  ['matcha-kit-004', 'Ceramic Matcha Starter Kit', 'Food', 680, 850, 'photo-1544787219-7f47ccb76574', 'Good Goods PH', 'Iloilo', 'store-daily'],
  ['sneakers-005', 'Everyday Canvas Sneakers', 'Fashion', 1490, 1790, 'photo-1525966222134-fcfa99b8ae77', 'Common Ground', 'Cagayan de Oro', 'store-sinta'],
  ['serum-006', 'Rice Glow Facial Serum', 'Beauty', 520, 650, 'photo-1556228578-8c89e6adf883', 'Bare Skin Lab', 'Bacolod', 'store-daily'],
]
export const seedProducts: Product[] = Array.from({ length: 80 }, (_, index) => { const base = raw[index % raw.length]; const [seedId, seedName, category, price, originalPrice, img] = base; const id = index < raw.length ? seedId : `${slugify(seedName)}-${String(index + 1).padStart(3, '0')}`; const productName = index < raw.length ? seedName : `${['Wireless Earbuds', 'Bluetooth Speaker', 'Oversized Shirt', 'Facial Cleanser', 'Storage Box', 'Notebook Set', 'Resistance Bands', 'Local Cookies'][index % 8]} ${index + 1}`; const store = seedStores[index % seedStores.length]; return { id, name: productName, description: `A lovely ${String(productName).toLowerCase()} chosen for everyday life. Simple, useful, and ready to ship.`, price: Number(price) + (index % 7) * 50, originalPrice: Number(originalPrice) + (index % 7) * 60, images: [image(String(img)), image('photo-1523275335684-37898b6baf30'), image('photo-1495474472287-4d71bcdd2085')], primaryImage: image(String(img)), category: String(category), subcategory: String(category), stock: 12 + index, variations: index % 4 === 0 ? [{ name: 'Color', options: ['Black', 'White', 'Blue'] }] : [], sellerId: store.sellerId, storeId: store.id, rating: 4.5 + (index % 5) / 10, reviewCount: 24 + index * 3, salesCount: 40 + index * 11, location: store.location, shippingInfo: 'Ships in 2-4 days', status: 'active', isDemo: true, createdAt: new Date(Date.now() - index * 86400000).toISOString(), productSlug: slugify(productName), shareableLink: `/p/${slugify(productName)}` } })
function slugify(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }
