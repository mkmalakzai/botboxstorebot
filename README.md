# TPL-003 — Professional Store & Order Bot

BOTBOX Business template foundation for a professional Telegram store.

## V1 scope
- Products, categories and variants
- Advanced inventory and low-stock architecture
- Cart and checkout foundation
- COD + manual payment architecture
- Flexible delivery settings
- Orders and status history
- Coupons/promotions architecture
- Customer profiles and saved addresses
- Wishlist and back-in-stock architecture
- Verified reviews architecture
- Full admin-panel navigation
- Configurable store currency and settings
- Multiple-admin support

## Setup
1. Copy `.env.example` to `.env`.
2. Add `BOT_TOKEN`.
3. Add comma-separated Telegram numeric IDs to `OWNER_IDS`.
4. Run `npm install`.
5. Run `npm start`.

## Architecture
Store identity, currency, delivery, payment modes, stock thresholds and feature flags live in the central settings layer instead of user-flow handlers.

> This repository is a clean V1 foundation. Persistent database adapters and detailed CRUD flows can be added on the same service boundaries without replacing the core architecture.
