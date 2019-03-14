export interface FractionalNumber {
    numerator: number;
    denominator: number;
}

export function isFractionalNumber(element: any): element is FractionalNumber {
    return <FractionalNumber>element.numerator !== undefined &&
           <FractionalNumber>element.denominator !== undefined;
}
