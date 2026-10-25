import { CATALOG } from './checkout-model.mjs';
export const storefrontProducts = {
  ankle: {
    name:'Ankle Hugger', seoHeading:'Ankle Hugger bamboo ankle socks', eyebrow:'Bamboo ankle socks', path:'/products/ankle-hugger/',
    description:'Your low-cut everyday pair. Choose your colour and size, then make room in the sock drawer.',
    priceCents:CATALOG['ankle-red-small'].cents, card:'/images/products/card-ankle.jpg',
    sizes:['Small','Large'],
    colours:[
      {slug:'red',name:'Red Panda',hex:'#A63A2B',image:'/images/ankle/red.jpg'},
      {slug:'white',name:'Snow White',hex:'#F4F1EA',image:'/images/ankle/white.jpg'},
      {slug:'blue',name:'Royal Blue',hex:'#2B4C8C',image:'/images/ankle/blue.jpg'},
      {slug:'black',name:'Midnight Black',hex:'#1A1A1A',image:'/images/ankle/black.jpg'},
    ],
  },
  crew: {
    name:'Bamboo Crew Sock', seoHeading:'Bamboo crew socks', eyebrow:'The everyday crew', path:'/products/crew-sock/',
    description:'A classic crew cut for work, weekends and everything in between. Pick the colour that feels like you.',
    priceCents:CATALOG['crew-red'].cents, card:'/images/products/card-crew.jpg',
    sizing:'One size fits most: AU men 6–12 and women 7–13. Contact us if you are unsure.',
    colours:[
      {slug:'black',name:'Midnight Black',hex:'#1A1A1A',image:'/images/products/crew-black.jpg'},
      {slug:'red',name:'Red Panda',hex:'#A63A2B',image:'/images/products/crew-red.jpg'},
      {slug:'blue',name:'Royal Blue',hex:'#2B4C8C',image:'/images/products/crew-blue.jpg'},
    ],
  },
  wristy: {
    name:'Wristy', seoHeading:'Wristy bamboo wristbands', eyebrow:'Bamboo wristbands', path:'/products/wristy/',
    description:'A small addition to your training kit. Pick your colour and keep your focus on the next move.',
    priceCents:CATALOG['wristy-black'].cents, card:'/images/products/card-wristy.jpg',
    sizing:'One size with a stretch fit. Contact us if you need help with fit.',
    colours:[
      {slug:'red',name:'Red',hex:'#A63A2B',image:'/images/products/wristy-red.jpg'},
      {slug:'white',name:'White',hex:'#F4F1EA',image:'/images/products/wristy-white.jpg'},
      {slug:'black',name:'Black',hex:'#1A1A1A',image:'/images/products/wristy-black.jpg'},
    ],
  },
};
export function cartId(category, colour, size) {
  const product=storefrontProducts[category];
  if (!product?.colours.some(c=>c.slug===colour) || product.sizes && !product.sizes.includes(size)) return null;
  const id=`${category}-${colour}${product.sizes ? '-'+size.toLowerCase() : ''}`;
  return Object.hasOwn(CATALOG,id) ? id : null;
}
export const aud = cents => `A$${(cents/100).toFixed(2)}`;
