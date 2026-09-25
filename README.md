# BOTBOX TPL-003 — Professional Store & Order Bot

Bots.Business template for a reusable Telegram store.

## Owner setup
1. Import/sync this repository into Bots.Business.
2. Start the bot from the Telegram account that will own the store.
3. Run `/setup` once.
4. Open `/admin`.

The first successful `/setup` locks the owner ID.

## User flow
`/start` → Main Menu → Shop → Product → Cart → Checkout → Saved/New Address → Payment → Coupon (optional) → Review → Confirm.

Users can manage profile/phone/addresses, wishlist, orders, pending-order address/phone edits, cancellation before confirmation, manual payment proof, and delivered-order reviews.

## Admin flow
`/admin` → Dashboard. All day-to-day store actions are button-driven/guided:
- products, discounts, stock, variants, photos
- categories
- orders/statuses/payment proof
- inventory/low-stock
- customers/blocking
- COD/manual payments
- free/fixed/area delivery
- coupons
- reviews
- reports
- broadcast
- store settings
- multiple admins

## Testing order
Use a separate Telegram user account for customer testing.

### 1. Setup
- Owner: run `/setup`, then `/admin`.
- Confirm Admin Panel button also appears in Main Menu.

### 2. Store configuration
- Settings: set store name, currency, support, low-stock threshold.
- Delivery: test Free, Fixed, then Area Based.
- Payments: confirm COD; add one manual method.
- Categories: create at least one category.

### 3. Product
Create a product and verify:
- name, description, regular price
- optional discount price
- stock and SKU
- category
- optional variants with stock
- one or more photos
- publish
Then open it from Shop as customer, add to wishlist and cart.

### 4. Checkout
Customer:
- create saved address
- choose payment
- create/apply coupon
- confirm subtotal, discount, delivery and total
- place order
Check stock decreases.

### 5. Manual payment
For a manual-payment order:
- customer sends screenshot
- Admin → Orders → order
- Approve or Reject payment proof
- confirm customer receives payment update

### 6. Order lifecycle
Admin changes:
Pending → Confirmed → Processing → Shipped → Delivered.
Confirm user receives each update.
Create another order and test Reject.
Create another Pending order and test customer Cancel.
Confirm stock restores after Reject/Cancel.

### 7. Pending edit
Before Confirmed, customer opens order → Edit Order:
- change phone
- change address
Confirm edits are saved.

### 8. Reviews
Deliver an order.
Customer submits 1–5 stars + text.
Admin → Reviews → Approve/Reject.

### 9. Inventory / wishlist
Put a product at stock 0.
Customer adds it to wishlist/restock list.
Admin raises stock with Set Stock.
Confirm the user receives a back-in-stock message.

### 10. Admin/security
- Add a second admin using buttons.
- Confirm second admin can use Admin Panel.
- Confirm a normal customer cannot invoke admin commands.
- Remove second admin and re-test access.

### 11. Broadcast
Send a small test broadcast and confirm registered customer receives it.

## Important runtime check
This repository is statically prepared for Bots.Business. After import, perform the full Telegram runtime test above because Bots.Business runtime/API behavior can vary by environment/version.
