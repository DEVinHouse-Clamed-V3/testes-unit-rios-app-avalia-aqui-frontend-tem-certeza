"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const productController = new ProductController_1.default();
const productRoutes = (0, express_1.Router)();
productRoutes.get('/', productController.getAll);
productRoutes.post('/', productController.create);
exports.default = productRoutes;
