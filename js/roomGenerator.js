var rooms = new Array();
rooms[0] = '<!--domatio pros enoikiasi mono--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/1.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4"> <h5> <a href="#" ' +
    ' class="text-dark">Urban Luxury studio, close to the sea</a></h5> <p class="small text-muted mb-0">6 Επισκέπτες • 3 Υπνοδωμάτια • 2 Μπάνια • Πισίνα</p> <div class="d-flex align-items-center justify-content-between rounded-pill ' +
    'bg-light px-3 py-2 mt-4"> <p class="small mb-0">140€/Διανυκτέρευση</p> <div class="badge badge-danger px-3 rounded-pill font-weight-normal">Ενοικίαση</div> </div> </div> </div> </div><!--telos domatiou pros enoikiasi mono-->';
rooms[1] = '<!--domatio pros antallagi mono--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/2.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4"> <h5> <a href="#"' +
    ' class="text-dark">Urban Cozy Studios</a></h5> <p class="small text-muted mb-0">4 Επισκέπτες • 2 Υπνοδωμάτια • 1 Μπάνιο • Wifi<div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">' +
    ' <p class="small mb-0"></p> <div class="badge badge-primary px-3 rounded-pill font-weight-normal">Ανταλλαγή</div> </div> </div> </div> </div><!--telos domatiou pros antallagi mono-->';
rooms[2] = '<!--domatio eite pros antallagi eite pros enoikiasi--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/3.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4">' +
    ' <h5> <a href="#" class="text-dark">Golden Studio near Acropolis</a></h5> <p class="small text-muted mb-0">2 Επισκέπτες • Στούντιο • 1 Κρεβάτι • 1 Μπάνιο</p> <div class="d-flex align-items-center justify-content-between rounded-pill ' +
    'bg-light px-3 py-2 mt-4"> <p class="small mb-0">90€/Διανυκτέρευση</p> <div class="badge badge-success px-3 rounded-pill font-weight-normal">Ανταλλαγή/Ενοικίαση</div> </div> </div> </div> </div><!--telos domatiou pros antallagi i pros enoikiasi-->';
rooms[3] = '<!--domatio pros antallagi mono--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/4.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4"> <h5> <a href="#" class="text-dark">' +
    'Petit Cozy Studio</a></h5> <p class="small text-muted mb-0">2 Επισκέπτες • Στούντιο • 1 Κρεβάτι • 1 Μπάνιο</p> <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4"> <p class="small mb-0"></p>' +
    ' <div class="badge badge-primary px-3 rounded-pill font-weight-normal">Ανταλλαγή</div> </div> </div> </div> </div><!--telos domatiou pros antallagi mono-->';
rooms[4] = '<!--domatio eite pros antallagi eite pros enoikiasi--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/5.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4"> <h5>' +
    ' <a href="#" class="text-dark">Central & Quiet at Acropolis</a></h5> <p class="small text-muted mb-0">5 Επισκέπτες • 2 Υπνοδωμάτια • 4 Κρεβατια • 1 Μπάνιο</p> <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 ' +
    'py-2 mt-4"> <p class="small mb-0">90€/Διανυκτέρευση</p> <div class="badge badge-success px-3 rounded-pill font-weight-normal">Ανταλλαγή/Ενοικίαση</div> </div> </div> </div> </div><!--telos domatiou pros antallagi i pros enoikiasi-->';
rooms[5] = '<!--domatio pros antallagi mono--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/6.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4"> <h5> <a href="#" ' +
    'class="text-dark">Artistic House near Acropolis</a></h5> <p class="small text-muted mb-0">2 Επισκέπτες • 1 Υπνοδωμάτιο • 1 Κρεβάτι • 1,5 Μπάνια</p> <div class="d-flex align-items-center justify-content-between rounded-pill bg-light ' +
    'px-3 py-2 mt-4"> <p class="small mb-0"></p> <div class="badge badge-primary px-3 rounded-pill font-weight-normal">Ανταλλαγή</div> </div> </div> </div> </div><!--telos domatiou pros antallagi mono-->';
