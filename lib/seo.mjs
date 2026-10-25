export const SITE = 'https://pandabare.me';
export function canonical(path='/') {
  if (!path.startsWith('/') || path.startsWith('//') || /[?#]/.test(path)) throw new Error('Expected a local canonical path');
  return SITE + (path==='/' ? '/' : path.replace(/\/+$/,'')+'/');
}
export function pageMetadata({title,description,path='/',image='/images/hero-couple-bed.jpg'}) {
  const url=canonical(path);
  return {title,description,alternates:{canonical:url},openGraph:{title,description,url,siteName:'PandaBare',locale:'en_AU',type:'website',images:[{url:SITE+image,alt:title}]},twitter:{card:'summary_large_image',title,description,images:[SITE+image]}};
}
export function breadcrumbs(items) {
  return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map(([name,path],i)=>({'@type':'ListItem',position:i+1,name,item:canonical(path)}))};
}
export function productData({name,description,price,image,path}) {
  return {'@context':'https://schema.org','@type':'Product','@id':canonical(path)+'#product',name,description,image:SITE+image,brand:{'@type':'Brand',name:'PandaBare'},offers:{'@type':'Offer',price:String(price),priceCurrency:'AUD',url:canonical(path),seller:{'@type':'Organization',name:'PandaBare',url:SITE+'/'}}};
}
export function jsonLd(value) {return JSON.stringify(value).replace(/</g,'\\u003c');}

export function articleData({title,description,path,image}) {return {'@context':'https://schema.org','@type':'Article',headline:title,description,mainEntityOfPage:{'@type':'WebPage','@id':canonical(path)},image:SITE+image,publisher:{'@type':'Organization',name:'PandaBare',url:SITE+'/'}};}
