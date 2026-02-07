// Users
var users = [
  // Students
  {
    name: "Mohammad",
    email: "studentmhd@uni.com",
    password: "student123",
    role: "student",
    currentSubjects: ["Math", "Physics"],
    upcomingSubjects: ["Chemistry", "Biology"],
    termMarks: [
      { term: "Term 1", marks: [{ exam: "Vector Exam", score: 85 }, { exam: "Forces Exam", score: 90 }] },
      { term: "Term 2", marks: [{ exam: "Algebra Exam", score: 80 }] }
    ],
    termAverage: { "Term 1": 87.5, "Term 2": 80 },
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
      { term: "Term 1", marks: [{ exam: "Forces Exam", score: 90 }] },
      { term: "Term 2", marks: [{ exam: "Mechanics Exam", score: 85 }] }
    ],
    termAverage: { "Term 1": 90, "Term 2": 85 },
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
      { term: "Term 1", marks: [{ exam: "Vector Exam", score: 88 }, { exam: "Chemistry Quiz", score: 92 }] }
    ],
    termAverage: { "Term 1": 90 },
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
      { term: "Term 1", marks: [{ exam: "Forces Exam", score: 95 }, { exam: "Biology Quiz", score: 89 }] }
    ],
    termAverage: { "Term 1": 92 },
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
      { term: "Term 1", marks: [{ exam: "Vector Exam", score: 78 }, { exam: "Forces Exam", score: 82 }] }
    ],
    termAverage: { "Term 1": 80 },
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
      { term: "Term 1", marks: [{ exam: "Chemistry Quiz", score: 85 }, { exam: "Biology Quiz", score: 87 }] }
    ],
    termAverage: { "Term 1": 86 },
    gpa: 3.4,
    tuitionDue: 2300,
    tuitionPaid: 1800,
    upcomingTuition: 2200
  },

  // Doctors
  { name: "Dr. Oula", email: "mathdoctor@uni.com", password: "doctor123", role: "doctor", subject: "Math" },
  { name: "Dr. Lana", email: "physicsdoctor@uni.com", password: "doctor456", role: "doctor", subject: "Physics" },
  { name: "Dr. Karla", email: "chemdoctor@uni.com", password: "doctor789", role: "doctor", subject: "Chemistry" },

  // Admin
  { name: "Admin", email: "admin@uni.com", password: "admin123", role: "admin" }
];

// Upcoming exams
var upcomingExams = [
  { name: "Algebra Midterm", subject: "Math", date: "2026-01-10" },
  { name: "Calculus Quiz", subject: "Math", date: "2026-01-12" },
  { name: "Mechanics Midterm", subject: "Physics", date: "2026-01-11" },
  { name: "Optics Quiz", subject: "Physics", date: "2026-01-13" },
  { name: "Chemistry Midterm", subject: "Chemistry", date: "2026-01-14" }
];

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnLogin").addEventListener("click", login);

  document.getElementById("passwordInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") login();
  });
});

window.addEventListener('load', function() {
     const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 2s ease';
        setTimeout( function(){preloader.style.display = 'none', 500} );
  });
    
// Login
function login() {
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  var user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Wrong email or password");
    return;
  }

  document.getElementById("loginBox").style.display = "none";

  // Show navbar logout button
  document.getElementById("btnLogout").style.display = "inline-block";

  if (user.role === "student") showStudent(user);
  else if (user.role === "doctor") showDoctor(user);
  else if (user.role === "admin") showAdmin(user);
}

// Logout
function logout() {
  document.querySelector(".studentBox").style.display = "none";
  document.querySelector(".doctorBox").style.display = "none";
  document.querySelector(".adminBox").style.display = "none";
  document.getElementById("loginBox").style.display = "flex";
  document.getElementById("emailInput").value = "";
  document.getElementById("passwordInput").value = "";

  // Hide navbar logout button
  document.getElementById("btnLogout").style.display = "none";
}

