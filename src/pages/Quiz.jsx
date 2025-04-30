import Trivia from "../components/Trivia";
import { useEffect } from "react";

export default function Quiz() {
  useEffect(() => {
    document.title = "Home | My Trivia App";
  }, []);
  return (
    <main className="col-md-10 offset-md-2 p-0 m-0 bg-secondary">
      <Trivia />
    </main>
  );
}
