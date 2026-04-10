'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "56d6deb8a8d73510f4a41e8ffa738510",
"version.json": "46bd4c6bc60f13065bed88bdb77f047d",
"index.html": "615a326f7b03e70d0647a951c0ef8ad1",
"/": "615a326f7b03e70d0647a951c0ef8ad1",
"main.dart.js_35.part.js": "da7781406b9a0762010f874b8fb78712",
"main.dart.js": "2dad5d1c41ad8a3e19c2c93dd40030fc",
"main.dart.js_27.part.js": "3c30f9cd92cc35e7af6e28ecc3a67ff1",
"main.dart.js_37.part.js": "d8a516597f59e7ea2dd454e4d01385aa",
"main.dart.js_19.part.js": "98efe8b5a4dbba92a9619489d62b6e3f",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_32.part.js": "1ea0a30fadd75d6365c63ade957431d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7fbfe8e368cf9b21ecb6832b12d7d7ba",
"main.dart.js_1.part.js": "6998da69f2a81b612c6951dedb675908",
"main.dart.js_39.part.js": "1c7f6469c8409523fe4eb1fdfe2987be",
".git/config": "79ddd53cf90f3fca1c08d375699dd36d",
".git/objects/92/9449bf6708de44c3e3f577299ed34586455339": "cf0a6089d08decfd71d848cbba5ae3be",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "3c24beda8934089abe683b76407275e2",
".git/objects/3b/27e3b6b8173f77cc16af369ebcd8354ccac362": "6bb6d1b66f7031edfea1f39611f806c3",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "d5b53893e487b0e0598767bdfa152c68",
".git/objects/69/52f0474d9c8d03ac58a3c099dfbfa1f4f5c563": "e38eb2122c42a271f2515621e019fbcd",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6be97a3aee3d1795de26791e379fd29a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "7e5ba8f738d75889dcd37da0448a5139",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "474ecb97332ad8a51c5c988b7240824c",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "3526b7786e626dc58a540e502a5148be",
".git/objects/a4/5c36adfa3685898e6e6bf52086f194a0314745": "8543ab80938089a279e286eb29eb941c",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "c6669c166b9c961d1f73e8fd803d278f",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "43dd11678fe22150030857d5df00b65f",
".git/objects/ad/6c525d6a50d3c89a9b5500e9fef06ea0811d08": "5ceb9a8c4d53a56d48c651d12a28e909",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "a9f9d9c4b9e661795fc062e2d935790c",
".git/objects/be/abaa0aaf2292b52e831953fff395ab901aff9e": "3d50720f46638cec32d1ea2d1df39c11",
".git/objects/df/6ed1fd823a1a9bb27dc3a37ce5f9a53bbf50a4": "48ac0426732dcf9b106e25c4208f7294",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/ae/497f6d0a2608e5a1487681370cb0ee76e019cd": "158c21d0c6eaa9a9db6d09408acbb06c",
".git/objects/f4/bc6140848a6fefdcf44e81e7a083be7b8df0c0": "35eb5b802c4ecc268cf62146b0f5f32d",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "ce1c01cde114ad0ac0eecd7108616ab7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/fc/f09aa7b40d897b2c911e9b3a44635054aff46e": "19704735f358e09d7fe1d54ce7e7785d",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "bd4038685c1a520af71b01ecbb966b21",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "db8c57f684c1c1d7e3892a31f31bd1ff",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "fbce87773778e88277d17800aea7a546",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "5c89e7bced5cf173347626437d1f7824",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "05e2bbfe72475e26c1cc45c40a813fef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/88/52d3cd0a9cda99f015d92e88ebcbea8ee02bb6": "30c55c45edb1c7aa8629cc1474f60bd5",
".git/objects/9f/085f93150a48adaa60321cf40d05c5d40fadd5": "f9eb17421f406e4a771fe12c0327fe74",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "fae60530fa427e7dee065140e85f4339",
".git/objects/00/68e5ba08e4e6e707c378bec053beb7d4d83a35": "dd2c1d7b505f85c9c870f5f0b0e5e802",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "7c379031763aba1a13de44e032ddc846",
".git/objects/3a/e27dba834e54ed9e426268b8d2401b46d90eac": "36a68fc195aa400ed59912684a8dc7ca",
".git/objects/37/4c6135ae428f06473d1ef4bcc292abe09a6d3a": "46679ba539f117dba52f3f6bedc235ef",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "c02afaa272724b99f01c41745372442f",
".git/objects/6c/ab7ed21011f534b76062404c101930d4f2c908": "6c476979cdbf1afb9f495ac3cd8bac6e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/a0/3b45e71041762eb400aaa943e54c2253d5bdb5": "de0c28ea1d3bab1c4613395bf8a42102",
".git/objects/b8/dea26cb580a4cb3bf79d44c3916a1ed30c835c": "cf5c7c1f5671233027b8f7cb55c23da8",
".git/objects/d5/2d9f7f2900978dfb33f985b019e0c54b0c8fee": "d306ed795269a3bb9a2888b56bdea6bf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "b38fa4f2a4e02941295eb2c80545dd1f",
".git/objects/a1/4987b5821a84c0cbec01b1da7d1311d096e345": "8e9f6604b90814ad12da423ddb7d654c",
".git/objects/c3/3aaa5b511f538ab8bdfff0a2a4f1166e23933c": "c8fdb283a95b361c666775bc9a5db472",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "bc30fe0f553add7a7ec829d444219f8a",
".git/objects/fa/14f8c53378f5fbaf87fee55c5085ad8ff992b4": "a5f3746e25e645dbcac5c364fac8b106",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "d5993ffdb09925e31560dbe661743816",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "1dfabeb9b2b507b75367586cb7fb284d",
".git/objects/cb/ab2475ae72f1761121d3299d515b2a1fdf232a": "db9a52bdaa041d075b078aebe5233fdf",
".git/objects/ce/68e91947d3d6bf9869873c145a4aec84c0c0d1": "d40fab5aae062b0096c722e5eed74dfb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "4b82e8a451138284a42647b622432b38",
".git/objects/8d/c36cd0b79cd927fd4d8d57c314ab77cef56080": "80df392c87ec0bd716c6de9d225993d2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "ca3dbdfefb5e1bba497bf59757fb3ad4",
".git/objects/2e/9fb4a7201c3b7d88a3b224989cbb565a28a4be": "38f505153baed6596fb7f52bd3df76c4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "670134b9c0c969edb7250a9356ce1892",
".git/logs/refs/heads/main": "670134b9c0c969edb7250a9356ce1892",
".git/logs/refs/remotes/origin/HEAD": "f0c10028a0dfa19b5c5b6ddc09f9d6d4",
".git/logs/refs/remotes/origin/main": "7ed65b386b87df07669a2fb229617f49",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "684bbd630d8563fd018a063725b66423",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "684bbd630d8563fd018a063725b66423",
".git/index": "ae67f538cde4dfe7dce6e2baaed20d7a",
".git/COMMIT_EDITMSG": "9a8ad92c50cae39aa2c5604fd0ab6d8c",
".git/FETCH_HEAD": "4ca442f94dc8c5cfce173953e59cda24",
"assets/NOTICES": "71b2e135b9e207d7f77030441c8ea16f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6a97472d2e4282f757172df93df01f",
"main.dart.js_38.part.js": "e427c495d01d1cd02e6cbaa22fad6018",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
