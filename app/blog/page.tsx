import AddArticle from "./addArticle";
import UpdateArticle from "./updateArticle";
import DeleteArticle from "./deleteArticle";

export const metadata = {
  title: "Product List",
};

type Article = {
  id: number;
  title: string;
  price: number;
};

async function getArticle() {
  const res = await fetch("http://localhost:5000/article", {
    cache: "no-store",
  });
  return res.json();
}

export default async function page() {
  const products: Article [] = await getArticle();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddArticle />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="flex">
                <div className="mr-1">
                  <UpdateArticle  {...product} />
                </div>

                <DeleteArticle {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
