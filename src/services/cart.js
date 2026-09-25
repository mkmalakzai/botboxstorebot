import { store } from '../store.js';

export function addToCart(userId,productId,qty=1,variantId=null){
  const product=store.getProduct(productId);
  if(!product) throw new Error('Product not found');

  const cart=store.getCart(userId);
  const key=String(productId)+':'+String(variantId||'');
  const existing=cart.find(i=>i.key===key);

  if(existing) existing.qty+=qty;
  else cart.push({key,productId:String(productId),variantId,qty});

  store.setCart(userId,cart);
  return cart;
}

export function cartTotal(userId){
  return store.getCart(userId).reduce((sum,item)=>{
    const p=store.getProduct(item.productId);
    if(!p) return sum;
    return sum + Number(p.salePrice ?? p.price ?? 0) * item.qty;
  },0);
}
