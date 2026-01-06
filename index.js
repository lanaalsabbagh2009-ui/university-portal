var users = [
  { 
    name: "Mohammad", 
    email: "studentmhd@uni.com", 
    password: "student123", 
    role: "student", 
    currentSubjects: ["Math", "Physics"], 
    upcomingSubjects: ["Chemistry", "Biology"], 
    termMarks: [
      {term: "Term 1", marks: [{exam: "Vector Exam", score: 85}, {exam: "Forces Exam", score: 90}]},
      {term: "Term 2", marks: [{exam: "Algebra Exam", score: 80}]}
    ],
    termAverage: {"Term 1": 87.5, "Term 2": 80},
    gpa: 3.5,
    tuitionDue: 2000,
    tuitionPaid: 1500,
    upcomingTuition: 2500
  },
  { 
    name: "Ahmad", 
    email: "studentahmad@uni.com", 
    password: "student456", 
    role: "student", 
    currentSubjects: ["Physics"], 
    upcomingSubjects: ["Math"], 
    termMarks: [
      {term: "Term 1", marks: [{exam: "Forces Exam", score: 90}]},
      {term: "Term 2", marks: [{exam: "Mechanics Exam", score: 85}]}
    ],
    termAverage: {"Term 1": 90, "Term 2": 85},
    gpa: 3.8,
    tuitionDue: 2500,
    tuitionPaid: 2000,
    upcomingTuition: 2000
  },
  { 
    name: "AbdAlrahman",
    email: "abd@uni.com",
    password: "abd123",
    role: "student",
    currentSubjects: ["Math", "Chemistry"],
    upcomingSubjects: ["Physics"],
    termMarks: [
      {term: "Term 1", marks: [{exam: "Vector Exam", score: 88}, {exam: "Chemistry Quiz", score: 92}]}
    ],
    termAverage: {"Term 1": 90},
    gpa: 3.7,
    tuitionDue: 2200,
    tuitionPaid: 1500,
    upcomingTuition: 1800
  },
  { 
    name: "Maria",
    email: "maria@uni.com",
    password: "maria123",
    role: "student",
    currentSubjects: ["Physics", "Biology"],
    upcomingSubjects: ["Math"],
    termMarks: [
      {term: "Term 1", marks: [{exam: "Forces Exam", score: 95}, {exam: "Biology Quiz", score: 89}]}
    ],
    termAverage: {"Term 1": 92},
    gpa: 3.9,
    tuitionDue: 2400,
    tuitionPaid: 2000,
    upcomingTuition: 2100
  },
  { 
    name: "Naya",
    email: "naya@uni.com",
    password: "naya123",
    role: "student",
    currentSubjects: ["Math", "Physics"],
    upcomingSubjects: ["Chemistry"],
    termMarks: [
      {term: "Term 1", marks: [{exam: "Vector Exam", score: 78}, {exam: "Forces Exam", score: 82}]}
    ],
    termAverage: {"Term 1": 80},
    gpa: 3.2,
    tuitionDue: 2000,
    tuitionPaid: 1500,
    upcomingTuition: 2000
  },
  { 
    name: "Alaa",
    email: "alaa@uni.com",
    password: "alaa123",
    role: "student",
    currentSubjects: ["Chemistry", "Biology"],
    upcomingSubjects: ["Math", "Physics"],
    termMarks: [
      {term: "Term 1", marks: [{exam: "Chemistry Quiz", score: 85}, {exam: "Biology Quiz", score: 87}]}
    ],
    termAverage: {"Term 1": 86},
    gpa: 3.4,
    tuitionDue: 2300,
    tuitionPaid: 1800,
    upcomingTuition: 2200
  },

  // Doctors
  { name: "Dr. Oula", email: "mathdoctor@uni.com", password: "doctor123", role: "doctor", subject: "Math" },
  { name: "Dr. Lana", email: "physicsdoctor@uni.com", password: "doctor456", role: "doctor", subject: "Physics" },

  // Admin
  { name: "Admin", email: "admin@uni.com", password: "admin123", role: "admin" }
];

// Upcoming exams
var upcomingExams = [
  { name: "Algebra Midterm", subject: "Math", date: "2026-01-10" },
  { name: "Calculus Quiz", subject: "Math", date: "2026-01-12" },
  { name: "Mechanics Midterm", subject: "Physics", date: "2026-01-11" },
  { name: "Optics Quiz", subject: "Physics", date: "2026-01-13" }
];

// DOM ready
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btnLogin").addEventListener("click", login);
});

// Login
function login() {
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  var user = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      user = users[i];
      break;
    }
  }

  if (user === null) {
    alert("Wrong email or password");
    return;
  }

  document.querySelector(".loginBox").style.display = "none";

  if (user.role === "student") showStudent(user);
  else if (user.role === "doctor") showDoctor(user);
  else if (user.role === "admin") showAdmin(user);
}

// Student dashboard
function showStudent(student) {
  var box = document.querySelector(".studentBox");
  box.style.display = "block";
  document.getElementById("studentGreeting").textContent = "Hello " + student.name + " - Your Dashboard";

  var list = document.getElementById("studentExamsList");
  list.innerHTML = "";

  // Current subjects
  var currentDiv = document.createElement("div");
  currentDiv.className = "student-section";
  currentDiv.innerHTML = "<h3>Current Subjects</h3><ul>";
  for (var i = 0; i < student.currentSubjects.length; i++) {
    currentDiv.innerHTML += "<li>" + student.currentSubjects[i] + "</li>";
  }
  currentDiv.innerHTML += "</ul>";
  list.appendChild(currentDiv);

  // Upcoming subjects
  var upcomingDiv = document.createElement("div");
  upcomingDiv.className = "student-section";
  upcomingDiv.innerHTML = "<h3>Upcoming Subjects</h3><ul>";
  for (var i = 0; i < student.upcomingSubjects.length; i++) {
    upcomingDiv.innerHTML += "<li>" + student.upcomingSubjects[i] + "</li>";
  }
  upcomingDiv.innerHTML += "<p class='tuition'>Tuition for next term: $" + student.upcomingTuition + "</p>";
  list.appendChild(upcomingDiv);

  // GPA & Term averages
  var gpaDiv = document.createElement("div");
  gpaDiv.className = "student-section";
  gpaDiv.innerHTML = "<h3>GPA & Term Averages</h3>";
  gpaDiv.innerHTML += "<p class='gpa'>GPA: " + student.gpa + "</p>";
  for (var t = 0; t < student.termMarks.length; t++) {
    var termName = student.termMarks[t].term;
    gpaDiv.innerHTML += "<p class='term-average'>" + termName + " Average: " + student.termAverage[termName] + "</p>";
  }
  list.appendChild(gpaDiv);

  // Marks
  var marksDiv = document.createElement("div");
  marksDiv.className = "student-section";
  marksDiv.innerHTML = "<h3>Marks</h3><ul>";
  for (var t = 0; t < student.termMarks.length; t++) {
    for (var k = 0; k < student.termMarks[t].marks.length; k++) {
      marksDiv.innerHTML += "<li>" + student.termMarks[t].marks[k].exam + ": " + student.termMarks[t].marks[k].score + "</li>";
    }
  }
  marksDiv.innerHTML += "</ul>";
  list.appendChild(marksDiv);

  // Upcoming exams
  var examsDiv = document.createElement("div");
  examsDiv.className = "student-section";
  examsDiv.innerHTML = "<h3>Upcoming Exams</h3><ul>";
  for (var i = 0; i < upcomingExams.length; i++) {
    for (var j = 0; j < student.currentSubjects.length; j++) {
      if (upcomingExams[i].subject === student.currentSubjects[j]) {
        examsDiv.innerHTML += "<li>" + upcomingExams[i].name + " (" + upcomingExams[i].subject + ") - Date: " + upcomingExams[i].date + "</li>";
      }
    }
  }
  examsDiv.innerHTML += "</ul>";
  list.appendChild(examsDiv);
}

