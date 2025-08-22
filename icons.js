const uiElem = document.querySelector('.icons-ui');
const listElem = document.querySelector('.icons-list');
const searcher = document.querySelector('input[name="searcher"]');
const inverter = document.querySelector('.inverter');

let searchTerm = "";
let UiIcons = ["add", "air_tank0", "air_tank1", "air_tank2", "air_tank3", "air_tank4", "air_tank5", "alert_edit", "ammunition", "arrow_right", "authorize", "backpack", "bite", "bleeding", "blueprint", "blueprint_underlay", "blunt:blunt_0", "boosts", "boosts_bright", "bp-lock", "broadcast", "brush", "build/stairs", "build/wall.doorway.door", "build/wall.window.bars", "bullet", "cable", "cards", "cargo_ship_body", "cart", "change_code", "check", "chevron_down", "chevron_right:chevron_right_0", "chicken", "chinook_map_blades", "chinook_map_body", "cinematic/film-reel", "cinematic/film-slate-clapper", "circle_closed", "circle_closed_toedge:circle_closed_toEdge", "circle_closed_white", "circle_closed_white_toedge:circle_closed_white_toEdge", "circle_gradient", "circle_open", "circle_open_thick", "clan", "clear", "clear_list", "close", "close_door", "clothing", "cold", "community_servers", "connection", "construction", "cooking", "crate", "cup_water", "deauthorize", "demolish", "demolish_cancel", "demolish_immediate", "descend", "device_add", "dir_left", "dir_right", "discord", "discord 1", "download", "drone", "drop", "drowning", "eat", "electric:electric_0", "elevator_call", "elevator_down", "elevator_up", "embrella", "embrella_bright", "enter", "equip_hood", "eraser", "examine", "exit", "explosion", "explosion_sprite", "extinguish", "facebook", "facebook-box", "facepunch", "fall", "farming/icon_age", "farming/icon_genetics", "farming/icon_ground", "farming/icon_light", "farming/icon_overall", "farming/icon_stage", "farming/icon_temperature", "farming/icon_water-intake", "farming/icon_water-saturation", "farming/icon_yield", "farming/white:White", "favourite_active:Favourite_active", "favourite_inactive:Favourite_inactive", "favourite_servers", "ferry", "file", "fire", "flags/af", "flags/ar", "flags/ca", "flags/cs", "flags/da", "flags/de", "flags/el", "flags/en", "flags/en-pt:en-PT", "flags/es-es:es-ES", "flags/fi", "flags/fr", "flags/he", "flags/hu", "flags/it", "flags/ja", "flags/ko", "flags/nl", "flags/no", "flags/pl", "flags/pt-br:pt-BR", "flags/pt-pt:pt-PT", "flags/ro", "flags/ru", "flags/sr", "flags/sv-se:sv-SE", "flags/tr", "flags/uk", "flags/vi", "flags/zh-cn:zh-CN", "flags/zh-tw:zh-TW", "fog:fog_4", "folder", "folder_up", "food_cooked", "food_raw", "fork_and_spoon", "freezing", "freezing-white", "friends_servers", "fun", "fun_alt", "gear", "gem", "gem2", "gem3", "gestures/gesture_rock-paper-scissors", "gestures/gesture_rps_paper", "gestures/gesture_rps_rock", "gestures/gesture_rps_scissors", "gestures/gesture-beat-chest", "gestures/gesture-clap", "gestures/gesture-cut-throat", "gestures/gesture-double-middle-finger", "gestures/gesture-eyes-on-you", "gestures/gesture-finger-gun", "gestures/gesture-frame", "gestures/gesture-friendly", "gestures/gesture-hurry", "gestures/gesture-knuckles-crack", "gestures/gesture-loser", "gestures/gesture-middle-finger", "gestures/gesture-no-no", "gestures/gesture-ok", "gestures/gesture-ok-2", "gestures/gesture-point", "gestures/gesture-raise-the-roof", "gestures/gesture-shrug", "gestures/gesture-shush", "gestures/gesture-shushing", "gestures/gesture-shushing-2", "gestures/gesture-silly-dance-1", "gestures/gesture-silly-dance-1-alternative", "gestures/gesture-silly-dance-2", "gestures/gesture-silly-dance-2-alternative", "gestures/gesture-thumbs-down", "gestures/gesture-thumbs-up", "gestures/gesture-victory", "gestures/gesture-watchingyou", "gestures/gesture-wave", "gestures/gesture-wind-up-middle", "greyout", "greyout_large", "hand-looting", "handlebar", "health", "heart", "heart-white", "history_servers", "home", "home_bright", "horse_ride", "horse_ride_2", "hot", "hurry", "icon_clear", "icon_firework", "icon_firework_disabled", "icon_map_traveling-vendor", "icon_map_traveling-vendor (2)", "icon_map_traveling-vendor_alt", "icon_pixel_camera", "icon-locked", "icon-map", "icon-patrol-helicopter", "icon-submarine", "icon-unlocked", "icon-water-1", "icon-water-2", "icon-water-3", "icon-water-4", "icon-water-5", "icon-water-6", "icon-water-7", "icon-water-8", "ignite:ignite_0", "info", "input", "instagram-logo", "inventory", "isbroken", "iscooking", "isloading", "isonfire", "joystick", "key", "kick", "knock_door", "lan_servers", "level:level_0", "level_metal", "level_stone", "level_top", "level_wood", "lick", "light", "light_campfire", "lightbulb", "lightbulb-white", "link", "link_break", "loading", "loading_white", "lock", "loot", "lungs", "map-tunnel", "maparrow", "markers/marker_a", "markers/marker_b", "markers/marker_c", "market", "maximum", "meat", "medical", "menu_dots", "modded_servers", "nextframe", "no_sleep", "no_spawn", "occupied", "open", "open_door", "ore", "output", "oxygen", "palette", "peace", "pet_assist", "pet_combat", "pet_destroy", "pet_follow", "pet_guard", "pet_idle", "pet_move", "pet_pvp", "phone", "picked up:noun_Download_1015668_0", "pickup", "picture", "pills", "player_assist", "player_carry", "player_loot", "plug-off", "plug-on", "poison", "poof:poof_0", "portion", "power", "premium_background", "premium_facepunch_icon", "press", "prevframe", "radiation", "rain", "reddit", "refresh", "refresh_filled", "remove_cuffs", "remove_hood", "resource", "rf_on", "rocket", "rotate", "rust", "safe zone:safe zone_0", "save", "security:security_0", "shadow", "shrug", "sign", "skull:skull_0", "slash", "sleeping", "sleepingbag", "square", "square_gradient", "square_gradient_sliced", "stab", "star", "steam", "stopwatch", "store", "study", "submarine0", "submarine1", "submarine2", "submarine3", "submarine4", "submarine5", "subtract", "swing", "target", "terrain", "throw_back", "thumbsup", "tools", "train", "translate", "traps", "tree-fire", "triangle:triangle_0", "triangle_white", "tweeter:tweeter_0", "twitter", "twitter 1", "unload", "unlock", "upgrade", "victory", "voice", "vote_down", "vote_up", "warning", "warning_2", "waving", "weapon", "web", "wet", "whoa", "workshop", "xp", "yt_icon_rgb"];
let uiWhiteIcons = ["blueprint", "backpack", "boosts_bright", "chevron_down", "circle_closed_white", "circle_closed_white_toedge", "embrella_bright", "eraser", "farming/icon_age", "farming/icon_genetics", "farming/icon_ground", "farming/icon_light", "farming/icon_overall", "farming/icon_stage", "farming/icon_temperature", "farming/icon_water-intake", "farming/icon_water-saturation", "farming/icon_yield", "farming/white", "fire", "food_cooked", "food_raw", "freezing-white", "gem", "gem2", "gem3", "hand-looting", "heart-white", "home_bright", "icon-locked", "icon-unlocked", "icon-map", "icon-submarine", "isonfire", "lightbulb-white", "loading_white", "map-tunnel", "ore", "output", "picture", "plug-off", "plug-on", "rf_on", "train", "tree-fire", "triangle_white", "icon-water-1", "icon-water-2", "icon-water-3", "icon-water-4", "icon-water-5", "icon-water-6", "icon-water-7", "icon-water-8", "input"];
let tiles = ["greyout", "greyout_large"];

