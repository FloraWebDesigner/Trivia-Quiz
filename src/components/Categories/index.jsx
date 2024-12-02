import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Categories({ onSelect }){
    const [category, setCategory] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    
    useEffect(() => {
        const getCategory=async() =>{
            let url="https://opentdb.com/api_category.php";
            let response =await fetch(url);
            let data=await response.json();
            setCategory(data.trivia_categories);   
        }
        getCategory();
    }, []);


const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedId) {
        onSelect(selectedId); 
    } else {
        alert("Please select a category!");
    }
};

return (
    <section className="container container text-light text-center">
        <h1 className="my-3">Select a Trivia Category</h1>
        <form onSubmit={handleSubmit}>
            <div className="categories">
                {category.map((cat) => (
                    <label
                        key={cat.id}
                        className={`category-item ${selectedId === cat.id ? "active" : ""}`}
                        style={{
                            fontSize:"12px",
                            display: "inline-block",
                            margin: "5px",
                            padding: "5px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            cursor: "pointer",
                            backgroundColor: selectedId === cat.id ? "#212529" : "#fff",
                            color: selectedId === cat.id ? "#fff" : "#000",
                        }}
                    >
                        <input
                            type="radio"
                            name="category"
                            value={cat.id}
                            style={{ display: "none" }}
                            onChange={() => setSelectedId(cat.id)} 
                        />
                        {cat.name}
                    </label>
                ))}
            </div>
            <Link to={`/${selectedId}`}>
            <button type="submit" className="btn btn-dark w-75 mt-3">
                Submit
            </button>
            </Link>
        </form>
    </section>
);
}
