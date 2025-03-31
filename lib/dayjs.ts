import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import advancedFormat from "dayjs/plugin/advancedFormat"
import isLeapYear from "dayjs/plugin/isLeapYear"
import isBetween from "dayjs/plugin/isBetween"

dayjs.extend(relativeTime)
dayjs.extend(advancedFormat)
dayjs.extend(isLeapYear)
dayjs.extend(isBetween)

export const Dayjs = dayjs
