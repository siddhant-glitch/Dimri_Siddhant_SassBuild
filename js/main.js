(() => {

    // make an ajax request using the Fetch API
    fetch('../Dimri_Siddhant_SassBuild/data/classData.json')
    .then(res => res.json())
    .then(data => {
            
        console.log(data);
        //handleData
        //here's where you would call the function that puts the pieces on the page
        console.log(data.coursename);
        debugger;
        function content(data) {
            let profpanel = document.querySelector('.profPanel');
            let output = profpanel.querySelector('.text-muted');
            output.innerHTML = data.coursename;
            
        }

        content(data);
    })

    .catch((err) => {
        console.log(err);
    })

})();















// let profPanelText = document.querySelector(".profPanelText");
//             let userTemplate = document.querySelector(".profPanelText").content;

//             for (let user in data) {
                
//                 let currentUser = userTemplate.cloneNode(true);
                
//                 let currentUserText = currentUser.querySelector('.profPanelText').children;

//                 currentUserText[1].innerHTML = data[user].coursename;
//                 currentUserText[2].innerHTML = data[user].coursecode;
//                 currentUserText[3].innerHTML = data[user].profname;
                
//                 profPanelText.appendChild(currentUser);
//             }