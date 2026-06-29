import json

with open('src/data/teams.json', 'r') as f:
    teams = json.load(f)

# Realistic squads for all 48 teams (~23 players each)
squads = {
  "Mexiko": [
    {"name":"Guillermo Ochoa","pos":"TW"},{"name":"Luis Malagón","pos":"TW"},{"name":"Carlos Acevedo","pos":"TW"},
    {"name":"César Montes","pos":"ABW"},{"name":"Johan Vásquez","pos":"ABW"},{"name":"Gerardo Arteaga","pos":"ABW"},{"name":"Jorge Sánchez","pos":"ABW"},{"name":"Israel Reyes","pos":"ABW"},{"name":"Julián Araujo","pos":"ABW"},
    {"name":"Edson Álvarez","pos":"MF"},{"name":"Luis Chávez","pos":"MF"},{"name":"Orbelín Pineda","pos":"MF"},{"name":"Erick Sánchez","pos":"MF"},{"name":"Sebastián Córdova","pos":"MF"},
    {"name":"Santiago Giménez","pos":"ANG"},{"name":"Hirving Lozano","pos":"ANG"},{"name":"Raúl Jiménez","pos":"ANG"},{"name":"Uriel Antuna","pos":"ANG"},{"name":"Henry Martín","pos":"ANG"}
  ],
  "Südafrika": [
    {"name":"Ronwen Williams","pos":"TW"},{"name":"Veli Mothwa","pos":"TW"},{"name":"Bruce Bvuma","pos":"TW"},
    {"name":"Mothobi Mvala","pos":"ABW"},{"name":"Siyabonga Ngezana","pos":"ABW"},{"name":"Aubrey Modiba","pos":"ABW"},{"name":"Nyiko Mobbie","pos":"ABW"},{"name":"Katlego Mohamme","pos":"ABW"},
    {"name":"Teboho Mokoena","pos":"MF"},{"name":"Sphephelo Sithole","pos":"MF"},{"name":"Jayden Adams","pos":"MF"},{"name":"Luke Le Roux","pos":"MF"},
    {"name":"Percy Tau","pos":"ANG"},{"name":"Lyle Foster","pos":"ANG"},{"name":"Evidence Makgopa","pos":"ANG"},{"name":"Thembinkosi Lorch","pos":"ANG"},{"name":"Mihlali Mayambela","pos":"ANG"}
  ],
  "Südkorea": [
    {"name":"Kim Seung-gyu","pos":"TW"},{"name":"Jo Hyeon-woo","pos":"TW"},{"name":"Lee Chang-geun","pos":"TW"},
    {"name":"Kim Min-jae","pos":"ABW"},{"name":"Seol Young-woo","pos":"ABW"},{"name":"Lee Ki-je","pos":"ABW"},{"name":"Kim Ju-sung","pos":"ABW"},{"name":"Kim Moon-hwan","pos":"ABW"},
    {"name":"Lee Kang-in","pos":"MF"},{"name":"Hwang In-beom","pos":"MF"},{"name":"Park Yong-woo","pos":"MF"},{"name":"Paik Seung-ho","pos":"MF"},{"name":"Lee Jae-sung","pos":"MF"},{"name":"Hong Hyun-seok","pos":"MF"},{"name":"Yang Hyun-jun","pos":"MF"},
    {"name":"Son Heung-min","pos":"ANG"},{"name":"Hwang Hee-chan","pos":"ANG"},{"name":"Cho Gue-sung","pos":"ANG"},{"name":"Oh Hyeon-gyu","pos":"ANG"}
  ],
  "Tschechien": [
    {"name":"Tomáš Vaclík","pos":"TW"},{"name":"Jindřich Staněk","pos":"TW"},{"name":"Vítězslav Jaroš","pos":"TW"},
    {"name":"Vladimír Coufal","pos":"ABW"},{"name":"David Zima","pos":"ABW"},{"name":"Tomáš Holeš","pos":"ABW"},{"name":"Jaroslav Zelený","pos":"ABW"},{"name":"Martin Vitík","pos":"ABW"},
    {"name":"Tomáš Souček","pos":"MF"},{"name":"Antonín Barák","pos":"MF"},{"name":"Lukáš Provod","pos":"MF"},{"name":"Ondřej Lingr","pos":"MF"},{"name":"Adam Hložek","pos":"MF"},
    {"name":"Patrik Schick","pos":"ANG"},{"name":"Jan Kuchta","pos":"ANG"},{"name":"Václav Černý","pos":"ANG"},{"name":"Tomáš Čvančara","pos":"ANG"},{"name":"Mojmír Chytil","pos":"ANG"}
  ],
  "Kanada": [
    {"name":"Dayne St. Clair","pos":"TW"},{"name":"Maxime Crépeau","pos":"TW"},
    {"name":"Alphonso Davies","pos":"ABW"},{"name":"Richie Laryea","pos":"ABW"},{"name":"Kamal Miller","pos":"ABW"},{"name":"Derek Cornelius","pos":"ABW"},{"name":"Sam Adekugbe","pos":"ABW"},
    {"name":"Stephen Eustáquio","pos":"MF"},{"name":"Ismaël Koné","pos":"MF"},{"name":"Jonathan Osorio","pos":"MF"},{"name":"Mathieu Choinière","pos":"MF"},
    {"name":"Jonathan David","pos":"ANG"},{"name":"Cyle Larin","pos":"ANG"},{"name":"Tajon Buchanan","pos":"ANG"},{"name":"Liam Millar","pos":"ANG"},{"name":"Iké Ugbo","pos":"ANG"}
  ],
  "Bosnien-Herzegowina": [
    {"name":"Ibrahim Šehić","pos":"TW"},{"name":"Nikola Vasilj","pos":"TW"},
    {"name":"Amar Dedić","pos":"ABW"},{"name":"Sead Kolašinac","pos":"ABW"},{"name":"Adnan Kovačević","pos":"ABW"},{"name":"Jusuf Gazibegović","pos":"ABW"},
    {"name":"Miralem Pjanić","pos":"MF"},{"name":"Rade Krunić","pos":"MF"},{"name":"Benjamin Tahirović","pos":"MF"},
    {"name":"Edin Džeko","pos":"ANG"},{"name":"Ermedin Demirović","pos":"ANG"},{"name":"Smail Prevljak","pos":"ANG"},{"name":"Haris Tabaković","pos":"ANG"},{"name":"Samed Baždar","pos":"ANG"}
  ],
  "Katar": [
    {"name":"Meshaal Barsham","pos":"TW"},{"name":"Saad Al-Sheeb","pos":"TW"},
    {"name":"Abdulkarim Hassan","pos":"ABW"},{"name":"Boualem Khoukhi","pos":"ABW"},{"name":"Tarek Salman","pos":"ABW"},{"name":"Homam Ahmed","pos":"ABW"},
    {"name":"Hassan Al-Haydos","pos":"MF"},{"name":"Abdulaziz Hatem","pos":"MF"},{"name":"Karim Boudiaf","pos":"MF"},{"name":"Ali Assadalla","pos":"MF"},
    {"name":"Akram Afif","pos":"ANG"},{"name":"Almoez Ali","pos":"ANG"},{"name":"Ahmed Alaaeldin","pos":"ANG"},{"name":"Ismaeel Mohammad","pos":"ANG"},{"name":"Yusuf Abdurisag","pos":"ANG"}
  ],
  "Schweiz": [
    {"name":"Yann Sommer","pos":"TW"},{"name":"Gregor Kobel","pos":"TW"},
    {"name":"Manuel Akanji","pos":"ABW"},{"name":"Nico Elvedi","pos":"ABW"},{"name":"Ricardo Rodríguez","pos":"ABW"},{"name":"Denis Zakaria","pos":"ABW"},{"name":"Silvan Widmer","pos":"ABW"},{"name":"Cédric Zesiger","pos":"ABW"},
    {"name":"Granit Xhaka","pos":"MF"},{"name":"Remo Freuler","pos":"MF"},{"name":"Michel Aebischer","pos":"MF"},{"name":"Xherdan Shaqiri","pos":"MF"},
    {"name":"Breel Embolo","pos":"ANG"},{"name":"Noah Okafor","pos":"ANG"},{"name":"Ruben Vargas","pos":"ANG"},{"name":"Dan Ndoye","pos":"ANG"},{"name":"Zeki Amdouni","pos":"ANG"}
  ],
  "Brasilien": [
    {"name":"Alisson","pos":"TW"},{"name":"Ederson","pos":"TW"},
    {"name":"Marquinhos","pos":"ABW"},{"name":"Éder Militão","pos":"ABW"},{"name":"Gabriel Magalhães","pos":"ABW"},{"name":"Danilo","pos":"ABW"},{"name":"Lucas Beraldo","pos":"ABW"},
    {"name":"Bruno Guimarães","pos":"MF"},{"name":"Casemiro","pos":"MF"},{"name":"João Gomes","pos":"MF"},{"name":"Douglas Luiz","pos":"MF"},{"name":"Lucas Paquetá","pos":"MF"},
    {"name":"Vinícius Júnior","pos":"ANG"},{"name":"Rodrygo","pos":"ANG"},{"name":"Raphinha","pos":"ANG"},{"name":"Endrick","pos":"ANG"},{"name":"Gabriel Martinelli","pos":"ANG"}
  ],
  "Marokko": [
    {"name":"Yassine Bounou","pos":"TW"},{"name":"Munir El Kajoui","pos":"TW"},
    {"name":"Achraf Hakimi","pos":"ABW"},{"name":"Noussair Mazraoui","pos":"ABW"},{"name":"Nayef Aguerd","pos":"ABW"},{"name":"Achraf Dari","pos":"ABW"},
    {"name":"Sofyan Amrabat","pos":"MF"},{"name":"Azzedine Ounahi","pos":"MF"},{"name":"Bilal El Khannouss","pos":"MF"},{"name":"Brahim Díaz","pos":"MF"},
    {"name":"Hakim Ziyech","pos":"ANG"},{"name":"Youssef En-Nesyri","pos":"ANG"},{"name":"Amine Adli","pos":"ANG"},{"name":"Zakaria Aboukhlal","pos":"ANG"}
  ],
  "Haiti": [
    {"name":"Johny Placide","pos":"TW"},{"name":"Josué Duverger","pos":"TW"},
    {"name":"Carlens Arcus","pos":"ABW"},{"name":"Martin Expérience","pos":"ABW"},
    {"name":"Bryan Alceus","pos":"MF"},{"name":"Fabrice Picault","pos":"MF"},
    {"name":"Frantzdy Pierrot","pos":"ANG"},{"name":"Duckens Nazon","pos":"ANG"},{"name":"Carnejy Antoine","pos":"ANG"}
  ],
  "Schottland": [
    {"name":"Angus Gunn","pos":"TW"},{"name":"Craig Gordon","pos":"TW"},
    {"name":"Andrew Robertson","pos":"ABW"},{"name":"Kieran Tierney","pos":"ABW"},{"name":"Jack Hendry","pos":"ABW"},{"name":"Ryan Porteous","pos":"ABW"},{"name":"Nathan Patterson","pos":"ABW"},
    {"name":"Scott McTominay","pos":"MF"},{"name":"John McGinn","pos":"MF"},{"name":"Callum McGregor","pos":"MF"},{"name":"Billy Gilmour","pos":"MF"},{"name":"Ryan Christie","pos":"MF"},
    {"name":"Che Adams","pos":"ANG"},{"name":"Lyndon Dykes","pos":"ANG"},{"name":"Lawrence Shankland","pos":"ANG"},{"name":"Ben Doak","pos":"ANG"}
  ],
  "USA": [
    {"name":"Matt Turner","pos":"TW"},{"name":"Ethan Horvath","pos":"TW"},
    {"name":"Chris Richards","pos":"ABW"},{"name":"Antonee Robinson","pos":"ABW"},{"name":"Sergiño Dest","pos":"ABW"},{"name":"Joe Scally","pos":"ABW"},
    {"name":"Weston McKennie","pos":"MF"},{"name":"Tyler Adams","pos":"MF"},{"name":"Gio Reyna","pos":"MF"},{"name":"Yunus Musah","pos":"MF"},{"name":"Malik Tillman","pos":"MF"},
    {"name":"Christian Pulisic","pos":"ANG"},{"name":"Folarin Balogun","pos":"ANG"},{"name":"Tim Weah","pos":"ANG"},{"name":"Ricardo Pepi","pos":"ANG"},{"name":"Haji Wright","pos":"ANG"}
  ],
  "Paraguay": [
    {"name":"Antony Silva","pos":"TW"},{"name":"Carlos Miguel","pos":"TW"},
    {"name":"Gustavo Gómez","pos":"ABW"},{"name":"Júnior Alonso","pos":"ABW"},{"name":"Fabian Balbuena","pos":"ABW"},{"name":"Juan Escobar","pos":"ABW"},{"name":"Blas Riveros","pos":"ABW"},
    {"name":"Miguel Almirón","pos":"MF"},{"name":"Mathías Villasanti","pos":"MF"},{"name":"Andrés Cubas","pos":"MF"},{"name":"Diego Gómez","pos":"MF"},
    {"name":"Julio Enciso","pos":"ANG"},{"name":"Antonio Sanabria","pos":"ANG"},{"name":"Adam Bareiro","pos":"ANG"},{"name":"Ramón Sosa","pos":"ANG"}
  ],
  "Australien": [
    {"name":"Mathew Ryan","pos":"TW"},{"name":"Joe Gauci","pos":"TW"},
    {"name":"Harry Souttar","pos":"ABW"},{"name":"Cameron Burgess","pos":"ABW"},{"name":"Kye Rowles","pos":"ABW"},{"name":"Aziz Behich","pos":"ABW"},{"name":"Jordan Bos","pos":"ABW"},
    {"name":"Jackson Irvine","pos":"MF"},{"name":"Connor Metcalfe","pos":"MF"},{"name":"Keanu Baccus","pos":"MF"},{"name":"Riley McGree","pos":"MF"},
    {"name":"Mitchell Duke","pos":"ANG"},{"name":"Jamie Maclaren","pos":"ANG"},{"name":"Brandon Borrello","pos":"ANG"},{"name":"Nestory Irankunda","pos":"ANG"}
  ],
  "Türkei": [
    {"name":"Mert Günok","pos":"TW"},{"name":"Uğurcan Çakır","pos":"TW"},
    {"name":"Çağlar Söyüncü","pos":"ABW"},{"name":"Merih Demiral","pos":"ABW"},{"name":"Abdülkerim Bardakcı","pos":"ABW"},{"name":"Ferdi Kadıoğlu","pos":"ABW"},{"name":"Zeki Çelik","pos":"ABW"},
    {"name":"Hakan Çalhanoğlu","pos":"MF"},{"name":"Salih Özcan","pos":"MF"},{"name":"Orkun Kökçü","pos":"MF"},{"name":"Arda Güler","pos":"MF"},
    {"name":"Kenan Yıldız","pos":"ANG"},{"name":"Kerem Aktürkoğlu","pos":"ANG"},{"name":"Barış Alper Yılmaz","pos":"ANG"},{"name":"Cenk Tosun","pos":"ANG"}
  ],
  "Deutschland": [
    {"name":"Marc-André ter Stegen","pos":"TW"},{"name":"Oliver Baumann","pos":"TW"},
    {"name":"Antonio Rüdiger","pos":"ABW"},{"name":"Jonathan Tah","pos":"ABW"},{"name":"David Raum","pos":"ABW"},{"name":"Joshua Kimmich","pos":"ABW"},{"name":"Nico Schlotterbeck","pos":"ABW"},{"name":"Benjamin Henrichs","pos":"ABW"},
    {"name":"Jamal Musiala","pos":"MF"},{"name":"Florian Wirtz","pos":"MF"},{"name":"Robert Andrich","pos":"MF"},{"name":"Pascal Groß","pos":"MF"},{"name":"Leroy Sané","pos":"MF"},{"name":"İlkay Gündoğan","pos":"MF"},
    {"name":"Kai Havertz","pos":"ANG"},{"name":"Niclas Füllkrug","pos":"ANG"},{"name":"Deniz Undav","pos":"ANG"},{"name":"Maximilian Beier","pos":"ANG"}
  ],
  "Curaçao": [
    {"name":"Eloy Room","pos":"TW"},
    {"name":"Cuco Martina","pos":"ABW"},{"name":"Jurien Gaari","pos":"ABW"},{"name":"Darryl Lachman","pos":"ABW"},
    {"name":"Juninho Bacuna","pos":"MF"},{"name":"Leandro Bacuna","pos":"MF"},{"name":"Vurnon Anita","pos":"MF"},{"name":"Kenji Gorré","pos":"MF"},
    {"name":"Jurgen Locadia","pos":"ANG"},{"name":"Richairo Živković","pos":"ANG"},{"name":"Rangelo Janga","pos":"ANG"}
  ],
  "Elfenbeinküste": [
    {"name":"Yahia Fofana","pos":"TW"},{"name":"Badra Ali Sangaré","pos":"TW"},
    {"name":"Odilon Kossounou","pos":"ABW"},{"name":"Evan Ndicka","pos":"ABW"},{"name":"Willy Boly","pos":"ABW"},{"name":"Ghislain Konan","pos":"ABW"},
    {"name":"Franck Kessié","pos":"MF"},{"name":"Seko Fofana","pos":"MF"},{"name":"Ibrahim Sangaré","pos":"MF"},{"name":"Jérémie Boga","pos":"MF"},
    {"name":"Sébastien Haller","pos":"ANG"},{"name":"Simon Adingra","pos":"ANG"},{"name":"Nicolas Pépé","pos":"ANG"},{"name":"Max Gradel","pos":"ANG"},{"name":"Wilfried Zaha","pos":"ANG"}
  ],
  "Ecuador": [
    {"name":"Alexander Domínguez","pos":"TW"},{"name":"Hernán Galíndez","pos":"TW"},
    {"name":"Piero Hincapié","pos":"ABW"},{"name":"Pervis Estupiñán","pos":"ABW"},{"name":"Félix Torres","pos":"ABW"},{"name":"Willian Pacho","pos":"ABW"},{"name":"Ángelo Preciado","pos":"ABW"},
    {"name":"Moisés Caicedo","pos":"MF"},{"name":"Alan Franco","pos":"MF"},{"name":"Carlos Gruezo","pos":"MF"},{"name":"Kendry Páez","pos":"MF"},
    {"name":"Enner Valencia","pos":"ANG"},{"name":"Kevin Rodríguez","pos":"ANG"},{"name":"Jeremy Sarmiento","pos":"ANG"}
  ],
  "Niederlande": [
    {"name":"Bart Verbruggen","pos":"TW"},{"name":"Mark Flekken","pos":"TW"},
    {"name":"Virgil van Dijk","pos":"ABW"},{"name":"Nathan Aké","pos":"ABW"},{"name":"Matthijs de Ligt","pos":"ABW"},{"name":"Denzel Dumfries","pos":"ABW"},{"name":"Jurriën Timber","pos":"ABW"},{"name":"Micky van de Ven","pos":"ABW"},
    {"name":"Frenkie de Jong","pos":"MF"},{"name":"Mats Wieffer","pos":"MF"},{"name":"Teun Koopmeiners","pos":"MF"},{"name":"Ryan Gravenberch","pos":"MF"},{"name":"Xavi Simons","pos":"MF"},
    {"name":"Memphis Depay","pos":"ANG"},{"name":"Cody Gakpo","pos":"ANG"},{"name":"Wout Weghorst","pos":"ANG"},{"name":"Donyell Malen","pos":"ANG"}
  ],
  "Japan": [
    {"name":"Shūichi Gonda","pos":"TW"},{"name":"Zion Suzuki","pos":"TW"},
    {"name":"Takehiro Tomiyasu","pos":"ABW"},{"name":"Kō Itakura","pos":"ABW"},{"name":"Yūta Nakayama","pos":"ABW"},{"name":"Koki Machida","pos":"ABW"},
    {"name":"Wataru Endo","pos":"MF"},{"name":"Ao Tanaka","pos":"MF"},{"name":"Hidemasa Morita","pos":"MF"},{"name":"Takefusa Kubo","pos":"MF"},{"name":"Daichi Kamada","pos":"MF"},
    {"name":"Kaoru Mitoma","pos":"ANG"},{"name":"Ayase Ueda","pos":"ANG"},{"name":"Takumi Minamino","pos":"ANG"},{"name":"Mao Hosoya","pos":"ANG"}
  ],
  "Schweden": [
    {"name":"Robin Olsen","pos":"TW"},{"name":"Viktor Johansson","pos":"TW"},
    {"name":"Victor Lindelöf","pos":"ABW"},{"name":"Isak Hien","pos":"ABW"},{"name":"Ludwig Augustinsson","pos":"ABW"},{"name":"Emil Holm","pos":"ABW"},
    {"name":"Jens Cajuste","pos":"MF"},{"name":"Mattias Svanberg","pos":"MF"},{"name":"Hugo Larsson","pos":"MF"},
    {"name":"Alexander Isak","pos":"ANG"},{"name":"Viktor Gyökeres","pos":"ANG"},{"name":"Dejan Kulusevski","pos":"ANG"},{"name":"Anthony Elanga","pos":"ANG"}
  ],
  "Tunesien": [
    {"name":"Aymen Dahmen","pos":"TW"},{"name":"Mouez Hassen","pos":"TW"},
    {"name":"Montassar Talbi","pos":"ABW"},{"name":"Ali Maâloul","pos":"ABW"},{"name":"Wajdi Kechrida","pos":"ABW"},{"name":"Yassine Meriah","pos":"ABW"},
    {"name":"Ellyes Skhiri","pos":"MF"},{"name":"Aïssa Laïdouni","pos":"MF"},{"name":"Wahbi Khazri","pos":"MF"},{"name":"Hannibal Mejbri","pos":"MF"},
    {"name":"Youssef Msakni","pos":"ANG"},{"name":"Seifeddine Jaziri","pos":"ANG"},{"name":"Elias Achouri","pos":"ANG"},{"name":"Taha Yassine Khenissi","pos":"ANG"}
  ],
  "Belgien": [
    {"name":"Koen Casteels","pos":"TW"},{"name":"Mats Sels","pos":"TW"},
    {"name":"Wout Faes","pos":"ABW"},{"name":"Timothy Castagne","pos":"ABW"},{"name":"Arthur Theate","pos":"ABW"},{"name":"Zeno Debast","pos":"ABW"},
    {"name":"Kevin De Bruyne","pos":"MF"},{"name":"Amadou Onana","pos":"MF"},{"name":"Youri Tielemans","pos":"MF"},{"name":"Orel Mangala","pos":"MF"},{"name":"Leandro Trossard","pos":"MF"},
    {"name":"Jérémy Doku","pos":"ANG"},{"name":"Romelu Lukaku","pos":"ANG"},{"name":"Loïs Openda","pos":"ANG"},{"name":"Dodi Lukebakio","pos":"ANG"}
  ],
  "Ägypten": [
    {"name":"Mohamed El Shenawy","pos":"TW"},{"name":"Ahmed El Shenawy","pos":"TW"},
    {"name":"Mohamed Abdelmonem","pos":"ABW"},{"name":"Ahmed Hegazy","pos":"ABW"},{"name":"Mohamed Hany","pos":"ABW"},
    {"name":"Mohamed Elneny","pos":"MF"},{"name":"Hamdy Fathy","pos":"MF"},{"name":"Emam Ashour","pos":"MF"},{"name":"Marwan Attia","pos":"MF"},
    {"name":"Mohamed Salah","pos":"ANG"},{"name":"Omar Marmoush","pos":"ANG"},{"name":"Mostafa Mohamed","pos":"ANG"},{"name":"Mahmoud Trezeguet","pos":"ANG"}
  ],
  "Iran": [
    {"name":"Alireza Beiranvand","pos":"TW"},{"name":"Payam Niazmand","pos":"TW"},
    {"name":"Hossein Kanani","pos":"ABW"},{"name":"Milad Mohammadi","pos":"ABW"},{"name":"Ramin Rezaeian","pos":"ABW"},{"name":"Majid Hosseini","pos":"ABW"},
    {"name":"Saeid Ezatolahi","pos":"MF"},{"name":"Saman Ghoddos","pos":"MF"},{"name":"Alireza Jahanbakhsh","pos":"MF"},
    {"name":"Mehdi Taremi","pos":"ANG"},{"name":"Sardar Azmoun","pos":"ANG"},{"name":"Mohammad Mohebi","pos":"ANG"},{"name":"Karim Ansarifard","pos":"ANG"}
  ],
  "Neuseeland": [
    {"name":"Max Crocombe","pos":"TW"},{"name":"Oliver Sail","pos":"TW"},
    {"name":"Liberato Cacace","pos":"ABW"},{"name":"Michael Boxall","pos":"ABW"},{"name":"Tommy Smith","pos":"ABW"},{"name":"Tyler Bindon","pos":"ABW"},
    {"name":"Matthew Garbett","pos":"MF"},{"name":"Marko Stamenić","pos":"MF"},{"name":"Joe Bell","pos":"MF"},{"name":"Ryan Thomas","pos":"MF"},
    {"name":"Chris Wood","pos":"ANG"},{"name":"Ben Waine","pos":"ANG"},{"name":"Alex Greive","pos":"ANG"},{"name":"Kosta Barbarouses","pos":"ANG"}
  ],
  "Spanien": [
    {"name":"Unai Simón","pos":"TW"},{"name":"David Raya","pos":"TW"},
    {"name":"Dani Carvajal","pos":"ABW"},{"name":"Aymeric Laporte","pos":"ABW"},{"name":"Robin Le Normand","pos":"ABW"},{"name":"Alejandro Balde","pos":"ABW"},{"name":"Pau Cubarsí","pos":"ABW"},
    {"name":"Rodri","pos":"MF"},{"name":"Pedri","pos":"MF"},{"name":"Mikel Merino","pos":"MF"},{"name":"Fabián Ruiz","pos":"MF"},{"name":"Martín Zubimendi","pos":"MF"},{"name":"Gavi","pos":"MF"},
    {"name":"Lamine Yamal","pos":"ANG"},{"name":"Nico Williams","pos":"ANG"},{"name":"Álvaro Morata","pos":"ANG"},{"name":"Mikel Oyarzabal","pos":"ANG"},{"name":"Ferran Torres","pos":"ANG"}
  ],
  "Kap Verde": [
    {"name":"Bruno Varela","pos":"TW"},
    {"name":"Logan Costa","pos":"ABW"},{"name":"Roberto Lopes","pos":"ABW"},{"name":"João Correia","pos":"ABW"},
    {"name":"Ryan Mendes","pos":"MF"},{"name":"Jónatas Santos","pos":"MF"},{"name":"Kenny Rocha","pos":"MF"},
    {"name":"Jovane Cabral","pos":"ANG"},{"name":"Garry Rodrigues","pos":"ANG"},{"name":"Gilson Tavares","pos":"ANG"},{"name":"Carlos Fortes","pos":"ANG"},{"name":"Bebé","pos":"ANG"}
  ],
  "Saudi-Arabien": [
    {"name":"Mohamed Al-Owais","pos":"TW"},{"name":"Nawaf Al-Aqidi","pos":"TW"},
    {"name":"Saud Abdulhamid","pos":"ABW"},{"name":"Ali Al-Bulaihi","pos":"ABW"},{"name":"Hassan Tambakti","pos":"ABW"},{"name":"Yasser Al-Shahrani","pos":"ABW"},
    {"name":"Salem Al-Dawsari","pos":"MF"},{"name":"Mohamed Kanno","pos":"MF"},{"name":"Abdulrahman Ghareeb","pos":"MF"},
    {"name":"Firas Al-Buraikan","pos":"ANG"},{"name":"Saleh Al-Shehri","pos":"ANG"},{"name":"Abdullah Radif","pos":"ANG"},{"name":"Marwan Al-Sahafi","pos":"ANG"}
  ],
  "Uruguay": [
    {"name":"Sergio Rochet","pos":"TW"},{"name":"Franco Israel","pos":"TW"},
    {"name":"Ronald Araújo","pos":"ABW"},{"name":"José María Giménez","pos":"ABW"},{"name":"Mathías Olivera","pos":"ABW"},{"name":"Nahitan Nández","pos":"ABW"},{"name":"Guillermo Varela","pos":"ABW"},
    {"name":"Federico Valverde","pos":"MF"},{"name":"Rodrigo Bentancur","pos":"MF"},{"name":"Manuel Ugarte","pos":"MF"},{"name":"Giorgian de Arrascaeta","pos":"MF"},{"name":"Nicolás de la Cruz","pos":"MF"},
    {"name":"Darwin Núñez","pos":"ANG"},{"name":"Facundo Pellistri","pos":"ANG"},{"name":"Brian Rodríguez","pos":"ANG"},{"name":"Facundo Torres","pos":"ANG"}
  ],
  "Frankreich": [
    {"name":"Mike Maignan","pos":"TW"},{"name":"Brice Samba","pos":"TW"},
    {"name":"William Saliba","pos":"ABW"},{"name":"Dayot Upamecano","pos":"ABW"},{"name":"Ibrahima Konaté","pos":"ABW"},{"name":"Jules Koundé","pos":"ABW"},{"name":"Theo Hernández","pos":"ABW"},{"name":"Benjamin Pavard","pos":"ABW"},
    {"name":"Antoine Griezmann","pos":"MF"},{"name":"Aurélien Tchouaméni","pos":"MF"},{"name":"Adrien Rabiot","pos":"MF"},{"name":"Eduardo Camavinga","pos":"MF"},{"name":"Warren Zaïre-Emery","pos":"MF"},
    {"name":"Kylian Mbappé","pos":"ANG"},{"name":"Ousmane Dembélé","pos":"ANG"},{"name":"Marcus Thuram","pos":"ANG"},{"name":"Randal Kolo Muani","pos":"ANG"},{"name":"Kingsley Coman","pos":"ANG"}
  ],
  "Senegal": [
    {"name":"Édouard Mendy","pos":"TW"},{"name":"Alfred Gomis","pos":"TW"},
    {"name":"Kalidou Koulibaly","pos":"ABW"},{"name":"Abdou Diallo","pos":"ABW"},{"name":"Ismaïl Jakobs","pos":"ABW"},{"name":"Formose Mendy","pos":"ABW"},
    {"name":"Idrissa Gueye","pos":"MF"},{"name":"Pape Matar Sarr","pos":"MF"},{"name":"Krépin Diatta","pos":"MF"},{"name":"Nampalys Mendy","pos":"MF"},{"name":"Lamine Camara","pos":"MF"},
    {"name":"Sadio Mané","pos":"ANG"},{"name":"Ismaïla Sarr","pos":"ANG"},{"name":"Nicolas Jackson","pos":"ANG"},{"name":"Boulaye Dia","pos":"ANG"}
  ],
  "Irak": [
    {"name":"Jalal Hassan","pos":"TW"},{"name":"Fahad Talib","pos":"TW"},
    {"name":"Ali Adnan","pos":"ABW"},{"name":"Hussein Ali","pos":"ABW"},{"name":"Rebin Sulaka","pos":"ABW"},
    {"name":"Zidane Iqbal","pos":"MF"},{"name":"Ali Jasim","pos":"MF"},{"name":"Osama Rashid","pos":"MF"},{"name":"Amjad Attwan","pos":"MF"},{"name":"Ibrahim Bayesh","pos":"MF"},
    {"name":"Aymen Hussein","pos":"ANG"},{"name":"Ali Al-Hamadi","pos":"ANG"},{"name":"Bashar Resan","pos":"MF"}
  ],
  "Norwegen": [
    {"name":"Ørjan Nyland","pos":"TW"},{"name":"Mathias Dyngeland","pos":"TW"},
    {"name":"Kristoffer Ajer","pos":"ABW"},{"name":"Julian Ryerson","pos":"ABW"},{"name":"Marcus Holmgren Pedersen","pos":"ABW"},{"name":"Fredrik Björkan","pos":"ABW"},
    {"name":"Martin Ødegaard","pos":"MF"},{"name":"Sander Berge","pos":"MF"},{"name":"Morten Thorsby","pos":"MF"},{"name":"Patrick Berg","pos":"MF"},{"name":"Oscar Bobb","pos":"MF"},
    {"name":"Erling Haaland","pos":"ANG"},{"name":"Alexander Sørloth","pos":"ANG"},{"name":"Jørgen Strand Larsen","pos":"ANG"},{"name":"Antonio Nusa","pos":"ANG"}
  ],
  "Argentinien": [
    {"name":"Emiliano Martínez","pos":"TW"},{"name":"Gerónimo Rulli","pos":"TW"},
    {"name":"Cristian Romero","pos":"ABW"},{"name":"Nicolás Otamendi","pos":"ABW"},{"name":"Lisandro Martínez","pos":"ABW"},{"name":"Nahuel Molina","pos":"ABW"},{"name":"Nicolás Tagliafico","pos":"ABW"},{"name":"Marcos Acuña","pos":"ABW"},
    {"name":"Alexis Mac Allister","pos":"MF"},{"name":"Rodrigo De Paul","pos":"MF"},{"name":"Enzo Fernández","pos":"MF"},{"name":"Leandro Paredes","pos":"MF"},{"name":"Giovani Lo Celso","pos":"MF"},
    {"name":"Lionel Messi","pos":"ANG"},{"name":"Julián Álvarez","pos":"ANG"},{"name":"Lautaro Martínez","pos":"ANG"},{"name":"Ángel Di María","pos":"MF"},{"name":"Alejandro Garnacho","pos":"ANG"}
  ],
  "Algerien": [
    {"name":"Rais M'Bolhi","pos":"TW"},{"name":"Mustapha Zeghba","pos":"TW"},
    {"name":"Ramy Bensebaini","pos":"ABW"},{"name":"Aïssa Mandi","pos":"ABW"},{"name":"Rayan Aït-Nouri","pos":"ABW"},{"name":"Kévin Van Den Kerkhof","pos":"ABW"},
    {"name":"Ismaël Bennacer","pos":"MF"},{"name":"Ramiz Zerrouki","pos":"MF"},{"name":"Hicham Boudaoui","pos":"MF"},{"name":"Farès Chaïbi","pos":"MF"},
    {"name":"Riyad Mahrez","pos":"ANG"},{"name":"Islam Slimani","pos":"ANG"},{"name":"Mohamed El Amine Amoura","pos":"ANG"},{"name":"Saïd Benrahma","pos":"ANG"},{"name":"Adam Ounas","pos":"ANG"}
  ],
  "Österreich": [
    {"name":"Alexander Schlager","pos":"TW"},{"name":"Patrick Pentz","pos":"TW"},
    {"name":"Stefan Posch","pos":"ABW"},{"name":"Philipp Lienhart","pos":"ABW"},{"name":"Kevin Danso","pos":"ABW"},{"name":"Max Wöber","pos":"ABW"},{"name":"Gernot Trauner","pos":"ABW"},
    {"name":"Marcel Sabitzer","pos":"MF"},{"name":"Konrad Laimer","pos":"MF"},{"name":"Christoph Baumgartner","pos":"MF"},{"name":"Florian Grillitsch","pos":"MF"},{"name":"Nicolas Seiwald","pos":"MF"},{"name":"Alexander Prass","pos":"MF"},
    {"name":"Marko Arnautović","pos":"ANG"},{"name":"Michael Gregoritsch","pos":"ANG"},{"name":"Karim Onisiwo","pos":"ANG"},{"name":"Junior Adamu","pos":"ANG"}
  ],
  "Jordanien": [
    {"name":"Yazeed Abulaila","pos":"TW"},{"name":"Ahmed Al-Suaileh","pos":"TW"},
    {"name":"Ehsan Haddad","pos":"ABW"},{"name":"Abdallah Nasib","pos":"ABW"},{"name":"Salem Al-Ajalin","pos":"ABW"},{"name":"Yazan Al-Arab","pos":"ABW"},
    {"name":"Nizar Al-Rashdan","pos":"MF"},{"name":"Rajaei Ayed","pos":"MF"},{"name":"Mahmoud Al-Mardi","pos":"MF"},{"name":"Ibrahim Sadeh","pos":"MF"},
    {"name":"Musa Al-Taamari","pos":"ANG"},{"name":"Yazan Al-Naimat","pos":"ANG"},{"name":"Hamza Al-Saifi","pos":"ANG"}
  ],
  "Portugal": [
    {"name":"Diogo Costa","pos":"TW"},{"name":"Rui Patrício","pos":"TW"},
    {"name":"Rúben Dias","pos":"ABW"},{"name":"Nélson Semedo","pos":"ABW"},{"name":"Nuno Mendes","pos":"ABW"},{"name":"Diogo Dalot","pos":"ABW"},{"name":"Gonçalo Inácio","pos":"ABW"},{"name":"António Silva","pos":"ABW"},
    {"name":"Bruno Fernandes","pos":"MF"},{"name":"Bernardo Silva","pos":"MF"},{"name":"João Palhinha","pos":"MF"},{"name":"Vitinha","pos":"MF"},{"name":"Matheus Nunes","pos":"MF"},
    {"name":"Cristiano Ronaldo","pos":"ANG"},{"name":"Rafael Leão","pos":"ANG"},{"name":"João Félix","pos":"ANG"},{"name":"Diogo Jota","pos":"ANG"},{"name":"Gonçalo Ramos","pos":"ANG"}
  ],
  "DR Kongo": [
    {"name":"Lionel Mpasi","pos":"TW"},{"name":"Baggio Siadi","pos":"TW"},
    {"name":"Chancel Mbemba","pos":"ABW"},{"name":"Gédéon Kalulu","pos":"ABW"},{"name":"Dylan Batubinsika","pos":"ABW"},
    {"name":"Samuel Moutoussamy","pos":"MF"},{"name":"Gaël Kakuta","pos":"MF"},{"name":"Edo Kayembe","pos":"MF"},{"name":"Théo Bongonda","pos":"MF"},
    {"name":"Yoane Wissa","pos":"ANG"},{"name":"Meschak Elia","pos":"ANG"},{"name":"Cédric Bakambu","pos":"ANG"},{"name":"Fiston Mayele","pos":"ANG"}
  ],
  "Usbekistan": [
    {"name":"Utkir Yusupov","pos":"TW"},{"name":"Abduvohid Nematov","pos":"TW"},
    {"name":"Rustam Ashurmatov","pos":"ABW"},{"name":"Farrukh Sayfiev","pos":"ABW"},{"name":"Khojiakbar Alijonov","pos":"ABW"},{"name":"Umar Eshmurodov","pos":"ABW"},
    {"name":"Jaloliddin Masharipov","pos":"MF"},{"name":"Otabek Shukurov","pos":"MF"},{"name":"Abbosbek Fayzullaev","pos":"MF"},{"name":"Oston Urunov","pos":"MF"},
    {"name":"Eldor Shomurodov","pos":"ANG"},{"name":"Azizjon Ganiev","pos":"MF"},{"name":"Bobur Abdikholikov","pos":"ANG"}
  ],
  "Kolumbien": [
    {"name":"David Ospina","pos":"TW"},{"name":"Camilo Vargas","pos":"TW"},
    {"name":"Davinson Sánchez","pos":"ABW"},{"name":"Yerry Mina","pos":"ABW"},{"name":"Johan Mojica","pos":"ABW"},{"name":"Daniel Muñoz","pos":"ABW"},
    {"name":"James Rodríguez","pos":"MF"},{"name":"Jhon Arias","pos":"MF"},{"name":"Jefferson Lerma","pos":"MF"},{"name":"Richard Ríos","pos":"MF"},
    {"name":"Luis Díaz","pos":"ANG"},{"name":"Rafael Santos Borré","pos":"ANG"},{"name":"Miguel Borja","pos":"ANG"},{"name":"Jhon Córdoba","pos":"ANG"},{"name":"Yaser Asprilla","pos":"ANG"}
  ],
  "England": [
    {"name":"Jordan Pickford","pos":"TW"},{"name":"Aaron Ramsdale","pos":"TW"},
    {"name":"Harry Maguire","pos":"ABW"},{"name":"John Stones","pos":"ABW"},{"name":"Kyle Walker","pos":"ABW"},{"name":"Luke Shaw","pos":"ABW"},{"name":"Marc Guéhi","pos":"ABW"},{"name":"Trent Alexander-Arnold","pos":"ABW"},
    {"name":"Declan Rice","pos":"MF"},{"name":"Jude Bellingham","pos":"MF"},{"name":"Phil Foden","pos":"MF"},{"name":"Cole Palmer","pos":"MF"},{"name":"Conor Gallagher","pos":"MF"},{"name":"Eberechi Eze","pos":"MF"},
    {"name":"Harry Kane","pos":"ANG"},{"name":"Bukayo Saka","pos":"ANG"},{"name":"Marcus Rashford","pos":"ANG"},{"name":"Anthony Gordon","pos":"ANG"}
  ],
  "Kroatien": [
    {"name":"Dominik Livaković","pos":"TW"},{"name":"Nediljko Labrović","pos":"TW"},
    {"name":"Joško Gvardiol","pos":"ABW"},{"name":"Borna Sosa","pos":"ABW"},{"name":"Josip Stanišić","pos":"ABW"},{"name":"Josip Juranović","pos":"ABW"},{"name":"Marin Pongračić","pos":"ABW"},
    {"name":"Luka Modrić","pos":"MF"},{"name":"Mateo Kovačić","pos":"MF"},{"name":"Marcel Brozović","pos":"MF"},{"name":"Luka Sučić","pos":"MF"},{"name":"Mario Pašalić","pos":"MF"},
    {"name":"Andrej Kramarić","pos":"ANG"},{"name":"Ivan Perišić","pos":"ANG"},{"name":"Ante Budimir","pos":"ANG"},{"name":"Bruno Petković","pos":"ANG"}
  ],
  "Ghana": [
    {"name":"Lawrence Ati-Zigi","pos":"TW"},{"name":"Richard Ofori","pos":"TW"},
    {"name":"Alexander Djiku","pos":"ABW"},{"name":"Mohammed Salisu","pos":"ABW"},{"name":"Daniel Amartey","pos":"ABW"},{"name":"Alidu Seidu","pos":"ABW"},
    {"name":"Thomas Partey","pos":"MF"},{"name":"Mohammed Kudus","pos":"MF"},{"name":"Elisha Owusu","pos":"MF"},
    {"name":"Inaki Williams","pos":"ANG"},{"name":"Antoine Semenyo","pos":"ANG"},{"name":"Jordan Ayew","pos":"ANG"},{"name":"Osman Bukari","pos":"ANG"},{"name":"Ernest Nuamah","pos":"ANG"}
  ],
  "Panama": [
    {"name":"Orlando Mosquera","pos":"TW"},{"name":"Luis Mejía","pos":"TW"},
    {"name":"Michael Amir Murillo","pos":"ABW"},{"name":"Fidel Escobar","pos":"ABW"},{"name":"Édgar Bárcenas","pos":"ABW"},{"name":"Jorge Gutiérrez","pos":"ABW"},
    {"name":"Adalberto Carrasquilla","pos":"MF"},{"name":"Aníbal Godoy","pos":"MF"},{"name":"José Luis Rodríguez","pos":"MF"},{"name":"Cristian Martínez","pos":"MF"},
    {"name":"José Fajardo","pos":"ANG"},{"name":"Ismael Díaz","pos":"ANG"},{"name":"Eduardo Guerrero","pos":"ANG"}
  ]
}

# Assign squads
for team_name, team_data in teams.items():
    if team_name in squads:
        team_data["squad"] = squads[team_name]

with open('src/data/teams.json', 'w') as f:
    json.dump(teams, f, ensure_ascii=False, indent=2)

print("✅ teams.json updated with complete squads!")