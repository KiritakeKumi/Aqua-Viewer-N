import {DivaPv} from './DivaPv';
import {Difficulty, Edition, Result} from './DivaPvRecord';
import {DivaModule} from './DivaModule';

export interface DivaPlayLog {
  id: number;
  pvId: number;
  songInfo?: DivaPv;
  difficulty: Difficulty;
  edition: Edition;
  scriptVer: number;
  score: number;
  challengeKind: number;
  challengeResult: number;
  clearResult: Result;
  vp: number;
  coolCount: number;
  coolPercent: number;
  fineCount: number;
  finePercent: number;
  safeCount: number;
  safePercent: number;
  sadCount: number;
  sadPercent: number;
  wrongCount: number;
  wrongPercent: number;
  maxCombo: number;
  chanceTime: number;
  holdScore: number;
  attainPoint: number;
  skinId: number;
  buttonSe: number;
  buttonSeVol: number;
  sliderSe: number;
  modules: string;
  modulesInfo?: DivaModule[];
  stageCompletion: number;
  slideScore: number;
  isVocalChange: number;
  customizeItems: string;
  rhythmGameOptions: string;
  screenShotCount: number;
  dateTime: Date;
  chainSlideSe: number;
  sliderTouchSe: number;
}
