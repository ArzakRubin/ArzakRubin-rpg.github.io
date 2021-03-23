var drawWidth = 5786, drawHeight = 4008;
var image = "icewind-dale-5786-4008.jpg", imageMob = "icewind-dale-3210-2224.jpg", mini = "smallI.jpg";
var lineFocus = 11; var dotWidth = 18, dotTrait = 6, zoomPoint=3, zoomCelPoint=7, zoomMax=5, zoomCelMax=10;
var carte = "I", factorKm = 38.96;
var bilang = 0; 
var auteur ="<a href='https://mikeschley.com/'>Mike Schley</a>";
/* 1254 px = 20 miles = 32.19 km -> 38.96 px = 1 km */

var zones = [
];

var groupe = [ 
{ name:"GROUP", color:"#FF0000", x:0, y:0, txt:"Places"},
{ name:"Bremen", color:"#FF0000", x:1565, y:2050, txt:"<p>Population 150.</p><p>Leader: Speaker Dorbulgruf Shalescar (dwarf).</p><p><img src='images/bremen-small.jpg' width='140' height='180' alt='' /></p>"},
{ name:"Bryn Shander", color:"#FF0000", x:1841, y:2279, txt:"<p>Population 1200.</p><p>Leader: Speaker Duvessa Shane.</p><p>Biggest city and capital of Ten Towns. Trading center in Icewind Dale.</p><p><img src=\"images/bryn-shander-small.jpg\" width=\"180\" height=\"140\" alt=\"\" /></p>"},
{ name:"Caer-Dineval", color:"#FF0000", x:2726, y:2068, txt:"<p>Population 100.</p><p>Leader: Speaker Crannoc Siever.</p><p><img src='images/caer-dineval-small.jpg' width='140' height='180' alt='' /></p>"},
{ name:"Caer-Konig", color:"#FF0000", x:2884, y:1850, txt:"<p>Population 150.</p><p>Leader: Speaker Trovus (dragonborn).</p><p><img src='images/caer-konig-small.jpg' width='140' height='180' alt='' /></p>"},
{ name:"Dougan's Hole", color:"#FF0000", x:2007, y:2663, txt:"<p>Population 50.</p><p>Leader: Speaker Edgra Durmoot.</p><p><img src='images/dougans-hole-small.jpg' width='140' height='180' alt='' /></p>"},
{ name:"Easthaven", color:"#FF0000", x:2700, y:2399, txt:"<p>Population 750.</p><p>Leader: Speaker Danneth Waylen.</p><p><img src='images/easthaven-small.jpg' width='180' height='140' alt='' /></p>"},
{ name:"Good Mead", color:"#FF0000", x:2241, y:2539, txt:"<p>Population 100.</p><p>Leader: Speaker Kendrick Rielsbarrow.</p><p><img src='images/good-mead-small.jpg' width='140' height='180' alt='' /></p>"},
{ name:"Lonelywood", color:"#FF0000", x:1978, y:1743, txt:"<p>Population 100.</p><p>Leader: Speaker Nimsy Huddle (halfling).</p><p><img src='images/lonelywood-small.jpg' width='140' height='180' alt='' /></p>"},
{ name:"Targos", color:"#FF0000", x:1653, y:2150, txt:"<p>Population 1000.</p><p>Leader: Speaker Naerth Maxildanarr.</p><p><img src='images/targos-small.jpg' width='140' height='180' alt='' /></p>"},
{ name:"Termalaine", color:"#FF0000", x:2095, y:1832, txt:"<p>Population 600.</p><p>Leader: Speaker Oarus Masthew.</p><p><img src='images/termalaine-small.jpg' width='140' height='180' alt='' /></p>"},

{ name:"Lost Spire of Netheril", color:"#FF0000", x:3646, y:1796, txt:""},
{ name:"Revel's End", color:"#FF0000", x:2145, y:725, txt:""},
{ name:"Skytower Shelter", color:"#FF0000", x:4481, y:2767, txt:""},

{ name:"GROUP", color:"#FF8000", x:0, y:0, txt:"Mountainous"},
{ name:"Kelvin's Cairn", color:"#FF8000", x:2652, y:1612, txt:""},
{ name:"Cackling Chasm", color:"#FF8000", x:3209, y:2935, txt:""},
{ name:"Wyrmdoom Crag", color:"#FF8000", x:4974, y:2508, txt:""},

{ name:"GROUP", color:"#58ACFA", x:0, y:0, txt:"Waters"},
{ name:"Lac Dinneshere", color:"#58ACFA", x:2860, y:2172, txt:""},
{ name:"Maer Dualdon", color:"#58ACFA", x:1922, y:1831, txt:""},
{ name:"Redwaters", color:"#58ACFA", x:2404, y:2628, txt:""},

];