(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-film-crud-film-crud-module"],{

/***/ "./src/app/components/film-crud/aktor-crud/aktor-crud.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/film-crud/aktor-crud/aktor-crud.component.ts ***!
  \*************************************************************************/
/*! exports provided: AktorCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AktorCrudComponent", function() { return AktorCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function AktorCrudComponent_div_0_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AktorCrudComponent_div_0_tr_14_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const aktor_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.editAktor(aktor_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AktorCrudComponent_div_0_tr_14_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const aktor_r13 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.deleteAktor(aktor_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hapus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aktor_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](aktor_r13.name);
} }
function AktorCrudComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nama Aktor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AktorCrudComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.gotoTambah(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tambah");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AktorCrudComponent_div_0_tr_14_Template, 11, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.listDataAktor);
} }
function AktorCrudComponent_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AktorCrudComponent_div_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.lemparData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Simpan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AktorCrudComponent_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AktorCrudComponent_div_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.lemparEditData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Simpan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AktorCrudComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tambah Aktor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nama Aktor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AktorCrudComponent_div_1_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.model.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AktorCrudComponent_div_1_button_8_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AktorCrudComponent_div_1_button_9_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AktorCrudComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Batal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.model.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.isEditSimpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isEditSimpan);
} }
class AktorCrudComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.model = {
            "action": "add",
            "name": null,
        };
        this.isAdd = false;
        this.isEditSimpan = false;
    }
    ngOnInit() {
        this.getListAktor();
    }
    gotoTambah() {
        this.isAdd = true;
    }
    getListAktor() {
        this.crudService.getAktor().subscribe((result) => {
            this.listDataAktor = result.data;
            console.log("data", result);
        }, error => {
            console.log("error", error);
        });
    }
    back() {
        this.isAdd = false;
        this.isEditSimpan = false;
    }
    lemparData() {
        console.log("data input", this.model.name);
        this.crudService.addAktor(this.model.name).subscribe((data) => {
            alert(`${data[0].message} || ${data[0].status_code}`);
            location.reload();
        }, error => {
            console.log("error", error);
        });
    }
    lemparEditData() {
        this.crudService.editAktor(this.forEdit.id, this.model.name).subscribe((data) => {
            console.log("data", data);
            alert(`${data[0].message} || ${data[0].status_code}`);
            location.reload();
        }, error => {
            console.log("error", error);
        });
    }
    editAktor(dataAktor) {
        console.log("data", dataAktor);
        this.isAdd = true;
        this.isEditSimpan = true;
        this.forEdit = dataAktor;
        this.model.name = dataAktor.name;
    }
    deleteAktor(idAktor) {
        this.crudService.deleteAktor(idAktor).subscribe((data) => {
            console.log("data", data);
            alert(`${data[0].message} || ${data[0].status_code}`);
            location.reload();
        }, error => {
            alert(error);
            console.log("error", error);
        });
    }
}
AktorCrudComponent.ɵfac = function AktorCrudComponent_Factory(t) { return new (t || AktorCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
AktorCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AktorCrudComponent, selectors: [["app-aktor-crud"]], decls: 2, vars: 2, consts: [["class", "mt", 4, "ngIf"], [1, "mt"], [1, "table"], ["scope", "col"], [1, "btn", "btn-success", 3, "click"], [4, "ngFor", "ngForOf"], ["scope", "row"], [3, "click"], ["placeholder", "Masukkan Nama Aktor", "name", "name", 1, "form-control", "w-50", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "box-button-group", 2, "width", "50%", "margin-top", "2%"], ["class", "btn btn-success", "style", "padding:10px 5%; margin-right: 5%;", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", 2, "padding", "10px 5%", 3, "click"], [1, "btn", "btn-success", 2, "padding", "10px 5%", "margin-right", "5%", 3, "click"]], template: function AktorCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AktorCrudComponent_div_0_Template, 15, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AktorCrudComponent_div_1_Template, 12, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdd);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".mt[_ngcontent-%COMP%] {\n  margin-top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWxtLWNydWQvYWt0b3ItY3J1ZC9EOlxcQU5ERVJJRVNcXGNhbXBcXGNpbGZpeC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmlsbS1jcnVkXFxha3Rvci1jcnVkXFxha3Rvci1jcnVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbG0tY3J1ZC9ha3Rvci1jcnVkL2FrdG9yLWNydWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbG0tY3J1ZC9ha3Rvci1jcnVkL2FrdG9yLWNydWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXQge1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbn1cclxuXHJcbiIsIi5tdCB7XG4gIG1hcmdpbi10b3A6IDclO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AktorCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aktor-crud',
                templateUrl: './aktor-crud.component.html',
                styleUrls: ['./aktor-crud.component.scss']
            }]
    }], function () { return [{ type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/film-crud/film-crud.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/film-crud/film-crud.component.ts ***!
  \*************************************************************/
/*! exports provided: FilmCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmCrudComponent", function() { return FilmCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_new_film_header_new_film_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-new-film/header-new-film.component */ "./src/app/components/film-crud/header-new-film/header-new-film.component.ts");
/* harmony import */ var _aktor_crud_aktor_crud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aktor-crud/aktor-crud.component */ "./src/app/components/film-crud/aktor-crud/aktor-crud.component.ts");






function FilmCrudComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmCrudComponent_div_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.panggilFilm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Daftar Film");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmCrudComponent_div_14_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.panggilAktor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aktor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Kualitas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Negara");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilmCrudComponent_app_header_new_film_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-new-film");
} }
function FilmCrudComponent_app_aktor_crud_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-aktor-crud");
} }
const _c0 = function () { return [""]; };
class FilmCrudComponent {
    constructor(router) {
        this.router = router;
        this.isArdi = false;
        this.isAktor = true;
        this.isFilm = false;
    }
    ngOnInit() {
    }
    isFalse() {
        this.isAktor = false;
        this.isFilm = false;
    }
    panggilArdi() {
        this.isArdi = !this.isArdi;
    }
    panggilAktor() {
        this.isFalse();
        this.isAktor = true;
    }
    panggilFilm() {
        this.isFalse();
        this.isFilm = true;
    }
}
FilmCrudComponent.ɵfac = function FilmCrudComponent_Factory(t) { return new (t || FilmCrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FilmCrudComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilmCrudComponent, selectors: [["app-film-crud"]], decls: 20, vars: 5, consts: [[1, "bo-section"], [1, "colland-sidebar"], [1, "box-admin-header"], [1, "lining-admin"], [1, "box-item-header"], ["src", "../../../assets/images/dashboard.png"], [1, "box-item-header", 3, "click"], ["src", "../../../assets/images/film_icon.png"], [4, "ngIf"], [1, "colland-header"], [1, "box-logo", 3, "routerLink"], ["src", "../../../assets/images/logo_cflix_putih 1.png", 1, "img-logo"], ["src", "../../../assets/images/circle_white.png", 1, "img-bola"]], template: function FilmCrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ADMINISTRATOR CFLIX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmCrudComponent_Template_div_click_10_listener() { return ctx.panggilArdi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FilmCrudComponent_div_14_Template, 21, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FilmCrudComponent_app_header_new_film_18_Template, 1, 0, "app-header-new-film", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FilmCrudComponent_app_aktor_crud_19_Template, 1, 0, "app-aktor-crud", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isArdi == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFilm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAktor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _header_new_film_header_new_film_component__WEBPACK_IMPORTED_MODULE_3__["HeaderNewFilmComponent"], _aktor_crud_aktor_crud_component__WEBPACK_IMPORTED_MODULE_4__["AktorCrudComponent"]], styles: [".bo-section[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.bo-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.bo-section[_ngcontent-%COMP%]   .col-lg-6[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.bo-section[_ngcontent-%COMP%]   .lining-admin[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0;\n  border: 1px solid white;\n}\n.bo-section[_ngcontent-%COMP%]   .colland-sidebar[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 120vh;\n  background-color: #153948;\n  text-align: center;\n  color: white;\n  display: flex;\n  flex-direction: column;\n}\n.bo-section[_ngcontent-%COMP%]   .box-admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 69px;\n  justify-content: center;\n}\n.bo-section[_ngcontent-%COMP%]   .box-admin-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-family: roboto-bold;\n  font-size: 20px;\n  margin-bottom: 0;\n  align-self: center;\n}\n.bo-section[_ngcontent-%COMP%]   .box-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 8vh;\n}\n.bo-section[_ngcontent-%COMP%]   .box-item-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  align-self: center;\n  margin-left: 3%;\n}\n.bo-section[_ngcontent-%COMP%]   .box-item-header[_ngcontent-%COMP%]   .img-bola[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n}\n.bo-section[_ngcontent-%COMP%]   .box-item-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-left: 5%;\n  align-self: center;\n}\n.bo-section[_ngcontent-%COMP%]   .colland-header[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 69px;\n  background-color: #cf3f3d;\n  display: flex;\n  flex-direction: column;\n  padding-left: 3.5%;\n}\n.bo-section[_ngcontent-%COMP%]   .colland-header[_ngcontent-%COMP%]   .box-logo[_ngcontent-%COMP%] {\n  width: 15%;\n  margin-top: 15px;\n  height: 100%;\n  outline-width: 0;\n  float: left;\n}\n.bo-section[_ngcontent-%COMP%]   .colland-header[_ngcontent-%COMP%]   .box-logo[_ngcontent-%COMP%]   .img-logo[_ngcontent-%COMP%] {\n  width: 80%;\n  height: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWxtLWNydWQvRDpcXEFOREVSSUVTXFxjYW1wXFxjaWxmaXgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbG0tY3J1ZFxcZmlsbS1jcnVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbG0tY3J1ZC9maWxtLWNydWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBREFJO0VBQ0ksVUFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRVI7QURBSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNFUjtBRENJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNDUjtBREFRO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFWjtBREVJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDWjtBRENRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NaO0FEQ1E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NaO0FESUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNGUjtBREdRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0RaO0FERVk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbG0tY3J1ZC9maWxtLWNydWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm8tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuY29sLWxnLTYge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAubGluaW5nLWFkbWluIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmNvbGxhbmQtc2lkZWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTM5NDg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmJveC1hZG1pbi1oZWFkZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDY5cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90by1ib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJveC1pdGVtLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDh2aDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZy1ib2xhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuLy8gIEhFQURFUlxyXG4gICAgLmNvbGxhbmQtaGVhZGVyIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogNjlweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YzZjNkO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMuNSU7XHJcbiAgICAgICAgLmJveC1sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAwO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLmltZy1sb2dvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi5iby1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm8tc2VjdGlvbiBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5iby1zZWN0aW9uIC5jb2wtbGctNiB7XG4gIHdpZHRoOiA1MCU7XG59XG4uYm8tc2VjdGlvbiAubGluaW5nLWFkbWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuLmJvLXNlY3Rpb24gLmNvbGxhbmQtc2lkZWJhciB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTIwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTM5NDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJvLXNlY3Rpb24gLmJveC1hZG1pbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2OXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5iby1zZWN0aW9uIC5ib3gtYWRtaW4taGVhZGVyIHAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LWZhbWlseTogcm9ib3RvLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmJvLXNlY3Rpb24gLmJveC1pdGVtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogOHZoO1xufVxuLmJvLXNlY3Rpb24gLmJveC1pdGVtLWhlYWRlciBpbWcge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cbi5iby1zZWN0aW9uIC5ib3gtaXRlbS1oZWFkZXIgLmltZy1ib2xhIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uYm8tc2VjdGlvbiAuYm94LWl0ZW0taGVhZGVyIHAge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uYm8tc2VjdGlvbiAuY29sbGFuZC1oZWFkZXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDY5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjNmM2Q7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMy41JTtcbn1cbi5iby1zZWN0aW9uIC5jb2xsYW5kLWhlYWRlciAuYm94LWxvZ28ge1xuICB3aWR0aDogMTUlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmUtd2lkdGg6IDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJvLXNlY3Rpb24gLmNvbGxhbmQtaGVhZGVyIC5ib3gtbG9nbyAuaW1nLWxvZ28ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilmCrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-film-crud',
                templateUrl: './film-crud.component.html',
                styleUrls: ['./film-crud.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/film-crud/film-crud.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/film-crud/film-crud.module.ts ***!
  \**********************************************************/
/*! exports provided: FilmCrudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmCrudModule", function() { return FilmCrudModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _film_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./film-crud.component */ "./src/app/components/film-crud/film-crud.component.ts");
/* harmony import */ var _header_new_film_header_new_film_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-new-film/header-new-film.component */ "./src/app/components/film-crud/header-new-film/header-new-film.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _aktor_crud_aktor_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aktor-crud/aktor-crud.component */ "./src/app/components/film-crud/aktor-crud/aktor-crud.component.ts");









const appRoutes = [
    {
        path: '',
        component: _film_crud_component__WEBPACK_IMPORTED_MODULE_2__["FilmCrudComponent"]
    },
    {
        path: 'aktor-crud',
        component: _aktor_crud_aktor_crud_component__WEBPACK_IMPORTED_MODULE_6__["AktorCrudComponent"]
    }
];
class FilmCrudModule {
}
FilmCrudModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FilmCrudModule });
FilmCrudModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FilmCrudModule_Factory(t) { return new (t || FilmCrudModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FilmCrudModule, { declarations: [_film_crud_component__WEBPACK_IMPORTED_MODULE_2__["FilmCrudComponent"],
        _header_new_film_header_new_film_component__WEBPACK_IMPORTED_MODULE_3__["HeaderNewFilmComponent"],
        _aktor_crud_aktor_crud_component__WEBPACK_IMPORTED_MODULE_6__["AktorCrudComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilmCrudModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
                declarations: [
                    _film_crud_component__WEBPACK_IMPORTED_MODULE_2__["FilmCrudComponent"],
                    _header_new_film_header_new_film_component__WEBPACK_IMPORTED_MODULE_3__["HeaderNewFilmComponent"],
                    _aktor_crud_aktor_crud_component__WEBPACK_IMPORTED_MODULE_6__["AktorCrudComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/film-crud/header-new-film/header-new-film.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/film-crud/header-new-film/header-new-film.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HeaderNewFilmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNewFilmComponent", function() { return HeaderNewFilmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function HeaderNewFilmComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contoh Aktor 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contoh Aktor 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderNewFilmComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contoh Aktor 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contoh Aktor 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderNewFilmComponent {
    constructor() {
        this.isInputted = false;
    }
    ngOnInit() {
    }
    deleteImage() {
        confirm("Deleting Image");
    }
    uploadImage() {
        confirm("Uploading Image");
    }
    inputing() {
        this.isInputted = !this.isInputted;
    }
}
HeaderNewFilmComponent.ɵfac = function HeaderNewFilmComponent_Factory(t) { return new (t || HeaderNewFilmComponent)(); };
HeaderNewFilmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderNewFilmComponent, selectors: [["app-header-new-film"]], decls: 59, vars: 2, consts: [[1, "header-new-film"], [1, "d-flex", "justify-content-between", "w-100", 2, "margin-bottom", "3%"], [1, "d-flex", 2, "width", "50%"], [1, "align-self-center", 2, "margin-bottom", "0", "font-family", "roboto-med"], [1, "box-button-group", 2, "width", "50%"], [1, "btn", "btn-success", 2, "margin-right", "2%"], [1, "btn", "btn-danger"], [1, "row", 2, "margin-left", "0", "margin-right", "0"], [1, "col-lg-12", 2, "padding-left", "0", "padding-right", "0"], [1, "row"], [1, "col-lg-6"], [1, "form-control"], [2, "margin-top", "4%"], ["class", "group-bg", 4, "ngIf"], [1, "form-control", 3, "change"], [1, "col-lg-4"], [1, "upload-foto"], ["src", "../../../assets/images/image_close.png", 1, "img-close", 3, "click"], ["id", "upload_document", "type", "file", "accept", "image/jpeg", 1, "form-control", 3, "click"], [1, "row", 2, "margin-top", "4%"], [1, "col-lg-8"], [1, "form-control", 2, "height", "100px"], [1, "group-bg"], [1, "bg-blue"]], template: function HeaderNewFilmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Simpan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Batal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Judul Film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nama Aktor (bisa lebih dari satu)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderNewFilmComponent_div_20_Template, 7, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderNewFilmComponent_Template_input_change_21_listener() { return ctx.inputing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Genre Film (bisa lebih dari satu)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderNewFilmComponent_div_25_Template, 7, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderNewFilmComponent_Template_input_change_26_listener() { return ctx.inputing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Video URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Video Trailer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Kualitas Film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Negara Film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sutradara");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Poster Film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNewFilmComponent_Template_img_click_51_listener() { return ctx.deleteImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNewFilmComponent_Template_input_click_52_listener() { return ctx.uploadImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sinposis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInputted == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInputted == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".header-new-film[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-top: 4%;\n}\n.header-new-film[_ngcontent-%COMP%]   .group-bg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.header-new-film[_ngcontent-%COMP%]   .group-bg[_ngcontent-%COMP%]   .bg-blue[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 29px;\n  margin-right: 2%;\n  border-radius: 10px;\n  background-color: #18a0fb;\n  display: flex;\n  justify-content: center;\n}\n.header-new-film[_ngcontent-%COMP%]   .group-bg[_ngcontent-%COMP%]   .bg-blue[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.header-new-film[_ngcontent-%COMP%]   .upload-foto[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 132px;\n  border: 1px solid gray;\n  background-color: gray;\n  background-image: url('foto.png');\n  background-size: 50%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.header-new-film[_ngcontent-%COMP%]   .upload-foto[_ngcontent-%COMP%]   .img-close[_ngcontent-%COMP%] {\n  right: 0;\n  background-color: red;\n  border-radius: 25%;\n  z-index: 2;\n  float: right;\n  margin-top: 3px;\n  margin-right: 3px;\n}\n.header-new-film[_ngcontent-%COMP%]   .upload-foto[_ngcontent-%COMP%]   #upload_document[_ngcontent-%COMP%] {\n  opacity: 0;\n  height: 100%;\n  left: 2px;\n  width: 100%;\n  border-radius: 2px;\n  cursor: pointer;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWxtLWNydWQvaGVhZGVyLW5ldy1maWxtL0Q6XFxBTkRFUklFU1xcY2FtcFxcY2lsZml4L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmaWxtLWNydWRcXGhlYWRlci1uZXctZmlsbVxcaGVhZGVyLW5ldy1maWxtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbG0tY3J1ZC9oZWFkZXItbmV3LWZpbG0vaGVhZGVyLW5ldy1maWxtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRVI7QUREUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDR1o7QURGWTtFQUNJLGtCQUFBO0FDSWhCO0FEQUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLFFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHWjtBRERRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsbS1jcnVkL2hlYWRlci1uZXctZmlsbS9oZWFkZXItbmV3LWZpbG0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW5ldy1maWxtIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIC5ncm91cC1iZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgLmJnLWJsdWUge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGEwZmI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51cGxvYWQtZm90byB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDEzMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mb3RvLnBuZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuaW1nLWNsb3NlIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN1cGxvYWRfZG9jdW1lbnQge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuaGVhZGVyLW5ldy1maWxtIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG4uaGVhZGVyLW5ldy1maWxtIC5ncm91cC1iZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmhlYWRlci1uZXctZmlsbSAuZ3JvdXAtYmcgLmJnLWJsdWUge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDI5cHg7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOGEwZmI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWRlci1uZXctZmlsbSAuZ3JvdXAtYmcgLmJnLWJsdWUgcCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5oZWFkZXItbmV3LWZpbG0gLnVwbG9hZC1mb3RvIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMzJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm90by5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlci1uZXctZmlsbSAudXBsb2FkLWZvdG8gLmltZy1jbG9zZSB7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgei1pbmRleDogMjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLmhlYWRlci1uZXctZmlsbSAudXBsb2FkLWZvdG8gI3VwbG9hZF9kb2N1bWVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IC0xO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderNewFilmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-new-film',
                templateUrl: './header-new-film.component.html',
                styleUrls: ['./header-new-film.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/crud.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/crud.service.ts ***!
  \******************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CrudService {
    constructor(http) {
        this.http = http;
        this.url = "http://cflix.site/cflix_api/backend/";
    }
    addAktor(name) {
        let body = new FormData();
        body.append('action', 'add');
        body.append('name', name);
        return this.http.post(this.url + `cflix_aktor.php`, body);
    }
    getAktor() {
        let body = new FormData();
        body.append('action', 'show');
        return this.http.post(this.url + `cflix_aktor.php`, body);
    }
    editAktor(id, name) {
        let body = new FormData();
        body.append('action', 'edit');
        body.append('id', id);
        body.append('name', name);
        return this.http.post(this.url + `cflix_aktor.php`, body);
    }
    deleteAktor(id) {
        let body = new FormData();
        body.append('action', 'delete');
        body.append('id', id);
        console.log("boom", body);
        return this.http.post(this.url + `cflix_aktor.php`, body);
    }
}
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-film-crud-film-crud-module.js.map