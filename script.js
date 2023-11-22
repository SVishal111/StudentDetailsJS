var studentData = [
    {
        name : "Vishal",
        class : "12th",
        group : "Computer Science",
        rollNo : "7286136" 
    },
    {
        name : "Sunil",
        class : "12th",
        group : "Information Technology",
        rollNo : "7286133" 
    },
    {
        name : "Kishore",
        class : "11th",
        group : "Data Science",
        rollNo : "7286126" 
    },
    {
        name : "Lalith",
        class : "12th",
        group : "Computer Science",
        rollNo : "7286078" 
    },
    {
        name : "Vishaal",
        class : "11th",
        group : "Machine Learning",
        rollNo : "7286135" 
    },
    {
        name : "Prakash",
        class : "12th",
        group : "Computer Science",
        rollNo : "7286015" 
    },
    {
        name : "Deekshith",
        class : "11th",
        group : "Humanitarian Tech",
        rollNo : "7286048" 
    },
    {
        name : "Aswin",
        class : "12th",
        group : "Computer Technology",
        rollNo : "7286003" 
    },
    {
        name : "Prabhakar",
        class : "12th",
        group : "Computer Science",
        rollNo : "7286101" 
    },
    {
        name : "Praveen",
        class : "12th",
        group : "Bio-Tech",
        rollNo : "7286105" 
    },
    {
        name : "Raj",
        class : "11th",
        group : "Electrical Eng.",
        rollNo : "7286199" 
    },
    {
        name : 'Shri',
        class : "12th",
        group : "Computer Science",
        rollNo : "7286132" 
    }
]; 

function cards(studentData) {
    var cardContainer = document.getElementById("cardContainer");
    var card = "";

    studentData.forEach((item,index) => {
        card += `
        <div class="card">
            <h3>Name: ${item.name}</h3>
            <p>Class: ${item.class}</p>
            <p>Group: ${item.group}</p>
            <p>RollNo: ${item.rollNo}</p>
        </div>
        `;
    });

    document.getElementById("cardContainer").innerHTML = card;
}

cards(studentData);

function filterFn() {
    var searchValue = document.getElementById("inputValueSearch").value.toLowerCase();

    // var filteredStudents = "";

       var filteredStudents = studentData.filter((item) =>
            item.name.toLowerCase().includes(searchValue)
        );


    cards(filteredStudents);
}