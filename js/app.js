var homePage = '<!--navbar starts--><nav class="navbar navbar-expand-lg navbar-light bg-light"> <h1 style="color: #6495ed; cursor: pointer;" onclick="generateHome()">Dooking</h1> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <h5 class="nav-link" style="cursor: pointer;" onclick="generateHome()">Διαθέσιμα Δωμάτια</h5> </li> <li class="nav-item"> <h5 class="nav-link" style="cursor: pointer;" onclick="generateSubmitForm()">Προσθήκη Δωματίου</h5> </li> </ul> </div> </nav><!--navbar ends-->  <div class="container-fluid"> <div class="px-lg-5">  <!--header starts--><div class="row py-5"> <div class="col-lg-12 mx-auto"> <div class="text-white p-5 shadow-sm rounded banner"> <h1 class="display-4" style="color:#000;"><b>Διαθέσιμα Δωμάτια προς Ανταλλαγή ή προς Ενοικίαση</b></h1> </div> </div> </div><!--header ends-->   <!--rooms section starts--><div class="row" id="roomSection"> </div><!--rooms section ends-->  <!--submit button starts--><div class="btn btn-dark px-5 py-3 text-uppercase" style="float: right; margin-bottom: 50px; cursor: pointer;" onclick="generateSubmitForm()">Καταχωρηση Τωρα</div> </div><!--submit button ends--> </div>';

function aleeert() {
    console.log("i am here");
}

function generateHome() {
    document.getElementById('mainContainer').innerHTML = homePage;
    generateRooms();
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