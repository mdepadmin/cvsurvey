//
// Parcel Photos (5)
//

parcelPhotoNORTH = [];
parcelPhotoSOUTH = [];
parcelPhotoEAST = [];
parcelPhotoWEST = [];
parcelPhotoCENTROID = [];

// NORTH
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('photoparcelN').onchange = function(){
        var files = document.getElementById('photoparcelN').files;
        for(var i = 0; i < files.length; i++) {
            resizeParcelN(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeParcelN(file) {
document.getElementById("photoNThumb").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");

parcelPhotoNORTH =[];        
parcelPhotoNORTH.push(dataURL); 

        var parcelNdiv = document.createElement('div');
        parcelNdiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoNThumb").innerHTML = " ";
        document.getElementById("photoNThumb").appendChild(parcelNdiv);
      }
    }
   reader.readAsDataURL(file);
  }

// SOUTH  
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('photoparcelS').onchange = function(){
        var files = document.getElementById('photoparcelS').files;
        for(var i = 0; i < files.length; i++) {
            resizeParcelS(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeParcelS(file) {
document.getElementById("photoSThumb").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
parcelPhotoSOUTH =[];           
parcelPhotoSOUTH.push(dataURL); 

        var parcelSdiv = document.createElement('div');
        parcelSdiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoSThumb").innerHTML = " ";
        document.getElementById('photoSThumb').appendChild(parcelSdiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// EAST
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('photoparcelE').onchange = function(){
        var files = document.getElementById('photoparcelE').files;
        for(var i = 0; i < files.length; i++) {
            resizeParcelE(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeParcelE(file) {
document.getElementById("photoEThumb").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
parcelPhotoEAST =[];           
parcelPhotoEAST.push(dataURL); 

        var parcelEdiv = document.createElement('div');
        parcelEdiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoEThumb").innerHTML = " ";
        document.getElementById('photoEThumb').appendChild(parcelEdiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// WEST
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('photoparcelW').onchange = function(){
        var files = document.getElementById('photoparcelW').files;
        for(var i = 0; i < files.length; i++) {
            resizeParcelW(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeParcelW(file) {
document.getElementById("photoWThumb").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
parcelPhotoWEST =[];           
parcelPhotoWEST.push(dataURL); 

        var parcelWdiv = document.createElement('div');
        parcelWdiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoWThumb").innerHTML = " ";
        document.getElementById('photoWThumb').appendChild(parcelWdiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// CENTROID
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('photoparcelC').onchange = function(){
        var files = document.getElementById('photoparcelC').files;
        for(var i = 0; i < files.length; i++) {
            resizeParcelC(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeParcelC(file) {
document.getElementById("photoCThumb").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
parcelPhotoCENTROID =[];           
parcelPhotoCENTROID.push(dataURL); 

        var parcelCdiv = document.createElement('div');
        parcelCdiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoCThumb").innerHTML = " ";
        document.getElementById('photoCThumb').appendChild(parcelCdiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
//
// DISTURBANCE
//
disturbancePhotoDUMPING = [];
disturbancePhotoEROSION = [];
disturbancePhotoHAZMAT = [];
disturbancePhotoSOILSTAINING = [];

// Dumping

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('dumpingphoto').onchange = function(){
        var files = document.getElementById('dumpingphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizedumpingphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizedumpingphoto(file) {
document.getElementById("photoDumpingOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
disturbancePhotoDUMPING =[];           
disturbancePhotoDUMPING.push(dataURL); 

        var dumpingPhotoDiv = document.createElement('div');
        dumpingPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoDumpingOutput").innerHTML = " ";
        document.getElementById('photoDumpingOutput').appendChild(dumpingPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// Erosion

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('erosionphoto').onchange = function(){
        var files = document.getElementById('erosionphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeerosionphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeerosionphoto(file) {
document.getElementById("photoErosionOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
disturbancePhotoEROSION =[];           
disturbancePhotoEROSION.push(dataURL); 

        var erosionPhotoDiv = document.createElement('div');
        erosionPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoErosionOutput").innerHTML = " ";
        document.getElementById('photoErosionOutput').appendChild(erosionPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// Hazmat

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('hazmatphoto').onchange = function(){
        var files = document.getElementById('hazmatphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizehazmatphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizehazmatphoto(file) {
document.getElementById("photoHazmatOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
disturbancePhotoHAZMAT =[];           
disturbancePhotoHAZMAT.push(dataURL); 

        var hazmatPhotoDiv = document.createElement('div');
        hazmatPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoHazmatOutput").innerHTML = " ";
        document.getElementById('photoHazmatOutput').appendChild(hazmatPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// Soil Staining

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('soilstainingphoto').onchange = function(){
        var files = document.getElementById('soilstainingphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizesoilstainingphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizesoilstainingphoto(file) {
document.getElementById("photoSoilStainingOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
disturbancePhotoSOILSTAINING =[];           
disturbancePhotoSOILSTAINING.push(dataURL); 

        var soilstainingPhotoDiv = document.createElement('div');
        soilstainingPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoSoilStainingOutput").innerHTML = " ";
        document.getElementById('photoSoilStainingOutput').appendChild(soilstainingPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  

//
// STRUCTURES
//

photoFOUNDATION = [];
photoWELL = [];
photoMINE = [];
photoSHAFT = [];
photoPIPELINE = [];
photoTRANSMISSION = [];
photoFENCING = [];
photoWATERTANK = [];
photoUNDERGROUNDSTORAGE = [];



// Foundations

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('sfoundationphoto').onchange = function(){
        var files = document.getElementById('sfoundationphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizefoundationphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizefoundationphoto(file) {
document.getElementById("photoFoundationOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoFOUNDATION =[];           
photoFOUNDATION.push(dataURL); 

        var sfoundationPhotoDiv = document.createElement('div');
        sfoundationPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoFoundationOutput").innerHTML = " ";
        document.getElementById('photoFoundationOutput').appendChild(sfoundationPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// Well

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('swellphoto').onchange = function(){
        var files = document.getElementById('swellphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizewellphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizewellphoto(file) {
document.getElementById("photoWellOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoWELL =[];           
photoWELL.push(dataURL); 

        var swellPhotoDiv = document.createElement('div');
        swellPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoWellOutput").innerHTML = " ";
        document.getElementById('photoWellOutput').appendChild(swellPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// Mine

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('sminephoto').onchange = function(){
        var files = document.getElementById('sminephoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeminephoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeminephoto(file) {
document.getElementById("photoMineOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoMINE =[];           
photoMINE.push(dataURL); 

        var sminePhotoDiv = document.createElement('div');
        sminePhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoMineOutput").innerHTML = " ";
        document.getElementById('photoMineOutput').appendChild(sminePhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// Shaft

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('sshaftphoto').onchange = function(){
        var files = document.getElementById('sshaftphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeshaftphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeshaftphoto(file) {
document.getElementById("photoShaftOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoSHAFT =[];           
photoSHAFT.push(dataURL); 

        var sshaftPhotoDiv = document.createElement('div');
        sshaftPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoShaftOutput").innerHTML = " ";
        document.getElementById('photoShaftOutput').appendChild(sshaftPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// Pipeline

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('spipelinephoto').onchange = function(){
        var files = document.getElementById('spipelinephoto').files;
        for(var i = 0; i < files.length; i++) {
            resizepipelinephoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizepipelinephoto(file) {
document.getElementById("photoPipelineOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoPIPELINE =[];           
photoPIPELINE.push(dataURL); 

        var spipelinePhotoDiv = document.createElement('div');
        spipelinePhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoPipelineOutput").innerHTML = " ";
        document.getElementById('photoPipelineOutput').appendChild(spipelinePhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  

// Transmission

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('stransmissionphoto').onchange = function(){
        var files = document.getElementById('stransmissionphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizetransmissionphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizetransmissionphoto(file) {
document.getElementById("photoTransmissionOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoTRANSMISSION =[];           
photoTRANSMISSION.push(dataURL); 

        var stransmissionPhotoDiv = document.createElement('div');
        stransmissionPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoTransmissionOutput").innerHTML = " ";
        document.getElementById('photoTransmissionOutput').appendChild(stransmissionPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// Fencing

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('sfencingphoto').onchange = function(){
        var files = document.getElementById('sfencingphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizefencingphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizefencingphoto(file) {
document.getElementById("photoFencingOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoFENCING =[];           
photoFENCING.push(dataURL); 

        var sfencingPhotoDiv = document.createElement('div');
        sfencingPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoFencingOutput").innerHTML = " ";
        document.getElementById('photoFencingOutput').appendChild(sfencingPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
// Watertank

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('swatertankphoto').onchange = function(){
        var files = document.getElementById('swatertankphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizewatertankphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizewatertankphoto(file) {
document.getElementById("photoWatertankOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoWATERTANK =[];           
photoWATERTANK.push(dataURL); 

        var swatertankPhotoDiv = document.createElement('div');
        swatertankPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoWatertankOutput").innerHTML = " ";
        document.getElementById('photoWatertankOutput').appendChild(swatertankPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
  // Undergroundstorage

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('sundergroundstoragephoto').onchange = function(){
        var files = document.getElementById('sundergroundstoragephoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeundergroundstoragephoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeundergroundstoragephoto(file) {
document.getElementById("photoUndergroundstorageOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoUNDERGROUNDSTORAGE =[];           
photoUNDERGROUNDSTORAGE.push(dataURL); 

        var sundergroundstoragePhotoDiv = document.createElement('div');
        sundergroundstoragePhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoUndergroundstorageOutput").innerHTML = " ";
        document.getElementById('photoUndergroundstorageOutput').appendChild(sundergroundstoragePhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// ROADS
//

photoROADS = [];

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('roadsphoto').onchange = function(){
        var files = document.getElementById('roadsphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeroadsphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeroadsphoto(file) {
document.getElementById("photoRoadsOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoROADS =[];           
photoROADS.push(dataURL); 

        var roadsPhotoDiv = document.createElement('div');
        roadsPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoRoadsOutput").innerHTML = " ";
        document.getElementById('photoRoadsOutput').appendChild(roadsPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// TRAILS
//

photoTRAILS = [];

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('trailsphoto').onchange = function(){
        var files = document.getElementById('trailsphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizetrailsphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizetrailsphoto(file) {
document.getElementById("photoTrailsOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoTRAILS =[];           
photoTRAILS.push(dataURL); 

        var trailsPhotoDiv = document.createElement('div');
        trailsPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoTrailsOutput").innerHTML = " ";
        document.getElementById('photoTrailsOutput').appendChild(trailsPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// OHV
//

photoOHV = [];

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('ohvphoto').onchange = function(){
        var files = document.getElementById('ohvphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeohvphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeohvphoto(file) {
document.getElementById("photoOhvOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoOHV =[];           
photoOHV.push(dataURL); 

        var ohvPhotoDiv = document.createElement('div');
        ohvPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoOhvOutput").innerHTML = " ";
        document.getElementById('photoOhvOutput').appendChild(ohvPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// HOMELESS
//

photoHOMELESS = [];

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('homelessphoto').onchange = function(){
        var files = document.getElementById('homelessphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizehomelessphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizehomelessphoto(file) {
document.getElementById("photoHomelessOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";	
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoHOMELESS =[];           
photoHOMELESS.push(dataURL); 

        var homelessPhotoDiv = document.createElement('div');
        homelessPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoHomelessOutput").innerHTML = " ";
        document.getElementById('photoHomelessOutput').appendChild(homelessPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// DOGS
//

photoDOGS = [];

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('dogsphoto').onchange = function(){
        var files = document.getElementById('dogsphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizedogsphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizedogsphoto(file) {
document.getElementById("photoDogsOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoDOGS =[];           
photoDOGS.push(dataURL); 

        var dogsPhotoDiv = document.createElement('div');
        dogsPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoDogsOutput").innerHTML = " ";
        document.getElementById('photoDogsOutput').appendChild(dogsPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }


//
// RAVENS
//

photoRAVENS = [];

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('ravensphoto').onchange = function(){
        var files = document.getElementById('ravensphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeravensphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeravensphoto(file) {
document.getElementById("photoRavensOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoRAVENS =[];           
photoRAVENS.push(dataURL); 

        var ravensPhotoDiv = document.createElement('div');
        ravensPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoRavensOutput").innerHTML = " ";
        document.getElementById('photoRavensOutput').appendChild(ravensPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// OTHER BIRDS
//

photoYUMA = [];
photoCALIRAIL = [];
photoBURROWL = [];
photoSWFLYCATCHER = [];
photoCRISSAL = [];
photoLECONTE = [];
photoLEASTBELL = [];
photoGREYVIREO = [];
photoYELLOWWARBLER = [];
photoYELLOWBREASTEDCHAT = [];
photoSUMMERTANAGER = [];

// Yuma

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('yumaphoto').onchange = function(){
        var files = document.getElementById('yumaphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeyumaphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeyumaphoto(file) {
document.getElementById("photoYumaOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoYUMA =[];           
photoYUMA.push(dataURL); 

        var yumaPhotoDiv = document.createElement('div');
        yumaPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoYumaOutput").innerHTML = " ";
        document.getElementById('photoYumaOutput').appendChild(yumaPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }


// California Black Rail

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('calirailphoto').onchange = function(){
        var files = document.getElementById('calirailphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizecalirailphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizecalirailphoto(file) {
document.getElementById("photoCalirailOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoCALIRAIL =[];           
photoCALIRAIL.push(dataURL); 

        var calirailPhotoDiv = document.createElement('div');
        calirailPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoCalirailOutput").innerHTML = " ";
        document.getElementById('photoCalirailOutput').appendChild(calirailPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }


// Burrowing Owl

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('burrowlphoto').onchange = function(){
        var files = document.getElementById('burrowlphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeburrowlphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeburrowlphoto(file) {
document.getElementById("photoBurrowlOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoBURROWL =[];           
photoBURROWL.push(dataURL); 

        var burrowlPhotoDiv = document.createElement('div');
        burrowlPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoBurrowlOutput").innerHTML = " ";
        document.getElementById('photoBurrowlOutput').appendChild(burrowlPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }


// SW Flycatcher

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('swflycatcherphoto').onchange = function(){
        var files = document.getElementById('swflycatcherphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeswflycatcherphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeswflycatcherphoto(file) {
document.getElementById("photoSwflycatcherOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoSWFLYCATCHER =[];           
photoSWFLYCATCHER.push(dataURL); 

        var swflycatcherPhotoDiv = document.createElement('div');
        swflycatcherPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoSwflycatcherOutput").innerHTML = " ";
        document.getElementById('photoSwflycatcherOutput').appendChild(swflycatcherPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Crissal Thrasher

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('crissalphoto').onchange = function(){
        var files = document.getElementById('crissalphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizecrissalphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizecrissalphoto(file) {
document.getElementById("photoCrissalOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoCRISSAL =[];           
photoCRISSAL.push(dataURL); 

        var crissalPhotoDiv = document.createElement('div');
        crissalPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoCrissalOutput").innerHTML = " ";
        document.getElementById('photoCrissalOutput').appendChild(crissalPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// LeConte's Thrasher

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('lecontephoto').onchange = function(){
        var files = document.getElementById('lecontephoto').files;
        for(var i = 0; i < files.length; i++) {
            resizelecontephoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizelecontephoto(file) {
document.getElementById("photoLeconteOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoLECONTE =[];           
photoLECONTE.push(dataURL); 

        var lecontePhotoDiv = document.createElement('div');
        lecontePhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoLeconteOutput").innerHTML = " ";
        document.getElementById('photoLeconteOutput').appendChild(lecontePhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
  // Least Bell's Vireo

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('leastbellphoto').onchange = function(){
        var files = document.getElementById('leastbellphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeleastbellphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeleastbellphoto(file) {
document.getElementById("photoLeastbellOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoLEASTBELL =[];           
photoLEASTBELL.push(dataURL); 

        var leastbellPhotoDiv = document.createElement('div');
        leastbellPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoLeastbellOutput").innerHTML = " ";
        document.getElementById('photoLeastbellOutput').appendChild(leastbellPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Grey Vireo
  
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('greyvireophoto').onchange = function(){
        var files = document.getElementById('greyvireophoto').files;
        for(var i = 0; i < files.length; i++) {
            resizegreyvireophoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizegreyvireophoto(file) {
document.getElementById("photoGreyvireoOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoGREYVIREO =[];           
photoGREYVIREO.push(dataURL); 

        var greyvireoPhotoDiv = document.createElement('div');
        greyvireoPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoGreyvireoOutput").innerHTML = " ";
        document.getElementById('photoGreyvireoOutput').appendChild(greyvireoPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Yellow Warbler
  
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('yellowwarblerphoto').onchange = function(){
        var files = document.getElementById('yellowwarblerphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeyellowwarblerphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeyellowwarblerphoto(file) {
document.getElementById("photoYellowwarblerOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoYELLOWWARBLER =[];           
photoYELLOWWARBLER.push(dataURL); 

        var yellowwarblerPhotoDiv = document.createElement('div');
        yellowwarblerPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoYellowwarblerOutput").innerHTML = " ";
        document.getElementById('photoYellowwarblerOutput').appendChild(yellowwarblerPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Yellow Breasted Chat
  
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('yellowbreastedchatphoto').onchange = function(){
        var files = document.getElementById('yellowbreastedchatphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeyellowbreastedchatphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeyellowbreastedchatphoto(file) {
document.getElementById("photoYellowbreastedchatOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoYELLOWBREASTEDCHAT =[];           
photoYELLOWBREASTEDCHAT.push(dataURL); 

        var yellowbreastedchatPhotoDiv = document.createElement('div');
        yellowbreastedchatPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoYellowbreastedchatOutput").innerHTML = " ";
        document.getElementById('photoYellowbreastedchatOutput').appendChild(yellowbreastedchatPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Summer Tanager
  
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('summertanagerphoto').onchange = function(){
        var files = document.getElementById('summertanagerphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizesummertanagerphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizesummertanagerphoto(file) {
document.getElementById("photoSummertanagerOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoSUMMERTANAGER =[];           
photoSUMMERTANAGER.push(dataURL); 

        var summertanagerPhotoDiv = document.createElement('div');
        summertanagerPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoSummertanagerOutput").innerHTML = " ";
        document.getElementById('photoSummertanagerOutput').appendChild(summertanagerPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }
  
//
// INSECTS
// 
 
photoSANDTREADERCRICKET = []; 
photoJERUSALEMCRICKET = [];
  
// Sand Treader Cricket
  
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('sandtreadercricketphoto').onchange = function(){
        var files = document.getElementById('sandtreadercricketphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizesandtreadercricketphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizesandtreadercricketphoto(file) {
document.getElementById("photoSandtreadercricketOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoSANDTREADERCRICKET =[];           
photoSANDTREADERCRICKET.push(dataURL); 

        var sandtreadercricketPhotoDiv = document.createElement('div');
        sandtreadercricketPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoSandtreadercricketOutput").innerHTML = " ";
        document.getElementById('photoSandtreadercricketOutput').appendChild(sandtreadercricketPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Jerusalem Cricket
  
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('jerusalemcricketphoto').onchange = function(){
        var files = document.getElementById('jerusalemcricketphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizejerusalemcricketphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizejerusalemcricketphoto(file) {
document.getElementById("photoJerusalemcricketOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoJERUSALEMCRICKET =[];           
photoJERUSALEMCRICKET.push(dataURL); 

        var jerusalemcricketPhotoDiv = document.createElement('div');
        jerusalemcricketPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoJerusalemcricketOutput").innerHTML = " ";
        document.getElementById('photoJerusalemcricketOutput').appendChild(jerusalemcricketPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// FISH
//

photoPUPFISH =[];  

// Desert Pupfish
  
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('pupfishphoto').onchange = function(){
        var files = document.getElementById('pupfishphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizepupfishphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizepupfishphoto(file) {
document.getElementById("photoPupfishOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoPUPFISH =[];           
photoPUPFISH.push(dataURL); 

        var pupfishPhotoDiv = document.createElement('div');
        pupfishPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoPupfishOutput").innerHTML = " ";
        document.getElementById('photoPupfishOutput').appendChild(pupfishPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// REPTILES
//

photoTORTOISE =[];
photoFTHLIZARD = [];
photoCVFTLIZARD = [];  

// Desert Tortoise
  
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('tortoisephoto').onchange = function(){
        var files = document.getElementById('tortoisephoto').files;
        for(var i = 0; i < files.length; i++) {
            resizetortoisephoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizetortoisephoto(file) {
document.getElementById("photoTortoiseOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoTORTOISE =[];           
photoTORTOISE.push(dataURL); 

        var tortoisePhotoDiv = document.createElement('div');
        tortoisePhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoTortoiseOutput").innerHTML = " ";
        document.getElementById('photoTortoiseOutput').appendChild(tortoisePhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// FTH Lizard

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('fthlizardphoto').onchange = function(){
        var files = document.getElementById('fthlizardphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizefthlizardphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizefthlizardphoto(file) {
document.getElementById("photoFthlizardOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoFTHLIZARD =[];           
photoFTHLIZARD.push(dataURL); 

        var fthlizardPhotoDiv = document.createElement('div');
        fthlizardPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoFthlizardOutput").innerHTML = " ";
        document.getElementById('photoFthlizardOutput').appendChild(fthlizardPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// CVFT Lizard

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('cvftlizardphoto').onchange = function(){
        var files = document.getElementById('cvftlizardphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizecvftlizardphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizecvftlizardphoto(file) {
document.getElementById("photoCvftlizardOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoCVFTLIZARD =[];           
photoCVFTLIZARD.push(dataURL); 

        var cvftlizardPhotoDiv = document.createElement('div');
        cvftlizardPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoCvftlizardOutput").innerHTML = " ";
        document.getElementById('photoCvftlizardOutput').appendChild(cvftlizardPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// BURROWS
//

photoBURROWS = [];

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('burrowsphoto').onchange = function(){
        var files = document.getElementById('burrowsphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeburrowsphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeburrowsphoto(file) {
document.getElementById("photoBurrowsOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoBURROWS =[];           
photoBURROWS.push(dataURL); 

        var burrowsPhotoDiv = document.createElement('div');
        burrowsPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoBurrowsOutput").innerHTML = " ";
        document.getElementById('photoBurrowsOutput').appendChild(burrowsPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }


//
// OTHER MAMMALS
//

photoSOUTHERNYELLOWBAT = [];
photoRTGSQUIRREL = [];
photoPSPRINGSPMOUSE = [];
photoPBIGHORNSHEEP = [];
photoCOWBIRDS = [];


// Southern Yellow Bat



if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('southernyellowbatphoto').onchange = function(){
        var files = document.getElementById('southernyellowbatphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizesouthernyellowbatphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizesouthernyellowbatphoto(file) {
document.getElementById("photoSouthernyellowbatOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoSOUTHERNYELLOWBAT =[];           
photoSOUTHERNYELLOWBAT.push(dataURL); 

        var southernyellowbatPhotoDiv = document.createElement('div');
        southernyellowbatPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoSouthernyellowbatOutput").innerHTML = " ";
        document.getElementById('photoSouthernyellowbatOutput').appendChild(southernyellowbatPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }


// Round-tailed Ground Squirrel

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('rtgsquirrelphoto').onchange = function(){
        var files = document.getElementById('rtgsquirrelphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizertgsquirrelphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizertgsquirrelphoto(file) {
document.getElementById("photoRtgsquirrelOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoRTGSQUIRREL =[];           
photoRTGSQUIRREL.push(dataURL); 

        var rtgsquirrelPhotoDiv = document.createElement('div');
        rtgsquirrelPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoRtgsquirrelOutput").innerHTML = " ";
        document.getElementById('photoRtgsquirrelOutput').appendChild(rtgsquirrelPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Palm Springs Pocket Mouse

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('pspringspmousephoto').onchange = function(){
        var files = document.getElementById('pspringspmousephoto').files;
        for(var i = 0; i < files.length; i++) {
            resizepspringspmousephoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizepspringspmousephoto(file) {
document.getElementById("photoPspringspmouseOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoPSPRINGSPMOUSE =[];           
photoPSPRINGSPMOUSE.push(dataURL); 

        var pspringspmousePhotoDiv = document.createElement('div');
        pspringspmousePhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoPspringspmouseOutput").innerHTML = " ";
        document.getElementById('photoPspringspmouseOutput').appendChild(pspringspmousePhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Peninsular Bighorn Sheep

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('pbighornsheepphoto').onchange = function(){
        var files = document.getElementById('pbighornsheepphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizepbighornsheepphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizepbighornsheepphoto(file) {
document.getElementById("photoPbighornsheepOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoPBIGHORNSHEEP =[];           
photoPBIGHORNSHEEP.push(dataURL); 

        var pbighornsheepPhotoDiv = document.createElement('div');
        pbighornsheepPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoPbighornsheepOutput").innerHTML = " ";
        document.getElementById('photoPbighornsheepOutput').appendChild(pbighornsheepPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Cowbirds

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('cowbirdsphoto').onchange = function(){
        var files = document.getElementById('cowbirdsphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizecowbirdsphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizecowbirdsphoto(file) {
document.getElementById("photoCowbirdsOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";		
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoCOWBIRDS =[];           
photoCOWBIRDS.push(dataURL); 

        var cowbirdsPhotoDiv = document.createElement('div');
        cowbirdsPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoCowbirdsOutput").innerHTML = " ";
        document.getElementById('photoCowbirdsOutput').appendChild(cowbirdsPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// PLANTS
//

photoMECCAASTER = [];
photoOROCOPIASAGE = [];
photoTRIBBEDMILKVETCH = [];
photoCVMILKVETCH = [];
photoLSBMLINANTHUS = [];


// Mecca Aster

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('meccaasterphoto').onchange = function(){
        var files = document.getElementById('meccaasterphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizemeccaasterphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizemeccaasterphoto(file) {
document.getElementById("photoMeccaasterOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoMECCAASTER =[];           
photoMECCAASTER.push(dataURL); 

        var meccaasterPhotoDiv = document.createElement('div');
        meccaasterPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoMeccaasterOutput").innerHTML = " ";
        document.getElementById('photoMeccaasterOutput').appendChild(meccaasterPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Orocopia Sage

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('orocopiasagephoto').onchange = function(){
        var files = document.getElementById('orocopiasagephoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeorocopiasagephoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeorocopiasagephoto(file) {
document.getElementById("photoOrocopiasageOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoOROCOPIASAGE =[];           
photoOROCOPIASAGE.push(dataURL); 

        var orocopiasagePhotoDiv = document.createElement('div');
        orocopiasagePhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoOrocopiasageOutput").innerHTML = " ";
        document.getElementById('photoOrocopiasageOutput').appendChild(orocopiasagePhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Triple-ribbed Milkvetch

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('tribbedmilkvetchphoto').onchange = function(){
        var files = document.getElementById('tribbedmilkvetchphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizetribbedmilkvetchphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizetribbedmilkvetchphoto(file) {
document.getElementById("photoTribbedmilkvetchOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoTRIBBEDMILKVETCH = [];         
photoTRIBBEDMILKVETCH.push(dataURL); 

        var tribbedmilkvetchPhotoDiv = document.createElement('div');
        tribbedmilkvetchPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoTribbedmilkvetchOutput").innerHTML = " ";
        document.getElementById('photoTribbedmilkvetchOutput').appendChild(tribbedmilkvetchPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// CV Milkvetch

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('cvmilkvetchphoto').onchange = function(){
        var files = document.getElementById('cvmilkvetchphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizecvmilkvetchphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizecvmilkvetchphoto(file) {
document.getElementById("photoCvmilkvetchOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoCVMILKVETCH = [];         
photoCVMILKVETCH.push(dataURL); 

        var cvmilkvetchPhotoDiv = document.createElement('div');
        cvmilkvetchPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoCvmilkvetchOutput").innerHTML = " ";
        document.getElementById('photoCvmilkvetchOutput').appendChild(cvmilkvetchPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Little San Bernardio Mountains Linanthus

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('lsbmlinanthusphoto').onchange = function(){
        var files = document.getElementById('lsbmlinanthusphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizelsbmlinanthusphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizelsbmlinanthusphoto(file) {
document.getElementById("photoLsbmlinanthusOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoLSBMLINANTHUS = [];
photoLSBMLINANTHUS.push(dataURL); 

        var lsbmlinanthusPhotoDiv = document.createElement('div');
        lsbmlinanthusPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoLsbmlinanthusOutput").innerHTML = " ";
        document.getElementById('photoLsbmlinanthusOutput').appendChild(lsbmlinanthusPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// INVASIVE SPECIES
//

photoSAHARAMUSTARD = [];
photoSCHISMUSGRASS = [];
photoTAMARIXAPHYLLA = [];
photoTAMARIXRAMOSSISIMA = [];
photoFOUNTAINGRASS = [];
photoBUFFLEGRASS = [];
photoARUNDO = [];


// Sahara Mustard

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('saharamustardphoto').onchange = function(){
        var files = document.getElementById('saharamustardphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizesaharamustardphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizesaharamustardphoto(file) {
document.getElementById("photoSaharamustardOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoSAHARAMUSTARD = [];
photoSAHARAMUSTARD.push(dataURL); 

        var saharamustardPhotoDiv = document.createElement('div');
        saharamustardPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoSaharamustardOutput").innerHTML = " ";
        document.getElementById('photoSaharamustardOutput').appendChild(saharamustardPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Schismus Grass

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('schismusgrassphoto').onchange = function(){
        var files = document.getElementById('schismusgrassphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizeschismusgrassphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizeschismusgrassphoto(file) {
document.getElementById("photoSchismusgrassOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoSCHISMUSGRASS= [];
photoSCHISMUSGRASS.push(dataURL); 

        var schismusgrassPhotoDiv = document.createElement('div');
        schismusgrassPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoSchismusgrassOutput").innerHTML = " ";
        document.getElementById('photoSchismusgrassOutput').appendChild(schismusgrassPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Tamarix Aphylla

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('tamarixaphyllaphoto').onchange = function(){
        var files = document.getElementById('tamarixaphyllaphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizetamarixaphyllaphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizetamarixaphyllaphoto(file) {
document.getElementById("photoTamarixaphyllaOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoTAMARIXAPHYLLA= [];
photoTAMARIXAPHYLLA.push(dataURL); 

        var tamarixaphyllaPhotoDiv = document.createElement('div');
        tamarixaphyllaPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoTamarixaphyllaOutput").innerHTML = " ";
        document.getElementById('photoTamarixaphyllaOutput').appendChild(tamarixaphyllaPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Tamarix Ramossisima

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('tamarixramossisimaphoto').onchange = function(){
        var files = document.getElementById('tamarixramossisimaphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizetamarixramossisimaphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizetamarixramossisimaphoto(file) {
document.getElementById("photoTamarixramossisimaOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoTAMARIXRAMOSSISIMA= [];
photoTAMARIXRAMOSSISIMA.push(dataURL); 

        var tamarixramossisimaPhotoDiv = document.createElement('div');
        tamarixramossisimaPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoTamarixramossisimaOutput").innerHTML = " ";
        document.getElementById('photoTamarixramossisimaOutput').appendChild(tamarixramossisimaPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Fountain Grass

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('fountaingrassphoto').onchange = function(){
        var files = document.getElementById('fountaingrassphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizefountaingrassphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizefountaingrassphoto(file) {
document.getElementById("photoFountaingrassOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoFOUNTAINGRASS= [];
photoFOUNTAINGRASS.push(dataURL); 

        var fountaingrassPhotoDiv = document.createElement('div');
        fountaingrassPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoFountaingrassOutput").innerHTML = " ";
        document.getElementById('photoFountaingrassOutput').appendChild(fountaingrassPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Bufflegrass

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('bufflegrassphoto').onchange = function(){
        var files = document.getElementById('bufflegrassphoto').files;
        for(var i = 0; i < files.length; i++) {
            resizebufflegrassphoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizebufflegrassphoto(file) {
document.getElementById("photoBufflegrassOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoBUFFLEGRASS= [];
photoBUFFLEGRASS.push(dataURL); 

        var bufflegrassPhotoDiv = document.createElement('div');
        bufflegrassPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoBufflegrassOutput").innerHTML = " ";
        document.getElementById('photoBufflegrassOutput').appendChild(bufflegrassPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

// Arundo

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('arundophoto').onchange = function(){
        var files = document.getElementById('arundophoto').files;
        for(var i = 0; i < files.length; i++) {
            resizearundophoto(files[i]);
        }
    };
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function resizearundophoto(file) {
document.getElementById("photoArundoOutput").innerHTML = "<span style='color:#FF0000'><b>WORKING...</b></span>";
var reader = new FileReader();
    reader.onloadend = function() {
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
 
        var MAX_WIDTH = 800;
        var MAX_HEIGHT = 600;
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
 
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = canvas.toDataURL("image/jpeg");
        
photoARUNDO= [];
photoARUNDO.push(dataURL); 

        var arundoPhotoDiv = document.createElement('div');
        arundoPhotoDiv.innerHTML = '<img style="width: 90px;" src="' + tempImg.src + '" />';
        document.getElementById("photoArundoOutput").innerHTML = " ";
        document.getElementById('photoArundoOutput').appendChild(arundoPhotoDiv);
      }
    }
   reader.readAsDataURL(file);
  }

//
// 
//


$(function() {
    $('#disturbance').change(function() {
      var selection;
      selection = $('#disturbance').val();
      switch (selection) {
        case "1":
          $('#disturbancetype').show();
          break;
        case "0":
          $('#disturbancetype').hide();
          $('#dumpingphotodiv').hide();
          $("#dumpingphoto").val('');
          document.getElementById("ddumping").value = "0";
          document.getElementById("ddumpingtype").value = "select";
          disturbancePhotoDUMPING = [];
          $("#photoDumpingOutput").empty(); 
          $('#erosionphotodiv').hide();
          $("#erosionphoto").val('');
          document.getElementById("dsoilerosion").value = "0";
          disturbancePhotoEROSION = [];
          $("#photoErosionOutput").empty();  
          $('#hazmatphotodiv').hide();
          $("#hazmatphoto").val('');
          document.getElementById("dhazmat").value = "0";
          disturbancePhotoHAZMAT = [];
          $("#photoHazmatOutput").empty();    
          $('#stainingphotodiv').hide();
          $("#soilstainingphoto").val('');
          document.getElementById("dsoilstaining").value = "0";
          document.getElementById("dsoilstainingtype").value = "select";
          disturbancePhotoSOILSTAINING = [];
          $("#photoSoilStainingOutput").empty();            
          break;
      }
    });
});

$(function() {
    $('#ddumping').change(function() {
      var selection;
      selection = $('#ddumping').val();
      switch (selection) {
        case "1":
          $('#dumpingphotodiv').show();
          break;
        case "0":
          $('#dumpingphotodiv').hide();
          $("#dumpingphoto").val('');
          document.getElementById("ddumpingtype").value = "select";
          disturbancePhotoDUMPING = [];
          $("#photoDumpingOutput").empty(); 
          break;
      }
    });
});

$(function() {
    $('#dsoilerosion').change(function() {
      var selection;
      selection = $('#dsoilerosion').val();
      switch (selection) {
        case "1":
          $('#erosionphotodiv').show();
          break;
        case "0":
          $('#erosionphotodiv').hide();
          $("#erosionphoto").val('');
          disturbancePhotoEROSION = [];
          $("#photoErosionOutput").empty();           
          break;
      }
    });
});

$(function() {
    $('#dhazmat').change(function() {
      var selection;
      selection = $('#dhazmat').val();
      switch (selection) {
        case "1":
          $('#hazmatphotodiv').show();
          break;
        case "0":
          $('#hazmatphotodiv').hide();
          $("#hazmatphoto").val('');
          disturbancePhotoHAZMAT = [];
          $("#photoHazmatOutput").empty();   
          break;
      }
    });
});
    
    
    $(function() {
    $('#dsoilstaining').change(function() {
      var selection;
      selection = $('#dsoilstaining').val();
      switch (selection) {
        case "1":
          $('#stainingphotodiv').show();
          break;
        case "0":
          $('#stainingphotodiv').hide();
          $("#soilstainingphoto").val('');
          document.getElementById("dsoilstainingtype").value = "select";
          disturbancePhotoSOILSTAINING = [];
          $("#photoSoilStainingOutput").empty();           
          break;
      }
    });
});    
    
//
// STRUCTURES
//

    
$(function() {
    $('#sfoundation').change(function() {
      var selection;
      selection = $('#sfoundation').val();
      switch (selection) {
        case "1":
          $('#sfoundationphotodiv').show();
          break;
        case "0":
          $('#sfoundationphotodiv').hide();
          photoFOUNDATION = [];
          $("#sfoundationphoto").val('');
          $("#photoFoundationOutput").empty();            
          break;
      }
    });
});   

$(function() {
    $('#swell').change(function() {
      var selection;
      selection = $('#swell').val();
      switch (selection) {
        case "1":
          $('#swellphotodiv').show();
          break;
        case "0":
          $('#swellphotodiv').hide();
          photoWELL = [];
          $("#swellphoto").val('');
          $("#photoWellOutput").empty();            
          break;
      }
    });
});  

$(function() {
    $('#smine').change(function() {
      var selection;
      selection = $('#smine').val();
      switch (selection) {
        case "1":
          $('#sminephotodiv').show();
          break;
        case "0":
          $('#sminephotodiv').hide();
          photoMINE = [];
          $("#sminephoto").val('');
          $("#photoMineOutput").empty();            
          break;
      }
    });
});  

$(function() {
    $('#sshaft').change(function() {
      var selection;
      selection = $('#sshaft').val();
      switch (selection) {
        case "1":
          $('#sshaftphotodiv').show();
          break;
        case "0":
          $('#sshaftphotodiv').hide();
          photoSHAFT = [];
          $("#sshaftphoto").val('');
          $("#photoShaftOutput").empty();            
          break;
      }
    });
});  

$(function() {
    $('#spipeline').change(function() {
      var selection;
      selection = $('#spipeline').val();
      switch (selection) {
        case "1":
          $('#spipelinephotodiv').show();
          break;
        case "0":
          $('#spipelinephotodiv').hide();
          photoPIPELINE = [];
          $("#spipelinephoto").val('');
          $("#photoPipelineOutput").empty();            
          break;
      }
    });
});  

$(function() {
    $('#stransmission').change(function() {
      var selection;
      selection = $('#stransmission').val();
      switch (selection) {
        case "1":
          $('#stransmissionphotodiv').show();
          break;
        case "0":
          $('#stransmissionphotodiv').hide();
          photoTRANSMISSION = [];
          $("#stransmissionphoto").val('');
          $("#photoTransmissionOutput").empty();            
          break;
      }
    });
});  

$(function() {
    $('#sfencing').change(function() {
      var selection;
      selection = $('#sfencing').val();
      switch (selection) {
        case "1":
          $('#sfencingphotodiv').show();
          break;
        case "0":
          $('#sfencingphotodiv').hide();
          photoFENCING = [];
          $("#sfencingphoto").val('');
          $("#photoFencingOutput").empty(); 
          document.getElementById("sfencingrepair").value = "0";
          break;
      }
    });
});      

$(function() {
    $('#swatertank').change(function() {
      var selection;
      selection = $('#swatertank').val();
      switch (selection) {
        case "1":
          $('#swatertankphotodiv').show();
          break;
        case "0":
          $('#swatertankphotodiv').hide();
          photoWATERTANK = [];
          $("#swatertankphoto").val('');
          $("#photoWatertankOutput").empty();           
          break;
      }
    });
});      

$(function() {
    $('#sundergroundstorage').change(function() {
      var selection;
      selection = $('#sundergroundstorage').val();
      switch (selection) {
        case "1":
          $('#sundergroundstoragephotodiv').show();
          break;
        case "0":
          $('#sundergroundstoragephotodiv').hide();
          photoUNDERGROUNDSTORAGE = [];
          $("#sundergroundstoragephoto").val('');
          $("#photoUndergroundstorageOutput").empty();            
          break;
      }
    });
});      

$(function() {
    $('#roadsdiv').change(function() {
      var selection;
      selection = $('#roadsdiv').val();
      switch (selection) {
        case "1":
          $('#roadsphotodiv').show();
          break;
        case "0":
          $('#roadsphotodiv').hide();
          document.getElementById("roadscoverage").value = "0";
          photoROADS = [];
          $("#roadsphoto").val('');
          $("#photoRoadsOutput").empty(); 
          break;
      }
    });
}); 

$(function() {
    $('#trailsdiv').change(function() {
      var selection;
      selection = $('#trailsdiv').val();
      switch (selection) {
        case "1":
          $('#trailsphotodiv').show();
          break;
        case "0":
          $('#trailsphotodiv').hide();
          photoTRAILS = [];
          $("#trailsphoto").val('');
          $("#photoTrailsOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#ohvdiv').change(function() {
      var selection;
      selection = $('#ohvdiv').val();
      switch (selection) {
        case "1":
          $('#ohvphotodiv').show();
          break;
        case "0":
          $('#ohvphotodiv').hide();
          document.getElementById("ohvuse").value = "0";
          photoOHV = [];
          $("#ohvphoto").val('');
          $("#photoOHVOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#homelessdiv').change(function() {
      var selection;
      selection = $('#homelessdiv').val();
      switch (selection) {
        case "1":
          $('#homelessphotodiv').show();
          break;
        case "0":
          $('#homelessphotodiv').hide();
          photoHOMELESS = [];
          $("#homelessphoto").val('');
          $("#photoHomelessOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#dogs').change(function() {
      var selection;
      selection = $('#dogs').val();
      switch (selection) {
        case "1":
          $('#dogsphotodiv').show();
          break;
        case "0":
          $('#dogsphotodiv').hide();
          photoDOGS = [];
          $("#dogsphoto").val('');
          $("#photoDogsOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#ravens').change(function() {
      var selection;
      selection = $('#ravens').val();
      switch (selection) {
        case "1":
          $('#ravensphotodiv').show();
          break;
        case "0":
          $('#ravensphotodiv').hide();
          photoRAVENS = [];
          $("#ravensphoto").val('');
          $("#photoRavensOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#yuma').change(function() {
      var selection;
      selection = $('#yuma').val();
      switch (selection) {
        case "1":
          $('#yumaphotodiv').show();
          break;
        case "0":
          $('#yumaphotodiv').hide();
          photoYUMA = [];
          $("#yumaphoto").val('');
          $("#photoYumaOutput").empty();
          break;
      }
    });
}); 

$(function() {
    $('#calirail').change(function() {
      var selection;
      selection = $('#calirail').val();
      switch (selection) {
        case "1":
          $('#calirailphotodiv').show();
          break;
        case "0":
          $('#calirailphotodiv').hide();
          photoCALIRAIL = [];
          $("#calirailphoto").val('');
          $("#photoCalirailOutput").empty();
          break;
      }
    });
}); 

$(function() {
    $('#burrowl').change(function() {
      var selection;
      selection = $('#burrowl').val();
      switch (selection) {
        case "1":
          $('#burrowlphotodiv').show();
          break;
        case "0":
          $('#burrowlphotodiv').hide();
          photoBURROWL = [];
          $("#burrowlphoto").val('');
          $("#photoBurrowlOutput").empty();          
          break;
      }
    });
}); 

$(function() {
    $('#swflycatcher').change(function() {
      var selection;
      selection = $('#swflycatcher').val();
      switch (selection) {
        case "1":
          $('#swflycatcherphotodiv').show();
          break;
        case "0":
          $('#swflycatcherphotodiv').hide();
          photoSWFLYCATCHER = [];
          $("#swflycatcherphoto").val('');
          $("#photoSwflycatcherOutput").empty();             
          break;
      }
    });
}); 

$(function() {
    $('#crissal').change(function() {
      var selection;
      selection = $('#crissal').val();
      switch (selection) {
        case "1":
          $('#crissalphotodiv').show();
          break;
        case "0":
          $('#crissalphotodiv').hide();
          photoCRISSAL = [];
          $("#crissalphoto").val('');
          $("#photoCrissalOutput").empty();            
          break;
      }
    });
}); 

$(function() {
    $('#leconte').change(function() {
      var selection;
      selection = $('#leconte').val();
      switch (selection) {
        case "1":
          $('#lecontephotodiv').show();
          break;
        case "0":
          $('#lecontephotodiv').hide();
          photoLECONTE = [];
          $("#lecontephoto").val('');
          $("#photoLeconteOutput").empty(); 
          break;
      }
    });
}); 

$(function() {
    $('#leastbell').change(function() {
      var selection;
      selection = $('#leastbell').val();
      switch (selection) {
        case "1":
          $('#leastbellphotodiv').show();
          break;
        case "0":
          $('#leastbellphotodiv').hide();
          photoLEASTBELL = [];
          $("#leastbellphoto").val('');
          $("#photoLeastbellOutput").empty();
          break;
      }
    });
}); 

$(function() {
    $('#greyvireo').change(function() {
      var selection;
      selection = $('#greyvireo').val();
      switch (selection) {
        case "1":
          $('#greyvireophotodiv').show();
          break;
        case "0":
          $('#greyvireophotodiv').hide();
          photoGREYVIREO = [];
          $("#greyvireophoto").val('');
          $("#photoGreyvireoOutput").empty();          
          break;
      }
    });
}); 

$(function() {
    $('#yellowwarbler').change(function() {
      var selection;
      selection = $('#yellowwarbler').val();
      switch (selection) {
        case "1":
          $('#yellowwarblerphotodiv').show();
          break;
        case "0":
          $('#yellowwarblerphotodiv').hide();
          photoYELLOWWARBLER = [];
          $("#yellowwarblerphoto").val('');
          $("#photoYellowwarblerOutput").empty();
          break;
      }
    });
}); 



$(function() {
    $('#yellowbreastedchat').change(function() {
      var selection;
      selection = $('#yellowbreastedchat').val();
      switch (selection) {
        case "1":
          $('#yellowbreastedchatphotodiv').show();
          break;
        case "0":
          $('#yellowbreastedchatphotodiv').hide();
          photoYELLOWBREASTEDCHAT = [];
          $("#yellowbreastedchatphoto").val('');
          $("#photoYellowbreastedchatOutput").empty();          
          break;
      }
    });
}); 

$(function() {
    $('#summertanager').change(function() {
      var selection;
      selection = $('#summertanager').val();
      switch (selection) {
        case "1":
          $('#summertanagerphotodiv').show();
          break;
        case "0":
          $('#summertanagerphotodiv').hide();
          photoSUMMERTANAGER = [];
          $("#summertanagerphoto").val('');
          $("#photoSummertanagerOutput").empty();  
          break;
      }
    });
}); 

$(function() {
    $('#sandtreadercricket').change(function() {
      var selection;
      selection = $('#sandtreadercricket').val();
      switch (selection) {
        case "1":
          $('#sandtreadercricketphotodiv').show();
          break;
        case "0":
          $('#sandtreadercricketphotodiv').hide();
          photoSANDTREADERCRICKET = [];
          $("#sandtreadercricketphoto").val('');
          document.getElementById("sandtreadercricketsighting").value = "0";
          document.getElementById("sandtreadercricketburrow").value = "0";
          $("#photoSandtreadercricketOutput").empty();            
          break;
      }
    });
}); 

$(function() {
    $('#jerusalemcricket').change(function() {
      var selection;
      selection = $('#jerusalemcricket').val();
      switch (selection) {
        case "1":
          $('#jerusalemcricketphotodiv').show();
          break;
        case "0":
          $('#jerusalemcricketphotodiv').hide();
          photoJERUSALEMCRICKET = [];
          $("#jerusalemcricketphoto").val('');
          $("#photoJerusalemcricketOutput").empty();            
          break;
      }
    });
}); 

$(function() {
    $('#pupfish').change(function() {
      var selection;
      selection = $('#pupfish').val();
      switch (selection) {
        case "1":
          $('#pupfishphotodiv').show();
          break;
        case "0":
          $('#pupfishphotodiv').hide();
          photoPUPFISH = [];
          $("#pupfishphoto").val('');
          $("#photoPupfishOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#tortoise').change(function() {
      var selection;
      selection = $('#tortoise').val();
      switch (selection) {
        case "1":
          $('#tortoisephotodiv').show();
          break;
        case "0":
          $('#tortoisephotodiv').hide();
          photoTORTOISE = [];
          $("#tortoisephoto").val('');
          $("#photoTortoiseOutput").empty();             
          break;
      }
    });
}); 

$(function() {
    $('#fthlizard').change(function() {
      var selection;
      selection = $('#fthlizard').val();
      switch (selection) {
        case "1":
          $('#fthlizardphotodiv').show();
          break;
        case "0":
          $('#fthlizardphotodiv').hide();
          photoFTHLIZARD = [];
          $("#fthlizardphoto").val('');
          $("#photoFthlizardOutput").empty();             
          break;
      }
    });
}); 

$(function() {
    $('#cvftlizard').change(function() {
      var selection;
      selection = $('#cvftlizard').val();
      switch (selection) {
        case "1":
          $('#cvftlizardphotodiv').show();
          break;
        case "0":
          $('#cvftlizardphotodiv').hide();
          photoCVFTLIZARD = [];
          $("#cvftlizardphoto").val('');
          $("#photoCvftlizardOutput").empty();             
          break;
      }
    });
}); 

$(function() {
    $('#burrows').change(function() {
      var selection;
      selection = $('#burrows').val();
      switch (selection) {
        case "1":
          $('#burrowsphotodiv').show();
          break;
        case "0":
          $('#burrowsphotodiv').hide();
          photoBURROWS = [];
          $("#burrowsphoto").val('');
          $("#photoBurrowsOutput").empty();  
          break;
      }
    });
}); 

$(function() {
    $('#southernyellowbat').change(function() {
      var selection;
      selection = $('#southernyellowbat').val();
      switch (selection) {
        case "1":
          $('#southernyellowbatphotodiv').show();
          break;
        case "0":
          $('#southernyellowbatphotodiv').hide();
          photoSOUTHERNYELLOWBAT = [];
          $("#southernyellowbatphoto").val('');
          $("#photoSouthernyellowbatOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#rtgsquirrel').change(function() {
      var selection;
      selection = $('#rtgsquirrel').val();
      switch (selection) {
        case "1":
          $('#rtgsquirrelphotodiv').show();
          break;
        case "0":
          $('#rtgsquirrelphotodiv').hide();
          photoRTGSQUIRREL = [];
          $("#rtgsquirrelphoto").val('');
          $("#photoRtgsquirrelOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#pspringspmouse').change(function() {
      var selection;
      selection = $('#pspringspmouse').val();
      switch (selection) {
        case "1":
          $('#pspringspmousephotodiv').show();
          break;
        case "0":
          $('#pspringspmousephotodiv').hide();
          photoPSPRINGSPMOUSE = [];
          $("#pspringspmousephoto").val('');
          $("#photoPspringspmouseOutput").empty();          
          break;
      }
    });
}); 

$(function() {
    $('#pbighornsheep').change(function() {
      var selection;
      selection = $('#pbighornsheep').val();
      switch (selection) {
        case "1":
          $('#pbighornsheepphotodiv').show();
          break;
        case "0":
          $('#pbighornsheepphotodiv').hide();
          photoPBIGHORNSHEEP = [];
          $("#pbighornsheepphoto").val('');
          $("#photoPbighornsheepOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#cowbirds').change(function() {
      var selection;
      selection = $('#cowbirds').val();
      switch (selection) {
        case "1":
          $('#cowbirdsphotodiv').show();
          break;
        case "0":
          $('#cowbirdsphotodiv').hide();
          photoCOWBIRDS = [];
          $("#cowbirdsphoto").val('');
          $("#photoCowbirdsOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#meccaaster').change(function() {
      var selection;
      selection = $('#meccaaster').val();
      switch (selection) {
        case "1":
          $('#meccaasterphotodiv').show();
          break;
        case "0":
          $('#meccaasterphotodiv').hide();
          photoMECCAASTER = [];
          $("#meccaasterphoto").val('');
          $("#photoMeccaasterOutput").empty();            
          break;
      }
    });
}); 

$(function() {
    $('#orocopiasage').change(function() {
      var selection;
      selection = $('#orocopiasage').val();
      switch (selection) {
        case "1":
          $('#orocopiasagephotodiv').show();
          break;
        case "0":
          $('#orocopiasagephotodiv').hide();
          photoOROCOPIASAGE = [];
          $("#orocopiasagephoto").val('');
          $("#photoOrocopiasageOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#tribbedmilkvetch').change(function() {
      var selection;
      selection = $('#tribbedmilkvetch').val();
      switch (selection) {
        case "1":
          $('#tribbedmilkvetchphotodiv').show();
          break;
        case "0":
          $('#tribbedmilkvetchphotodiv').hide();
          photoTRIBBEDMILKVETCH = [];
          $("#tribbedmilkvetchphoto").val('');
          $("#photoTribbedmilkvetchOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#cvmilkvetch').change(function() {
      var selection;
      selection = $('#cvmilkvetch').val();
      switch (selection) {
        case "1":
          $('#cvmilkvetchphotodiv').show();
          break;
        case "0":
          $('#cvmilkvetchphotodiv').hide();
          photoCVMILKVETCH = [];
          $("#cvmilkvetchphoto").val('');
          $("#photoCvmilkvetchOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#lsbmlinanthus').change(function() {
      var selection;
      selection = $('#lsbmlinanthus').val();
      switch (selection) {
        case "1":
          $('#lsbmlinanthusphotodiv').show();
          break;
        case "0":
          $('#lsbmlinanthusphotodiv').hide();
          photoLSBMLINANTHUS = [];
          $("#lsbmlinanthusphoto").val('');
          $("#photoLsbmlinanthusOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#saharamustard').change(function() {
      var selection;
      selection = $('#saharamustard').val();
      switch (selection) {
        case "1":
          $('#saharamustardphotodiv').show();
          break;
        case "0":
          $('#saharamustardphotodiv').hide();
          photoSAHARAMUSTARD = [];
          $("#saharamustardphoto").val('');
          document.getElementById("saharamustardcontrol").checked = false;
          document.getElementById("saharamustardcoverage").value = 0;
          $("#photoSaharamustardOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#schismusgrass').change(function() {
      var selection;
      selection = $('#schismusgrass').val();
      switch (selection) {
        case "1":
          $('#schismusgrassphotodiv').show();
          break;
        case "0":
          $('#schismusgrassphotodiv').hide();
          photoSCHISMUSGRASS = [];
          $("#schismusgrassphoto").val('');          
          document.getElementById("schismusgrasscontrol").checked = false;
          document.getElementById("schismusgrasscoverage").value = 0;
          $("#photoSchismusgrassOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#tamarixaphylla').change(function() {
      var selection;
      selection = $('#tamarixaphylla').val();
      switch (selection) {
        case "1":
          $('#tamarixaphyllaphotodiv').show();
          break;
        case "0":
          $('#tamarixaphyllaphotodiv').hide();
          photoTAMARIXAPHYLLA = [];
          $("#tamarixaphyllaphoto").val('');          
          document.getElementById("tamarixaphyllacontrol").checked = false;
          document.getElementById("tamarixaphyllacoverage").value = 0;
          $("#photoTamarixaphyllaOutput").empty();            
          break;
      }
    });
}); 

$(function() {
    $('#tamarixramossisima').change(function() {
      var selection;
      selection = $('#tamarixramossisima').val();
      switch (selection) {
        case "1":
          $('#tamarixramossisimaphotodiv').show();
          break;
        case "0":
          $('#tamarixramossisimaphotodiv').hide();
          photoTAMARIXRAMOSSISIMA = [];
          $("#tamarixramossisimaphoto").val('');          
          document.getElementById("tamarixramossisimacontrol").checked = false;
          document.getElementById("tamarixramossisimacoverage").value = 0;
          $("#photoTamarixramossisimaOutput").empty();           
          break;
      }
    });
}); 

$(function() {
    $('#fountaingrass').change(function() {
      var selection;
      selection = $('#fountaingrass').val();
      switch (selection) {
        case "1":
          $('#fountaingrassphotodiv').show();
          break;
        case "0":
          $('#fountaingrassphotodiv').hide();
          photoFOUNTAINGRASS = [];
          $("#fountaingrassphoto").val('');          
          document.getElementById("fountaingrasscontrol").checked = false;
          document.getElementById("fountaingrasscoverage").value = 0;
          $("#photoFountaingrassOutput").empty();             
          break;
      }
    });
}); 

$(function() {
    $('#bufflegrass').change(function() {
      var selection;
      selection = $('#bufflegrass').val();
      switch (selection) {
        case "1":
          $('#bufflegrassphotodiv').show();
          break;
        case "0":
          $('#bufflegrassphotodiv').hide();
          photoBUFFLEGRASS = [];
          $("#bufflegrassphoto").val('');          
          document.getElementById("bufflegrasscontrol").checked = false;
          document.getElementById("bufflegrasscoverage").value = 0;
          $("#photoBufflegrassOutput").empty();            
          break;
      }
    });
}); 

$(function() {
    $('#arundo').change(function() {
      var selection;
      selection = $('#arundo').val();
      switch (selection) {
        case "1":
          $('#arundophotodiv').show();
          break;
        case "0":
          $('#arundophotodiv').hide();
          photoARUNDO = [];
          $("#arundophoto").val('');          
          document.getElementById("arundocontrol").checked = false;
          document.getElementById("arundocoverage").value = 0;
          $("#photoArundoOutput").empty();            
          break;
      }
    });
}); 

