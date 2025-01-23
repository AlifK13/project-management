import ColumnFilter from "./ColumnFilter"

export const COLUMNS = [
    {
        Header:'Project Name',
        // Footer:'Project Name',
        accessor:'projectName',
        disableSortBy:true       
    },
    {
        Header:'Due date',
        // Footer:'Due date',
        accessor:'dueDate',
        Filter:""     
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