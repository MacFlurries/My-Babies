# 🐾 Bebe, Benji & Lamine

> Three cats who live on your screen. Built as a goodbye.

They didn't die. I just lost them, because they had to move on to a foster home. This repo is where they get to stay. They can't take them away from us.

## The story

Two kittens turned up in a rain brought by our daughter Lamine, their name is Bebe and Benji, we love them but we can't keep them, though in this despicable world they're our only light of hope, even though they're not human, they're much better than us.

**Benji** (*Beng Beng Jagung Manis*) is the orange-and-white one. He is loud, curious, and convinced the plastic tub is his to scratch.

**Bebe** (*Beskuit Better*) is the tabby with the big serious eyes. He is the smart one, and he always finds the litter box.

We fed them well. They got chubby, then they got fast. Rascals, both of them: biting, scratching, and pouncing on anything that moved, like lions after their prey.

Their mom, **Lamine**, is a calico who is kind, smart, and always in dough mode. She'd turn up now and then to give them milk and lick them clean.

I love them. I'm sorry I couldn't keep them. Now they run around my screen, and sometimes they come to see me.

## Run them on your desktop

You need [Node.js](https://nodejs.org) (LTS). Then, in this folder:

```bash
npm install
npm start
```

The cats appear over all your windows. Clicks pass straight through them, so they never get in your way. Find the tray icon (near the clock) for the menu: call Lamine, poop time, their story, hide/show, start with your computer, quit. The menu also has **feed them**, **close / open the litter box** and **say goodbye**, each with its shortcut shown next to it.

Want a double-click app for GitHub Releases? Run `npm run dist` and take the file from `dist/`.

**Just want the webpage?** Open `index.html` in any browser. The same file works in both modes. In the browser, the top bar has buttons for feeding, the litter box, Lamine and poop time, and the shortcuts below work too.

### Fastest way (Windows)

Double-click **`start.bat`**. It runs `npm install` (only the first time) and then `npm start` for you. Node.js still needs to be installed.

## What they do

They have their own lives now. They don't only follow your cursor.

- **Wander and explore:** walk around the whole screen, sniff the edges and corners, look around
- **Groom, nap, zoomies:** wash a paw, fall asleep for a while, sprint across the screen
- **Play together:** wrestle with each other
- **Discover things:** butterflies, yarn and mice show up; they stalk and pounce on them
- **Sometimes** get curious about your cursor and follow it
- **Rarely** (once every 30–70 seconds at most, per cat) pounce on the cursor and bite or scratch it
- **Poop breaks:** Benji sometimes scratches the plastic tub and misses; Bebe uses the litter box like a pro
- **Lamine visits:** she kneads dough, feeds them milk, and licks them
- **Dinner time:** a bowl drops on the floor where your cursor is and they sprint to it, eat, and get full
- **Closed litter box:** the box disappears from the screen and they poop and pee everywhere. Bebe goes to where it used to be and is very annoyed about it; Benji doesn't even try. Your cursor turns into a broom 🧹: hover over the poop and pee to sweep them away
- **One litter box:** only Bebe's litter box is on screen. Benji's plastic tub is gone, so he scratches at the edge of Bebe's box instead
- **Goodbye:** Lamine comes to fetch Bebe and Benji, all three walk off the screen together, and only then does the app close

## Shortcuts (work from any app)

| Shortcut | What happens |
|---|---|
| `Ctrl+Alt+M` | Call **M**om Lamine |
| `Ctrl+Alt+F` | **F**eed them |
| `Ctrl+Alt+L` | Close the **L**itter box (it disappears) / open it again (it comes back) |
| `Ctrl+Alt+X` | Say goodbye: Lamine takes Bebe and Benji off the screen, then the app closes |

They are global, so they work even while another app is focused. If a shortcut is already taken by another app, the cats tell you on startup, and the tray menu still works. Change the letters in `SHORTCUTS` at the top of `main.js`.

## Customize

Everything is in the `CONFIG` block at the top of the script in `index.html`, plus the `:root` CSS variables:

- size, speed, colors
- how rare the scratching is: `attack.cooldownMs`, `tubScratchChance`, `tubScratchCooldownMs`
- how often things happen: `toyEveryMs`, `poopEveryMs`, `momEveryMs`
- how messy a closed litter box gets: `messEveryMs`, `messLifeMs`
- your own photos: `img: 'benji.png'` on a cat
- shortcut keys: `SHORTCUTS` at the top of `main.js`

## For Bebe, Benji and Lamine

Be good. Be fast. Be loved.

### Cat icon on the launcher (Windows)

A `.bat` file can't have its own icon, but a shortcut to it can. Double-click **`make-shortcut.bat`** once: it puts a **Bebe Benji Lamine** shortcut with the cat icon (`icon.ico`) on your Desktop. Use that shortcut to start the cats.