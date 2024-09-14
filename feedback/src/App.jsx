import { useState } from "react";
import { FaStar } from "react-icons/fa";

function App() {

  let [star, setStar] = useState(0);
  let [feedback, setFeedback] = useState({});
  let [listFeedback, setListFeedback] = useState([]);

  let handleStar = (star) => {
    setStar(star);
    let feed = { ...feedback, ['star']: star };
    setFeedback(feed);
  }

  let handleChange = (e) => {
    let { name, value } = e.target;
    let feed = { ...feedback, [name]: value }
    setFeedback(feed);
    console.log(feed);
  }

  let handleSubmit = (e) => {
    e.preventDefault();

    let listFeed = [...listFeedback, feedback];

    setListFeedback(listFeed);
    console.log(listFeed);
    setStar(0);
    setFeedback({})
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Feedback</h2>

        <form method="post" onSubmit={handleSubmit}>
          {[1, 2, 3, 4, 5].map((v, i) => (
            <FaStar key={i} color={star >= v ? "yellow" : "gray"} onMouseOver={() => handleStar(v)} />
          ))}
          <br /><br />
          <textarea name="feedback" id="" onChange={handleChange} value={feedback.feedback || ""} ></textarea>
          <br /> <br />
          <input type="submit" value="Add Feedback" />
        </form>

        <br /><br />
        <table align="center" border={1}>
          <tr>
            <td>Star</td>
            <td>Message</td>
          </tr>

          {listFeedback.map((val, i) => (
            <tr key={i}>
              <td>
                {
                  [1, 2, 3, 4, 5].map((v, i) => (
                    <FaStar key={i} color={val.star >= v ? "yellow" : "gray"} />
                  ))
                }
              </td>
              <td>{val.feedback}</td>
            </tr>
          ))}

        </table>

      </div>
    </>
  )
}

export default App
