var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n={GEMINI_MODEL:`gemini-3.1-flash-lite`,LS_KEY_API:`wm_sim_api_key`,LS_KEY_MATCHES:`wm_sim_matches`},r={venues:{MEX:{name:`Estadio Azteca`,city:`Mexico City`,country:`🇲🇽`,lat:19.3029,lon:-99.1505,tz:`America/Mexico_City`},GDL:{name:`Estadio Akron`,city:`Guadalajara`,country:`🇲🇽`,lat:20.682,lon:-103.4625,tz:`America/Mexico_City`},MTY:{name:`Estadio BBVA`,city:`Monterrey`,country:`🇲🇽`,lat:25.6705,lon:-100.2436,tz:`America/Monterrey`},TOR:{name:`BMO Field`,city:`Toronto`,country:`🇨🇦`,lat:43.6332,lon:-79.4186,tz:`America/Toronto`},VAN:{name:`BC Place`,city:`Vancouver`,country:`🇨🇦`,lat:49.2768,lon:-123.112,tz:`America/Vancouver`},NYC:{name:`MetLife Stadium`,city:`East Rutherford`,country:`🇺🇸`,lat:40.8135,lon:-74.0745,tz:`America/New_York`},LAX:{name:`SoFi Stadium`,city:`Los Angeles`,country:`🇺🇸`,lat:33.9535,lon:-118.3392,tz:`America/Los_Angeles`},DAL:{name:`AT&T Stadium`,city:`Arlington`,country:`🇺🇸`,lat:32.7473,lon:-97.0945,tz:`America/Chicago`},SFO:{name:`Levi's Stadium`,city:`Santa Clara`,country:`🇺🇸`,lat:37.4033,lon:-121.9694,tz:`America/Los_Angeles`},MIA:{name:`Hard Rock Stadium`,city:`Miami Gardens`,country:`🇺🇸`,lat:25.958,lon:-80.2389,tz:`America/New_York`},ATL:{name:`Mercedes-Benz Stadium`,city:`Atlanta`,country:`🇺🇸`,lat:33.7553,lon:-84.4006,tz:`America/New_York`},HOU:{name:`NRG Stadium`,city:`Houston`,country:`🇺🇸`,lat:29.6847,lon:-95.4107,tz:`America/Chicago`},PHI:{name:`Lincoln Financial Field`,city:`Philadelphia`,country:`🇺🇸`,lat:39.9008,lon:-75.1675,tz:`America/New_York`},SEA:{name:`Lumen Field`,city:`Seattle`,country:`🇺🇸`,lat:47.5952,lon:-122.3316,tz:`America/Los_Angeles`},BOS:{name:`Gillette Stadium`,city:`Foxborough`,country:`🇺🇸`,lat:42.0909,lon:-71.2643,tz:`America/New_York`},KC:{name:`Arrowhead Stadium`,city:`Kansas City`,country:`🇺🇸`,lat:39.0489,lon:-94.4839,tz:`America/Chicago`}},teams:{Mexiko:{coach:`Jaime Lozano`,system:`4-3-3`,info:`Kompaktes Zentrum, schnelles Flügelspiel.`,squad:[{name:`Edson Álvarez`,pos:`MF`},{name:`Santiago Giménez`,pos:`ANG`},{name:`Hirving Lozano`,pos:`ANG`}],group:`A`,flag:`🇲🇽`},Südafrika:{coach:`Hugo Broos`,system:`4-2-3-1`,info:`Physisch stark, Fokus auf Konter.`,squad:[{name:`Ronwen Williams`,pos:`TW`},{name:`Percy Tau`,pos:`ANG`},{name:`Teboho Mokoena`,pos:`MF`}],group:`A`,flag:`🇿🇦`},Südkorea:{coach:`Hong Myung-bo`,system:`4-4-2`,info:`Diszipliniertes Pressing, starke Individualisten.`,squad:[{name:`Son Heung-min`,pos:`ANG`},{name:`Kim Min-jae`,pos:`ABW`},{name:`Lee Kang-in`,pos:`MF`}],group:`A`,flag:`🇰🇷`},Tschechien:{coach:`Ivan Hašek`,system:`3-5-2`,info:`Kompakte Abwehr, gefährlich bei Standards.`,squad:[{name:`Tomáš Souček`,pos:`MF`},{name:`Patrik Schick`,pos:`ANG`},{name:`Vladimír Coufal`,pos:`ABW`}],group:`A`,flag:`🇨🇿`},Kanada:{coach:`Jesse Marsch`,system:`4-2-2-2`,info:`Hohes Angriffspressing, enormes Tempo.`,squad:[{name:`Alphonso Davies`,pos:`ABW`},{name:`Jonathan David`,pos:`ANG`},{name:`Stephen Eustáquio`,pos:`MF`}],group:`B`,flag:`🇨🇦`},"Bosnien-Herzegowina":{coach:`Savo Milošević`,system:`4-3-3`,info:`Robustes Zweikampfverhalten im Zentrum.`,squad:[{name:`Edin Džeko`,pos:`ANG`},{name:`Ermedin Demirović`,pos:`ANG`},{name:`Amar Dedić`,pos:`ABW`}],group:`B`,flag:`🇧🇦`},Katar:{coach:`Tintín Márquez`,system:`3-5-2`,info:`Ballbesitzorientiert, spielstarke Halbverteidiger.`,squad:[{name:`Akram Afif`,pos:`ANG`},{name:`Almoez Ali`,pos:`ANG`},{name:`Hassan Al-Haydos`,pos:`MF`}],group:`B`,flag:`🇶🇦`},Schweiz:{coach:`Murat Yakin`,system:`3-4-2-1`,info:`Taktisch extrem flexibel, dominantes Mittelfeld.`,squad:[{name:`Granit Xhaka`,pos:`MF`},{name:`Manuel Akanji`,pos:`ABW`},{name:`Breel Embolo`,pos:`ANG`}],group:`B`,flag:`🇨🇭`},Brasilien:{coach:`Dorival Júnior`,system:`4-2-3-1`,info:`Offensive Magie, sehr hohes Tempo auf den Flügeln.`,squad:[{name:`Vinícius Júnior`,pos:`ANG`},{name:`Rodrygo`,pos:`ANG`},{name:`Bruno Guimarães`,pos:`MF`},{name:`Alisson`,pos:`TW`}],group:`C`,flag:`🇧🇷`},Marokko:{coach:`Walid Regragui`,system:`4-1-4-1`,info:`Perfekte defensive Organisation, schnelles Umschalten.`,squad:[{name:`Achraf Hakimi`,pos:`ABW`},{name:`Yassine Bounou`,pos:`TW`},{name:`Brahim Díaz`,pos:`MF`}],group:`C`,flag:`🇲🇦`},Haiti:{coach:`Gabriel Calderón`,system:`4-4-2`,info:`Körperbetontes Spiel, tiefstehende Abwehrkette.`,squad:[{name:`Frantzdy Pierrot`,pos:`ANG`},{name:`Duckens Nazon`,pos:`ANG`}],group:`C`,flag:`🇭🇹`},Schottland:{coach:`Steve Clarke`,system:`5-4-1`,info:`Kampfbetont, Flankenfokus über die Außenverteidiger.`,squad:[{name:`Andrew Robertson`,pos:`ABW`},{name:`Scott McTominay`,pos:`MF`},{name:`John McGinn`,pos:`MF`}],group:`C`,flag:`🏴󠁧󠁢󠁳󠁣󠁴󠁿`},USA:{coach:`Gregg Berhalter`,system:`4-3-3`,info:`Athletisch, ballbesitzorientiert mit offensiven Außen.`,squad:[{name:`Christian Pulisic`,pos:`ANG`},{name:`Weston McKennie`,pos:`MF`},{name:`Tyler Adams`,pos:`MF`}],group:`D`,flag:`🇺🇸`},Paraguay:{coach:`Daniel Garnero`,system:`4-3-3`,info:`Aggressives Pressing, direkter Zug zum Tor.`,squad:[{name:`Miguel Almirón`,pos:`MF`},{name:`Julio Enciso`,pos:`ANG`},{name:`Gustavo Gómez`,pos:`ABW`}],group:`D`,flag:`🇵🇾`},Australien:{coach:`Graham Arnold`,system:`4-4-2`,info:`Physisch überlegen, stark bei ruhenden Bällen.`,squad:[{name:`Mathew Ryan`,pos:`TW`},{name:`Harry Souttar`,pos:`ABW`},{name:`Craig Goodwin`,pos:`MF`}],group:`D`,flag:`🇦🇺`},Türkei:{coach:`Vincenzo Montella`,system:`4-2-3-1`,info:`Technisch starkes Mittelfeld, kreative Spielgestaltung.`,squad:[{name:`Hakan Çalhanoğlu`,pos:`MF`},{name:`Arda Güler`,pos:`MF`},{name:`Kenan Yıldız`,pos:`ANG`}],group:`D`,flag:`🇹🇷`},Deutschland:{coach:`Julian Nagelsmann`,system:`4-2-3-1`,info:`Dominantes Positionsspiel, flüssige Rotationen vorne.`,squad:[{name:`Jamal Musiala`,pos:`MF`},{name:`Florian Wirtz`,pos:`MF`},{name:`Antonio Rüdiger`,pos:`ABW`},{name:`Kai Havertz`,pos:`ANG`}],group:`E`,flag:`🇩🇪`},Curaçao:{coach:`Dick Advocaat`,system:`4-3-3`,info:`Konterfokus, viele Spieler mit Eredivisie-Erfahrung.`,squad:[{name:`Juninho Bacuna`,pos:`MF`},{name:`Leandro Bacuna`,pos:`MF`},{name:`Jurgen Locadia`,pos:`ANG`}],group:`E`,flag:`🇨🇼`},Elfenbeinküste:{coach:`Emerse Faé`,system:`4-3-3`,info:`Physisch extrem stark, enorme Wucht im Angriff.`,squad:[{name:`Sébastien Haller`,pos:`ANG`},{name:`Franck Kessié`,pos:`MF`},{name:`Seko Fofana`,pos:`MF`}],group:`E`,flag:`🇨🇮`},Ecuador:{coach:`Félix Sánchez Bas`,system:`3-4-3`,info:`Sehr dynamisch, hohe Intensität im Gegenpressing.`,squad:[{name:`Moisés Caicedo`,pos:`MF`},{name:`Piero Hincapié`,pos:`ABW`},{name:`Enner Valencia`,pos:`ANG`}],group:`E`,flag:`🇪🇨`},Niederlande:{coach:`Ronald Koeman`,system:`3-4-1-2`,info:`Variables Aufbauspiel, extrem kopfballstarke Abwehr.`,squad:[{name:`Virgil van Dijk`,pos:`ABW`},{name:`Xavi Simons`,pos:`MF`},{name:`Frenkie de Jong`,pos:`MF`}],group:`F`,flag:`🇳🇱`},Japan:{coach:`Hajime Moriyasu`,system:`4-2-3-1`,info:`Hohe Laufbereitschaft, technisch brillante Flügel.`,squad:[{name:`Takefusa Kubo`,pos:`MF`},{name:`Kaoru Mitoma`,pos:`ANG`},{name:`Wataru Endo`,pos:`MF`}],group:`F`,flag:`🇯🇵`},Schweden:{coach:`Jon Dahl Tomasson`,system:`4-4-2`,info:`Kompakte Linien, Zielspieler im Sturmzentrum.`,squad:[{name:`Alexander Isak`,pos:`ANG`},{name:`Dejan Kulusevski`,pos:`ANG`},{name:`Viktor Gyökeres`,pos:`ANG`}],group:`F`,flag:`🇸🇪`},Tunesien:{coach:`Jalel Kadri`,system:`3-4-2-1`,info:`Defensiv stabil, schnelle Umschaltmomente.`,squad:[{name:`Ellyes Skhiri`,pos:`MF`},{name:`Aïssa Laïdouni`,pos:`MF`},{name:`Montassar Talbi`,pos:`ABW`}],group:`F`,flag:`🇹🇳`},Belgien:{coach:`Domenico Tedesco`,system:`4-2-3-1`,info:`Kombinationsstark, Fokus auf das zentrale offensive Mittelfeld.`,squad:[{name:`Kevin De Bruyne`,pos:`MF`},{name:`Jérémy Doku`,pos:`ANG`},{name:`Amadou Onana`,pos:`MF`}],group:`G`,flag:`🇧🇪`},Ägypten:{coach:`Hossam Hassan`,system:`4-3-3`,info:`Schnelles Umschaltspiel mit klarem Fokus auf die Rechtsaußen-Position.`,squad:[{name:`Mohamed Salah`,pos:`ANG`},{name:`Omar Marmoush`,pos:`ANG`},{name:`Mostafa Mohamed`,pos:`ANG`}],group:`G`,flag:`🇪🇬`},Iran:{coach:`Amir Ghalenoei`,system:`4-4-2`,info:`Leidenschaftliche Defensive, gefährliches Sturmduo.`,squad:[{name:`Mehdi Taremi`,pos:`ANG`},{name:`Sardar Azmoun`,pos:`ANG`},{name:`Alireza Jahanbakhsh`,pos:`MF`}],group:`G`,flag:`🇮🇷`},Neuseeland:{coach:`Darren Bazeley`,system:`4-3-3`,info:`Britisch geprägter Stil, Flanken auf physische Stürmer.`,squad:[{name:`Chris Wood`,pos:`ANG`},{name:`Liberato Cacace`,pos:`ABW`},{name:`Matthew Garbett`,pos:`MF`}],group:`G`,flag:`🇳🇿`},Spanien:{coach:`Luis de la Fuente`,system:`4-3-3`,info:`Ständiger Ballbesitz, hohes Kurzpassspiel, junge Flügelzange.`,squad:[{name:`Lamine Yamal`,pos:`ANG`},{name:`Rodri`,pos:`MF`},{name:`Pedri`,pos:`MF`}],group:`H`,flag:`🇪🇸`},"Kap Verde":{coach:`Bubista`,system:`4-3-3`,info:`Sehr spielfreudig, technisch starke Dribbler.`,squad:[{name:`Ryan Mendes`,pos:`ANG`},{name:`Jovane Cabral`,pos:`ANG`},{name:`Logan Costa`,pos:`ABW`}],group:`H`,flag:`🇨🇻`},"Saudi-Arabien":{coach:`Roberto Mancini`,system:`3-5-2`,info:`Taktisch diszipliniert, enge Räume im Zentrum.`,squad:[{name:`Salem Al-Dawsari`,pos:`MF`},{name:`Firas Al-Buraikan`,pos:`ANG`},{name:`Saud Abdulhamid`,pos:`ABW`}],group:`H`,flag:`🇸🇦`},Uruguay:{coach:`Marcelo Bielsa`,system:`4-2-3-1`,info:`Garra Charrúa: Extrem aggressives Pressing, hohe Intensität.`,squad:[{name:`Federico Valverde`,pos:`MF`},{name:`Darwin Núñez`,pos:`ANG`},{name:`Ronald Araújo`,pos:`ABW`}],group:`H`,flag:`🇺🇾`},Frankreich:{coach:`Didier Deschamps`,system:`4-2-3-1`,info:`Solide Absicherung, individuelle Weltklasse im Angriff.`,squad:[{name:`Kylian Mbappé`,pos:`ANG`},{name:`Antoine Griezmann`,pos:`MF`},{name:`William Saliba`,pos:`ABW`}],group:`I`,flag:`🇫🇷`},Senegal:{coach:`Aliou Cissé`,system:`4-3-3`,info:`Athletisch herausragend, schnelle Außenspieler.`,squad:[{name:`Sadio Mané`,pos:`ANG`},{name:`Ismaïla Sarr`,pos:`ANG`},{name:`Kalidou Koulibaly`,pos:`ABW`}],group:`I`,flag:`🇸🇳`},Irak:{coach:`Jesús Casas`,system:`4-2-3-1`,info:`Kompakte Staffelung, Konterangriffe.`,squad:[{name:`Aymen Hussein`,pos:`ANG`},{name:`Ali Jasim`,pos:`MF`},{name:`Zidane Iqbal`,pos:`MF`}],group:`I`,flag:`🇮🇶`},Norwegen:{coach:`Ståle Solbakken`,system:`4-3-3`,info:`Nordische Kompaktheit gepaart mit absoluten Superstars.`,squad:[{name:`Erling Haaland`,pos:`ANG`},{name:`Martin Ødegaard`,pos:`MF`},{name:`Alexander Sørloth`,pos:`ANG`}],group:`I`,flag:`🇳🇴`},Argentinien:{coach:`Lionel Scaloni`,system:`4-3-3`,info:`Agressives Gegenpressing, absolute Kontrolle im Mittelfeld.`,squad:[{name:`Lionel Messi`,pos:`ANG`},{name:`Julián Álvarez`,pos:`ANG`},{name:`Alexis Mac Allister`,pos:`MF`},{name:`Emiliano Martínez`,pos:`TW`}],group:`J`,flag:`🇦🇷`},Algerien:{coach:`Vladimir Petković`,system:`4-3-3`,info:`Technisch hochbegabt, Fokus auf Flügelspiel.`,squad:[{name:`Riyad Mahrez`,pos:`ANG`},{name:`Ismaël Bennacer`,pos:`MF`},{name:`Ramy Bensebaini`,pos:`ABW`}],group:`J`,flag:`🇩🇿`},Österreich:{coach:`Ralf Rangnick`,system:`4-2-3-1`,info:`Red-Bull-Schule: Aggressives Angriffspressing, hohes Tempo.`,squad:[{name:`Marcel Sabitzer`,pos:`MF`},{name:`Konrad Laimer`,pos:`MF`},{name:`Christoph Baumgartner`,pos:`MF`}],group:`J`,flag:`🇦🇹`},Jordanien:{coach:`Hussein Ammouta`,system:`3-4-2-1`,info:`Schnelles Umschaltspiel nach Ballgewinn tief in der eigenen Hälfte.`,squad:[{name:`Musa Al-Taamari`,pos:`ANG`},{name:`Yazan Al-Naimat`,pos:`ANG`}],group:`J`,flag:`🇯🇴`},Portugal:{coach:`Roberto Martínez`,system:`4-3-3`,info:`Enorme Kaderbreite, ballbesitzdominant, starke Flügel.`,squad:[{name:`Cristiano Ronaldo`,pos:`ANG`},{name:`Rafael Leão`,pos:`ANG`},{name:`Bruno Fernandes`,pos:`MF`},{name:`Rúben Dias`,pos:`ABW`}],group:`K`,flag:`🇵🇹`},"DR Kongo":{coach:`Sébastien Desabre`,system:`4-2-3-1`,info:`Körperlich robust, zielstrebiges Spiel in die Spitze.`,squad:[{name:`Chancel Mbemba`,pos:`ABW`},{name:`Yoane Wissa`,pos:`ANG`},{name:`Meschak Elia`,pos:`ANG`}],group:`K`,flag:`🇨🇩`},Usbekistan:{coach:`Srečko Katanec`,system:`3-4-3`,info:`Diszipliniert, defensiv sehr stabil.`,squad:[{name:`Eldor Shomurodov`,pos:`ANG`},{name:`Abbosbek Fayzullaev`,pos:`MF`},{name:`Jaloliddin Masharipov`,pos:`MF`}],group:`K`,flag:`🇺🇿`},Kolumbien:{coach:`Néstor Lorenzo`,system:`4-2-3-1`,info:`Technisch brillant, unberechenbar im letzten Drittel.`,squad:[{name:`Luis Díaz`,pos:`ANG`},{name:`James Rodríguez`,pos:`MF`},{name:`Jhon Arias`,pos:`MF`}],group:`K`,flag:`🇨🇴`},England:{coach:`Gareth Southgate`,system:`4-2-3-1`,info:`Sehr pragmatisch, hohe individuelle Qualität.`,squad:[{name:`Jude Bellingham`,pos:`MF`},{name:`Harry Kane`,pos:`ANG`},{name:`Phil Foden`,pos:`MF`},{name:`Declan Rice`,pos:`MF`}],group:`L`,flag:`🏴󠁧󠁢󠁥󠁮󠁧󠁿`},Kroatien:{coach:`Zlatko Dalić`,system:`4-3-3`,info:`Erfahrenes, extrem ballsicheres Mittelfeld.`,squad:[{name:`Luka Modrić`,pos:`MF`},{name:`Joško Gvardiol`,pos:`ABW`},{name:`Mateo Kovačić`,pos:`MF`}],group:`L`,flag:`🇭🇷`},Ghana:{coach:`Otto Addo`,system:`4-2-3-1`,info:`Dynamisch, starke Distanzschützen.`,squad:[{name:`Mohammed Kudus`,pos:`MF`},{name:`Thomas Partey`,pos:`MF`},{name:`Inaki Williams`,pos:`ANG`}],group:`L`,flag:`🇬🇭`},Panama:{coach:`Thomas Christiansen`,system:`5-4-1`,info:`Fokus auf Verteidigung und Standardsituationen.`,squad:[{name:`Adalberto Carrasquilla`,pos:`MF`},{name:`Michael Amir Murillo`,pos:`ABW`},{name:`José Fajardo`,pos:`ANG`}],group:`L`,flag:`🇵🇦`}},matches:JSON.parse(`[{"id":1,"g":"A","md":1,"date":"2026-06-11","time":"15:00","h":"Mexiko","a":"Südafrika","v":"MEX","hs":2,"as":0},{"id":2,"g":"A","md":1,"date":"2026-06-11","time":"21:00","h":"Südkorea","a":"Tschechien","v":"GDL","hs":2,"as":1},{"id":3,"g":"B","md":1,"date":"2026-06-12","time":"15:00","h":"Kanada","a":"Bosnien-Herzegowina","v":"TOR","hs":1,"as":1},{"id":4,"g":"D","md":1,"date":"2026-06-12","time":"21:00","h":"USA","a":"Paraguay","v":"LAX","hs":4,"as":1},{"id":5,"g":"B","md":1,"date":"2026-06-13","time":"15:00","h":"Katar","a":"Schweiz","v":"SFO","hs":1,"as":1},{"id":6,"g":"C","md":1,"date":"2026-06-13","time":"18:00","h":"Haiti","a":"Schottland","v":"BOS","hs":0,"as":1},{"id":7,"g":"C","md":1,"date":"2026-06-13","time":"21:00","h":"Brasilien","a":"Marokko","v":"NYC","hs":1,"as":1},{"id":8,"g":"D","md":1,"date":"2026-06-13","time":"22:00","h":"Australien","a":"Türkei","v":"VAN","hs":2,"as":0},{"id":9,"g":"E","md":1,"date":"2026-06-14","time":"12:00","h":"Deutschland","a":"Curaçao","v":"HOU","hs":7,"as":1},{"id":10,"g":"F","md":1,"date":"2026-06-14","time":"15:00","h":"Niederlande","a":"Japan","v":"DAL","hs":2,"as":2},{"id":11,"g":"E","md":1,"date":"2026-06-14","time":"18:00","h":"Elfenbeinküste","a":"Ecuador","v":"PHI","hs":1,"as":0},{"id":12,"g":"F","md":1,"date":"2026-06-14","time":"21:00","h":"Schweden","a":"Tunesien","v":"MTY","hs":5,"as":1},{"id":13,"g":"H","md":1,"date":"2026-06-15","time":"12:00","h":"Spanien","a":"Kap Verde","v":"ATL","hs":0,"as":0},{"id":14,"g":"G","md":1,"date":"2026-06-15","time":"15:00","h":"Belgien","a":"Ägypten","v":"MIA","hs":1,"as":1},{"id":15,"g":"H","md":1,"date":"2026-06-15","time":"18:00","h":"Saudi-Arabien","a":"Uruguay","v":"HOU","hs":1,"as":1},{"id":16,"g":"G","md":1,"date":"2026-06-15","time":"21:00","h":"Iran","a":"Neuseeland","v":"SEA","hs":2,"as":2},{"id":17,"g":"I","md":1,"date":"2026-06-16","time":"15:00","h":"Frankreich","a":"Senegal","v":"NYC","hs":2,"as":1},{"id":18,"g":"I","md":1,"date":"2026-06-16","time":"18:00","h":"Irak","a":"Norwegen","v":"PHI","hs":0,"as":2},{"id":19,"g":"J","md":1,"date":"2026-06-16","time":"21:00","h":"Argentinien","a":"Algerien","v":"DAL","hs":5,"as":0},{"id":20,"g":"J","md":1,"date":"2026-06-17","time":"00:00","h":"Österreich","a":"Jordanien","v":"LAX","hs":3,"as":1},{"id":21,"g":"K","md":1,"date":"2026-06-17","time":"13:00","h":"Portugal","a":"DR Kongo","v":"HOU","hs":3,"as":0},{"id":22,"g":"L","md":1,"date":"2026-06-17","time":"16:00","h":"England","a":"Kroatien","v":"DAL","hs":2,"as":1},{"id":23,"g":"L","md":1,"date":"2026-06-17","time":"19:00","h":"Ghana","a":"Panama","v":"ATL","hs":2,"as":0},{"id":24,"g":"K","md":1,"date":"2026-06-17","time":"22:00","h":"Usbekistan","a":"Kolumbien","v":"SFO","hs":0,"as":2},{"id":25,"g":"A","md":2,"date":"2026-06-18","time":"12:00","h":"Tschechien","a":"Südafrika","v":"ATL","hs":1,"as":1},{"id":26,"g":"B","md":2,"date":"2026-06-18","time":"15:00","h":"Schweiz","a":"Bosnien-Herzegowina","v":"LAX","hs":2,"as":1},{"id":27,"g":"B","md":2,"date":"2026-06-18","time":"18:00","h":"Kanada","a":"Katar","v":"VAN","hs":2,"as":0},{"id":28,"g":"A","md":2,"date":"2026-06-18","time":"21:00","h":"Mexiko","a":"Südkorea","v":"GDL","hs":2,"as":1},{"id":29,"g":"D","md":2,"date":"2026-06-19","time":"15:00","h":"USA","a":"Australien","v":"SEA","hs":2,"as":0},{"id":30,"g":"C","md":2,"date":"2026-06-19","time":"18:00","h":"Schottland","a":"Marokko","v":"BOS","hs":0,"as":2},{"id":31,"g":"C","md":2,"date":"2026-06-19","time":"20:30","h":"Brasilien","a":"Haiti","v":"PHI","hs":4,"as":0},{"id":32,"g":"D","md":2,"date":"2026-06-19","time":"23:00","h":"Türkei","a":"Paraguay","v":"SFO","hs":1,"as":2},{"id":33,"g":"F","md":2,"date":"2026-06-20","time":"13:00","h":"Niederlande","a":"Schweden","v":"HOU"},{"id":34,"g":"E","md":2,"date":"2026-06-20","time":"16:00","h":"Deutschland","a":"Elfenbeinküste","v":"TOR"},{"id":35,"g":"E","md":2,"date":"2026-06-20","time":"20:00","h":"Ecuador","a":"Curaçao","v":"KC"},{"id":36,"g":"F","md":2,"date":"2026-06-20","time":"23:00","h":"Tunesien","a":"Japan","v":"MTY"},{"id":37,"g":"H","md":2,"date":"2026-06-21","time":"12:00","h":"Spanien","a":"Saudi-Arabien","v":"ATL"},{"id":38,"g":"G","md":2,"date":"2026-06-21","time":"15:00","h":"Belgien","a":"Iran","v":"LAX"},{"id":39,"g":"H","md":2,"date":"2026-06-21","time":"18:00","h":"Uruguay","a":"Kap Verde","v":"MIA"},{"id":40,"g":"G","md":2,"date":"2026-06-21","time":"21:00","h":"Neuseeland","a":"Ägypten","v":"VAN"},{"id":41,"g":"J","md":2,"date":"2026-06-22","time":"13:00","h":"Argentinien","a":"Österreich","v":"DAL"},{"id":42,"g":"I","md":2,"date":"2026-06-22","time":"17:00","h":"Frankreich","a":"Irak","v":"PHI"},{"id":43,"g":"I","md":2,"date":"2026-06-22","time":"20:00","h":"Norwegen","a":"Senegal","v":"NYC"},{"id":44,"g":"J","md":2,"date":"2026-06-22","time":"23:00","h":"Jordanien","a":"Algerien","v":"SFO"},{"id":45,"g":"K","md":2,"date":"2026-06-23","time":"13:00","h":"Portugal","a":"Usbekistan","v":"HOU"},{"id":46,"g":"L","md":2,"date":"2026-06-23","time":"16:00","h":"England","a":"Ghana","v":"BOS"},{"id":47,"g":"L","md":2,"date":"2026-06-23","time":"19:00","h":"Panama","a":"Kroatien","v":"TOR"},{"id":48,"g":"K","md":2,"date":"2026-06-23","time":"22:00","h":"Kolumbien","a":"DR Kongo","v":"GDL"},{"id":49,"g":"A","md":3,"date":"2026-06-24","time":"12:00","h":"Tschechien","a":"Mexiko","v":"MEX"},{"id":50,"g":"A","md":3,"date":"2026-06-24","time":"12:00","h":"Südafrika","a":"Südkorea","v":"MTY"},{"id":51,"g":"B","md":3,"date":"2026-06-24","time":"18:00","h":"Schweiz","a":"Kanada","v":"VAN"},{"id":52,"g":"B","md":3,"date":"2026-06-24","time":"18:00","h":"Bosnien-Herzegowina","a":"Katar","v":"SEA"},{"id":53,"g":"C","md":3,"date":"2026-06-24","time":"21:00","h":"Marokko","a":"Haiti","v":"NYC"},{"id":54,"g":"C","md":3,"date":"2026-06-24","time":"21:00","h":"Schottland","a":"Brasilien","v":"BOS"},{"id":55,"g":"D","md":3,"date":"2026-06-25","time":"12:00","h":"Türkei","a":"USA","v":"LAX"},{"id":56,"g":"D","md":3,"date":"2026-06-25","time":"12:00","h":"Paraguay","a":"Australien","v":"SFO"},{"id":57,"g":"E","md":3,"date":"2026-06-25","time":"18:00","h":"Curaçao","a":"Elfenbeinküste","v":"PHI"},{"id":58,"g":"E","md":3,"date":"2026-06-25","time":"18:00","h":"Ecuador","a":"Deutschland","v":"NYC"},{"id":59,"g":"F","md":3,"date":"2026-06-25","time":"21:00","h":"Japan","a":"Schweden","v":"DAL"},{"id":60,"g":"F","md":3,"date":"2026-06-25","time":"21:00","h":"Tunesien","a":"Niederlande","v":"KC"},{"id":61,"g":"G","md":3,"date":"2026-06-26","time":"12:00","h":"Ägypten","a":"Iran","v":"SEA"},{"id":62,"g":"G","md":3,"date":"2026-06-26","time":"12:00","h":"Neuseeland","a":"Belgien","v":"VAN"},{"id":63,"g":"H","md":3,"date":"2026-06-26","time":"18:00","h":"Uruguay","a":"Spanien","v":"GDL"},{"id":64,"g":"H","md":3,"date":"2026-06-26","time":"18:00","h":"Kap Verde","a":"Saudi-Arabien","v":"HOU"},{"id":65,"g":"I","md":3,"date":"2026-06-26","time":"21:00","h":"Norwegen","a":"Frankreich","v":"BOS"},{"id":66,"g":"I","md":3,"date":"2026-06-26","time":"21:00","h":"Senegal","a":"Irak","v":"TOR"},{"id":67,"g":"J","md":3,"date":"2026-06-27","time":"12:00","h":"Jordanien","a":"Argentinien","v":"DAL"},{"id":68,"g":"J","md":3,"date":"2026-06-27","time":"12:00","h":"Algerien","a":"Österreich","v":"KC"},{"id":69,"g":"K","md":3,"date":"2026-06-27","time":"18:00","h":"DR Kongo","a":"Usbekistan","v":"ATL"},{"id":70,"g":"K","md":3,"date":"2026-06-27","time":"18:00","h":"Kolumbien","a":"Portugal","v":"MIA"},{"id":71,"g":"L","md":3,"date":"2026-06-27","time":"21:00","h":"England","a":"Panama","v":"NYC"},{"id":72,"g":"L","md":3,"date":"2026-06-27","time":"21:00","h":"Kroatien","a":"Ghana","v":"PHI"}]`),apiKey:``,init(){this.apiKey=localStorage.getItem(n.LS_KEY_API)||``;let e=localStorage.getItem(n.LS_KEY_MATCHES);if(e)try{let t=JSON.parse(e);this.matches.forEach(e=>{let n=t.find(t=>t.id===e.id);n&&n.hs!==void 0&&(e.hs=n.hs,e.as=n.as)})}catch(e){console.error(`Error loading saved matches`,e)}},setApiKey(e){this.apiKey=e,e?localStorage.setItem(n.LS_KEY_API,e):localStorage.removeItem(n.LS_KEY_API)},saveMatchResult(e,t,n){let r=this.matches.find(t=>t.id===e);r&&(r.hs=t,r.as=n,this.persistMatches())},persistMatches(){let e=this.matches.filter(e=>e.hs!==void 0).map(e=>({id:e.id,hs:e.hs,as:e.as}));localStorage.setItem(n.LS_KEY_MATCHES,JSON.stringify(e))},getMatch(e){return this.matches.find(t=>t.id===e)},isMatchPlayed(e){return e.hs!==void 0&&e.as!==void 0},getGroupStandings(e){let t=Object.keys(this.teams).filter(t=>this.teams[t].group===e).map(e=>({team:e,p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}));return this.matches.filter(t=>t.g===e&&this.isMatchPlayed(t)).forEach(e=>{let n=t.find(t=>t.team===e.h),r=t.find(t=>t.team===e.a);n&&r&&(n.p++,r.p++,n.gf+=e.hs,n.ga+=e.as,r.gf+=e.as,r.ga+=e.hs,n.gd=n.gf-n.ga,r.gd=r.gf-r.ga,e.hs>e.as?(n.w++,n.pts+=3,r.l++):e.hs<e.as?(r.w++,r.pts+=3,n.l++):(n.d++,r.d++,n.pts+=1,r.pts+=1))}),t.sort((e,t)=>t.pts===e.pts?t.gd===e.gd?t.gf-e.gf:t.gd-e.gd:t.pts-e.pts),t}},i={get matchSelect(){return document.getElementById(`match-select`)},get matchInfoCard(){return document.getElementById(`match-info-card`)},get matchTeams(){return document.getElementById(`match-teams`)},get matchGroupBadge(){return document.getElementById(`match-group-badge`)},get matchMdBadge(){return document.getElementById(`match-md-badge`)},get matchDate(){return document.getElementById(`match-date`)},get matchVenue(){return document.getElementById(`match-venue`)},get matchScore(){return document.getElementById(`match-score-display`)},get matchStatus(){return document.getElementById(`match-status-badge`)},get matchWeather(){return document.getElementById(`match-weather`)},get matchWeatherLoad(){return document.getElementById(`match-weather-loading`)},get customPrompt(){return document.getElementById(`custom-prompt`)},get startBtn(){return document.getElementById(`start-btn`)},get btnIconPlay(){return document.getElementById(`btn-icon-play`)},get btnSpinner(){return document.getElementById(`btn-spinner`)},get btnText(){return document.getElementById(`btn-text`)},get outputSection(){return document.getElementById(`output-section`)},get reportTitle(){return document.getElementById(`report-title`)},get reportMeta(){return document.getElementById(`report-meta`)},get reportContent(){return document.getElementById(`report-content`)},get loadingSection(){return document.getElementById(`loading-section`)},get errorSection(){return document.getElementById(`error-section`)},get errorMessage(){return document.getElementById(`error-message`)},get toastContainer(){return document.getElementById(`toast-container`)},get settingsBtn(){return document.getElementById(`settings-btn`)},get settingsModal(){return document.getElementById(`settings-modal`)},get settingsClose(){return document.getElementById(`settings-close`)},get apiKeyInput(){return document.getElementById(`api-key-input`)},get apiKeySave(){return document.getElementById(`api-key-save`)}};function a(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var o=a();function s(e){o=e}var c={exec:()=>null};function l(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function u(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(f.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var d=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),f={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:l(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:l(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:l(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:l(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:l(e=>RegExp(`^ {0,${e}}>`))},p=/^(?:[ \t]*(?:\n|$))+/,m=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,h=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,g=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,_=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,v=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,y=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,b=u(y).replace(/bull/g,v).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),ee=u(y).replace(/bull/g,v).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),x=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,te=/^[^\n]+/,S=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ne=u(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,S).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),re=u(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,v).getRegex(),C=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,w=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ie=u(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,w).replace(`tag`,C).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ae=u(x).replace(`hr`,g).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,C).getRegex(),T={blockquote:u(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,ae).getRegex(),code:m,def:ne,fences:h,heading:_,hr:g,html:ie,lheading:b,list:re,newline:p,paragraph:ae,table:c,text:te},oe=u(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,g).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,C).getRegex(),se={...T,lheading:ee,table:oe,paragraph:u(x).replace(`hr`,g).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,oe).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,C).getRegex()},ce={...T,html:u(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,w).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:c,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:u(x).replace(`hr`,g).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,b).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},le=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ue=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,de=/^( {2,}|\\)\n(?!\s*$)/,fe=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,E=/[\p{P}\p{S}]/u,D=/[\s\p{P}\p{S}]/u,O=/[^\s\p{P}\p{S}]/u,pe=u(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,D).getRegex(),me=/(?!~)[\p{P}\p{S}]/u,he=/(?!~)[\s\p{P}\p{S}]/u,ge=/(?:[^\s\p{P}\p{S}]|~)/u,_e=u(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,d?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),ve=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ye=u(ve,`u`).replace(/punct/g,E).getRegex(),be=u(ve,`u`).replace(/punct/g,me).getRegex(),xe=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Se=u(xe,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),Ce=u(xe,`gu`).replace(/notPunctSpace/g,ge).replace(/punctSpace/g,he).replace(/punct/g,me).getRegex(),we=u(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),Te=u(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,E).getRegex(),Ee=u(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),De=u(/\\(punct)/,`gu`).replace(/punct/g,E).getRegex(),Oe=u(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ke=u(w).replace(`(?:-->|$)`,`-->`).getRegex(),Ae=u(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,ke).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),k=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,je=u(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,k).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Me=u(/^!?\[(label)\]\[(ref)\]/).replace(`label`,k).replace(`ref`,S).getRegex(),Ne=u(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,S).getRegex(),Pe=u(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Me).replace(`nolink`,Ne).getRegex(),Fe=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,A={_backpedal:c,anyPunctuation:De,autolink:Oe,blockSkip:_e,br:de,code:ue,del:c,delLDelim:c,delRDelim:c,emStrongLDelim:ye,emStrongRDelimAst:Se,emStrongRDelimUnd:we,escape:le,link:je,nolink:Ne,punctuation:pe,reflink:Me,reflinkSearch:Pe,tag:Ae,text:fe,url:c},Ie={...A,link:u(/^!?\[(label)\]\((.*?)\)/).replace(`label`,k).getRegex(),reflink:u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,k).getRegex()},j={...A,emStrongRDelimAst:Ce,emStrongLDelim:be,delLDelim:Te,delRDelim:Ee,url:u(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Fe).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:u(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Fe).getRegex()},Le={...j,br:u(de).replace(`{2,}`,`*`).getRegex(),text:u(j.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},M={normal:T,gfm:se,pedantic:ce},N={normal:A,gfm:j,breaks:Le,pedantic:Ie},Re={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},ze=e=>Re[e];function P(e,t){if(t){if(f.escapeTest.test(e))return e.replace(f.escapeReplace,ze)}else if(f.escapeTestNoEncode.test(e))return e.replace(f.escapeReplaceNoEncode,ze);return e}function Be(e){try{e=encodeURI(e).replace(f.percentDecode,`%`)}catch{return null}return e}function Ve(e,t){let n=e.replace(f.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(f.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(f.slashPipe,`|`);return n}function F(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function He(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&f.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Ue(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function We(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Ge(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Ke(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var I=class{options;rules;lexer;constructor(e){this.options=e||o}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:He(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ke(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=F(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:F(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:F(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=F(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=We(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=He(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:F(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Ve(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:F(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Ve(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:F(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=F(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Ue(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Ge(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Ge(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},L=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||o,this.options.tokenizer=this.options.tokenizer||new I,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:f,block:M.normal,inline:N.normal};this.options.pedantic?(t.block=M.pedantic,t.inline=N.pedantic):this.options.gfm&&(t.block=M.gfm,this.options.breaks?t.inline=N.breaks:t.inline=N.gfm),this.tokenizer.rules=t}static get rules(){return{block:M,inline:N}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(f.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(f.tabCharGlobal,`    `).replace(f.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},R=class{options;parser;constructor(e){this.options=e||o}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(f.notSpaceStart)?.[0],i=e.replace(f.endingNewline,``)+`
`;return r?`<pre><code class="language-`+P(r)+`">`+(n?i:P(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:P(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${P(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Be(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+P(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Be(e);if(i===null)return P(n);e=i;let a=`<img src="${e}" alt="${P(n)}"`;return t&&(a+=` title="${P(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:P(e.text)}},z=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},B=class e{options;renderer;textRenderer;constructor(e){this.options=e||o,this.options.renderer=this.options.renderer||new R,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new z}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},V=class{options;block;constructor(e){this.options=e||o}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?L.lex:L.lexInline}provideParser(e=this.block){return e?B.parse:B.parseInline}},H=new class{defaults=a();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=B;Renderer=R;TextRenderer=z;Lexer=L;Tokenizer=I;Hooks=V;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new R(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new I(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new V;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];V.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&V.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return L.lex(e,t??this.defaults)}parser(e,t){return B.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?L.lex:L.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?B.parse:B.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?L.lex:L.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?B.parse:B.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+P(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function U(e,t){return H.parse(e,t)}U.options=U.setOptions=function(e){return H.setOptions(e),U.defaults=H.defaults,s(U.defaults),U},U.getDefaults=a,U.defaults=o,U.use=function(...e){return H.use(...e),U.defaults=H.defaults,s(U.defaults),U},U.walkTokens=function(e,t){return H.walkTokens(e,t)},U.parseInline=H.parseInline,U.Parser=B,U.parser=B.parse,U.Renderer=R,U.TextRenderer=z,U.Lexer=L,U.lexer=L.lex,U.Tokenizer=I,U.Hooks=V,U.parse=U,U.options,U.setOptions,U.use,U.walkTokens,U.parseInline,B.parse,L.lex;var qe=t({showToast:()=>W});function W(e,t=`error`){let n={error:`bg-red-500/90 border-red-400/30`,success:`bg-emerald-500/90 border-emerald-400/30`,info:`bg-sky-500/90 border-sky-400/30`},r=document.createElement(`div`);r.className=`pointer-events-auto px-5 py-3 rounded-xl border ${n[t]||n.info} text-white text-sm font-medium shadow-2xl backdrop-blur-sm toast-enter`,r.textContent=e,i.toastContainer.appendChild(r),setTimeout(()=>{r.style.transition=`opacity 0.3s, transform 0.3s`,r.style.opacity=`0`,r.style.transform=`translateY(-10px)`,setTimeout(()=>r.remove(),300)},4e3)}var Je={},G=null;function K(e,t){Je[e]=t}function q(e){window.location.hash=e}function Ye(e=`#/simulator`){let t=()=>{let t=window.location.hash||e,n=t.split(`/`).slice(0,2).join(`/`),r=t.split(`/`).slice(2).join(`/`)||null,i=Je[n];i?(G&&G.destroy&&G.destroy(),G=i(r),Xe(n)):window.location.hash=e};window.addEventListener(`hashchange`,t),window.location.hash||(window.location.hash=e),t()}function Xe(e){document.querySelectorAll(`[data-tab]`).forEach(t=>{let n=t.dataset.tab===e;t.classList.toggle(`tab-active`,n),t.classList.toggle(`text-white`,n),t.classList.toggle(`text-txt-dim`,!n)})}async function Ze(e,t,n,r){let i=r[e];if(!i)return null;try{let e=new Date(`${t}T${n}:00`),r=e.getHours(),a=(e-new Date)/(1e3*60*60*24),o=``;o=a<-5?`https://archive-api.open-meteo.com/v1/archive?latitude=${i.lat}&longitude=${i.lon}&start_date=${t}&end_date=${t}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=${i.tz}`:`https://api.open-meteo.com/v1/forecast?latitude=${i.lat}&longitude=${i.lon}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=${i.tz}`;let s=await fetch(o);if(!s.ok)return null;let c=await s.json(),l=0;if(c.hourly&&c.hourly.time){let e=`${t}T${String(r).padStart(2,`0`)}:00`;l=c.hourly.time.findIndex(t=>t.startsWith(e)),l===-1&&(l=12)}let u=c.hourly.weather_code[l],d=`🌤️`,f=`Heiter`;return u===0?(d=`☀️`,f=`Klar`):u<=3?(d=`🌤️`,f=`Leicht bewölkt`):u<=49?(d=`🌫️`,f=`Nebel`):u<=69?(d=`🌧️`,f=`Regen`):u<=79?(d=`❄️`,f=`Schnee`):(d=`⛈️`,f=`Gewitter`),{temp:Math.round(c.hourly.temperature_2m[l]),humidity:Math.round(c.hourly.relative_humidity_2m[l]),wind:Math.round(c.hourly.wind_speed_10m[l]),emoji:d,text:f}}catch(e){return console.error(`Weather fetch error:`,e),null}}async function Qe(e,t){if(!t)throw Error(`Kein API-Key hinterlegt. Bitte in den Einstellungen eintragen.`);let r=`https://generativelanguage.googleapis.com/v1beta/models/${n.GEMINI_MODEL}:generateContent?key=${t}`,i=await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({contents:[{parts:[{text:e}]}],generationConfig:{temperature:.9,topP:.95,topK:40,maxOutputTokens:8192}})});if(!i.ok){let e=(await i.json().catch(()=>({})))?.error?.message||`HTTP ${i.status}`;throw i.status===401||i.status===403?Error(`Ungültiger API-Key.`):i.status===429?Error(`Rate-Limit erreicht. Bitte kurz warten.`):Error(`API-Fehler: ${e}`)}let a=await i.json(),o=a?.candidates?.[0]?.content?.parts?.[0]?.text;if(!o)throw a?.candidates?.[0]?.finishReason===`SAFETY`?Error(`Antwort aus Sicherheitsgründen blockiert.`):Error(`Keine Antwort von der API erhalten.`);return o}var J=null,Y=null;function X(e,t){let[n,r,i]=e.split(`-`).map(Number),[a,o]=t.split(`:`).map(Number);return`${[`So`,`Mo`,`Di`,`Mi`,`Do`,`Fr`,`Sa`][new Date(n,r-1,i).getDay()]}, ${i}. ${[`Jan`,`Feb`,`Mär`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Okt`,`Nov`,`Dez`][r-1]} ${n} · ${String(a).padStart(2,`0`)}:${String(o).padStart(2,`0`)} ET`}function $e(e){let t=r.getGroupStandings(e),n=`Gruppe ${e}:\n`;return n+=`Platz | Team              | Sp | S | U | N | Tore  | TD  | Pkt
`,n+=`------|-------------------|----|----|----|----|-------|-----|----
`,t.forEach((e,t)=>{n+=`${t+1}.    | ${e.team.padEnd(17)} | ${e.p}  | ${e.w}  | ${e.d}  | ${e.l}  | ${e.gf}:${e.ga}   | ${e.gd>=0?`+`:``}${e.gd}  | ${e.pts}\n`}),n}function et(e){return r.matches.filter(t=>(t.h===e||t.a===e)&&r.isMatchPlayed(t)).map(t=>{let n=t.h===e,r=n?t.a:t.h,i=n?`${t.hs}:${t.as}`:`${t.as}:${t.hs}`;return`${(n?t.hs>t.as:t.as>t.hs)?`S`:t.hs===t.as?`U`:`N`} ${i} vs. ${r} (Spieltag ${t.md})`}).join(`
`)}function tt(e,t){let n=r.getGroupStandings(t).find(t=>t.team===e);if(!n||n.p<2)return``;if(n.p===2){if(n.pts<=1)return`⚠️ **Sondersituation:** ${e} steht massiv unter Druck (nur ${n.pts} Punkte) und MUSS zwingend auf Sieg spielen.`;if(n.pts===6)return`🛡️ **Sondersituation:** ${e} ist bereits qualifiziert. Der Trainer wird rotieren.`;if(n.pts>=3&&n.pts<=4)return`⚖️ **Sondersituation:** ${e} reicht unter Umständen ein Unentschieden.`}return``}function nt(e,t,n){let i=r.venues[e.v],a=$e(e.g),o=et(e.h),s=et(e.a),c=r.isMatchPlayed(e),l=t?`${t.emoji} ${t.text}, ${t.temp}°C, Wind: ${t.wind} km/h, Luftfeuchtigkeit: ${t.humidity}%`:`Keine Wetterdaten verfügbar`,u=r.teams[e.h]?.flag||``,d=r.teams[e.a]?.flag||``;if(c){let t=`Du bist ein erstklassiger Sportjournalist. Erstelle einen detaillierten, packenden Spielbericht für folgendes WM 2026 Gruppenspiel.

**Partie:** ${u} ${e.h} ${e.hs} : ${e.as} ${e.a} ${d}
**Gruppe:** ${e.g} · Spieltag ${e.md}
**Datum:** ${X(e.date,e.time)}
**Stadion:** ${i.name}, ${i.city}
**Wetterbedingungen:** ${l}

**Aktuelle Gruppentabelle:**
${a}

**Bisherige Turnierergebnisse ${e.h}:**
${o||`Erstes Spiel im Turnier`}

**Bisherige Turnierergebnisse ${e.a}:**
${s||`Erstes Spiel im Turnier`}

Erstelle einen realistischen, spannenden Spielbericht mit:
- **Spielverlauf** mit konkreten Torschützen (reale Spieler!) und Spielminuten, passend zum Endergebnis ${e.hs}:${e.as}
- **Taktische Analyse** beider Teams
- **Schlüsselszenen** und Wendepunkte
- **Spieler des Spiels** mit Begründung
- **Einfluss der Wetterbedingungen**
- **Stimmung im Stadion**
- **Auswirkung auf die Gruppentabelle**
- **Fazit und Ausblick**

Formatiere den Bericht mit Markdown. Verwende reale, aktuelle Spieler. Sei detailliert und emotional.`;return n&&(t+=`\n\n**Zusätzliche Anweisungen:** ${n}`),t}else{let t=r.teams[e.h],i=r.teams[e.a],o=tt(e.h,e.g),s=tt(e.a,e.g),c=`Du bist ein erstklassiger Fußball-Analyst. Erstelle eine detaillierte Spielprognose für folgendes WM-Spiel.

**Partie:** ${u} ${e.h} vs. ${e.a} ${d}
**Datum:** ${X(e.date,e.time)}

**Team-Insights ${e.h}:**
- Trainer: ${t.coach} | System: ${t.system}
- Spielweise: ${t.info}
- Schlüsselspieler: ${t.squad.map(e=>e.name).join(`, `)}
${o}

**Team-Insights ${e.a}:**
- Trainer: ${i.coach} | System: ${i.system}
- Spielweise: ${i.info}
- Schlüsselspieler: ${i.squad.map(e=>e.name).join(`, `)}
${s}

**Aktuelle Gruppentabelle:**
${a}

Analysiere umfassend:
1. **Ausgangslage & Motivation**
2. **Kader & Verletzungen**
3. **Erwartete Aufstellungen** mit realen Spielern
4. **Taktik-Analyse**
5. **Schlüsselduelle**
6. **Wettquoten & Favoritenrolle**
7. **Wetter-Einfluss** — ${l}
8. **Historische Bilanz**
9. **Prognose** mit Ergebnis-Tipp
10. **Fazit**

Formatiere alles mit Markdown. Verwende reale Spieler. Sei fundiert.`;return n&&(c+=`\n\n**Zusätzliche Anweisungen:** ${n}`),c}}function rt(){Y=document.getElementById(`app-content`),Y.innerHTML=`
    <!-- Hero -->
    <section class="text-center mb-10 sm:mb-12">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-semibold tracking-wide uppercase mb-5">
        <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        FIFA World Cup 2026 · USA · Mexiko · Kanada
      </div>
      <h2 class="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-3 leading-tight">
        KI-Analyse für<br/><span class="text-accent">jedes WM-Spiel</span>
      </h2>
      <p class="text-txt-dim text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
        Wähle eine Partie — die KI analysiert Kader, Taktik, Wetter und Gruppenstand für eine fundierte Prognose oder einen packenden Spielbericht.
      </p>
    </section>

    <!-- Config Card -->
    <section class="card p-5 sm:p-7 mb-8">
      <div class="mb-5">
        <label for="sim-match-select" class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-txt-dim mb-2.5">
          <svg class="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Spiel auswählen
        </label>
        <select id="sim-match-select" class="w-full bg-[#0a0f1a] border border-border rounded-lg px-4 py-3 text-[15px] text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-colors cursor-pointer hover:border-border-light"></select>
      </div>

      <div id="sim-match-info" class="hidden card-slide bg-bg rounded-xl border border-border p-5 sm:p-6 mb-5">
        <div id="sim-match-teams" class="flex flex-wrap items-center justify-center gap-2 text-center mb-4"></div>
        <div class="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span id="sim-status-badge" class="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wide"></span>
          <span id="sim-group-badge" class="px-2.5 py-0.5 rounded-md bg-gold/10 text-gold text-[11px] font-bold uppercase tracking-wide border border-gold/20"></span>
          <span id="sim-md-badge" class="px-2.5 py-0.5 rounded-md bg-sky/10 text-sky text-[11px] font-bold uppercase tracking-wide border border-sky/20"></span>
        </div>
        <div id="sim-score-display" class="hidden text-center mb-4"></div>

        <!-- Score Input -->
        <div id="sim-score-input" class="hidden mb-4">
          <div class="flex items-center justify-center gap-3">
            <input type="number" id="sim-home-score" min="0" max="20" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
            <span class="text-xl font-bold text-txt-muted">:</span>
            <input type="number" id="sim-away-score" min="0" max="20" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
          </div>
          <div class="flex justify-center gap-2 mt-3">
            <button id="sim-save-result" class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg transition-colors">Ergebnis eintragen</button>
            <button id="sim-edit-result" class="hidden px-5 py-2 bg-sky/20 hover:bg-sky/30 text-sky text-sm font-bold rounded-lg transition-colors border border-sky/20">Bearbeiten</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm mb-3">
          <div class="flex items-center gap-3 bg-bg-card rounded-lg px-4 py-2.5 border border-border">
            <svg class="w-4 h-4 text-txt-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span id="sim-date" class="text-txt"></span>
          </div>
          <div class="flex items-center gap-3 bg-bg-card rounded-lg px-4 py-2.5 border border-border">
            <svg class="w-4 h-4 text-txt-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span id="sim-venue" class="text-txt"></span>
          </div>
        </div>
        <div id="sim-weather-loading" class="hidden flex items-center gap-3 bg-bg-card rounded-lg px-4 py-2.5 border border-border">
          <div class="w-4 h-4 rounded-full spinner-ring animate-spin shrink-0"></div>
          <span class="text-sm text-txt-dim">Wetterdaten werden geladen…</span>
        </div>
        <div id="sim-weather" class="hidden flex items-center gap-3 bg-sky/[0.06] rounded-lg px-4 py-2.5 border border-sky/15"></div>
      </div>

      <div class="mb-5">
        <label for="sim-custom-prompt" class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-txt-dim mb-2.5">
          <svg class="w-3.5 h-3.5 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          Zusätzliche Anweisungen <span class="text-txt-muted normal-case tracking-normal font-normal">(optional)</span>
        </label>
        <textarea id="sim-custom-prompt" rows="2" placeholder="z.B. 'Aus Sicht eines TV-Kommentators' oder 'Fokus auf taktische Analyse'…" class="w-full bg-[#0a0f1a] border border-border rounded-lg px-4 py-2.5 text-sm text-txt placeholder:text-txt-muted focus:outline-none focus:border-sky/50 focus:ring-1 focus:ring-sky/20 transition-colors resize-none"></textarea>
      </div>

      <button id="sim-start-btn" class="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-display font-bold text-base rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-bg">
        <svg id="sim-btn-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <div id="sim-btn-spinner" class="w-5 h-5 rounded-full spinner-ring animate-spin hidden"></div>
        <span id="sim-btn-text">Spielprognose generieren</span>
      </button>
    </section>

    <!-- Output -->
    <section id="sim-output" class="hidden report-enter">
      <div class="card p-5 sm:p-6 mb-3 border-t-2 border-accent/40">
        <h3 id="sim-report-title" class="font-display text-xl sm:text-2xl font-bold text-white"></h3>
        <p id="sim-report-meta" class="text-xs text-txt-dim mt-1"></p>
      </div>
      <div class="card p-5 sm:p-8">
        <div id="sim-report-content" class="max-w-none"></div>
      </div>
    </section>

    <!-- Loading -->
    <section id="sim-loading" class="hidden">
      <div class="card p-8 sm:p-12 text-center">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
          <div class="w-8 h-8 rounded-full spinner-ring animate-spin"></div>
        </div>
        <h3 class="font-display text-lg font-bold text-white mb-1.5">KI analysiert das Spiel…</h3>
        <p class="text-sm text-txt-dim mb-1">Kader, Taktik, Wettquoten und Gruppenstand werden ausgewertet.</p>
        <p class="text-xs text-txt-muted">Dauert ca. 10–20 Sekunden.</p>
        <div class="mt-5 h-1 w-44 mx-auto rounded-full overflow-hidden"><div class="h-full w-full shimmer-bar rounded-full"></div></div>
      </div>
    </section>

    <!-- Error -->
    <section id="sim-error" class="hidden">
      <div class="card p-5 sm:p-7 border-accent/30">
        <div class="flex items-start gap-3">
          <div class="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
          </div>
          <div>
            <h3 class="font-display text-base font-bold text-accent mb-0.5">Fehler</h3>
            <p id="sim-error-msg" class="text-sm text-txt"></p>
          </div>
        </div>
      </div>
    </section>
  `,Z(),it();let e=new Date().toISOString().slice(0,10),t=r.matches.find(t=>t.date===e),n=r.matches.find(e=>!r.isMatchPlayed(e)),i=t||n||r.matches[0],a=document.getElementById(`sim-match-select`);return a.value=i.id,Q(i),{destroy(){Y.innerHTML=``}}}function Z(){let e=document.getElementById(`sim-match-select`),t={1:`Spieltag 1 · 11.–17. Juni`,2:`Spieltag 2 · 18.–23. Juni`,3:`Spieltag 3 · 24.–27. Juni`};[1,2,3].forEach(n=>{let i=document.createElement(`optgroup`);i.label=t[n],r.matches.filter(e=>e.md===n).sort((e,t)=>e.date.localeCompare(t.date)||e.time.localeCompare(t.time)).forEach(e=>{let t=document.createElement(`option`);t.value=e.id;let n=r.teams[e.h]?.flag||``,a=r.teams[e.a]?.flag||``,o=r.isMatchPlayed(e),s=o?` [${e.hs}:${e.as}]`:``;t.textContent=`${e.date.slice(5).replace(`-`,`.`)} | ${n} ${e.h} vs ${e.a} ${a}${s}`,o&&(t.className=`text-slate-400`),i.appendChild(t)}),e.appendChild(i)})}function it(){document.getElementById(`sim-match-select`).addEventListener(`change`,e=>{Q(r.getMatch(parseInt(e.target.value,10)))}),document.getElementById(`sim-start-btn`).addEventListener(`click`,at),document.getElementById(`sim-save-result`).addEventListener(`click`,()=>{let e=parseInt(document.getElementById(`sim-match-select`).value,10),t=parseInt(document.getElementById(`sim-home-score`).value,10),n=parseInt(document.getElementById(`sim-away-score`).value,10);if(isNaN(t)||isNaN(n)||t<0||n<0){W(`Bitte gültige Ergebnisse eingeben (≥ 0).`,`error`);return}r.saveMatchResult(e,t,n),W(`Ergebnis eingetragen!`,`success`);let i=document.getElementById(`sim-match-select`);i.innerHTML=``,Z(),i.value=e,Q(r.getMatch(e))}),document.getElementById(`sim-edit-result`).addEventListener(`click`,()=>{let e=parseInt(document.getElementById(`sim-match-select`).value,10),t=r.getMatch(e);if(!t)return;t.hs=void 0,t.as=void 0,r.persistMatches();let n=document.getElementById(`sim-match-select`);n.innerHTML=``,Z(),n.value=e,Q(t),W(`Ergebnis zurückgesetzt. Du kannst ein neues eingeben.`,`info`)})}async function Q(e){let t=document.getElementById(`sim-match-info`);if(!e){t.classList.add(`hidden`);return}let n=r.venues[e.v],i=r.isMatchPlayed(e),a=r.teams[e.h]?.flag||``,o=r.teams[e.a]?.flag||``;document.getElementById(`sim-match-teams`).innerHTML=`
    <span class="text-2xl sm:text-3xl font-display font-black text-white">${a} ${e.h}</span>
    <span class="text-lg sm:text-xl font-bold text-txt-muted mx-3">vs</span>
    <span class="text-2xl sm:text-3xl font-display font-black text-white">${e.a} ${o}</span>
  `,document.getElementById(`sim-group-badge`).textContent=`Gruppe ${e.g}`,document.getElementById(`sim-md-badge`).textContent=`Spieltag ${e.md}`,document.getElementById(`sim-date`).textContent=X(e.date,e.time),document.getElementById(`sim-venue`).textContent=`${n.name}, ${n.city} ${n.country}`;let s=document.getElementById(`sim-score-display`),c=document.getElementById(`sim-score-input`),l=document.getElementById(`sim-status-badge`),u=document.getElementById(`sim-btn-text`),d=document.getElementById(`sim-edit-result`),f=document.getElementById(`sim-save-result`);if(i)s.innerHTML=`<span class="text-4xl font-display font-black text-white">${e.hs} : ${e.as}</span>`,s.classList.remove(`hidden`),c.classList.remove(`hidden`),document.getElementById(`sim-home-score`).value=e.hs,document.getElementById(`sim-away-score`).value=e.as,f.classList.add(`hidden`),d.classList.remove(`hidden`),l.textContent=`Gespielt`,l.className=`px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-bold uppercase tracking-wide border border-emerald-500/20`,u.textContent=`Spielbericht generieren`;else{s.innerHTML=``,s.classList.add(`hidden`),c.classList.remove(`hidden`),document.getElementById(`sim-home-score`).value=``,document.getElementById(`sim-away-score`).value=``,f.classList.remove(`hidden`),d.classList.add(`hidden`);let t=new Date().toISOString().slice(0,10);e.date===t?(l.textContent=`Heute`,l.className=`px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 text-[11px] font-bold uppercase tracking-wide border border-amber-500/20 animate-pulse`):(l.textContent=`Anstehend`,l.className=`px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky text-[11px] font-bold uppercase tracking-wide border border-sky/20`),u.textContent=`Spielprognose generieren`}t.classList.remove(`hidden`);let p=document.getElementById(`sim-weather`),m=document.getElementById(`sim-weather-loading`);p.classList.add(`hidden`),m.classList.remove(`hidden`),J=await Ze(e.v,e.date,e.time,r.venues),m.classList.add(`hidden`),J?(p.innerHTML=`
      <span class="text-2xl">${J.emoji}</span>
      <div>
        <div class="text-sm font-semibold text-white">${J.temp}°C · ${J.text}</div>
        <div class="text-xs text-txt-muted">Wind: ${J.wind} km/h · Luftfeuchtigkeit: ${J.humidity}%</div>
      </div>`,p.classList.remove(`hidden`)):(p.innerHTML=`<span class="text-2xl">❓</span><div class="text-sm text-txt-muted">Wetterdaten nicht verfügbar</div>`,p.classList.remove(`hidden`))}async function at(){let e=document.getElementById(`settings-modal`);if(!r.apiKey){W(`Bitte hinterlege zuerst deinen Gemini API-Key in den Einstellungen.`,`error`),e.classList.remove(`hidden`);return}let t=parseInt(document.getElementById(`sim-match-select`).value,10),n=r.getMatch(t);if(!n){W(`Bitte wähle ein Spiel aus.`,`error`);return}let i=document.getElementById(`sim-custom-prompt`).value.trim(),a=nt(n,J,i||null),o=document.getElementById(`sim-start-btn`),s=document.getElementById(`sim-btn-icon`),c=document.getElementById(`sim-btn-spinner`),l=document.getElementById(`sim-btn-text`),u=document.getElementById(`sim-loading`),d=document.getElementById(`sim-output`),f=document.getElementById(`sim-error`);o.disabled=!0,s.classList.add(`hidden`),c.classList.remove(`hidden`),l.textContent=`Generiere...`,u.classList.remove(`hidden`),d.classList.add(`hidden`),f.classList.add(`hidden`);try{let e=await Qe(a,r.apiKey),t=r.isMatchPlayed(n),i=r.teams[n.h]?.flag||``,o=r.teams[n.a]?.flag||``,s=r.venues[n.v];document.getElementById(`sim-report-title`).textContent=`${i} ${n.h} vs. ${n.a} ${o}`,document.getElementById(`sim-report-meta`).textContent=`Gruppe ${n.g} · Spieltag ${n.md} · ${s.name}, ${s.city} · ${t?`Spielbericht`:`Spielprognose`}`,document.getElementById(`sim-report-content`).innerHTML=U.parse(e),f.classList.add(`hidden`),u.classList.add(`hidden`),d.classList.remove(`hidden`),d.scrollIntoView({behavior:`smooth`,block:`start`}),W(t?`Spielbericht generiert!`:`Spielprognose generiert!`,`success`)}catch(e){console.error(`Simulation error:`,e),document.getElementById(`sim-error-msg`).textContent=e.message,f.classList.remove(`hidden`),d.classList.add(`hidden`),u.classList.add(`hidden`),W(e.message,`error`)}finally{o.disabled=!1,s.classList.remove(`hidden`),c.classList.add(`hidden`);let e=r.getMatch(t);l.textContent=r.isMatchPlayed(e)?`Spielbericht generieren`:`Spielprognose generieren`}}var ot=`modulepreload`,st=function(e){return`/`+e},ct={},lt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=st(t,n),t=s(t),t in ct)return;ct[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:ot,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ut=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`];function dt(e){let t=document.getElementById(`app-content`),n=e&&e.startsWith(`scenario/`)?e.split(`/`)[1]:null;t.innerHTML=`
    <section class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">Gruppentabellen</h2>
      <p class="text-txt-dim text-sm">Alle 12 WM-Gruppen auf einen Blick. Qualifizierte Teams sind markiert.</p>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" id="groups-grid"></div>

    <!-- Scenario Modal -->
    <div id="scenario-modal" class="${n?``:`hidden`} fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div class="bg-bg-card border border-border rounded-xl p-6 w-full max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto" id="scenario-content"></div>
    </div>
  `;let i=document.getElementById(`groups-grid`);return ut.forEach(e=>{let t=r.getGroupStandings(e),n=r.matches.filter(t=>t.g===e).length,a=r.matches.filter(t=>t.g===e&&r.isMatchPlayed(t)).length,o=document.createElement(`div`);o.className=`card p-4 card-slide`,o.innerHTML=`
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-display text-base font-bold text-white">Gruppe ${e}</h3>
        <div class="flex items-center gap-2">
          <span class="text-[10px] text-txt-muted">${a}/${n} Spiele</span>
          <button data-scenario="${e}" class="text-[10px] px-2 py-0.5 rounded bg-sky/10 text-sky border border-sky/20 hover:bg-sky/20 transition-colors font-semibold">Was wäre wenn?</button>
        </div>
      </div>
      <table class="w-full text-[13px]">
        <thead>
          <tr class="text-txt-muted text-[10px] uppercase tracking-wider">
            <th class="text-left pb-2 pl-1">#</th>
            <th class="text-left pb-2">Team</th>
            <th class="text-center pb-2 w-8">Sp</th>
            <th class="text-center pb-2 w-8">S</th>
            <th class="text-center pb-2 w-8">U</th>
            <th class="text-center pb-2 w-8">N</th>
            <th class="text-center pb-2 w-12">Tore</th>
            <th class="text-center pb-2 w-8">TD</th>
            <th class="text-center pb-2 w-8 font-bold text-gold">Pkt</th>
          </tr>
        </thead>
        <tbody>
          ${t.map((e,t)=>{let n=r.teams[e.team]?.flag||``,i=t+1,a=``;return i<=2?a=`border-l-2 border-emerald-500/60`:i===3&&(a=`border-l-2 border-gold/40`),`
              <tr class="${a} hover:bg-white/[0.02] cursor-pointer group" data-team="${e.team}">
                <td class="py-1.5 pl-1 text-txt-muted text-xs">${i}</td>
                <td class="py-1.5">
                  <span class="font-medium text-white group-hover:text-accent transition-colors">${n} ${e.team}</span>
                </td>
                <td class="py-1.5 text-center text-txt-dim">${e.p}</td>
                <td class="py-1.5 text-center text-txt-dim">${e.w}</td>
                <td class="py-1.5 text-center text-txt-dim">${e.d}</td>
                <td class="py-1.5 text-center text-txt-dim">${e.l}</td>
                <td class="py-1.5 text-center text-txt-dim">${e.gf}:${e.ga}</td>
                <td class="py-1.5 text-center ${e.gd>0?`text-emerald-400`:e.gd<0?`text-accent`:`text-txt-dim`}">${e.gd>0?`+`:``}${e.gd}</td>
                <td class="py-1.5 text-center font-bold text-gold">${e.pts}</td>
              </tr>`}).join(``)}
        </tbody>
      </table>
      <div class="mt-2 flex gap-3 text-[9px] text-txt-muted">
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-emerald-500/60"></span>Qualifiziert (Platz 1–2)</span>
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-gold/40"></span>Chance als Dritter</span>
      </div>
    `,i.appendChild(o)}),i.addEventListener(`click`,e=>{let t=e.target.closest(`[data-team]`);t&&q(`#/teams/${encodeURIComponent(t.dataset.team)}`)}),i.addEventListener(`click`,e=>{let t=e.target.closest(`[data-scenario]`);t&&(e.stopPropagation(),ft(t.dataset.scenario))}),n&&ft(n),{destroy(){t.innerHTML=``}}}function ft(e){let t=document.getElementById(`scenario-modal`),n=document.getElementById(`scenario-content`);t.classList.remove(`hidden`);let i=r.matches.filter(t=>t.g===e),a=i.filter(e=>!r.isMatchPlayed(e)),o={};i.forEach(e=>{r.isMatchPlayed(e)&&(o[e.id]={hs:e.hs,as:e.as})});function s(){let t=Object.keys(r.teams).filter(t=>r.teams[t].group===e).map(e=>({team:e,p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}));return i.forEach(e=>{let n=o[e.id];if(!n)return;let r=t.find(t=>t.team===e.h),i=t.find(t=>t.team===e.a);!r||!i||(r.p++,i.p++,r.gf+=n.hs,r.ga+=n.as,i.gf+=n.as,i.ga+=n.hs,r.gd=r.gf-r.ga,i.gd=i.gf-i.ga,n.hs>n.as?(r.w++,r.pts+=3,i.l++):n.hs<n.as?(i.w++,i.pts+=3,r.l++):(r.d++,i.d++,r.pts++,i.pts++))}),t.sort((e,t)=>t.pts-e.pts||t.gd-e.gd||t.gf-e.gf),t}function c(){let i=s();n.innerHTML=`
      <button id="scenario-close" class="absolute top-4 right-4 text-txt-dim hover:text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <h3 class="font-display text-lg font-bold text-white mb-1">Szenarien-Rechner · Gruppe ${e}</h3>
      <p class="text-xs text-txt-muted mb-4">Trage hypothetische Ergebnisse ein und sieh, wie sich die Tabelle verändert.</p>

      ${a.length===0?`<p class="text-sm text-txt-dim mb-4">Alle Spiele dieser Gruppe wurden bereits gespielt.</p>`:`
        <div class="space-y-2 mb-5">
          ${a.map(e=>{let t=r.teams[e.h]?.flag||``,n=r.teams[e.a]?.flag||``,i=o[e.id];return`
              <div class="flex items-center gap-2 bg-bg rounded-lg px-3 py-2 border border-border text-sm">
                <span class="flex-1 text-right text-white font-medium">${t} ${e.h}</span>
                <input type="number" min="0" max="20" data-scenario-match="${e.id}" data-side="h" value="${i?i.hs:``}" class="w-12 text-center bg-[#0a0f1a] border border-border rounded px-1 py-1 text-white font-bold focus:outline-none focus:border-accent/60" placeholder="-" />
                <span class="text-txt-muted font-bold">:</span>
                <input type="number" min="0" max="20" data-scenario-match="${e.id}" data-side="a" value="${i?i.as:``}" class="w-12 text-center bg-[#0a0f1a] border border-border rounded px-1 py-1 text-white font-bold focus:outline-none focus:border-accent/60" placeholder="-" />
                <span class="flex-1 text-white font-medium">${e.a} ${n}</span>
              </div>`}).join(``)}
        </div>
      `}

      <h4 class="text-xs font-semibold uppercase tracking-wider text-txt-dim mb-2">Tabellen-Vorschau</h4>
      <table class="w-full text-[13px] mb-4">
        <thead><tr class="text-txt-muted text-[10px] uppercase tracking-wider">
          <th class="text-left pb-2">#</th><th class="text-left pb-2">Team</th>
          <th class="text-center pb-2">Sp</th><th class="text-center pb-2">S</th><th class="text-center pb-2">U</th><th class="text-center pb-2">N</th>
          <th class="text-center pb-2">Tore</th><th class="text-center pb-2">TD</th><th class="text-center pb-2 text-gold">Pkt</th>
        </tr></thead>
        <tbody>
          ${i.map((e,t)=>{let n=r.teams[e.team]?.flag||``;return`<tr class="${t<2?`border-l-2 border-emerald-500/60`:t===2?`border-l-2 border-gold/40`:``}">
              <td class="py-1 text-txt-muted text-xs">${t+1}</td>
              <td class="py-1 text-white">${n} ${e.team}</td>
              <td class="py-1 text-center text-txt-dim">${e.p}</td>
              <td class="py-1 text-center text-txt-dim">${e.w}</td>
              <td class="py-1 text-center text-txt-dim">${e.d}</td>
              <td class="py-1 text-center text-txt-dim">${e.l}</td>
              <td class="py-1 text-center text-txt-dim">${e.gf}:${e.ga}</td>
              <td class="py-1 text-center ${e.gd>0?`text-emerald-400`:e.gd<0?`text-accent`:`text-txt-dim`}">${e.gd>0?`+`:``}${e.gd}</td>
              <td class="py-1 text-center font-bold text-gold">${e.pts}</td>
            </tr>`}).join(``)}
        </tbody>
      </table>

      ${a.length>0?`<button id="scenario-apply" class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg transition-colors">Ergebnisse übernehmen</button>`:``}
    `,document.getElementById(`scenario-close`).addEventListener(`click`,()=>t.classList.add(`hidden`)),n.querySelectorAll(`[data-scenario-match]`).forEach(e=>{e.addEventListener(`input`,()=>{let t=parseInt(e.dataset.scenarioMatch,10);e.dataset.side,o[t]||(o[t]={hs:0,as:0});let n=e.closest(`.flex`),r=n.querySelector(`[data-side="h"]`),i=n.querySelector(`[data-side="a"]`),a=parseInt(r.value,10),s=parseInt(i.value,10);!isNaN(a)&&!isNaN(s)&&a>=0&&s>=0?o[t]={hs:a,as:s}:delete o[t],c()})});let l=document.getElementById(`scenario-apply`);l&&l.addEventListener(`click`,()=>{let e=0;a.forEach(t=>{let n=o[t.id];n&&!isNaN(n.hs)&&!isNaN(n.as)&&(r.saveMatchResult(t.id,n.hs,n.as),e++)}),t.classList.add(`hidden`),e>0&&(lt(()=>Promise.resolve().then(()=>qe).then(t=>t.showToast(`${e} Ergebnis${e>1?`se`:``} übernommen!`,`success`)),void 0),dt(null))})}c()}function pt(e){let t=document.getElementById(`app-content`);if(e)return mt(t,decodeURIComponent(e));t.innerHTML=`
    <section class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">WM-Teilnehmer</h2>
      <p class="text-txt-dim text-sm">Alle 48 Nationalmannschaften der FIFA WM 2026.</p>
    </section>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3" id="teams-grid"></div>
  `;let n=document.getElementById(`teams-grid`);return Object.keys(r.teams).sort((e,t)=>e.localeCompare(t,`de`)).forEach(e=>{let t=r.teams[e],i=document.createElement(`div`);i.className=`card p-3 text-center cursor-pointer hover:border-accent/40 transition-all group`,i.innerHTML=`
      <div class="text-3xl mb-2">${t.flag}</div>
      <div class="font-display font-bold text-sm text-white group-hover:text-accent transition-colors truncate">${e}</div>
      <div class="text-[10px] text-txt-muted mt-0.5">Gruppe ${t.group}</div>
    `,i.addEventListener(`click`,()=>q(`#/teams/${encodeURIComponent(e)}`)),n.appendChild(i)}),{destroy(){t.innerHTML=``}}}function mt(e,t){let n=r.teams[t];if(!n)return e.innerHTML=`<div class="card p-8 text-center"><p class="text-txt-dim">Team nicht gefunden.</p></div>`,{destroy(){e.innerHTML=``}};let i=r.getGroupStandings(n.group),a=i.findIndex(e=>e.team===t)+1,o=r.matches.filter(e=>e.h===t||e.a===t),s=o.filter(e=>r.isMatchPlayed(e));return e.innerHTML=`
    <!-- Back button -->
    <button id="team-back" class="flex items-center gap-2 text-txt-dim hover:text-white text-sm mb-6 transition-colors">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      Alle Teams
    </button>

    <!-- Team Header -->
    <section class="card p-6 sm:p-8 mb-6 card-slide">
      <div class="flex flex-col sm:flex-row items-center gap-5">
        <div class="text-6xl">${n.flag}</div>
        <div class="text-center sm:text-left flex-1">
          <h2 class="font-display text-3xl font-black text-white">${t}</h2>
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2">
            <span class="px-2.5 py-0.5 rounded-md bg-gold/10 text-gold text-[11px] font-bold uppercase border border-gold/20">Gruppe ${n.group}</span>
            <span class="px-2.5 py-0.5 rounded-md bg-sky/10 text-sky text-[11px] font-bold uppercase border border-sky/20">Platz ${a}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
        <div class="bg-bg rounded-lg px-4 py-3 border border-border">
          <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">Trainer</div>
          <div class="text-sm font-semibold text-white">${n.coach}</div>
        </div>
        <div class="bg-bg rounded-lg px-4 py-3 border border-border">
          <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">System</div>
          <div class="text-sm font-semibold text-white">${n.system}</div>
        </div>
        <div class="bg-bg rounded-lg px-4 py-3 border border-border">
          <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">Spiele</div>
          <div class="text-sm font-semibold text-white">${s.length} / ${o.length}</div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Tactic & Squad -->
      <div>
        <!-- Taktik -->
        <section class="card p-5 mb-5">
          <h3 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Spielweise
          </h3>
          <p class="text-sm text-txt-dim leading-relaxed">${n.info}</p>
        </section>

        <!-- Kader -->
        <section class="card p-5">
          <h3 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            Schlüsselspieler
          </h3>
          <div class="space-y-1.5">
            ${n.squad.map(e=>`
                <div class="flex items-center gap-3 bg-bg rounded-lg px-3 py-2 border border-border text-sm">
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${e.pos===`TW`?`text-gold`:e.pos===`ANG`?`text-accent`:e.pos===`MF`?`text-sky`:`text-emerald-400`} bg-white/5 border border-white/5 w-10 text-center">${e.pos}</span>
                  <span class="text-white font-medium">${e.name}</span>
                </div>`).join(``)}
          </div>
        </section>
      </div>

      <!-- Results & Group Table -->
      <div>
        <!-- Ergebnisse -->
        <section class="card p-5 mb-5">
          <h3 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            Turnierverlauf
          </h3>
          ${o.length===0?`<p class="text-sm text-txt-muted">Keine Spiele.</p>`:o.sort((e,t)=>e.md-t.md).map(e=>{let n=e.h===t,i=n?e.a:e.h,a=r.teams[i]?.flag||``;if(r.isMatchPlayed(e)){let t=n?e.hs:e.as,r=n?e.as:e.hs,o=t>r?`S`:t<r?`N`:`U`;return`
                  <div class="flex items-center gap-3 bg-bg rounded-lg px-3 py-2.5 border border-border text-sm mb-1.5">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${o===`S`?`bg-emerald-500/20 text-emerald-400 border-emerald-500/20`:o===`N`?`bg-accent/20 text-accent border-accent/20`:`bg-txt-muted/20 text-txt-dim border-txt-muted/20`} border w-6 text-center">${o}</span>
                    <span class="text-white font-bold">${t}:${r}</span>
                    <span class="text-txt-dim">vs.</span>
                    <span class="text-white">${a} ${i}</span>
                    <span class="ml-auto text-[10px] text-txt-muted">ST ${e.md}</span>
                  </div>`}else return`
                  <div class="flex items-center gap-3 bg-bg rounded-lg px-3 py-2.5 border border-border/50 text-sm mb-1.5 opacity-60">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/5 text-txt-muted border border-white/5 w-6 text-center">–</span>
                    <span class="text-txt-muted">vs.</span>
                    <span class="text-txt-dim">${a} ${i}</span>
                    <span class="ml-auto text-[10px] text-txt-muted">ST ${e.md}</span>
                  </div>`}).join(``)}
        </section>

        <!-- Mini-Gruppentabelle -->
        <section class="card p-5">
          <h3 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            Gruppe ${n.group}
          </h3>
          <table class="w-full text-[13px]">
            <thead><tr class="text-txt-muted text-[10px] uppercase tracking-wider">
              <th class="text-left pb-2">#</th><th class="text-left pb-2">Team</th>
              <th class="text-center pb-2">Sp</th><th class="text-center pb-2">Tore</th><th class="text-center pb-2">TD</th><th class="text-center pb-2 text-gold">Pkt</th>
            </tr></thead>
            <tbody>
              ${i.map((e,n)=>{let i=r.teams[e.team]?.flag||``,a=e.team===t;return`<tr class="${a?`bg-accent/5 border-l-2 border-accent`:``}">
                  <td class="py-1 text-txt-muted text-xs">${n+1}</td>
                  <td class="py-1 ${a?`text-accent font-bold`:`text-white`}">${i} ${e.team}</td>
                  <td class="py-1 text-center text-txt-dim">${e.p}</td>
                  <td class="py-1 text-center text-txt-dim">${e.gf}:${e.ga}</td>
                  <td class="py-1 text-center ${e.gd>0?`text-emerald-400`:e.gd<0?`text-accent`:`text-txt-dim`}">${e.gd>0?`+`:``}${e.gd}</td>
                  <td class="py-1 text-center font-bold text-gold">${e.pts}</td>
                </tr>`}).join(``)}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  `,document.getElementById(`team-back`).addEventListener(`click`,()=>q(`#/teams`)),{destroy(){e.innerHTML=``}}}var ht=[{id:`r32-1`,h:`1A`,a:`3C/D/E`,round:`R32`},{id:`r32-2`,h:`2A`,a:`2C`,round:`R32`},{id:`r32-3`,h:`1B`,a:`3A/D/E`,round:`R32`},{id:`r32-4`,h:`2B`,a:`2D`,round:`R32`},{id:`r32-5`,h:`1C`,a:`3B/F/G`,round:`R32`},{id:`r32-6`,h:`2E`,a:`2G`,round:`R32`},{id:`r32-7`,h:`1D`,a:`3A/B/F`,round:`R32`},{id:`r32-8`,h:`2F`,a:`2H`,round:`R32`},{id:`r32-9`,h:`1E`,a:`3G/H/I`,round:`R32`},{id:`r32-10`,h:`1F`,a:`3H/I/J`,round:`R32`},{id:`r32-11`,h:`1G`,a:`3I/J/K`,round:`R32`},{id:`r32-12`,h:`2I`,a:`2K`,round:`R32`},{id:`r32-13`,h:`1H`,a:`3J/K/L`,round:`R32`},{id:`r32-14`,h:`2J`,a:`2L`,round:`R32`},{id:`r32-15`,h:`1I`,a:`3K/L/A`,round:`R32`},{id:`r32-16`,h:`1J`,a:`3L/A/B`,round:`R32`}],gt=`wm_sim_ko_results`;function _t(){try{return JSON.parse(localStorage.getItem(gt))||{}}catch{return{}}}function vt(e){localStorage.setItem(gt,JSON.stringify(e))}function yt(e){let t=parseInt(e[0],10),n=e.slice(1),i=r.getGroupStandings(n);return i.length>=t&&i[t-1].p>0?i[t-1].team:null}function bt(e){return e.startsWith(`3`)?null:yt(e)}function $(e,t){let n=t[e];return!n||n.hs===void 0||n.as===void 0?null:n.hs>n.as?n.home:n.as>n.hs?n.away:null}function xt(){let e=document.getElementById(`app-content`),t=_t();function n(){let n=ht.map(e=>{let n=bt(e.h),r=bt(e.a),i=t[e.id];return{...e,homeName:n,awayName:r,result:i}}),r=[];for(let e=0;e<16;e+=2){let i=$(n[e].id,t),a=$(n[e+1].id,t),o=`r16-${Math.floor(e/2)+1}`;r.push({id:o,homeName:i,awayName:a,result:t[o]})}let a=[];for(let e=0;e<8;e+=2){let n=$(r[e].id,t),i=$(r[e+1].id,t),o=`qf-${Math.floor(e/2)+1}`;a.push({id:o,homeName:n,awayName:i,result:t[o]})}let s=[];for(let e=0;e<4;e+=2){let n=$(a[e].id,t),r=$(a[e+1].id,t),i=`sf-${Math.floor(e/2)+1}`;s.push({id:i,homeName:n,awayName:r,result:t[i]})}let c=$(`sf-1`,t),l=$(`sf-2`,t),u=s[0].result?s[0].result.hs<s[0].result.as?s[0].result.home:s[0].result.away:null,d=s[1].result?s[1].result.hs<s[1].result.as?s[1].result.home:s[1].result.away:null,f={id:`final`,homeName:c,awayName:l,result:t.final},p={id:`third`,homeName:u,awayName:d,result:t.third};e.innerHTML=`
      <section class="mb-6">
        <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">K.O.-Runde</h2>
        <p class="text-txt-dim text-sm">Klicke auf ein Spiel, um das Ergebnis einzutragen. Der Sieger rückt automatisch vor.</p>
      </section>

      <div class="space-y-8">
        ${i(`Achtelfinale (R32)`,n)}
        ${i(`Achtelfinale (R16)`,r)}
        ${i(`Viertelfinale`,a)}
        ${i(`Halbfinale`,s)}
        ${i(`Spiel um Platz 3`,[p])}
        ${i(`🏆 Finale`,[f])}
      </div>
    `,e.querySelectorAll(`[data-ko-match]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.koMatch,n=e.dataset.koHome,r=e.dataset.koAway;if(!n||!r){W(`Teams stehen noch nicht fest.`,`info`);return}o(t,n,r)})})}function i(e,t){return`
      <section class="card p-4 sm:p-5">
        <h3 class="font-display text-sm font-bold text-white mb-3 uppercase tracking-wider">${e}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          ${t.map(e=>a(e)).join(``)}
        </div>
      </section>
    `}function a(e){let t=e.homeName&&r.teams[e.homeName]?.flag||``,n=e.awayName&&r.teams[e.awayName]?.flag||``,i=e.homeName||e.h||`???`,a=e.awayName||e.a||`???`,o=e.homeName&&e.awayName,s=e.result,c=s&&s.hs!==void 0,l=null;return c&&(l=s.hs>s.as?e.homeName:s.as>s.hs?e.awayName:null),`
      <div class="bg-bg rounded-lg border ${c?`border-emerald-500/30`:o?`border-border hover:border-accent/40 cursor-pointer`:`border-border/40 opacity-50`} p-3 transition-all text-sm"
           data-ko-match="${e.id}" data-ko-home="${e.homeName||``}" data-ko-away="${e.awayName||``}">
        <div class="flex items-center justify-between mb-1.5">
          <span class="${l===e.homeName?`text-emerald-400 font-bold`:`text-white`} truncate flex-1">${t} ${i}</span>
          ${c?`<span class="font-display font-bold text-white mx-2">${s.hs}</span>`:``}
        </div>
        <div class="flex items-center justify-between">
          <span class="${l===e.awayName?`text-emerald-400 font-bold`:`text-white`} truncate flex-1">${n} ${a}</span>
          ${c?`<span class="font-display font-bold text-white mx-2">${s.as}</span>`:``}
        </div>
      </div>
    `}function o(e,i,a){let o=r.teams[i]?.flag||``,s=r.teams[a]?.flag||``,c=t[e],l=document.createElement(`div`);l.className=`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4`,l.innerHTML=`
      <div class="bg-bg-card border border-border rounded-xl p-6 w-full max-w-xs shadow-2xl relative">
        <button class="ko-modal-close absolute top-4 right-4 text-txt-dim hover:text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <h3 class="font-display text-base font-bold text-white mb-4 text-center">${o} ${i} vs ${a} ${s}</h3>
        <div class="flex items-center justify-center gap-3 mb-4">
          <input type="number" id="ko-hs" min="0" max="20" value="${c?c.hs:``}" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
          <span class="text-xl font-bold text-txt-muted">:</span>
          <input type="number" id="ko-as" min="0" max="20" value="${c?c.as:``}" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
        </div>
        <p class="text-[10px] text-txt-muted text-center mb-3">Bei K.O.-Spielen muss es einen Sieger geben.</p>
        <div class="flex gap-2">
          <button id="ko-save" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg transition-colors">Speichern</button>
          ${c?`<button id="ko-delete" class="py-2.5 px-4 bg-accent/20 hover:bg-accent/30 text-accent font-bold text-sm rounded-lg transition-colors border border-accent/20">✕</button>`:``}
        </div>
      </div>
    `,document.body.appendChild(l),l.querySelector(`.ko-modal-close`).addEventListener(`click`,()=>l.remove()),l.addEventListener(`click`,e=>{e.target===l&&l.remove()}),document.getElementById(`ko-save`).addEventListener(`click`,()=>{let r=parseInt(document.getElementById(`ko-hs`).value,10),o=parseInt(document.getElementById(`ko-as`).value,10);if(isNaN(r)||isNaN(o)||r<0||o<0){W(`Bitte gültige Werte eingeben.`,`error`);return}if(r===o){W(`K.O.-Spiele brauchen einen Sieger (kein Unentschieden).`,`error`);return}t[e]={home:i,away:a,hs:r,as:o},vt(t),l.remove(),n(),W(`K.O.-Ergebnis gespeichert!`,`success`)});let u=document.getElementById(`ko-delete`);u&&u.addEventListener(`click`,()=>{delete t[e];let r=[`r32-`,`r16-`,`qf-`,`sf-`,`final`,`third`],i=r.findIndex(t=>e.startsWith(t));r.slice(i+1).forEach(e=>{Object.keys(t).forEach(n=>{n.startsWith(e)&&delete t[n]})}),vt(t),l.remove(),n(),W(`Ergebnis und nachfolgende Runden zurückgesetzt.`,`info`)})}return n(),{destroy(){e.innerHTML=``}}}function St(){let e=document.getElementById(`app-content`),t=r.matches.filter(e=>r.isMatchPlayed(e)),n=t.reduce((e,t)=>e+t.hs+t.as,0),i=t.length>0?(n/t.length).toFixed(2):`0`,a=0,o=0,s=0,c=null,l=0,u=null,d=0;t.forEach(e=>{e.hs>e.as?a++:e.hs<e.as?s++:o++;let t=e.hs+e.as;t>l&&(l=t,c=e);let n=Math.abs(e.hs-e.as);n>d&&(d=n,u=e)});let f=a+o+s||1,p=(a/f*100).toFixed(0),m=(o/f*100).toFixed(0),h=(s/f*100).toFixed(0),g=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`],_=g.map(e=>{let t=r.matches.filter(t=>t.g===e&&r.isMatchPlayed(t)),n=t.reduce((e,t)=>e+t.hs+t.as,0);return{group:e,played:t.length,goals:n,avg:t.length>0?(n/t.length).toFixed(1):`0`}}).sort((e,t)=>t.goals-e.goals),v=Math.max(..._.map(e=>e.goals),1),y=e=>r.teams[e?.h]?.flag||``,b=e=>r.teams[e?.a]?.flag||``;return e.innerHTML=`
    <section class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">Turnier-Statistiken</h2>
      <p class="text-txt-dim text-sm">Aggregierte Daten aus ${t.length} gespielten Partien.</p>
    </section>

    <!-- KPI Cards -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-accent">${n}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Tore gesamt</div>
      </div>
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-sky">${i}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Tore / Spiel</div>
      </div>
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-gold">${t.length}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Spiele gespielt</div>
      </div>
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-emerald-400">${r.matches.length-t.length}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Ausstehend</div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- Ergebnisverteilung -->
      <section class="card p-5">
        <h3 class="font-display text-base font-bold text-white mb-4">Ergebnisverteilung</h3>
        ${t.length===0?`<p class="text-sm text-txt-muted">Noch keine Spiele gespielt.</p>`:`
          <div class="space-y-3">
            <div>
              <div class="flex justify-between text-sm mb-1"><span class="text-txt-dim">Heimsiege</span><span class="text-emerald-400 font-bold">${a} (${p}%)</span></div>
              <div class="h-3 bg-bg rounded-full overflow-hidden"><div class="h-full bg-emerald-500/60 rounded-full transition-all" style="width:${p}%"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1"><span class="text-txt-dim">Unentschieden</span><span class="text-txt-dim font-bold">${o} (${m}%)</span></div>
              <div class="h-3 bg-bg rounded-full overflow-hidden"><div class="h-full bg-txt-muted/40 rounded-full transition-all" style="width:${m}%"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1"><span class="text-txt-dim">Auswärtssiege</span><span class="text-accent font-bold">${s} (${h}%)</span></div>
              <div class="h-3 bg-bg rounded-full overflow-hidden"><div class="h-full bg-accent/60 rounded-full transition-all" style="width:${h}%"></div></div>
            </div>
          </div>
        `}
      </section>

      <!-- Highlights -->
      <section class="card p-5">
        <h3 class="font-display text-base font-bold text-white mb-4">Highlights</h3>
        ${t.length===0?`<p class="text-sm text-txt-muted">Noch keine Spiele gespielt.</p>`:`
          <div class="space-y-3">
            ${c?`
              <div class="bg-bg rounded-lg px-4 py-3 border border-border">
                <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">Torreichstes Spiel</div>
                <div class="text-sm font-semibold text-white">${y(c)} ${c.h} ${c.hs}:${c.as} ${c.a} ${b(c)}</div>
                <div class="text-[10px] text-txt-muted">${l} Tore · Gruppe ${c.g}</div>
              </div>`:``}
            ${u?`
              <div class="bg-bg rounded-lg px-4 py-3 border border-border">
                <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">Größte Überraschung (Tordifferenz)</div>
                <div class="text-sm font-semibold text-white">${y(u)} ${u.h} ${u.hs}:${u.as} ${u.a} ${b(u)}</div>
                <div class="text-[10px] text-txt-muted">Differenz: ${d} · Gruppe ${u.g}</div>
              </div>`:``}
          </div>
        `}
      </section>
    </div>

    <!-- Gruppen-Ranking -->
    <section class="card p-5 mb-8">
      <h3 class="font-display text-base font-bold text-white mb-4">Tore nach Gruppe</h3>
      <div class="space-y-2">
        ${_.map(e=>`
          <div class="flex items-center gap-3">
            <span class="text-sm font-bold text-white w-16">Gruppe ${e.group}</span>
            <div class="flex-1 h-5 bg-bg rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-accent/60 to-gold/60 rounded-full transition-all flex items-center justify-end pr-2" style="width:${(e.goals/v*100).toFixed(0)}%">
                <span class="text-[10px] font-bold text-white">${e.goals}</span>
              </div>
            </div>
            <span class="text-[10px] text-txt-muted w-12 text-right">${e.avg}/Spiel</span>
          </div>
        `).join(``)}
      </div>
    </section>

    <!-- KI-Favoritenanalyse -->
    <section class="card p-5">
      <h3 class="font-display text-base font-bold text-white mb-2 flex items-center gap-2">
        <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
        KI-Favoritenanalyse
      </h3>
      <p class="text-sm text-txt-dim mb-4">Lass die KI basierend auf allen bisherigen Ergebnissen die Turnier-Favoriten bewerten.</p>
      <button id="stats-favorites-btn" class="flex items-center gap-2 px-5 py-2.5 bg-gold/20 hover:bg-gold/30 text-gold font-bold text-sm rounded-lg transition-colors border border-gold/20">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        <span id="stats-fav-text">Favoritenanalyse starten</span>
        <div id="stats-fav-spinner" class="w-4 h-4 rounded-full spinner-ring animate-spin hidden"></div>
      </button>
      <div id="stats-favorites-output" class="hidden mt-5 report-enter">
        <div id="stats-favorites-content" class="max-w-none"></div>
      </div>
    </section>
  `,document.getElementById(`stats-favorites-btn`).addEventListener(`click`,async()=>{if(!r.apiKey){W(`Bitte hinterlege zuerst deinen Gemini API-Key.`,`error`),document.getElementById(`settings-modal`).classList.remove(`hidden`);return}let e=document.getElementById(`stats-favorites-btn`),n=document.getElementById(`stats-fav-spinner`),i=document.getElementById(`stats-fav-text`);e.disabled=!0,n.classList.remove(`hidden`),i.textContent=`Analysiere...`;let a=`Du bist ein Elite-Fußballanalyst. Basierend auf den aktuellen WM 2026 Gruppenständen und bisherigen Ergebnissen, erstelle ein Ranking der **Top 10 Turnier-Favoriten**.

**Aktuelle Gruppenstände:**
${g.map(e=>`Gruppe ${e}: ${r.getGroupStandings(e).map((e,t)=>`${t+1}. ${e.team} (${e.pts}P, ${e.gf}:${e.ga})`).join(`, `)}`).join(`
`)}

**Gespielt:** ${t.length} von ${r.matches.length} Gruppenspielen

Für jeden Favoriten:
1. Platzierung und Teamname mit Flagge
2. Aktuelle Form (Punkte, Tore, Tordifferenz)
3. Stärken und Schwächen
4. Prognose für die K.O.-Runde
5. Gesamtbewertung (Sterne: ⭐)

Formatiere als Markdown mit klarer Struktur. Sei analytisch und fundiert.`;try{let e=await Qe(a,r.apiKey);document.getElementById(`stats-favorites-content`).innerHTML=U.parse(e),document.getElementById(`stats-favorites-output`).classList.remove(`hidden`),W(`Favoritenanalyse abgeschlossen!`,`success`)}catch(e){W(e.message,`error`)}finally{e.disabled=!1,n.classList.add(`hidden`),i.textContent=`Favoritenanalyse starten`}}),{destroy(){e.innerHTML=``}}}function Ct(){r.init(),document.getElementById(`settings-btn`).addEventListener(`click`,()=>{document.getElementById(`api-key-input`).value=r.apiKey,document.getElementById(`settings-modal`).classList.remove(`hidden`)}),document.getElementById(`settings-close`).addEventListener(`click`,()=>{document.getElementById(`settings-modal`).classList.add(`hidden`)}),document.getElementById(`api-key-save`).addEventListener(`click`,()=>{let e=document.getElementById(`api-key-input`).value.trim();r.setApiKey(e),document.getElementById(`settings-modal`).classList.add(`hidden`),W(`API-Key gespeichert!`,`success`)}),K(`#/simulator`,()=>rt()),K(`#/gruppen`,e=>dt(e)),K(`#/teams`,e=>pt(e)),K(`#/ko-runde`,()=>xt()),K(`#/statistiken`,()=>St()),document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.tab;window.location.hash=n})}),Ye(`#/simulator`)}document.addEventListener(`DOMContentLoaded`,Ct);