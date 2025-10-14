const { loadVault, saveVault } = require('./src/vault');
let masterPassword;

document.getElementById('openVault').addEventListener('click', () => {
    masterPassword = prompt('Digite a password mestra: ');
    try{
        const vault = loadVault(masterPassword);
        console.log('Vault carregado', vault);
        alert('Vault aberto - vê a consola para detalhes.')
    } catch {
        const emptyVault = { entries: [] };
        saveVault(emptyVault, masterPassword);
        alert('Novo vault criado!');
        console.log('Cofre inicializado:', emptyVault);
    }
});