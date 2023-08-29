import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { createClient } from "@supabase/supabase-js";
import NewsCards from "./components/NewsCards";

const supabase = createClient(
  "https://tctywptybskokqycvohr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHl3cHR5YnNrb2txeWN2b2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwMTk4MjcsImV4cCI6MjAwNTU5NTgyN30.pC5bLkapBcr5vaN9QcygL0I2ptic-RxHDrLCfuSUYwg"
);
const finalArray = [];
function App() {
  const [count, setCount] = useState([]);

  useEffect(function () {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("NewsData").select("responseData");
    // setCount(data);

    data.forEach((ele) => {
      if (ele.responseData) {
        // console.log(ele.responseData.articles);
        finalArray.push(ele.responseData);
      }
    });
    // const dataNews = finalArray.filter((ele) => ele);
    // console.log(dataNews.length, "length");
    setCount(finalArray);
  }
  return (
    <>
      <div className="main">
        <NavBar />
        <NewsCards newsData={count} />
        {/* <img
          src="https://www.gstatic.com/youtube/img/promos/growth/ddf13c1c1c7a76c5e367063489ca4a6ace2fef8adc8597726b4ec2e46e34151f_129x56.webp"
          alt=""
        /> */}
      </div>
    </>
  );
}

export default App;
