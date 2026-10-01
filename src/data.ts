import type { Product, Store, User } from './types'

// Replace files in public/images/products or public/images/stores to update demo imagery.
export const publicImage = (path: string) => `${import.meta.env.BASE_URL}${path}`
export const appPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
const storeImage = (index: number) => publicImage(`images/stores/store-${String((index % 6) + 1).padStart(2, '0')}.jpg`)
const productPhotos: Record<string, string> = {
  'Wireless Earbuds': 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  'Bluetooth Speaker': 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80',
  'Portable Power Bank': 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80',
  'Smart Watch': publicImage('images/products/product-07.jpg'),
  'USB-C Hub': 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80',
  'Travel Backpack': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
  'Canvas Tote Bag': 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
  'Running Sneakers': publicImage('images/products/product-05.jpg'),
  'Cotton Oversized Tee': publicImage('images/products/product-03.jpg'),
  'Coffee Beans': 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80',
  'Banana Bread': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  'Homemade Chips': 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=900&q=80',
  'Local Rice Cakes': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
  'Natural Facial Cleanser': publicImage('images/products/product-06.jpg'),
  'Daily Sunscreen': 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=80',
  'Body Lotion': 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
  'Floral Perfume': 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80',
  'Adjustable Desk Lamp': publicImage('images/products/product-02.jpg'),
  'Storage Organizer': 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=80',
  'Insulated Tumbler': 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80',
  'Minimal Wall Decor': 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=80',
  'Dotted Notebook': 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
  'School Supplies Set': 'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=900&q=80',
  'Scientific Calculator': 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=900&q=80',
  'Everyday Backpack': 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=900&q=80',
  'Study Planner': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80',
  'Resistance Bands': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  'Yoga Mat': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80',
  'Stainless Water Bottle': 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
  'Jump Rope': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
  'Sports Towel': 'https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?auto=format&fit=crop&w=900&q=80',
  'Handmade Bracelet': 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
  'Crochet Market Bag': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
  'Soy Candle': 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80',
  'Woven Basket': 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?auto=format&fit=crop&w=900&q=80',
  'Custom Keychain': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
  'Local Coffee Blend': publicImage('images/products/product-08.jpg'),
}
const productPhoto = (name: string) => productPhotos[name] || publicImage('images/products/product-fallback.svg')
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
  const photo = productPhoto(name)
  const images = [photo]
  const primaryImage = photo
  return { id: `${productSlug}-${String(index + 1).padStart(3, '0')}`, name, description: `A useful ${name.toLowerCase()} from a local seller in ${store.location}, chosen for everyday life.`, price, originalPrice, images, primaryImage, category, subcategory: category, stock: 8 + (index * 7) % 45, variations: [], sellerId: store.sellerId, storeId: store.id, rating: 4.2 + (index % 8) / 10, reviewCount: 18 + index * 3, salesCount: 32 + index * 11, location: store.location, shippingInfo: 'Ships in 2-4 days', status: 'active', isDemo: true, createdAt: new Date(Date.now() - index * 86400000).toISOString(), productSlug, shareableLink: `/p/${productSlug}` }
})
function slugify(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }
