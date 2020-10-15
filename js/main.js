(() => {

    // make an ajax request using the Fetch API
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => {
            debugger;
        console.log(data);
        //handleData
        //here's where you would call the function that puts the pieces on the page
        function handleDataSet {
            
            let myData = JSON.parse(data);
            let profPanelText = document.querySelector(".profPanelText");
            let userTemplate = document.querySelector("#user-template").content;

            for (let user in myData) {

                let currentUser = userTemplate.cloneNode(true);
                let currentUserText = currentUser.querySelector('.user').children;
    
                currentUserText[1].textContent = data[user].name;
                currentUserText[2].textContent = data[user].role;
                currentUserText[3].textContent = data[user].nickname;
    
                userSection.appendChild(currentUser);
            }

            console.log(data);
        }
    })
    .catch((err) => {
        console.log(err);
    })



})();