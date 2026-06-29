(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={GEMINI_MODEL:`gemini-3.1-flash-lite`,LS_KEY_API:`wm_sim_api_key`,LS_KEY_MATCHES:`wm_sim_matches`,LS_KEY_ESPN_CACHE:`wm_sim_espn_cache`,ESPN_API_BASE:`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard`,ESPN_CACHE_TTL_MS:300*1e3},t={Mexico:`Mexiko`,"South Africa":`Südafrika`,"South Korea":`Südkorea`,Czechia:`Tschechien`,Canada:`Kanada`,"Bosnia-Herzegovina":`Bosnien-Herzegowina`,Qatar:`Katar`,Switzerland:`Schweiz`,Brazil:`Brasilien`,Morocco:`Marokko`,Haiti:`Haiti`,Scotland:`Schottland`,"United States":`USA`,Paraguay:`Paraguay`,Australia:`Australien`,Turkey:`Türkei`,Türkiye:`Türkei`,Germany:`Deutschland`,Curaçao:`Curaçao`,"Ivory Coast":`Elfenbeinküste`,"Côte d'Ivoire":`Elfenbeinküste`,Ecuador:`Ecuador`,Netherlands:`Niederlande`,Japan:`Japan`,Sweden:`Schweden`,Tunisia:`Tunesien`,Belgium:`Belgien`,Egypt:`Ägypten`,Iran:`Iran`,"New Zealand":`Neuseeland`,Spain:`Spanien`,"Cape Verde":`Kap Verde`,"Cabo Verde":`Kap Verde`,"Saudi Arabia":`Saudi-Arabien`,Uruguay:`Uruguay`,France:`Frankreich`,Senegal:`Senegal`,Iraq:`Irak`,Norway:`Norwegen`,Argentina:`Argentinien`,Algeria:`Algerien`,Austria:`Österreich`,Jordan:`Jordanien`,Portugal:`Portugal`,"DR Congo":`DR Kongo`,"Congo DR":`DR Kongo`,Uzbekistan:`Usbekistan`,Colombia:`Kolumbien`,England:`England`,Croatia:`Kroatien`,Ghana:`Ghana`,Panama:`Panama`};function n(e){let t=(e.altGameNote||``).match(/Group\s+([A-L])/i);return t?t[1]:null}function r(e){return t[e]||e}function i(e){let t=e.competitions?.[0];if(!t)return null;let i=t.competitors?.find(e=>e.homeAway===`home`),a=t.competitors?.find(e=>e.homeAway===`away`);if(!i||!a)return null;let o=r(i.team?.displayName||``),s=r(a.team?.displayName||``),c=n(t),l=t.status?.type||{},u={home:o,away:s,group:c,espnId:e.id,state:l.state,completed:l.completed||!1,statusDetail:l.shortDetail||l.detail||``,statusDescription:l.description||``};return(l.state===`in`||l.state===`post`)&&(u.homeScore=parseInt(i.score,10),u.awayScore=parseInt(a.score,10)),t.details&&t.details.length>0&&(u.details=t.details.map(e=>({type:e.type?.text||``,minute:e.clock?.displayValue||``,team:e.team?.id===i.id?`home`:`away`,player:e.athletesInvolved?.[0]?.displayName||``,isGoal:e.scoringPlay||!1,isOwnGoal:e.ownGoal||!1,isYellowCard:e.yellowCard||!1,isRedCard:e.redCard||!1}))),l.state===`in`&&(u.liveClock=t.status?.displayClock||``,u.livePeriod=t.status?.period||0),u.homeLogo=i.team?.logo||``,u.awayLogo=a.team?.logo||``,u}async function a(){let t=o();if(t)return t;try{let t=[`${e.ESPN_API_BASE}?dates=20260611-20260627&limit=100`,`${e.ESPN_API_BASE}?dates=20260628-20260719&limit=100`],n=(await Promise.all(t.map(e=>fetch(e).then(e=>{if(!e.ok)throw Error(`ESPN API error: ${e.status}`);return e.json()})))).flatMap(e=>e.events||[]).map(i).filter(Boolean);return s(n),n}catch(e){console.error(`[ESPN] Fetch failed:`,e);let t=o(!0);return t?(console.warn(`[ESPN] Using stale cache as fallback`),t):null}}function o(t=!1){try{let n=localStorage.getItem(e.LS_KEY_ESPN_CACHE);if(!n)return null;let{data:r,timestamp:i}=JSON.parse(n);return!t&&Date.now()-i>e.ESPN_CACHE_TTL_MS?null:r}catch{return null}}function s(t){try{localStorage.setItem(e.LS_KEY_ESPN_CACHE,JSON.stringify({data:t,timestamp:Date.now()}))}catch(e){console.warn(`[ESPN] Cache write failed:`,e)}}function c(){localStorage.removeItem(e.LS_KEY_ESPN_CACHE)}var l={venues:{MEX:{name:`Estadio Azteca`,city:`Mexico City`,country:`🇲🇽`,lat:19.3029,lon:-99.1505,tz:`America/Mexico_City`},GDL:{name:`Estadio Akron`,city:`Guadalajara`,country:`🇲🇽`,lat:20.682,lon:-103.4625,tz:`America/Mexico_City`},MTY:{name:`Estadio BBVA`,city:`Monterrey`,country:`🇲🇽`,lat:25.6705,lon:-100.2436,tz:`America/Monterrey`},TOR:{name:`BMO Field`,city:`Toronto`,country:`🇨🇦`,lat:43.6332,lon:-79.4186,tz:`America/Toronto`},VAN:{name:`BC Place`,city:`Vancouver`,country:`🇨🇦`,lat:49.2768,lon:-123.112,tz:`America/Vancouver`},NYC:{name:`MetLife Stadium`,city:`East Rutherford`,country:`🇺🇸`,lat:40.8135,lon:-74.0745,tz:`America/New_York`},LAX:{name:`SoFi Stadium`,city:`Los Angeles`,country:`🇺🇸`,lat:33.9535,lon:-118.3392,tz:`America/Los_Angeles`},DAL:{name:`AT&T Stadium`,city:`Arlington`,country:`🇺🇸`,lat:32.7473,lon:-97.0945,tz:`America/Chicago`},SFO:{name:`Levi's Stadium`,city:`Santa Clara`,country:`🇺🇸`,lat:37.4033,lon:-121.9694,tz:`America/Los_Angeles`},MIA:{name:`Hard Rock Stadium`,city:`Miami Gardens`,country:`🇺🇸`,lat:25.958,lon:-80.2389,tz:`America/New_York`},ATL:{name:`Mercedes-Benz Stadium`,city:`Atlanta`,country:`🇺🇸`,lat:33.7553,lon:-84.4006,tz:`America/New_York`},HOU:{name:`NRG Stadium`,city:`Houston`,country:`🇺🇸`,lat:29.6847,lon:-95.4107,tz:`America/Chicago`},PHI:{name:`Lincoln Financial Field`,city:`Philadelphia`,country:`🇺🇸`,lat:39.9008,lon:-75.1675,tz:`America/New_York`},SEA:{name:`Lumen Field`,city:`Seattle`,country:`🇺🇸`,lat:47.5952,lon:-122.3316,tz:`America/Los_Angeles`},BOS:{name:`Gillette Stadium`,city:`Foxborough`,country:`🇺🇸`,lat:42.0909,lon:-71.2643,tz:`America/New_York`},KC:{name:`Arrowhead Stadium`,city:`Kansas City`,country:`🇺🇸`,lat:39.0489,lon:-94.4839,tz:`America/Chicago`}},teams:{Mexiko:{coach:`Jaime Lozano`,system:`4-3-3`,info:`Kompaktes Zentrum, schnelles Flügelspiel.`,squad:[{name:`Guillermo Ochoa`,pos:`TW`},{name:`Luis Malagón`,pos:`TW`},{name:`Carlos Acevedo`,pos:`TW`},{name:`César Montes`,pos:`ABW`},{name:`Johan Vásquez`,pos:`ABW`},{name:`Gerardo Arteaga`,pos:`ABW`},{name:`Jorge Sánchez`,pos:`ABW`},{name:`Israel Reyes`,pos:`ABW`},{name:`Julián Araujo`,pos:`ABW`},{name:`Edson Álvarez`,pos:`MF`},{name:`Luis Chávez`,pos:`MF`},{name:`Orbelín Pineda`,pos:`MF`},{name:`Erick Sánchez`,pos:`MF`},{name:`Sebastián Córdova`,pos:`MF`},{name:`Santiago Giménez`,pos:`ANG`},{name:`Hirving Lozano`,pos:`ANG`},{name:`Raúl Jiménez`,pos:`ANG`},{name:`Uriel Antuna`,pos:`ANG`},{name:`Henry Martín`,pos:`ANG`}],group:`A`,flag:`🇲🇽`},Südafrika:{coach:`Hugo Broos`,system:`4-2-3-1`,info:`Physisch stark, Fokus auf Konter.`,squad:[{name:`Ronwen Williams`,pos:`TW`},{name:`Veli Mothwa`,pos:`TW`},{name:`Bruce Bvuma`,pos:`TW`},{name:`Mothobi Mvala`,pos:`ABW`},{name:`Siyabonga Ngezana`,pos:`ABW`},{name:`Aubrey Modiba`,pos:`ABW`},{name:`Nyiko Mobbie`,pos:`ABW`},{name:`Katlego Mohamme`,pos:`ABW`},{name:`Teboho Mokoena`,pos:`MF`},{name:`Sphephelo Sithole`,pos:`MF`},{name:`Jayden Adams`,pos:`MF`},{name:`Luke Le Roux`,pos:`MF`},{name:`Percy Tau`,pos:`ANG`},{name:`Lyle Foster`,pos:`ANG`},{name:`Evidence Makgopa`,pos:`ANG`},{name:`Thembinkosi Lorch`,pos:`ANG`},{name:`Mihlali Mayambela`,pos:`ANG`}],group:`A`,flag:`🇿🇦`},Südkorea:{coach:`Hong Myung-bo`,system:`4-4-2`,info:`Diszipliniertes Pressing, starke Individualisten.`,squad:[{name:`Kim Seung-gyu`,pos:`TW`},{name:`Jo Hyeon-woo`,pos:`TW`},{name:`Lee Chang-geun`,pos:`TW`},{name:`Kim Min-jae`,pos:`ABW`},{name:`Seol Young-woo`,pos:`ABW`},{name:`Lee Ki-je`,pos:`ABW`},{name:`Kim Ju-sung`,pos:`ABW`},{name:`Kim Moon-hwan`,pos:`ABW`},{name:`Lee Kang-in`,pos:`MF`},{name:`Hwang In-beom`,pos:`MF`},{name:`Park Yong-woo`,pos:`MF`},{name:`Paik Seung-ho`,pos:`MF`},{name:`Lee Jae-sung`,pos:`MF`},{name:`Hong Hyun-seok`,pos:`MF`},{name:`Yang Hyun-jun`,pos:`MF`},{name:`Son Heung-min`,pos:`ANG`},{name:`Hwang Hee-chan`,pos:`ANG`},{name:`Cho Gue-sung`,pos:`ANG`},{name:`Oh Hyeon-gyu`,pos:`ANG`}],group:`A`,flag:`🇰🇷`},Tschechien:{coach:`Ivan Hašek`,system:`3-5-2`,info:`Kompakte Abwehr, gefährlich bei Standards.`,squad:[{name:`Tomáš Vaclík`,pos:`TW`},{name:`Jindřich Staněk`,pos:`TW`},{name:`Vítězslav Jaroš`,pos:`TW`},{name:`Vladimír Coufal`,pos:`ABW`},{name:`David Zima`,pos:`ABW`},{name:`Tomáš Holeš`,pos:`ABW`},{name:`Jaroslav Zelený`,pos:`ABW`},{name:`Martin Vitík`,pos:`ABW`},{name:`Tomáš Souček`,pos:`MF`},{name:`Antonín Barák`,pos:`MF`},{name:`Lukáš Provod`,pos:`MF`},{name:`Ondřej Lingr`,pos:`MF`},{name:`Adam Hložek`,pos:`MF`},{name:`Patrik Schick`,pos:`ANG`},{name:`Jan Kuchta`,pos:`ANG`},{name:`Václav Černý`,pos:`ANG`},{name:`Tomáš Čvančara`,pos:`ANG`},{name:`Mojmír Chytil`,pos:`ANG`}],group:`A`,flag:`🇨🇿`},Kanada:{coach:`Jesse Marsch`,system:`4-2-2-2`,info:`Hohes Angriffspressing, enormes Tempo.`,squad:[{name:`Dayne St. Clair`,pos:`TW`},{name:`Maxime Crépeau`,pos:`TW`},{name:`Alphonso Davies`,pos:`ABW`},{name:`Richie Laryea`,pos:`ABW`},{name:`Kamal Miller`,pos:`ABW`},{name:`Derek Cornelius`,pos:`ABW`},{name:`Sam Adekugbe`,pos:`ABW`},{name:`Stephen Eustáquio`,pos:`MF`},{name:`Ismaël Koné`,pos:`MF`},{name:`Jonathan Osorio`,pos:`MF`},{name:`Mathieu Choinière`,pos:`MF`},{name:`Jonathan David`,pos:`ANG`},{name:`Cyle Larin`,pos:`ANG`},{name:`Tajon Buchanan`,pos:`ANG`},{name:`Liam Millar`,pos:`ANG`},{name:`Iké Ugbo`,pos:`ANG`}],group:`B`,flag:`🇨🇦`},"Bosnien-Herzegowina":{coach:`Savo Milošević`,system:`4-3-3`,info:`Robustes Zweikampfverhalten im Zentrum.`,squad:[{name:`Ibrahim Šehić`,pos:`TW`},{name:`Nikola Vasilj`,pos:`TW`},{name:`Amar Dedić`,pos:`ABW`},{name:`Sead Kolašinac`,pos:`ABW`},{name:`Adnan Kovačević`,pos:`ABW`},{name:`Jusuf Gazibegović`,pos:`ABW`},{name:`Miralem Pjanić`,pos:`MF`},{name:`Rade Krunić`,pos:`MF`},{name:`Benjamin Tahirović`,pos:`MF`},{name:`Edin Džeko`,pos:`ANG`},{name:`Ermedin Demirović`,pos:`ANG`},{name:`Smail Prevljak`,pos:`ANG`},{name:`Haris Tabaković`,pos:`ANG`},{name:`Samed Baždar`,pos:`ANG`}],group:`B`,flag:`🇧🇦`},Katar:{coach:`Tintín Márquez`,system:`3-5-2`,info:`Ballbesitzorientiert, spielstarke Halbverteidiger.`,squad:[{name:`Meshaal Barsham`,pos:`TW`},{name:`Saad Al-Sheeb`,pos:`TW`},{name:`Abdulkarim Hassan`,pos:`ABW`},{name:`Boualem Khoukhi`,pos:`ABW`},{name:`Tarek Salman`,pos:`ABW`},{name:`Homam Ahmed`,pos:`ABW`},{name:`Hassan Al-Haydos`,pos:`MF`},{name:`Abdulaziz Hatem`,pos:`MF`},{name:`Karim Boudiaf`,pos:`MF`},{name:`Ali Assadalla`,pos:`MF`},{name:`Akram Afif`,pos:`ANG`},{name:`Almoez Ali`,pos:`ANG`},{name:`Ahmed Alaaeldin`,pos:`ANG`},{name:`Ismaeel Mohammad`,pos:`ANG`},{name:`Yusuf Abdurisag`,pos:`ANG`}],group:`B`,flag:`🇶🇦`},Schweiz:{coach:`Murat Yakin`,system:`3-4-2-1`,info:`Taktisch extrem flexibel, dominantes Mittelfeld.`,squad:[{name:`Yann Sommer`,pos:`TW`},{name:`Gregor Kobel`,pos:`TW`},{name:`Manuel Akanji`,pos:`ABW`},{name:`Nico Elvedi`,pos:`ABW`},{name:`Ricardo Rodríguez`,pos:`ABW`},{name:`Denis Zakaria`,pos:`ABW`},{name:`Silvan Widmer`,pos:`ABW`},{name:`Cédric Zesiger`,pos:`ABW`},{name:`Granit Xhaka`,pos:`MF`},{name:`Remo Freuler`,pos:`MF`},{name:`Michel Aebischer`,pos:`MF`},{name:`Xherdan Shaqiri`,pos:`MF`},{name:`Breel Embolo`,pos:`ANG`},{name:`Noah Okafor`,pos:`ANG`},{name:`Ruben Vargas`,pos:`ANG`},{name:`Dan Ndoye`,pos:`ANG`},{name:`Zeki Amdouni`,pos:`ANG`}],group:`B`,flag:`🇨🇭`},Brasilien:{coach:`Dorival Júnior`,system:`4-2-3-1`,info:`Offensive Magie, sehr hohes Tempo auf den Flügeln.`,squad:[{name:`Alisson`,pos:`TW`},{name:`Ederson`,pos:`TW`},{name:`Marquinhos`,pos:`ABW`},{name:`Éder Militão`,pos:`ABW`},{name:`Gabriel Magalhães`,pos:`ABW`},{name:`Danilo`,pos:`ABW`},{name:`Lucas Beraldo`,pos:`ABW`},{name:`Bruno Guimarães`,pos:`MF`},{name:`Casemiro`,pos:`MF`},{name:`João Gomes`,pos:`MF`},{name:`Douglas Luiz`,pos:`MF`},{name:`Lucas Paquetá`,pos:`MF`},{name:`Vinícius Júnior`,pos:`ANG`},{name:`Rodrygo`,pos:`ANG`},{name:`Raphinha`,pos:`ANG`},{name:`Endrick`,pos:`ANG`},{name:`Gabriel Martinelli`,pos:`ANG`}],group:`C`,flag:`🇧🇷`},Marokko:{coach:`Walid Regragui`,system:`4-1-4-1`,info:`Perfekte defensive Organisation, schnelles Umschalten.`,squad:[{name:`Yassine Bounou`,pos:`TW`},{name:`Munir El Kajoui`,pos:`TW`},{name:`Achraf Hakimi`,pos:`ABW`},{name:`Noussair Mazraoui`,pos:`ABW`},{name:`Nayef Aguerd`,pos:`ABW`},{name:`Achraf Dari`,pos:`ABW`},{name:`Sofyan Amrabat`,pos:`MF`},{name:`Azzedine Ounahi`,pos:`MF`},{name:`Bilal El Khannouss`,pos:`MF`},{name:`Brahim Díaz`,pos:`MF`},{name:`Hakim Ziyech`,pos:`ANG`},{name:`Youssef En-Nesyri`,pos:`ANG`},{name:`Amine Adli`,pos:`ANG`},{name:`Zakaria Aboukhlal`,pos:`ANG`}],group:`C`,flag:`🇲🇦`},Haiti:{coach:`Gabriel Calderón`,system:`4-4-2`,info:`Körperbetontes Spiel, tiefstehende Abwehrkette.`,squad:[{name:`Johny Placide`,pos:`TW`},{name:`Josué Duverger`,pos:`TW`},{name:`Carlens Arcus`,pos:`ABW`},{name:`Martin Expérience`,pos:`ABW`},{name:`Bryan Alceus`,pos:`MF`},{name:`Fabrice Picault`,pos:`MF`},{name:`Frantzdy Pierrot`,pos:`ANG`},{name:`Duckens Nazon`,pos:`ANG`},{name:`Carnejy Antoine`,pos:`ANG`}],group:`C`,flag:`🇭🇹`},Schottland:{coach:`Steve Clarke`,system:`5-4-1`,info:`Kampfbetont, Flankenfokus über die Außenverteidiger.`,squad:[{name:`Angus Gunn`,pos:`TW`},{name:`Craig Gordon`,pos:`TW`},{name:`Andrew Robertson`,pos:`ABW`},{name:`Kieran Tierney`,pos:`ABW`},{name:`Jack Hendry`,pos:`ABW`},{name:`Ryan Porteous`,pos:`ABW`},{name:`Nathan Patterson`,pos:`ABW`},{name:`Scott McTominay`,pos:`MF`},{name:`John McGinn`,pos:`MF`},{name:`Callum McGregor`,pos:`MF`},{name:`Billy Gilmour`,pos:`MF`},{name:`Ryan Christie`,pos:`MF`},{name:`Che Adams`,pos:`ANG`},{name:`Lyndon Dykes`,pos:`ANG`},{name:`Lawrence Shankland`,pos:`ANG`},{name:`Ben Doak`,pos:`ANG`}],group:`C`,flag:`🏴󠁧󠁢󠁳󠁣󠁴󠁿`},USA:{coach:`Gregg Berhalter`,system:`4-3-3`,info:`Athletisch, ballbesitzorientiert mit offensiven Außen.`,squad:[{name:`Matt Turner`,pos:`TW`},{name:`Ethan Horvath`,pos:`TW`},{name:`Chris Richards`,pos:`ABW`},{name:`Antonee Robinson`,pos:`ABW`},{name:`Sergiño Dest`,pos:`ABW`},{name:`Joe Scally`,pos:`ABW`},{name:`Weston McKennie`,pos:`MF`},{name:`Tyler Adams`,pos:`MF`},{name:`Gio Reyna`,pos:`MF`},{name:`Yunus Musah`,pos:`MF`},{name:`Malik Tillman`,pos:`MF`},{name:`Christian Pulisic`,pos:`ANG`},{name:`Folarin Balogun`,pos:`ANG`},{name:`Tim Weah`,pos:`ANG`},{name:`Ricardo Pepi`,pos:`ANG`},{name:`Haji Wright`,pos:`ANG`}],group:`D`,flag:`🇺🇸`},Paraguay:{coach:`Daniel Garnero`,system:`4-3-3`,info:`Aggressives Pressing, direkter Zug zum Tor.`,squad:[{name:`Antony Silva`,pos:`TW`},{name:`Carlos Miguel`,pos:`TW`},{name:`Gustavo Gómez`,pos:`ABW`},{name:`Júnior Alonso`,pos:`ABW`},{name:`Fabian Balbuena`,pos:`ABW`},{name:`Juan Escobar`,pos:`ABW`},{name:`Blas Riveros`,pos:`ABW`},{name:`Miguel Almirón`,pos:`MF`},{name:`Mathías Villasanti`,pos:`MF`},{name:`Andrés Cubas`,pos:`MF`},{name:`Diego Gómez`,pos:`MF`},{name:`Julio Enciso`,pos:`ANG`},{name:`Antonio Sanabria`,pos:`ANG`},{name:`Adam Bareiro`,pos:`ANG`},{name:`Ramón Sosa`,pos:`ANG`}],group:`D`,flag:`🇵🇾`},Australien:{coach:`Graham Arnold`,system:`4-4-2`,info:`Physisch überlegen, stark bei ruhenden Bällen.`,squad:[{name:`Mathew Ryan`,pos:`TW`},{name:`Joe Gauci`,pos:`TW`},{name:`Harry Souttar`,pos:`ABW`},{name:`Cameron Burgess`,pos:`ABW`},{name:`Kye Rowles`,pos:`ABW`},{name:`Aziz Behich`,pos:`ABW`},{name:`Jordan Bos`,pos:`ABW`},{name:`Jackson Irvine`,pos:`MF`},{name:`Connor Metcalfe`,pos:`MF`},{name:`Keanu Baccus`,pos:`MF`},{name:`Riley McGree`,pos:`MF`},{name:`Mitchell Duke`,pos:`ANG`},{name:`Jamie Maclaren`,pos:`ANG`},{name:`Brandon Borrello`,pos:`ANG`},{name:`Nestory Irankunda`,pos:`ANG`}],group:`D`,flag:`🇦🇺`},Türkei:{coach:`Vincenzo Montella`,system:`4-2-3-1`,info:`Technisch starkes Mittelfeld, kreative Spielgestaltung.`,squad:[{name:`Mert Günok`,pos:`TW`},{name:`Uğurcan Çakır`,pos:`TW`},{name:`Çağlar Söyüncü`,pos:`ABW`},{name:`Merih Demiral`,pos:`ABW`},{name:`Abdülkerim Bardakcı`,pos:`ABW`},{name:`Ferdi Kadıoğlu`,pos:`ABW`},{name:`Zeki Çelik`,pos:`ABW`},{name:`Hakan Çalhanoğlu`,pos:`MF`},{name:`Salih Özcan`,pos:`MF`},{name:`Orkun Kökçü`,pos:`MF`},{name:`Arda Güler`,pos:`MF`},{name:`Kenan Yıldız`,pos:`ANG`},{name:`Kerem Aktürkoğlu`,pos:`ANG`},{name:`Barış Alper Yılmaz`,pos:`ANG`},{name:`Cenk Tosun`,pos:`ANG`}],group:`D`,flag:`🇹🇷`},Deutschland:{coach:`Julian Nagelsmann`,system:`4-2-3-1`,info:`Dominantes Positionsspiel, flüssige Rotationen vorne.`,squad:[{name:`Marc-André ter Stegen`,pos:`TW`},{name:`Oliver Baumann`,pos:`TW`},{name:`Antonio Rüdiger`,pos:`ABW`},{name:`Jonathan Tah`,pos:`ABW`},{name:`David Raum`,pos:`ABW`},{name:`Joshua Kimmich`,pos:`ABW`},{name:`Nico Schlotterbeck`,pos:`ABW`},{name:`Benjamin Henrichs`,pos:`ABW`},{name:`Jamal Musiala`,pos:`MF`},{name:`Florian Wirtz`,pos:`MF`},{name:`Robert Andrich`,pos:`MF`},{name:`Pascal Groß`,pos:`MF`},{name:`Leroy Sané`,pos:`MF`},{name:`İlkay Gündoğan`,pos:`MF`},{name:`Kai Havertz`,pos:`ANG`},{name:`Niclas Füllkrug`,pos:`ANG`},{name:`Deniz Undav`,pos:`ANG`},{name:`Maximilian Beier`,pos:`ANG`}],group:`E`,flag:`🇩🇪`},Curaçao:{coach:`Dick Advocaat`,system:`4-3-3`,info:`Konterfokus, viele Spieler mit Eredivisie-Erfahrung.`,squad:[{name:`Eloy Room`,pos:`TW`},{name:`Cuco Martina`,pos:`ABW`},{name:`Jurien Gaari`,pos:`ABW`},{name:`Darryl Lachman`,pos:`ABW`},{name:`Juninho Bacuna`,pos:`MF`},{name:`Leandro Bacuna`,pos:`MF`},{name:`Vurnon Anita`,pos:`MF`},{name:`Kenji Gorré`,pos:`MF`},{name:`Jurgen Locadia`,pos:`ANG`},{name:`Richairo Živković`,pos:`ANG`},{name:`Rangelo Janga`,pos:`ANG`}],group:`E`,flag:`🇨🇼`},Elfenbeinküste:{coach:`Emerse Faé`,system:`4-3-3`,info:`Physisch extrem stark, enorme Wucht im Angriff.`,squad:[{name:`Yahia Fofana`,pos:`TW`},{name:`Badra Ali Sangaré`,pos:`TW`},{name:`Odilon Kossounou`,pos:`ABW`},{name:`Evan Ndicka`,pos:`ABW`},{name:`Willy Boly`,pos:`ABW`},{name:`Ghislain Konan`,pos:`ABW`},{name:`Franck Kessié`,pos:`MF`},{name:`Seko Fofana`,pos:`MF`},{name:`Ibrahim Sangaré`,pos:`MF`},{name:`Jérémie Boga`,pos:`MF`},{name:`Sébastien Haller`,pos:`ANG`},{name:`Simon Adingra`,pos:`ANG`},{name:`Nicolas Pépé`,pos:`ANG`},{name:`Max Gradel`,pos:`ANG`},{name:`Wilfried Zaha`,pos:`ANG`}],group:`E`,flag:`🇨🇮`},Ecuador:{coach:`Félix Sánchez Bas`,system:`3-4-3`,info:`Sehr dynamisch, hohe Intensität im Gegenpressing.`,squad:[{name:`Alexander Domínguez`,pos:`TW`},{name:`Hernán Galíndez`,pos:`TW`},{name:`Piero Hincapié`,pos:`ABW`},{name:`Pervis Estupiñán`,pos:`ABW`},{name:`Félix Torres`,pos:`ABW`},{name:`Willian Pacho`,pos:`ABW`},{name:`Ángelo Preciado`,pos:`ABW`},{name:`Moisés Caicedo`,pos:`MF`},{name:`Alan Franco`,pos:`MF`},{name:`Carlos Gruezo`,pos:`MF`},{name:`Kendry Páez`,pos:`MF`},{name:`Enner Valencia`,pos:`ANG`},{name:`Kevin Rodríguez`,pos:`ANG`},{name:`Jeremy Sarmiento`,pos:`ANG`}],group:`E`,flag:`🇪🇨`},Niederlande:{coach:`Ronald Koeman`,system:`3-4-1-2`,info:`Variables Aufbauspiel, extrem kopfballstarke Abwehr.`,squad:[{name:`Bart Verbruggen`,pos:`TW`},{name:`Mark Flekken`,pos:`TW`},{name:`Virgil van Dijk`,pos:`ABW`},{name:`Nathan Aké`,pos:`ABW`},{name:`Matthijs de Ligt`,pos:`ABW`},{name:`Denzel Dumfries`,pos:`ABW`},{name:`Jurriën Timber`,pos:`ABW`},{name:`Micky van de Ven`,pos:`ABW`},{name:`Frenkie de Jong`,pos:`MF`},{name:`Mats Wieffer`,pos:`MF`},{name:`Teun Koopmeiners`,pos:`MF`},{name:`Ryan Gravenberch`,pos:`MF`},{name:`Xavi Simons`,pos:`MF`},{name:`Memphis Depay`,pos:`ANG`},{name:`Cody Gakpo`,pos:`ANG`},{name:`Wout Weghorst`,pos:`ANG`},{name:`Donyell Malen`,pos:`ANG`}],group:`F`,flag:`🇳🇱`},Japan:{coach:`Hajime Moriyasu`,system:`4-2-3-1`,info:`Hohe Laufbereitschaft, technisch brillante Flügel.`,squad:[{name:`Shūichi Gonda`,pos:`TW`},{name:`Zion Suzuki`,pos:`TW`},{name:`Takehiro Tomiyasu`,pos:`ABW`},{name:`Kō Itakura`,pos:`ABW`},{name:`Yūta Nakayama`,pos:`ABW`},{name:`Koki Machida`,pos:`ABW`},{name:`Wataru Endo`,pos:`MF`},{name:`Ao Tanaka`,pos:`MF`},{name:`Hidemasa Morita`,pos:`MF`},{name:`Takefusa Kubo`,pos:`MF`},{name:`Daichi Kamada`,pos:`MF`},{name:`Kaoru Mitoma`,pos:`ANG`},{name:`Ayase Ueda`,pos:`ANG`},{name:`Takumi Minamino`,pos:`ANG`},{name:`Mao Hosoya`,pos:`ANG`}],group:`F`,flag:`🇯🇵`},Schweden:{coach:`Jon Dahl Tomasson`,system:`4-4-2`,info:`Kompakte Linien, Zielspieler im Sturmzentrum.`,squad:[{name:`Robin Olsen`,pos:`TW`},{name:`Viktor Johansson`,pos:`TW`},{name:`Victor Lindelöf`,pos:`ABW`},{name:`Isak Hien`,pos:`ABW`},{name:`Ludwig Augustinsson`,pos:`ABW`},{name:`Emil Holm`,pos:`ABW`},{name:`Jens Cajuste`,pos:`MF`},{name:`Mattias Svanberg`,pos:`MF`},{name:`Hugo Larsson`,pos:`MF`},{name:`Alexander Isak`,pos:`ANG`},{name:`Viktor Gyökeres`,pos:`ANG`},{name:`Dejan Kulusevski`,pos:`ANG`},{name:`Anthony Elanga`,pos:`ANG`}],group:`F`,flag:`🇸🇪`},Tunesien:{coach:`Jalel Kadri`,system:`3-4-2-1`,info:`Defensiv stabil, schnelle Umschaltmomente.`,squad:[{name:`Aymen Dahmen`,pos:`TW`},{name:`Mouez Hassen`,pos:`TW`},{name:`Montassar Talbi`,pos:`ABW`},{name:`Ali Maâloul`,pos:`ABW`},{name:`Wajdi Kechrida`,pos:`ABW`},{name:`Yassine Meriah`,pos:`ABW`},{name:`Ellyes Skhiri`,pos:`MF`},{name:`Aïssa Laïdouni`,pos:`MF`},{name:`Wahbi Khazri`,pos:`MF`},{name:`Hannibal Mejbri`,pos:`MF`},{name:`Youssef Msakni`,pos:`ANG`},{name:`Seifeddine Jaziri`,pos:`ANG`},{name:`Elias Achouri`,pos:`ANG`},{name:`Taha Yassine Khenissi`,pos:`ANG`}],group:`F`,flag:`🇹🇳`},Belgien:{coach:`Domenico Tedesco`,system:`4-2-3-1`,info:`Kombinationsstark, Fokus auf das zentrale offensive Mittelfeld.`,squad:[{name:`Koen Casteels`,pos:`TW`},{name:`Mats Sels`,pos:`TW`},{name:`Wout Faes`,pos:`ABW`},{name:`Timothy Castagne`,pos:`ABW`},{name:`Arthur Theate`,pos:`ABW`},{name:`Zeno Debast`,pos:`ABW`},{name:`Kevin De Bruyne`,pos:`MF`},{name:`Amadou Onana`,pos:`MF`},{name:`Youri Tielemans`,pos:`MF`},{name:`Orel Mangala`,pos:`MF`},{name:`Leandro Trossard`,pos:`MF`},{name:`Jérémy Doku`,pos:`ANG`},{name:`Romelu Lukaku`,pos:`ANG`},{name:`Loïs Openda`,pos:`ANG`},{name:`Dodi Lukebakio`,pos:`ANG`}],group:`G`,flag:`🇧🇪`},Ägypten:{coach:`Hossam Hassan`,system:`4-3-3`,info:`Schnelles Umschaltspiel mit klarem Fokus auf die Rechtsaußen-Position.`,squad:[{name:`Mohamed El Shenawy`,pos:`TW`},{name:`Ahmed El Shenawy`,pos:`TW`},{name:`Mohamed Abdelmonem`,pos:`ABW`},{name:`Ahmed Hegazy`,pos:`ABW`},{name:`Mohamed Hany`,pos:`ABW`},{name:`Mohamed Elneny`,pos:`MF`},{name:`Hamdy Fathy`,pos:`MF`},{name:`Emam Ashour`,pos:`MF`},{name:`Marwan Attia`,pos:`MF`},{name:`Mohamed Salah`,pos:`ANG`},{name:`Omar Marmoush`,pos:`ANG`},{name:`Mostafa Mohamed`,pos:`ANG`},{name:`Mahmoud Trezeguet`,pos:`ANG`}],group:`G`,flag:`🇪🇬`},Iran:{coach:`Amir Ghalenoei`,system:`4-4-2`,info:`Leidenschaftliche Defensive, gefährliches Sturmduo.`,squad:[{name:`Alireza Beiranvand`,pos:`TW`},{name:`Payam Niazmand`,pos:`TW`},{name:`Hossein Kanani`,pos:`ABW`},{name:`Milad Mohammadi`,pos:`ABW`},{name:`Ramin Rezaeian`,pos:`ABW`},{name:`Majid Hosseini`,pos:`ABW`},{name:`Saeid Ezatolahi`,pos:`MF`},{name:`Saman Ghoddos`,pos:`MF`},{name:`Alireza Jahanbakhsh`,pos:`MF`},{name:`Mehdi Taremi`,pos:`ANG`},{name:`Sardar Azmoun`,pos:`ANG`},{name:`Mohammad Mohebi`,pos:`ANG`},{name:`Karim Ansarifard`,pos:`ANG`}],group:`G`,flag:`🇮🇷`},Neuseeland:{coach:`Darren Bazeley`,system:`4-3-3`,info:`Britisch geprägter Stil, Flanken auf physische Stürmer.`,squad:[{name:`Max Crocombe`,pos:`TW`},{name:`Oliver Sail`,pos:`TW`},{name:`Liberato Cacace`,pos:`ABW`},{name:`Michael Boxall`,pos:`ABW`},{name:`Tommy Smith`,pos:`ABW`},{name:`Tyler Bindon`,pos:`ABW`},{name:`Matthew Garbett`,pos:`MF`},{name:`Marko Stamenić`,pos:`MF`},{name:`Joe Bell`,pos:`MF`},{name:`Ryan Thomas`,pos:`MF`},{name:`Chris Wood`,pos:`ANG`},{name:`Ben Waine`,pos:`ANG`},{name:`Alex Greive`,pos:`ANG`},{name:`Kosta Barbarouses`,pos:`ANG`}],group:`G`,flag:`🇳🇿`},Spanien:{coach:`Luis de la Fuente`,system:`4-3-3`,info:`Ständiger Ballbesitz, hohes Kurzpassspiel, junge Flügelzange.`,squad:[{name:`Unai Simón`,pos:`TW`},{name:`David Raya`,pos:`TW`},{name:`Dani Carvajal`,pos:`ABW`},{name:`Aymeric Laporte`,pos:`ABW`},{name:`Robin Le Normand`,pos:`ABW`},{name:`Alejandro Balde`,pos:`ABW`},{name:`Pau Cubarsí`,pos:`ABW`},{name:`Rodri`,pos:`MF`},{name:`Pedri`,pos:`MF`},{name:`Mikel Merino`,pos:`MF`},{name:`Fabián Ruiz`,pos:`MF`},{name:`Martín Zubimendi`,pos:`MF`},{name:`Gavi`,pos:`MF`},{name:`Lamine Yamal`,pos:`ANG`},{name:`Nico Williams`,pos:`ANG`},{name:`Álvaro Morata`,pos:`ANG`},{name:`Mikel Oyarzabal`,pos:`ANG`},{name:`Ferran Torres`,pos:`ANG`}],group:`H`,flag:`🇪🇸`},"Kap Verde":{coach:`Bubista`,system:`4-3-3`,info:`Sehr spielfreudig, technisch starke Dribbler.`,squad:[{name:`Bruno Varela`,pos:`TW`},{name:`Logan Costa`,pos:`ABW`},{name:`Roberto Lopes`,pos:`ABW`},{name:`João Correia`,pos:`ABW`},{name:`Ryan Mendes`,pos:`MF`},{name:`Jónatas Santos`,pos:`MF`},{name:`Kenny Rocha`,pos:`MF`},{name:`Jovane Cabral`,pos:`ANG`},{name:`Garry Rodrigues`,pos:`ANG`},{name:`Gilson Tavares`,pos:`ANG`},{name:`Carlos Fortes`,pos:`ANG`},{name:`Bebé`,pos:`ANG`}],group:`H`,flag:`🇨🇻`},"Saudi-Arabien":{coach:`Roberto Mancini`,system:`3-5-2`,info:`Taktisch diszipliniert, enge Räume im Zentrum.`,squad:[{name:`Mohamed Al-Owais`,pos:`TW`},{name:`Nawaf Al-Aqidi`,pos:`TW`},{name:`Saud Abdulhamid`,pos:`ABW`},{name:`Ali Al-Bulaihi`,pos:`ABW`},{name:`Hassan Tambakti`,pos:`ABW`},{name:`Yasser Al-Shahrani`,pos:`ABW`},{name:`Salem Al-Dawsari`,pos:`MF`},{name:`Mohamed Kanno`,pos:`MF`},{name:`Abdulrahman Ghareeb`,pos:`MF`},{name:`Firas Al-Buraikan`,pos:`ANG`},{name:`Saleh Al-Shehri`,pos:`ANG`},{name:`Abdullah Radif`,pos:`ANG`},{name:`Marwan Al-Sahafi`,pos:`ANG`}],group:`H`,flag:`🇸🇦`},Uruguay:{coach:`Marcelo Bielsa`,system:`4-2-3-1`,info:`Garra Charrúa: Extrem aggressives Pressing, hohe Intensität.`,squad:[{name:`Sergio Rochet`,pos:`TW`},{name:`Franco Israel`,pos:`TW`},{name:`Ronald Araújo`,pos:`ABW`},{name:`José María Giménez`,pos:`ABW`},{name:`Mathías Olivera`,pos:`ABW`},{name:`Nahitan Nández`,pos:`ABW`},{name:`Guillermo Varela`,pos:`ABW`},{name:`Federico Valverde`,pos:`MF`},{name:`Rodrigo Bentancur`,pos:`MF`},{name:`Manuel Ugarte`,pos:`MF`},{name:`Giorgian de Arrascaeta`,pos:`MF`},{name:`Nicolás de la Cruz`,pos:`MF`},{name:`Darwin Núñez`,pos:`ANG`},{name:`Facundo Pellistri`,pos:`ANG`},{name:`Brian Rodríguez`,pos:`ANG`},{name:`Facundo Torres`,pos:`ANG`}],group:`H`,flag:`🇺🇾`},Frankreich:{coach:`Didier Deschamps`,system:`4-2-3-1`,info:`Solide Absicherung, individuelle Weltklasse im Angriff.`,squad:[{name:`Mike Maignan`,pos:`TW`},{name:`Brice Samba`,pos:`TW`},{name:`William Saliba`,pos:`ABW`},{name:`Dayot Upamecano`,pos:`ABW`},{name:`Ibrahima Konaté`,pos:`ABW`},{name:`Jules Koundé`,pos:`ABW`},{name:`Theo Hernández`,pos:`ABW`},{name:`Benjamin Pavard`,pos:`ABW`},{name:`Antoine Griezmann`,pos:`MF`},{name:`Aurélien Tchouaméni`,pos:`MF`},{name:`Adrien Rabiot`,pos:`MF`},{name:`Eduardo Camavinga`,pos:`MF`},{name:`Warren Zaïre-Emery`,pos:`MF`},{name:`Kylian Mbappé`,pos:`ANG`},{name:`Ousmane Dembélé`,pos:`ANG`},{name:`Marcus Thuram`,pos:`ANG`},{name:`Randal Kolo Muani`,pos:`ANG`},{name:`Kingsley Coman`,pos:`ANG`}],group:`I`,flag:`🇫🇷`},Senegal:{coach:`Aliou Cissé`,system:`4-3-3`,info:`Athletisch herausragend, schnelle Außenspieler.`,squad:[{name:`Édouard Mendy`,pos:`TW`},{name:`Alfred Gomis`,pos:`TW`},{name:`Kalidou Koulibaly`,pos:`ABW`},{name:`Abdou Diallo`,pos:`ABW`},{name:`Ismaïl Jakobs`,pos:`ABW`},{name:`Formose Mendy`,pos:`ABW`},{name:`Idrissa Gueye`,pos:`MF`},{name:`Pape Matar Sarr`,pos:`MF`},{name:`Krépin Diatta`,pos:`MF`},{name:`Nampalys Mendy`,pos:`MF`},{name:`Lamine Camara`,pos:`MF`},{name:`Sadio Mané`,pos:`ANG`},{name:`Ismaïla Sarr`,pos:`ANG`},{name:`Nicolas Jackson`,pos:`ANG`},{name:`Boulaye Dia`,pos:`ANG`}],group:`I`,flag:`🇸🇳`},Irak:{coach:`Jesús Casas`,system:`4-2-3-1`,info:`Kompakte Staffelung, Konterangriffe.`,squad:[{name:`Jalal Hassan`,pos:`TW`},{name:`Fahad Talib`,pos:`TW`},{name:`Ali Adnan`,pos:`ABW`},{name:`Hussein Ali`,pos:`ABW`},{name:`Rebin Sulaka`,pos:`ABW`},{name:`Zidane Iqbal`,pos:`MF`},{name:`Ali Jasim`,pos:`MF`},{name:`Osama Rashid`,pos:`MF`},{name:`Amjad Attwan`,pos:`MF`},{name:`Ibrahim Bayesh`,pos:`MF`},{name:`Aymen Hussein`,pos:`ANG`},{name:`Ali Al-Hamadi`,pos:`ANG`},{name:`Bashar Resan`,pos:`MF`}],group:`I`,flag:`🇮🇶`},Norwegen:{coach:`Ståle Solbakken`,system:`4-3-3`,info:`Nordische Kompaktheit gepaart mit absoluten Superstars.`,squad:[{name:`Ørjan Nyland`,pos:`TW`},{name:`Mathias Dyngeland`,pos:`TW`},{name:`Kristoffer Ajer`,pos:`ABW`},{name:`Julian Ryerson`,pos:`ABW`},{name:`Marcus Holmgren Pedersen`,pos:`ABW`},{name:`Fredrik Björkan`,pos:`ABW`},{name:`Martin Ødegaard`,pos:`MF`},{name:`Sander Berge`,pos:`MF`},{name:`Morten Thorsby`,pos:`MF`},{name:`Patrick Berg`,pos:`MF`},{name:`Oscar Bobb`,pos:`MF`},{name:`Erling Haaland`,pos:`ANG`},{name:`Alexander Sørloth`,pos:`ANG`},{name:`Jørgen Strand Larsen`,pos:`ANG`},{name:`Antonio Nusa`,pos:`ANG`}],group:`I`,flag:`🇳🇴`},Argentinien:{coach:`Lionel Scaloni`,system:`4-3-3`,info:`Agressives Gegenpressing, absolute Kontrolle im Mittelfeld.`,squad:[{name:`Emiliano Martínez`,pos:`TW`},{name:`Gerónimo Rulli`,pos:`TW`},{name:`Cristian Romero`,pos:`ABW`},{name:`Nicolás Otamendi`,pos:`ABW`},{name:`Lisandro Martínez`,pos:`ABW`},{name:`Nahuel Molina`,pos:`ABW`},{name:`Nicolás Tagliafico`,pos:`ABW`},{name:`Marcos Acuña`,pos:`ABW`},{name:`Alexis Mac Allister`,pos:`MF`},{name:`Rodrigo De Paul`,pos:`MF`},{name:`Enzo Fernández`,pos:`MF`},{name:`Leandro Paredes`,pos:`MF`},{name:`Giovani Lo Celso`,pos:`MF`},{name:`Lionel Messi`,pos:`ANG`},{name:`Julián Álvarez`,pos:`ANG`},{name:`Lautaro Martínez`,pos:`ANG`},{name:`Ángel Di María`,pos:`MF`},{name:`Alejandro Garnacho`,pos:`ANG`}],group:`J`,flag:`🇦🇷`},Algerien:{coach:`Vladimir Petković`,system:`4-3-3`,info:`Technisch hochbegabt, Fokus auf Flügelspiel.`,squad:[{name:`Rais M'Bolhi`,pos:`TW`},{name:`Mustapha Zeghba`,pos:`TW`},{name:`Ramy Bensebaini`,pos:`ABW`},{name:`Aïssa Mandi`,pos:`ABW`},{name:`Rayan Aït-Nouri`,pos:`ABW`},{name:`Kévin Van Den Kerkhof`,pos:`ABW`},{name:`Ismaël Bennacer`,pos:`MF`},{name:`Ramiz Zerrouki`,pos:`MF`},{name:`Hicham Boudaoui`,pos:`MF`},{name:`Farès Chaïbi`,pos:`MF`},{name:`Riyad Mahrez`,pos:`ANG`},{name:`Islam Slimani`,pos:`ANG`},{name:`Mohamed El Amine Amoura`,pos:`ANG`},{name:`Saïd Benrahma`,pos:`ANG`},{name:`Adam Ounas`,pos:`ANG`}],group:`J`,flag:`🇩🇿`},Österreich:{coach:`Ralf Rangnick`,system:`4-2-3-1`,info:`Red-Bull-Schule: Aggressives Angriffspressing, hohes Tempo.`,squad:[{name:`Alexander Schlager`,pos:`TW`},{name:`Patrick Pentz`,pos:`TW`},{name:`Stefan Posch`,pos:`ABW`},{name:`Philipp Lienhart`,pos:`ABW`},{name:`Kevin Danso`,pos:`ABW`},{name:`Max Wöber`,pos:`ABW`},{name:`Gernot Trauner`,pos:`ABW`},{name:`Marcel Sabitzer`,pos:`MF`},{name:`Konrad Laimer`,pos:`MF`},{name:`Christoph Baumgartner`,pos:`MF`},{name:`Florian Grillitsch`,pos:`MF`},{name:`Nicolas Seiwald`,pos:`MF`},{name:`Alexander Prass`,pos:`MF`},{name:`Marko Arnautović`,pos:`ANG`},{name:`Michael Gregoritsch`,pos:`ANG`},{name:`Karim Onisiwo`,pos:`ANG`},{name:`Junior Adamu`,pos:`ANG`}],group:`J`,flag:`🇦🇹`},Jordanien:{coach:`Hussein Ammouta`,system:`3-4-2-1`,info:`Schnelles Umschaltspiel nach Ballgewinn tief in der eigenen Hälfte.`,squad:[{name:`Yazeed Abulaila`,pos:`TW`},{name:`Ahmed Al-Suaileh`,pos:`TW`},{name:`Ehsan Haddad`,pos:`ABW`},{name:`Abdallah Nasib`,pos:`ABW`},{name:`Salem Al-Ajalin`,pos:`ABW`},{name:`Yazan Al-Arab`,pos:`ABW`},{name:`Nizar Al-Rashdan`,pos:`MF`},{name:`Rajaei Ayed`,pos:`MF`},{name:`Mahmoud Al-Mardi`,pos:`MF`},{name:`Ibrahim Sadeh`,pos:`MF`},{name:`Musa Al-Taamari`,pos:`ANG`},{name:`Yazan Al-Naimat`,pos:`ANG`},{name:`Hamza Al-Saifi`,pos:`ANG`}],group:`J`,flag:`🇯🇴`},Portugal:{coach:`Roberto Martínez`,system:`4-3-3`,info:`Enorme Kaderbreite, ballbesitzdominant, starke Flügel.`,squad:[{name:`Diogo Costa`,pos:`TW`},{name:`Rui Patrício`,pos:`TW`},{name:`Rúben Dias`,pos:`ABW`},{name:`Nélson Semedo`,pos:`ABW`},{name:`Nuno Mendes`,pos:`ABW`},{name:`Diogo Dalot`,pos:`ABW`},{name:`Gonçalo Inácio`,pos:`ABW`},{name:`António Silva`,pos:`ABW`},{name:`Bruno Fernandes`,pos:`MF`},{name:`Bernardo Silva`,pos:`MF`},{name:`João Palhinha`,pos:`MF`},{name:`Vitinha`,pos:`MF`},{name:`Matheus Nunes`,pos:`MF`},{name:`Cristiano Ronaldo`,pos:`ANG`},{name:`Rafael Leão`,pos:`ANG`},{name:`João Félix`,pos:`ANG`},{name:`Diogo Jota`,pos:`ANG`},{name:`Gonçalo Ramos`,pos:`ANG`}],group:`K`,flag:`🇵🇹`},"DR Kongo":{coach:`Sébastien Desabre`,system:`4-2-3-1`,info:`Körperlich robust, zielstrebiges Spiel in die Spitze.`,squad:[{name:`Lionel Mpasi`,pos:`TW`},{name:`Baggio Siadi`,pos:`TW`},{name:`Chancel Mbemba`,pos:`ABW`},{name:`Gédéon Kalulu`,pos:`ABW`},{name:`Dylan Batubinsika`,pos:`ABW`},{name:`Samuel Moutoussamy`,pos:`MF`},{name:`Gaël Kakuta`,pos:`MF`},{name:`Edo Kayembe`,pos:`MF`},{name:`Théo Bongonda`,pos:`MF`},{name:`Yoane Wissa`,pos:`ANG`},{name:`Meschak Elia`,pos:`ANG`},{name:`Cédric Bakambu`,pos:`ANG`},{name:`Fiston Mayele`,pos:`ANG`}],group:`K`,flag:`🇨🇩`},Usbekistan:{coach:`Srečko Katanec`,system:`3-4-3`,info:`Diszipliniert, defensiv sehr stabil.`,squad:[{name:`Utkir Yusupov`,pos:`TW`},{name:`Abduvohid Nematov`,pos:`TW`},{name:`Rustam Ashurmatov`,pos:`ABW`},{name:`Farrukh Sayfiev`,pos:`ABW`},{name:`Khojiakbar Alijonov`,pos:`ABW`},{name:`Umar Eshmurodov`,pos:`ABW`},{name:`Jaloliddin Masharipov`,pos:`MF`},{name:`Otabek Shukurov`,pos:`MF`},{name:`Abbosbek Fayzullaev`,pos:`MF`},{name:`Oston Urunov`,pos:`MF`},{name:`Eldor Shomurodov`,pos:`ANG`},{name:`Azizjon Ganiev`,pos:`MF`},{name:`Bobur Abdikholikov`,pos:`ANG`}],group:`K`,flag:`🇺🇿`},Kolumbien:{coach:`Néstor Lorenzo`,system:`4-2-3-1`,info:`Technisch brillant, unberechenbar im letzten Drittel.`,squad:[{name:`David Ospina`,pos:`TW`},{name:`Camilo Vargas`,pos:`TW`},{name:`Davinson Sánchez`,pos:`ABW`},{name:`Yerry Mina`,pos:`ABW`},{name:`Johan Mojica`,pos:`ABW`},{name:`Daniel Muñoz`,pos:`ABW`},{name:`James Rodríguez`,pos:`MF`},{name:`Jhon Arias`,pos:`MF`},{name:`Jefferson Lerma`,pos:`MF`},{name:`Richard Ríos`,pos:`MF`},{name:`Luis Díaz`,pos:`ANG`},{name:`Rafael Santos Borré`,pos:`ANG`},{name:`Miguel Borja`,pos:`ANG`},{name:`Jhon Córdoba`,pos:`ANG`},{name:`Yaser Asprilla`,pos:`ANG`}],group:`K`,flag:`🇨🇴`},England:{coach:`Gareth Southgate`,system:`4-2-3-1`,info:`Sehr pragmatisch, hohe individuelle Qualität.`,squad:[{name:`Jordan Pickford`,pos:`TW`},{name:`Aaron Ramsdale`,pos:`TW`},{name:`Harry Maguire`,pos:`ABW`},{name:`John Stones`,pos:`ABW`},{name:`Kyle Walker`,pos:`ABW`},{name:`Luke Shaw`,pos:`ABW`},{name:`Marc Guéhi`,pos:`ABW`},{name:`Trent Alexander-Arnold`,pos:`ABW`},{name:`Declan Rice`,pos:`MF`},{name:`Jude Bellingham`,pos:`MF`},{name:`Phil Foden`,pos:`MF`},{name:`Cole Palmer`,pos:`MF`},{name:`Conor Gallagher`,pos:`MF`},{name:`Eberechi Eze`,pos:`MF`},{name:`Harry Kane`,pos:`ANG`},{name:`Bukayo Saka`,pos:`ANG`},{name:`Marcus Rashford`,pos:`ANG`},{name:`Anthony Gordon`,pos:`ANG`}],group:`L`,flag:`🏴󠁧󠁢󠁥󠁮󠁧󠁿`},Kroatien:{coach:`Zlatko Dalić`,system:`4-3-3`,info:`Erfahrenes, extrem ballsicheres Mittelfeld.`,squad:[{name:`Dominik Livaković`,pos:`TW`},{name:`Nediljko Labrović`,pos:`TW`},{name:`Joško Gvardiol`,pos:`ABW`},{name:`Borna Sosa`,pos:`ABW`},{name:`Josip Stanišić`,pos:`ABW`},{name:`Josip Juranović`,pos:`ABW`},{name:`Marin Pongračić`,pos:`ABW`},{name:`Luka Modrić`,pos:`MF`},{name:`Mateo Kovačić`,pos:`MF`},{name:`Marcel Brozović`,pos:`MF`},{name:`Luka Sučić`,pos:`MF`},{name:`Mario Pašalić`,pos:`MF`},{name:`Andrej Kramarić`,pos:`ANG`},{name:`Ivan Perišić`,pos:`ANG`},{name:`Ante Budimir`,pos:`ANG`},{name:`Bruno Petković`,pos:`ANG`}],group:`L`,flag:`🇭🇷`},Ghana:{coach:`Otto Addo`,system:`4-2-3-1`,info:`Dynamisch, starke Distanzschützen.`,squad:[{name:`Lawrence Ati-Zigi`,pos:`TW`},{name:`Richard Ofori`,pos:`TW`},{name:`Alexander Djiku`,pos:`ABW`},{name:`Mohammed Salisu`,pos:`ABW`},{name:`Daniel Amartey`,pos:`ABW`},{name:`Alidu Seidu`,pos:`ABW`},{name:`Thomas Partey`,pos:`MF`},{name:`Mohammed Kudus`,pos:`MF`},{name:`Elisha Owusu`,pos:`MF`},{name:`Inaki Williams`,pos:`ANG`},{name:`Antoine Semenyo`,pos:`ANG`},{name:`Jordan Ayew`,pos:`ANG`},{name:`Osman Bukari`,pos:`ANG`},{name:`Ernest Nuamah`,pos:`ANG`}],group:`L`,flag:`🇬🇭`},Panama:{coach:`Thomas Christiansen`,system:`5-4-1`,info:`Fokus auf Verteidigung und Standardsituationen.`,squad:[{name:`Orlando Mosquera`,pos:`TW`},{name:`Luis Mejía`,pos:`TW`},{name:`Michael Amir Murillo`,pos:`ABW`},{name:`Fidel Escobar`,pos:`ABW`},{name:`Édgar Bárcenas`,pos:`ABW`},{name:`Jorge Gutiérrez`,pos:`ABW`},{name:`Adalberto Carrasquilla`,pos:`MF`},{name:`Aníbal Godoy`,pos:`MF`},{name:`José Luis Rodríguez`,pos:`MF`},{name:`Cristian Martínez`,pos:`MF`},{name:`José Fajardo`,pos:`ANG`},{name:`Ismael Díaz`,pos:`ANG`},{name:`Eduardo Guerrero`,pos:`ANG`}],group:`L`,flag:`🇵🇦`}},matches:JSON.parse(`[{"id":1,"g":"A","md":1,"date":"2026-06-11","time":"15:00","h":"Mexiko","a":"Südafrika","v":"MEX","hs":2,"as":0},{"id":2,"g":"A","md":1,"date":"2026-06-11","time":"21:00","h":"Südkorea","a":"Tschechien","v":"GDL","hs":2,"as":1},{"id":3,"g":"B","md":1,"date":"2026-06-12","time":"15:00","h":"Kanada","a":"Bosnien-Herzegowina","v":"TOR","hs":1,"as":1},{"id":4,"g":"D","md":1,"date":"2026-06-12","time":"21:00","h":"USA","a":"Paraguay","v":"LAX","hs":4,"as":1},{"id":5,"g":"B","md":1,"date":"2026-06-13","time":"15:00","h":"Katar","a":"Schweiz","v":"SFO","hs":1,"as":1},{"id":6,"g":"C","md":1,"date":"2026-06-13","time":"18:00","h":"Haiti","a":"Schottland","v":"BOS","hs":0,"as":1},{"id":7,"g":"C","md":1,"date":"2026-06-13","time":"21:00","h":"Brasilien","a":"Marokko","v":"NYC","hs":1,"as":1},{"id":8,"g":"D","md":1,"date":"2026-06-13","time":"22:00","h":"Australien","a":"Türkei","v":"VAN","hs":2,"as":0},{"id":9,"g":"E","md":1,"date":"2026-06-14","time":"12:00","h":"Deutschland","a":"Curaçao","v":"HOU","hs":7,"as":1},{"id":10,"g":"F","md":1,"date":"2026-06-14","time":"15:00","h":"Niederlande","a":"Japan","v":"DAL","hs":2,"as":2},{"id":11,"g":"E","md":1,"date":"2026-06-14","time":"18:00","h":"Elfenbeinküste","a":"Ecuador","v":"PHI","hs":1,"as":0},{"id":12,"g":"F","md":1,"date":"2026-06-14","time":"21:00","h":"Schweden","a":"Tunesien","v":"MTY","hs":5,"as":1},{"id":13,"g":"H","md":1,"date":"2026-06-15","time":"12:00","h":"Spanien","a":"Kap Verde","v":"ATL","hs":0,"as":0},{"id":14,"g":"G","md":1,"date":"2026-06-15","time":"15:00","h":"Belgien","a":"Ägypten","v":"MIA","hs":1,"as":1},{"id":15,"g":"H","md":1,"date":"2026-06-15","time":"18:00","h":"Saudi-Arabien","a":"Uruguay","v":"HOU","hs":1,"as":1},{"id":16,"g":"G","md":1,"date":"2026-06-15","time":"21:00","h":"Iran","a":"Neuseeland","v":"SEA","hs":2,"as":2},{"id":17,"g":"I","md":1,"date":"2026-06-16","time":"15:00","h":"Frankreich","a":"Senegal","v":"NYC","hs":2,"as":1},{"id":18,"g":"I","md":1,"date":"2026-06-16","time":"18:00","h":"Irak","a":"Norwegen","v":"PHI","hs":0,"as":2},{"id":19,"g":"J","md":1,"date":"2026-06-16","time":"21:00","h":"Argentinien","a":"Algerien","v":"DAL","hs":5,"as":0},{"id":20,"g":"J","md":1,"date":"2026-06-17","time":"00:00","h":"Österreich","a":"Jordanien","v":"LAX","hs":3,"as":1},{"id":21,"g":"K","md":1,"date":"2026-06-17","time":"13:00","h":"Portugal","a":"DR Kongo","v":"HOU","hs":3,"as":0},{"id":22,"g":"L","md":1,"date":"2026-06-17","time":"16:00","h":"England","a":"Kroatien","v":"DAL","hs":2,"as":1},{"id":23,"g":"L","md":1,"date":"2026-06-17","time":"19:00","h":"Ghana","a":"Panama","v":"ATL","hs":2,"as":0},{"id":24,"g":"K","md":1,"date":"2026-06-17","time":"22:00","h":"Usbekistan","a":"Kolumbien","v":"SFO","hs":0,"as":2},{"id":25,"g":"A","md":2,"date":"2026-06-18","time":"12:00","h":"Tschechien","a":"Südafrika","v":"ATL","hs":1,"as":1},{"id":26,"g":"B","md":2,"date":"2026-06-18","time":"15:00","h":"Schweiz","a":"Bosnien-Herzegowina","v":"LAX","hs":2,"as":1},{"id":27,"g":"B","md":2,"date":"2026-06-18","time":"18:00","h":"Kanada","a":"Katar","v":"VAN","hs":2,"as":0},{"id":28,"g":"A","md":2,"date":"2026-06-18","time":"21:00","h":"Mexiko","a":"Südkorea","v":"GDL","hs":2,"as":1},{"id":29,"g":"D","md":2,"date":"2026-06-19","time":"15:00","h":"USA","a":"Australien","v":"SEA","hs":2,"as":0},{"id":30,"g":"C","md":2,"date":"2026-06-19","time":"18:00","h":"Schottland","a":"Marokko","v":"BOS","hs":0,"as":2},{"id":31,"g":"C","md":2,"date":"2026-06-19","time":"20:30","h":"Brasilien","a":"Haiti","v":"PHI","hs":4,"as":0},{"id":32,"g":"D","md":2,"date":"2026-06-19","time":"23:00","h":"Türkei","a":"Paraguay","v":"SFO","hs":1,"as":2},{"id":33,"g":"F","md":2,"date":"2026-06-20","time":"13:00","h":"Niederlande","a":"Schweden","v":"HOU"},{"id":34,"g":"E","md":2,"date":"2026-06-20","time":"16:00","h":"Deutschland","a":"Elfenbeinküste","v":"TOR"},{"id":35,"g":"E","md":2,"date":"2026-06-20","time":"20:00","h":"Ecuador","a":"Curaçao","v":"KC"},{"id":36,"g":"F","md":2,"date":"2026-06-20","time":"23:00","h":"Tunesien","a":"Japan","v":"MTY"},{"id":37,"g":"H","md":2,"date":"2026-06-21","time":"12:00","h":"Spanien","a":"Saudi-Arabien","v":"ATL"},{"id":38,"g":"G","md":2,"date":"2026-06-21","time":"15:00","h":"Belgien","a":"Iran","v":"LAX"},{"id":39,"g":"H","md":2,"date":"2026-06-21","time":"18:00","h":"Uruguay","a":"Kap Verde","v":"MIA"},{"id":40,"g":"G","md":2,"date":"2026-06-21","time":"21:00","h":"Neuseeland","a":"Ägypten","v":"VAN"},{"id":41,"g":"J","md":2,"date":"2026-06-22","time":"13:00","h":"Argentinien","a":"Österreich","v":"DAL"},{"id":42,"g":"I","md":2,"date":"2026-06-22","time":"17:00","h":"Frankreich","a":"Irak","v":"PHI"},{"id":43,"g":"I","md":2,"date":"2026-06-22","time":"20:00","h":"Norwegen","a":"Senegal","v":"NYC"},{"id":44,"g":"J","md":2,"date":"2026-06-22","time":"23:00","h":"Jordanien","a":"Algerien","v":"SFO"},{"id":45,"g":"K","md":2,"date":"2026-06-23","time":"13:00","h":"Portugal","a":"Usbekistan","v":"HOU"},{"id":46,"g":"L","md":2,"date":"2026-06-23","time":"16:00","h":"England","a":"Ghana","v":"BOS"},{"id":47,"g":"L","md":2,"date":"2026-06-23","time":"19:00","h":"Panama","a":"Kroatien","v":"TOR"},{"id":48,"g":"K","md":2,"date":"2026-06-23","time":"22:00","h":"Kolumbien","a":"DR Kongo","v":"GDL"},{"id":49,"g":"A","md":3,"date":"2026-06-24","time":"12:00","h":"Tschechien","a":"Mexiko","v":"MEX"},{"id":50,"g":"A","md":3,"date":"2026-06-24","time":"12:00","h":"Südafrika","a":"Südkorea","v":"MTY"},{"id":51,"g":"B","md":3,"date":"2026-06-24","time":"18:00","h":"Schweiz","a":"Kanada","v":"VAN"},{"id":52,"g":"B","md":3,"date":"2026-06-24","time":"18:00","h":"Bosnien-Herzegowina","a":"Katar","v":"SEA"},{"id":53,"g":"C","md":3,"date":"2026-06-24","time":"21:00","h":"Marokko","a":"Haiti","v":"NYC"},{"id":54,"g":"C","md":3,"date":"2026-06-24","time":"21:00","h":"Schottland","a":"Brasilien","v":"BOS"},{"id":55,"g":"D","md":3,"date":"2026-06-25","time":"12:00","h":"Türkei","a":"USA","v":"LAX"},{"id":56,"g":"D","md":3,"date":"2026-06-25","time":"12:00","h":"Paraguay","a":"Australien","v":"SFO"},{"id":57,"g":"E","md":3,"date":"2026-06-25","time":"18:00","h":"Curaçao","a":"Elfenbeinküste","v":"PHI"},{"id":58,"g":"E","md":3,"date":"2026-06-25","time":"18:00","h":"Ecuador","a":"Deutschland","v":"NYC"},{"id":59,"g":"F","md":3,"date":"2026-06-25","time":"21:00","h":"Japan","a":"Schweden","v":"DAL"},{"id":60,"g":"F","md":3,"date":"2026-06-25","time":"21:00","h":"Tunesien","a":"Niederlande","v":"KC"},{"id":61,"g":"G","md":3,"date":"2026-06-26","time":"12:00","h":"Ägypten","a":"Iran","v":"SEA"},{"id":62,"g":"G","md":3,"date":"2026-06-26","time":"12:00","h":"Neuseeland","a":"Belgien","v":"VAN"},{"id":63,"g":"H","md":3,"date":"2026-06-26","time":"18:00","h":"Uruguay","a":"Spanien","v":"GDL"},{"id":64,"g":"H","md":3,"date":"2026-06-26","time":"18:00","h":"Kap Verde","a":"Saudi-Arabien","v":"HOU"},{"id":65,"g":"I","md":3,"date":"2026-06-26","time":"21:00","h":"Norwegen","a":"Frankreich","v":"BOS"},{"id":66,"g":"I","md":3,"date":"2026-06-26","time":"21:00","h":"Senegal","a":"Irak","v":"TOR"},{"id":67,"g":"J","md":3,"date":"2026-06-27","time":"12:00","h":"Jordanien","a":"Argentinien","v":"DAL"},{"id":68,"g":"J","md":3,"date":"2026-06-27","time":"12:00","h":"Algerien","a":"Österreich","v":"KC"},{"id":69,"g":"K","md":3,"date":"2026-06-27","time":"18:00","h":"DR Kongo","a":"Usbekistan","v":"ATL"},{"id":70,"g":"K","md":3,"date":"2026-06-27","time":"18:00","h":"Kolumbien","a":"Portugal","v":"MIA"},{"id":71,"g":"L","md":3,"date":"2026-06-27","time":"21:00","h":"England","a":"Panama","v":"NYC"},{"id":72,"g":"L","md":3,"date":"2026-06-27","time":"21:00","h":"Kroatien","a":"Ghana","v":"PHI"}]`),apiKey:``,liveDataLoaded:!1,liveDataError:!1,liveMatches:[],init(){this.apiKey=localStorage.getItem(e.LS_KEY_API)||``;let t=localStorage.getItem(e.LS_KEY_MATCHES);if(t)try{let e=JSON.parse(t);this.matches.forEach(t=>{let n=e.find(e=>e.id===t.id);n&&n.hs!==void 0&&(t.hs=n.hs,t.as=n.as)})}catch(e){console.error(`Error loading saved matches`,e)}},async loadLiveData(){try{let e=await a();return!e||e.length===0?(this.liveDataError=!0,!1):(this.liveMatches=e,e.forEach(e=>{let t=this.matches.find(t=>t.h===e.home&&t.a===e.away||t.h===e.away&&t.a===e.home);if(!t)return;let n=t.h===e.away;t.espnId=e.espnId,e.state===`in`?(t.liveState=`live`,t.liveClock=e.liveClock||``,t.livePeriod=e.livePeriod||0,e.homeScore!==void 0&&(t.hs=n?e.awayScore:e.homeScore,t.as=n?e.homeScore:e.awayScore,t.isLiveScore=!0)):e.completed?(t.liveState=`completed`,t.hs=n?e.awayScore:e.homeScore,t.as=n?e.homeScore:e.awayScore,t.isApiResult=!0,delete t.isLiveScore,delete t.liveClock,delete t.livePeriod):t.liveState=`scheduled`,e.details&&(t.details=e.details),e.homeLogo&&(t.homeLogo=n?e.awayLogo:e.homeLogo,t.awayLogo=n?e.homeLogo:e.awayLogo)}),this.persistMatches(),this.liveDataLoaded=!0,this.liveDataError=!1,!0)}catch(e){return console.error(`[Store] loadLiveData failed:`,e),this.liveDataError=!0,!1}},async refreshLiveData(){return c(),this.loadLiveData()},hasLiveMatch(){return this.matches.some(e=>e.liveState===`live`)},getMatchDetails(e){return this.matches.find(t=>t.id===e)?.details||[]},setApiKey(t){this.apiKey=t,t?localStorage.setItem(e.LS_KEY_API,t):localStorage.removeItem(e.LS_KEY_API)},saveMatchResult(e,t,n){let r=this.matches.find(t=>t.id===e);r&&(r.hs=t,r.as=n,this.persistMatches())},persistMatches(){let t=this.matches.filter(e=>e.hs!==void 0).map(e=>({id:e.id,hs:e.hs,as:e.as}));localStorage.setItem(e.LS_KEY_MATCHES,JSON.stringify(t))},getMatch(e){return this.matches.find(t=>t.id===e)},isMatchPlayed(e){return e.hs!==void 0&&e.as!==void 0},getGroupStandings(e){let t=Object.keys(this.teams).filter(t=>this.teams[t].group===e).map(e=>({team:e,p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}));return this.matches.filter(t=>t.g===e&&this.isMatchPlayed(t)).forEach(e=>{let n=t.find(t=>t.team===e.h),r=t.find(t=>t.team===e.a);n&&r&&(n.p++,r.p++,n.gf+=e.hs,n.ga+=e.as,r.gf+=e.as,r.ga+=e.hs,n.gd=n.gf-n.ga,r.gd=r.gf-r.ga,e.hs>e.as?(n.w++,n.pts+=3,r.l++):e.hs<e.as?(r.w++,r.pts+=3,n.l++):(n.d++,r.d++,n.pts+=1,r.pts+=1))}),t.sort((e,t)=>t.pts===e.pts?t.gd===e.gd?t.gf-e.gf:t.gd-e.gd:t.pts-e.pts),t},getThirdPlaceRanking(){let e=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`],t=[];return e.forEach(e=>{let n=this.getGroupStandings(e);n.length>=3&&n[2].p>0&&t.push({...n[2],group:e})}),t.sort((e,t)=>t.pts===e.pts?t.gd===e.gd?t.gf-e.gf:t.gd-e.gd:t.pts-e.pts),t.forEach((e,t)=>{e.qualified=t<8,e.rank=t+1}),t}},u={get matchSelect(){return document.getElementById(`match-select`)},get matchInfoCard(){return document.getElementById(`match-info-card`)},get matchTeams(){return document.getElementById(`match-teams`)},get matchGroupBadge(){return document.getElementById(`match-group-badge`)},get matchMdBadge(){return document.getElementById(`match-md-badge`)},get matchDate(){return document.getElementById(`match-date`)},get matchVenue(){return document.getElementById(`match-venue`)},get matchScore(){return document.getElementById(`match-score-display`)},get matchStatus(){return document.getElementById(`match-status-badge`)},get matchWeather(){return document.getElementById(`match-weather`)},get matchWeatherLoad(){return document.getElementById(`match-weather-loading`)},get customPrompt(){return document.getElementById(`custom-prompt`)},get startBtn(){return document.getElementById(`start-btn`)},get btnIconPlay(){return document.getElementById(`btn-icon-play`)},get btnSpinner(){return document.getElementById(`btn-spinner`)},get btnText(){return document.getElementById(`btn-text`)},get outputSection(){return document.getElementById(`output-section`)},get reportTitle(){return document.getElementById(`report-title`)},get reportMeta(){return document.getElementById(`report-meta`)},get reportContent(){return document.getElementById(`report-content`)},get loadingSection(){return document.getElementById(`loading-section`)},get errorSection(){return document.getElementById(`error-section`)},get errorMessage(){return document.getElementById(`error-message`)},get toastContainer(){return document.getElementById(`toast-container`)},get settingsBtn(){return document.getElementById(`settings-btn`)},get settingsModal(){return document.getElementById(`settings-modal`)},get settingsClose(){return document.getElementById(`settings-close`)},get apiKeyInput(){return document.getElementById(`api-key-input`)},get apiKeySave(){return document.getElementById(`api-key-save`)}};function d(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var f=d();function p(e){f=e}var m={exec:()=>null};function h(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function g(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(v.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var _=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),v={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:h(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:h(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:h(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:h(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:h(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:h(e=>RegExp(`^ {0,${e}}>`))},y=/^(?:[ \t]*(?:\n|$))+/,b=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ee=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,x=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,te=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,S=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ne=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,re=g(ne).replace(/bull/g,S).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),ie=g(ne).replace(/bull/g,S).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),C=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ae=/^[^\n]+/,w=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,oe=g(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,w).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),se=g(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,S).getRegex(),T=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,E=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ce=g(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,E).replace(`tag`,T).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),le=g(C).replace(`hr`,x).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,T).getRegex(),ue={blockquote:g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,le).getRegex(),code:b,def:oe,fences:ee,heading:te,hr:x,html:ce,lheading:re,list:se,newline:y,paragraph:le,table:m,text:ae},de=g(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,x).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,T).getRegex(),fe={...ue,lheading:ie,table:de,paragraph:g(C).replace(`hr`,x).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,de).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,T).getRegex()},pe={...ue,html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,E).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:m,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(C).replace(`hr`,x).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,re).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},me=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,he=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ge=/^( {2,}|\\)\n(?!\s*$)/,_e=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,D=/[\p{P}\p{S}]/u,O=/[\s\p{P}\p{S}]/u,k=/[^\s\p{P}\p{S}]/u,ve=g(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,O).getRegex(),ye=/(?!~)[\p{P}\p{S}]/u,be=/(?!~)[\s\p{P}\p{S}]/u,xe=/(?:[^\s\p{P}\p{S}]|~)/u,Se=g(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,_?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Ce=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,we=g(Ce,`u`).replace(/punct/g,D).getRegex(),Te=g(Ce,`u`).replace(/punct/g,ye).getRegex(),Ee=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,De=g(Ee,`gu`).replace(/notPunctSpace/g,k).replace(/punctSpace/g,O).replace(/punct/g,D).getRegex(),Oe=g(Ee,`gu`).replace(/notPunctSpace/g,xe).replace(/punctSpace/g,be).replace(/punct/g,ye).getRegex(),ke=g(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,k).replace(/punctSpace/g,O).replace(/punct/g,D).getRegex(),Ae=g(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,D).getRegex(),je=g(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,k).replace(/punctSpace/g,O).replace(/punct/g,D).getRegex(),Me=g(/\\(punct)/,`gu`).replace(/punct/g,D).getRegex(),Ne=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Pe=g(E).replace(`(?:-->|$)`,`-->`).getRegex(),Fe=g(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Pe).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),A=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Ie=g(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,A).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Le=g(/^!?\[(label)\]\[(ref)\]/).replace(`label`,A).replace(`ref`,w).getRegex(),Re=g(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,w).getRegex(),ze=g(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Le).replace(`nolink`,Re).getRegex(),Be=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,j={_backpedal:m,anyPunctuation:Me,autolink:Ne,blockSkip:Se,br:ge,code:he,del:m,delLDelim:m,delRDelim:m,emStrongLDelim:we,emStrongRDelimAst:De,emStrongRDelimUnd:ke,escape:me,link:Ie,nolink:Re,punctuation:ve,reflink:Le,reflinkSearch:ze,tag:Fe,text:_e,url:m},Ve={...j,link:g(/^!?\[(label)\]\((.*?)\)/).replace(`label`,A).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,A).getRegex()},M={...j,emStrongRDelimAst:Oe,emStrongLDelim:Te,delLDelim:Ae,delRDelim:je,url:g(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Be).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:g(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Be).getRegex()},He={...M,br:g(ge).replace(`{2,}`,`*`).getRegex(),text:g(M.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},N={normal:ue,gfm:fe,pedantic:pe},P={normal:j,gfm:M,breaks:He,pedantic:Ve},Ue={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},We=e=>Ue[e];function F(e,t){if(t){if(v.escapeTest.test(e))return e.replace(v.escapeReplace,We)}else if(v.escapeTestNoEncode.test(e))return e.replace(v.escapeReplaceNoEncode,We);return e}function Ge(e){try{e=encodeURI(e).replace(v.percentDecode,`%`)}catch{return null}return e}function Ke(e,t){let n=e.replace(v.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(v.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(v.slashPipe,`|`);return n}function I(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function qe(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&v.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Je(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Ye(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Xe(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Ze(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var L=class{options;rules;lexer;constructor(e){this.options=e||f}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:qe(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ze(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=I(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:I(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:I(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=I(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Ye(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=qe(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:I(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Ke(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:I(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Ke(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:I(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=I(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Je(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Xe(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Xe(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},R=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||f,this.options.tokenizer=this.options.tokenizer||new L,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:v,block:N.normal,inline:P.normal};this.options.pedantic?(t.block=N.pedantic,t.inline=P.pedantic):this.options.gfm&&(t.block=N.gfm,this.options.breaks?t.inline=P.breaks:t.inline=P.gfm),this.tokenizer.rules=t}static get rules(){return{block:N,inline:P}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(v.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(v.tabCharGlobal,`    `).replace(v.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},z=class{options;parser;constructor(e){this.options=e||f}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(v.notSpaceStart)?.[0],i=e.replace(v.endingNewline,``)+`
`;return r?`<pre><code class="language-`+F(r)+`">`+(n?i:F(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:F(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${F(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Ge(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+F(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Ge(e);if(i===null)return F(n);e=i;let a=`<img src="${e}" alt="${F(n)}"`;return t&&(a+=` title="${F(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:F(e.text)}},B=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},V=class e{options;renderer;textRenderer;constructor(e){this.options=e||f,this.options.renderer=this.options.renderer||new z,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new B}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},H=class{options;block;constructor(e){this.options=e||f}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?R.lex:R.lexInline}provideParser(e=this.block){return e?V.parse:V.parseInline}},U=new class{defaults=d();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=V;Renderer=z;TextRenderer=B;Lexer=R;Tokenizer=L;Hooks=H;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new z(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new L(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new H;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];H.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&H.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return R.lex(e,t??this.defaults)}parser(e,t){return V.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?R.lex:R.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?V.parse:V.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?R.lex:R.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?V.parse:V.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+F(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function W(e,t){return U.parse(e,t)}W.options=W.setOptions=function(e){return U.setOptions(e),W.defaults=U.defaults,p(W.defaults),W},W.getDefaults=d,W.defaults=f,W.use=function(...e){return U.use(...e),W.defaults=U.defaults,p(W.defaults),W},W.walkTokens=function(e,t){return U.walkTokens(e,t)},W.parseInline=U.parseInline,W.Parser=V,W.parser=V.parse,W.Renderer=z,W.TextRenderer=B,W.Lexer=R,W.lexer=R.lex,W.Tokenizer=L,W.Hooks=H,W.parse=W,W.options,W.setOptions,W.use,W.walkTokens,W.parseInline,V.parse,R.lex;function G(e,t=`error`){let n={error:`bg-red-500/90 border-red-400/30`,success:`bg-emerald-500/90 border-emerald-400/30`,info:`bg-sky-500/90 border-sky-400/30`},r=document.createElement(`div`);r.className=`pointer-events-auto px-5 py-3 rounded-xl border ${n[t]||n.info} text-white text-sm font-medium shadow-2xl backdrop-blur-sm toast-enter`,r.textContent=e,u.toastContainer.appendChild(r),setTimeout(()=>{r.style.transition=`opacity 0.3s, transform 0.3s`,r.style.opacity=`0`,r.style.transform=`translateY(-10px)`,setTimeout(()=>r.remove(),300)},4e3)}var Qe={},K=null;function q(e,t){Qe[e]=t}function J(e){window.location.hash=e}function $e(e=`#/simulator`){let t=()=>{let t=window.location.hash||e,n=t.split(`/`).slice(0,2).join(`/`),r=t.split(`/`).slice(2).join(`/`)||null,i=Qe[n];i?(K&&K.destroy&&K.destroy(),K=i(r),et(n)):window.location.hash=e};window.addEventListener(`hashchange`,t),window.location.hash||(window.location.hash=e),t()}function et(e){document.querySelectorAll(`[data-tab]`).forEach(t=>{let n=t.dataset.tab===e;t.classList.toggle(`tab-active`,n),t.classList.toggle(`text-white`,n),t.classList.toggle(`text-txt-dim`,!n)})}async function tt(e,t,n,r){let i=r[e];if(!i)return null;try{let e=new Date(`${t}T${n}:00`),r=e.getHours(),a=(e-new Date)/(1e3*60*60*24),o=``;o=a<-5?`https://archive-api.open-meteo.com/v1/archive?latitude=${i.lat}&longitude=${i.lon}&start_date=${t}&end_date=${t}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=${i.tz}`:`https://api.open-meteo.com/v1/forecast?latitude=${i.lat}&longitude=${i.lon}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=${i.tz}`;let s=await fetch(o);if(!s.ok)return null;let c=await s.json(),l=0;if(c.hourly&&c.hourly.time){let e=`${t}T${String(r).padStart(2,`0`)}:00`;l=c.hourly.time.findIndex(t=>t.startsWith(e)),l===-1&&(l=12)}let u=c.hourly.weather_code[l],d=`🌤️`,f=`Heiter`;return u===0?(d=`☀️`,f=`Klar`):u<=3?(d=`🌤️`,f=`Leicht bewölkt`):u<=49?(d=`🌫️`,f=`Nebel`):u<=69?(d=`🌧️`,f=`Regen`):u<=79?(d=`❄️`,f=`Schnee`):(d=`⛈️`,f=`Gewitter`),{temp:Math.round(c.hourly.temperature_2m[l]),humidity:Math.round(c.hourly.relative_humidity_2m[l]),wind:Math.round(c.hourly.wind_speed_10m[l]),emoji:d,text:f}}catch(e){return console.error(`Weather fetch error:`,e),null}}async function nt(t,n){if(!n)throw Error(`Kein API-Key hinterlegt. Bitte in den Einstellungen eintragen.`);let r=`https://generativelanguage.googleapis.com/v1beta/models/${e.GEMINI_MODEL}:generateContent?key=${n}`,i=await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({contents:[{parts:[{text:t}]}],generationConfig:{temperature:.9,topP:.95,topK:40,maxOutputTokens:8192}})});if(!i.ok){let e=(await i.json().catch(()=>({})))?.error?.message||`HTTP ${i.status}`;throw i.status===401||i.status===403?Error(`Ungültiger API-Key.`):i.status===429?Error(`Rate-Limit erreicht. Bitte kurz warten.`):Error(`API-Fehler: ${e}`)}let a=await i.json(),o=a?.candidates?.[0]?.content?.parts?.[0]?.text;if(!o)throw a?.candidates?.[0]?.finishReason===`SAFETY`?Error(`Antwort aus Sicherheitsgründen blockiert.`):Error(`Keine Antwort von der API erhalten.`);return o}var Y=null,rt=null;function X(e,t){let[n,r,i]=e.split(`-`).map(Number),[a,o]=t.split(`:`).map(Number);return`${[`So`,`Mo`,`Di`,`Mi`,`Do`,`Fr`,`Sa`][new Date(n,r-1,i).getDay()]}, ${i}. ${[`Jan`,`Feb`,`Mär`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Okt`,`Nov`,`Dez`][r-1]} ${n} · ${String(a).padStart(2,`0`)}:${String(o).padStart(2,`0`)} ET`}function it(e){let t=l.getGroupStandings(e),n=`Gruppe ${e}:\n`;return n+=`Platz | Team              | Sp | S | U | N | Tore  | TD  | Pkt
`,n+=`------|-------------------|----|----|----|----|-------|-----|----
`,t.forEach((e,t)=>{n+=`${t+1}.    | ${e.team.padEnd(17)} | ${e.p}  | ${e.w}  | ${e.d}  | ${e.l}  | ${e.gf}:${e.ga}   | ${e.gd>=0?`+`:``}${e.gd}  | ${e.pts}\n`}),n}function at(e){if(!e||e.length===0)return`Keine Kaderdaten verfügbar`;let t={TW:[],ABW:[],MF:[],ANG:[]};e.forEach(e=>{let n=e.pos||`MF`;t[n]?t[n].push(e.name):t[n]=[e.name]});let n=``;return t.TW.length&&(n+=`- Torhüter: ${t.TW.join(`, `)}\n`),t.ABW.length&&(n+=`- Abwehr: ${t.ABW.join(`, `)}\n`),t.MF.length&&(n+=`- Mittelfeld: ${t.MF.join(`, `)}\n`),t.ANG.length&&(n+=`- Angriff: ${t.ANG.join(`, `)}\n`),n.trim()}function ot(e){return l.matches.filter(t=>(t.h===e||t.a===e)&&l.isMatchPlayed(t)).map(t=>{let n=t.h===e,r=n?t.a:t.h,i=n?`${t.hs}:${t.as}`:`${t.as}:${t.hs}`;return`${(n?t.hs>t.as:t.as>t.hs)?`S`:t.hs===t.as?`U`:`N`} ${i} vs. ${r} (Spieltag ${t.md})`}).join(`
`)}function st(){return`**Turnierformat WM 2026:**
- 12 Gruppen (A–L) mit je 4 Teams
- Die Gruppenersten und -zweiten (24 Teams) sind direkt für die K.O.-Runde qualifiziert
- Die 8 besten Gruppendritten erreichen ebenfalls das Sechzehntelfinale (Runde der 32)
- Ab dem Sechzehntelfinale geht es im einfachen K.O.-System weiter: Achtelfinale → Viertelfinale → Halbfinale → Finale
- Platz 3 wird in einem separaten Spiel ermittelt`}function ct(){return`**Historische K.O.-Muster bei Weltmeisterschaften:**
- In K.O.-Spielen gewinnen Gruppenerste gegen Gruppenzweite in etwa 65% der Fälle
- Spiele in der K.O.-Phase sind oft defensiver und enger als Gruppenpartien
- Circa 25–30% aller K.O.-Spiele gehen in die Verlängerung
- Elfmeterschießen entscheiden etwa 20–25% der K.O.-Spiele
- Favoriten setzen sich im Achtelfinale in etwa 70–75% der Fälle durch
- Im Halbfinale und Finale sind die Spiele meist besonders taktisch geprägt
- Die Wahrscheinlichkeit für Verlängerung steigt in den späteren Runden`}function lt(e,t,n){let r=l.venues[e.v],i=it(e.g),a=ot(e.h),o=ot(e.a),s=l.isMatchPlayed(e),c=t?`${t.emoji} ${t.text}, ${t.temp}°C, Wind: ${t.wind} km/h, Luftfeuchtigkeit: ${t.humidity}%`:`Keine Wetterdaten verfügbar`,u=l.teams[e.h]?.flag||``,d=l.teams[e.a]?.flag||``,f=st(),p=ct();if(s){let t=`Du bist ein erstklassiger Sportjournalist. Erstelle einen detaillierten, packenden Spielbericht für folgendes WM 2026 Gruppenspiel.

**WICHTIG: Deine Analyse muss ausschließlich auf den unten bereitgestellten Daten basieren. Verwende KEINE veralteten Informationen aus deinen Trainingsdaten (vor 2026) über Spieler oder Teams. Nur die hier gelisteten Kader, Ergebnisse und Tabellen sind für diesen Bericht gültig. Falls dir ein Spieler oder Team aus anderen Kontexten bekannt ist, ignoriere dieses Wissen vollständig.**

${f}

**Partie:** ${u} ${e.h} ${e.hs} : ${e.as} ${e.a} ${d}
**Gruppe:** ${e.g} · Spieltag ${e.md}
**Datum:** ${X(e.date,e.time)}
**Stadion:** ${r.name}, ${r.city}
**Wetterbedingungen:** ${c}

**Aktuelle Gruppentabelle:**
${i}

**Bisherige Turnierergebnisse ${e.h}:**
${a||`Erstes Spiel im Turnier`}

**Bisherige Turnierergebnisse ${e.a}:**
${o||`Erstes Spiel im Turnier`}

Erstelle einen realistischen, spannenden Spielbericht mit:
- **Spielverlauf** mit konkreten Torschützen (reale Spieler!) und Spielminuten, passend zum Endergebnis ${e.hs}:${e.as}
- **Taktische Analyse** beider Teams
- **Schlüsselszenen** und Wendepunkte
- **Spieler des Spiels** mit Begründung
- **Einfluss der Wetterbedingungen**
- **Stimmung im Stadion**
- **Auswirkung auf die Gruppentabelle** und Qualifikationschancen
- **Fazit und Ausblick**

Formatiere den Bericht mit Markdown. Verwende reale, aktuelle Spieler aus den bereitgestellten Kadern. Sei detailliert und emotional.`;return n&&(t+=`\n\n**Zusätzliche Anweisungen:** ${n}`),t}else{let t=l.teams[e.h],s=l.teams[e.a],m=`Du bist ein erstklassiger Fußball-Analyst. Erstelle eine detaillierte Spielprognose für folgendes WM 2026 Gruppenspiel.

**WICHTIG: Nutze AUSSCHLIESSLICH die unten bereitgestellten Daten. Verwende KEINE veralteten Informationen aus deinen Trainingsdaten (vor 2026) über Spieler oder Teams. Nur die hier gelisteten Kader, Ergebnisse, Tabellen und Turnierinformationen sind gültig. Falls du unsicher bist, ob eine Information aktuell ist – lass sie weg und beziehe dich nur auf die untenstehenden Daten.**

${f}

${p}

**Partie:** ${u} ${e.h} vs. ${e.a} ${d}
**Datum:** ${X(e.date,e.time)}
**Stadion:** ${r.name}, ${r.city}
**Wetterbedingungen:** ${c}

**Team-Insights ${e.h}:**
- Trainer: ${t.coach} | System: ${t.system}
- Spielweise: ${t.info}
**Vollständiger Kader ${e.h}:**
${at(t.squad)}

**Team-Insights ${e.a}:**
- Trainer: ${s.coach} | System: ${s.system}
- Spielweise: ${s.info}
**Vollständiger Kader ${e.a}:**
${at(s.squad)}

**Aktuelle Gruppentabelle:**
${i}

**Bisherige Turnierergebnisse ${e.h}:**
${a||`Erstes Spiel im Turnier`}

**Bisherige Turnierergebnisse ${e.a}:**
${o||`Erstes Spiel im Turnier`}

Analysiere umfassend basierend NUR auf diesen Daten:
1. **Ausgangslage & Motivation** — basierend auf der aktuellen Gruppentabelle, welche Bedeutung hat dieses Spiel für den Turnierverlauf?
2. **Kader-Analyse** — Stärken/Schwächen basierend auf dem vollständigen Kader
3. **Erwartete Aufstellungen** mit realen Spielern aus dem Kader
4. **Taktik-Analyse**
5. **Schlüsselduelle**
6. **Wettquoten & Favoritenrolle**
7. **Wetter-Einfluss** — ${c}
8. **Prognose** mit konkretem Ergebnis-Tipp (${e.h} vs. ${e.a})
9. **Auswirkung auf die Gruppen-Qualifikation**
10. **Fazit**

Formatiere alles mit Markdown. Verwende NUR Spieler aus den bereitgestellten Kadern. Sei fundiert.`;return n&&(m+=`\n\n**Zusätzliche Anweisungen:** ${n}`),m}}function ut(){rt=document.getElementById(`app-content`),rt.innerHTML=`
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
        Wähle eine Partie — die KI analysiert Kader, Taktik, Wetter, Gruppenstand und Turnierverlauf für eine fundierte Prognose oder einen packenden Spielbericht.
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
  `,dt(),ft();let e=new Date().toISOString().slice(0,10),t=l.matches.find(t=>t.date===e),n=l.matches.find(e=>!l.isMatchPlayed(e)),r=t||n||l.matches[0],i=document.getElementById(`sim-match-select`);return i.value=r.id,mt(r),{destroy(){rt.innerHTML=``}}}function dt(){let e=document.getElementById(`sim-match-select`),t={1:`Spieltag 1 · 11.–17. Juni`,2:`Spieltag 2 · 18.–23. Juni`,3:`Spieltag 3 · 24.–27. Juni`};[1,2,3].forEach(n=>{let r=document.createElement(`optgroup`);r.label=t[n],l.matches.filter(e=>e.md===n).sort((e,t)=>e.date.localeCompare(t.date)||e.time.localeCompare(t.time)).forEach(e=>{let t=document.createElement(`option`);t.value=e.id;let n=l.teams[e.h]?.flag||``,i=l.teams[e.a]?.flag||``,a=l.isMatchPlayed(e),o=e.liveState===`live`,s=``;o?s=` 🔴 ${e.hs}:${e.as}`:a&&(s=` [${e.hs}:${e.as}]`),t.textContent=`${e.date.slice(5).replace(`-`,`.`)} | ${n} ${e.h} vs ${e.a} ${i}${s}`,a&&(t.className=`text-slate-400`),r.appendChild(t)}),e.appendChild(r)})}function ft(){document.getElementById(`sim-match-select`).addEventListener(`change`,e=>{mt(l.getMatch(parseInt(e.target.value,10)))}),document.getElementById(`sim-start-btn`).addEventListener(`click`,ht)}function pt(e){let t=e.details;if(!t||t.length===0)return``;let n=t.filter(e=>e.isGoal),r=t.filter(e=>e.isYellowCard||e.isRedCard);if(n.length===0&&r.length===0)return``;let i=`<div class="mt-4 bg-bg rounded-xl border border-border p-4">`;return i+=`<h4 class="text-xs font-semibold uppercase tracking-wider text-txt-dim mb-3 flex items-center gap-1.5">
    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    Spielereignisse
  </h4>`,n.length>0&&(i+=`<div class="space-y-1.5 mb-2">`,n.forEach(e=>{let t=e.isOwnGoal?`🔴`:`⚽`,n=e.isOwnGoal?`${e.player} (ET)`:e.player;i+=`<div class="flex items-center gap-2 text-sm">
        <span class="text-xs">${t}</span>
        <span class="text-white font-medium">${n}</span>
        <span class="text-txt-muted text-xs">${e.minute}</span>
      </div>`}),i+=`</div>`),r.length>0&&(i+=`<div class="space-y-1 mt-2 pt-2 border-t border-border">`,r.forEach(e=>{let t=e.isRedCard?`🟥`:`🟨`;i+=`<div class="flex items-center gap-2 text-xs">
        <span>${t}</span>
        <span class="text-txt-dim">${e.player}</span>
        <span class="text-txt-muted">${e.minute}</span>
      </div>`}),i+=`</div>`),i+=`</div>`,i}async function mt(e){let t=document.getElementById(`sim-match-info`);if(!e){t.classList.add(`hidden`);return}let n=l.venues[e.v],r=l.isMatchPlayed(e),i=e.liveState===`live`,a=e.isApiResult===!0,o=l.teams[e.h]?.flag||``,s=l.teams[e.a]?.flag||``;document.getElementById(`sim-match-teams`).innerHTML=`
    <span class="text-2xl sm:text-3xl font-display font-black text-white">${o} ${e.h}</span>
    <span class="text-lg sm:text-xl font-bold text-txt-muted mx-3">vs</span>
    <span class="text-2xl sm:text-3xl font-display font-black text-white">${e.a} ${s}</span>
  `,document.getElementById(`sim-group-badge`).textContent=`Gruppe ${e.g}`,document.getElementById(`sim-md-badge`).textContent=`Spieltag ${e.md}`,document.getElementById(`sim-date`).textContent=X(e.date,e.time),document.getElementById(`sim-venue`).textContent=`${n.name}, ${n.city} ${n.country}`;let c=document.getElementById(`sim-score-display`),u=document.getElementById(`sim-status-badge`),d=document.getElementById(`sim-btn-text`),f=t.querySelector(`.match-events-container`);if(f&&f.remove(),i){let t=e.liveClock||``;c.innerHTML=`
      <div class="flex items-center justify-center gap-3">
        <span class="text-4xl font-display font-black text-white">${e.hs} : ${e.as}</span>
        <span class="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-xs font-bold animate-pulse border border-red-500/30">${t}</span>
      </div>
    `,c.classList.remove(`hidden`),u.textContent=`🔴 LIVE`,u.className=`px-2.5 py-0.5 rounded-md bg-red-500/10 text-red-400 text-[11px] font-bold uppercase tracking-wide border border-red-500/20 animate-pulse`,d.textContent=`Spielbericht generieren`}else if(r){let t=a?`<div class="text-[10px] text-emerald-400 mt-1 flex items-center justify-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Offizielles Ergebnis (ESPN)</div>`:``;if(c.innerHTML=`
      <span class="text-4xl font-display font-black text-white">${e.hs} : ${e.as}</span>
      ${t}
    `,c.classList.remove(`hidden`),u.textContent=`Endstand`,u.className=`px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-bold uppercase tracking-wide border border-emerald-500/20`,d.textContent=`Spielbericht generieren`,a){let t=pt(e);if(t){let e=document.createElement(`div`);e.className=`match-events-container`,e.innerHTML=t,c.after(e)}}}else{c.innerHTML=``,c.classList.add(`hidden`);let t=new Date().toISOString().slice(0,10);e.date===t?(u.textContent=`Heute`,u.className=`px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 text-[11px] font-bold uppercase tracking-wide border border-amber-500/20 animate-pulse`):(u.textContent=`Anstehend`,u.className=`px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky text-[11px] font-bold uppercase tracking-wide border border-sky/20`),d.textContent=`Spielprognose generieren`}t.classList.remove(`hidden`);let p=document.getElementById(`sim-weather`),m=document.getElementById(`sim-weather-loading`);p.classList.add(`hidden`),m.classList.remove(`hidden`),Y=await tt(e.v,e.date,e.time,l.venues),m.classList.add(`hidden`),Y?(p.innerHTML=`
      <span class="text-2xl">${Y.emoji}</span>
      <div>
        <div class="text-sm font-semibold text-white">${Y.temp}°C · ${Y.text}</div>
        <div class="text-xs text-txt-muted">Wind: ${Y.wind} km/h · Luftfeuchtigkeit: ${Y.humidity}%</div>
      </div>`,p.classList.remove(`hidden`)):(p.innerHTML=`<span class="text-2xl">❓</span><div class="text-sm text-txt-muted">Wetterdaten nicht verfügbar</div>`,p.classList.remove(`hidden`))}async function ht(){let e=document.getElementById(`settings-modal`);if(!l.apiKey){G(`Bitte hinterlege zuerst deinen Gemini API-Key in den Einstellungen.`,`error`),e.classList.remove(`hidden`);return}let t=parseInt(document.getElementById(`sim-match-select`).value,10),n=l.getMatch(t);if(!n){G(`Bitte wähle ein Spiel aus.`,`error`);return}let r=document.getElementById(`sim-custom-prompt`).value.trim(),i=lt(n,Y,r||null),a=document.getElementById(`sim-start-btn`),o=document.getElementById(`sim-btn-icon`),s=document.getElementById(`sim-btn-spinner`),c=document.getElementById(`sim-btn-text`),u=document.getElementById(`sim-loading`),d=document.getElementById(`sim-output`),f=document.getElementById(`sim-error`);a.disabled=!0,o.classList.add(`hidden`),s.classList.remove(`hidden`),c.textContent=`Generiere...`,u.classList.remove(`hidden`),d.classList.add(`hidden`),f.classList.add(`hidden`);try{let e=await nt(i,l.apiKey),t=l.isMatchPlayed(n),r=l.teams[n.h]?.flag||``,a=l.teams[n.a]?.flag||``,o=l.venues[n.v];document.getElementById(`sim-report-title`).textContent=`${r} ${n.h} vs. ${n.a} ${a}`,document.getElementById(`sim-report-meta`).textContent=`Gruppe ${n.g} · Spieltag ${n.md} · ${o.name}, ${o.city} · ${t?`Spielbericht`:`Spielprognose`}`,document.getElementById(`sim-report-content`).innerHTML=W.parse(e),f.classList.add(`hidden`),u.classList.add(`hidden`),d.classList.remove(`hidden`),d.scrollIntoView({behavior:`smooth`,block:`start`}),G(t?`Spielbericht generiert!`:`Spielprognose generiert!`,`success`)}catch(e){console.error(`Simulation error:`,e),document.getElementById(`sim-error-msg`).textContent=e.message,f.classList.remove(`hidden`),d.classList.add(`hidden`),u.classList.add(`hidden`),G(e.message,`error`)}finally{a.disabled=!1,o.classList.remove(`hidden`),s.classList.add(`hidden`);let e=l.getMatch(t);c.textContent=l.isMatchPlayed(e)?`Spielbericht generieren`:`Spielprognose generieren`}}var gt=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`];function _t(){let e=document.getElementById(`app-content`);e.innerHTML=`
    <section class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">Gruppentabellen</h2>
      <p class="text-txt-dim text-sm">Alle 12 WM-Gruppen auf einen Blick. Qualifizierte Teams sind markiert.</p>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" id="groups-grid"></div>

    <!-- Third-Place Ranking -->
    <div id="third-place-section"></div>
  `;let t=document.getElementById(`groups-grid`);return gt.forEach(e=>{let n=l.getGroupStandings(e),r=l.matches.filter(t=>t.g===e).length,i=l.matches.filter(t=>t.g===e&&l.isMatchPlayed(t)).length,a=l.matches.filter(t=>t.g===e&&t.liveState===`live`).length,o=document.createElement(`div`);o.className=`card p-4 card-slide`,o.innerHTML=`
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-display text-base font-bold text-white">Gruppe ${e}</h3>
        <div class="flex items-center gap-2">
          ${a>0?`<span class="flex items-center gap-1 text-[10px] text-red-400 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>LIVE</span>`:``}
          <span class="text-[10px] text-txt-muted">${i}/${r} Spiele</span>
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
          ${n.map((e,t)=>{let n=l.teams[e.team]?.flag||``,r=t+1,i=``;return r<=2?i=`border-l-2 border-emerald-500/60`:r===3&&(i=`border-l-2 border-gold/40`),`
              <tr class="${i} hover:bg-white/[0.02] cursor-pointer group" data-team="${e.team}">
                <td class="py-1.5 pl-1 text-txt-muted text-xs">${r}</td>
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
    `,t.appendChild(o)}),t.addEventListener(`click`,e=>{let t=e.target.closest(`[data-team]`);t&&J(`#/teams/${encodeURIComponent(t.dataset.team)}`)}),vt(),{destroy(){e.innerHTML=``}}}function vt(){let e=document.getElementById(`third-place-section`),t=l.getThirdPlaceRanking();if(t.length===0){e.innerHTML=``;return}e.innerHTML=`
    <section class="card p-4 sm:p-5 mt-6 card-slide">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-display text-base font-bold text-white flex items-center gap-2">
          <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          Ranking der Gruppendritten
        </h3>
        <span class="text-[10px] text-txt-muted">${t.filter(e=>e.qualified).length} von ${t.length} qualifiziert</span>
      </div>
      <p class="text-xs text-txt-muted mb-3">Die besten 8 Gruppendritten erreichen die K.O.-Runde (Sechzehntelfinale). Sortiert nach: Punkte → Tordifferenz → Tore.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-[13px]">
          <thead>
            <tr class="text-txt-muted text-[10px] uppercase tracking-wider">
              <th class="text-left pb-2 pl-1">#</th>
              <th class="text-left pb-2">Team</th>
              <th class="text-center pb-2">Gruppe</th>
              <th class="text-center pb-2 w-8">Sp</th>
              <th class="text-center pb-2 w-8">S</th>
              <th class="text-center pb-2 w-8">U</th>
              <th class="text-center pb-2 w-8">N</th>
              <th class="text-center pb-2 w-12">Tore</th>
              <th class="text-center pb-2 w-8">TD</th>
              <th class="text-center pb-2 w-8 font-bold text-gold">Pkt</th>
              <th class="text-center pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            ${t.map(e=>{let t=l.teams[e.team]?.flag||``;return`
                <tr class="${e.qualified?`border-l-2 border-emerald-500/60`:`border-l-2 border-accent/30 opacity-60`} hover:bg-white/[0.02] cursor-pointer" data-third-team="${e.team}">
                  <td class="py-1.5 pl-1 text-txt-muted text-xs">${e.rank}</td>
                  <td class="py-1.5">
                    <span class="font-medium text-white">${t} ${e.team}</span>
                  </td>
                  <td class="py-1.5 text-center">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-gold/10 text-gold border border-gold/20">${e.group}</span>
                  </td>
                  <td class="py-1.5 text-center text-txt-dim">${e.p}</td>
                  <td class="py-1.5 text-center text-txt-dim">${e.w}</td>
                  <td class="py-1.5 text-center text-txt-dim">${e.d}</td>
                  <td class="py-1.5 text-center text-txt-dim">${e.l}</td>
                  <td class="py-1.5 text-center text-txt-dim">${e.gf}:${e.ga}</td>
                  <td class="py-1.5 text-center ${e.gd>0?`text-emerald-400`:e.gd<0?`text-accent`:`text-txt-dim`}">${e.gd>0?`+`:``}${e.gd}</td>
                  <td class="py-1.5 text-center font-bold text-gold">${e.pts}</td>
                  <td class="py-1.5 text-center">
                    ${e.qualified?`<span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Weiter</span>`:`<span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-accent/10 text-accent border border-accent/20">Aus</span>`}
                  </td>
                </tr>`}).join(``)}
          </tbody>
        </table>
      </div>
      <div class="mt-2 flex gap-3 text-[9px] text-txt-muted">
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-emerald-500/60"></span>Qualifiziert (Top 8)</span>
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-sm bg-accent/30"></span>Ausgeschieden</span>
      </div>
    </section>
  `,e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-third-team]`);t&&J(`#/teams/${encodeURIComponent(t.dataset.thirdTeam)}`)})}function yt(e){let t=document.getElementById(`app-content`);if(e)return bt(t,decodeURIComponent(e));t.innerHTML=`
    <section class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">WM-Teilnehmer</h2>
      <p class="text-txt-dim text-sm">Alle 48 Nationalmannschaften der FIFA WM 2026.</p>
    </section>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3" id="teams-grid"></div>
  `;let n=document.getElementById(`teams-grid`);return Object.keys(l.teams).sort((e,t)=>e.localeCompare(t,`de`)).forEach(e=>{let t=l.teams[e],r=document.createElement(`div`);r.className=`card p-3 text-center cursor-pointer hover:border-accent/40 transition-all group`,r.innerHTML=`
      <div class="text-3xl mb-2">${t.flag}</div>
      <div class="font-display font-bold text-sm text-white group-hover:text-accent transition-colors truncate">${e}</div>
      <div class="text-[10px] text-txt-muted mt-0.5">Gruppe ${t.group}</div>
    `,r.addEventListener(`click`,()=>J(`#/teams/${encodeURIComponent(e)}`)),n.appendChild(r)}),{destroy(){t.innerHTML=``}}}function bt(e,t){let n=l.teams[t];if(!n)return e.innerHTML=`<div class="card p-8 text-center"><p class="text-txt-dim">Team nicht gefunden.</p></div>`,{destroy(){e.innerHTML=``}};let r=l.getGroupStandings(n.group),i=r.findIndex(e=>e.team===t)+1,a=l.matches.filter(e=>e.h===t||e.a===t),o=a.filter(e=>l.isMatchPlayed(e));return e.innerHTML=`
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
            <span class="px-2.5 py-0.5 rounded-md bg-sky/10 text-sky text-[11px] font-bold uppercase border border-sky/20">Platz ${i}</span>
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
          <div class="text-sm font-semibold text-white">${o.length} / ${a.length}</div>
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
          ${a.length===0?`<p class="text-sm text-txt-muted">Keine Spiele.</p>`:a.sort((e,t)=>e.md-t.md).map(e=>{let n=e.h===t,r=n?e.a:e.h,i=l.teams[r]?.flag||``;if(l.isMatchPlayed(e)){let t=n?e.hs:e.as,a=n?e.as:e.hs,o=t>a?`S`:t<a?`N`:`U`;return`
                  <div class="flex items-center gap-3 bg-bg rounded-lg px-3 py-2.5 border border-border text-sm mb-1.5">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold ${o===`S`?`bg-emerald-500/20 text-emerald-400 border-emerald-500/20`:o===`N`?`bg-accent/20 text-accent border-accent/20`:`bg-txt-muted/20 text-txt-dim border-txt-muted/20`} border w-6 text-center">${o}</span>
                    <span class="text-white font-bold">${t}:${a}</span>
                    <span class="text-txt-dim">vs.</span>
                    <span class="text-white">${i} ${r}</span>
                    <span class="ml-auto text-[10px] text-txt-muted">ST ${e.md}</span>
                  </div>`}else return`
                  <div class="flex items-center gap-3 bg-bg rounded-lg px-3 py-2.5 border border-border/50 text-sm mb-1.5 opacity-60">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/5 text-txt-muted border border-white/5 w-6 text-center">–</span>
                    <span class="text-txt-muted">vs.</span>
                    <span class="text-txt-dim">${i} ${r}</span>
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
              ${r.map((e,n)=>{let r=l.teams[e.team]?.flag||``,i=e.team===t;return`<tr class="${i?`bg-accent/5 border-l-2 border-accent`:``}">
                  <td class="py-1 text-txt-muted text-xs">${n+1}</td>
                  <td class="py-1 ${i?`text-accent font-bold`:`text-white`}">${r} ${e.team}</td>
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
  `,document.getElementById(`team-back`).addEventListener(`click`,()=>J(`#/teams`)),{destroy(){e.innerHTML=``}}}var xt=[{id:`r32-73`,matchNum:73,h:`2A`,a:`2B`,round:`R32`},{id:`r32-74`,matchNum:74,h:`1E`,a:`3ABCDF`,round:`R32`},{id:`r32-75`,matchNum:75,h:`1F`,a:`2C`,round:`R32`},{id:`r32-76`,matchNum:76,h:`1G`,a:`3AEHIJ`,round:`R32`},{id:`r32-77`,matchNum:77,h:`1H`,a:`2D`,round:`R32`},{id:`r32-78`,matchNum:78,h:`2E`,a:`2F`,round:`R32`},{id:`r32-79`,matchNum:79,h:`1A`,a:`3CEFHI`,round:`R32`},{id:`r32-80`,matchNum:80,h:`1B`,a:`3EFGIJ`,round:`R32`},{id:`r32-81`,matchNum:81,h:`1D`,a:`3BEFIJ`,round:`R32`},{id:`r32-82`,matchNum:82,h:`2G`,a:`2H`,round:`R32`},{id:`r32-83`,matchNum:83,h:`1I`,a:`2J`,round:`R32`},{id:`r32-84`,matchNum:84,h:`1J`,a:`3DEIJL`,round:`R32`},{id:`r32-85`,matchNum:85,h:`1K`,a:`3AGHKL`,round:`R32`},{id:`r32-86`,matchNum:86,h:`1L`,a:`2K`,round:`R32`},{id:`r32-87`,matchNum:87,h:`2I`,a:`2L`,round:`R32`},{id:`r32-88`,matchNum:88,h:`1C`,a:`3DGKHL`,round:`R32`}],St=[{id:`r16-1`,label:`W73 vs W75`,sources:[`r32-73`,`r32-75`]},{id:`r16-2`,label:`W74 vs W77`,sources:[`r32-74`,`r32-77`]},{id:`r16-3`,label:`W76 vs W78`,sources:[`r32-76`,`r32-78`]},{id:`r16-4`,label:`W79 vs W80`,sources:[`r32-79`,`r32-80`]},{id:`r16-5`,label:`W83 vs W84`,sources:[`r32-83`,`r32-84`]},{id:`r16-6`,label:`W81 vs W82`,sources:[`r32-81`,`r32-82`]},{id:`r16-7`,label:`W86 vs W88`,sources:[`r32-86`,`r32-88`]},{id:`r16-8`,label:`W85 vs W87`,sources:[`r32-85`,`r32-87`]}],Ct=[{id:`qf-1`,sources:[`r16-1`,`r16-2`]},{id:`qf-2`,sources:[`r16-3`,`r16-4`]},{id:`qf-3`,sources:[`r16-5`,`r16-6`]},{id:`qf-4`,sources:[`r16-7`,`r16-8`]}],wt=[{id:`sf-1`,sources:[`qf-1`,`qf-2`]},{id:`sf-2`,sources:[`qf-3`,`qf-4`]}],Tt=`wm_sim_ko_results`;function Et(){try{return JSON.parse(localStorage.getItem(Tt))||{}}catch{return{}}}function Dt(e){localStorage.setItem(Tt,JSON.stringify(e))}function Ot(e){let t=parseInt(e[0],10),n=e.slice(1),r=l.getGroupStandings(n);return r.length>=t&&r[t-1].p>0?r[t-1].team:null}function kt(){let e=l.getThirdPlaceRanking().filter(e=>e.qualified),t=e.map(e=>e.group).sort();if(t.length<8)return{};let n=[{matchId:`r32-74`,allowed:[`A`,`B`,`C`,`D`,`F`],opponent:`1E`},{matchId:`r32-76`,allowed:[`A`,`E`,`H`,`I`,`J`],opponent:`1G`},{matchId:`r32-79`,allowed:[`C`,`E`,`F`,`H`,`I`],opponent:`1A`},{matchId:`r32-80`,allowed:[`E`,`F`,`G`,`I`,`J`],opponent:`1B`},{matchId:`r32-81`,allowed:[`B`,`E`,`F`,`I`,`J`],opponent:`1D`},{matchId:`r32-84`,allowed:[`D`,`E`,`I`,`J`,`L`],opponent:`1J`},{matchId:`r32-85`,allowed:[`A`,`G`,`H`,`K`,`L`],opponent:`1K`},{matchId:`r32-88`,allowed:[`D`,`G`,`H`,`K`,`L`],opponent:`1C`}].map(e=>({...e,available:e.allowed.filter(e=>t.includes(e))}));n.sort((e,t)=>e.available.length-t.available.length);let r=[...e],i=new Map;function a(e){if(e>=n.length)return!0;let t=n[e],o=[...t.available].sort((e,t)=>(r.find(t=>t.group===e)?.rank||99)-(r.find(e=>e.group===t)?.rank||99));for(let n of o)if(!i.has(n)){if(i.set(n,t.matchId),a(e+1))return!0;i.delete(n)}return!1}a(0);let o={};for(let[e,t]of i){let n=r.find(t=>t.group===e);n&&(o[t]=n.team)}return o}function Z(e,t){let n=t[e];return!n||n.hs===void 0||n.as===void 0?null:n.hs>n.as?n.home:n.as>n.hs?n.away:null}function At(e,t){let n=t[e];return!n||n.hs===void 0||n.as===void 0?null:n.hs<n.as?n.home:n.as<n.hs?n.away:null}function Q(e){if(!e||e.length===0)return`Keine Kaderdaten verfügbar`;let t={TW:[],ABW:[],MF:[],ANG:[]};e.forEach(e=>{let n=e.pos||`MF`;t[n]?t[n].push(e.name):t[n]=[e.name]});let n=``;return t.TW.length&&(n+=`- Torhüter: ${t.TW.join(`, `)}\n`),t.ABW.length&&(n+=`- Abwehr: ${t.ABW.join(`, `)}\n`),t.MF.length&&(n+=`- Mittelfeld: ${t.MF.join(`, `)}\n`),t.ANG.length&&(n+=`- Angriff: ${t.ANG.join(`, `)}\n`),n.trim()}function jt(e){return l.matches.filter(t=>(t.h===e||t.a===e)&&l.isMatchPlayed(t)).map(t=>{let n=t.h===e,r=n?t.a:t.h,i=n?`${t.hs}:${t.as}`:`${t.as}:${t.hs}`;return`${(n?t.hs>t.as:t.as>t.hs)?`S`:t.hs===t.as?`U`:`N`} ${i} vs. ${r} (Gruppe ${t.g}, Spieltag ${t.md})`}).join(`
`)}function Mt(){return`**Turnierformat WM 2026:**
- 12 Gruppen (A–L) mit je 4 Teams
- Die Gruppenersten und -zweiten (24 Teams) sind direkt für die K.O.-Runde qualifiziert
- Die 8 besten Gruppendritten erreichen ebenfalls das Sechzehntelfinale (Runde der 32)
- Ab dem Sechzehntelfinale geht es im einfachen K.O.-System weiter: Achtelfinale → Viertelfinale → Halbfinale → Finale
- Platz 3 wird in einem separaten Spiel ermittelt`}function Nt(){return`**Historische K.O.-Muster bei Weltmeisterschaften:**
- In K.O.-Spielen gewinnen Gruppenerste gegen Gruppenzweite in etwa 65% der Fälle
- Spiele in der K.O.-Phase sind oft defensiver und enger als Gruppenpartien
- Circa 25–30% aller K.O.-Spiele gehen in die Verlängerung
- Elfmeterschießen entscheiden etwa 20–25% der K.O.-Spiele
- Favoriten setzen sich im Achtelfinale in etwa 70–75% der Fälle durch
- Im Halbfinale und Finale sind die Spiele meist besonders taktisch geprägt
- Die Wahrscheinlichkeit für Verlängerung steigt in den späteren Runden`}function Pt(e,t){let n=e.homeName,r=e.awayName,i=l.teams[n]?.flag||``,a=l.teams[r]?.flag||``,o=l.teams[n],s=l.teams[r],c=e.result&&e.result.hs!==void 0,u=t?`${t.emoji} ${t.text}, ${t.temp}°C, Wind: ${t.wind} km/h, Luftfeuchtigkeit: ${t.humidity}%`:`Keine Wetterdaten verfügbar`,d=jt(n),f=jt(r),p=Mt(),m=Nt(),h=`K.O.-Spiel`;if(e.matchNum?h=`Sechzehntelfinale (Match #${e.matchNum})`:e.id?.startsWith(`r16`)?h=`Achtelfinale`:e.id?.startsWith(`qf`)?h=`Viertelfinale`:e.id?.startsWith(`sf`)?h=`Halbfinale`:e.id===`third`?h=`Spiel um Platz 3`:e.id===`final`&&(h=`🏆 Finale`),c){let t=e.result;return`Du bist ein erstklassiger Sportjournalist. Erstelle einen detaillierten, packenden Spielbericht für folgendes WM 2026 K.O.-Spiel.

**WICHTIG: Deine Analyse muss ausschließlich auf den unten bereitgestellten Daten basieren. Verwende KEINE veralteten Informationen aus deinen Trainingsdaten (vor 2026) über Spieler oder Teams. Nur die hier gelisteten Kader, Ergebnisse und Tabellen sind für diesen Bericht gültig. Falls dir ein Spieler oder Team aus anderen Kontexten bekannt ist, ignoriere dieses Wissen vollständig.**

${p}

**Partie:** ${i} ${n} ${t.hs} : ${t.as} ${r} ${a}
**Runde:** ${h}
**Wetterbedingungen:** ${u}

**Team-Insights ${n}:**
- Trainer: ${o?.coach||`unbekannt`} | System: ${o?.system||`unbekannt`}
- Spielweise: ${o?.info||`unbekannt`}
**Vollständiger Kader ${n}:**
${Q(o?.squad)}

**Bisherige Turnierergebnisse ${n}:**
${d||`Erstes Spiel im Turnier`}

**Team-Insights ${r}:**
- Trainer: ${s?.coach||`unbekannt`} | System: ${s?.system||`unbekannt`}
- Spielweise: ${s?.info||`unbekannt`}
**Vollständiger Kader ${r}:**
${Q(s?.squad)}

**Bisherige Turnierergebnisse ${r}:**
${f||`Erstes Spiel im Turnier`}

Erstelle einen realistischen, spannenden Spielbericht mit:
- **Spielverlauf** mit konkreten Torschützen (reale Spieler!) und Spielminuten, passend zum Endergebnis ${t.hs}:${t.as}
- **Taktische Analyse** beider Teams
- **Schlüsselszenen** und Wendepunkte
- **Spieler des Spiels** mit Begründung
- **Einfluss der Wetterbedingungen**
- **Stimmung im Stadion**
- **Bedeutung des Ergebnisses** für den weiteren Turnierverlauf
- **Fazit und Ausblick**

Formatiere den Bericht mit Markdown. Verwende reale, aktuelle Spieler aus den bereitgestellten Kadern. Sei detailliert und emotional.`}else return`Du bist ein erstklassiger Fußball-Analyst. Erstelle eine detaillierte Spielprognose für folgendes WM 2026 K.O.-Spiel.

**WICHTIG: Nutze AUSSCHLIESSLICH die unten bereitgestellten Daten. Verwende KEINE veralteten Informationen aus deinen Trainingsdaten (vor 2026) über Spieler oder Teams. Nur die hier gelisteten Kader, Ergebnisse, Tabellen und Turnierinformationen sind gültig. Falls du unsicher bist, ob eine Information aktuell ist – lass sie weg und beziehe dich nur auf die untenstehenden Daten.**

${p}

${m}

**Partie:** ${i} ${n} vs. ${r} ${a}
**Runde:** ${h}
**Wetterbedingungen:** ${u}

**Team-Insights ${n}:**
- Trainer: ${o?.coach||`unbekannt`} | System: ${o?.system||`unbekannt`}
- Spielweise: ${o?.info||`unbekannt`}
**Vollständiger Kader ${n}:**
${Q(o?.squad)}

**Bisherige Turnierergebnisse ${n}:**
${d||`Erstes Spiel im Turnier`}

**Team-Insights ${r}:**
- Trainer: ${s?.coach||`unbekannt`} | System: ${s?.system||`unbekannt`}
- Spielweise: ${s?.info||`unbekannt`}
**Vollständiger Kader ${r}:**
${Q(s?.squad)}

**Bisherige Turnierergebnisse ${r}:**
${f||`Erstes Spiel im Turnier`}

Analysiere umfassend basierend NUR auf diesen Daten:
1. **Ausgangslage & Motivation** — K.O.-Druck, keine zweite Chance, basierend auf der Gruppenphase und dem bisherigen Turnierverlauf
2. **Kader-Analyse** — Stärken/Schwächen basierend auf dem vollständigen Kader
3. **Erwartete Aufstellungen** mit realen Spielern aus dem Kader
4. **Taktik-Analyse** — wie werden die Teams im K.O.-Spiel agieren?
5. **Schlüsselduelle**
6. **Wettquoten & Favoritenrolle**
7. **Wetter-Einfluss** — ${u}
8. **Mögliche Verlängerung/Elfmeterschießen** — wie wahrscheinlich ist das basierend auf den K.O.-Statistiken?
9. **Prognose** mit Ergebnis-Tipp (inkl. möglicher Verlängerung)
10. **Fazit**

Formatiere alles mit Markdown. Verwende NUR Spieler aus den bereitgestellten Kadern. Sei fundiert.`}async function Ft(e){let t=document.getElementById(`settings-modal`);if(!l.apiKey){G(`Bitte hinterlege zuerst deinen Gemini API-Key in den Einstellungen.`,`error`),t.classList.remove(`hidden`);return}let n=document.createElement(`div`);n.className=`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4`,n.innerHTML=`
    <div class="bg-bg-card border border-border rounded-xl p-5 sm:p-6 w-full max-w-lg max-h-[80vh] overflow-y-auto shadow-2xl relative">
      <button class="ko-modal-close absolute top-4 right-4 text-txt-dim hover:text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div id="ko-analysis-content">
        <div class="text-center py-8">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
            <div class="w-6 h-6 rounded-full spinner-ring animate-spin"></div>
          </div>
          <h3 class="font-display text-base font-bold text-white mb-1">KI analysiert das K.O.-Spiel…</h3>
          <p class="text-xs text-txt-dim">Kader, Taktik und Druck-Situation werden ausgewertet.</p>
        </div>
      </div>
    </div>
  `,document.body.appendChild(n),n.querySelector(`.ko-modal-close`).addEventListener(`click`,()=>n.remove()),n.addEventListener(`click`,e=>{e.target===n&&n.remove()});try{let t=await nt(Pt(e,await tt(``,``,``,{})),l.apiKey),n=l.teams[e.homeName]?.flag||``,r=l.teams[e.awayName]?.flag||``,i=e.result&&e.result.hs!==void 0;document.getElementById(`ko-analysis-content`).innerHTML=`
      <div class="mb-3">
        <h3 class="font-display text-lg font-bold text-white">${n} ${e.homeName} vs. ${e.awayName} ${r}</h3>
        <p class="text-xs text-txt-dim">${i?`Spielbericht`:`Spielprognose`} · K.O.-Runde</p>
      </div>
      <div class="prose prose-invert prose-sm max-w-none">
        ${W.parse(t)}
      </div>
    `}catch(e){console.error(`KO analysis error:`,e),document.getElementById(`ko-analysis-content`).innerHTML=`
      <div class="text-center py-6">
        <div class="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2">
          <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
        </div>
        <h3 class="font-display text-base font-bold text-accent mb-1">Fehler</h3>
        <p class="text-sm text-txt">${e.message}</p>
      </div>
    `,G(e.message,`error`)}}function It(){let e=document.getElementById(`app-content`),t=Et(),n=kt();function r(){let r=xt.map(e=>{let r,i;return r=e.h.startsWith(`3`)?n[e.id]||null:Ot(e.h),i=e.a.startsWith(`3`)?n[e.id]||null:Ot(e.a),{...e,homeName:r,awayName:i,result:t[e.id]}}),a=St.map(e=>{let n=Z(e.sources[0],t),r=Z(e.sources[1],t);return{...e,homeName:n,awayName:r,result:t[e.id]}}),o=Ct.map(e=>{let n=Z(e.sources[0],t),r=Z(e.sources[1],t);return{...e,homeName:n,awayName:r,result:t[e.id]}}),c=wt.map(e=>{let n=Z(e.sources[0],t),r=Z(e.sources[1],t);return{...e,homeName:n,awayName:r,result:t[e.id]}}),u=Z(`sf-1`,t),d=Z(`sf-2`,t),f=At(`sf-1`,t),p=At(`sf-2`,t),m={id:`final`,homeName:u,awayName:d,result:t.final},h={id:`third`,homeName:f,awayName:p,result:t.third},g=Z(`final`,t);Z(`third`,t),e.innerHTML=`
      <section class="mb-6">
        <h2 class="font-display text-2xl sm:text-3xl font-black text-white mb-1">K.O.-Runde</h2>
        <p class="text-txt-dim text-sm">Offizielles FIFA WM 2026 Bracket. Klicke auf ein Spiel, um das Ergebnis einzutragen. Der Sieger rückt automatisch vor.</p>
      </section>

      ${g?`
        <section class="card p-5 sm:p-6 mb-6 border-t-2 border-gold/60 text-center card-slide">
          <div class="text-4xl mb-2">🏆</div>
          <h3 class="font-display text-2xl font-black text-gold">${l.teams[g]?.flag||``} ${g}</h3>
          <p class="text-sm text-txt-dim mt-1">FIFA Fußball-Weltmeister 2026</p>
        </section>
      `:``}

      <div class="space-y-6">
        ${i(`Sechzehntelfinale (Runde der 32)`,r,`lg:grid-cols-4`)}
        ${i(`Achtelfinale`,a,`lg:grid-cols-4`)}
        ${i(`Viertelfinale`,o,`lg:grid-cols-4`)}
        ${i(`Halbfinale`,c,`lg:grid-cols-2`)}
        ${i(`Spiel um Platz 3`,[h],`lg:grid-cols-2`)}
        ${i(`🏆 Finale`,[m],`lg:grid-cols-2`)}
      </div>
    `,e.querySelectorAll(`[data-ko-match]`).forEach(e=>{e.addEventListener(`click`,t=>{if(t.target.closest(`.ko-analyse-btn`))return;let n=e.dataset.koMatch,r=e.dataset.koHome,i=e.dataset.koAway;if(!r||!i){G(`Teams stehen noch nicht fest.`,`info`);return}s(n,r,i)})}),e.querySelectorAll(`.ko-analyse-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.koAnalyse,i=[...r,...a,...o,...c,h,m].find(e=>e.id===n);if(!i||!i.homeName||!i.awayName){G(`Teams stehen noch nicht fest.`,`info`);return}Ft(i)})})}function i(e,t,n=`lg:grid-cols-4`){return`
      <section class="card p-4 sm:p-5">
        <h3 class="font-display text-sm font-bold text-white mb-3 uppercase tracking-wider">${e}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 ${n} gap-2">
          ${t.map(e=>a(e)).join(``)}
        </div>
      </section>
    `}function a(e){let t=e.homeName&&l.teams[e.homeName]?.flag||``,n=e.awayName&&l.teams[e.awayName]?.flag||``,r=e.homeName||(e.h?o(e.h):`???`),i=e.awayName||(e.a?o(e.a):`???`),a=e.homeName&&e.awayName,s=e.result,c=s&&s.hs!==void 0,u=null;c&&(u=s.hs>s.as?e.homeName:s.as>s.hs?e.awayName:null);let d=e.matchNum?`#${e.matchNum}`:``;return`
      <div class="bg-bg rounded-lg border ${c?`border-emerald-500/30`:a?`border-border hover:border-accent/40 cursor-pointer`:`border-border/40 opacity-50`} p-3 transition-all text-sm"
           data-ko-match="${e.id}" data-ko-home="${e.homeName||``}" data-ko-away="${e.awayName||``}">
        ${d?`<div class="text-[9px] text-txt-muted mb-1.5 font-semibold uppercase tracking-wider">${d}</div>`:``}
        <div class="flex items-center justify-between mb-1.5">
          <span class="${u===e.homeName?`text-emerald-400 font-bold`:e.homeName?`text-white`:`text-txt-muted`} truncate flex-1">${t} ${r}</span>
          ${c?`<span class="font-display font-bold text-white mx-2">${s.hs}</span>`:``}
        </div>
        <div class="flex items-center justify-between">
          <span class="${u===e.awayName?`text-emerald-400 font-bold`:e.awayName?`text-white`:`text-txt-muted`} truncate flex-1">${n} ${i}</span>
          ${c?`<span class="font-display font-bold text-white mx-2">${s.as}</span>`:``}
        </div>
        ${a?`
          <button class="ko-analyse-btn mt-2 w-full py-1.5 bg-accent/10 hover:bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider rounded-md transition-colors border border-accent/20" data-ko-analyse="${e.id}">
            🤖 KI-Analyse
          </button>
        `:``}
      </div>
    `}function o(e){if(e.startsWith(`3`))return`3. aus ${e.slice(1).split(``).join(`/`)}`;let t=e[0],n=e.slice(1);return`${t===`1`?`1.`:`2.`} Gr. ${n}`}function s(e,n,i){let a=l.teams[n]?.flag||``,o=l.teams[i]?.flag||``,s=t[e],u=document.createElement(`div`);u.className=`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4`,u.innerHTML=`
      <div class="bg-bg-card border border-border rounded-xl p-6 w-full max-w-xs shadow-2xl relative">
        <button class="ko-modal-close absolute top-4 right-4 text-txt-dim hover:text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <h3 class="font-display text-base font-bold text-white mb-4 text-center">${a} ${n} vs ${i} ${o}</h3>
        <div class="flex items-center justify-center gap-3 mb-4">
          <input type="number" id="ko-hs" min="0" max="20" value="${s?s.hs:``}" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
          <span class="text-xl font-bold text-txt-muted">:</span>
          <input type="number" id="ko-as" min="0" max="20" value="${s?s.as:``}" class="w-16 text-center bg-[#0a0f1a] border border-border rounded-lg px-2 py-2.5 text-xl font-display font-bold text-white focus:outline-none focus:border-accent/60" placeholder="0" />
        </div>
        <p class="text-[10px] text-txt-muted text-center mb-3">Bei K.O.-Spielen muss es einen Sieger geben (nach Verlängerung/Elfmeterschießen).</p>
        <div class="flex gap-2">
          <button id="ko-save" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg transition-colors">Speichern</button>
          ${s?`<button id="ko-delete" class="py-2.5 px-4 bg-accent/20 hover:bg-accent/30 text-accent font-bold text-sm rounded-lg transition-colors border border-accent/20">✕</button>`:``}
        </div>
      </div>
    `,document.body.appendChild(u),u.querySelector(`.ko-modal-close`).addEventListener(`click`,()=>u.remove()),u.addEventListener(`click`,e=>{e.target===u&&u.remove()}),document.getElementById(`ko-save`).addEventListener(`click`,()=>{let a=parseInt(document.getElementById(`ko-hs`).value,10),o=parseInt(document.getElementById(`ko-as`).value,10);if(isNaN(a)||isNaN(o)||a<0||o<0){G(`Bitte gültige Werte eingeben.`,`error`);return}if(a===o){G(`K.O.-Spiele brauchen einen Sieger (kein Unentschieden).`,`error`);return}t[e]={home:n,away:i,hs:a,as:o},Dt(t),u.remove(),r(),G(`K.O.-Ergebnis gespeichert!`,`success`)});let d=document.getElementById(`ko-delete`);d&&d.addEventListener(`click`,()=>{delete t[e],c(e),Dt(t),u.remove(),r(),G(`Ergebnis und nachfolgende Runden zurückgesetzt.`,`info`)})}function c(e){St.forEach(n=>{n.sources.includes(e)&&(delete t[n.id],c(n.id))}),Ct.forEach(n=>{n.sources.includes(e)&&(delete t[n.id],c(n.id))}),wt.forEach(n=>{n.sources.includes(e)&&(delete t[n.id],c(n.id))}),(e===`sf-1`||e===`sf-2`)&&(delete t.final,delete t.third)}return r(),{destroy(){e.innerHTML=``}}}function Lt(){let e=document.getElementById(`app-content`),t=l.matches.filter(e=>l.isMatchPlayed(e)),n=t.reduce((e,t)=>e+t.hs+t.as,0),r=t.length>0?(n/t.length).toFixed(2):`0`,i=0,a=0,o=0,s=null,c=0,u=null,d=0;t.forEach(e=>{e.hs>e.as?i++:e.hs<e.as?o++:a++;let t=e.hs+e.as;t>c&&(c=t,s=e);let n=Math.abs(e.hs-e.as);n>d&&(d=n,u=e)});let f=i+a+o||1,p=(i/f*100).toFixed(0),m=(a/f*100).toFixed(0),h=(o/f*100).toFixed(0),g=[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`],_=g.map(e=>{let t=l.matches.filter(t=>t.g===e&&l.isMatchPlayed(t)),n=t.reduce((e,t)=>e+t.hs+t.as,0);return{group:e,played:t.length,goals:n,avg:t.length>0?(n/t.length).toFixed(1):`0`}}).sort((e,t)=>t.goals-e.goals),v=Math.max(..._.map(e=>e.goals),1),y=e=>l.teams[e?.h]?.flag||``,b=e=>l.teams[e?.a]?.flag||``;return e.innerHTML=`
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
        <div class="text-3xl font-display font-black text-sky">${r}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Tore / Spiel</div>
      </div>
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-gold">${t.length}</div>
        <div class="text-[10px] uppercase tracking-wider text-txt-muted mt-1">Spiele gespielt</div>
      </div>
      <div class="card p-4 text-center">
        <div class="text-3xl font-display font-black text-emerald-400">${l.matches.length-t.length}</div>
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
              <div class="flex justify-between text-sm mb-1"><span class="text-txt-dim">Heimsiege</span><span class="text-emerald-400 font-bold">${i} (${p}%)</span></div>
              <div class="h-3 bg-bg rounded-full overflow-hidden"><div class="h-full bg-emerald-500/60 rounded-full transition-all" style="width:${p}%"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1"><span class="text-txt-dim">Unentschieden</span><span class="text-txt-dim font-bold">${a} (${m}%)</span></div>
              <div class="h-3 bg-bg rounded-full overflow-hidden"><div class="h-full bg-txt-muted/40 rounded-full transition-all" style="width:${m}%"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm mb-1"><span class="text-txt-dim">Auswärtssiege</span><span class="text-accent font-bold">${o} (${h}%)</span></div>
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
            ${s?`
              <div class="bg-bg rounded-lg px-4 py-3 border border-border">
                <div class="text-[10px] uppercase tracking-wider text-txt-muted mb-1">Torreichstes Spiel</div>
                <div class="text-sm font-semibold text-white">${y(s)} ${s.h} ${s.hs}:${s.as} ${s.a} ${b(s)}</div>
                <div class="text-[10px] text-txt-muted">${c} Tore · Gruppe ${s.g}</div>
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
  `,document.getElementById(`stats-favorites-btn`).addEventListener(`click`,async()=>{if(!l.apiKey){G(`Bitte hinterlege zuerst deinen Gemini API-Key.`,`error`),document.getElementById(`settings-modal`).classList.remove(`hidden`);return}let e=document.getElementById(`stats-favorites-btn`),n=document.getElementById(`stats-fav-spinner`),r=document.getElementById(`stats-fav-text`);e.disabled=!0,n.classList.remove(`hidden`),r.textContent=`Analysiere...`;let i=`Du bist ein Elite-Fußballanalyst. Basierend auf den aktuellen WM 2026 Gruppenständen und bisherigen Ergebnissen, erstelle ein Ranking der **Top 10 Turnier-Favoriten**.

**Aktuelle Gruppenstände:**
${g.map(e=>`Gruppe ${e}: ${l.getGroupStandings(e).map((e,t)=>`${t+1}. ${e.team} (${e.pts}P, ${e.gf}:${e.ga})`).join(`, `)}`).join(`
`)}

**Gespielt:** ${t.length} von ${l.matches.length} Gruppenspielen

Für jeden Favoriten:
1. Platzierung und Teamname mit Flagge
2. Aktuelle Form (Punkte, Tore, Tordifferenz)
3. Stärken und Schwächen
4. Prognose für die K.O.-Runde
5. Gesamtbewertung (Sterne: ⭐)

Formatiere als Markdown mit klarer Struktur. Sei analytisch und fundiert.`;try{let e=await nt(i,l.apiKey);document.getElementById(`stats-favorites-content`).innerHTML=W.parse(e),document.getElementById(`stats-favorites-output`).classList.remove(`hidden`),G(`Favoritenanalyse abgeschlossen!`,`success`)}catch(e){G(e.message,`error`)}finally{e.disabled=!1,n.classList.add(`hidden`),r.textContent=`Favoritenanalyse starten`}}),{destroy(){e.innerHTML=``}}}function $(e=!1){let t=document.getElementById(`live-status`);if(t){if(e){t.innerHTML=`
      <div class="w-3 h-3 rounded-full spinner-ring animate-spin"></div>
      <span class="hidden sm:inline text-txt-muted">Lade Live-Daten…</span>
    `;return}if(l.liveDataLoaded){let e=l.matches.filter(e=>e.liveState===`live`).length,n=l.matches.filter(e=>e.liveState===`completed`).length;e>0?t.innerHTML=`
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
        <span class="hidden sm:inline text-red-400 font-semibold">${e} LIVE</span>
      `:t.innerHTML=`
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span class="hidden sm:inline text-emerald-400">${n} Spiele geladen</span>
      `}else l.liveDataError&&(t.innerHTML=`
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
      <span class="hidden sm:inline text-amber-400">Offline-Modus</span>
    `)}}async function Rt(){$(!0);let e=document.getElementById(`refresh-icon`);e&&e.classList.add(`animate-spin`);let t=await l.refreshLiveData();e&&e.classList.remove(`animate-spin`),$(),t?(G(`Live-Daten aktualisiert!`,`success`),window.location.hash,window.dispatchEvent(new HashChangeEvent(`hashchange`))):G(`Live-Daten konnten nicht geladen werden.`,`error`)}async function zt(){l.init(),document.getElementById(`settings-btn`).addEventListener(`click`,()=>{document.getElementById(`api-key-input`).value=l.apiKey,document.getElementById(`settings-modal`).classList.remove(`hidden`)}),document.getElementById(`settings-close`).addEventListener(`click`,()=>{document.getElementById(`settings-modal`).classList.add(`hidden`)}),document.getElementById(`api-key-save`).addEventListener(`click`,()=>{let e=document.getElementById(`api-key-input`).value.trim();l.setApiKey(e),document.getElementById(`settings-modal`).classList.add(`hidden`),G(`API-Key gespeichert!`,`success`)}),document.getElementById(`refresh-btn`).addEventListener(`click`,()=>{Rt()}),q(`#/simulator`,()=>ut()),q(`#/gruppen`,()=>_t()),q(`#/teams`,e=>yt(e)),q(`#/ko-runde`,()=>It()),q(`#/statistiken`,()=>Lt()),document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.tab;window.location.hash=n})}),$(!0),await l.loadLiveData(),$(),$e(`#/simulator`)}document.addEventListener(`DOMContentLoaded`,zt);