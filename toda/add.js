$(document).ready(function(){
    var i = 1;
    $('#add').click(function(){
    //alert('ok');
    i++;
    $('#dynamicadd').append('<tr id="row'+i+'"><td><input type="text" name="name[]"id="name" class="form-control"></td><td><input type="email" name="email[]" id="email"class="form-control"></td><td><input type="text" name="phone[]" id="phone" class="formcontrol"></td><td><input type="file" name="photo[]" id="photo" class="formcontrol"></td><td><button type="button" id="'+i+'" class="btn btn-danger remove_row">-</button></td></tr>');});
    $(document).on('click','.remove_row',function(){
    var row_id = $(this).attr("id");
    $('#row'+row_id+'').remove();
    });
    });