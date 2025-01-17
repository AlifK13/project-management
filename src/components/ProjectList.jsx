import { useTable,useSortBy,useGlobalFilter,useFilters } from "react-table"
import { COLUMNS,HEADER_GROUP } from "./column"
import { useMemo,useContext } from "react"
import { ProjectContext } from "../store/Project-context"
import GlobalFilter from "./GlobalFilter"
import ColumnFilter from "./ColumnFilter"


export default function ProjectList() {
    const columns = useMemo(()=>COLUMNS,[]);
    const {initialProject}=useContext(ProjectContext);
    const data = useMemo(()=>initialProject.projects,[]);
    const defaultColumn = useMemo(()=>{
        return{
            Filter:ColumnFilter
        }
    },[]);

    const tableInstance = useTable({
        columns:columns,
        data:data,
        defaultColumn:defaultColumn
    },useFilters,useGlobalFilter,useSortBy)
    
    const {getTableProps,getTableBodyProps,state,setGlobalFilter,headerGroups,rows,prepareRow,footerGroups}=tableInstance
    const {globalFilter}=state;
    return(
        <div className="mx-auto my-32 text-center">
            <h1 className="font-bold text-4xl mb-4">Project List</h1>
            {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />             */}
            <table className="mt-10 table-auto" {...getTableProps}>
                <thead className="bg-slate-400 font-bold text-xl text-slate-800 bg-opacity-90">
                    {headerGroups.map(headerGroup=>(
                        <tr key={headerGroup.id} >
                            {
                                headerGroup.headers.map( col=>(
                                    <>
                                        <th key={col.id} {...col.getHeaderProps(col.getSortByToggleProps())} className="px-6 py-3">
                                            {col.render('Header')}
                                            <span className="px-2">
                                                {col.isSorted ? (col.isSortedDesc ? '🔽' : '🔼'):''}
                                            </span>
                                            <div className="">{col.canFilter ?col.render('Filter'):null}</div>                                                            
                                        </th>
                                        
                                        
                                    </>
                                    
                                ))
                            }                                                        
                        </tr>
                    ))}                    
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row=>{
                            prepareRow(row)
                            return(
                                <tr key={row.id} className="border-b-2 border-gray-500">
                                    {row.cells.map(cell=>{
                                        return <td key={cell.id} className="px-6 py-4">{cell.render('Cell')}</td>
                                    })}                                                                        
                                </tr>
                            )
                        })
                    }                    
                </tbody>
                
            </table>
        </div>
    )
}

// for grouping
// on td header and footer
// {...column.getFooterProps()}
// {...col.getHeaderProps()}

//for sorting
{/* <span>
    {col.isSorted ? (col.isSortedDesc ? 'DESC':'ASC'):''}
</span>  */}

//footer table
{/* <tfoot className="bg-slate-400 font-bold text-xl text-slate-800 bg-opacity-90">
    {footerGroups.map(footer=>(
        <tr>
            {
                footer.headers.map(column=>(
                    <td key={column.id}  className="px-6 py-3">{column.render('Footer')}</td>
                ))
            }
            
        </tr>    
    ))}
    
</tfoot> */}