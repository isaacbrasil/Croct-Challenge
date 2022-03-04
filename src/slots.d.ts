import { NullableJsonObject } from "@croct/plug/sdk/json";

declare module "@croct/plug/fetch" {
  type SlotProps2 = {
    svg: JSX.Element;
    title: string;
    subtitle: string;
    cta: {
      label: string;
      link: string;
    };
  };
  interface SlotMap extends Record<string, NullableJsonObject> {
    "home-banner2": SlotProps2;
  }
}
