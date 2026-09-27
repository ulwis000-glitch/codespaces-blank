export type Role = 'buyer' | 'seller' | 'admin'
export type OrderStatus = 'Pending' | 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'
export type ProductVariation = { name: string; options: string[] }
export type Product = {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  images: string[]
  primaryImage: string
  category: string
  subcategory: string
  stock: number
  variations: ProductVariation[]
  sellerId: string
  storeId: string
  rating: number
  reviewCount: number
  salesCount: number
  location: string
  shippingInfo: string
  status: 'active' | 'draft' | 'out-of-stock' | 'archived'
  isDemo?: boolean
  featured?: boolean
  supplierCost?: number
  createdAt: string
  productSlug: string
  shareableLink: string
}
export type Store = { id: string; name: string; slug: string; logo: string; banner: string; description: string; location: string; sellerId: string; rating: number; salesCount: number; verified: boolean; followers: number; announcement?: string; isDemo?: boolean; isOpen?: boolean }
export type CartItem = { productId: string; quantity: number }
export type Order = { orderId: string; buyerId: string; sellerId: string; storeId: string; products: { productId: string; quantity: number; price: number }[]; subtotal: number; shipping: number; total: number; deliveryAddress: string; paymentMethod: string; status: OrderStatus; createdAt: string }
export type User = { id: string; name: string; email: string; roles: Role[]; phone?: string; memberSince?: string }
export type ThemeMode = 'light' | 'dark' | 'system'
export type Preferences = { theme: ThemeMode; compact: boolean; animations: boolean; orderUpdates: boolean; messages: boolean; promotions: boolean; storeActivity: boolean; clinkActivity: boolean }
