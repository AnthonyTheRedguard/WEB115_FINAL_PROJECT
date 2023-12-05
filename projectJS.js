document.getElementById("planButton").addEventListener("click", planWindow);

function planWindow()
{   
    nameInput = document.getElementById("name").value; 
    email = document.getElementById("email").value;
    goal = document.getElementById("goal").value;
    form = document.getElementById("planForm");

    regex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9.]+)\.([a-z]){2,4}$/

    if (regex.test(email))
    {
        myText = ("<html>\n<head>\n<title>WEB-115 Final Project</title>\n<style>div#tables\n");
        myText += ("{\ndisplay: flex;\n justify-content: center;\n}\ntable\n{\nborder-collapse: collapse;\nwidth: 500px;\nheight: auto;\n}\n");
        myText += ("thead, tbody\n{\nborder: 1px solid black;\n}\nbutton\n{\nbackgroung-color: </style>\n</head>\n<body>\n");
        
        myText += ("Name: " + nameInput + "<br>Email: " + email + "<br>Goal: " + goal + "\n");

        for (i = 0; i < 35; i++)
        {
            stuff = form[i].value;

            if (i == 0)
            {
                myText += ("<div id='tables'><table>\n<thead>\n")
                myText += ("<caption>Monday</caption><tr>\n<th>Meal</th>\n<th>Food Item</th><td>\n</tr>\n<tbody>\n<tr>\<td>Breakfast</td>\n<td>" 
                + stuff + "</td>\n</tr>");
            }
            else if (i == 5)
            {
                myText += ("</table>\n<table>\n<thead>\n")
                myText += ("<caption>Tuesday</caption><tr>\n<th>Meal</th>\n<th>Food Item</th><td>\n</tr>\n<tbody>\n<tr>\<td>Breakfast</td>\n<td>" 
                + stuff + "</td>\n</tr>");
            }
            else if (i == 10)
            {
                myText += ("</table>\n<table>\n<thead>\n")
                myText += ("<caption>Wednesday</caption><tr>\n<th>Meal</th>\n<th>Food Item</th><td>\n</tr>\n<tbody>\n<tr>\<td>Breakfast</td>\n<td>" 
                + stuff + "</td>\n</tr>");
            }
            else if (i == 15)
            {
                myText += ("</table>\n<table>\n<thead>\n")
                myText += ("<caption>Thursday</caption><tr>\n<th>Meal</th>\n<th>Food Item</th><td>\n</tr>\n<tbody>\n<tr>\<td>Breakfast</td>\n<td>" 
                + stuff + "</td>\n</tr>");
            }
            else if (i == 20)
            {
                myText += ("</table>\n<table>\n<thead>\n")
                myText += ("<caption>Friday</caption><tr>\n<th>Meal</th>\n<th>Food Item</th><td>\n</tr>\n<tbody>\n<tr>\<td>Breakfast</td>\n<td>" 
                + stuff + "</td>\n</tr>");
            }
            else if (i == 25)
            {
                myText += ("</table>\n<table>\n<thead>\n")
                myText += ("<caption>Saturday</caption><tr>\n<th>Meal</th>\n<th>Food Item</th><td>\n</tr>\n<tbody>\n<tr>\<td>Breakfast</td>\n<td>" 
                + stuff + "</td>\n</tr>");
            }
            else if (i == 30)
            {
                myText += ("</table>\n<table>\n<thead>\n")
                myText += ("<caption>Sunday</caption><tr>\n<th>Meal</th>\n<th>Food Item</th><td>\n</tr>\n<tbody>\n<tr>\<td>Breakfast</td>\n<td>" 
                + stuff + "</td>\n</tr>");
            }
            else if ([1, 6, 11, 16, 21, 26, 31].includes(i))
            {
                myText += ("<tr>\n<td>Snack 1</td>\n<td>" + stuff + "</td>");
            }
            else if ([2, 7, 12, 17, 22, 27, 32].includes(i))
            {
                myText += ("<tr>\n<td>Lunch</td>\n<td>" + stuff + "</td>");
            }
            else if ([3, 8, 13, 18, 23, 28, 33].includes(i))
            {
                myText += ("<tr>\n<td>Snack 2</td>\n<td>" + stuff + "</td>");
            }
            else if ([4, 9, 14, 19, 24, 29, 34].includes(i))
            {
                myText += ("<tr>\n<td>Dinner</td>\n<td>" + stuff + "</td>\n");
            }
        }
        myText += ("</table>\n</div>\n");
        myText += ("<button onclick='window.print()'>Print</button><br><br>");
        myText += ("<button id='download' type='button'>Download</button>\n");
        myText += ("<script>\ndocument.getElementById('download').addEventListener('click', function(){alert('Could not figure out download :( Try print button then Save As PDF option. ')})\n</script>");
        myText += ("</body>\n</html>");

        flyWindow = window.open('about:blank', popup=true, 'width=1000,height=1000,left=200,top=200');
        flyWindow.document.write(myText);


    }
    else
    {
        alert("Invalid email address. Please try again");
    }
}