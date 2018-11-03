import daggy from "daggy"

export const Maybe = daggy.taggedSum("Maybe", {
  Nothing: [],
  Empty: [],
  Just: ["x"]
})
