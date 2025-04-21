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
const nodemailer_1 = __importDefault(require("nodemailer"));
class SendEmail {
    constructor() {
        var _a;
        this.transport = nodemailer_1.default.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt((_a = process.env.MAIL_PORT) !== null && _a !== void 0 ? _a : '2525', 10),
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        this.htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email de Teste</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                background: #ffffff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                color: #333;
            }
            .content {
                margin-top: 20px;
                font-size: 16px;
                color: #555;
            }
            .footer {
                margin-top: 20px;
                font-size: 12px;
                text-align: center;
                color: #888;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">Olá, Mundo!</div>
            <div class="content">
                <p>Este é um email de teste enviado via Node.js e Nodemailer.</p>
                <p>Se você recebeu este e-mail, significa que a configuração está funcionando corretamente!</p>
            </div>
            <div class="footer">© 2025 Lucas Silva. Todos os direitos reservados.</div>
        </div>
    </body>
 </html>`;
    }
    sendEmail(to, subject, text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.transport.sendMail({
                    from: 'Lucas Silva <',
                    to: to,
                    subject: subject,
                    text: text,
                    html: this.htmlTemplate,
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.default = SendEmail;
