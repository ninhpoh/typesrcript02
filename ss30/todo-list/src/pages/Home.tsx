import Footer from "../components/Footer";
import Header from "../components/Header";
import RenderList from "../components/RenderList";

function Home() {
  return (
    <div className="flex justify-center items-center ">
      <div
        style={{ width: "400px" }}
        className=" text-center shadow-md bg-stone-50 rounded-md"
      >
        <Header></Header>
        <RenderList></RenderList>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
