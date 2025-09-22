import ListStudent from "./ListStudent";

function Left() {
  return (
    <div style={{ width: "55%" }} className="">
      {/* side bar */}
      <div className="flex justify-between m-2">
        <button className=" bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-amber-50">
          Them moi sinh vien
        </button>
        <div>
          <input
            type="text"
            className=" border-1 rounded-md p-2 mr-2"
            placeholder="Search Here"
          />
          <button className=" bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-amber-50 mr-2">
            Tim kiem
          </button>
          <button className=" bg-stone-50 hover:bg-sky-700 p-2 rounded-md text-sky-500 border-1 border-sky-500/50">
            Sap xep
          </button>
        </div>
      </div>
      {/* content */}
      <ListStudent/>
    </div>
  );
}

export default Left;
