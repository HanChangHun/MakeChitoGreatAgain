import problems from "./problems.json"
import exam_info from "./exam_info.json"

let problemList = problems
let examInfo = exam_info

export function getProblems(gid) {
    for (let i = 0; i < problemList.length; i++) {
        if (problemList[i].gid === gid) {
            return problemList[i]
        }
    }
}

export function getExamInfo(gid) {
    for (let i = 0; i < examInfo.length; i++) {
        if (examInfo[i].gid === gid) {
            return examInfo[i]
        }
    }
}