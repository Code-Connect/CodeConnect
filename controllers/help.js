exports.normalizeTask = function(tasks) {
  console.log("normalize");
  return tasks.reduce((acc, item) => {
    return Object.assign(acc, {
      [item.task_id]: item
    })
  }, {})
}
