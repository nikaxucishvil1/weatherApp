import { fetchData } from "./fetch.js";

export function getDataApi() {
  const input = document.querySelector("#searchInput");
  

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      fetchData()
    }
  });
}