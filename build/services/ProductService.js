"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../database/data-source");
const Product_1 = __importDefault(require("../entities/Product"));
class ProductService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const productRepository = data_source_1.AppDataSource.getRepository(Product_1.default);
            const products = yield productRepository.find({
                order: { created_at: 'DESC' },
            });
            return products;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const productRepository = data_source_1.AppDataSource.getRepository(Product_1.default);
            const newProduct = productRepository.create(data);
            yield productRepository.save(newProduct);
            return newProduct;
        });
    }
}
exports.default = new ProductService();
