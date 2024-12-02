import { useEffect } from "react";
import Categories from "../components/Categories";

export default function Category() {
  useEffect(() => {
    document.title = "Category | My Trivia App";
  }, []);
  return (
    <main className="col-md-10 offset-md-2 p-0 m-0 bg-secondary">
      <Categories />
    </main>
  );
}