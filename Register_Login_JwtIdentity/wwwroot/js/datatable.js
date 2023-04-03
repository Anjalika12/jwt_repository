var datatable;
$(document).ready(function () {
    loadDataTable()
})
function loadDataTable() {
    dataTable = $('#tblData').DataTable({

        "ajax": {
            "url": "/Home/GetAll",
            "type": "POST",
            "datatype": "json",
        },
        processing: true,
        serverSide: true,

        //  order: [[1, 'desc']],
        "columns": [
            { "data": "name", /*"searchable": false*/ },
            { "data": "email" },
            { "data": "salary" },
            { "data": "department", /*"searchable": false */ },
            { "data": "designation", /*"searchable": false, "sortable": false*/ }
        ],

        "language": {
            "infoFiltered": ""
        },

        "dom": 'lBfrtip',
        buttons: [
            {

                extend: 'excelHtml5',
                text: 'Export to Excel',
                title: 'Export datatable data to Excel',
                exportOptions: {
                    columns: ':visible'
                }
            }]
    })
}