window.addEventListener('DOMContentLoaded', () => {
    drawIconTable();

    listElem.addEventListener('click', event => copyAssetPath(event), false);
    searcher.addEventListener('search', event => searchAssets(event), false);
    inverter.addEventListener('click', () => uiElem.classList.toggle('invert'), false);
}, false);

function searchAssets(event) {
    searchTerm = event.target.value.trim().toLowerCase();
    listElem.innerHTML = '';

    drawIconTable();
}

async function copyAssetPath(event) {
    const target = event.target.closest('div');

    if (! target.classList.contains('file-path') ) return;

    const selection = window.getSelection();
    const range = document.createRange();

    selection.removeAllRanges();
    range.selectNodeContents(target);
    selection.addRange(range);

    try {
        await navigator.clipboard.writeText(target.textContent);
        target.classList.add('selected');

        setTimeout(() => { target.classList.remove('selected') }, 2000);
    }
    catch(e) {
        console.error('Failed to copy text: ', e);
    }
}

function drawIconTable() {
    const fragment = document.createDocumentFragment();

    UiIcons
        .filter(icon => searchTerm == "" || icon.includes(searchTerm))
        .forEach(icon => {
            [icon, file] = icon.split(':');
            file = file || (icon.match(/\//) && icon.split('/').pop());

            const elem = document.createElement('div');
            elem.className = 'file-path';
            elem.textContent = `assets/icons/${icon}.png`;

            fragment.appendChild(elem);

            const imgWrap = document.createElement('div');
            const img = document.createElement('img');
            img.src = encodeURI(`./icons/${icon}/${file || icon}.png`);
            img.alt = `${icon} icon`;

            imgWrap.appendChild(img);
            fragment.appendChild(imgWrap);            
        });

    listElem.appendChild(fragment);
}