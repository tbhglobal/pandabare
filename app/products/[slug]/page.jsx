import Announce from '@/components/Announce';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo.mjs';
import { ShopCollection, DeliveryNote } from '@/components/StorefrontHome';
import BasketIdeas from '@/components/BasketIdeas';
import { notFound } from 'next/navigation';
export function generateStaticParams(){return [{slug:'sock-bundle'}];}
export const dynamicParams=false;
export function generateMetadata({params}){if(params.slug!=='sock-bundle')return {};return pageMetadata({title:'Choose Your Socks: Basket Ideas | PandaBare',description:'Choose individually priced PandaBare socks and compare basket totals. Select products, colours and available sizes on the product pages. No bundle discount applies.',path:'/products/sock-bundle/'});}
export default function ChooseSocks({params}){if(params.slug!=='sock-bundle')notFound();return <><a className="pb-skip-link" href="#main-content">Skip to content</a><Announce/><Header/><main id="main-content"><PageHero eyebrow="Choose your socks" title="Your colours. Your combination." copy="Mix the products you want at their individual prices. Start with an idea below, then choose colour and fit on each product page. These are shopping ideas, with no bundle discount or special packaging included." img="/images/products/bundle.jpg" alt="PandaBare socks"/><BasketIdeas/><ShopCollection/><DeliveryNote/></main><Footer/></>;}
