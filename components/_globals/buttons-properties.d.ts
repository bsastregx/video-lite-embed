import { LitElement } from "lit";
declare type Constructor<T> = new (...args: any[]) => T;
export declare class ButtonsPropertiesInterface {
    firstButtonLabel: string | undefined;
    firstButtonUrl: string | undefined;
    firstButtonType: string;
    firstButtonTarget: string;
    secondButtonLabel: string | undefined;
    secondButtonUrl: string | undefined;
    secondButtonType: string;
    secondButtonTarget: string;
    thirdButtonLabel: string | undefined;
    thirdButtonUrl: string | undefined;
    thirdButtonType: string;
    thirdButtonTarget: string;
}
export declare const ButtonsProperties: <T extends Constructor<LitElement>>(superClass: T) => Constructor<ButtonsPropertiesInterface> & T;
export {};
//# sourceMappingURL=buttons-properties.d.ts.map