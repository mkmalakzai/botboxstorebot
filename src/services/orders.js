import { store } from '../store.js';

let seq=1;

export function createOrder(userId,{items,address,paymentMethod,deliveryFee=0,discount=0}){
  const subtotal=items.reduce((sum,i)=>{
    const p=store.getProduct(i.productId);
    return sum + Number(p?.salePrice ?? p?.price ?? 0)*i.qty;
  },0);

  const order={
    id:'ORD-'+String(seq++).padStart(5,'0'),
    userId:String(userId),
    items,
    address,
    paymentMethod,
    subtotal,
    deliveryFee,
    discount,
    total:Math.max(0,subtotal+deliveryFee-discount),
    status:'Pending',
    statusHistory:[{status:'Pending',at:new Date().toISOString()}],
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString()
  };

  return store.createOrder(order);
}

export function setOrderStatus(order,status,note=''){
  order.status=status;
  order.updatedAt=new Date().toISOString();
  order.statusHistory.push({status,note,at:order.updatedAt});
  return order;
}
