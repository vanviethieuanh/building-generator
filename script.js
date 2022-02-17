const best = [
    'adventure',
    'avocado',
    'crimson-gold',
    'grenade-8',
    'nyx8',
    'st-8-blue-n-pink',
    'st-8-moonlight',
    'waverator',
]

const good = [
    'winter-wonderland',
    'gothic-bit',
    'purplemorning8',
    'justparchment8',
    'ammo-8',
    'coffee',
    'sunset-mkii',
    'slso8',
    'st-8-sapphire',
    'rust-gold-8',
    'godblood8',
    'saturated-gold-8',
    'custodian-8',
    'entomophobia',
    'st-8-halloween',
    'borkfest',
    'greenest-green-8',
    'citrink',
    'echo8',
    'spectral-scarab',
    'diamond-gold',
    'st-8-phoenix',
    'discord-8',
    'stale-sunset',
    'florast-8',
    'dreamscape8',
    'cold-war-8',
    'dreamhaze8',
    'oxyd',
    'retro-8',
    '8lueens',
    'petite-8',
    'tnr-8',
    'purblu-8',
    'submerged-chimera',
    'blue-glass',
    'petite-8-afterdark',
    'berry-nebula',
    'tank-palette',
    'blackm0ld',
    'cave',
    'hortensia-diamond',
    'smoke-its-ok-to-feel',
    'fishfighters8',
    'commodore-8',
    'izk-oasis-8',
    'chocomilk-8',
    'swamp',
    'basement-bio-chem',
]

const rest = [
    'nice-rabbit',
    '3bit-cats-melonyard',
    'miami-sunset-8',
    '3bit-catgirls-nish-cyra',
    'generic-8',
    'in-living-color-1962',
    'anomaly-b8',
    'clement-8',
    'rosemoss-8',
    'seafoam',
    'kinkan',
    'the-roarin-80s',
    'nostalgi8',
    'hag',
    'pc-88',
    'pico-4',
    'low-8',
    'arjibi8',
    'witching-hour',
    'matriax8c',
    '8-vision',
    'goosebumps-gold',
    'acronym-8',
    'channel-f-reborn',
    'rainbow-erosion',
    'greyt-bit',
    '1bit-rainbow-horror',
    'insecta',
    'natural-colour-system-8',
    'stella-saturn',
    '3-bit-rgb-perceptually-linear',
    'anomaly-rg8',
    'fluffy8',
    'chlnge8',
    'dead-weight-8',
    'rkbv-ii',
    'ween-8',
    'dawnbringers-8-color',
    'bloom',
    'afternoon-haze',
    'easy8',
    'argeebey-8',
    'armor-8',
    'scaled-and-icy',
    'existential-demo',
    'royal-monarch-viii',
    'pj-discord-collab',
    'old-sch8l',
    'oekakinl-8',
    'dialup-sunset',
    'legacy-colorblind-8',
    'equalrgb',
    'haretro8',
    'tritanopi8',
    'cave-rock',
    'soft-rainbow',
    'odd-feeling',
    'amaryllis-garden-8',
    'seagull-8',
    'pico-micro',
    'fruitpunch-8',
    'pollen8',
    'sobeachy8',
    'superb-8',
    'onebit-adventure-default',
    'poison-bubble-8',
    'mf-8',
    'fairydust-8',
    'melon-tree',
    'fairy-tales',
    'wednesday-pink',
    'ss-8',
    'sea-seaweed',
    'trick-or-treat-8',
    'a-horrible-death',
    'onebit-adventure-adrenaline',
    'organic-christmas-8',
    'paper-8',
    'crayon-paint',
    'usefle-8',
    'bit-unit-8',
    'atom-8',
    'junglecandy-8',
    'primary-8',
    'cl8uds',
    'deuteranopi8',
    'zaebucca-forest-8',
    'pigment',
    'cvd8',
    '3-bit-rgb',
    'jungle-8',
    'generic-8-color',
    'fantastic-8',
    'grayfruit8',
    'the-purrfect-crime-gamejam',
    'secam',
    'aj8',
    'sunset-8',
    '3-bit-cmy',
    'channel-f-v2',
    'amazon-8',
    'sriracha',
    'synthwave-city',
    'prospecal-8',
    'final-8',
    'deuteraruzi',
    'zombie-outbreak',
    'st-8-r-b-remake',
    'royal8',
    'melon-8',
    'tritaruzi',
    'onebit-adventure-sunrise',
    'washed-over8',
    'rkbv',
    'bauhaus',
    'amphibian8',
    'dream-haze-8',
    'primal8',
    'funkyfuture-8',
    'endesga-8',
    'dull-glow-8',
    'palette-of-marseille',
    '4pi',
    'westmost-8',
    'retrocal-8',
    'vibrant-banana-8',
]

function add_image(palette) {
    const imgSource =
        window.location.hostname === 'localhost'
            ? `/images/${palette}.png`
            : `https://${window.location.hostname}/building-generator/images/${palette}.png`

    // create div with background image
    const div = document.createElement('div')
    div.style.backgroundImage = `url(${imgSource})`
    div.style.backgroundSize = 'cover'
    div.style.backgroundPosition = 'center'

    div.classList.add('image-container')
    // add div click handler
    div.addEventListener('click', () => {
        const url = `https://lospec.com/palette-list/${palette}`

        // open new tab with lospec url
        window.open(url, '_blank')
    })

    // create text in div
    const text = document.createElement('p')
    text.innerText = palette
    div.appendChild(text)

    const gallery = document.getElementById('gallery')
    gallery.appendChild(div)
}

best.forEach(add_image)
good.forEach(add_image)
rest.forEach(add_image)
