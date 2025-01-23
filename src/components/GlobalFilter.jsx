export default function GlobalFilter({filter,setFilter}) {
    return(
        <span>
            Search: {' '}
            <input className=" h-7 border border-solid rounded-md" type="text" value={filter || ''} onChange={e=>setFilter(e.target.value)} />
        </span>
    )
}