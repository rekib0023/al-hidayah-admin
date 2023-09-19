'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6d649e8f8fc3dfc001431b2ac990eb65",
"index.html": "101a0719a5381ae446a4f420656e2f0d",
"/": "101a0719a5381ae446a4f420656e2f0d",
"netlify.toml": "18c7e18c3e2fba772e30bc8a29ace0d5",
"main.dart.js": "1c0caafe4c6fc8a4d1190f58dca9ada1",
"node_modules/proxy-from-env/test.js": "3702f1a9c2c8437afff623cfaf4d000c",
"node_modules/proxy-from-env/LICENSE": "1dd031451af4b09bc10b26b0c06141e3",
"node_modules/proxy-from-env/index.js": "5570ebb534f6861884c6a8819a8838d7",
"node_modules/proxy-from-env/README.md": "abb6fb47211be097ee2ce38adb110485",
"node_modules/proxy-from-env/package.json": "139513ecf001aebc9b79a839274a30ca",
"node_modules/combined-stream/License": "5270b4ddb6700d0a820e6d066744589c",
"node_modules/combined-stream/Readme.md": "e9a68fc87c40dd4aecf43ac474172437",
"node_modules/combined-stream/yarn.lock": "52aa85a4b8b2b0e28a2e4b4cdb85075a",
"node_modules/combined-stream/package.json": "089f95f5df2908028bdbbe545ad5c0e3",
"node_modules/combined-stream/lib/combined_stream.js": "3c61efa65d157bdd549e80b01996bf98",
"node_modules/mime-types/LICENSE": "bf1f9ad1e2e1d507aef4883fff7103de",
"node_modules/mime-types/HISTORY.md": "3b127a94f2041a03de29b24e7b927e26",
"node_modules/mime-types/index.js": "bf015bb6811afc5c98e3e5f7072fdc79",
"node_modules/mime-types/README.md": "df3aeb2c1cb5f39d454082eadd3f2a5f",
"node_modules/mime-types/package.json": "7ad9a6119e3173ea667f1409fefba992",
"node_modules/form-data/License": "7aa505292e2636a9e59d4d3f258f4819",
"node_modules/form-data/Readme.md": "3dc46300673358629f1f35acef5b75e4",
"node_modules/form-data/README.md.bak": "3dc46300673358629f1f35acef5b75e4",
"node_modules/form-data/package.json": "00dcee6f56b694a2ac0c60d509cfb152",
"node_modules/form-data/lib/populate.js": "34084f573649bd73957749e20ebd836b",
"node_modules/form-data/lib/form_data.js": "443b7691090d55170b7688cd5a7a5767",
"node_modules/form-data/lib/browser.js": "2e4a0786e53b6425f5308b30aee55070",
"node_modules/form-data/index.d.ts": "c820b860496dcac5ad4258d51613b837",
"node_modules/delayed-stream/License": "5270b4ddb6700d0a820e6d066744589c",
"node_modules/delayed-stream/Makefile": "2b7e37132783630198c6412cfe05a00d",
"node_modules/delayed-stream/Readme.md": "2c3c881a04d01517d8c63e7130081b0c",
"node_modules/delayed-stream/package.json": "cd5e299bb3405995d7e81ead42d4949d",
"node_modules/delayed-stream/lib/delayed_stream.js": "d8c899096c0578def5eae6c3e0aecdd2",
"node_modules/asynckit/stream.js": "386a88b324ec8d86b98edf4b6ad8e525",
"node_modules/asynckit/LICENSE": "177bc287fb9558bf3ea50b440c1c86ff",
"node_modules/asynckit/index.js": "80916e2018297eac89a0765e9300ba11",
"node_modules/asynckit/README.md": "dc78573e1426b4686546a9a0e3dc123b",
"node_modules/asynckit/parallel.js": "8e9711405f57ee77900c24617a3e38e6",
"node_modules/asynckit/serialOrdered.js": "0d9701de983d5a5f16a9bcb06842fc0f",
"node_modules/asynckit/package.json": "e1fcbbcbd664b4b2966883624fbad801",
"node_modules/asynckit/lib/abort.js": "884f70260b904535b3b46bca66d3901f",
"node_modules/asynckit/lib/terminator.js": "e52843ca824d4c5cf5bec5f4ec80fce0",
"node_modules/asynckit/lib/iterate.js": "2f5c56d8b3f766e65f8868c9a77d4233",
"node_modules/asynckit/lib/readable_serial_ordered.js": "535bbfb2aaec7fd8b19ded7a053fc8ee",
"node_modules/asynckit/lib/readable_parallel.js": "7e31bd9c72421785a2f962cca13a0dc1",
"node_modules/asynckit/lib/streamify.js": "8eac398eeebd8f79fee94dc88c1fb5e9",
"node_modules/asynckit/lib/readable_asynckit.js": "0d8b205f6525fb75a2f00febc0a39ec8",
"node_modules/asynckit/lib/async.js": "336705ea47367dfb6c0048d7c28cf0b5",
"node_modules/asynckit/lib/state.js": "f753a1520562c93ad8a284fbe837f2de",
"node_modules/asynckit/lib/readable_serial.js": "bc62c09129a9a512a6a20c173ced3a12",
"node_modules/asynckit/lib/defer.js": "296f8804b9d809f53e081a97e5cd1c3b",
"node_modules/asynckit/bench.js": "1f35225bb5de1e68d061869daf5d5ae1",
"node_modules/asynckit/serial.js": "60380caf0a70da95e4dfbec3a80be4c0",
"node_modules/follow-redirects/LICENSE": "2913574e921aefe1275cd5864b4f9b66",
"node_modules/follow-redirects/https.js": "4db3f05178b291f5f607f677d82d064f",
"node_modules/follow-redirects/index.js": "ad8d016a569aaba71d32e920ca9a68ac",
"node_modules/follow-redirects/README.md": "28615de62b27b289a042be296c549c56",
"node_modules/follow-redirects/package.json": "6b44f21b44965398602ec375413f65b2",
"node_modules/follow-redirects/http.js": "f94bfd10b869e19d4ebf749ccbc44fb4",
"node_modules/follow-redirects/debug.js": "8ca5d5ed865107a8509faaa751b01f2f",
"node_modules/axios/LICENSE": "a9f12edf7bc60d718b6ff862f62b3f1a",
"node_modules/axios/CHANGELOG.md": "e6ce017948fcdee4326edcafb510653c",
"node_modules/axios/dist/axios.js": "a927481a15078a626ecb0681638241f8",
"node_modules/axios/dist/esm/axios.js": "702948835c7911c4990caafe421d3572",
"node_modules/axios/dist/esm/axios.min.js.map": "4c86b1d2814aca67a7df550f2de6af75",
"node_modules/axios/dist/esm/axios.js.map": "f5d3e24e143700a956da8b1140919eed",
"node_modules/axios/dist/esm/axios.min.js": "ec8a4b482927e0bcc72ea8e8178a59db",
"node_modules/axios/dist/browser/axios.cjs.map": "e0fd7a8040343a9c554f3c9ae450bd38",
"node_modules/axios/dist/browser/axios.cjs": "95bde5ee6871192d601990aaa71962d9",
"node_modules/axios/dist/axios.min.js.map": "e0d529076b21a1614c480163f2244c95",
"node_modules/axios/dist/axios.js.map": "17639564448a24cf66d29d771f4c6ead",
"node_modules/axios/dist/node/axios.cjs.map": "b35d9923dada5a17d4782e26d6ce24f0",
"node_modules/axios/dist/node/axios.cjs": "86a4e8b91ec52a3d461f44bfd60ae098",
"node_modules/axios/dist/axios.min.js": "dc2b008d6a9118a0347bdc329ba260ee",
"node_modules/axios/index.d.cts": "afde53d4368295ebb1bb402b9e9b90eb",
"node_modules/axios/index.js": "387fcb627647a87c3f5799e4759935f0",
"node_modules/axios/README.md": "4309422348d04db15234ffbf36c8c3b1",
"node_modules/axios/package.json": "5fa69030e84a71712c805866f68852bf",
"node_modules/axios/MIGRATION_GUIDE.md": "c243402985664b7bd49765628c67f8af",
"node_modules/axios/lib/cancel/CancelToken.js": "4b44da9c6a82659c703f5def9b3ea535",
"node_modules/axios/lib/cancel/isCancel.js": "6bd5cfd9adb9dc86b94e98f99baef7f3",
"node_modules/axios/lib/cancel/CanceledError.js": "af2a895bf7c42e9844af77bcb60183ce",
"node_modules/axios/lib/axios.js": "9bfe853f6e402d9dcbb66ad189e13450",
"node_modules/axios/lib/core/settle.js": "dc6e6eaff4080c77977261766cd4694e",
"node_modules/axios/lib/core/AxiosError.js": "e1ec2b70a97a69936688dae78604d824",
"node_modules/axios/lib/core/Axios.js": "7f632f4609ffd60406d64d6e9a2978da",
"node_modules/axios/lib/core/InterceptorManager.js": "d8e1875dc92913cdee9aa624c845270b",
"node_modules/axios/lib/core/README.md": "df521092db35e36209448669a64264de",
"node_modules/axios/lib/core/dispatchRequest.js": "ed0cfc2cde0e446d4c05b074fd5012c1",
"node_modules/axios/lib/core/buildFullPath.js": "115af345640ce1f6fc101743a6bab9bc",
"node_modules/axios/lib/core/transformData.js": "d6506f6bb1aefcfc7c56b7df97a688cf",
"node_modules/axios/lib/core/AxiosHeaders.js": "3941d3c2c7db93110c003916300954e0",
"node_modules/axios/lib/core/mergeConfig.js": "2ac667116afcb3314f6f834ca35e30b1",
"node_modules/axios/lib/platform/index.js": "7c5fa8d0c642040ed73e707996412a75",
"node_modules/axios/lib/platform/browser/classes/URLSearchParams.js": "94c505c6cf6b2b5e1870520f32c757ef",
"node_modules/axios/lib/platform/browser/classes/Blob.js": "cb873acf280f5a3f20fa5fe74e2d43df",
"node_modules/axios/lib/platform/browser/classes/FormData.js": "cfeeffdff82f6daa9101b06abf596182",
"node_modules/axios/lib/platform/browser/index.js": "7e342a6a532cd925f1b642ed031d386f",
"node_modules/axios/lib/platform/node/classes/URLSearchParams.js": "fbb9de0cc03cbc49de15e986aefb593a",
"node_modules/axios/lib/platform/node/classes/FormData.js": "f3e21f9dcc2bac835b943f4363bcf2f4",
"node_modules/axios/lib/platform/node/index.js": "42e3199061da85c8a4a5927c7b46beef",
"node_modules/axios/lib/env/classes/FormData.js": "ac122232a8d058e22cce97719296c2ef",
"node_modules/axios/lib/env/README.md": "917c5e648a2e35f91d795e97c3c3241b",
"node_modules/axios/lib/env/data.js": "1720c417917ee4fddc9dfa0a9954fd79",
"node_modules/axios/lib/adapters/README.md": "cbcbaa4fa2446b9cddf40cda0037fb17",
"node_modules/axios/lib/adapters/adapters.js": "d5b9bca77ba2c2f725271e71298c9d8f",
"node_modules/axios/lib/adapters/xhr.js": "476c6f95d45222a1655f7fd0186e85d3",
"node_modules/axios/lib/adapters/http.js": "6a4a6f9d29f94e895308d44d5621816f",
"node_modules/axios/lib/defaults/transitional.js": "e5f5785d3c3a3f200e7b874220012df5",
"node_modules/axios/lib/defaults/index.js": "9ea7bc096b04fa9113bb0a57ae469297",
"node_modules/axios/lib/utils.js": "42e08f5e361aace5f65c9572c9c9512a",
"node_modules/axios/lib/helpers/combineURLs.js": "5091af6fcdc15131cd322d252753e0a3",
"node_modules/axios/lib/helpers/parseProtocol.js": "cd324508186a2e72d60b79ab446039e2",
"node_modules/axios/lib/helpers/fromDataURI.js": "13bf7c51e4d7a0c0839ff61178fd6af1",
"node_modules/axios/lib/helpers/deprecatedMethod.js": "d4d6d9485b71f6328314a63021b7232f",
"node_modules/axios/lib/helpers/buildURL.js": "9ef883f3b65fbb266958779eedf0c8e1",
"node_modules/axios/lib/helpers/AxiosTransformStream.js": "c0d68891d08c5563c649a39ecf5b24e0",
"node_modules/axios/lib/helpers/null.js": "c0b8de254f3180d1131a6d76039ce40b",
"node_modules/axios/lib/helpers/isURLSameOrigin.js": "57fcc0c16bccaac483f96a7fe8b2c87e",
"node_modules/axios/lib/helpers/isAbsoluteURL.js": "eedc0ecb9c203577acd73858abda6bf2",
"node_modules/axios/lib/helpers/AxiosURLSearchParams.js": "84851b8f07119644b122f3b8fe7340f4",
"node_modules/axios/lib/helpers/callbackify.js": "4f5bf7f3e4e344f12f0b9cc3e132e962",
"node_modules/axios/lib/helpers/isAxiosError.js": "df417b05fc676435570ef605b2782af3",
"node_modules/axios/lib/helpers/toFormData.js": "cb81a5469f04db3ee425a2d58798b956",
"node_modules/axios/lib/helpers/cookies.js": "1e43a431ee643c9018adea4fe3c37f23",
"node_modules/axios/lib/helpers/validator.js": "bffc9d43ad8c23c7089c811d309bd794",
"node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js": "6060a24e1be92b089284c7b31db2b28e",
"node_modules/axios/lib/helpers/README.md": "bdac64f4ea0aae826528d3c9ea610438",
"node_modules/axios/lib/helpers/HttpStatusCode.js": "336b57584fab68732b9384b330c6f508",
"node_modules/axios/lib/helpers/formDataToStream.js": "6aead9ee2d66a091a398ede0354a055b",
"node_modules/axios/lib/helpers/throttle.js": "05d79c79c9a7d611e47c3a2412458ed7",
"node_modules/axios/lib/helpers/formDataToJSON.js": "5c643f287bfbbafd020d60af70d7d6e1",
"node_modules/axios/lib/helpers/speedometer.js": "210fc4fcd0977e25765b252114c22700",
"node_modules/axios/lib/helpers/bind.js": "f57970b4163574eb872734e28a48d10d",
"node_modules/axios/lib/helpers/readBlob.js": "7ddffc00831746bff27488594b9ddde1",
"node_modules/axios/lib/helpers/spread.js": "98c0e482cddc7f9aaac7e98886d9c4bf",
"node_modules/axios/lib/helpers/toURLEncodedForm.js": "257fd93b0d3c12dc356488518054b1cd",
"node_modules/axios/lib/helpers/parseHeaders.js": "540ef0b4877c6242e0d276c5a8d80b1e",
"node_modules/axios/index.d.ts": "32b8db2769cd83859a3f229b2b4cd95e",
"node_modules/axios/SECURITY.md": "7f7d88915a1088a5c95db9ae51566ebf",
"node_modules/mime-db/db.json": "052e457b88d815c1792e1f8ce8509fc3",
"node_modules/mime-db/LICENSE": "175b28b58359f8b4a969c9ab7c828445",
"node_modules/mime-db/HISTORY.md": "183c405ff4f34b51dbd9c852ce358505",
"node_modules/mime-db/index.js": "911d3d2ae7be42b05ba9275ed7722859",
"node_modules/mime-db/README.md": "15bed796dab121b6c9168e4595f4f651",
"node_modules/mime-db/package.json": "12c5cd5cfa1d4f45af207db1715d4b70",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"package-lock.json": "c82dea176f3bcf23c1978f223386f9d4",
"package.json": "18533a932321dd4a150de09790c15a3b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bd2c2afd4e144f72181958568b5b7d2d",
"functions/proxy.js": "57b901b30673f6b20a8aef88e653bff5",
"assets/AssetManifest.json": "4f6643474374f6230fb7fe6d2936d410",
"assets/NOTICES": "b9d44d82fa941ebaa90608bd739dc90e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "13354b7c265cb67c18d67c8605dcb96a",
"assets/fonts/MaterialIcons-Regular.otf": "339453cc7995ffd41dd52d38be19108e",
"assets/assets/images/belt-straight.png": "03cc169ec49dfa18d62a38ff11dd1573",
"assets/assets/images/copy-straight.png": "1d35026042dc3e31f6f8b8fea6a3dcfb",
"assets/assets/images/books.png": "db6d3de728e5f1222c114aac70b21ca9",
"assets/assets/images/hijab-straight.png": "70ec71c14d03f35ff02915a1323b3715",
"assets/assets/images/hijab.png": "706e74a1c122c0302918846e20f922c0",
"assets/assets/images/sweater.png": "50843006b94a6f1aec190a84fc2ddb05",
"assets/assets/images/logo.jpeg": "b9d2d20800bdbf4283d575d5b9903549",
"assets/assets/images/badge-straight.png": "972efb3635c29fc0a0570a2f346788e8",
"assets/assets/images/sweater-straight.png": "65102ef5299e378d3eee1ded01bd81cd",
"assets/assets/images/books-straight.png": "78996bcdaa1d21e804af47b715e7ad5f",
"assets/assets/images/badge.png": "7b13624549fd3bdf9cd9a69c75899569",
"assets/assets/images/copy.png": "2e66aced18171d4ecbe170bf71068cc6",
"assets/assets/images/belt.png": "008fd8e8933889a78bc3f98a6b93d3c7",
"assets/assets/icons/eye-slash.svg": "20c8b579407e0bf6e62d3818854b9f21",
"assets/assets/icons/eye.svg": "4d4950b0f77a0e449cfeb8a1138ef250",
"assets/assets/icons/building.svg": "27c24b58b7f38814dc025daab21b9d15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
