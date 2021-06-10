export function setStatus(params, response) {
    params.setGrade(response.payload.grade);
    params.setInt(response.payload.intelligence);
    params.setHealth(response.payload.health);
    params.setSpeech(response.payload.speech);
    params.setWeek(response.payload.week);

    if (params.Week === 7)
        params.setActiveBtn(1)
    else if (params.Week === 15)
        params.setActiveBtn(2)
    else
        params.setActiveBtn(0)
}