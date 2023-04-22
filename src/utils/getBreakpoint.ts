import { MEDIA_DEFAULT, MEDIA_MAX_WIDTH, MEDIA_MIN_WIDTH } from "../constants/constant";
import { Config } from "../types/type";


const getBreakpoint = (config: Config, selector: string): string => {
  const hasBreakpoint = selector.includes(MEDIA_MIN_WIDTH);

  if (hasBreakpoint) {
    let _breakpoint$replace;

    const isMax = selector.includes(MEDIA_MAX_WIDTH);
    let breakpoint = selector.replace(/.*@\+?|!/g, '');
    const breakpointFromConfig = config.breakpoints[breakpoint];
    breakpoint = breakpointFromConfig || breakpoint;
    const num = Number(
      (_breakpoint$replace = breakpoint.replace(/\D/g, '')) != null
        ? _breakpoint$replace
        : '0'
    );
    const unit = breakpoint.replace(/.*\d+/g, '');

    if (isMax) {
      return '' + (num - (!!breakpointFromConfig ? 1 : 0)) + unit;
    }

    return breakpoint;
  }

  return MEDIA_DEFAULT;
};

export default getBreakpoint;
