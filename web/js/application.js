(function () {
     $('.titre').text(document.title);  
     
     var url = 'http://chart.apis.google.com/chart?cht=p3&chs=290x130&chl=a,b,c&chd=t:1,2,3&chds=0,3&chf=bg,s,d0e4fe';
     
    $('#chart img').attr('src', url);

});