export interface Options {
  baseDir: string;
}

export interface Config {
  baseDir: string;
  [propName: string]: any;
}

export const SelfBody = Symbol("body");
