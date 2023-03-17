import { Search as SearchIcon } from "react-bootstrap-icons";


export default function SearchBar({ onSubmit }) {
    function submit(e) {
      e.preventDefault();
        if (e.key === "Enter" && e.target.value.trim() !== "") {
          onSubmit(e.target.value);
        }
      }
  return (
    <>
    <SearchIcon size={15}  />
    <input
      onKeyUp={submit}
      className=""
      type="text"
      placeholder={"Busca un pais"}
    />
  </>
  )
}
