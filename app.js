// !! FAIT EN ÉQUIPE AVEC SANDRINE !!

/*
# Quatre quarts Clicker

Réalisez un petit jeu nommé cookie clicker, le but étant de détecter les click sur le cookie et d'incrémenter le contenu de la div #count  avec le compte total !

Votre code ira dans le fichier `app.js`

Pour commencer, dans le dossier faites `npm install` pour récupèrer les dépendaneces.

N'oubliez pas de lancer `caddy` dans le dossier. 
*/

$(document).ready(function(){
    //votre code

     $("#cake").click(function(){
        var clik = 0;
        console.log(clik);
        $("#counter").text(parseInt($('.counter').text()) + clik++ );
        
    })
})

// MARCHE PAS ET PAS FINI ! 