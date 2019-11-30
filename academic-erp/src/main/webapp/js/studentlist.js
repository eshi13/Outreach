/*var api = "webapi/student";
$.get(api, function (student, status) {
    if (status == "success") {
        var student_data_body = "";
        for (var i = 0; i < student.length; i++) {
            var domainName = student[i].domain.discipline + " " + student[i].domain.branch;
            var photograph = '<img src="' + student[i].photograph + '" height="80" alt="' + student[i].rollNumber + '">'
            student_data_body += '<tr>'
                + '<td>' + i + 1 + '</td>'
                + '<td>' + student[i].rollNumber + '</td>'
                + '<td>' + student[i].firstName + '</td>'
                + '<td>' + student[i].middleName + '</td>'
                + '<td>' + student[i].lastName + '</td>'
                + '<td>' + student[i].emailId + '</td>'
                + '<td>' + domainName + '</td>'
                + '<td align="center">' + photograph + '</td>'
                + '</tr>';
        }
        $('#student_data tbody').html(student_data_body);
    }
    $('#student_data').DataTable();
});*/
var api = "webapi/offer/getoffers";
$.get(api, function (offers, status) {
    if (status == "success") {
        var offer_data_body = "";
        console.log(offers[1].specialisation[0].name);
        for (var i = 0; i < offers.length; i++) {
            var d = "";
            var s= "";
            if(offers[i].domain[0]!= null) {
                d = offers[i].domain[0].name
            }
            if(offers[i].specialisation[0]!= null) {
                s = offers[i].specialisation[0].name 
            }
            console.log(d);
            console.log(s);
            //var domainName = of[i].domain.discipline + " " + student[i].domain.branch;
            //var photograph = '<img src="' + student[i].photograph + '" height="80" alt="' + student[i].rollNumber + '">'
            offer_data_body += '<tr>'
                + '<td>' + i + 1 + '</td>'
                + '<td>' + offers[i].organisation + '</td>'
                + '<td>' + d+ '</td>'
                + '<td>' + offers[i].min_grade + '</td>'
                + '<td>' + offers[i].max_intake + '</td>'
                + '<td>' + s + '</td>';
        }
        $('#student_data tbody').html(offer_data_body);
    }
    $('#student_data').DataTable();
});
