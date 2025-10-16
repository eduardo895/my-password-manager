const { loadVault, saveVault } = require('./src/vault');
let masterPassword;
let currentVault;

document.getElementById('openVault').addEventListener('click', () => {
  masterPassword = document.getElementById('masterPasswordInput').value;
  if (!masterPassword){
    alert('Por favor insere a password mestra');
    return;
  }
  try {
    currentVault = loadVault(masterPassword);
    alert(`Vault carregado com ${currentVault.entries.length} entradas.`);
    renderVaultEntries();
  } catch {
    currentVault = { entries: [] };
    saveVault(currentVault, masterPassword);
    alert('Novo cofre criado!');
    renderVaultEntries();
  }
});

document.getElementById('entryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!currentVault){
    alert('Abre o vault primeiro!');
    return;
  }
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
  renderVaultEntries();
  e.target.reset();
});

function renderVaultEntries() {
  const list = document.getElementById('vaultList');
  list.innerHTML = '';
  if (!currentVault || !currentVault.entries.length) {
    list.innerHTML = '<li>Nenhuma entrada guardada.</li>';
    return;
  }
  currentVault.entries.forEach(entry => {
    const item = document.createElement('li');
    item.textContent = `${entry.title} — ${entry.username}`;
    list.appendChild(item);
  });
}

