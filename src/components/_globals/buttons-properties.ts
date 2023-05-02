/* playground-fold */
import { LitElement, css } from "lit";
import { property } from "lit/decorators/property.js";

type Constructor<T> = new (...args: any[]) => T;

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

export const ButtonsProperties = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class ButtonsPropertiesElement extends superClass {
    static styles = [css``];

    /*first button*/
    @property({ type: String }) firstButtonLabel: string | undefined =
      undefined;
    @property({ type: String }) firstButtonUrl: string | undefined = undefined;
    @property({ type: String }) firstButtonType:
      | "primary"
      | "secondary"
      | "tertiary" = "primary";
    @property({ type: String }) firstButtonTarget: "_blank" | "_self" = "_self";
    /*second button*/
    @property({ type: String }) secondButtonLabel: string | undefined =
      undefined;
    @property({ type: String }) secondButtonUrl: string | undefined = undefined;
    @property({ type: String }) secondButtonType:
      | "primary"
      | "secondary"
      | "tertiary" = "secondary";
    @property({ type: String }) secondButtonTarget: "_blank" | "_self" =
      "_self";
    /*third button*/
    @property({ type: String }) thirdButtonLabel: string | undefined =
      undefined;
    @property({ type: String }) thirdButtonUrl: string | undefined = undefined;
    @property({ type: String }) thirdButtonType:
      | "primary"
      | "secondary"
      | "tertiary" = "tertiary";
    @property({ type: String }) thirdButtonTarget: "_blank" | "_self" = "_self";
  }
  return ButtonsPropertiesElement as Constructor<ButtonsPropertiesInterface> &
    T;
};
