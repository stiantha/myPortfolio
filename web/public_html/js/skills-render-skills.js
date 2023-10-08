import { skillsData } from "/js/skills/data.js";

const skillsArea = document.querySelector("#skills");

const badgeElement = (skill) => {
  // create the badge element
  const badge = document.createElement("div");

  // add icon
  const icon = document.createElement("img");
  icon.setAttribute("src", skill.icon);

  // add label
  const label = document.createElement("span");
  label.textContent = skill.label;

  // add data to the badge element
  badge.append(icon);
  badge.append(label);
  badge.classList.add("badge");

  return badge;
};

// add badge elements to the skillsArea
skillsData.forEach((skill) => {
  skillsArea.append(badgeElement(skill));
});
