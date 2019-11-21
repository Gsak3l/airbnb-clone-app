var homePage = '<!--navbar starts--><nav class="navbar navbar-expand-lg navbar-light bg-light"> <h1 style="color: #6495ed; cursor: pointer;" onclick="generateHome()">Dooking</h1> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <h5 class="nav-link" style="cursor: pointer;" onclick="generateHome()">Διαθέσιμα Δωμάτια</h5> </li> <li class="nav-item"> <h5 class="nav-link" style="cursor: pointer;" onclick="generateSubmitForm()">Προσθήκη Δωματίου</h5> </li> </ul> </div> </nav><!--navbar ends-->  <div class="container-fluid"> <div class="px-lg-5">  <!--header starts--><div class="row py-5"> <div class="col-lg-12 mx-auto"> <div class="text-white p-5 shadow-sm rounded banner"> <h1 class="display-4" style="color:#000;"><b>Διαθέσιμα Δωμάτια προς Ανταλλαγή ή προς Ενοικίαση</b></h1> </div> </div> </div><!--header ends-->   <!--rooms section starts--><div class="row" id="roomSection"> </div><!--rooms section ends-->  <!--submit button starts--><div class="btn btn-dark px-5 py-3 text-uppercase" style="float: right; margin-bottom: 50px; cursor: pointer;" onclick="generateSubmitForm()">Καταχωρηση Τωρα</div> </div><!--submit button ends--> </div>';
var submitPage = '<!--navbar starts--><nav class="navbar navbar-expand-lg navbar-light bg-light"><h1 style="color: #6495ed; cursor: pointer;" onclick="generateHome()">Dooking</h1><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"/></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><h5 class="nav-link" style="cursor: pointer;" onclick="generateHome()">Διαθέσιμα Δωμάτια</h5></li><li class="nav-item"><h5 class="nav-link" style="cursor: pointer;" onclick="generateSubmitForm()">Προσθήκη Δωματίου</h5></li></ul></div></nav><!--navbar ends--><div class="container-fluid"> <div class="px-lg-5"><!--header starts--><div class="row py-5"><div class="col-lg-12 mx-auto"><div class="text-white p-5 shadow-sm rounded banner"><h1 class="display-4" style="color:#000;"><b>Προσθήκη Δωματίου</b></h1></div></div></div><!--header ends--> <!--submit form starts--><div class="container"> <form onsubmit="createRoom()"> <div class="row"><!--Personal Info section starts--><div class="col-sm"> <div class="form-group"> <label for="formGroupExampleInput">Επώνυμο</label> <input type="text" class="form-control" id="formGroupExampleInput"> </div> </div> <div class="col-sm"> <div class="form-group"> <label for="formGroupExampleInput">Όνομα</label> <input type="text" class="form-control" id="formGroupExampleInput"> </div> </div> </div> <div class="form-group"> <label for="exampleInputEmail1">Διεύθυνση Email</label> <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="this@is.america"> </div><!--Personal Info section ends--><!--Number of Visitors starts--><div class="row"> <div class="col-sm"> <div class="form-group"> <label for="exampleFormControlSelect1">Αριθμός Επισκεπτών</label> <select class="form-control" id="exampleFormControlSelect1"> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option> </select> </div> </div><!--Number of Visitors ends--><!--Number of bedrooms starts--><div class="col-sm"><div class="form-group"><label for="exampleFormControlSelect1">Αριθμός Υπνοδωματίων</label><select class="form-control" id="exampleFormControlSelect1"><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div><!--Number of bedrooms ends--></div><!--Number of beds starts--><div class="row"> <div class="col-sm"> <div class="form-group"> <label for="exampleFormControlSelect1">Αριθμός Κρεβατιών</label> <select class="form-control" id="exampleFormControlSelect1"> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> </select> </div> </div><!--Number of beds ends--><div class="col-sm"> <div class="form-group"> <label for="exampleFormControlSelect1">Αριθμός Μπάνιων</label> <select class="form-control" id="exampleFormControlSelect1"> <option>1</option> <option>2</option> <option>3</option> <option>4</option> </select> </div> </div> </div><!--comment section starts--><div class="form-group"><label for="exampleFormControlTextarea1">Σχόλια</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="3"/></div><!--comment section ends--><!--file selection starts--><div class="custom-file"> </div> <div class="input-group"> <input type="file" class="custom-file-input" id="imgInp"> <label class="custom-file-label" for="validatedCustomFile">Επιλογή Εικόνας</label> <div class="invalid-feedback">Example invalid custom file feedback</div> </div> <img id="img-upload" /><!--file selection ends--><!--submit button starts--><input type="submit" class="btn btn-secondary btn-lg" style="float: right; margin-top: 40px; margin-bottom: 40px; background-color: #6495ed;" value="Καταχώρηση"><!--submit button ends--></form></div></div><!--submit form ends--></div>';
function aleeert() {
    console.log("i am here");
}

function generateHome() {
    document.getElementById('mainContainer').innerHTML = homePage;
    generateRooms();
}

function generateSubmitForm() {
    document.getElementById('mainContainer').innerHTML = submitPage;
}

$(document).ready(function () {
    $(document).on('change', '.btn-file :file', function () {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function (event, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = label;

        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }

    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imgInp").change(function () {
        readURL(this);
    });
});