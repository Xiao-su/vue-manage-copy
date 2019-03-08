import _ from 'lodash'
export function extremes (name, dtlData, refs) {
  var fixedIndexRange
  var frameIndexRange
  var datetimeRange
  var fr
  var to
  switch (name) {
    case 'fps':
      fixedIndexRange = refs.fps.fixedIndexRange
      frameIndexRange = refs.fps.frameIndexRange
      fr = _.find(dtlData, function (d) {
        return d.FrameIndex >= frameIndexRange[0]
      })
      to = _.find(dtlData, function (d) {
        return d.FrameIndex >= frameIndexRange[1]
      })
      refs.query.getChartObject().xAxis[0].setExtremes(frameIndexRange[0], frameIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      refs.percent.getChartObject().xAxis[0].setExtremes(frameIndexRange[0], frameIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      refs.physical.getChartObject().xAxis[0].setExtremes(fixedIndexRange[0], fixedIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      try {
        refs.cpu.getChartObject().xAxis[0].setExtremes(parseInt(fr.TestDate), parseInt(to.TestDate), undefined, false, {trigger: 'syncExtremes'})
        refs.ps.getChartObject().xAxis[0].setExtremes(parseInt(fr.TestDate), parseInt(to.TestDate), undefined, false, {trigger: 'syncExtremes'})
      } catch (error) {
        refs.cpu.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.ps.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
      }
      break
    case 'query':
      fixedIndexRange = refs.query.fixedIndexRange
      frameIndexRange = refs.query.frameIndexRange
      fr = _.find(dtlData, function (d) {
        return d.FrameIndex >= frameIndexRange[0]
      })
      to = _.find(dtlData, function (d) {
        return d.FrameIndex >= frameIndexRange[1]
      })
      refs.fps.getChartObject().xAxis[0].setExtremes(frameIndexRange[0], frameIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      refs.percent.getChartObject().xAxis[0].setExtremes(frameIndexRange[0], frameIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      refs.physical.getChartObject().xAxis[0].setExtremes(fixedIndexRange[0], fixedIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      try {
        refs.cpu.getChartObject().xAxis[0].setExtremes(parseInt(fr.TestDate), parseInt(to.TestDate), undefined, false, {trigger: 'syncExtremes'})
        refs.ps.getChartObject().xAxis[0].setExtremes(parseInt(fr.TestDate), parseInt(to.TestDate), undefined, false, {trigger: 'syncExtremes'})
      } catch (error) {
        refs.cpu.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.ps.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
      }
      break
    case 'percent':
      fixedIndexRange = refs.percent.fixedIndexRange
      frameIndexRange = refs.percent.frameIndexRange
      fr = _.find(dtlData, function (d) {
        return d.FrameIndex >= frameIndexRange[0]
      })
      to = _.find(dtlData, function (d) {
        return d.FrameIndex >= frameIndexRange[1]
      })
      refs.fps.getChartObject().xAxis[0].setExtremes(frameIndexRange[0], frameIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      refs.query.getChartObject().xAxis[0].setExtremes(frameIndexRange[0], frameIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      refs.physical.getChartObject().xAxis[0].setExtremes(fixedIndexRange[0], fixedIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      try {
        refs.cpu.getChartObject().xAxis[0].setExtremes(parseInt(fr.TestDate), parseInt(to.TestDate), undefined, false, {trigger: 'syncExtremes'})
        refs.ps.getChartObject().xAxis[0].setExtremes(parseInt(fr.TestDate), parseInt(to.TestDate), undefined, false, {trigger: 'syncExtremes'})
      } catch (error) {
        refs.cpu.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.ps.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
      }
      break
    case 'physical':
      frameIndexRange = refs.physical.frameIndexRange
      fr = _.find(dtlData, function (d) {
        return d.FrameIndex >= frameIndexRange[0]
      })
      to = _.find(dtlData, function (d) {
        return d.FrameIndex >= frameIndexRange[1]
      })
      refs.fps.getChartObject().xAxis[0].setExtremes(frameIndexRange[0], frameIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      refs.percent.getChartObject().xAxis[0].setExtremes(frameIndexRange[0], frameIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      refs.query.getChartObject().xAxis[0].setExtremes(frameIndexRange[0], frameIndexRange[1], undefined, false, {trigger: 'syncExtremes'})
      try {
        refs.cpu.getChartObject().xAxis[0].setExtremes(parseInt(fr.TestDate), parseInt(to.TestDate), undefined, false, {trigger: 'syncExtremes'})
        refs.ps.getChartObject().xAxis[0].setExtremes(parseInt(fr.TestDate), parseInt(to.TestDate), undefined, false, {trigger: 'syncExtremes'})
      } catch (error) {
        refs.cpu.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.ps.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
      }
      break
    case 'cpu':
      datetimeRange = refs.cpu.datetimeRange
      fr = _.find(dtlData, function (d) {
        return d.TestDate >= datetimeRange[0]
      })
      to = _.find(dtlData, function (d) {
        return d.TestDate >= datetimeRange[1]
      })
      refs.ps.getChartObject().xAxis[0].setExtremes(datetimeRange[0], datetimeRange[1], undefined, false, {trigger: 'syncExtremes'})
      try {
        refs.fps.getChartObject().xAxis[0].setExtremes(fr.FrameIndex, to.FrameIndex, undefined, false, {trigger: 'syncExtremes'})
        refs.percent.getChartObject().xAxis[0].setExtremes(fr.FrameIndex, to.FrameIndex, undefined, false, {trigger: 'syncExtremes'})
        refs.query.getChartObject().xAxis[0].setExtremes(fr.FrameIndex, to.FrameIndex, undefined, false, {trigger: 'syncExtremes'})
        refs.physical.getChartObject().xAxis[0].setExtremes(fr.FixedIndex, to.FixedIndex, undefined, false, {trigger: 'syncExtremes'})
      } catch (error) {
        refs.fps.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.percent.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.query.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.physical.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
      }
      break
    case 'ps':
      datetimeRange = refs.ps.datetimeRange
      fr = _.find(dtlData, function (d) {
        return d.TestDate >= datetimeRange[0]
      })
      to = _.find(dtlData, function (d) {
        return d.TestDate >= datetimeRange[1]
      })
      refs.cpu.getChartObject().xAxis[0].setExtremes(datetimeRange[0], datetimeRange[1], undefined, false, {trigger: 'syncExtremes'})
      try {
        refs.fps.getChartObject().xAxis[0].setExtremes(fr.FrameIndex, to.FrameIndex, undefined, false, {trigger: 'syncExtremes'})
        refs.percent.getChartObject().xAxis[0].setExtremes(fr.FrameIndex, to.FrameIndex, undefined, false, {trigger: 'syncExtremes'})
        refs.query.getChartObject().xAxis[0].setExtremes(fr.FrameIndex, to.FrameIndex, undefined, false, {trigger: 'syncExtremes'})
        refs.physical.getChartObject().xAxis[0].setExtremes(fr.FixedIndex, to.FixedIndex, undefined, false, {trigger: 'syncExtremes'})
      } catch (error) {
        refs.fps.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.percent.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.query.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
        refs.physical.getChartObject().xAxis[0].setExtremes(undefined, undefined, undefined, false, {trigger: 'syncExtremes'})
      }
      break
  }
}
