# GDevelop Open Game
[![GitHub stars](https://img.shields.io/github/stars/GDevelop-game/GDevelop-Open-Game.svg?style=social&label=Stars)](https://github.com/Gdevelop-game/GDevelop-Open-Game/)
[![GitHub forks](https://img.shields.io/github/forks/GDevelop-game/GDevelop-Open-Game.svg?style=social&label=forks)](https://github.com/Gdevelop-game/GDevelop-Open-Game/)
[![TOP.GG Badge](https://discord.com/api/guilds/723151718283477042/widget.png?style=shield)](https://discord.gg/PVET9HJ)
[![Auto Build](https://github.com/Gdevelop-game/GDevelop-Open-Game/workflows/Auto%20Build/badge.svg)](https://gdevelop-game.github.io/GDevelop-Open-Game/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/N4N61UP36)

A community-made **3D open city sandbox** built with [GDevelop 5](https://gdevelop.io).
Walk around a living city (traffic that stops at red lights, people walking the sidewalks and crossing the streets), jump into any car, walk into houses and shops, and collect all the cash.

### Trying the game out

The game is automatically built on every commit to master. Play it here: [GDevelop Open Game Preview](https://gdevelop-game.github.io/GDevelop-Open-Game).
Desktop builds (Windows, macOS, Linux) are attached to each run of the [Auto Build workflow](https://github.com/Gdevelop-game/GDevelop-Open-Game/actions?query=workflow%3A%22Auto+Build%22).

| Action | Keys |
| --- | --- |
| Move | WASD |
| Sprint / jump | Shift / Space |
| Look around | Mouse (click the game to capture it) or arrow keys |
| Enter / exit a car or building | E |
| Pick up a blaster / shoot | Walk over it / hold left mouse button (not while sprinting) |
| Drive / handbrake | WASD / Space |
| Back to the menu | Esc |

### Working on the game

* Open `src/game.json` with **GDevelop 5.6** or newer.
* `Title` is the menu, `City` is the open world and `Interior` is the inside of a building.
  Events shared by both game scenes (on-foot movement, camera, money HUD) are external events
  (`OnFoot`, `Camera`, `Hud`) linked from each scene. `Player`, `Cash` and the HUD texts are global objects.
* Each house and shop in `City` has an invisible `DoorZone` covering the building plus a small margin: standing next
  to the building lets you enter it. The instance variables
  `Layout` (the external layout to load: `Home1`, `Home2`, `Home3`, `Diner` or `Grocery`) and `HouseId` are fixed
  in the scene, so the same building always opens the same interior. Cash collected inside a building is remembered
  in the global `InteriorCollected` structure. To add an interior, create an external layout for the `Interior` scene
  with a `Doormat` (exit), a `Player` (spawn), one `Cash`, and invisible `Collider` cubes for the floor and walls.
* Blasters (Pistol, Rifle, Cannon, Shotgun, Sniper, Minigun) are in the `Guns` group of `City`. Their stats are object
  variables (`FireRate`, `Damage`, `Spread`, `Pellets`, `BulletSpeed`, ...). The HUD icon is the `WeaponIcon` sprite: one
  animation per blaster, named like the blaster object.
* Traffic and pedestrians are driven by the JavaScript event in the `City life` group of `City`. Cars (the `Cars`
  group) follow the lanes of the road grid, turn at crossings, stop at the traffic lights and for anything in front of
  them; pedestrians walk around each block and cross at the lights. `CAR_COUNT` and `PED_COUNT` at the top of the
  script set how many there are (extra ones are created at start). Street furniture (lights, trees, dumpsters) uses its
  own physics layer, so pedestrians walk past it while cars and the player still collide with it.
* The city is built from [Kenney](https://kenney.nl) 3D kits (CC0); see [`src/assets/CREDITS.md`](src/assets/CREDITS.md).
  Kenney `.glb` models reference an external `Textures/colormap.png`; embed the texture into the `.glb`
  before adding a new model, or it will render without colors once exported.

### Building without the editor

```sh
cd build
npm ci
npm run check            # verify every resource file exists
npm run build            # HTML5 export in build/gdExport
npm run electron-build   # Electron export in build/gdExport
```

The GDevelop version used for exports is pinned by the `gdcore-tools` version in `build/package.json`.
To move to a newer GDevelop, bump that dependency and run `npm run migrate` to resave the project in the new format.

### Contributing

Thanks a lot for your interest! Join our [Discord server](https://discord.gg/PVET9HJ) and read [CONTRIBUTING.md](CONTRIBUTING.md).

* [GitHub project board](https://github.com/orgs/Gdevelop-game/projects/1/views/1) for the work being planned and done.
* [Issues](https://github.com/Gdevelop-game/GDevelop-Open-Game/issues) for bugs.

## Other links

* [GDevelop forum](https://forum.gdevelop.io) and [Discord](https://discord.gg/gdevelop)
* [GDevelop documentation](https://wiki.gdevelop.io/gdevelop5/)
