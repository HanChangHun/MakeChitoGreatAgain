export function setStatus(params, chito) {
    params.setGrade(chito.grade);
    params.setInt(chito.intelligence);
    params.setHealth(chito.health);
    params.setSpeech(chito.speech);

    let year = parseInt(chito.week / 32) + 1
    let semester = parseInt((chito.week % 32) / 16) + 1
    let week = (chito.week % 32) % 16

    if (chito.week % 16 === 0) {
        semester = semester - 1
        week = 16
        if (chito.week % 32  === 0) {
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