"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = __importDefault(require("./base.model"));
class PlaylistModel extends base_model_1.default {
    constructor(data) {
        super(data.id || '');
        this.name = data.name;
        this.genre = data.genre;
        this.description = data.description;
        this.idUser = data.idUser;
    }
}
exports.default = PlaylistModel;
