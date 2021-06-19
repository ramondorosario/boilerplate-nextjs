/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin, NewPlugin } from 'pretty-format';

declare global {
	namespace jest {
		interface AsymmetricMatcher {
			$$typeof: symbol;
			sample?: string | RegExp | object | Array<any> | Function;
		}

		type Value = string | number | RegExp | AsymmetricMatcher | undefined;

		interface Options {
			media?: string;
			modifier?: string;
			supports?: string;
		}

		interface Matchers<R, T> {
			toHaveStyleRule(property: string, value?: Value, options?: Options);
		}
	}
}

export declare const styleSheetSerializer: Exclude<PluginArray, NewPlugin>;