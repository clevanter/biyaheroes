function tableSearch() {
    let input, filter, table, tr, td, txtValue;

    //Intialising Variables
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable-th");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
            td = tr[i];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
        }
    }

}

// let array = [
//     {
//         report : '1',
//         complainant : 'Seungmin',
//         toda : 'Halang',
//         body : 'B111',
//         stats : 'Pending'
//     },
//     {
//         report : '2',
//         complainant : 'Chan',
//         toda : 'Halang',
//         body : 'B121',
//         stats : 'Pending'
//     },
//     {
//         report : '3',
//         complainant : 'Minho',
//         toda : 'Halang',
//         body : 'B161',
//         stats : 'Pending'
      
//     }
// ]

// function showtable(curarray) {
//     document.getElementById('myTable').innerHTML = `
//         <tr class="bg-primary text-white fw-bold">
//         <td>Report</td>
//         <td>Complainant</td>
//         <td>Toda</td>
//         <td>Body</td>
//         <td>Stats</td>
//         </tr>
//         `;

//     if(curarray == ''){
//         document.getElementById('error').innerHTML = `<span class='text-danger'>Not Found!</span>`
//     } 
//     else {
//         document.getElementById('error').innerHTML = '';

//         for(var i=0 ; i < curarray.length; i++){
//             document.getElementById('myTable').innerHTML += `
//                 <tr>
//                 <td>${curarray[i].report}</td>
//                 <td>${curarray[i].complainant}</td>
//                 <td>${curarray[i].toda}</td>
//                 <td>${curarray[i].body}</td>
//                 <td>${curarray[i].stats}</td>
//                 `
//         }
//     }
// }

// showtable(array);

// var newarray = [];

// document.getElementById('search').addEventListener('keyup', function(){

//     var search = this.value.toLocaleLowerCase();

//     newarray = array.filter(function (val) {

//         if(val.report.includes(search) || val.complainant.includes(search) || val.toda.includes(search) || val.body.includes(search) || val.stats.includes(search)){
//             var newobj = { report : val.report, complainant : val.complainant, toda : val.toda, body : val.body, stats : val.stats}
//             return newobj;
//         }
//     })

//     showtable(newarray);
// })