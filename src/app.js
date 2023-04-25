const express =  require("express");
const app =  express();
const {join} =  require ("path");
const compression = require("compression");
const router = require ("./routers/router");
const cookieParser = require("cookie-parser");

app.set("port", process.env.PORT || 4000);

app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "..", "public")));

app.use(router);

 module.exports =  app;