export const MAX_IMAGE = 20;

export type ButtonProps = {
    count: number;
    updateCount: (val: number) => void;
};

export const enum ArrowType {
    LEFT = 'left',
    RIGHT = "right"
}