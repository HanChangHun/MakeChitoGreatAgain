export function setStatus(params, chito, grade, hint) {
    params.setGrade(grade);
    params.setInt(chito.intelligence);
    params.setHealth(chito.health);
    params.setSpeech(chito.speech);
    params.setHint(hint);

    let year = parseInt(chito.week / 32) + 1
    let semester = parseInt((chito.week % 32) / 16) + 1
    let week = chito.week % 16

    if (week === 0) {
        week = 16
        if (semester === 2) {
            semester = 1
        } else {
            semester = 2
            year = year - 1
        }
    }

    params.setYear(year);
    params.setSemester(semester);
    params.setWeek(week);

    if (week === 8)
        params.setActiveBtn(1)
    else if (week === 16)
        params.setActiveBtn(2)
    else
        params.setActiveBtn(0)
}