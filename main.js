

$(document).ready(function () {


    var turn = "x"
    // A counter of the number of users who would fill the box if no one wins;
    let count = 0;
     // The result of win
    let result;

    $(".box").click(function () {


        if ($(this).hasClass("x") || $(this).hasClass("o")) {
            alert("This has been selected!!!")
        }

        else if (turn == 'x') {
            $(this).text("x")
            $(this).addClass('x')
            count++;
            result = checkWin(turn, count);
            $("#turn").text("It is player O'S Turn")
            turn = "o"
            if (result == 'x') {
                $("body").append("<div class='massage'><img src='winn.png'> winerr is player X </div>");
                var massage = $(".massage")
                massage.animate({ fontSize: '2em' }, {
                    duration: 800,
                    complete: function () {
                        restart();
                    }

                });

            }


        }
        else if (turn == 'o') {
            $(this).text("o")
            $(this).addClass('o')
            count++;
            result = checkWin(turn, count);
            $("#turn").text("It is player X'S Turn");
            turn = "x"
            if (result == 'o') {
                $("body").append("<div class='massage'><img src='winn.png'>winerr is player O </div>");
                var div = $(".massage")
                div.animate({ fontSize: '2em' }, {
                    duration: 800,
                    complete: function () {
                        restart();
                    }

                });

            }


        }

    });



// Check the winner

    function checkWin(turn, count) {


        for (i = 1; i < 9; i++) {
            // Check the rows
            if (i == 1 || i == 4 || i == 7) {
                if ($("#square" + i).html() == turn &&
                    $("#square" + (i + 1)).html() == turn &&
                    $("#square" + (i + 2)).html() == turn) {
                    count = 0;
                    return turn;
                }
            }

            // Check the columns
            if (i == 1 || i == 2 || i == 3) {
                if ($("#square" + i).html() == turn &&
                    $("#square" + (i + 3)).html() == turn &&
                    $("#square" + (i + 6)).html() == turn) {
                    count = 0;
                    return turn;

                }
            }
        }
        // Check the diagonals
        if ($("#square1").html() == turn &&
            $("#square5").html() == turn &&
            $("#square9").html() == turn) {

            count = 0;
            return turn;

        }
        if ($("#square3").html() == turn &&
            $("#square5").html() == turn &&
            $("#square7").html() == turn) {
            count = 0;
            return turn;
        }
        //Check Draw
        if (count == 9) {
            $("body").append("<div class='massage'><img src='draw.png'> Draw</div>");
                var massage = $(".massage")
                massage.animate({ fontSize: '2em' }, {
                    duration: 800,
                    complete: function () {
                        restart();}
        })

    }



    }






    // restart the game 
    function restart() {
        location.reload();
    }
    $("#Rester").click(function () {
        restart();
    })
});
