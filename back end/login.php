<?php
session_start();
require 'conexão.php';

$nome = $_POST['nome'] ?? '';
$senha = $_POST['senha'] ?? '';

header('Content-Type: application/json');  // importante definir o tipo de resposta

if ($nome && $senha) {
  $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE nome = ?");
  $stmt->execute([$nome]);
  $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($usuario && hash('sha256', $senha) === $usuario['senha']) {
    $_SESSION['usuario'] = $usuario['nome'];
    echo json_encode(['status' => 'ok']);
  } else {
    echo json_encode(['status' => 'erro', 'mensagem' => 'Usuário ou senha incorretos.']);
  }
} else {
  echo json_encode(['status' => 'erro', 'mensagem' => 'Preencha todos os campos.']);
}

exit;
