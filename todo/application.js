
const notification_btn = document.querySelector(".notification")
const notification_sound = document.querySelector(".bi-volume-mute-fill")


notification_btn.onclick = function () {

    if (notification_sound.classList[1] === "bi-volume-mute-fill") {
        notification_sound.setAttribute("class", "bi-volume-up-fill")
        notification_btn.style.color = "#ff0" 
    }
}


const alarm_title = document.querySelector("#alarm-title")
const alarm_hours = document.querySelector("#alarm-hours")
const alarm_minutes = document.querySelector("#alarm-minutes")


for (let i = 0; i < 24; i++) {
   
    if (i < 10) {
        
        alarm_hours.innerHTML += '<option value="0' + i + '">0' + i + '</option>'
    } else if (i >= 10) {
     
        alarm_hours.innerHTML += '<option value="' + i + '">' + i + '</option>'
    }
}


for (let i = 0; i < 60; i++) {
    
    if (i < 10) {
 
        alarm_minutes.innerHTML += '<option value="0' + i + '">0' + i + '</option>'
    } else if (i >= 10) {
        
        alarm_minutes.innerHTML += '<option value="' + i + '">' + i + '</option>'
    }
}

const add_new_alarm = document.querySelector(".alarm-add-new")
const add_button = document.querySelector(".alarm-add")
const delete_button = document.querySelector(".alarm-delete")
const active_alarm = document.querySelector(".alarm-active")
const active_alarm_title = document.querySelector(".alarm-active-title")
const active_alarm_time = document.querySelector(".alarm-active-time")

add_button.onclick = function () {
 
    if (alarm_title.value !== "") {
   
        const selected_title = alarm_title.value
        const selected_hour = Number(alarm_hours.value)
        const selected_minute = Number(alarm_minutes.value)

 
        localStorage.setItem("alarm-title", selected_title)
        
        localStorage.setItem("alarm-hours", selected_hour)
        localStorage.setItem("alarm-minute", selected_minute)

        add_new_alarm.style.display = "none" 
        active_alarm_title.innerHTML = selected_title 
        active_alarm_time.innerHTML = selected_hour + ":" + selected_minute 
        active_alarm.style.display = "block" 
    } else {
        alert("Please add an alarm title!") 
    }
}

const alarm_saved_title = localStorage.getItem("alarm-title")

const alarm_saved_hour = localStorage.getItem("alarm-hours")
const alarm_saved_minute = localStorage.getItem("alarm-minute")


if (alarm_saved_title !== null) {
    add_new_alarm.style.display = "none" 
    active_alarm_title.innerHTML = alarm_saved_title 
    active_alarm_time.innerHTML = alarm_saved_hour + ":" + alarm_saved_minute 
    active_alarm.style.display = "block" 
} else {
   
    add_new_alarm.style.display = "block" 
}

delete_button.onclick = function () {
    localStorage.clear() 
    active_alarm.style.display = "none" 
    add_new_alarm.style.display = "block" 
}

const fullscreen_alarm = document.querySelector(".fullscreen-alarm")
const fullscreen_alarm_title = document.querySelector(".fullscreen-alarm-title")
const fullscreen_alarm_stop_btn = document.querySelector(".alarm-stop")
const alarm_sound = new Howl({ src: ["https://cdn.pixabay.com/download/audio/2021/10/09/audio_baf81f29b2.mp3"] })

let playing_sound = false

setInterval(function () {
    const time = new Date()
   
    let hour = time.getHours()
    let minutes = time.getMinutes()
    if (
      
        localStorage.getItem("alarm-hours") == hour &&
        localStorage.getItem("alarm-minute") == minutes
    ) {
        playing_sound = true
        fullscreen_alarm_title.innerHTML = localStorage.getItem("alarm-title")
        fullscreen_alarm.style.display = "block"
    }
}, 1000)

setInterval(function () {
    if (playing_sound == true) {
        alarm_sound.play()
    }
}, 7000)


fullscreen_alarm_stop_btn.onclick = function () {
    localStorage.clear() 
    location.reload() 
}

const bgchange =(id) => {
  document.body.style.background = 
      document.getElementById(id).innerHTML;
}