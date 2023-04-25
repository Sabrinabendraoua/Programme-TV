import "./App.css";
import Header from "./components/Header";
import Data from "../src/data.json";

function App() {
  const data = Data;
  console.log(data);
  return (
    <div className="container">
      <Header />
      {data.map((programmeTV) => {
        console.log(programmeTV);
        return (
          <section>
            <div>{programmeTV.time}</div>
            <img src={programmeTV.image} />
            <div>
              <h2>{programmeTV.title}</h2>
              <h3>{programmeTV.type}</h3>
              <div>
                <p>{programmeTV.duration}</p>
                <p className="direct">
                  {programmeTV.direct
                    ? ". direct"
                    : programmeTV.isUnseen
                    ? ". inédit"
                    : " "}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default App;
