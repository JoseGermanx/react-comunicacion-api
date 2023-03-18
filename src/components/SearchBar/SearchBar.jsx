import s from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {
    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
          onSubmit(e.target.value);
        }
      }
  return (
    <>    
    <input
      onKeyUp={submit}
      className={s.input}
      type="text"
      placeholder={"Busca un pais..."}
    />
  </>
  )
}
