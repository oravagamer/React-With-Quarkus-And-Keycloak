import Calendar from "../components/Calendar";

const HomePage= () => {
    return (
        <div className="home">
            <h1>Home</h1>
        <Calendar date={new Date(Date.now())} />
        </div>
    )
}

export default HomePage;
