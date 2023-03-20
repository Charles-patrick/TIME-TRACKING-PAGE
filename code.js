fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

let dayBtn = document.querySelector(".daily-btn")
let weekBtn = document.querySelector(".weekly-btn")
let monthBtn = document.querySelector(".monthly-btn")


let workHour = document.querySelector(".work-hours")
let playHour = document.querySelector(".play-hours")
let studyHour = document.querySelector(".study-hours")
let exerciseHour = document.querySelector(".exercise-hours")
let socialHour = document.querySelector(".social-hours")
let selfcareHour = document.querySelector(".selfcare-hours")

let workLWT = document.querySelector(".work-last-week-time")
let playLWT = document.querySelector(".play-last-week-time")
let studyLWT = document.querySelector(".study-last-week-time")
let exerciseLWT = document.querySelector(".exercise-last-week-time")
let socialLWT = document.querySelector(".social-last-week-time")
let selfcareLWT = document.querySelector(".selfcare-last-week-time")

workHour.textContent = "32hrs"
playHour.textContent = "10hrs"
studyHour.textContent = "4hrs"
exerciseHour.textContent = "4hrs"
socialHour.textContent = "5hrs"
selfcareHour.textContent = "2hrs"

workLWT.textContent = "36hrs"
playLWT.textContent = "8hrs"
studyLWT.textContent = "7hrs"
exerciseLWT.textContent = "5hrs"
socialLWT.textContent = "10hrs"
selfcareLWT.textContent = "2hrs"


function activeBtn(){
    if (workHour.textContent == "32hrs" && workLWT.textContent == "36hrs") {
        weekBtn.classList.add('active-btn')
    }
}
activeBtn()

function dailyBtn(){
    workHour.textContent = "5hrs"
    playHour.textContent = "1hr"
    studyHour.textContent = "0hr"
    exerciseHour.textContent = "1hr"
    socialHour.textContent = "1hr"
    selfcareHour.textContent = "0hr"

    workLWT.textContent = "7hrs"
    playLWT.textContent = "2hrs"
    studyLWT.textContent = "1hr"
    exerciseLWT.textContent = "1hr"
    socialLWT.textContent = "3hrs"
    selfcareLWT.textContent = "1hr"

    weekBtn.classList.remove('active-btn')
    dayBtn.classList.add('active-btn')
    monthBtn.classList.remove('active-btn')
}


function weeklyBtn(){
    workHour.textContent = "32hrs"
    playHour.textContent = "10hrs"
    studyHour.textContent = "4hrs"
    exerciseHour.textContent = "4hrs"
    socialHour.textContent = "5hrs"
    selfcareHour.textContent = "2hrs"

    workLWT.textContent = "36hrs"
    playLWT.textContent = "8hrs"
    studyLWT.textContent = "7hrs"
    exerciseLWT.textContent = "5hrs"
    socialLWT.textContent = "10hrs"
    selfcareLWT.textContent = "2hrs"

    weekBtn.classList.add('active-btn')
    dayBtn.classList.remove('active-btn')
    monthBtn.classList.remove('active-btn')
}

function monthlyBtn(){
    workHour.textContent = "103hrs"
    playHour.textContent = "23hrs"
    studyHour.textContent = "13hrs"
    exerciseHour.textContent = "11hrs"
    socialHour.textContent = "21hrs"
    selfcareHour.textContent = "7hrs"

    workLWT.textContent = "128hrs"
    playLWT.textContent = "29hrs"
    studyLWT.textContent = "19hrs"
    exerciseLWT.textContent = "18hrs"
    socialLWT.textContent = "23hrs"
    selfcareLWT.textContent = "11hrs"

    weekBtn.classList.remove('active-btn')
    monthBtn.classList.add('active-btn')
    dayBtn.classList.remove('active-btn')
}

dailyBtn()
monthlyBtn()
weeklyBtn()



