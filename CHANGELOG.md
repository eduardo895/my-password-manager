# Changelog

Todas as alterações notáveis neste projeto serão documentadas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)
e este projeto segue [SemVer](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Adicionado
- Estrutura inicial do projeto com Electron
- Interface básica com botão "Abrir Vault"
- Script `npm start` no `package.json`

## [0.1.0] - 14-10-2025

### Adicionado
- Módulo de criptografia com AES-256 e PBKDF2
- Módulo de leitura e gravação do vault encriptado
- Ligação da interface ao cofre encriptado

## [0.2.0] - 14-10-2025

### Adicionado
- Formulário HTML para adicionar entradas ao cofre
- Lógica para guardar entradas no ficheiro encriptado

## [0.3.0] - 16-10-2025

### Adicionado
- Interface funcional com formulário para adicionar entradas
- Lógica de persistência encriptada com AES-256
- Estrutura de vault com campos: título, username, password, URL, notas

### Alterado
- Refatoração da lógica de abertura do vault para reutilização global

## [0.3.1] - 16-10-2025

### Alterado
- Adicionado alerta com número de entradas ao abrir o cofre



