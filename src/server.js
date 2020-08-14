function pageLanding(req,res) {
  return res.render("index.html")
}

function pageStudy(req,res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req,res) {
  const data = req.query

  // Verifica se os dados estão vazios
  const isNotEmpty = Object.keys(data).length > 0

  if (isNotEmpty) {
    data.subject = getSubject(data.subject)

    // Adcionar dados (data) a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
  }

  return res.render("give-classes.html", { subjects, weekdays })
}
// Servidor
const express = require('express')
const server = express()

// Configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})

// Início e configuração do servidor
server
// Configurando arquivos estáticos: css, scripts, imagens
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// Start do servidor
.listen(5500)
