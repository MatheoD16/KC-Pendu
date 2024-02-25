<?php

$request_uri = $_SERVER['REQUEST_URI'];

switch($request_uri){
    case '/':
        require '../index.html';
        break;

    default:
        http_response_code(404);
        echo 'Page not found';
        break;
}