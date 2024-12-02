import Nav from "../Nav"
import logo from "@/assets/logo.png";


export default function Header() {
return(
    <header id="header" className="col-md-2 ms-0 bg-dark p-0 d-flex flex-column justify-content-start align-items-start" style={{minHeight:"100vh"}}>
    {/* use "className" */}
    {/* my JSX comment */}
    <h2 className="site-name d-flex flex-column justify-content-start align-items-start mb-5 ms-3 mt-2">
        <img src={logo} alt="this is Trivia's logo"></img>
    <a href="https://opentdb.com/api_config.php" className="text-light fs-6 ms-2">Welcome to Trivia</a>
    </h2>
    <Nav />
    </header>
)
}