import { useTable } from "react-table"
import { COLUMNS } from "./column"
import { useMemo,useContext } from "react"
import { ProjectContext } from "../store/Project-context"


export default function ProjectList() {
    const columns = useMemo(()=>COLUMNS,[]);
    const {initialProject}=useContext(ProjectContext);
    const data = useMemo(()=>initialProject.projects,[]);
    const tableInstance = useTable({
        columns:columns,
        data:data
    })
    
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance

    return(
        <div className="mx-auto my-32 text-center">
            <h1 className="font-bold text-4xl">Project List</h1>
            <table className="mt-10 table-auto">
                <thead className="bg-slate-400 font-bold text-xl text-slate-800 bg-opacity-90">
                    {headerGroups.map(headerGroup=>(
                        <tr key={headerGroup.id} >
                            {
                                headerGroup.headers.map( col=>(
                                    <th key={col.id} className="px-6 py-3">{col.render('Header')}</th>
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