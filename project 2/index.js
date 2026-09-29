function displayProfile() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("rollno").value;
    let marks = parseInt(document.getElementById("marks").value);

    let grade;

    if (marks >= 90)
        grade = "A+";
    else if (marks >= 80)
        grade = "A";
    else if (marks >= 70)
        grade = "B";
    else if (marks >= 60)
        grade = "C";
    else if (marks >= 50)
        grade = "D";
    else
        grade = "F";

    document.getElementById("pname").innerHTML = name;
    document.getElementById("proll").innerHTML = roll;
    document.getElementById("pmarks").innerHTML = marks;
    document.getElementById("pgrade").innerHTML = grade;

    document.getElementById("profile").style.display = "block";
}