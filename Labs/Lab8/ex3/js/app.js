var light = pickRandom([
  'stop', 
  'go', 
  'slow'
]); 
print(light);
if (light === 'stop') {
   dropbox('red');
}
if (light ==='slow') {
   dropbox('green');
}
if (light ==='go') {
   dropbox('yellow');
}