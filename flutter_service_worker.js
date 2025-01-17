'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "40e4d75ccb7e76c7395bc0be81f2aa0e",
".git/config": "81d8a88af799219446f7bebe2062986b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b8e9815789dd51ad3d29d712c155b141",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ecd7289014bb2889d7738f0efb44b4b9",
".git/logs/refs/heads/main": "7e3fac30da2b974daa19339e49b8ca39",
".git/logs/refs/remotes/origin/main": "bb68ee9ec7ce3ea0b7461af3acdb870f",
".git/objects/01/769421073325eab1eb61a1a73a6bce27e7adcc": "ca00c189166d0fe758fb6085008d00eb",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/ad397f711657df2996c2718c514d29b4e033d7": "3befa9aeb0e5d36896ea301730fdaf7a",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0c/171e5bbc5eed956311d0a760705d85be920a20": "53cc42aa442d4d7850471fe5db684b16",
".git/objects/0c/4c233d688e4af81063981a5e607a1fb3e321a0": "522e8c7c34cf668abc521a95bb503070",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/30174268349cf6c8c69e918705449f38ea57be": "657e1831578cb1c7e7c300ef29dbca8e",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/13/08e6407f9c91f6b16eb2d45707be36917d4f0b": "6dbb7586a3981b77218d39eaabfe8549",
".git/objects/16/4ec5da946c1b71a4fd2c75dcb659429cae6dc4": "d2e5455ec3fd7f0d9c46b929d89091f4",
".git/objects/16/e3edcd14e7e4a5893a38562e1de8152bf41729": "48471c7bcc3094eb3384c4e1948d2d25",
".git/objects/19/614390ab45bb14ceeb78e7c15ad40d13e96462": "3e8fca4032fb328c865dd3405a8c8d6f",
".git/objects/1a/f5a0b49bce8b491832d0939e2fa681d86ea801": "0e17987af3af9bdfcd07ed0c712e28fc",
".git/objects/1f/38a71265dfd3642acef626efa68a001019752f": "a96c2c27bf389c7005ce5dc9752cb670",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/6602d2f90549f2b55e65668fa59a9ccf63ed30": "da774281e9d18dd810d7ebaf97bd7a85",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/2dcad2bd2b9240f1e625617d22fcd497dccb37": "656b68cdd3776213d0b6a71ae3b24845",
".git/objects/2d/452383651a6ef279743a9926b90234b8b79366": "c509d556b2a9b17abfe6a4b405457ff8",
".git/objects/2f/a652dfb4775a7a4385db491ce559ece3aea7da": "3ee0c1a954010669888e7ac611ebc56a",
".git/objects/32/23ebae9d3b4a4f39daf40d07ad7ed6d144aaa8": "52f029e2716276cff32efceabf66074d",
".git/objects/32/2d507f87f795eed9fa412aadc0df6bcaa5a80d": "9e8a2b4f2c236bf3e9bf1ef7515e10f8",
".git/objects/34/ef9dfdcfeaad74175c8ad8031987d029d645d1": "22dba3b80aaf39b2ddac7baa81697381",
".git/objects/35/267989deca17116c70c987e90035303e2e3404": "50c87c2481cc197e8d549e03b7ac507c",
".git/objects/36/4e0d7cecc8f66a6b1245b2f9c5d269d39996a2": "9f0eba2b37837ba49d86989851bc8457",
".git/objects/38/b0603928d2d386fb702057a145f0e5aa5a8032": "9df8fb9742a79b8a15f82aba56048a7f",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/d53fcea642ba0afa9161b2fd04fa2fa14257f4": "917561d5c843b2067222416fc8a8a092",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/559cc6aa5425ecd0e3c615231ceb24f41168d3": "163f3f2a1fc57936e18b62f343f4188a",
".git/objects/4c/b91f58ebe344189f425dc9e8d6fa7da39b1bd0": "fada5fc7ce3fb4cb9eab69c9bae3d46d",
".git/objects/4d/be48b9339ac1547ae1966bb0cd08726408b489": "d0c32ad3560c9bf8a6be3d30cc9a440a",
".git/objects/4e/77a7e0fefe1ea2749a370a21b0be49d7dfdc96": "5ceabcc292a8536e0919ec8fa5c76e09",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/57f8735f483b2f37e79f863b8f3b3a1f7f48fd": "212cecc0e63a225fecf9b8fb5555d296",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5d/20c80cfa77916f0892215548d8bc8bdf3e2432": "8ddef70c0bc61d9ca6f53b1ecb88c788",
".git/objects/5e/eb79000aa537e317e82fb7d1776fb4ac8ceb8e": "3b8525ae3ca9552b31af5c0572c780c8",
".git/objects/64/753f3bd9c85a19d0af9f2141c58551c54049ed": "268d761eb58f7bdb1e71e100e3e255c2",
".git/objects/6e/34b43263a7e4c0a994b5a180ff7a2ffe513950": "b9104495870c91ba630ca1e0193fb6b6",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/76/46f12d0a54325e794e16d54fd259c67a1c0634": "5368e108c5711a20930164c23f3adb70",
".git/objects/7a/931cce6e3f8febcfe5e35ee1bbccad30b0c1fb": "679d10623dfe9dcbe0020b8299a636ee",
".git/objects/80/4f09f7e9ea79ac279896f96987d26514168537": "2f093406fc32bf164469c3044b1d67d6",
".git/objects/81/7dc21384cc6935bd6edbfb1fa9672d2d0e6f37": "c50867e2c8acfc84a97581d5d87444b9",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8f/d92941f59bcdab316f35bb1c6c541c4ada8c1c": "41c92cce0871c41ad06a1db714b3631d",
".git/objects/94/1bb18ec8e891c90220e90820664e01dbb3fa1c": "15f6aba73553ef6b5dd200aec39694df",
".git/objects/94/7f53cb0df7a44e0971aab27796cf1da843ebc3": "634b951bba6e421aa0d08879d69a958b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/476b16aa84fdee337a1fcb57b2ac0859838632": "624f3214c7375d5b3b2c8949bcd1fde8",
".git/objects/a5/7cc4518601cfc4b8d3a64877c0516dfccc0de6": "391e1096105c5b4ec079ed580c6240a4",
".git/objects/ac/8bf6f583250de4b51e87aa6c9a0f2d13f3a9f3": "143f44c2f70e92562c3da58f82f17557",
".git/objects/af/2baae9075b90f46c7626df74844782e9c14cf8": "1ebfef1ec099400e98d2d3a66f0a61e0",
".git/objects/b0/80a20bd6195b9da3244b217847d1130e211cc0": "08de91d9815a078c7b4a4b24ca6f9f67",
".git/objects/b0/a9433c19e26c6d50f61cb38912156d2f9a8b2f": "5972db8ebaa74e92a765079770e94d21",
".git/objects/b1/2048c144d95056ec802f6becb6d13344f1ca84": "352c158480db3e19e6157f5fabf34a24",
".git/objects/b1/537f34b25363334933a79743bdedf07e52ef69": "107a40d000c0f7e299a0150771ed7806",
".git/objects/b1/972ff1bdf0cc2f26daa5d6120d2589c3552d79": "5a66c0c10d6173d0a4ff7c5fba42ffa3",
".git/objects/b4/0f6861c7f2540066ecafcb2e97e3ac39b363c4": "04a9c83852f1acdf73d97337b9815598",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f5010f04291866deb816ff7b43456ab1a1ec41": "946dcc33dfb2b3235937cdcf4e51237a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e2682efd7adadd1a94a8f6e1667953c26369ab": "da006964018d64a3f4cc354068cffcb7",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/93454681b497f1326d2e7a920ce1e8a7cb2742": "ff669f53ac5f9a4a9dbfa80b127f6700",
".git/objects/bd/d202bdfac50ada407ee66e426381b25a15bab6": "9551c3ee4f31db21745c52c3cf9dacf2",
".git/objects/c0/b079a9e3bc5e00ce95216d59e1924e85fb0ae7": "e7b3edcb4d40a4c97edf09f9e3c07db8",
".git/objects/c0/caf12cc37d3bd858c5e2db679923b483677d54": "44e33d0e3d1b4f05b7b6eff9f5fe5d54",
".git/objects/c3/3cb35ebd538b5d3dae3658710d313e0beacc03": "3ffc1288b714a1f7513424343253824f",
".git/objects/c9/3fe734189d08821f3f684074ac58e2e277449b": "e1c9e11c9505db99ee241e0d0945a51f",
".git/objects/cb/cc88fcfeed31e1d290667cc6628d9d67a9ae3a": "a1f9a372f7381d93a3055a70ed47474b",
".git/objects/cc/06a77e534046bdeaaf355ca844f5e00ea1d919": "cb1cfca94678efeb82a1d64995ace4e8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/9c8eef22a66e0252a02820b19dd7695fa8b23c": "09ec9f5a39286cd38e87da7c66397ad9",
".git/objects/df/41bf9bc20730b31119eb2a539525c6d2e94e35": "0136a5e1d929f36304682694e2bed1a7",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e2/da0be2dd7f904b7ff73d90f9c1ead5899c185f": "9abd7feae8543a8d9f5151918fc0c8b0",
".git/objects/e3/0cc907feeb16aa78a1e6459999a48a66cc813b": "5fe5270840f5e7851733fd59e32ee7b6",
".git/objects/e3/e0b3f416c0c691e26d0b2ebf0d82988ce42b10": "6692f3ad443888518e61c027b3212782",
".git/objects/e4/a3098b9367c487c71cc4385117a8eb968fa297": "775f2d8da179aab288036d36e4cda5e6",
".git/objects/e5/2545ae9a37ee32bc2acf0f40b686d516b2cd2c": "349565c0042be95ff14c1704e8620ce2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/d453c7eb2a065cb717b0dc6a3cf0064f9d154c": "92bca3e76ebde3b4a8ae892c858542d3",
".git/objects/e9/baef6f3056c331463fd64202fbbf989026cbff": "ffaf3e677a29d9e9db7470c388c3dc2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/bfab0b2b38115f4dab586773d66bf48d0fbb4f": "4eb872171cc7b7960027b5661826b09e",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fe/96e5ffd4f5120c6ac74f37b73de12cd965de25": "d94ee3511aefb56263dab337d18252d9",
".git/refs/heads/main": "b3f33b88469543f60153c3798d7eb5b1",
".git/refs/remotes/origin/main": "b3f33b88469543f60153c3798d7eb5b1",
"assets/AssetManifest.bin": "3947ee1a629a379e56923e788a13c704",
"assets/AssetManifest.bin.json": "027d8f78b2aaf7330f5a892e29be1df8",
"assets/AssetManifest.json": "989bf3bf42a0f7212b62603639707588",
"assets/assets/audio/MarryYourDaughterSaxCoverbyDesmondAmos.wav": "f6ce19ad93f6f3d9795481d30d2fa948",
"assets/assets/fonts/josefin_sans.ttf": "74ae0793945e421d248fe27905c248a3",
"assets/assets/fonts/Roboto-Black.1224b64.ttf": "5ebb24ee1112dd9562629375c387879a",
"assets/assets/fonts/Roboto-Light.0cea398.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/Roboto-Regular.03523cf.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/Sacramento-Regular.5bd7d52.ttf": "0c8e69ac621ffbdfdb997bef9b5aa312",
"assets/assets/images/background-invitation.jpg": "da3249e379196431efb6d39ff43c9993",
"assets/assets/images/Mayang&Alan.jpg": "1dd8ea9fdbd20c38a53543af37531e8d",
"assets/assets/images/Mayang&AlanOriginal.jpg": "8fd452d43a382c6389bf8f1505af3727",
"assets/FontManifest.json": "f73f99faee3d4565c1c6b1673cea3abf",
"assets/fonts/MaterialIcons-Regular.otf": "1e7f13a2fb7759a5d11d752d19f2863b",
"assets/NOTICES": "3a365376b413f118e3aeea65ecf3a65e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5faa2d5e49c1fc2573ba4eb5c5b6b2fd",
"/": "5faa2d5e49c1fc2573ba4eb5c5b6b2fd",
"main.dart.js": "0c2c2a6adbf0b49df40ba58e9636500d",
"manifest.json": "8acdf6330236cbdb29401dbb869eda1e",
"version.json": "3d0a8b3e454aa8006e8b32fefcd8e5e3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
