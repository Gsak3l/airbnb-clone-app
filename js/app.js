var homePage = '<!--navbar starts--> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <h1 style="color: #6495ed; cursor: pointer;" onclick="generateHome()">Dooking</h1> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <h5 class="nav-link" style="cursor: pointer;" onclick="generateHome()">Διαθέσιμα Δωμάτια</h5> </li> <li class="nav-item"> <h5 class="nav-link" style="cursor: pointer;" onclick="generateSubmitForm()">Προσθήκη Δωματίου</h5> </li> </ul> </div> </nav> <!--navbar ends--> <div class="container-fluid"> <div class="px-lg-5"> <!--header starts--> <div class="row py-5"> <div class="col-lg-12 mx-auto"> <div class="text-white p-5 shadow-sm rounded banner"> <h1 class="display-4" style="color:#000;"><b>Διαθέσιμα Δωμάτια προς Ανταλλαγή ή προς Ενοικίαση</b></h1> </div> </div> </div> <!--header ends--> <!--rooms section starts--> <div class="row" id="roomSection"> </div> <!--rooms section ends--> <!--submit button starts--> <div class="btn btn-dark px-5 py-3 text-uppercase" style="float: right; margin-bottom: 50px; cursor: pointer;" onclick="generateSubmitForm()">Καταχωρηση Τωρα</div> </div> <!--submit button ends--> </div>';
var submitPage = '<!--navbar starts--> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <h1 style="color: #6495ed; cursor: pointer;" onclick="generateHome()">Dooking</h1> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item"> <h5 class="nav-link" style="cursor: pointer;" onclick="generateHome()">Διαθέσιμα Δωμάτια</h5> </li> <li class="nav-item"> <h5 class="nav-link" style="cursor: pointer;" onclick="generateSubmitForm()">Προσθήκη Δωματίου</h5> </li> </ul> </div> </nav> <!--navbar ends--> <div class="container-fluid"> <div class="px-lg-5"> <!--header starts--> <div class="row py-5"> <div class="col-lg-12 mx-auto"> <div class="text-white p-5 shadow-sm rounded banner"> <h1 class="display-4" style="color:#000;"><b>Προσθήκη Δωματίου</b></h1> </div> </div> </div> <!--header ends--> <!--submit form starts--> <div class="container"> <form onsubmit="createRoom()"> <div class="row"> <!--Personal info section starts--> <!--surname--> <div class="col-sm"> <div class="form-group"> <label for="formGroupExampleInput">Επώνυμο</label> <input type="text" class="form-control" id="surname"> </div> </div> <!--name--> <div class="col-sm"> <div class="form-group"> <label for="formGroupExampleInput">Όνομα</label> <input type="text" class="form-control" id="name"> </div> </div> </div> <!--Email address--> <div class="form-group"> <label for="exampleInputEmail1">Διεύθυνση Email</label> <input type="email" class="form-control" id="mail" aria-describedby="emailHelp" placeholder="this@is.america"> </div> <!--Personal info section ends--> <!--room options section starts--> <div class="row"> <div class="col-md-8"> <!--kind of transaction starts--> <div class="form-group"> <label for="exampleFormControlSelect1">Δωμάτιο προς</label> <select class="form-control" id="transaction"> <option>Ανταλλαγή</option> <option>Ενοικίαση</option> <option>Ανταλλαγή/Ενοικίαση</option> </select> </div> <!--kind of transaction ends--> </div> <div class="form-group col-md-4"> <label for="formGroupExampleInput">Κόστος σε € ανα Διανυκτέρευση (Προαιρετικό)</label> <input type="text" class="form-control" id="price"> </div> </div> <!--room options section ends--> <div class="row"> <!--number of visitors starts--> <div class="col-sm"> <div class="form-group"> <label for="exampleFormControlSelect1">Αριθμός Επισκεπτών</label> <select class="form-control" id="visNum"> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option> </select> </div> </div> <!--number of visitors ends--> <!--number of bedrooms starts--> <div class="col-sm"> <div class="form-group"> <label for="exampleFormControlSelect1">Αριθμός Υπνοδωματίων</label> <select class="form-control" id="bedroomNum"> <option>1</option> <option>2</option> <option>3</option> <option>4</option> </select> </div> </div> <!--number of bedrooms ends--> </div> <div class="row"> <div class="col-sm"> <!--number of beds starts--> <div class="form-group"> <label for="exampleFormControlSelect1">Αριθμός Κρεβατιών</label> <select class="form-control" id="bedNum"> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> </select> </div> <!--number of beds starts--> </div> <div class="col-sm"> <!--number of baths starts--> <div class="form-group"> <label for="exampleFormControlSelect1">Αριθμός Μπάνιων</label> <select class="form-control" id="bathNum"> <option>1</option> <option>2</option> <option>3</option> <option>4</option> </select> </div> <!--number of baths ends--> </div> </div> <!--number of visitors ends--> <!--title section starts--> <div class="form-group"> <label for="exampleFormControlTextarea1">Τίτλος</label> <textarea class="form-control" rows="2" id="title"></textarea> </div> <!--title section ends--> <!--image input field starts--> <div class="form-group"> <h5>Προσθήκη Εικόνας</h5> <input type="file" class="form-control-file" onchange="readURL(this)" id="image"> <img id="imagePreview" style="width: 200px; margin-top: 10px; margin-bottom: 10px;" src="" alt="" /> </div> <!--image input field ends--> <!--submit button starts--> <input type="submit" class="btn btn-secondary btn-lg" style="float: right; margin-bottom: 40px; background-color: #6495ed;" value="Καταχώρηση"> <!--submit button ends--> </form> </div> </div> <!--submit form ends-->';
var image;

function generateHome() {
    document.getElementById('mainContainer').innerHTML = homePage;
    generateRooms();
}

function generateSubmitForm() {
    document.getElementById('mainContainer').innerHTML = submitPage;
}
function getFormInfo() {

    console.log(document.getElementById('surname').value);
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('mail').value);
    console.log(document.getElementById('transaction').value);
    console.log(document.getElementById('price').value);
    console.log(document.getElementById('visNum').value);
    console.log(document.getElementById('bedroomNum').value);
    console.log(document.getElementById('bedNum').value);
    console.log(document.getElementById('bathNum').value);
    console.log(document.getElementById('title').value);

    console.log("we got everything from the form");
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagePreview')
                .attr('src', e.target.result);
                image = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}