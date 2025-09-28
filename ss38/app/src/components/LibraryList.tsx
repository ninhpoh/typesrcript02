import LibraryItem from "./LibraryItem";

export default function LibraryList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
      <LibraryItem/>
    </div>
  )
}
