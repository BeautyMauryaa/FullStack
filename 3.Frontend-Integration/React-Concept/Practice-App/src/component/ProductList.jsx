export default function ProductList({ products, search }) {
  return (
    <ul>
      {products
        .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
        .map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
  );
}
