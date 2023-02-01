// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bflWm":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "608a8b943ec96094";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hjkgY":[function(require,module,exports) {
var _libaryLocal = require("./js/libaryLocal");
var _watched = require("./js/watched");
var _queue = require("./js/queue");

},{"./js/libaryLocal":"hyB1H","./js/watched":"gX8xR","./js/queue":"dGrI7"}],"hyB1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkDataRenderPage", ()=>checkDataRenderPage);
var _localJs = require("./local.js");
var _createMovieCard = require("./createMovieCard");
var _local = require("./local");
var _watched = require("./watched");
var _modalWindowJs = require("./modal-window.js");
const divContainer = document.querySelector("#main");
const header = document.querySelector(".library-header");
const containerSlider = document.querySelector("#slider");
function checkDataRenderPage(data) {
    if (!data || !data.length) {
        divContainer.classList.add("notification-bcg");
        header.classList.add("library-header-notification");
        containerSlider.classList.add("slider-bcg");
        return `<p class="notification-desc">
            Nothing here yet, go back and select a movie.
            </p>`;
    }
    header.classList.remove("library-header-notification");
    divContainer.classList.remove("notification-bcg");
    containerSlider.classList.remove("slider-bcg");
    return (0, _createMovieCard.createMovieCard)(data);
}
(0, _watched.watchedLocal).paginationRender();
(0, _local.card).addEventListener("click", (0, _modalWindowJs.showMovieLibrary)); /* card.insertAdjacentHTML('beforeend', checkDataRenderPage(watche)); */ 

},{"./local.js":"fHpqR","./createMovieCard":"8zLyu","./local":"fHpqR","./watched":"gX8xR","./modal-window.js":"bg8pZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHpqR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CURRENT_MOVIES", ()=>CURRENT_MOVIES);
parcelHelpers.export(exports, "WATCHE", ()=>WATCHE);
parcelHelpers.export(exports, "QUEUE", ()=>QUEUE);
parcelHelpers.export(exports, "watche", ()=>watche);
parcelHelpers.export(exports, "queue", ()=>queue);
parcelHelpers.export(exports, "card", ()=>card);
parcelHelpers.export(exports, "logo", ()=>logo);
parcelHelpers.export(exports, "home", ()=>home);
parcelHelpers.export(exports, "library", ()=>library);
parcelHelpers.export(exports, "THEME", ()=>THEME);
parcelHelpers.export(exports, "LANG", ()=>LANG);
const CURRENT_MOVIES = "current_movies";
const WATCHE = "watche";
const QUEUE = "queue";
const watche = JSON.parse(localStorage.getItem(WATCHE)) || [];
const queue = JSON.parse(localStorage.getItem(QUEUE)) || [];
const card = document.querySelector(".card");
const logo = document.querySelector(".page-header__logo-title");
const home = document.querySelector(".home");
const library = document.querySelector(".library");
const THEME = "theme";
const LANG = "language";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zLyu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMovieCard", ()=>createMovieCard);
var _genresConvertor = require("./genresConvertor");
function createMovieCard(data) {
    const markup = data.map(({ poster_path , original_title ="" , title ="" , genre_ids , overview ="" , release_date ="" , id =Date.now() ,  })=>{
        let release;
        if (release_date === "") release = "no date";
        else release = release_date.substr(0, 4);
        let path;
        if (poster_path) path = "https://image.tmdb.org/t/p/w500/" + poster_path;
        else path = "https://picsum.photos/500/750";
        const altPath = "./images/no-file-opt.jpg";
        //  <img src="./images/no-file-opt.jpg" alt="A brilliant.">
        return `<li class="card__item list" id="${id}">
            <img src='${path}' loading="lazy" alt="${overview}" class="card__img" />
            <h2 class="card__title">${title ?? original_title}</h2>
            <p class="card__desc">${(0, _genresConvertor.genresConvertor)(genre_ids).join(", ")} | ${release}
            </p>
            </li>`;
    }).join("");
    return markup;
}

},{"./genresConvertor":"dbUaD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbUaD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "genresConvertor", ()=>genresConvertor);
// ---- Genres converting function - замінює id жанрів в картці фільму на назви жанрів
var _getGenres = require("./get-genres");
function genresConvertor(genre_ids) {
    const result = genre_ids.map((id)=>{
        const objectNumbersInString = JSON.parse(localStorage.getItem((0, _getGenres.GENRES_MOVIES)));
        return objectNumbersInString[id];
    });
    if (result.length > 2) {
        result.splice(2, result.length - 2);
        result.push("Other");
    } else if (result.length === 0) result.push("no genres");
    return result;
}

},{"./get-genres":"bbJ9W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbJ9W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GENRES_MOVIES", ()=>GENRES_MOVIES);
const GENRES_MOVIES = "genresList";
const fetchedGenres = ()=>{
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e8369cced440ebe3b010b622661df24b&language=en-US`).then((data)=>data.json());
};
fetchedGenres().then(onFetchSuccess);
function onFetchSuccess(respond) {
    const genresList = respond.genres.reduce((acc, { id , name  })=>{
        acc[id] = name;
        return acc;
    }, {});
    localStorage.setItem(GENRES_MOVIES, JSON.stringify(genresList));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gX8xR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "watchedLocal", ()=>watchedLocal);
// const watchedBtn = document.querySelector('.watched-btn-js');
// const queueBtn = document.querySelector('.queue-btn-js');
// watchedBtn.addEventListener('click', onClickWatchedBtn);
// function onClickWatchedBtn() {
//   onActiveWatchedBtn();
// }
// function onActiveWatchedBtn() {
//   watchedBtn.classList.add('active');
//   queueBtn.classList.remove('active');
// }
var _localPaginationJs = require("./localPagination.js");
var _localJs = require("./local.js");
var _local = require("./local");
const btnWatch = document.querySelector(".watched-btn-js");
const btnQueue = document.querySelector(".queue-btn-js");
const containerBtn = document.querySelector(".library-header__buttons");
const watchedLocal = new (0, _localPaginationJs.LocalPagination)((0, _localJs.watche));
const queueLocal = new (0, _localPaginationJs.LocalPagination)((0, _localJs.queue));
containerBtn.addEventListener("click", onClickBtn);
(0, _localPaginationJs.paginationLibBox).addEventListener("click", localPagWatchedLib);
function onClickBtn({ target  }) {
    if (!target.classList.contains("library-header__btn")) return;
    if (target.classList.contains("queue-btn-js")) {
        (0, _local.card).innerHTML = "";
        queueLocal.paginationRender();
        toggleClassBtn("active", btnWatch, target);
    }
    if (target.classList.contains("watched-btn-js")) {
        (0, _local.card).innerHTML = "";
        watchedLocal.paginationRender();
        toggleClassBtn("active", btnQueue, target);
    }
}
function toggleClassBtn(classStr, btn, current) {
    current.classList.add(classStr);
    btn.classList.remove(classStr);
}
function localPagWatchedLib(evt) {
    const isWatchedActive = Boolean(document.querySelector(".watched-btn-js.active"));
    const target = evt.target.textContent;
    if (evt.target.nodeName !== "LI" || target === "...") return;
    if (target === "\uD83E\uDC78") isWatchedActive ? watchedLocal.pagLeft() : queueLocal.pagLeft();
    else if (target === "\uD83E\uDC7A") isWatchedActive ? watchedLocal.pagRight() : queueLocal.pagRight();
    else isWatchedActive ? watchedLocal.peakedPage(target) : queueLocal.peakedPage(target);
}

},{"./localPagination.js":"2Uj60","./local.js":"fHpqR","./local":"fHpqR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Uj60":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paginationLibBox", ()=>paginationLibBox);
parcelHelpers.export(exports, "LocalPagination", ()=>LocalPagination);
var _local = require("./local");
var _libaryLocal = require("./libaryLocal");
const paginationLibBox = document.querySelector(".js-pagination-lib");
class LocalPagination {
    constructor(category){
        this.arr = category;
        this.pageNum = 1;
        this.pageAll = Math.round((this.arr.length - 1) / 5);
        this.pageSize = 5;
        this.pagedArr;
    }
    paginate(arr, pageNumber, pageSize) {
        return arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }
    paginationRender() {
        if (this.arr.length < 5) (0, _local.card).innerHTML = (0, _libaryLocal.checkDataRenderPage)(this.arr);
        else {
            this.pagedArr = this.paginate(this.arr, this.pageNum, this.pageSize);
            (0, _local.card).innerHTML = (0, _libaryLocal.checkDataRenderPage)(this.pagedArr);
            paginationLib(this.pageNum, this.pageAll);
        }
    }
    pagLeft() {
        this.pageNum -= 1;
        this.pagedArr = this.paginate(this.arr, this.pageNum, this.pageSize);
        (0, _local.card).innerHTML = (0, _libaryLocal.checkDataRenderPage)(this.pagedArr);
        paginationLib(this.pageNum, this.pageAll);
    }
    pagRight() {
        this.pageNum += 1;
        this.pagedArr = this.paginate(this.arr, this.pageNum, this.pageSize);
        (0, _local.card).innerHTML = (0, _libaryLocal.checkDataRenderPage)(this.pagedArr);
        paginationLib(this.pageNum, this.pageAll);
    }
    peakedPage(actPage) {
        this.pageNum = Number(actPage);
        this.pagedArr = this.paginate(this.arr, this.pageNum, this.pageSize);
        (0, _local.card).innerHTML = (0, _libaryLocal.checkDataRenderPage)(this.pagedArr);
        paginationLib(this.pageNum, this.pageAll);
    }
}
function paginationLib(currPage, allPages) {
    let markupControls = "";
    let beforeTwoPages = currPage - 2;
    let beforeOnePage = currPage - 1;
    let afterOnePage = currPage + 1;
    let afterTwoPage = currPage + 2;
    if (currPage > 1) {
        markupControls += `<li class='arrows arrow-left'>&#129144;</li>`;
        markupControls += `<li class="firstInt">1</li>`;
    }
    if (currPage > 4) markupControls += `<li class="dots">...</li>`;
    if (currPage > 3) markupControls += `<li class="two-left">${beforeTwoPages}</li>`;
    if (currPage > 2) markupControls += `<li>${beforeOnePage}</li>`;
    markupControls += `<li class='active'>${currPage}</li>`;
    if (allPages - 1 > currPage) markupControls += `<li >${afterOnePage}</li>`;
    if (allPages - 2 > currPage) markupControls += `<li >${afterTwoPage}</li>`;
    if (allPages - 3 > currPage) markupControls += `<li class="dots">...</li>`;
    if (allPages > currPage) {
        markupControls += `<li class="lastInt">${allPages}</li>`;
        markupControls += `<li class='arrows arrow-right'>&#129146</li>`;
    }
    paginationLibBox.innerHTML = markupControls;
}

},{"./local":"fHpqR","./libaryLocal":"hyB1H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bg8pZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showMovieMain", ()=>showMovieMain);
parcelHelpers.export(exports, "showMovieLibrary", ()=>showMovieLibrary);
var _localJs = require("./local.js");
var _getGenres = require("./get-genres");
var _trailer = require("./trailer");
const backdrop = document.querySelector(".backdrop");
const modalMovie = document.querySelector(".modal__movie");
const watchedBtn = document.querySelector(".watched-btn-js");
async function showMovieMain(e) {
    const film = getFilmMain(e, ".card__item", (0, _localJs.CURRENT_MOVIES));
    const checkWatched = checkLibrary((0, _localJs.watche), film);
    const checkQueue = checkLibrary((0, _localJs.queue), film);
    const trailerLink = await (0, _trailer.trailerInst)(film.id);
    createMovieInfo(film, (0, _getGenres.GENRES_MOVIES), checkWatched, checkQueue, trailerLink);
    eventListeners(closeModal, addFilm);
    backdrop.hidden = false;
}
async function showMovieLibrary(e) {
    const film = getFilmLibrary(e, ".card__item", watchedOrQueue());
    const checkWatched = checkLibrary((0, _localJs.watche), film);
    const checkQueue = checkLibrary((0, _localJs.queue), film);
    const trailerLink = await (0, _trailer.trailerInst)(film.id);
    createMovieInfo(film, (0, _getGenres.GENRES_MOVIES), checkWatched, checkQueue, trailerLink);
    eventListeners(closeModal, addFilm);
    backdrop.hidden = false;
}
function getFilmMain(e, element, fromStoarage) {
    const movieId = Number(e.target.closest(element).id);
    return JSON.parse(localStorage.getItem(fromStoarage)).results.find((movie)=>movie.id === movieId);
}
function getFilmLibrary(e, element, fromStoarage) {
    const movieId = Number(e.target.closest(element).id);
    return JSON.parse(localStorage.getItem(fromStoarage)).find((movie)=>movie.id === movieId);
}
// розмітка з інфо про фільм у модальному вікні
function createMovieInfo(movie, genresList, checkWatched, checkQueue, trailer = "") {
    const modalMovieMarkup = `<div class="movie__img-container">
  <img class='movie__img'
    alt="movie poster"
    src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
  />
</div>
      <div class="movie__info">
      <h2 class="movie__title">${movie.title}</h2>
      <table class="movie__details">
      <tbody>
      <tr>
      <td class='movie__detail modal-text--left-column modal-text'>Vote/Votes</td>
      <td class="movie__detail modal-text modal-text--line-high">
      <span class="movie__detail--accent">
      ${movie.vote_average.toFixed(1)} </span
      >/ ${movie.vote_count}
      </td>
      </tr>
      <tr>
      <td class="movie__detail modal-text--left-column modal-text">Popularity</td>
      <td class="movie__detail modal-text modal-text--line-high">${movie.popularity.toFixed(1)}</td>
      </tr>
      <tr>
      <td class="movie__detail modal-text--left-column modal-text">Original title</td>
      <td class="movie__detail modal-text modal-text--uppercase movie__detail-right-column">${movie.original_title}</td>
      </tr>
      <tr>
      <td class="movie__detail modal-text--left-column modal-text">Genres</td>
      <td class="movie__detail modal-text movie__detail-right-column">${genresConvertor(movie.genre_ids, genresList)}</td>
      </tr>
          </tbody>
          </table>
          
          <h3 class="movie__about modal-text modal-text--uppercase">About</h3>
      <p class="movie__description modal-text">${movie.overview}</p>
      
      <div class="movie__add-buttons">
      ${trailer}
        <button class="modal__movie-btn modal-text modal-text--uppercase js-movie__add-btn--watched">${checkWatched ? "remove from " : "add to "}watched</button>
        <button class="modal__movie-btn modal-text modal-text--uppercase js-movie__add-btn--queue">${checkQueue ? "remove from " : "add to "}queue</button>
      </div>
      </div>
  `;
    modalMovie.id = movie.id;
    modalMovie.innerHTML = modalMovieMarkup;
}
// функції для закриття модального вікна
const closeModal = {
    onBackdropClick (e) {
        if (e.target.parentElement.nodeName === "BODY") {
            backdrop.hidden = true;
            backdrop.removeEventListener("click", this.onBackdropClick);
        }
    },
    onEsc (e) {
        if (e.code !== "Escape") return;
        backdrop.hidden = true;
        document.removeEventListener("keydown", this.onEsc);
    },
    onCloseBtn () {
        backdrop.hidden = true;
    }
};
// функції додавання фільмів у список переглянутих та у чергу
const addFilm = {
    toWatched (e) {
        if (e.currentTarget.textContent === "add to watched") addToWatchedOrQueue(e, ".modal__movie", (0, _localJs.CURRENT_MOVIES), (0, _localJs.watche), (0, _localJs.WATCHE), "watched");
        else removeFromWatchedOrQueue(e, ".modal__movie", (0, _localJs.watche), (0, _localJs.WATCHE), "watched");
    },
    toQueue (e) {
        if (e.currentTarget.textContent === "add to queue") addToWatchedOrQueue(e, ".modal__movie", (0, _localJs.CURRENT_MOVIES), (0, _localJs.queue), (0, _localJs.QUEUE), "queue");
        else removeFromWatchedOrQueue(e, ".modal__movie", (0, _localJs.queue), (0, _localJs.QUEUE), "queue");
    }
};
function addToWatchedOrQueue(e, element, fromStoarage, local, key, btn) {
    const film = getFilmMain(e, element, fromStoarage);
    local.push(film);
    localStorage.setItem(key, JSON.stringify(local));
    e.currentTarget.textContent = `remove from ${btn}`;
}
function removeFromWatchedOrQueue(e, element, local, key, btn) {
    const films = JSON.parse(localStorage.getItem(key));
    const movieId = Number(e.target.closest(element).id);
    films.forEach((film, i)=>{
        film.id === movieId ? local.splice(i, 1) : film;
    });
    localStorage.setItem(key, JSON.stringify(local));
    e.currentTarget.textContent = `add to ${btn}`;
}
// додає та видаляє слухачі подій
function eventListeners(closeModal1, addFilm1) {
    const modalCloseBtn = document.querySelector(".modal-window__close-btn");
    const modalBtns = {
        addToWatched: document.querySelector(".js-movie__add-btn--watched"),
        addToQueue: document.querySelector(".js-movie__add-btn--queue")
    };
    modalBtns.addToWatched.addEventListener("click", addFilm1.toWatched);
    modalBtns.addToQueue.addEventListener("click", addFilm1.toQueue);
    modalCloseBtn.addEventListener("click", closeModal1.onCloseBtn);
    backdrop.addEventListener("click", closeModal1.onBackdropClick);
    document.addEventListener("keydown", closeModal1.onEsc);
}
function genresConvertor(movieGenres, genresList) {
    return movieGenres.map((genre)=>{
        const allGenres = JSON.parse(localStorage.getItem(genresList));
        return allGenres[genre];
    }).join(", ");
}
function checkLibrary(local, film) {
    if (local.length === 0) return;
    return local.find((movie)=>movie.id === film.id);
}
function watchedOrQueue() {
    if (watchedBtn.classList.contains("active")) return 0, _localJs.WATCHE;
    else return 0, _localJs.QUEUE;
}

},{"./local.js":"fHpqR","./get-genres":"bbJ9W","./trailer":"boCse","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"boCse":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "trailerInst", ()=>trailerInst);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
const KEY_API = "0b11624b950ea9c4284f61844023b09c";
async function getfetchTrailer(film) {
    try {
        const response = await (0, _axiosDefault.default).get(`https://api.themoviedb.org/3/movie/${film}/videos?api_key=${KEY_API}&language=en`);
        return response.data;
    } catch (err) {
        throw new Error(response.statusText);
    }
}
function filterNameTrailer({ results  }) {
    return results.filter(({ name  })=>name.toLowerCase().includes("trailer"));
}
function trailerLink(trailerObj) {
    return `<button class='modal__movie-btn modal-text modal-text--uppercase trailer-btn' "><a href="https://www.youtube.com/embed/${trailerObj[0].key}" target="_blank">
  Trailer in new window
 </a></button>`;
}
async function trailerInst(film) {
    const trailerInfo = await getfetchTrailer(film);
    if (trailerInfo.status_code === 34 || trailerInfo.status_code === 7 || trailerInfo.results.length === 0) return;
    const trailerObj = await filterNameTrailer(trailerInfo);
    if (trailerObj.length === 0) return;
    trailerLink(trailerObj);
    return trailerLink(trailerObj);
}

},{"axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dGrI7":[function(require,module,exports) {
const watchedBtn = document.querySelector(".watched-btn-js");
const queueBtn = document.querySelector(".queue-btn-js");
queueBtn.addEventListener("click", onClickQueueBtn);
function onClickQueueBtn() {
    onActiveQueueBtn();
}
function onActiveQueueBtn() {
    queueBtn.classList.add("active");
    watchedBtn.classList.remove("active");
}

},{}]},["bflWm","hjkgY"], "hjkgY", "parcelRequired7c6")

//# sourceMappingURL=library.3ec96094.js.map
