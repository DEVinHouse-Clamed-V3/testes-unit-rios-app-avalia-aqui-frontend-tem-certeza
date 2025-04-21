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
const ProductService_1 = __importDefault(require("../services/ProductService"));
class ProductController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield ProductService_1.default.getAll();
                if (!products || products.length === 0) {
                    res.status(404).json({ message: 'Nenhum produto encontrado' });
                    return;
                }
                res.status(200).json(products);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ message: 'Erro ao buscar produtos', error: error.message });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, description, experience, recommend } = req.body;
                if (!name || !email || !experience || recommend === undefined) {
                    res.status(400).json({ message: 'Campos obrigatórios faltando' });
                    return;
                }
                if (!['Feliz', 'Bom', 'Médio', 'Ruim'].includes(experience)) {
                    res.status(400).json({ message: 'Experiência inválida' });
                    return;
                }
                const newProduct = yield ProductService_1.default.create({
                    name,
                    email,
                    description,
                    experience,
                    recommend,
                });
                res.status(201).json(newProduct);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ message: 'Erro ao criar produto', error: error.message });
            }
        });
    }
}
exports.default = ProductController;
