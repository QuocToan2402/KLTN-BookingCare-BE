import express from 'express';

let configViewEngine = (app) => {
	app.use(express.static('./src/public')); //su dung express cau hinh link static cho phep biet client truy cap vao public
	app.set('view engine', 'ejs'); //set view engine voi ejs, cho phep logic trong html
	app.set('views', './src/views'); //set link lay view
};
module.exports = configViewEngine;
