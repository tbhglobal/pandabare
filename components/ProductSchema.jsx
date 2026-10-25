import { productData, jsonLd } from '@/lib/seo.mjs';
export default function ProductSchema(props) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(productData(props))}}/>;
}
