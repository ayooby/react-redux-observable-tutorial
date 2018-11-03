import daggy from "daggy"

export const Maybe = daggy.taggedSum("Maybe", {
  Nothing: [],
  NotAsked: [],
  Just: ["x"]
})
