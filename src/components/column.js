import ColumnFilter from "./ColumnFilter"

export const COLUMNS = [
    {
        Header:'Project Name',
        Footer:'Project Name',
        accessor:'projectName',        
    },
    {
        Header:'Due date',
        Footer:'Due date',
        accessor:'dueDate',        
        // disableFilters:true,
        // disableGlobalFilter:true
    }
]

export const HEADER_GROUP =[
    {
        Header : 'Project',
        Footer : 'Project',
        columns:[
            {
                Header:'Project Name',
                Footer:'Project Name',
                accessor:'projectName',
                Filter:ColumnFilter
            },
            {
                Header:'Due date',
                Footer:'Due date',
                accessor:'dueDate',
                Filter:ColumnFilter
            } 
        ]
    }
]