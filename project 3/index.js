function updateCLock(){
    const label = document.getElementById("clock")
    const now = new Date()
    let hour = now.getHours()
    const merediam = hour < 12 ? "AM" : "PM"
    hour = merediam == 'AM' ? hour : hour - 12
    //easier wat to make the hour change is hour % 12 || 12 I prefer mine
    hour = hour.toString().padStart(2, '0')// convert to 12-hour format if necessary
    const minute = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    console.log(hour)
    label.innerText = `${hour} : ${minute} : ${seconds} ${merediam}`
}
updateCLock()
setInterval(updateCLock, 1000)