// Student Dashboard
function showStudent(student) {
  var box = document.querySelector(".studentBox");
  box.style.display = "block";
  document.getElementById("studentGreeting").textContent = "Hello " + student.name + " - Your Dashboard";

  var list = document.getElementById("studentExamsList");
  list.innerHTML = "";

  // Current subjects
  var currentDiv = document.createElement("div");
  currentDiv.className = "student-section";
  currentDiv.innerHTML =
    "<h3>Current Subjects</h3><ul>" +
    student.currentSubjects.map(s => "<li>" + s + " - Attendance: 95%</li>").join("") +
    "</ul>";
  list.appendChild(currentDiv);

  // Upcoming subjects & tuition
  var upcomingDiv = document.createElement("div");
  upcomingDiv.className = "student-section";
  upcomingDiv.innerHTML =
    "<h3>Upcoming Subjects</h3><ul>" +
    student.upcomingSubjects.map(s => "<li>" + s + "</li>").join("") +
    "</ul><p class='tuition'>Tuition for next term: $" + student.upcomingTuition + "</p>";
  list.appendChild(upcomingDiv);

  // GPA & Term averages
  var gpaDiv = document.createElement("div");
  gpaDiv.className = "student-section";
  gpaDiv.innerHTML =
    "<h3>GPA & Term Averages</h3><p class='gpa'>GPA: " + student.gpa + "</p>" +
    Object.keys(student.termAverage).map(term => "<p class='term-average'>" + term + " Average: " + student.termAverage[term] + "</p>").join("");
  list.appendChild(gpaDiv);

  // Marks
  var marksDiv = document.createElement("div");
  marksDiv.className = "student-section";
  marksDiv.innerHTML =
    "<h3>Marks</h3><ul>" +
    student.termMarks.map(tm => tm.marks.map(m => "<li>" + m.exam + ": " + m.score + "</li>").join("")).join("") +
    "</ul>";
  list.appendChild(marksDiv);

  // Upcoming exams
  var examsDiv = document.createElement("div");
  examsDiv.className = "student-section";
  examsDiv.innerHTML =
    "<h3>Upcoming Exams</h3><ul>" +
    upcomingExams.filter(ex => student.currentSubjects.includes(ex.subject))
      .map(ex => "<li>" + ex.name + " (" + ex.subject + ") - Date: " + ex.date + "</li>")
      .join("") +
    "</ul>";
  list.appendChild(examsDiv);
}

// Doctor Dashboard
function showDoctor(doctor) {
  var box = document.querySelector(".doctorBox");
  box.style.display = "block";
  document.getElementById("doctorGreeting").textContent =
    "Hello " + doctor.name + " - " + doctor.subject.toUpperCase() + " Doctor Dashboard";

  var list = document.getElementById("doctorStudentsList");
  list.innerHTML = "";

  users.filter(u => u.role === "student" && u.currentSubjects.includes(doctor.subject))
    .forEach(student => {
      var card = document.createElement("div");
      card.className = "doctor-card";

      var termText = student.termMarks.map(tm => tm.term + ": " + student.termAverage[tm.term]).join(", ");
      var marksText = student.termMarks.map(tm => tm.marks.map(m => m.exam + ": " + m.score).join(", ")).join(", ");
      var upcomingText = upcomingExams.filter(ex => ex.subject === doctor.subject)
        .map(ex => ex.name + " (" + ex.date + ")").join(", ");

      card.innerHTML =
        "<h5>" + student.name + "</h5>" +
        "<p><strong>Subjects:</strong> " + doctor.subject + " - Attendance: 95%</p>" +
        "<p class='term-average'><strong>Term Averages:</strong> " + termText + "</p>" +
        "<p class='marks'><strong>Marks:</strong> " + marksText + "</p>" +
        "<p class='upcoming'><strong>Upcoming Exams:</strong> " + upcomingText + "</p>";

      list.appendChild(card);
    });
}

// Admin Dashboard
function showAdmin(admin) {
  var box = document.querySelector(".adminBox");
  box.style.display = "block";
  document.getElementById("adminGreeting").textContent = "Hello " + admin.name + " - Admin Dashboard";

  var list = document.getElementById("adminUsersList");
  list.innerHTML = "";

  users.forEach(u => {
    var card = document.createElement("div");
    card.className = "admin-card";
    var roleTitle = u.role.charAt(0).toUpperCase() + u.role.slice(1);
    card.innerHTML = "<h4>" + u.name + " - " + roleTitle + "</h4>";

    if (u.role === "student") {
      card.innerHTML +=
        "<p class='subjects'><strong>Current Subjects:</strong> " + u.currentSubjects.map(s => s + " (Attendance: 95%)").join(", ") + "</p>" +
        "<p class='upcoming'><strong>Upcoming Subjects:</strong> " + u.upcomingSubjects.join(", ") + "</p>" +
        "<p class='tuition'><strong>Tuition Paid:</strong> $" + u.tuitionPaid + " / $" + u.tuitionDue +
        " - <strong>Upcoming Tuition:</strong> $" + u.upcomingTuition + "</p>" +
        "<p class='term-average'><strong>Term Averages:</strong> " + u.termMarks.map(tm => tm.term + ": " + u.termAverage[tm.term]).join(", ") + "</p>" +
        "<p><strong>GPA:</strong> " + u.gpa + "</p>" +
        "<p><strong>Marks:</strong> " + u.termMarks.map(tm => tm.marks.map(m => m.exam + ": " + m.score).join(", ")).join(", ") + "</p>";
    } else if (u.role === "doctor") {
      card.innerHTML += "<p><strong>Subject:</strong> " + u.subject + "</p><p><strong>Students in Class:</strong> " +
        users.filter(st => st.role === "student" && st.currentSubjects.includes(u.subject)).map(st => st.name).join(", ") +
        "</p>";
    }

    list.appendChild(card);
  });
}
