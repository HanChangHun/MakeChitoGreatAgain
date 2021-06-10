export function getMidtermStatus(params, chito) {
    let semester = (chito.week % 16) + 1
    let health = 50 * semester
    let damage = chito.intelligence
    let sleepy = (10 * semester) / chito.health

    params.setMaxHealth(health)
    params.setDamage(damage)
    params.setCurrentHealth(params.MaxHealth - (params.NumClicked * damage))
    params.setSleepy(sleepy - params.NumClicked)
}