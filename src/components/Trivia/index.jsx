import { useEffect, useState } from "react";
import { faLayerGroup, faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Answer from "../Answer/Index";
import { useParams } from "react-router-dom";

export default function Trivia() {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [result, setResult] = useState("");
  const [revealed, setRevealed] = useState(false);
  const { selectedId } = useParams();
  
  // https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=boolean
  // any script you want to run
  useEffect(() => {
    console.log("selectedId: ",selectedId);
    const getQuestion = async () => {
        if (!selectedId) {
            console.log("No category selected yet.");
            return; }
        else{
            const url = `https://opentdb.com/api.php?amount=1&category=${selectedId}&difficulty=easy&type=boolean`;
  //   let url =
    //     "https://opentdb.com/api.php?amount=1&category=27&difficulty=easy&type=boolean";
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setCategory(data.results[0].category);
      setDifficulty(data.results[0].difficulty);
      setQuestion(data.results[0].question);
      setAnswer(data.results[0].correct_answer);
        }
    };
    getQuestion();
  }, [selectedId]); // the empty square brackets are for your dependency array (any object, varibale, etc. in there will cause the effect to run again if they change). If you want the effect to only run once (i.e. when the component first renders), then use empty square brackets (no dependencies)
  let triviaCategory = category ? `Category: ${category}` : "";
  let triviaDifficulty = difficulty ? `Level: ${difficulty}` : "";
  let triviaQuestion = question || "Loading the question";
  let traviaAnswer = answer ? `(Correct Answer: ${answer})` : "";

  let answerArray = [
    {
      valueOfAnswer: "False",
      color: "#FF0000",
      emoji: "😫",
    },
    { valueOfAnswer: "True", color: "#008000", emoji: "😆" },
  ];

  function handleForm(e) {
    console.log(e.target);
    e.preventDefault(); // prevent page reload
    const selectedAnswer = e.target.myAnswer.value;
    const isCorrect = selectedAnswer === answer;
    setResult(isCorrect ? answerArray[1] : answerArray[0]);
    setRevealed(true);
    console.log(result);
    console.log(revealed);
  }

  return (
    <section>
      <p className="mt-3 mb-0 text-center text-light">Here Is Your Random Trivia Test</p>
      <h3 className="mt-0 text-center fw-bold text-light">True or False</h3>
      <div className="bg-dark p-3 text-center mx-5 rounded-3">
        <h2 className="text-warning fw-bolder mt-2">{triviaQuestion}</h2>
        <div className="d-flex flex-row justify-content-center g-3 text-light">
          <p className="me-5">
            <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
            {triviaCategory}
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowTurnUp} className="me-1" />
            {triviaDifficulty}
          </p>
        </div>
        {/* // method="get" action="getAnswer"          */}
        <form action="getAnswer" method="GET" onSubmit={handleForm}>
          <div className="d-flex flex-row justify-content-center align-items-center mb-3 text-light">
            <p className="py-0 my-0 me-3">Please select:</p>
            <input
              type="radio"
              id="true"
              className="me-1"
              name="myAnswer"
              value="True"
              required
            />
            <label htmlFor="true" className="me-3">
              True
            </label>
            <input
              type="radio"
              id="false"
              className="me-1"
              name="myAnswer"
              value="False"
              required
            />
            <label htmlFor="false">False</label>
          </div>
          <button
            type="submit"
            className="btn btn-secondary mb-3"
            value="Submit your answer"
          >
            Check your answer
          </button>
        </form>

        {result && (
          <Answer
            emoji={result.emoji}
            color={result.color}
            value={result.valueOfAnswer}
          />
        )}
        {revealed && <h3 className="text-warning mt-2">{traviaAnswer}</h3>}
      </div>
    </section>
  );
}
