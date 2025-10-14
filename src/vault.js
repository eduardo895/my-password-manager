
const fs   = require('fs');
const path = require('path');
const { encryptData, decryptData } = require('./encryption');

const vaultDir  = path.join(__dirname, '..', 'vaults');
const vaultFile = path.join(vaultDir, 'vault.kpm');

if (!fs.existsSync(vaultDir)) fs.mkdirSync(vaultDir);

function loadVault(masterPassword) {
  if (!fs.existsSync(vaultFile)) throw new Error('Vault não existe');
  const encrypted = fs.readFileSync(vaultFile, 'utf8');
  return decryptData(encrypted, masterPassword);
}

function saveVault(data, masterPassword) {
  const encrypted = encryptData(data, masterPassword);
  fs.writeFileSync(vaultFile, encrypted, 'utf8');
}

module.exports = { loadVault, saveVault };
