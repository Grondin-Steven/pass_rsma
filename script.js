function remplir() {
    var compagnie = document.getElementById("compagnie").value
    var statu_ = document.getElementById("statu_").value;
    var nom_ = document.getElementById("nom_").value;
    var prenom_ = document.getElementById("prenom_").value;
    var photo_ = document.getElementById("photo_").value;
    var matricule_ = document.getElementById("matricule_").value
    var info_com = document.getElementById("info_com").innerHTML = compagnie;
    var statut = document.getElementById("statut").innerHTML = statu_
    var nom = document.getElementById("nom").innerHTML = nom_
    var prenom = document.getElementById("prenom").innerHTML = prenom_
    var photo = document.getElementById("photo").src=photo_;
    var matricule = document.getElementById("matricule").innerHTML = matricule_
}