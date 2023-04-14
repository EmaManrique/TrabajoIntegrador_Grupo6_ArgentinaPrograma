
    const form= document.getElementById('formCotizacion'); {

  
        form.addEventListener("submit", function(event) { 
        event.preventDefault();

        let trasactionFormData= new FormData(form);
        let seleccionTabla= document.getElementById('tablaCotizar');
        let nuevafila= seleccionTabla.insertRow(-1);
        nuevafila.insertCell(0);
        
        nuevafila.insertCell(1);
    
    }
    };