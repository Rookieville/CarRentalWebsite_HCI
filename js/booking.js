<script>
    // Simulating car availability
    var carAvailable = true;

    // Function to change car availability
    function changeCarAvailability() {
      carAvailable = false;
    }

    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get form values
      var rentDate = document.getElementById('rent_date').value;
      var returnDate = document.getElementById('return_date').value;
      var city = document.getElementById('city').value;
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var information = document.getElementById('information').value;

      // Perform form validation if needed

      // Process form data
      // Change car availability
      changeCarAvailability();

      // Display success message
      var successMessage = document.getElementById('success-message');
      successMessage.style.display = 'block';
    });
  </script>