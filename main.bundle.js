webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__minecraft_minecraft_module__ = __webpack_require__("../../../../../src/app/minecraft/minecraft.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__minecraft_minecraft_module__["a" /* MinecraftModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__minecraft_minecraft_routes__ = __webpack_require__("../../../../../src/app/minecraft/minecraft.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");


var appRoutes = [{
        path: 'minecraft',
        children: __WEBPACK_IMPORTED_MODULE_0__minecraft_minecraft_routes__["a" /* minecraftRoutes */]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    }];


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Welcome\r\n</h1>\r\n<p>\r\n  To my super ugly site. I'll clean it up and style it eventually...I will...I won't...\r\n</p>\r\n\r\n<h2>\r\n  Projects\r\n</h2>\r\n\r\n<div *ngFor='let project of projects'>\r\n  <label>* <a routerLink='/{{project.route}}'>{{ project.title }}</a></label>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.projects = [
            {
                title: 'Minecraft',
                route: 'minecraft'
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/minecraft/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    Minecraft Tools\r\n</h1>\r\n\r\n<div *ngFor='let project of projects'>\r\n    <label>* <a routerLink='/minecraft/{{project.route}}'>{{ project.title }}</a></label>\r\n    <!-- {{project.route}} -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/minecraft/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
        this.projects = [
            {
                title: 'Villager Pathfinding',
                route: 'villager-pathfinding'
            }
        ];
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/minecraft/list/list.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/minecraft/minecraft.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinecraftModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__villager_pathfinding_villager_pathfinding_component__ = __webpack_require__("../../../../../src/app/minecraft/villager-pathfinding/villager-pathfinding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("../../../../../src/app/minecraft/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MinecraftModule = (function () {
    function MinecraftModule() {
    }
    MinecraftModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__villager_pathfinding_villager_pathfinding_component__["a" /* VillagerPathfindingComponent */], __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */]]
        })
    ], MinecraftModule);
    return MinecraftModule;
}());



/***/ }),

/***/ "../../../../../src/app/minecraft/minecraft.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return minecraftRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__villager_pathfinding_villager_pathfinding_component__ = __webpack_require__("../../../../../src/app/minecraft/villager-pathfinding/villager-pathfinding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_component__ = __webpack_require__("../../../../../src/app/minecraft/list/list.component.ts");


var minecraftRoutes = [{
        path: 'villager-pathfinding',
        component: __WEBPACK_IMPORTED_MODULE_0__villager_pathfinding_villager_pathfinding_component__["a" /* VillagerPathfindingComponent */]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__list_list_component__["a" /* ListComponent */]
    }];


/***/ }),

