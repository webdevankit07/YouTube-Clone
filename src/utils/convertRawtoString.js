import { abbreviateNumber } from 'js-abbreviation-number';

export const convertRawtoString = (labelValue) => {
    const num = Math.abs(labelValue);
    const Num = abbreviateNumber(num);

    return Num;
};
