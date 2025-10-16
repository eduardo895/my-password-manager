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

## [0.3.2] - 16-10-2025

### Corrigido
- Removido uso incorreto de `preload` para `renderer.js`
- Corrigido erro de caminho em `vault.js` (ENOTDIR)
- Corrige erro de execução no Windows após build com GitHub Actions
- Redireciona caminho do vault para pasta do utilizador (`os.homedir()`)

## [0.3.3] - 16-10-2025

### Alterado
- Chamada da função `renderVaultEntries()` após abrir o cofre e adicionar entrada
- Interface atualiza automaticamente com as entradas guardadas

### Adicionado
- Campo de input para password mestra (substitui `prompt`)
- Lista visual das entradas guardadas no cofre

### Corrigido
- Erro de `currentVault` undefined ao adicionar entrada

## [0.3.4] - 16-10-2025

### Adicionado
- Ficheiro `style.css` com estilo moderno
- Ligação do CSS ao `index.html`
- Personalização da janela Electron para visual mais limpo



