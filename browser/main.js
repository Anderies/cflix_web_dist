(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "./src/app/components/movie-detail/movie-detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







const routes = [
    {
        path: '',
        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
    },
    {
        path: "movie-detail/:title-seo/:id",
        component: _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"]
    },
    {
        path: "admin",
        loadChildren: () => __webpack_require__.e(/*! import() | components-film-crud-film-crud-module */ "components-film-crud-film-crud-module").then(__webpack_require__.bind(null, /*! ./components/film-crud/film-crud.module */ "./src/app/components/film-crud/film-crud.module.ts")).then(m => m.FilmCrudModule)
    },
    { path: '**', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'top', useHash: false,
                initialNavigation: 'enabled'
            })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'top', useHash: false,
                        initialNavigation: 'enabled'
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'cilfix';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ads/ads.component */ "./src/app/components/ads/ads.component.ts");
/* harmony import */ var _components_populer_movies_populer_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/populer-movies/populer-movies.component */ "./src/app/components/populer-movies/populer-movies.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _components_latest_movie_latest_movie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/latest-movie/latest-movie.component */ "./src/app/components/latest-movie/latest-movie.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "./src/app/components/movie-detail/movie-detail.component.ts");







// Import your library












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["PathLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_5__["AdsComponent"],
        _components_populer_movies_populer_movies_component__WEBPACK_IMPORTED_MODULE_6__["PopulerMoviesComponent"],
        _components_latest_movie_latest_movie_component__WEBPACK_IMPORTED_MODULE_8__["LatestMovieComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
        _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_15__["MovieDetailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_5__["AdsComponent"],
                    _components_populer_movies_populer_movies_component__WEBPACK_IMPORTED_MODULE_6__["PopulerMoviesComponent"],
                    _components_latest_movie_latest_movie_component__WEBPACK_IMPORTED_MODULE_8__["LatestMovieComponent"],
                    _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                    _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_15__["MovieDetailComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"]
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["PathLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/ads/ads.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/ads/ads.component.ts ***!
  \*************************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AdsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AdsComponent.ɵfac = function AdsComponent_Factory(t) { return new (t || AdsComponent)(); };
AdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdsComponent, selectors: [["app-ads"]], decls: 15, vars: 0, consts: [[1, "colland-iklan", "mt"], [1, "box-iklan-section-1"], [1, "box-iklan"]], template: function AdsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "IKLAN 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "IKLAN 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "IKLAN 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "IKLAN 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".colland-iklan[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 94%;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-top: 2%;\n}\n\n.box-iklan-section-1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-bottom: 1.5%;\n}\n\n.box-iklan-section-1[_ngcontent-%COMP%]   .box-iklan[_ngcontent-%COMP%] {\n  width: 48%;\n  height: 25vh;\n  margin-right: 2%;\n  border: 1px solid gray;\n  text-align: center;\n}\n\n@media only screen and (max-width: 600px) {\n  .box-iklan-section-1[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 1.5%;\n  }\n  .box-iklan-section-1[_ngcontent-%COMP%]   .box-iklan[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 10vh;\n    border: 1px solid gray;\n    margin-top: 5px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZHMvRDpcXEFOREVSSUVTXFxjYW1wXFxjaWxmaXgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkc1xcYWRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fkcy9hZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VSOztBRERRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNHWjs7QURRQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VDTk47RURRTTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUNOVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZHMvYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxhbmQtaWtsYW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuICAgIC5ib3gtaWtsYW4tc2VjdGlvbi0xe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41JTtcclxuICAgICAgICAuYm94LWlrbGFue1xyXG4gICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4ubXR7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA3JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJveC1pa2xhbi1zZWN0aW9uLTF7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNSU7XHJcbiAgICBcclxuICAgICAgICAuYm94LWlrbGFue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY29sbGFuZC1pa2xhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA5NCU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5ib3gtaWtsYW4tc2VjdGlvbi0xIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEuNSU7XG59XG4uYm94LWlrbGFuLXNlY3Rpb24tMSAuYm94LWlrbGFuIHtcbiAgd2lkdGg6IDQ4JTtcbiAgaGVpZ2h0OiAyNXZoO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5ib3gtaWtsYW4tc2VjdGlvbi0xIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMS41JTtcbiAgfVxuICAuYm94LWlrbGFuLXNlY3Rpb24tMSAuYm94LWlrbGFuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ads',
                templateUrl: './ads.component.html',
                styleUrls: ['./ads.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return [""]; };
function HeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GENRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TAHUN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NEGARA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "colland-tabtop": a0 }; };
function HeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.headerTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r31.isTokoped == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.isTokoped = false;
    }
    ngOnInit() {
    }
    headerTop() {
        this.isTokoped = !this.isTokoped;
        console.log("boom", this.isTokoped);
        this.router.navigate(['']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 2, consts: [["class", "colland-header isDesktop", 4, "ngIf"], ["class", "colland-tab isMobile", 3, "ngClass", 4, "ngIf"], [1, "colland-header", "isDesktop"], [1, "box-logo", 3, "routerLink"], ["src", "../../../assets/images/logo_cflix_putih 1.png", 1, "img-logo"], [1, "box-genre-header"], [1, "align-self-center", 2, "margin-left", "2.5%"], [1, "align-self-center"], [1, "search-bar-section"], [1, "length-search"], [1, "colland-tab", "isMobile", 3, "ngClass"], [1, "box-logo"], ["src", "../../../assets/images/logo_cflix_putih 1.png", 1, "img-logo", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 12, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 9, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url !== "/admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url !== "/admin");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".colland-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12vh;\n  background-color: #CF3F3D;\n  display: flex;\n  padding-left: 3.5%;\n  padding-right: 3.5%;\n}\n.colland-header[_ngcontent-%COMP%]   .box-logo[_ngcontent-%COMP%] {\n  width: 15%;\n  display: flex;\n  outline-width: 0;\n}\n.colland-header[_ngcontent-%COMP%]   .box-logo[_ngcontent-%COMP%]   .img-logo[_ngcontent-%COMP%] {\n  width: 80%;\n  height: auto;\n  align-self: center;\n}\n.colland-header[_ngcontent-%COMP%]   .box-genre-header[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n}\n.colland-header[_ngcontent-%COMP%]   .box-genre-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: roboto-bold;\n  margin-right: 3%;\n}\n.colland-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  color: white;\n}\n.colland-header[_ngcontent-%COMP%]   .search-bar-section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 25%;\n  height: 50%;\n  align-self: center;\n}\n.colland-header[_ngcontent-%COMP%]   .search-bar-section[_ngcontent-%COMP%]   .length-search[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid black;\n  border-radius: 5px;\n}\n.isMobile[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .isDesktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .isMobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .colland-tabtop[_ngcontent-%COMP%] {\n    top: 0 !important;\n  }\n\n  .colland-tab[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 5;\n    bottom: 0;\n    width: 100%;\n    height: 9vh;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    background-color: #CF3F3D;\n    display: flex;\n  }\n  .colland-tab[_ngcontent-%COMP%]   .box-logo[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    outline-width: 0;\n    justify-content: space-around;\n  }\n  .colland-tab[_ngcontent-%COMP%]   .box-logo[_ngcontent-%COMP%]   .img-logo[_ngcontent-%COMP%] {\n    align-self: center;\n    width: 64px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXEFOREVSSUVTXFxjYW1wXFxjaWxmaXgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FSO0FEQ1E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ1o7QURJSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDRlI7QURHUTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7QUNEWjtBREtJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hSO0FETUk7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0pSO0FETVE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0paO0FEU0E7RUFDSSxhQUFBO0FDTko7QURTQTtFQUNJO0lBQ0ksd0JBQUE7RUNOTjs7RURRRTtJQUNJLGNBQUE7RUNMTjs7RURPRTtJQUNJLGlCQUFBO0VDSk47O0VETUU7SUFDSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7RUNITjtFREtNO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0VDSFY7RURJVTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtFQ0ZkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGFuZC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEydmg7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGM0YzRDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjUlO1xyXG4gICAgXHJcbiAgICAuYm94LWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBvdXRsaW5lLXdpZHRoOiAwO1xyXG4gICAgICAgIC5pbWctbG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAuYm94LWdlbnJlLWhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogcm9ib3RvLWJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJhci1zZWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgICAubGVuZ3RoLXNlYXJjaCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmlzTW9iaWxle1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaXNEZXNrdG9we1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmlzTW9iaWxle1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNvbGxhbmQtdGFidG9we1xyXG4gICAgICAgIHRvcDogMCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29sbGFuZC10YWJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOXZoO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRjNGM0Q7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgXHJcbiAgICAgICAgLmJveC1sb2dve1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgb3V0bGluZS13aWR0aDogMDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIC5pbWctbG9nb3tcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIuY29sbGFuZC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0YzRjNEO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDMuNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDMuNSU7XG59XG4uY29sbGFuZC1oZWFkZXIgLmJveC1sb2dvIHtcbiAgd2lkdGg6IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cbi5jb2xsYW5kLWhlYWRlciAuYm94LWxvZ28gLmltZy1sb2dvIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uY29sbGFuZC1oZWFkZXIgLmJveC1nZW5yZS1oZWFkZXIge1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbGxhbmQtaGVhZGVyIC5ib3gtZ2VucmUtaGVhZGVyIHAge1xuICBmb250LWZhbWlseTogcm9ib3RvLWJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMyU7XG59XG4uY29sbGFuZC1oZWFkZXIgcCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb2xsYW5kLWhlYWRlciAuc2VhcmNoLWJhci1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5jb2xsYW5kLWhlYWRlciAuc2VhcmNoLWJhci1zZWN0aW9uIC5sZW5ndGgtc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pc01vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmlzRGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlzTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jb2xsYW5kLXRhYnRvcCB7XG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29sbGFuZC10YWIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDl2aDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0YzRjNEO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmNvbGxhbmQtdGFiIC5ib3gtbG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG4gIC5jb2xsYW5kLXRhYiAuYm94LWxvZ28gLmltZy1sb2dvIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDY0cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_log_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/log-update.service */ "./src/app/services/log-update.service.ts");
/* harmony import */ var _ads_ads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ads/ads.component */ "./src/app/components/ads/ads.component.ts");
/* harmony import */ var _populer_movies_populer_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../populer-movies/populer-movies.component */ "./src/app/components/populer-movies/populer-movies.component.ts");
/* harmony import */ var _latest_movie_latest_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../latest-movie/latest-movie.component */ "./src/app/components/latest-movie/latest-movie.component.ts");






class HomepageComponent {
    constructor(sw) {
        this.sw = sw;
        this.sw.checkForUpdates();
    }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_log_update_service__WEBPACK_IMPORTED_MODULE_1__["LogUpdateService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 3, vars: 0, template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-populer-movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-latest-movie");
    } }, directives: [_ads_ads_component__WEBPACK_IMPORTED_MODULE_2__["AdsComponent"], _populer_movies_populer_movies_component__WEBPACK_IMPORTED_MODULE_3__["PopulerMoviesComponent"], _latest_movie_latest_movie_component__WEBPACK_IMPORTED_MODULE_4__["LatestMovieComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: src_app_services_log_update_service__WEBPACK_IMPORTED_MODULE_1__["LogUpdateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/latest-movie/latest-movie.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/latest-movie/latest-movie.component.ts ***!
  \*******************************************************************/
/*! exports provided: LatestMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestMovieComponent", function() { return LatestMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "background-image": a0 }; };
function LatestMovieComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LatestMovieComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const slide_r95 = ctx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.clickMovie(slide_r95); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0,0,0,0.7)),\n            url(" + slide_r95.picture + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r95.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 3, slide_r95.title, 0, 26));
} }
class LatestMovieComponent {
    constructor(router, movieService) {
        this.router = router;
        this.movieService = movieService;
        this.txt = "BANGKE LAH SIH BALAR ASKODKKSAASDSADSAASDSADSASADSA ASDSADSAD DSADSADSADSADSA";
        this.slides = [
            {
                title: "1",
                img: "https://movies.alldbx.com/images/default_person.1d043.png"
            },
            {
                title: "2",
                img: "https://movies.alldbx.com/images/default_person.1d043.png"
            },
            {
                title: "2",
                img: "https://movies.alldbx.com/images/default_person.1d043.png"
            },
            {
                title: "2",
                img: "https://movies.alldbx.com/images/default_person.1d043.png"
            },
        ];
    }
    ngOnInit() {
        this.getListMovie();
    }
    clickMovie(slide) {
        console.log("boom", slide);
        this.router.navigate([`movie-detail/${slide.title_seo}/${slide.id}`]);
    }
    getListMovie() {
        this.movieService.getListMovie().subscribe((result) => {
            console.log("data", result);
            this.slides = result.data;
            console.log("slides", this.slides);
        }, error => {
            alert(error);
        });
    }
}
LatestMovieComponent.ɵfac = function LatestMovieComponent_Factory(t) { return new (t || LatestMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"])); };
LatestMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LatestMovieComponent, selectors: [["app-latest-movie"]], decls: 10, vars: 1, consts: [[1, "colland-movies"], [1, "d-flex", "justify-content-between", 2, "margin-right", "1.5%"], [1, "txt-title"], [1, "align-self-end", "txt-lihat-semua"], [1, "slider-grid"], [1, "slider", 2, "margin-top", "1.5%"], ["class", "box-movies", "style", "cursor: pointer;", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "box-movies", 2, "cursor", "pointer", 3, "ngStyle", "click"], [1, "ngebawahin"], [1, "box-banner"], [1, "rating-banner"], [1, "hd-banner"], [1, "box-judul-film"], [1, "txt-film"]], template: function LatestMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Baru di Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lihat Semua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LatestMovieComponent_div_8_Template, 13, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".colland-movies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 94%;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-top: 4%;\n  margin-bottom: 7%;\n}\n.colland-movies[_ngcontent-%COMP%]   .txt-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: roboto-bold;\n  letter-spacing: 1.7px;\n  border-bottom: 3px solid rgba(0, 0, 0, 0.8);\n  padding-bottom: 5px;\n  padding-right: 2%;\n}\n.colland-movies[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto auto auto auto;\n  grid-row-gap: 30px;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 260px;\n  margin-right: 1.5%;\n  border-radius: 5px;\n  box-shadow: 0.1px 4px 11px 0 grey;\n  background-position: center;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .hd-banner[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 20%;\n  background: #93f291;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  display: flex;\n  z-index: 2;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .hd-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: roboto-med;\n  align-self: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .rating-banner[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 20%;\n  border-top-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background: #93f291;\n  z-index: 2;\n  text-align: center;\n  display: flex;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .rating-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: roboto-med;\n  align-self: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .txt-film[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  text-align: center;\n  font-family: roboto-med;\n  letter-spacing: 0.7px;\n  font-size: 16px;\n  color: white;\n  text-shadow: 1px 0.5px 2px #a9a9a9;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-judul-film[_ngcontent-%COMP%] {\n  position: absolute;\n  align-self: center;\n  bottom: 8px;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  width: 198px;\n  height: 219px;\n  opacity: 0.7;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .img-movie[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 1s;\n}\n@media only screen and (max-width: 600px) {\n  .colland-movies[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 94%;\n    margin-left: 3%;\n    margin-right: 3%;\n    margin-top: 4%;\n    margin-bottom: 25%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .txt-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-family: roboto-med;\n    letter-spacing: none;\n    border-bottom: 3px solid rgba(0, 0, 0, 0.8);\n    padding-bottom: 5px;\n    padding-right: 2%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .txt-lihat-semua[_ngcontent-%COMP%] {\n    font-family: roboto-med;\n    font-size: 14px;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    height: 280px;\n    overflow-x: auto;\n    padding-top: 3%;\n    padding-bottom: 3%;\n    padding-left: 2%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%] {\n    width: 47%;\n    margin-right: 5%;\n    flex-shrink: 0;\n    height: 100%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .hd-banner[_ngcontent-%COMP%] {\n    height: 35px;\n    width: 20%;\n    background: #93f291;\n    border-top-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n    display: flex;\n    z-index: 2;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .hd-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: roboto-med;\n    align-self: center;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    color: red;\n    text-shadow: white;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .rating-banner[_ngcontent-%COMP%] {\n    height: 35px;\n    width: 20%;\n    border-top-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    background: #93f291;\n    z-index: 2;\n    text-align: center;\n    display: flex;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .rating-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: roboto-med;\n    align-self: center;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .txt-film[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    text-align: center;\n    font-family: roboto-med;\n    letter-spacing: 0.7px;\n    font-size: 14px;\n    color: white;\n    text-shadow: 1px 0.5px 2px #a9a9a9;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .txt-tahun-film[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    text-align: center;\n    font-family: roboto-med;\n    letter-spacing: 0.7px;\n    font-size: 12px;\n    color: white;\n    text-shadow: 1px 0.5px 2px #a9a9a9;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-judul-film[_ngcontent-%COMP%] {\n    position: absolute;\n    align-self: center;\n    bottom: 8px;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    width: 198px;\n    height: 219px;\n    opacity: 0.7;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .img-movie[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 5px;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXRlc3QtbW92aWUvRDpcXEFOREVSSUVTXFxjYW1wXFxjaWxmaXgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxhdGVzdC1tb3ZpZVxcbGF0ZXN0LW1vdmllLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhdGVzdC1tb3ZpZS9sYXRlc3QtbW92aWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRVI7QURBSTtFQUNJLGFBQUE7RUFDQSxvREFBQTtFQUNBLGtCQUFBO0FDRVI7QURDSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUNBUjtBRENRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ1o7QURBWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0VoQjtBRERnQjtFQUlJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNBcEI7QURDb0I7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0N4QjtBREVnQjtFQUlJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0hwQjtBRElvQjtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRnhCO0FETVk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUNKaEI7QURNWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSmhCO0FETVk7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDSmhCO0FETVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0poQjtBRFNJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDUFI7QURXQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQ1JOO0VEU007SUFDSSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQkFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ1BWO0VEVU07SUFDSSx1QkFBQTtJQUNBLGVBQUE7RUNSVjtFRFVNO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQ1JWO0VEV007SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFQ1RWO0VEVVU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0VDUmQ7RURVa0I7SUFDSSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsNEJBQUE7SUFDQSw4QkFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VDUnRCO0VEU3NCO0lBQ0ksdUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUNQMUI7RURVa0I7SUFDSSxZQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO0lBQ0EsK0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUNSdEI7RURTc0I7SUFDSSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ1AxQjtFRFdjO0lBQ0ksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGtDQUFBO0VDVGxCO0VEV2M7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0Esa0NBQUE7RUNUbEI7RURXYztJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDVGxCO0VEV2M7SUFDSSxvQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VDVGxCO0VEV2M7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO09BQUEsaUJBQUE7SUFDQSxrQkFBQTtFQ1RsQjtFRGNNO0lBQ0ksZUFBQTtFQ1pWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhdGVzdC1tb3ZpZS9sYXRlc3QtbW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGFuZC1tb3ZpZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTQlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XHJcbiAgICAudHh0LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1ib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjdweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3gtbW92aWVzIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMC41cHggc29saWQgZ3JheTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMC4xcHggNHB4IDExcHggMCBncmV5O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAubmdlYmF3YWhpbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAuYm94LWJhbm5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgLmhkLWJhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxlZnQ6IDE3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzkzZjI5MTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJhdGluZy1iYW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAzJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50eHQtZmlsbSB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAwLjVweCAycHggI2E5YTlhOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWp1ZHVsLWZpbG0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE5OHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMTlweDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1nLW1vdmllIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJveC1tb3ZpZXM6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbGxhbmQtbW92aWVzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNSU7XHJcbiAgICAgICAgLnR4dC10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50eHQtbGloYXQtc2VtdWEge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogcm9ib3RvLW1lZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJveC1tb3ZpZXMge1xyXG4gICAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAubmdlYmF3YWhpbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC5ib3gtYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAuaGQtYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmF0aW5nLWJhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnR4dC1maWxtIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAwLjVweCAycHggI2E5YTlhOTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50eHQtdGFodW4tZmlsbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMC41cHggMnB4ICNhOWE5YTk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm94LWp1ZHVsLWZpbG0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTk4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMTlweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nLW1vdmllIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm94LW1vdmllczpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmNvbGxhbmQtbW92aWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogNyU7XG59XG4uY29sbGFuZC1tb3ZpZXMgLnR4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1ib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMS43cHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuLmNvbGxhbmQtbW92aWVzIC5zbGlkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICBncmlkLXJvdy1nYXA6IDMwcHg7XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEuNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMC4xcHggNHB4IDExcHggMCBncmV5O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAuYm94LWJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAuYm94LWJhbm5lciAuaGQtYmFubmVyIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMjAlO1xuICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDI7XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1iYW5uZXIgLmhkLWJhbm5lciBwIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAuYm94LWJhbm5lciAucmF0aW5nLWJhbm5lciB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1iYW5uZXIgLnJhdGluZy1iYW5uZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLnR4dC1maWxtIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAxcHggMC41cHggMnB4ICNhOWE5YTk7XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1qdWR1bC1maWxtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvdHRvbTogOHB4O1xufVxuLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC5vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOThweDtcbiAgaGVpZ2h0OiAyMTlweDtcbiAgb3BhY2l0eTogMC43O1xufVxuLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC5pbWctbW92aWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiAxcztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29sbGFuZC1tb3ZpZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIG1hcmdpbi1ib3R0b206IDI1JTtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLnR4dC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xuICAgIGxldHRlci1zcGFjaW5nOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLnR4dC1saWhhdC1zZW11YSB7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAuc2xpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIHtcbiAgICB3aWR0aDogNDclO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1iYW5uZXIgLmhkLWJhbm5lciB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYmFja2dyb3VuZDogIzkzZjI5MTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC5ib3gtYmFubmVyIC5oZC1iYW5uZXIgcCB7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LXNoYWRvdzogd2hpdGU7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC5ib3gtYmFubmVyIC5yYXRpbmctYmFubmVyIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC5ib3gtYmFubmVyIC5yYXRpbmctYmFubmVyIHAge1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAudHh0LWZpbG0ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogcm9ib3RvLW1lZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDAuNXB4IDJweCAjYTlhOWE5O1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAudHh0LXRhaHVuLWZpbG0ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogcm9ib3RvLW1lZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDAuNXB4IDJweCAjYTlhOWE5O1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAuYm94LWp1ZHVsLWZpbG0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm90dG9tOiA4cHg7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC5vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxOThweDtcbiAgICBoZWlnaHQ6IDIxOXB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmltZy1tb3ZpZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXM6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-latest-movie',
                templateUrl: './latest-movie.component.html',
                styleUrls: ['./latest-movie.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/movie-detail/movie-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MovieDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Iklan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Iklan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Judul Film (2020)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Genre : Horror, Action, Drama");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Actor : yayan ruhian, sule prikitiew, andre taulany, raffi ahmad. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sutradara : Andreas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Sinopsis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dara dan Bima melanggar batas tanpa tahu konsekuensinya. Mereka berusaha menjalani tanggung jawab atas pilihan mereka. Mereka pikir mereka siap jadi dewasa untuk menghadapi segala konsekuensinya. Keluguan mereka langsung diuji saat keluarga yang amat mencintai mereka tahu, lalu memaksa masuk dalam perjalanan pilihan mereka. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.safeVideoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
class MovieDetailComponent {
    constructor(movieService, sanitizer, route, router) {
        this.movieService = movieService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.router = router;
        this.isLoadingMovie = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log("params", params.id);
            this.getMovieDetail(params.id);
        });
    }
    getMovieDetail(id) {
        this.isLoadingMovie = true;
        this.movieService.getOneMovie(id).subscribe((result) => {
            this.isLoadingMovie = false;
            this.dataVideo = result.data[0].url_video;
            console.log("boom", this.dataVideo);
            this.safeVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataVideo);
        }, error => {
            alert(error.message);
            this.isLoadingMovie = false;
            // console.log("error",error);
            // this.router.navigate(['']);
        });
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "colland-movie", 4, "ngIf"], [1, "colland-movie"], [1, "cflix-video"], [1, "banner-iklan", "isDesktop"], ["allowfullscreen", "", 1, "iframe-video", 3, "src"], [1, "lining-movies"], [1, "movie-description"], [1, "box-image-movie", "isDesktop"], ["src", "https://movies.alldbx.com/images/default_person.1d043.png"], [1, "box-film-section"], [1, "txt-judul-film"], [1, "txt-biasa-film"], [1, "box-trailer-share", "isDesktop"], ["src", "../../../assets/images/trailer.png", 1, "trailer"], ["src", "../../../assets/images/share.png", 1, "share"], [1, "sinopsis-section"], [1, "txt-sinopsis"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailComponent_div_1_Template, 30, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoadingMovie);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoadingMovie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".colland-movie[_ngcontent-%COMP%] {\n  width: 94%;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-top: 3%;\n}\n.colland-movie[_ngcontent-%COMP%]   .txt-judul-film[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: roboto-bold;\n  letter-spacing: 0.7;\n  margin-bottom: 0.5rem;\n}\n.colland-movie[_ngcontent-%COMP%]   .txt-genre-film[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 0.1rem;\n}\n.colland-movie[_ngcontent-%COMP%]   .txt-biasa-film[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 0.1rem;\n}\n.colland-movie[_ngcontent-%COMP%]   .cflix-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75vh;\n  display: flex;\n}\n.colland-movie[_ngcontent-%COMP%]   .cflix-video[_ngcontent-%COMP%]   .banner-iklan[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100%;\n  border: 1px solid black;\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n  border-radius: 5px;\n  flex-direction: column;\n  justify-content: center;\n}\n.colland-movie[_ngcontent-%COMP%]   .cflix-video[_ngcontent-%COMP%]   .banner-iklan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  align-self: center;\n  color: white;\n}\n.colland-movie[_ngcontent-%COMP%]   .cflix-video[_ngcontent-%COMP%]   .iframe-video[_ngcontent-%COMP%] {\n  width: 68%;\n  height: 100%;\n}\n.colland-movie[_ngcontent-%COMP%]   .sinopsis-section[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 15%;\n}\n.colland-movie[_ngcontent-%COMP%]   .sinopsis-section[_ngcontent-%COMP%]   .txt-sinopsis[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.colland-movie[_ngcontent-%COMP%]   .lining-movies[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 2px solid gray;\n}\n.colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%] {\n  display: flex;\n}\n.colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-film-section[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n}\n.colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-trailer-share[_ngcontent-%COMP%] {\n  width: 10%;\n  justify-content: flex-end;\n  display: flex;\n  justify-content: space-evenly;\n}\n.colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-trailer-share[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-image-movie[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 215px;\n  margin-right: 2%;\n}\n.colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-image-movie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 215px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.isDesktop[_ngcontent-%COMP%] {\n  display: block;\n}\n@media only screen and (max-width: 600px) {\n  body[_ngcontent-%COMP%] {\n    background-color: black;\n  }\n\n  .colland-movie[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 3%;\n    padding-right: 3%;\n    padding-top: 3%;\n    padding-bottom: 20%;\n    background-color: black;\n    opacity: 0.9;\n    margin: 0;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .isDesktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .txt-judul-film[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: roboto-bold;\n    letter-spacing: 0.7;\n    margin-bottom: 0.5rem;\n    color: white;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .txt-genre-film[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 0.1rem;\n    color: white;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .txt-biasa-film[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 0.1rem;\n    color: white;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .cflix-video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 29vh;\n    display: flex;\n    color: white;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .cflix-video[_ngcontent-%COMP%]   .iframe-video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    margin-right: 1%;\n    margin-left: 1%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 7px;\n    border-color: gold;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .sinopsis-section[_ngcontent-%COMP%] {\n    margin-top: 2%;\n    margin-bottom: 15%;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .sinopsis-section[_ngcontent-%COMP%]   .txt-sinopsis[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: justify;\n    color: white;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .lining-movies[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    border: 2px solid goldenrod;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-film-section[_ngcontent-%COMP%] {\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-trailer-share[_ngcontent-%COMP%] {\n    width: 10%;\n    justify-content: flex-end;\n    display: flex;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-trailer-share[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-image-movie[_ngcontent-%COMP%] {\n    width: 15%;\n    height: 250px;\n    margin-right: 2%;\n  }\n  .colland-movie[_ngcontent-%COMP%]   .movie-description[_ngcontent-%COMP%]   .box-image-movie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 215px;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1kZXRhaWwvRDpcXEFOREVSSUVTXFxjYW1wXFxjaWxmaXgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vdmllLWRldGFpbFxcbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ1I7QURFSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNBUjtBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQVI7QURDUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNFaEI7QURDUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ1o7QURHSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0RSO0FERVE7RUFDSSxlQUFBO0FDQVo7QURHSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUNEUjtBRElJO0VBQ0ksYUFBQTtBQ0ZSO0FER1E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRFo7QURHUTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0RaO0FERVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FoQjtBREdRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0RaO0FERVk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNBaEI7QURNQTtFQUNJLGNBQUE7QUNISjtBRE1BO0VBRUk7SUFDSSx1QkFBQTtFQ0pOOztFRE9FO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VDSk47RURLTTtJQUNJLHdCQUFBO0VDSFY7RURLTTtJQUNJLGVBQUE7SUFDQSx3QkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0VDSFY7RURNTTtJQUNJLGVBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7RUNKVjtFRE1NO0lBQ0ksZUFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtFQ0pWO0VETU07SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VDSlY7RURPVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7T0FBQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNMZDtFRFNNO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0VDUFY7RURRVTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUNOZDtFRFNNO0lBQ0ksa0JBQUE7SUFDQSwyQkFBQTtFQ1BWO0VEVU07SUFDSSxhQUFBO0VDUlY7RURTVTtJQUNJLFVBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUNQZDtFRFNVO0lBQ0ksVUFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtFQ1BkO0VEUWM7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ05sQjtFRFNVO0lBQ0ksVUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQ1BkO0VEUWM7SUFDSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG9CQUFBO09BQUEsaUJBQUE7RUNObEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsYW5kLW1vdmllIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcblxyXG4gICAgLnR4dC1qdWR1bC1maWxtIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1ib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC50eHQtZ2VucmUtZmlsbSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICAgIH1cclxuICAgIC50eHQtYmlhc2EtZmlsbSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICAgIH1cclxuICAgIC5jZmxpeC12aWRlbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmJhbm5lci1pa2xhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pZnJhbWUtdmlkZW8ge1xyXG4gICAgICAgICAgICB3aWR0aDogNjglO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaW5vcHNpcy1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbiAgICAgICAgLnR4dC1zaW5vcHNpcyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGluaW5nLW1vdmllcyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vdmllLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5ib3gtZmlsbS1zZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC10cmFpbGVyLXNoYXJlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94LWltYWdlLW1vdmllIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMTVweDtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaXNEZXNrdG9we1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICBib2R5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2xsYW5kLW1vdmllIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgLmlzRGVza3RvcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgIH0gICBcclxuICAgICAgICAudHh0LWp1ZHVsLWZpbG0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tYm9sZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnR4dC1nZW5yZS1maWxtIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnR4dC1iaWFzYS1maWxtIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNmbGl4LXZpZGVvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjl2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcblxyXG4gICAgICAgICAgICAuaWZyYW1lLXZpZGVvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBnb2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnNpbm9wc2lzLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gICAgICAgICAgICAudHh0LXNpbm9wc2lzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmluZy1tb3ZpZXMge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGRlbnJvZDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAubW92aWUtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAuYm94LWZpbG0tc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC10cmFpbGVyLXNoYXJlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtaW1hZ2UtbW92aWUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIiwiLmNvbGxhbmQtbW92aWUge1xuICB3aWR0aDogOTQlO1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuLmNvbGxhbmQtbW92aWUgLnR4dC1qdWR1bC1maWxtIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogcm9ib3RvLWJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5jb2xsYW5kLW1vdmllIC50eHQtZ2VucmUtZmlsbSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xufVxuLmNvbGxhbmQtbW92aWUgLnR4dC1iaWFzYS1maWxtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XG59XG4uY29sbGFuZC1tb3ZpZSAuY2ZsaXgtdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbGxhbmQtbW92aWUgLmNmbGl4LXZpZGVvIC5iYW5uZXItaWtsYW4ge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbGxhbmQtbW92aWUgLmNmbGl4LXZpZGVvIC5iYW5uZXItaWtsYW4gcCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbGxhbmQtbW92aWUgLmNmbGl4LXZpZGVvIC5pZnJhbWUtdmlkZW8ge1xuICB3aWR0aDogNjglO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29sbGFuZC1tb3ZpZSAuc2lub3BzaXMtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tYm90dG9tOiAxNSU7XG59XG4uY29sbGFuZC1tb3ZpZSAuc2lub3BzaXMtc2VjdGlvbiAudHh0LXNpbm9wc2lzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbGxhbmQtbW92aWUgLmxpbmluZy1tb3ZpZXMge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG59XG4uY29sbGFuZC1tb3ZpZSAubW92aWUtZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbGxhbmQtbW92aWUgLm1vdmllLWRlc2NyaXB0aW9uIC5ib3gtZmlsbS1zZWN0aW9uIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb2xsYW5kLW1vdmllIC5tb3ZpZS1kZXNjcmlwdGlvbiAuYm94LXRyYWlsZXItc2hhcmUge1xuICB3aWR0aDogMTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5jb2xsYW5kLW1vdmllIC5tb3ZpZS1kZXNjcmlwdGlvbiAuYm94LXRyYWlsZXItc2hhcmUgaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cbi5jb2xsYW5kLW1vdmllIC5tb3ZpZS1kZXNjcmlwdGlvbiAuYm94LWltYWdlLW1vdmllIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cbi5jb2xsYW5kLW1vdmllIC5tb3ZpZS1kZXNjcmlwdGlvbiAuYm94LWltYWdlLW1vdmllIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxNXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmlzRGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmNvbGxhbmQtbW92aWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMyU7XG4gICAgcGFkZGluZy1yaWdodDogMyU7XG4gICAgcGFkZGluZy10b3A6IDMlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZSAuaXNEZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWUgLnR4dC1qdWR1bC1maWxtIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90by1ib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjc7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZSAudHh0LWdlbnJlLWZpbG0ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllIC50eHQtYmlhc2EtZmlsbSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWUgLmNmbGl4LXZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI5dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWUgLmNmbGl4LXZpZGVvIC5pZnJhbWUtdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyLWNvbG9yOiBnb2xkO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllIC5zaW5vcHNpcy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWUgLnNpbm9wc2lzLXNlY3Rpb24gLnR4dC1zaW5vcHNpcyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllIC5saW5pbmctbW92aWVzIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZGVucm9kO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllIC5tb3ZpZS1kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZSAubW92aWUtZGVzY3JpcHRpb24gLmJveC1maWxtLXNlY3Rpb24ge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllIC5tb3ZpZS1kZXNjcmlwdGlvbiAuYm94LXRyYWlsZXItc2hhcmUge1xuICAgIHdpZHRoOiAxMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5jb2xsYW5kLW1vdmllIC5tb3ZpZS1kZXNjcmlwdGlvbiAuYm94LXRyYWlsZXItc2hhcmUgaW1nIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWUgLm1vdmllLWRlc2NyaXB0aW9uIC5ib3gtaW1hZ2UtbW92aWUge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllIC5tb3ZpZS1kZXNjcmlwdGlvbiAuYm94LWltYWdlLW1vdmllIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMTVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-detail',
                templateUrl: './movie-detail.component.html',
                styleUrls: ['./movie-detail.component.scss']
            }]
    }], function () { return [{ type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/populer-movies/populer-movies.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/populer-movies/populer-movies.component.ts ***!
  \***********************************************************************/
/*! exports provided: PopulerMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopulerMoviesComponent", function() { return PopulerMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "background-image": a0 }; };
function PopulerMoviesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopulerMoviesComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.clickMovie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "7.2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(2020)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0,0,0,0.7)),\n        url(" + slide_r35.img + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 2, ctx_r34.txt, 0, 26));
} }
class PopulerMoviesComponent {
    constructor(router, movieService) {
        this.router = router;
        this.txt = "Default";
        this.slides = [
            {
                title: "1",
                img: "https://movies.alldbx.com/images/default_person.1d043.png"
            },
            {
                title: "2",
                img: "https://movies.alldbx.com/images/default_person.1d043.png"
            },
            {
                title: "3",
                img: "https://movies.alldbx.com/images/default_person.1d043.png"
            },
            {
                title: "4",
                img: "https://movies.alldbx.com/images/default_person.1d043.png"
            },
            {
                title: "5",
                img: "https://movies.alldbx.com/images/default_person.1d043.png"
            },
        ];
    }
    ngOnInit() {
    }
    clickMovie() {
        this.router.navigate(['movie-detail']);
    }
}
PopulerMoviesComponent.ɵfac = function PopulerMoviesComponent_Factory(t) { return new (t || PopulerMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"])); };
PopulerMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopulerMoviesComponent, selectors: [["app-populer-movies"]], decls: 8, vars: 1, consts: [[1, "colland-movies"], [1, "d-flex", "justify-content-between", 2, "margin-right", "1.5%"], [1, "txt-title"], [1, "align-self-end"], [1, "slider", 2, "margin-top", "1.5%"], ["class", "box-movies", "style", "cursor: pointer;", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "box-movies", 2, "cursor", "pointer", 3, "ngStyle", "click"], [1, "ngebawahin"], [1, "box-banner"], [1, "rating-banner"], [1, "hd-banner"], [1, "box-judul-film"], [1, "txt-film"], [1, "txt-tahun-film"]], template: function PopulerMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lihat Semua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PopulerMoviesComponent_div_7_Template, 15, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".colland-movies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 94%;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-top: 2%;\n}\n.colland-movies[_ngcontent-%COMP%]   .txt-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: roboto-bold;\n  letter-spacing: 1.7px;\n  border-bottom: 3px solid rgba(0, 0, 0, 0.8);\n  padding-bottom: 5px;\n  padding-right: 2%;\n}\n.colland-movies[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%] {\n  width: 15.1%;\n  height: 260px;\n  margin-right: 1.5%;\n  border-radius: 5px;\n  box-shadow: 0.1px 4px 11px 0 grey;\n  background-position: center;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .hd-banner[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 20%;\n  background: #93f291;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  display: flex;\n  z-index: 2;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .hd-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: roboto-med;\n  align-self: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .rating-banner[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 20%;\n  border-top-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background: #93f291;\n  z-index: 2;\n  text-align: center;\n  display: flex;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .rating-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: roboto-med;\n  align-self: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .txt-film[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  text-align: center;\n  font-family: roboto-med;\n  letter-spacing: 0.7px;\n  font-size: 16px;\n  color: white;\n  text-shadow: 1px 0.5px 2px #a9a9a9;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-judul-film[_ngcontent-%COMP%] {\n  position: absolute;\n  align-self: center;\n  bottom: 8px;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  width: 198px;\n  height: 219px;\n  opacity: 0.7;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .img-movie[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n.colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 1s;\n}\n@media only screen and (max-width: 600px) {\n  .colland-movies[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 94%;\n    margin-left: 3%;\n    margin-right: 3%;\n    margin-top: 4%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .txt-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n    font-family: roboto-med;\n    letter-spacing: none;\n    border-bottom: 3px solid rgba(0, 0, 0, 0.8);\n    padding-bottom: 5px;\n    padding-right: 2%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .txt-lihat-semua[_ngcontent-%COMP%] {\n    font-family: roboto-med;\n    font-size: 14px;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    height: 280px;\n    overflow-x: auto;\n    padding-top: 3%;\n    padding-bottom: 3%;\n    padding-left: 2%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%] {\n    width: 47%;\n    margin-right: 5%;\n    flex-shrink: 0;\n    height: 100%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .hd-banner[_ngcontent-%COMP%] {\n    height: 35px;\n    width: 20%;\n    background: #93f291;\n    border-top-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n    display: flex;\n    z-index: 2;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .hd-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: roboto-med;\n    align-self: center;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    color: red;\n    text-shadow: white;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .rating-banner[_ngcontent-%COMP%] {\n    height: 35px;\n    width: 20%;\n    border-top-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    background: #93f291;\n    z-index: 2;\n    text-align: center;\n    display: flex;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-banner[_ngcontent-%COMP%]   .rating-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: roboto-med;\n    align-self: center;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .txt-film[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    text-align: center;\n    font-family: roboto-med;\n    letter-spacing: 0.7px;\n    font-size: 14px;\n    color: white;\n    text-shadow: 1px 0.5px 2px #a9a9a9;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .txt-tahun-film[_ngcontent-%COMP%] {\n    align-self: flex-end;\n    text-align: center;\n    font-family: roboto-med;\n    letter-spacing: 0.7px;\n    font-size: 12px;\n    color: white;\n    text-shadow: 1px 0.5px 2px #a9a9a9;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .box-judul-film[_ngcontent-%COMP%] {\n    position: absolute;\n    align-self: center;\n    bottom: 8px;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    width: 198px;\n    height: 219px;\n    opacity: 0.7;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]   .ngebawahin[_ngcontent-%COMP%]   .img-movie[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 5px;\n  }\n  .colland-movies[_ngcontent-%COMP%]   .box-movies[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1bGVyLW1vdmllcy9EOlxcQU5ERVJJRVNcXGNhbXBcXGNpbGZpeC9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9wdWxlci1tb3ZpZXNcXHBvcHVsZXItbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BvcHVsZXItbW92aWVzL3BvcHVsZXItbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNFUjtBREdJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQ0ZSO0FER1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEWjtBREVZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDQWhCO0FEQ2dCO0VBSUksWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0ZwQjtBREdvQjtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRHhCO0FESWdCO0VBSUksWUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDTHBCO0FETW9CO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKeEI7QURRWTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ05oQjtBRFFZO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNOaEI7QURRWTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNOaEI7QURRWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDTmhCO0FEVUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNSUjtBRFlBO0VBQ0k7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ1ROO0VEV007SUFDSSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxvQkFBQTtJQUNBLDJDQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ1RWO0VEWU07SUFDSSx1QkFBQTtJQUNBLGVBQUE7RUNWVjtFRFlNO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQ1ZWO0VEYU07SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFQ1hWO0VEWVU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0VDVmQ7RURZa0I7SUFDSSxZQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsNEJBQUE7SUFDQSw4QkFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VDVnRCO0VEV3NCO0lBQ0ksdUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUNUMUI7RURZa0I7SUFDSSxZQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO0lBQ0EsK0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUNWdEI7RURXc0I7SUFDSSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ1QxQjtFRGFjO0lBQ0ksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGtDQUFBO0VDWGxCO0VEYWM7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0Esa0NBQUE7RUNYbEI7RURhYztJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDWGxCO0VEYWM7SUFDSSxvQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VDWGxCO0VEYWM7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO09BQUEsaUJBQUE7SUFDQSxrQkFBQTtFQ1hsQjtFRGdCTTtJQUNJLGVBQUE7RUNkVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3B1bGVyLW1vdmllcy9wb3B1bGVyLW1vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsYW5kLW1vdmllcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAudHh0LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1ib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjdweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIC8vIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmJveC1tb3ZpZXMge1xyXG4gICAgICAgIHdpZHRoOiAxNS4xJTtcclxuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41JTtcclxuICAgICAgICAvLyBib3JkZXI6IDAuNXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAuMXB4IDRweCAxMXB4IDAgZ3JleTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgLm5nZWJhd2FoaW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLmJveC1iYW5uZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIC5oZC1iYW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0OiAxNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5M2YyOTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogcm9ib3RvLW1lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yYXRpbmctYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzkzZjI5MTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogcm9ib3RvLW1lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudHh0LWZpbG0ge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogcm9ib3RvLW1lZDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMC41cHggMnB4ICNhOWE5YTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1qdWR1bC1maWxtIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOThweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjE5cHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltZy1tb3ZpZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJveC1tb3ZpZXM6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbGxhbmQtbW92aWVzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuXHJcbiAgICAgICAgLnR4dC10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50eHQtbGloYXQtc2VtdWEge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogcm9ib3RvLW1lZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJveC1tb3ZpZXMge1xyXG4gICAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAubmdlYmF3YWhpbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC5ib3gtYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAuaGQtYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmF0aW5nLWJhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnR4dC1maWxtIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAwLjVweCAycHggI2E5YTlhOTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50eHQtdGFodW4tZmlsbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMC41cHggMnB4ICNhOWE5YTk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm94LWp1ZHVsLWZpbG0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTk4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMTlweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nLW1vdmllIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm94LW1vdmllczpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmNvbGxhbmQtbW92aWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbi5jb2xsYW5kLW1vdmllcyAudHh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogcm9ib3RvLWJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjdweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG4uY29sbGFuZC1tb3ZpZXMgLnNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIHtcbiAgd2lkdGg6IDE1LjElO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEuNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMC4xcHggNHB4IDExcHggMCBncmV5O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAuYm94LWJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAuYm94LWJhbm5lciAuaGQtYmFubmVyIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMjAlO1xuICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDI7XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1iYW5uZXIgLmhkLWJhbm5lciBwIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAuYm94LWJhbm5lciAucmF0aW5nLWJhbm5lciB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1iYW5uZXIgLnJhdGluZy1iYW5uZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLnR4dC1maWxtIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAxcHggMC41cHggMnB4ICNhOWE5YTk7XG59XG4uY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1qdWR1bC1maWxtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvdHRvbTogOHB4O1xufVxuLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC5vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOThweDtcbiAgaGVpZ2h0OiAyMTlweDtcbiAgb3BhY2l0eTogMC43O1xufVxuLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC5pbWctbW92aWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiAxcztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29sbGFuZC1tb3ZpZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAudHh0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAudHh0LWxpaGF0LXNlbXVhIHtcbiAgICBmb250LWZhbWlseTogcm9ib3RvLW1lZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5zbGlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMge1xuICAgIHdpZHRoOiA0NyU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAuYm94LWJhbm5lciAuaGQtYmFubmVyIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kOiAjOTNmMjkxO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1iYW5uZXIgLmhkLWJhbm5lciBwIHtcbiAgICBmb250LWZhbWlseTogcm9ib3RvLW1lZDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtc2hhZG93OiB3aGl0ZTtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1iYW5uZXIgLnJhdGluZy1iYW5uZXIge1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICM5M2YyOTE7XG4gICAgei1pbmRleDogMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLmJveC1iYW5uZXIgLnJhdGluZy1iYW5uZXIgcCB7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90by1tZWQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC50eHQtZmlsbSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMC41cHggMnB4ICNhOWE5YTk7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC50eHQtdGFodW4tZmlsbSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG8tbWVkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMC41cHggMnB4ICNhOWE5YTk7XG4gIH1cbiAgLmNvbGxhbmQtbW92aWVzIC5ib3gtbW92aWVzIC5uZ2ViYXdhaGluIC5ib3gtanVkdWwtZmlsbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3R0b206IDhweDtcbiAgfVxuICAuY29sbGFuZC1tb3ZpZXMgLmJveC1tb3ZpZXMgLm5nZWJhd2FoaW4gLm92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE5OHB4O1xuICAgIGhlaWdodDogMjE5cHg7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllcyAubmdlYmF3YWhpbiAuaW1nLW1vdmllIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5jb2xsYW5kLW1vdmllcyAuYm94LW1vdmllczpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopulerMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-populer-movies',
                templateUrl: './populer-movies.component.html',
                styleUrls: ['./populer-movies.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/log-update.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/log-update.service.ts ***!
  \************************************************/
/*! exports provided: LogUpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogUpdateService", function() { return LogUpdateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");




class LogUpdateService {
    constructor(updates) {
        this.updates = updates;
        if (updates.isEnabled) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(6 * 60 * 60).subscribe(() => updates.checkForUpdate()
                .then(() => console.log('checking for updates')));
        }
    }
    checkForUpdates() {
        this.updates.available.subscribe(event => this.promptUser());
    }
    promptUser() {
        console.log('updating to new version');
        this.updates.activateUpdate().then(() => document.location.reload());
    }
}
LogUpdateService.ɵfac = function LogUpdateService_Factory(t) { return new (t || LogUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"])); };
LogUpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogUpdateService, factory: LogUpdateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogUpdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MovieService {
    constructor(http) {
        this.http = http;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.url = "http://cflix.site/cflix_api/backend/";
    }
    // HIT SECOND TO GET PROGRAM
    getListMovie() {
        console.log("this.env", this.env.API_URL);
        return this.http.get(this.env.API_URL + `home/home-new-upload.php`);
    }
    getOneMovie(video_id) {
        let body = new FormData();
        let action = "show";
        body.append('id', video_id);
        body.append('action', action);
        // const formData = new FormData()
        // formData.set('id', video_id);
        // formData.set('action', action);
        return this.http.post(this.url + `cflix_video.php`, body);
    }
}
MovieService.ɵfac = function MovieService_Factory(t) { return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieService, factory: MovieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'http://cflix.site/cflix_api/frontend/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ANDERIES\camp\cilfix\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map