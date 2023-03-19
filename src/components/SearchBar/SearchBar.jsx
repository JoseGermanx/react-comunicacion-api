import s from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {
    function submit(e) {
      e.preventDefault();
        if (e.key === "Enter" && e.target.value.trim() !== "") {
          onSubmit(e.target.value);
          e.target.value  = "";
        }
      }
  return (
    <>    
    <input
      onKeyUp={submit}
      className={s.input}
      type="search"
      placeholder={"Busca un pais..."}
    />
  </>
  )
}
