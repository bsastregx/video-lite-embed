export declare function hostElement(comp: HTMLElement, config: hostElement): void;
export interface hostElement {
    readonly attributes?: {
        [key: string]: string | null | undefined;
    };
    readonly classes?: {
        [key: string]: boolean | string | null | undefined;
    };
    readonly styles?: {
        [key: string]: string | null | undefined;
    };
    readonly events?: {
        [key: string]: ((event?: Event | undefined) => void | null | undefined) | undefined;
    };
}
//# sourceMappingURL=host-element.d.ts.map