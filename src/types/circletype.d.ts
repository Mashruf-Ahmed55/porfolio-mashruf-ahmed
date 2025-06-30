// types/circletype.d.ts
declare module 'circletype' {
  export default class CircleType {
    constructor(element: HTMLElement | null);
    radius(radius: number): this;
    dir(direction: number): this;
    forceWidth(force: boolean): this;
    forceHeight(force: boolean): this;
    refresh(): this;
    destroy(): void;
  }
}
