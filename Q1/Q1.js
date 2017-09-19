let US = {'MidwestRegion':[{'name':'WARNING: Information about missing individuals may be upsetting. Type "ok" to acknowledge.'}, {'name': 'Charlie Brown', 'last_seen': 'Hennepin County', 'photo': '<img src="https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png"/>'}, {'name': 'Lucy', 'last_seen': 'Hennipin County', 'photo': '<img src="https://upload.wikimedia.org/wikipedia/en/e/e9/Lucy_van_Pelt.png"/>'}, {'name': 'Linus', 'last_seen': 'Hennipin County', 'photo':'<img src="https://vignette.wikia.nocookie.net/peanuts/images/4/4d/Linusvanpelt.gif/revision/latest?cb=20160508100121"/>'}, {'name': 'Eleven', 'last_seen': 'Hawkins, IN', 'photo':'<img src="http://vignette3.wikia.nocookie.net/strangerthings8338/images/a/aa/Eleven_001.png/revision/latest/top-crop/width/320/height/320?cb=20160803065514"/>'}, {'name': 'Will', 'last_seen': 'Hawkins, IN', 'photo': '<img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/stranger-things-noah.jpg"/>'}, {'name': 'Barbara', 'last_seen': 'Hawkins, IN', 'photo': '<img src="http://consequenceofsound.files.wordpress.com/2016/08/screen-shot-2016-08-21-at-2-33-23-pm.png?w=350&h=350&crop=1"/>'}, {'name': 'End of practice set', 'photo': '<img src="https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=5029529"/>'}]}

$(document).ready(function(){
  let photo = document.getElementById('box1');
  let photo2 = document.getElementById('box4');
  let points = document.getElementById('box5');
  let counter = 0;
  $(points).append(' ' + counter);
/*Here is what you would use if pulling from an actual API. Replace console.log(data) with what actual data you'd like and where to append it.
$.get((''), function(data){
  console.log(data);
})*/
  let index = 0;
  $('#button').on('click', function(){
    $("#box1").empty();
    if(US.MidwestRegion[index+1]){
    $("#box1").prepend(US.MidwestRegion[index+1].photo);

    prompt("Re-type: " + US.MidwestRegion[index].name);
      index++;
    } else {
      index = 0;
      $("#box1").prepend(US.MidwestRegion[index+1].photo);

      prompt("Re-type: " + US.MidwestRegion[index].name);
        index++;
    }
  })
  let tally = 0;
  $('#button2').on('click', function(){
    $("#box4").empty();
    if(US.MidwestRegion[tally+1]){
    $("#box4").prepend(US.MidwestRegion[tally+1].photo);

    prompt("Enter the name: ");
      tally++;
      counter++;
      $(points).text('Points: ' + counter);
    } else {
      tally = 0;
      $("#box4").prepend(US.MidwestRegion[tally+1].photo);

      prompt("Enter the name: ");
        tally++;
    }
  })


  })
