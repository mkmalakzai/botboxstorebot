const db = {
  settings: {
    storeName: 'BOTBOX Store',
    currency: 'AFN',
    currencySymbol: '؋',
    deliveryMode: 'fixed',
    fixedDeliveryFee: 0,
    lowStockThreshold: 5,
    reviewsEnabled: true,
    wishlistEnabled: true,
    payments: { cod: true, manual: true }
  },
  users: new Map(),
  admins: new Set(),
  categories: new Map(),
  products: new Map(),
  carts: new Map(),
  orders: new Map(),
  coupons: new Map(),
  reviews: new Map(),
  wishlists: new Map()
};

export const store = {
  db,
  getSettings(){ return db.settings; },
  patchSettings(patch){ db.settings = { ...db.settings, ...patch }; return db.settings; },
  ensureUser(user){
    const id=String(user.id);
    if(!db.users.has(id)) db.users.set(id,{
      id,
      firstName:user.first_name||'Customer',
      username:user.username||null,
      phone:null,
      addresses:[],
      createdAt:new Date().toISOString(),
      isBanned:false
    });
    return db.users.get(id);
  },
  isAdmin(id){ return db.admins.has(String(id)); },
  addAdmin(id){ db.admins.add(String(id)); },
  listProducts(){ return [...db.products.values()].filter(p=>p.active!==false); },
  getProduct(id){ return db.products.get(String(id)); },
  saveProduct(product){ db.products.set(String(product.id), product); return product; },
  getCart(userId){
    const id=String(userId);
    if(!db.carts.has(id)) db.carts.set(id,[]);
    return db.carts.get(id);
  },
  setCart(userId,items){ db.carts.set(String(userId),items); },
  createOrder(order){ db.orders.set(String(order.id),order); return order; },
  listOrders(){ return [...db.orders.values()].sort((a,b)=>b.createdAt.localeCompare(a.createdAt)); }
};
