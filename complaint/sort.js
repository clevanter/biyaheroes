var myArray = [
    {'reportNo' : '1', 'complainant' : 'Seungmin', 'todaName' : 'Ewan', 'bodyNo' : '1111', 'status' : 'Pending', 'view' : viewBtn},
    {'reportNo' : '2', 'complainant' : 'Chan', 'todaName' : 'Dela paz', 'bodyNo' : '1111', 'status' : 'Pending', 'view' : viewBtn}

]

viewBtn = `<td class="view"> <a href="complaint-pending-report.html">
    <button class="btn btn-outline-dark btn-sm view-btn">View</button></a>`;

$('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if(order == 'desc'){
        $(this).data('order', "asc")
        myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
        text += '&#9660'

    }else{
        $(this).data('order', "desc")
        myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
        text += '&#9650'

    }
    $(this).html(text)
    buildTable(myArray)
})

buildTable(myArray)

function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].reportNo}</td>
                        <td>${data[i].complainant}</td>
                        <td>${data[i].todaName}</td>
                        <td>${data[i].bodyNo}</td>
                        <td>${data[i].status}</td>
                        <td>${data[i].viewBtn}</td>


                  </tr>`
        table.innerHTML += row


    }
}

