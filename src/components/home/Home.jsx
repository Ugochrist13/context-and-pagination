import axios from "axios";
import React from "react";
import { useContext, useEffect, useState } from "react";
// import { Context } from "../contextApi/Context";
import "./home.css";

function Home() {
  // const { count, setCount, image, setImage } = useContext(Context);
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(["https://api.pexels.com/v1/search?query=cars&per_page"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          page,
          {
            headers: {
              Authorization: import.meta.env.VITE_PEXEL_API_KEY,
            },
          }
        );
        setImage(result.data.photos);
        setPage([result.data.next_page]);
        console.log(result.data.next_page)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const changePage = async (fetchData) =>{
    return fetchData.result = await axios.get(setPage)
  }

  return (
    <div className="body">
      <h1 className="home">Home</h1>
      <div className="cardcont">
        {image?.map((i, k) => {
          return (
            <div key={k} className="card">
              <img
                src={i?.src?.portrait}
                loading="lazy"
                alt="img"
                srcSet=""
                className="img"
              />
            </div>
          );
        })}
      </div>
      <div className="footer">
          <button className="btn" onClick={() => setImage([...image],result.data.photos)}>
            Load More
          </button>
          <button className="btn" onClick={changePage}>
            Next Page
          </button>
        </div>
    </div>
  );
}

export default Home;
