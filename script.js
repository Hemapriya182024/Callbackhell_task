var clickme1 = document.getElementById("clickme");
clickme1.click = function () { };

document.addEventListener("click", function () {
    var countdownDiv = document.getElementById('countdown');
    var messageDiv = document.getElementById('message');

    setTimeout(function () {
        countdownDiv.textContent = 10;
        setTimeout(function () {
            countdownDiv.textContent = 9;
            setTimeout(function () {
                countdownDiv.textContent = 8;
                setTimeout(function () {
                    countdownDiv.textContent = 7;
                    setTimeout(function () {
                        countdownDiv.textContent = 6;
                        setTimeout(function () {
                            countdownDiv.textContent = 5;
                            setTimeout(function () {
                                countdownDiv.textContent = 4;
                                setTimeout(function () {
                                    countdownDiv.textContent = 3;
                                    setTimeout(function () {
                                        countdownDiv.textContent = 2;
                                        setTimeout(function () {
                                            countdownDiv.textContent = 1;
                                            setTimeout(function () {
                                                countdownDiv.textContent = 0;
                                                setTimeout(function () {
                                                    messageDiv.textContent = "Happy Independence Day!";
                                                }, 1000);
                                            }, 1000);

                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});
