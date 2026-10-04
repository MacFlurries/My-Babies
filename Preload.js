const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('catAPI', {
  onCursor: cb => ipcRenderer.on('cursor', (_, x, y) => cb(x, y)),
  quit: () => ipcRenderer.send('quit'),
  onCommand: cb => ipcRenderer.on('cmd', (_, c) => cb(c))
});