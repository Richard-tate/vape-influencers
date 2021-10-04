// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"A2T1":[function(require,module,exports) {
var dotsNav = document.querySelector(".carousel__dots");
var dots = Array.from(dotsNav.children);
var track = document.querySelector(".cards__wrapper");
var cards = Array.from(track.children);
var toogleBtn = document.querySelector(".btn.btn_toogle");
toogleBtn.addEventListener("click", function () {
  var menu = document.querySelector(".menu");
  menu.classList.toggle("open");
});

var updateDots = function updateDots(currentDot, targetDot) {
  currentDot.classList.remove("active");
  targetDot.classList.add("active");
};

var updateCards = function updateCards(currentCard, targetCard, prevCard) {
  if (currentCard === targetCard) return;
  currentCard.classList.remove("active");
  currentCard.classList.add("prev");
  prevCard.classList.remove("prev");
  prevCard.classList.add("next");
  targetCard.classList.add("active");
  targetCard.classList.remove("next");
};

track.addEventListener("click", function (e) {
  var targetCard = e.target.closest(".card");
  if (!targetCard) return;
  var currentCard = track.querySelector(".active");
  var currentDot = dotsNav.querySelector(".active");
  var targetDot = dotsNav.children[cards.indexOf(targetCard)];
  var prevCard = track.querySelector(".prev");
  updateDots(currentDot, targetDot);
  updateCards(currentCard, targetCard, prevCard);
});
dotsNav.addEventListener("click", function (e) {
  var targetDot = e.target.closest("li");
  if (!targetDot) return;
  var currentDot = dotsNav.querySelector(".active");
  var currentCard = track.querySelector(".active");
  var targetIndex = dots.findIndex(function (dot) {
    return dot === targetDot;
  });
  var targetCard = cards[targetIndex];
  var prevCard = track.querySelector(".prev");
  updateDots(currentDot, targetDot);
  updateCards(currentCard, targetCard, prevCard);
});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.8e2255a8.js.map