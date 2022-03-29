class PageController {
  renderHome (req, res) {
    res.render('home')
  }

  renderPrueba (req, res) {
    res.render('prueba')
  }

  renderNotFound (req, res) {
    res.render('404')
  }
}

module.exports = PageController
