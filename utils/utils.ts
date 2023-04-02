export function dateIsValid(date: any) {
  return !isNaN(date) && date instanceof Date;
}

function leftPad(value: number) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}

export function toStringByFormatting({
  source,
  delimiter = '-',
  isDay,
  isTime,
}: {
  source: Date;
  delimiter?: string | undefined;
  isDay?: boolean;
  isTime?: boolean;
}) {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());
  const hour = leftPad(source.getHours());
  const min = leftPad(source.getMinutes());
  if (isDay || isTime)
    return isDay ? [year, month, day].join(delimiter) : [hour, min].join(':');
  return [year, month, day].join(delimiter);
}

export const loremIpsem = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.`;

export const SAJU_60 = [
  '갑자',
  '을축',
  '병인',
  '정묘',
  '무진',
  '기사',
  '경오',
  '신미',
  '임신',
  '계유',
  '갑술',
  '을해',
  '병자',
  '정축',
  '무인',
  '기묘',
  '경진',
  '신사',
  '임오',
  '계미',
  '갑신',
  '을유',
  '병술',
  '정해',
  '무자',
  '기축',
  '경인',
  '신묘',
  '임진',
  '계사',
  '갑오',
  '을미',
  '병신',
  '정유',
  '무술',
  '기해',
  '경자',
  '신축',
  '임인',
  '계묘',
  '갑진',
  '을사',
  '병오',
  '정미',
  '무신',
  '기유',
  '경술',
  '신해',
  '임자',
  '계축',
  '갑인',
  '을묘',
  '병진',
  '정사',
  '무오',
  '기미',
  '경신',
  '신유',
  '임술',
  '계해',
];

export const SAJU_HAN_60 = [
  '甲子',
  '乙丑',
  '丙寅',
  '丁卯',
  '戊辰',
  '己巳',
  '庚午',
  '辛未',
  '壬申',
  '癸酉',
  '甲戌',
  '乙亥',
  '丙子',
  '丁丑',
  '戊寅',
  '己卯',
  '庚辰',
  '辛巳',
  '壬午',
  '癸未',
  '甲申',
  '乙酉',
  '丙戌',
  '丁亥',
  '戊子',
  '己丑',
  '庚寅',
  '辛卯',
  '壬辰',
  '癸巳',
  '甲午',
  '乙未',
  '丙申',
  '丁酉',
  '戊戌',
  '己亥',
  '庚子',
  '辛丑',
  '壬寅',
  '癸卯',
  '甲辰',
  '乙巳',
  '丙午',
  '丁未',
  '戊申',
  '己酉',
  '庚戌',
  '辛亥',
  '壬子',
  '癸丑',
  '甲寅',
  '乙卯',
  '丙辰',
  '丁巳',
  '戊午',
  '己未',
  '庚申',
  '辛酉',
  '壬戌',
  '癸亥',
];
