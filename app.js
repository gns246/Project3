// chat box popover content and show upon load
$("#chatPopover").popover({
  title: `Question about a Event?<button id="popoverClose" type="button" class="ml-auto close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>`,
  content: `
        <form>
          <label for="question">Ask a question.</label>
          <input type="text" class="form-control" id="question">
          <button style="margin-top: 0.5rem;" type="submit" class="btn">Submit</button>
        </form>
        `,
  html: true,
  placement: "top",
  trigger: "manual"
}).popover("show");

// Popover event listener
$("body").on("click", "#popoverClose", function() {
  $("#chatPopover").popover("toggle");
  $(".chat").toggleClass("closed-state");
});

//changing colors
$(document).ready(function(){
  $("#colorChange").mouseenter(function(){
      $("#colorChange").css("color", "gold");
  });
  $("#colorChange").mouseleave(function(){
      $("#colorChange").css("color", "black");
  });
});

//tooltip hover addToCartButton
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// focus event listener
$(".form-control").focus(function(){
  $(this).css("background-color","#f0f0f5");
})

// toggle button color and popover
$(".chat").click(function() {
  $("#chatPopover").popover("toggle");
  $(this).toggleClass("closed-state");
});

//  modal interactivity
$("#signUpBtn").click(function() {

  // store input values as variables
  var name = $("#firstName").val();
  var email = $("#eMail").val();

  // if both name and email are not empty, then change modal content
  if (email !== "" && name !== "") {
    $(".modal-title").html("Thank you for signing up, " + name + "!");
    $(".modal-body").html("We hope to see or hear from you soon!");
    $(".modal-footer").hide();
  }
  else {
    // clear the current alert if any
    $("#emailAlert").hide();
    $("#nameAlert").hide();
    // show respective alerts if field empty
    if (email === "") {
      $("#emailAlert").show();
    }
    if (name === "") {
      $("#nameAlert").show();
    }
  }
});

//Calendar JS

$(document).ready(function() {

  $('#calendar').fullCalendar({
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-09-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
          // Display the modal.
          // You could fill in the start and end fields based on the parameters
          $('.modal').modal('show');

      },
      eventClick: function(event, element) {
          // Display the modal and set the values to the event values.
          $('.modal').modal('show');
          $('.modal').find('#title').val(event.title);
          $('.modal').find('#starts-at').val(event.start);
          $('.modal').find('#ends-at').val(event.end);

      },
      editable: true,
      eventLimit: true // allow "more" link when too many events

  });

  // Bind the dates to datetimepicker.
  // You should pass the options you need
  $("#starts-at, #ends-at").datetimepicker();

  // Whenever the user clicks on the "save" button om the dialog
  $('#save-event').on('click', function() {
      var title = $('#title').val();
      if (title) {
          var eventData = {
              title: title,
              start: $('#starts-at').val(),
              end: $('#ends-at').val()
          };
          $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
      }
      $('#calendar').fullCalendar('unselect');

      // Clear modal inputs
      $('.modal').find('input').val('');

      // hide modal
      $('.modal').modal('hide');
  });
});
