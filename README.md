# TPL-003 — Professional Store & Order Bot

**Platform:** Bots.Business  
**Category:** Business

## V1 architecture
TPL-003 uses dedicated Bots.Business commands and **Wait for Answer** flows for customer/admin text input. It does not use a global wildcard input router.

### User panel
Shop → Product → Cart → Checkout → Address → Payment → **Order Review → Confirm** → Order tracking.

Saved addresses use dedicated label, phone and full-address wait commands. Manual payments support a dedicated proof-photo wait flow.

### Admin panel
Dashboard, products, categories, inventory, orders, payments, delivery, coupons, customers, reviews, reports, broadcast, settings and multiple admins.

Product creation is a guided wizard: Name → Description → Price → Stock → SKU → Category → Preview → Publish.

## Setup
1. Import/sync this repository into Bots.Business.
2. Run `/setup` once from the intended owner account.
3. Open `/admin`.
4. Configure categories, products, payments, delivery and store settings.
5. Test checkout before launch.

Business configuration is stored with Bot/User properties; tokens and merchant credentials are not embedded in source.
