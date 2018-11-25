'use strict';

const express = require('express');
const superagent = require('superagent');

const API = 'hhtp://localhost:3000';

const router = express.router();

router.get('/', homepage);
router.get('/', listpage);

homepage(req, res){
  Response.render('site', {page: '../views/site.ejs', title:'Welcome Home'});
}

listpage(req,res){
  superagent.get(`${API}/api/v1/categories`)
  .then(data => {
    Response.render('site', {page:'../views/pages/list.ejs', title:"list", items: data.body});
  })
.catch( error => {
  Response.render('site', {page:'../views/pages/error.ejs', title:'error', error:error})
})
}
// I kept getting errors that response needed to be R..? any ideas why that me be Cara?
