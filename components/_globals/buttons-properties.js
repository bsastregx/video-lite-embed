var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* playground-fold */
import { css } from "lit";
import { property } from "lit/decorators/property.js";
export const ButtonsProperties = (superClass) => {
    class ButtonsPropertiesElement extends superClass {
        constructor() {
            super(...arguments);
            /*first button*/
            this.firstButtonLabel = undefined;
            this.firstButtonUrl = undefined;
            this.firstButtonType = "primary";
            this.firstButtonTarget = "_self";
            /*second button*/
            this.secondButtonLabel = undefined;
            this.secondButtonUrl = undefined;
            this.secondButtonType = "secondary";
            this.secondButtonTarget = "_self";
            /*third button*/
            this.thirdButtonLabel = undefined;
            this.thirdButtonUrl = undefined;
            this.thirdButtonType = "tertiary";
            this.thirdButtonTarget = "_self";
        }
    }
    ButtonsPropertiesElement.styles = [css ``];
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "firstButtonLabel", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "firstButtonUrl", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "firstButtonType", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "firstButtonTarget", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "secondButtonLabel", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "secondButtonUrl", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "secondButtonType", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "secondButtonTarget", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "thirdButtonLabel", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "thirdButtonUrl", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "thirdButtonType", void 0);
    __decorate([
        property({ type: String })
    ], ButtonsPropertiesElement.prototype, "thirdButtonTarget", void 0);
    return ButtonsPropertiesElement;
};
//# sourceMappingURL=buttons-properties.js.map