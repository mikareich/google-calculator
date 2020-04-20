// expand/ close expandable operators block
const eOB = document.querySelector(".expandable-operators-block"); // long: expandable Operations Block
const eOB_trigger = eOB.querySelector(".trigger");

eOB_trigger.addEventListener("click", () => eOB.classList.toggle("expand"));
