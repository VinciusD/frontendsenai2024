<?php
// host da minha conexão
$host = 'localhost';

// user que vai acessar o banco de dados
$user = 'root';

// a senha deste banco de dados
$senha = '';

// o nome do banco de dados
$bd = 'sistema';

// criar a conexão entre o banco de dados
$conn = new mysqli($host, $user, $senha, $bd);