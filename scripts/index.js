var toggleDisplay = (container, img) => {
  if (container.style.display == 'none'){
    container.style.display = "block"
    img.src = "./images/arrow_up.png"
  }else{
    container.style.display = "none"
    img.src = "./images/arrow_down.png"
  }
}

var toggleMaintenceTicketsCollapse = () => {
  var container = document.getElementById("maintenance-tickets")
  var img = document.getElementById("maintenance-notification-img")

  toggleDisplay(container, img)
}

var toggleIncidentTicketsCollapse = () => {
  var container = document.getElementById("incident-tickets")
  var img = document.getElementById("incident-notification-img")

  toggleDisplay(container, img)
}

var closeModal = () => {
  var container = document.getElementById("modal-pop-up")
  container.style.display = "none"
}

var openModal = (e) => {
  console.log(e.classList)
  var classes = e.classList
  var h2 = document.getElementById("modal-header")
  var pop_up_message_container = document.getElementById("pop_up_message")
  pop_up_message_container.innerHTML = ''
  pop_up_message_container.innerHTML += "<br/>Dear Customer, <br/><br/>"

  if (classes.contains("incident")) {
      h2.innerText = "Incident Notification"
      
  } else {
      h2.innerText = "Maintenance Notification"
      pop_up_message_container.innerHTML += "Kindly be informed, we will be carrying out an emergency maintenance on our servers.<br/> <br/>"
  }

  var container = document.getElementById("modal-pop-up")
  
  pop_up_message_container.innerHTML += e.children[3].innerHTML
  container.style.display = "block"
}