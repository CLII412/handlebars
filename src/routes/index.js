const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', {
    layout: 'layout',
    style: 'style.css',
  })
})

router.get('/container', function (req, res, next) {
  res.render('1-container', {
    title: 'Container',
    content: 'Content',
  })
})

router.get('/layout', function (req, res, next) {
  res.render('2-layout', {
    layout: 'first',
  })
})

router.get('/body', function (req, res, next) {
  res.render('3-body', {
    layout: 'layout',
    name: 'John',
  })
})

router.get('/component', function (req, res, next) {
  res.render('4-component', {
    layout: 'layout',
  })
})

router.get('/params', function (req, res, next) {
  res.render('5-params', {
    layout: 'layout',
    text: 'My first param',
  })
})

module.exports = router
