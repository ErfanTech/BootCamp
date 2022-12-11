function starsPattern() {
    var i, j, k;
    var n = document.getElementById("test").value;
    for (i = 1; i <= n; i++) {
        for (j = i; j < n; j++)
            document.write('&nbsp;&nbsp;');
        for (k = 1; k < i * 2; k++)
            document.write('*');
        document.write("<br>");
    }

    for (i = n - 1; i >= 1; i--) {
        for (j = n; j > i; j--)
            document.write('&nbsp;&nbsp;');
        for (k = 1; k < i * 2; k++)
            document.write('*');
        document.write('<br>');
    }

}