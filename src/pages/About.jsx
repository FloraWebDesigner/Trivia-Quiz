import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About | My Trivia App";
  }, []);

  return (
    <main className="col-md-10 offset-md-2 p-0 m-0 bg-secondary">
      <div className="container text-light text-center">
        <h1 className="my-3">About Trivia Database</h1>
        <p>The Open Trivia Database provides a rich trivia question library.</p>
        <Link to="/category" className="w-75 btn btn-dark">
          Start Test
        </Link>
      </div>
    </main>
  );
}
