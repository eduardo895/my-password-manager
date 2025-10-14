const { loadVault, saveVault } = require('./src/vault');
let masterPassword;
let currentVault;

document.getElementById('openVault').addEventListener('click', () => {
  masterPassword = prompt('Digite a password mestra:');
  try {
    currentVault = loadVault(masterPassword);
    alert('Cofre carregado!');
  } catch {
    currentVault = { entries: [] };
    saveVault(currentVault, masterPassword);
    alert('Novo cofre criado!');
  }
});

document.getElementById('entryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const entry = {
    title:    document.getElementById('title').value,
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    url:      document.getElementById('url').value,
    notes:    document.getElementById('notes').value
  };
  currentVault.entries.push(entry);
  saveVault(currentVault, masterPassword);
  alert('Entrada adicionada com sucesso!');
  e.target.reset();
});