rooms[6] = '<!--domatio eite pros antallagi eite pros enoikiasi--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/7.jpg" alt="" class="img-fluid card-img-top">' +
    ' <div class="p-4"> <h5> <a href="#" class="text-dark">Amazing view at the park</a></h5> <p class="small text-muted mb-0">4 Επισκέπτες • 2 Υπνοδωμάτια • 4 Κρεβάτια • 1 Μπάνιο</p> <div class="d-flex align-items-center justify-content-between' +
    ' rounded-pill bg-light px-3 py-2 mt-4"> <p class="small mb-0">90€/Διανυκτέρευση</p> <div class="badge badge-success px-3 rounded-pill font-weight-normal">Ανταλλαγή/Ενοικίαση</div> </div> </div> </div> </div><!--telos domatiou pros antallagi i pros enoikiasi-->';
rooms[7] = '<!--domatio pros antallagi mono--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/8.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4"> <h5> <a href="#" class="text-dark">' +
    'Keramikos Cosy Nest</a></h5> <p class="small text-muted mb-0">2 Επισκέπτες • 1 Υπνοδωμάτιο • 1 Κρεβάτι • 1 Μπάνιο</p> <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">' +
    ' <p class="small mb-0"></p> <div class="badge badge-primary px-3 rounded-pill font-weight-normal">Ανταλλαγή</div> </div> </div> </div> </div><!--telos domatiou pros antallagi mono-->';
rooms[8] = '<!--domatio pros enoikiasi mono--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/9.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4"> <h5> <a href="#" class="text-dark">' +
    'Student Room with Acropolis View</a></h5> <p class="small text-muted mb-0">1 Επισκέπτης • 1 Χώρος • 1 Κρεβάτι • 1 Μπάνιο</p> <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4"> <p class="small ' +
    'mb-0">50€/Διανυκτέρευση</p> <div class="badge badge-danger px-3 rounded-pill font-weight-normal">Ενοικίαση</div> </div> </div> </div> </div><!--telos domatiou pros enoikiasi mono-->';
rooms[9] = '<!--domatio eite pros antallagi eite pros enoikiasi--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/10.jpg" alt="" class="img-fluid card-img-top"> ' +
    '<div class="p-4"> <h5> <a href="#" class="text-dark">Apartment next to Museum</a></h5> <p class="small text-muted mb-0">2 Επισκέπτες • 1 Υπνοδωμάτιο • 1 Κρεβατια • 1 Μπάνιο</p> <div class="d-flex align-items-center justify-content-between rounded-pill ' +
    'bg-light px-3 py-2 mt-4"> <p class="small mb-0">90€/Διανυκτέρευση</p> <div class="badge badge-success px-3 rounded-pill font-weight-normal">Ανταλλαγή/Ενοικίαση</div> </div> </div> </div> </div><!--telos domatiou pros antallagi i pros enoikiasi-->';
rooms[10] = '<!--domatio eite pros antallagi eite pros enoikiasi--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/11.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4"> <h5> <a href="#" ' +
    'class="text-dark">In the heart of Athens</a></h5> <p class="small text-muted mb-0">4 Επισκέπτες • 2 Υπνοδωμάτια • 2 Κρεβάτια • 1 Μπάνιο</p> <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4"> <p class="' +
    'small mb-0">90€/Διανυκτέρευση</p> <div class="badge badge-success px-3 rounded-pill font-weight-normal">Ανταλλαγή/Ενοικίαση</div> </div> </div> </div> </div><!--telos domatiou pros antallagi i pros enoikiasi-->';
rooms[11] = '<!--domatio pros enoikiasi mono--><div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="./img/12.jpg" alt="" class="img-fluid card-img-top"> <div class="p-4"> <h5> <a href="#" class="text-dark">Perfect ' +
    'Placed City Apartment</a></h5> <p class="small text-muted mb-0">3 Επισκέπτες • 1 Υπνοδωμάτιο • 2 Κρεβάτια • 1 Μπάνιο</p> <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4"> <p class="small mb-0">120€' +
    '/Διανυκτέρευση</p> <div class="badge badge-danger px-3 rounded-pill font-weight-normal">Ενοικίαση</div> </div> </div> </div> </div><!--telos domatiou pros enoikiasi mono-->';


