const meses = require('./meses')

module.exports = {
    pdfCertificado: function (dados) { 
        return `
        <div style="margin-top: 100px; margin-left:80px; margin-right:80px">
            <h1 style="text-align:center">Certificado</h1>
            <p style="margin-top: 50px; text-align:center"> 
                Certificamos para os devidos fins que <b>${dados.nome}
                </b> está aprovado(a) no curso de <b>${dados.curso}</b> com a média 
                final de <b>${dados.nota}</b> e frequência de <b>
                ${dados.frequencia}</b>%.
            </p>
            <div style="margin-top: 200px">
                <p style="text-align:right"> 
                    São Paulo, ${dados.dia} de ${meses[dados.mes]} de ${dados.ano}.
                </p>
            </div>
        </div>
        `             
    },

    pdfAtestado: function (dados) { 
        return `
        <div style="margin-top: 50px; margin-left:80px; margin-right:80px">
            <h1 style="text-align:center">Atestado de matrícula</h1>
            <p style="margin-top: 20px; text-align:center"> 
                Atestamos para os devidos fins que <b>${dados.nome}
                </b> está regularmente matriculado(a) no curso <b>${dados.curso}</b> .
            </p>
            <div style="margin-top: 50px">
                <p style="text-align:right"> 
                    São Paulo, ${dados.dia} de ${meses[dados.mes]} de ${dados.ano}.
                </p>
            </div>
        </div>
        `             
    }
}
