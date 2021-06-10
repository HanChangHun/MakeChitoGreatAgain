export function getMidtermStatus(params, chito) {
    let semester = (chito.week % 16) + 1
    let health = 50 * semester
    let damage = chito.intelligence
    let chito_health = Math.max(1, chito.health)
    let sleepy = (10 * semester) / chito_health

    params.setMaxHealth(health)
    params.setDamage(damage)
    params.setCurrentHealth(params.MaxHealth - (params.NumClicked * damage))
    params.setSleepy(sleepy - params.NumClicked)
}