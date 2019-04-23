const fs = require('fs');
const pdf = require('html-pdf');
const templates = require('../templates/templates');

module.exports = function(app) {

    app.get('/certificado', function(req, response) {
        var options = { format: 'Letter' };
        let obj = templates.pdfCertificado(req.query);
	    pdf.create(obj, options).toStream(function(err, stream){
    
            var file = stream.path; 
	    
            response.setHeader('Content-type', 'application/pdf');
            response.setHeader('Content-disposition', 'attachment; filename=' + file);
            // response.setHeader('Access-Control-Expose-Headers', 'Location');
            response.download(file, function(err){
                if (err) {
                   console.log(err);
                } else {
                   console.log('Efetuado com sucesso');
                }
            });
        });       
    });

    app.get('/atestado', function(req, response) {

        var options = { format: 'Letter' };
        let obj = templates.pdfAtestado(req.query);
	    pdf.create(obj, options).toStream(function(err, stream){
	
            var file = stream.path; 
	    
            response.setHeader('Content-type', 'application/pdf');
            response.setHeader('Content-disposition', 'attachment; filename=' + file);
            response.download(file, function(err){
                if (err) {
                   console.log(err);
                } else {
                   console.log('Efetuado com sucesso');
                }
            });
        });       
    });
}
