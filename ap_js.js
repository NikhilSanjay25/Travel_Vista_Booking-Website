
function reviews() {
    if (confirm("Confirm to submit reviews!")) {
            var name = document.getElementById("Name").value;
            var des = document.getElementById("Designation").value;
            var rev = document.getElementById("Reviews").value;
            document.getElementById("n").innerHTML = name;
            document.getElementById("d").innerHTML = des;
            document.getElementById("r").innerHTML = rev;
            }
        }

const d = new Date();
document.getElementById("cd").innerHTML = d;
