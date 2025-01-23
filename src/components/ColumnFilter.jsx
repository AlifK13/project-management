export default function CollumnFilter({column}) {
    const {filterValue,setFilter}=column
    return(
        <span className="text-sm py-5 ">Search :{" "}
            <input className="w-28 h-5 border border-solid rounded-md" type="text" value={filterValue || ''} onChange={e=>setFilter(e.target.value)} />
        </span>
    )
}