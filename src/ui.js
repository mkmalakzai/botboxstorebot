const escapeMd = s => String(s).replace(/([_*\[\]()~`>#+\-=|{}.!])/g,'\\$1');

export const bold = s => '*'+escapeMd(s)+'*';
export const money = (n,symbol='؋') => symbol + Number(n||0).toFixed(2);

export const kb = {
  main: [
    [{text:'🛍 Shop',callback_data:'shop'},{text:'🛒 My Cart',callback_data:'cart'}],
    [{text:'📦 My Orders',callback_data:'orders'},{text:'❤️ Wishlist',callback_data:'wishlist'}],
    [{text:'👤 My Profile',callback_data:'profile'},{text:'💬 Help',callback_data:'help'}]
  ],
  admin: [
    [{text:'📊 Dashboard',callback_data:'admin_dashboard'},{text:'📦 Orders',callback_data:'admin_orders'}],
    [{text:'🛍 Products',callback_data:'admin_products'},{text:'🗂 Categories',callback_data:'admin_categories'}],
    [{text:'📦 Inventory',callback_data:'admin_inventory'},{text:'💳 Payments',callback_data:'admin_payments'}],
    [{text:'🚚 Delivery',callback_data:'admin_delivery'},{text:'🎟 Coupons',callback_data:'admin_coupons'}],
    [{text:'👥 Customers',callback_data:'admin_customers'},{text:'⭐ Reviews',callback_data:'admin_reviews'}],
    [{text:'📈 Reports',callback_data:'admin_reports'},{text:'📣 Broadcast',callback_data:'admin_broadcast'}],
    [{text:'⚙️ Store Settings',callback_data:'admin_settings'},{text:'🏠 Main Menu',callback_data:'main'}]
  ],
  backMain: [[{text:'⬅️ Back',callback_data:'main'},{text:'🏠 Main Menu',callback_data:'main'}]]
};

export const msg = {
  welcome:(name,storeName)=>'🏠 *'+escapeMd(storeName)+'*\n━━━━━━━━━━━━━━\nWelcome, *'+escapeMd(name)+'*! 👋\n\nDiscover products, manage your cart, and track your orders — all in one place.\n\n✨ *Shop smarter. Order faster.*',
  emptyCart:'🛒 *YOUR CART*\n━━━━━━━━━━━━━━\nYour cart is currently empty.\n\nBrowse the store and add something you love. ✨',
  help:'💬 *HELP & SUPPORT*\n━━━━━━━━━━━━━━\nNeed assistance with an order, payment, delivery, or product?\n\nUse the buttons below to return to the store or contact the store team.',
  admin:'🛡 *ADMIN PANEL*\n━━━━━━━━━━━━━━\nManage your store from one professional control center.\n\nChoose a section below to continue.'
};
