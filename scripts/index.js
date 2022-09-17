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

