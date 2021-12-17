import Link from "next/link";
import { useRouter } from "next/router";

// /category/123/product/654654

const ProductPage = () => {
  const {
    query: { categoryId, productId },
  } = useRouter();

  return (
    <article>
      <h1>
        Product {productId} (category {categoryId})
      </h1>
      <p>
        <Link href="/toto">
          <a>Go toto</a>
        </Link>
      </p>
    </article>
  );
};

export default ProductPage;