/***/ "../../../../../src/app/minecraft/villager-pathfinding/villager-pathfinding.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n    <div class='col-sm-4' id='left'>\r\n        <h1>Segments</h1>\r\n        <div class=\"row\">\r\n            <label class='col-sm-4 text-right' for='npcTag'>NPC Tag:</label>\r\n            <input class='col-sm-6 text-left input-sm' type='text' name='npcTag' [(ngModel)]=\"input.npcTag\" (ngModelChange)='this.output.alert = \"\"'>\r\n        </div>\r\n        <div class=\"row\">\r\n            <label class='col-sm-4 text-right' for='npcSeq'>Sequence:</label>\r\n            <input class='col-sm-6 text-left input-sm' type='text' name='npcSeq' [(ngModel)]=\"input.sequence\" (ngModelChange)='this.output.alert = \"\"'>\r\n        </div>\r\n        <div>\r\n            <h4>\r\n                Start location:\r\n            </h4>\r\n            <div class=\"row\">\r\n                <label class='col-sm-4 text-right' for='startX'>x:</label>\r\n                <input class=\"col-sm-6 text-left input-sm\" type='number' name='startX' [(ngModel)]=\"input.start.x\">\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <label class='col-sm-4 text-right' for='startY'>y:</label>\r\n                <input class=\"col-sm-6 text-left input-sm\" type='number' name='startY' [(ngModel)]=\"input.start.y\">\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <label class='col-sm-4 text-right' for='startZ'>z:</label>\r\n                <input class=\"col-sm-6 text-left input-sm\" type='number' name='startZ' [(ngModel)]=\"input.start.z\">\r\n            </div>\r\n            <div class=\"row\">\r\n                <label class='col-sm-4 text-right' for='startPitch'>pitch:</label>\r\n                <input class=\"col-sm-6 text-left input-sm\" type='number' name='startPitch' [(ngModel)]=\"input.start.pitch\">\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <label class='col-sm-4 text-right' for='startYaw'>yaw:</label>\r\n                <input class=\"col-sm-6 text-left input-sm\" type='number' name='startYaw' [(ngModel)]=\"input.start.yaw\">\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div>\r\n            <button (click)='addNode()'>Add segment</button>\r\n            <button (click)='generateOutput()'>Generate</button>\r\n        </div>\r\n        <br>\r\n        <div class=\"alert alert-danger\" *ngIf='output.alert'>\r\n            {{output.alert}}\r\n        </div>\r\n        <div>\r\n            <h4>Configuration JSON</h4>\r\n            <textarea rows='3' [(ngModel)]='output.config'></textarea>\r\n            <button (click)='export()'>Export</button>\r\n            <button (click)='import()'>Import</button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class='col-sm-8' id='right'>\r\n        <div *ngFor=\"let node of input.nodes; let i = index;\">\r\n            <h2>Segment {{i+1}}</h2>\r\n            <button (click)='removeNode(i)'>Remove segment</button>\r\n            <br>\r\n            <br>\r\n            <div class='row'>\r\n                <div class='col-md-2 offset-md-5'>\r\n                    <label>\r\n                        Run:\r\n                        <input type='checkbox' name='run-{{i}}' [(ngModel)]=\"node.isRunning\" (ngModelChange)='recalculateTime(node)'>\r\n                    </label>\r\n                    <label>\r\n                        Jump:\r\n                        <input type='checkbox' name='jump-{{i}}' [(ngModel)]=\"node.jump\" (ngModelChange)='recalculateTime(node)'>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class='row'>\r\n                <label class='col-sm-4 text-right' for='wait-{{i}}'>Wait ticks:</label>\r\n                <input class='col-sm-6 text-left input-sm' type='number' name='wait-{{i}}' [(ngModel)]=\"node.wait\" (ngModelChange)='recalculateTime(node)'>\r\n            </div>\r\n            <div class='row'>\r\n                <label class='col-sm-4 text-right' for='moveX-{{i}}'>Move X:</label>\r\n                <input class='col-sm-6 text-left input-sm' type='number' name='moveX-{{i}}' [(ngModel)]=\"node.moveX\" (ngModelChange)='recalculateTime(node)'>\r\n            </div>\r\n            <div class='row'>\r\n                <label class='col-sm-4 text-right' for='moveY-{{i}}'>Move Y:</label>\r\n                <input class='col-sm-6 text-left input-sm' type='number' name='moveY-{{i}}' max='1.2' [(ngModel)]=\"node.moveY\" (ngModelChange)='recalculateTime(node)'>\r\n            </div>\r\n            <div class='row'>\r\n                <label class='col-sm-4 text-right' for='moveZ-{{i}}'>Move Z:</label>\r\n                <input class='col-sm-6 text-left input-sm' type='number' name='moveZ-{{i}}' [(ngModel)]=\"node.moveZ\" (ngModelChange)='recalculateTime(node)'>\r\n            </div>\r\n            <div *ngIf='node.moveY || node.jump'>\r\n                <div class='row'>\r\n                    <label class='col-sm-4 text-right' for='moveYStart-{{i}}'>Move Y offset tick:</label>\r\n                    <input class='col-sm-6 text-left input-sm' type='number' name='moveYStart-{{i}}' min='0' [(ngModel)]=\"node.moveYStart\" (ngModelChange)='recalculateTime(node)'>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <label>This will take {{node.ticks + node.wait}} ticks</label>\r\n            </div>\r\n            <hr>\r\n        </div>\r\n\r\n        <div *ngIf=\"output.runTrig\">\r\n            <h3>Add to runner.mcfunction</h3>\r\n            <textarea rows='2' readonly>{{output.runTrig}}</textarea>\r\n        </div>\r\n\r\n        <div *ngIf=\"output.trigger\">\r\n            <h3>Stub {{input.sequence}}.trigger.mcfunction</h3>\r\n            <textarea rows='2' readonly>{{output.trigger}}</textarea>\r\n        </div>\r\n\r\n        <div *ngIf=\"output.start\">\r\n            <h3>{{input.sequence}}.start.mcfunction</h3>\r\n            <textarea rows='2' readonly>{{output.start}}</textarea>\r\n        </div>\r\n\r\n        <div *ngIf=\"output.runner\">\r\n            <h3>{{input.sequence}}.runner.mcfunction</h3>\r\n            <textarea rows='7' readonly>{{output.runner}}</textarea>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/minecraft/villager-pathfinding/villager-pathfinding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillagerPathfindingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VillagerPathfindingComponent = (function () {
    function VillagerPathfindingComponent() {
        this.input = {
            npcTag: '',
            sequence: '',
            nodes: [{
                    wait: 0,
                    moveX: 0,
                    moveY: 0,
                    moveZ: 0,
                    jump: false,
                    moveYStart: 0,
                    isRunning: false,
                    ticks: 0,
                }],
            start: {
                x: 0,
                y: 0,
                z: 0,
                pitch: 0,
                yaw: 0,
            }
        };
        this.output = {
            runner: '',
            runTrig: '',
            trigger: '',
            start: '',
            alert: '',
            config: ''
        };
    }
    VillagerPathfindingComponent.prototype.ngOnInit = function () {
    };
    VillagerPathfindingComponent.prototype.addNode = function () {
        this.output.alert = '';
        this.input.nodes.push({
            wait: 0,
            moveX: 0,
            moveY: 0,
            moveZ: 0,
            jump: false,
            moveYStart: 0,
            isRunning: false,
            ticks: 0,
        });
    };
    VillagerPathfindingComponent.prototype.removeNode = function (index) {
        this.output.alert = '';
        this.input.nodes.splice(index, 1);
    };
    VillagerPathfindingComponent.prototype.recalculateTime = function (node) {
        this.output.alert = '';
        if (node.jump && node.moveY > 1.2) {
            node.moveY = 1.2;
        }
        //get distance traveled
        var distance = Math.sqrt(Math.pow(node.moveX, 2) + Math.pow(node.moveZ, 2));
        //get approx. tick length
        var speed = node.isRunning ? 0.25 : 0.2;
        var approxTicks = distance / speed;
        //round up
        node.ticks = Math.ceil(approxTicks);
        var approxYTicks = 0;
        if (node.moveY || node.jump) {
            if (node.jump) {
                approxYTicks = Math.ceil(6 + (1.2 - node.moveY) / 0.2);
            }
            else {
                approxYTicks = Math.ceil(Math.abs(node.moveY) / 0.2);
            }
            approxYTicks += node.moveYStart;
            node.ticks = Math.max(node.ticks, approxYTicks);
        }
    };
    VillagerPathfindingComponent.prototype.generateOutput = function () {
        this.output.alert = '';
        if (!this.input.npcTag || !this.input.sequence) {
            this.output.alert = 'Missing tag or sequence';
            return;
        }
        this.output.runner = 'scoreboard players add @s progress 1\n';
        this.output.runner += "tp @s[score_progress_min=1,score_progress=1] " + this.input.start.x + " " + this.input.start.y + " " + this.input.start.z + " " + this.input.start.pitch + " " + this.input.start.yaw + "\n\n";
        var currentTick = 1;
        for (var _i = 0, _a = this.input.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node.wait)
                currentTick += node.wait;
            if (node.ticks === 0) {
                continue;
            }
            var lastTick = currentTick + node.ticks - 1;
            var xSpeed = node.moveX / node.ticks;
            var zSpeed = node.moveZ / node.ticks;
            this.output.runner += "tp @s[score_progress_min=" + currentTick + ",score_progress=" + lastTick + "] ~" + xSpeed + " ~ ~" + zSpeed + " " + Math.atan2(-xSpeed, zSpeed) * 180 / Math.PI + " 0\n";
            if (node.jump) {
                var jumpStartTick = currentTick + node.moveYStart;
                var jumpMidTick = jumpStartTick + 5;
                var jumpEndTick = jumpMidTick + Math.ceil((1.2 - node.moveY) / 0.2);
                var jumpSpeed = (1.2 - node.moveY) / (jumpEndTick - jumpMidTick);
                this.output.runner += "tp @s[score_progress_min=" + jumpStartTick + ",score_progress=" + jumpMidTick + "] ~ ~.2 ~\n";
                this.output.runner += "tp @s[score_progress_min=" + (jumpMidTick + 1) + ",score_progress=" + jumpEndTick + "] ~ ~-" + jumpSpeed + " ~\n";
            }
            else if (node.moveY) {
                var jumpStartTick = currentTick + node.moveYStart;
                var jumpEndTick = jumpStartTick + Math.ceil(Math.abs(node.moveY) / .2) - 1;
                var jumpSpeed = node.moveY / ((jumpEndTick + 1) - jumpStartTick);
                this.output.runner += "tp @s[score_progress_min=" + jumpStartTick + ",score_progress=" + jumpEndTick + "] ~ ~" + jumpSpeed + " ~\n";
            }
            this.output.runner += '\n';
            currentTick = lastTick + 1;
        }
        this.output.runner += "scoreboard players tag @s[score_progress_min=" + currentTick + "] add " + this.input.npcTag + ":" + this.input.sequence + ":done\n";
        this.output.runner += "scoreboard players tag @s[score_progress_min=" + currentTick + "] remove " + this.input.npcTag + ":" + this.input.sequence;
        this.output.runTrig = "execute @e[type=Villager,tag=" + this.input.npcTag + ":" + this.input.sequence + "] ~ ~ ~ execute @s[tag=!" + this.input.npcTag + ":" + this.input.sequence + ":done] ~ ~ ~ function " + this.input.npcTag + ":" + this.input.sequence + ".runner";
        this.output.trigger = "execute @e[type=Villager,tag=" + this.input.npcTag + "] ~ ~ ~ execute @s[tag=!" + this.input.npcTag + ":" + this.input.sequence + "] ~ ~ ~ execute @s[tag=!" + this.input.npcTag + ":" + this.input.sequence + ":done] ~ ~ ~ function " + this.input.npcTag + ":" + this.input.sequence + ".start";
        this.output.start = "scoreboard players tag @s add " + this.input.npcTag + ":" + this.input.sequence + "\nscoreboard players set @s progress 0";
    };
    VillagerPathfindingComponent.prototype.export = function () {
        this.output.alert = '';
        if (!this.input.npcTag || !this.input.sequence) {
            this.output.alert = 'Missing tag or sequence';
            return;
        }
        this.output.config = JSON.stringify(this.input);
    };
    VillagerPathfindingComponent.prototype.import = function () {
        var _this = this;
        this.output.alert = '';
        if (this.output.config) {
            var imported = JSON.parse(this.output.config);
            //validate top-level structure
            var validators_1 = [
                ('npcTag' in imported),
                ('sequence' in imported),
                ('nodes' in imported),
                ('start' in imported)
            ];
            var valid_1 = true;
            validators_1.forEach(function (validator) {
                if (!validator)
                    valid_1 = false;
            });
            if (!valid_1)
                return this.output.alert = 'Structure given is invalid';
            //validate nodes
            valid_1 = true;
            imported.nodes.forEach(function (node) {
                validators_1 = [
                    ('wait' in node),
                    ('moveX' in node),
                    ('moveY' in node),
                    ('moveZ' in node),
                    ('jump' in node),
                    ('moveYStart' in node),
                    ('isRunning' in node),
                ];
                validators_1.forEach(function (validator) {
                    if (!validator)
                        valid_1 = false;
                });
                if (!valid_1)
                    return _this.output.alert = 'Structure given is invalid';
            });
            //validate start
            validators_1 = [
                ('x' in imported.start),
                ('y' in imported.start),
                ('z' in imported.start),
                ('pitch' in imported.start),
                ('yaw' in imported.start)
            ];
            validators_1.forEach(function (validator) {
                if (!validator)
                    valid_1 = false;
            });
            if (!valid_1)
                return this.output.alert = 'Structure given is invalid';
            if (valid_1) {
                this.input = imported;
                this.input.nodes.forEach(function (node) {
                    _this.recalculateTime(node);
                });
            }
        }
        else {
            this.output.alert = 'No config given';
        }
    };
    VillagerPathfindingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-villager-pathfinding',
            template: __webpack_require__("../../../../../src/app/minecraft/villager-pathfinding/villager-pathfinding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/minecraft/villager-pathfinding/villager-pathfinding.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VillagerPathfindingComponent);
    return VillagerPathfindingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/minecraft/villager-pathfinding/villager-pathfinding.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\n  margin: 0;\n  overflow: hidden;\n  height: 100%; }\n\n@media (min-width: 768px) {\n  #left {\n    position: absolute;\n    top: 0px;\n    bottom: 0;\n    left: 0; }\n  #right {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    overflow-y: scroll; } }\n\n#left {\n  background-color: #EEEEEE;\n  text-align: center;\n  height: 100%; }\n\n#right {\n  height: 100%;\n  text-align: center; }\n\ntextarea {\n  width: 100% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map