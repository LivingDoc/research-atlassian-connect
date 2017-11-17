<script>
  setInterval(myTimer, 1000);
  function myTimer() {
    var d = new Date();
    document.getElementById('localDate').innerHTML = 'DATE: ' + d.toDateString();
    document.getElementById('localTime').innerHTML = 'TIME: ' + d.toLocaleTimeString();
  }
</script>
