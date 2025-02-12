import { useTable,useSortBy,useGlobalFilter,useFilters,usePagination } from "react-table"
import { COLUMNS,HEADER_GROUP } from "./column"
import { useMemo,useContext } from "react"
import { ProjectContext } from "../store/Project-context"
import GlobalFilter from "./GlobalFilter"
import ColumnFilter from "./ColumnFilter"
import HomeButton from "./HomeButton"


export default function ProjectList() {
    const columns = useMemo(()=>COLUMNS,[]);
    const {initialProject,projectPage}=useContext(ProjectContext);
    const data = useMemo(()=>initialProject.projects,[]);
    const defaultColumn = useMemo(()=>{
        return{
            Filter:ColumnFilter
        }
    },[]);

    const showButton = (hooks)=>{
        hooks.visibleColumns.push((col)=>[
            ...col,
            {
                Header:'Show Project',
                id:'showProject',
                Cell: ({row}) => <button onClick={()=>projectPage(row.original.id)} className="bg-gray-200 font-bold text-sm p-1 rounded-md border" >Show</button>
            }
        ])
    }

    const tableInstance = useTable({
        columns:columns,
        data:data,
        defaultColumn:defaultColumn,
        initialState:{pageSize:5},        
    }
    ,useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    showButton
    )
    
    const {getTableProps,getTableBodyProps,state,setGlobalFilter,headerGroups,page,previousPage,nextPage,canPreviousPage,canNextPage,gotoPage,pageCount,prepareRow,pageOptions,footerGroups}=tableInstance
    const {globalFilter,pageIndex}=state;    
    return(                    
        <div className="mx-auto my-20 text-center">
            
            <h1 className="font-bold text-4xl max-[766px]:text-sm mb-4">Project List</h1>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />          
            <table className="mt-5 mx-auto table-auto" {...getTableProps}>
                <thead className="bg-slate-400 font-bold text-xl text-slate-800 bg-opacity-90">                                       
                    {headerGroups.map((headerGroup,i)=>{
                        const {key,...restOfTheProps}=headerGroup.getFooterGroupProps()
                        const aKey =key+"anewKey"                                               
                        return(
                        <tr key={key} {...restOfTheProps} >                            
                            {headerGroup.headers.map( col=>
                            (
                                    <>                                        
                                        <th key={col.key} colSpan={col.colSpan} role={col.role} title={col.title} className="px-10 py-4 max-[420px]:py-2 text-m">                                            
                                            {col.render('Header')}   
                                        </th>                                                                               
                                    </>                                    
                                ))
                            }                                                        
                        </tr>)
                    })}                    
                </thead>
                <tbody {...getTableBodyProps()}>                    
                    {
                        page.map(row=>{
                            prepareRow(row)
                            // console.log(row)
                            return(                                
                                <tr key={row.id} className="border-b-2 border-gray-500">                                    
                                    {row.cells.map(cell=>{
                                        return <td key={cell.id} className="px-6 py-4 cursor-pointer">{cell.render('Cell')}</td>
                                    })}                                                                        
                                </tr>
                            )
                        })
                    }                    
                </tbody>                
            </table>
            <div className="mt-2">
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    |Go to page:{' '}
                    <input type="number" className="w-12 px-2 mx-1" defaultValue={pageIndex+1} onChange={
                        e=>{
                            const pageNumber =e.target.value? Number(e.target.value)-1:0
                            gotoPage(pageNumber)
                        }
                    }/>
                </span>
                <button className="bg-gray-200 font-bold text-sm p-1 rounded-md border disabled:bg-gray-500 border-gray-400" onClick={()=>{gotoPage(0)}} disabled={!canPreviousPage} >{'<<'}</button>
                <button className="bg-gray-200 font-bold text-sm p-1 rounded-md border disabled:bg-gray-500 border-gray-400" disabled={!canPreviousPage} onClick={()=>previousPage()}>Previous</button>
                <button className="bg-gray-200 font-bold text-sm p-1 rounded-md border disabled:bg-gray-500 border-gray-400" disabled={!canNextPage} onClick={()=>nextPage()}>Next</button>
                <button className="bg-gray-200 font-bold text-sm p-1 rounded-md border disabled:bg-gray-500 border-gray-400" onClick={()=>{gotoPage(pageCount-1)}} disabled={!canNextPage}>{'>>'}</button>
            </div>
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

// column filter
{/* <span className="block">{col.canFilter ?col.render('Filter'):null}</span> */}
// sortBy
{/* <span className="">
    {col.isSorted ? (col.isSortedDesc ? '🔽' : '🔼'):''}
</span>  */}