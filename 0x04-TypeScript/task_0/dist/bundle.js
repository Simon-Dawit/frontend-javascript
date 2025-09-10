/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\n// Create two students\nvar student1 = {\n    firstName: \"Simon\",\n    lastName: \"Dawit\",\n    age: 23,\n    location: \"Ethiopia\",\n};\nvar student2 = {\n    firstName: \"Jane\",\n    lastName: \"Doe\",\n    age: 22,\n    location: \"Kenya\",\n};\n// Store students in an array\nvar studentsList = [student1, student2];\n// Render a table in plain JS\nvar table = document.createElement(\"table\");\nvar headerRow = table.insertRow();\nvar header1 = headerRow.insertCell();\nheader1.textContent = \"First Name\";\nvar header2 = headerRow.insertCell();\nheader2.textContent = \"Location\";\n// Loop through students and add rows\nstudentsList.forEach(function (student) {\n    var row = table.insertRow();\n    var firstNameCell = row.insertCell();\n    firstNameCell.textContent = student.firstName;\n    var locationCell = row.insertCell();\n    locationCell.textContent = student.location;\n});\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;