function generateRooms() {
    document.getElementById("roomSection").innerHTML = randomize(rooms);
    const images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        //adding pointer on mouse over of an image
        images[i].style.cursor = "pointer";
    }
}

//randomizing the way rooms are going to be displayed
//when page loads
function randomize(roomArray) {
    var currentIndex = roomArray.length,
        temporaryValue,
        randomIndex;
    var total = "";
    while (0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = roomArray[currentIndex];
        roomArray[currentIndex] = roomArray[randomIndex];
        roomArray[randomIndex] = temporaryValue;
    }
    for (var i = 0; i < roomArray.length; i++) {
        total += roomArray[i];
    }
    return total;
}

function createRoom() {
    var newRoom = "";
    if (document.getElementById("transaction").value === "Ανταλλαγή/Ενοικίαση") {
        newRoom +=
            '<div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="' +
            image +
            '" alt="" class="img-fluid card-img-top"> <div class="p-4"><h5> <a href="#" class="text-dark">' +
            document.getElementById("title").value +
            '</a></h5><p class="small text-muted mb-0">' +
            document.getElementById("visNum").value +
            " Επισκέπτες • " +
            document.getElementById("bedroomNum").value +
            " Υπνοδωμάτια • " +
            document.getElementById("bedNum").value +
            " Κρεβάτια • " +
            document.getElementById("bathNum").value +
            ' Μπάνια</p><div class="d-flex align-items-center ' +
            'justify-content-between rounded-pill bg-light px-3 py-2 mt-4"><p class="small mb-0">' +
            document.getElementById("price").value +
            '€/Διανυκτέρευση</p><div class="badge badge-success px-3 rounded-pill ' +
            'font-weight-normal">Ανταλλαγή/Ενοικίαση</div></div></div></div></div>';
    } else if (document.getElementById("transaction").value === "Ενοικίαση") {
        newRoom +=
            '<div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="' +
            image +
            '" alt="" class="img-fluid card-img-top"> <div class="p-4"><h5> <a href="#" class="text-dark">' +
            document.getElementById("title").value +
            '</a></h5><p class="small text-muted mb-0">' +
            document.getElementById("visNum").value +
            " Επισκέπτες • " +
            document.getElementById("bedroomNum").value +
            " Υπνοδωμάτια • " +
            document.getElementById("bedNum").value +
            " Κρεβάτια • " +
            document.getElementById("bathNum").value +
            ' Μπάνια</p><div class="d-flex align-items-center ' +
            'justify-content-between rounded-pill bg-light px-3 py-2 mt-4"><p class="small mb-0">' +
            document.getElementById("price").value +
            '€/Διανυκτέρευση</p><div class="badge badge-danger px-3 rounded-pill ' +
            'font-weight-normal">Ενοικίαση</div></div></div></div></div>';
    } else if (document.getElementById("transaction").value === "Ανταλλαγή") {
        newRoom +=
            '<div class="col-xl-3 col-lg-4 col-md-6 mb-4"> <div class="bg-white rounded shadow-sm"><img src="' +
            image +
            '" alt="" class="img-fluid card-img-top"> <div class="p-4"><h5> <a href="#" class="text-dark">' +
            document.getElementById("title").value +
            '</a></h5><p class="small text-muted mb-0">' +
            document.getElementById("visNum").value +
            " Επισκέπτες • " +
            document.getElementById("bedroomNum").value +
            " Υπνοδωμάτια • " +
            document.getElementById("bedNum").value +
            " Κρεβάτια • " +
            document.getElementById("bathNum").value +
            ' Μπάνια</p><div class="d-flex align-items-center ' +
            'justify-content-between rounded-pill bg-light px-3 py-2 mt-4"><p class="small mb-0">' +
            '</p><div class="badge badge-primary px-3 rounded-pill ' +
            'font-weight-normal">Ανταλλαγή</div></div></div></div></div>';
    }
    image = "";
    rooms[rooms.length] = newRoom;
    generateHome();
}
