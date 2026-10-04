// Electron main process: a transparent, click-through, always-on-top window over your screen.
const { app, BrowserWindow, Tray, Menu, screen, dialog, nativeImage, globalShortcut, ipcMain } = require('electron');
const path = require('path');

let win, tray, timer;

// ===== GLOBAL SHORTCUTS (work from any app, even when the cats are click-through) =====
// Ctrl+Alt+Shift+<letter> is a combo almost nothing else uses. Change the letters if you like.
const SHORTCUTS = {
  mom:    'Control+Alt+L',   // call Lamine
  litter: 'Control+Alt+B',   // close / open the litter box
  feed:   'Control+Alt+F',    // feed them
  bye:    'Control+Alt+X'          // say goodbye: Lamine takes the kittens off screen, then the app quits
};
const pretty = a => a.replace('Control', 'Ctrl');
if (!app.requestSingleInstanceLock()) app.quit();
app.on('window-all-closed', () => {});          // stay alive in the tray

function createWindow() {
  const wa = screen.getPrimaryDisplay().workArea;  // area above the taskbar / below the menu bar
  win = new BrowserWindow({
    x: wa.x, y: wa.y, width: wa.width, height: wa.height,
    transparent: true, frame: false, resizable: false, movable: false, hasShadow: false,
    skipTaskbar: true, focusable: false, alwaysOnTop: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js') }
  });
  win.setAlwaysOnTop(true, 'screen-saver');
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  win.setIgnoreMouseEvents(true);                  // clicks pass straight through to your apps
  win.loadFile('index.html');
  // the page can't see the mouse outside itself, so we send the global cursor position
  timer = setInterval(() => {
    if (win.isDestroyed()) return;
    const p = screen.getCursorScreenPoint();
    win.webContents.send('cursor', p.x - wa.x, p.y - wa.y);
  }, 16);
}

const STORY = "Bebe (Beskuit Better) and Benji (Beng Beng Jagung Manis) showed up in a black backpack.\n" +
  "They got fed, got chubby, got fast, and became rascals. Their mom, Lamine, is kind, smart, and always on dough mode.\n\n" +
  "They didn't die. I just lost them, because they went to a foster home. Now they live on my screen.";

app.whenReady().then(() => {
  createWindow();
  tray = new Tray(nativeImage.createFromPath(path.join(__dirname, 'icon.png')).resize({ width: 18, height: 18 }));
  tray.setToolTip('Bebe, Benji & Lamine');
  const send = c => win.webContents.send('cmd', c);
  const failed = [];
  for (const [cmd, acc] of Object.entries(SHORTCUTS)) {
    if (!globalShortcut.register(acc, () => send(cmd))) failed.push(pretty(acc));
  }
  if (failed.length) dialog.showErrorBox('Shortcut tidak bisa dipakai', 'Sudah dipakai aplikasi lain: ' + failed.join(', ') + '\nUbah huruf di SHORTCUTS pada main.js. Menu tray tetap bisa dipakai.');
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: '🍼 Call Lamine  (' + pretty(SHORTCUTS.mom) + ')', click: () => send('mom') },
    { label: '🍗 Feed them  (' + pretty(SHORTCUTS.feed) + ')', click: () => send('feed') },
    { label: '🧺 Close / open litter box  (' + pretty(SHORTCUTS.litter) + ')', click: () => send('litter') },
    { label: '👋 Say goodbye  (' + pretty(SHORTCUTS.bye) + ')', click: () => send('bye') },
    { label: '💩 Poop time', click: () => send('poop') },
    { label: '📖 Their story', click: () => dialog.showMessageBox({ type: 'info', title: 'Bebe, Benji & Lamine', message: 'Their story', detail: STORY }) },
    { type: 'separator' },
    { label: 'Hide / show cats', click: () => (win.isVisible() ? win.hide() : win.showInactive()) },
    { label: 'Start with my computer', type: 'checkbox', checked: app.getLoginItemSettings().openAtLogin,
      click: i => app.setLoginItemSettings({ openAtLogin: i.checked }) },
    { type: 'separator' },
    { label: 'Quit', click: () => { clearInterval(timer); app.quit(); } }
  ]));
});

app.on('will-quit', () => globalShortcut.unregisterAll());

// the page asks us to quit only after the cats have walked off screen
ipcMain.on('quit', () => { clearInterval(timer); app.quit(); });