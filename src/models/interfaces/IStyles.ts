import { TBorderRadius, TGap, TPadding, TTransition } from '../types/Tstyles';

interface IGaps {
  gapLittle: TGap;
  gapMedium: TGap;
  gapBig: TGap;
}

interface IPaddings {
  paddingLittle: TPadding;
  paddingMedium: TPadding;
  paddingBig: TPadding;
}

interface ITransitions {
  transitionDefaultSlow: TTransition;
  transitionDefaultFast: TTransition;
  transitionUnDefaultSlow?: TTransition;
  transitionUnDefaultFast?: TTransition;
}

interface borderRadiusLow {
  borderRadiusLittle: TBorderRadius;
  borderRadiusMedium: TBorderRadius;
  borderRadiusBig: TBorderRadius;
}

export interface IStyles {
  gaps: IGaps;
  paddings: IPaddings;
  borderRadiuses: borderRadiusLow;
  colorText: string;
  colorMain: string;
  colorAdd1: string;
  colorAdd2: string;
  colorAdd3: string;
  transitions: ITransitions;
}
