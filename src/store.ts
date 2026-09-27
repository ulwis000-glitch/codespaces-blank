import { seedProducts, seedStores, seedUsers } from './data'
import type { CartItem, Order, Preferences, Product, Store, User } from './types'

const read = <T,>(key: string, fallback: T): T => { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) as T : fallback } catch { return fallback } }
const write = (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value))
export const db = {
  products: (): Product[] => [...seedProducts, ...read<Product[]>('clink-user-products', [])],
  demoProducts: (): Product[] => seedProducts,
  userProducts: (): Product[] => read('clink-user-products', []),
  stores: (): Store[] => [...seedStores, ...read<Store[]>('clink-user-stores', [])],
  demoStores: (): Store[] => seedStores,
  userStores: (): Store[] => read('clink-user-stores', []),
  users: (): User[] => read('clink-users', seedUsers),
  cart: (): CartItem[] => read('clink-cart', []),
  orders: (): Order[] => read('clink-orders', []),
  wishlist: (): string[] => read('clink-wishlist', []),
  followedStores: (): string[] => read('clink-followed-stores', []),
  preferences: (): Preferences => read('clink-preferences', { theme: 'system', compact: false, animations: true, orderUpdates: true, messages: true, promotions: true, storeActivity: true, clinkActivity: true }),
  session: (): User | null => read<User | null>('clink-session', null),
  saveProducts: (value: Product[]) => write('clink-user-products', value.filter((product) => !product.isDemo)),
  saveStores: (value: Store[]) => write('clink-user-stores', value.filter((store) => !store.isDemo)),
  saveCart: (value: CartItem[]) => write('clink-cart', value),
  saveOrders: (value: Order[]) => write('clink-orders', value),
  saveWishlist: (value: string[]) => write('clink-wishlist', value),
  saveFollowedStores: (value: string[]) => write('clink-followed-stores', value),
  savePreferences: (value: Preferences) => write('clink-preferences', value),
  resetDemo: () => ['clink-user-products', 'clink-user-stores', 'clink-orders', 'clink-cart', 'clink-wishlist', 'clink-followed-stores', 'clink-session', 'clink-preferences'].forEach((key) => localStorage.removeItem(key)),
  saveSession: (value: User | null) => value ? write('clink-session', value) : localStorage.removeItem('clink-session'),
}
