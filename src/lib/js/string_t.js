function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getDateSystem(){
    let nowDateTime = new Date();
    return (nowDateTime.getDate()+"").padStart(2, 0) + '-' + (( nowDateTime.getMonth() + 1 ) + "").padStart(2, 0) + '-' + nowDateTime.getFullYear()+ " "+ nowDateTime.getHours() + ':' + nowDateTime.getMinutes() + ':' + nowDateTime.getSeconds();;
}
export { capitalizarPrimeraLetra, getDateSystem}