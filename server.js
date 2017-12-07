var express = require('express');
var path = require( 'path' );
var app = express();

var hephaestus = require( 'hephaestus-webpack' );
hephaestus.build( 'production' );

var publicPath = path.join( __dirname, 'public' );
var indexPath  = path.join( publicPath, 'index.html' );

// Config
app.use( express.static( publicPath, { redirect : false } ) );
app.set( 'view engine', 'html' );
app.use( function( request, response, next ) {
  response.set( 'Access-Control-Allow-Origin', '*' );
  response.set( 'Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' );
  response.set( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );

  next();
} );

// Routing
app.get( '/', function(request, response) {
  response.set( 'Cache-Control', 'no-cache' );

  response.sendFile( indexPath );
} );

// app.get('*', function(request, response) {
//   response.set( 'Cache-Control', 'no-cache' );
//
//   response.sendFile(indexPath);
// });

app.listen( process.env.PORT || 8080 );
