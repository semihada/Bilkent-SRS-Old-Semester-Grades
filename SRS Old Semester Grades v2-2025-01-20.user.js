// SRS Old Semesters Grades v2
// Copyright (C) 2025  Semih Ada
// Licensed under the GNU General Public License v3.0 or later.
// See the LICENSE file in the root of this repository for details.

// ==UserScript==
// @name         SRS Old Semester Grades v2
// @namespace    https://github.com/semihada
// @version      2025-01-20
// @description  Fetches from Bilkent SRS to show grades from older semesters
// @author       Semih
// @match        https://stars.bilkent.edu.tr/srs/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.tr
// @grant        none
// ==/UserScript==

// Sleep function for later use
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const delete_all_tabs = async () => {
    for(let j=0; j<=10; j++)
    {
    for(let i=2; i<=10; i++)
    {
        let qs_text = "#tabTabsemesterTab_" + i + " > span > img";
        if(document.querySelector(qs_text)) {
            console.log("deleted one: " + qs_text);
            document.querySelector(qs_text).click();
            await sleep(20);
        }
    }
    }
}


(async function() {
    'use strict';
    await sleep(1000);

    // Increase the maximum number of tabs (default: 6)
    for (let key in window) {
        if (window[key] instanceof DHTMLSuite.tabView) {
            window[key].maxNumberOfTabs = 10; // Set to 10
            console.log('maxNumberOfTabs changed to:', window[key].maxNumberOfTabs);
        }
    }

    let topbar = document.querySelectorAll(".infoBox")[1];
    // DOM of devTool Button
    var devDOM = document.createElement("a");
    devDOM.href = "#";
    devDOM.innerText = "Fetch the Data!";
    devDOM.style.marginRight = "5px";
    devDOM.style.backgroundImage = "url(/srs/images/bullet.png)";
    devDOM.style.fontWeight = "bold";

    // creating a div just for float-right
    var divDOM = document.createElement("div");
    divDOM.style.float = "right";
    divDOM.append(devDOM);

    // DOM of Dropdown Menu
    var dropdownDOM = document.createElement("select");
    dropdownDOM.setAttribute("id","selectCourse");
    dropdownDOM.style.float = "right";
    dropdownDOM.style.marginRight = "5px";


    // create options from 2022-1 to 2023-3
    for(let i=1; i<=4; i++)
    {
        for(let j=1; j<=3; j++)
        {
            let optionDOM = document.createElement("option");
            let val = "202" + i + j;
            optionDOM.setAttribute("value",val);
            optionDOM.innerText = "202" + i + "-" + j;
            dropdownDOM.appendChild(optionDOM);
        }

    }

    // add button and dropdown menu to topbar
    topbar.append(divDOM);
    topbar.append(dropdownDOM);

    // clear console and delete all tabs
    console.clear();

    // if button is pressed
  devDOM.addEventListener('click', async (e) =>{
      await delete_all_tabs();
      let selectedYear = dropdownDOM.options[dropdownDOM.selectedIndex].value;
      tabViewObjSemester.createNewTab('semesterTab','Semester ' +selectedYear + ' Lectures','', 'ajax/semester.info.php?semester=' + selectedYear, true);
      await sleep(200);
      var ajax_gradesLink = 'ajax/gradeAndAttend/grade.php?first=y&courses&semester=' + selectedYear;
      // document.querySelector("#tabTabsemesterTab_2> span > img").click();

      tabViewObjSemester.createNewTab('semesterTab','Semester ' +selectedYear + ' Grades' ,'', ajax_gradesLink, true);

  });

    // activated if dropdown is changed to see all courses taken
    dropdownDOM.addEventListener('change', async () => {
        if(document.querySelector("#tabTabsemesterTab_2> span > img")) {document.querySelector("#tabTabsemesterTab_2> span > img").click();}
        let selectedYear = dropdownDOM.options[dropdownDOM.selectedIndex].value;
        tabViewObjSemester.createNewTab('semesterTab','Semester ' +selectedYear, '', 'ajax/semester.info.php?semester=' + selectedYear, true);
        await sleep(500);
        let backsemesterDOM = document.querySelector("#backSemesterCourses").parentElement.querySelector("div");
        try{
        backsemesterDOM.append(divDOM);
        }
        catch{
            await sleep(1000);
            backsemesterDOM.append(divDOM);
        }
    }, 500);

})();