// Doctor dashboard (no money)
function showDoctor(doctor) {
  var box = document.querySelector(".doctorBox");
  box.style.display = "block";
  document.getElementById("doctorGreeting").textContent = "Hello " + doctor.name + " - " + doctor.subject.toUpperCase() + " Doctor Dashboard";

  var list = document.getElementById("doctorStudentsList");
  list.innerHTML = "";

  for (var i = 0; i < users.length; i++) {
    var student = users[i];
    if (student.role === "student") {
      var teachesStudent = false;
      for (var j = 0; j < student.currentSubjects.length; j++) {
        if (student.currentSubjects[j] === doctor.subject) {
          teachesStudent = true;
          break;
        }
      }

      if (teachesStudent) {
        var card = document.createElement("div");
        card.className = "doctor-card";

        card.innerHTML = "<h5>" + student.name + "</h5>";

        // Current subjects (for this doctor)
        card.innerHTML += "<p><strong>Subjects:</strong> " + doctor.subject + "</p>";

        // Term averages
        var termText = "";
        for (var t = 0; t < student.termMarks.length; t++) {
          var termName = student.termMarks[t].term;
          termText += termName + ": " + student.termAverage[termName] + ", ";
        }
        termText = termText.slice(0, -2); // remove last comma
        card.innerHTML += "<p class='term-average'><strong>Term Averages:</strong> " + termText + "</p>";

        // Marks
        var marksText = "";
        for (var m = 0; m < student.termMarks.length; m++) {
          for (var k = 0; k < student.termMarks[m].marks.length; k++) {
            if (marksText !== "") marksText += ", ";
            marksText += student.termMarks[m].marks[k].exam + ": " + student.termMarks[m].marks[k].score;
          }
        }
        card.innerHTML += "<p class='marks'><strong>Marks:</strong> " + marksText + "</p>";

        // Upcoming exams for this doctor’s subject
        var upcomingText = "";
        for (var u = 0; u < upcomingExams.length; u++) {
          if (upcomingExams[u].subject === doctor.subject) {
            if (upcomingText !== "") upcomingText += ", ";
            upcomingText += upcomingExams[u].name + " (" + upcomingExams[u].date + ")";
          }
        }
        card.innerHTML += "<p class='upcoming'><strong>Upcoming Exams:</strong> " + upcomingText + "</p>";

        list.appendChild(card);
      }
    }
  }
}

// Admin dashboard
function showAdmin(admin) {
  var box = document.querySelector(".adminBox");
  box.style.display = "block";
  document.getElementById("adminGreeting").textContent = "Hello " + admin.name + " - Admin Dashboard";

  var list = document.getElementById("adminUsersList");
  list.innerHTML = "";

  for (var i = 0; i < users.length; i++) {
    var u = users[i];

    var card = document.createElement("div");
    card.className = "admin-card";

    var roleTitle = u.role.charAt(0).toUpperCase() + u.role.slice(1);
    card.innerHTML = "<h4>" + u.name + " - " + roleTitle + "</h4>";

    if (u.role === "student") {
      // Current subjects
      card.innerHTML += "<p class='subjects'><strong>Current Subjects:</strong> " + u.currentSubjects.join(", ") + "</p>";

      // Upcoming subjects
      card.innerHTML += "<p class='upcoming'><strong>Upcoming Subjects:</strong> " + u.upcomingSubjects.join(", ") + "</p>";

      // Tuition
      card.innerHTML += "<p class='tuition'><strong>Tuition Paid:</strong> $" + u.tuitionPaid + " / $" + u.tuitionDue + 
                        " - <strong>Upcoming Tuition:</strong> $" + u.upcomingTuition + "</p>";

      // Term averages
      var termText = "";
      for (var t = 0; t < u.termMarks.length; t++) {
        var termName = u.termMarks[t].term;
        termText += termName + ": " + u.termAverage[termName] + ", ";
      }
      termText = termText.slice(0, -2); // remove last comma
      card.innerHTML += "<p class='term-average'><strong>Term Averages:</strong> " + termText + "</p>";

      // GPA
      card.innerHTML += "<p><strong>GPA:</strong> " + u.gpa + "</p>";

      // Marks
      var marksText = "";
      for (var m = 0; m < u.termMarks.length; m++) {
        for (var k = 0; k < u.termMarks[m].marks.length; k++) {
          if (marksText !== "") marksText += ", ";
          marksText += u.termMarks[m].marks[k].exam + ": " + u.termMarks[m].marks[k].score;
        }
      }
      card.innerHTML += "<p><strong>Marks:</strong> " + marksText + "</p>";

    } else if (u.role === "doctor") {
      card.innerHTML += "<p><strong>Subject:</strong> " + u.subject + "</p>";
    }

    list.appendChild(card);
  }
}
