"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = __importDefault(require("./App"));
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./redux/store"));
const 체중 = 100;
function reducer(state = 체중, action) {
    return state;
}
const rootElement = document.getElementById("root");
if (rootElement) {
    const root = client_1.default.createRoot(rootElement);
    root.render(react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
            react_1.default.createElement(App_1.default, null))));
}
//# sourceMappingURL=index.js.map