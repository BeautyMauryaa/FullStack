export default function SearchList({ setsearch }) {
  return (
    <input placeholder="search" onChange={(e) => setsearch(e.target.value)} />
  );
}
