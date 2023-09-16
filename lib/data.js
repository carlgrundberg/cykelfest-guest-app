import { google } from "googleapis";
import timestamps from "./timestamps";

const staticData = {
  "Gästlista": [
    [
      "Thomas & Monia",
      "Ubbaltsvägen 21, Sjögläntan ",
      "Efterrätt",
      "Jenny o Peter ",
      "Ubbaltsvägen 10",
      "Erika och Ola ",
      "Beatabacken 18",
      "Thomas & Monia",
      "Ubbaltsvägen 21, Sjögläntan "
    ],
    [
      "Martin och Zita",
      "Ringvägen 16",
      "Förrätt",
      "Martin och Zita",
      "Ringvägen 16",
      "Erika och Ola ",
      "Beatabacken 18",
      "Lars-Göran o Elisabeth ",
      "Snöbärsvägen 3"
    ],
    [
      "Mia och Kenny",
      "Molins Backe 4 ",
      "Efterrätt",
      "Villa Blåsol",
      "Ramnsjövägen 42",
      "Annelie o Ronny ",
      "Snöbärsvägen 10",
      "Mia och Kenny",
      "Molins Backe 4 "
    ],
    [
      "Annika och Lasse",
      "Markarydsvägen 15",
      "Efterrätt",
      "Therése och Kristian",
      "Brantliden 6",
      "Thord och Charlotta ",
      "Duvgatan 8",
      "Annika och Lasse",
      "Markarydsvägen 15"
    ],
    [
      "Therése och Kristian",
      "Brantliden 6",
      "Förrätt",
      "Therése och Kristian",
      "Brantliden 6",
      "Charlotte och Magnus",
      "Karl perssonsväg 21",
      "Björn och Helen",
      "Västanvägen 23"
    ],
    [
      "Catta och Mange ",
      "Duvgatan 3",
      "Huvudrätt",
      "Karin & Lasse",
      "Björkvägen 1",
      "Catta och Mange ",
      "Duvgatan 3",
      "Christine & Kristian",
      "Snapphanevägen 12"
    ],
    [
      "Katarina & Paul ",
      "Snapphanevägen 15",
      "Efterrätt",
      "Stina o Jimmy",
      "Västanvägen 1",
      "Christel o Per Ternemo",
      "Hobbystigen 3",
      "Katarina & Paul ",
      "Snapphanevägen 15"
    ],
    [
      "Hilde och Tobbe",
      "Granvägen 15",
      "Efterrätt",
      "Tobbe & Susann",
      "Ringvägen 12",
      "Linda och Glenn ",
      "Uddvägen 3",
      "Hilde och Tobbe",
      "Granvägen 15"
    ],
    [
      "Henrik och Mia ",
      "Länsmansvägen 14 ",
      "Efterrätt",
      "Madde och Jonas ",
      "Ramnsjövägen 5",
      "Marinette & Niclas",
      "Karl Perssons väg 7",
      "Henrik och Mia ",
      "Länsmansvägen 14 "
    ],
    [
      "Carina o Michael",
      "Snapphanevägen 15",
      "Förrätt",
      "Carina o Michael",
      "Snapphanevägen 15",
      "Ida och Gustav",
      "Badvägen 8",
      "Anders å Ingrid W",
      "Ringvägen 6"
    ],
    [
      "Björn och Helen",
      "Västanvägen 23",
      "Efterrätt",
      "Martina och Berne ",
      "Ubbaltsvägen 21, Sjögläntan ",
      "Ida och Gustav",
      "Badvägen 8",
      "Björn och Helen",
      "Västanvägen 23"
    ],
    [
      "Tessan och Janne",
      "Ubbaltsvägen 2",
      "Förrätt",
      "Tessan och Janne",
      "Ubbaltsvägen 2",
      "Marinette & Niclas",
      "Karl Perssons väg 7",
      "Annika och Lasse",
      "Markarydsvägen 15"
    ],
    [
      "Stina o Jimmy",
      "Västanvägen 1",
      "Förrätt",
      "Stina o Jimmy",
      "Västanvägen 1",
      "Dina och Christian ",
      "Strandgatan 3",
      "Ann-Sofie & Joakim Blank",
      "Pilvägen 8"
    ],
    [
      "Kajsa och Henrik",
      "Kopparslagaregatan 8",
      "Förrätt",
      "Kajsa och Henrik",
      "Kopparslagaregatan 8",
      "Sara och Henrik",
      "Gundrastorpsvägen 2B",
      "Katarina & Paul ",
      "Snapphanevägen 15"
    ],
    [
      "Martin o Nilla Andersen",
      "Ubbaltsvägen 9",
      "Huvudrätt",
      "Tobbe & Susann",
      "Ringvägen 12",
      "Martin o Nilla Andersen",
      "Ubbaltsvägen 9",
      "Anders och Lina",
      "Länsmansvägen 11"
    ],
    [
      "Anders och Lina",
      "Länsmansvägen 11",
      "Efterrätt",
      "Johan och Jette",
      "Oxelvägen 2",
      "CinaåBosse ",
      "Sjöbackavägen 7",
      "Anders och Lina",
      "Länsmansvägen 11"
    ],
    [
      "Christine & Kristian",
      "Snapphanevägen 12",
      "Efterrätt",
      "Tessan och Janne",
      "Ubbaltsvägen 2",
      "Charlotte och Magnus",
      "Karl perssonsväg 21",
      "Christine & Kristian",
      "Snapphanevägen 12"
    ],
    [
      "Marinette & Niclas",
      "Karl Perssons väg 7",
      "Huvudrätt",
      "Veronica och Björn ",
      "Granvägen 7",
      "Marinette & Niclas",
      "Karl Perssons väg 7",
      "Anders å Ingrid W",
      "Ringvägen 6"
    ],
    [
      "Charlotte och Magnus",
      "Karl perssonsväg 21",
      "Huvudrätt",
      "Martina och Berne ",
      "Ubbaltsvägen 21, Sjögläntan ",
      "Charlotte och Magnus",
      "Karl perssonsväg 21",
      "Annika och Lasse",
      "Markarydsvägen 15"
    ],
    [
      "Sara Jönsson  och Martin Lorenz ",
      "Ubbbaltsvägen 8",
      "Efterrätt",
      "Peter och Katrin ",
      "Doppvägen 3 ",
      "Catta och Mange ",
      "Duvgatan 3",
      "Sara Jönsson  och Martin Lorenz ",
      "Ubbbaltsvägen 8"
    ],
    [
      "Lars-Göran o Elisabeth ",
      "Snöbärsvägen 3",
      "Efterrätt",
      "Ola o Emelie",
      "Badvägen 8",
      "Mattias och Ann-Sofie",
      "Oxelvägen 5",
      "Lars-Göran o Elisabeth ",
      "Snöbärsvägen 3"
    ],
    [
      "Linda och Glenn ",
      "Uddvägen 3",
      "Huvudrätt",
      "Jenny o Peter ",
      "Ubbaltsvägen 10",
      "Linda och Glenn ",
      "Uddvägen 3",
      "Tompa och Molle",
      "Falkgatan 18"
    ],
    [
      "Villa Blåsol",
      "Ramnsjövägen 42",
      "Förrätt",
      "Villa Blåsol",
      "Ramnsjövägen 42",
      "Catta och Mange ",
      "Duvgatan 3",
      "Susanne och Reine",
      "Oretorpsvägen 20"
    ],
    [
      "Kerstin och Tommy.",
      "Snöbärsvägen 2",
      "Efterrätt",
      "Veronica och Björn ",
      "Granvägen 7",
      "Oskar och Lotta",
      "Västanvägen 3",
      "Kerstin och Tommy.",
      "Snöbärsvägen 2"
    ],
    [
      "Ann-Sofie & Joakim Blank",
      "Pilvägen 8",
      "Efterrätt",
      "Carina o Michael",
      "Snapphanevägen 15",
      "Kim o Mikael",
      "Västanvägen 63",
      "Ann-Sofie & Joakim Blank",
      "Pilvägen 8"
    ],
    [
      "Sonny & Camilla Lilja",
      "Markarydsvägen 19",
      "Förrätt",
      "Sonny & Camilla Lilja",
      "Markarydsvägen 19",
      "Linda och Glenn ",
      "Uddvägen 3",
      "Thomas & Monia",
      "Ubbaltsvägen 21, Sjögläntan "
    ],
    [
      "Dina och Christian ",
      "Strandgatan 3",
      "Huvudrätt",
      "Carina o Michael",
      "Snapphanevägen 15",
      "Dina och Christian ",
      "Strandgatan 3",
      "Heléne o Anders Jacobsson ",
      "Duvgatan 3"
    ],
    [
      "Heléne o Anders Jacobsson ",
      "Duvgatan 3",
      "Efterrätt",
      "Martin och Zita",
      "Ringvägen 16",
      "Sara och Henrik",
      "Gundrastorpsvägen 2B",
      "Heléne o Anders Jacobsson ",
      "Duvgatan 3"
    ],
    [
      "Marie-Louise och Pontus",
      "Ring vägen 4",
      "Förrätt",
      "Marie-Louise och Pontus",
      "Ring vägen 4",
      "Tommy o Helena",
      "Snapphanevägen 15",
      "Christine & Kristian",
      "Snapphanevägen 12"
    ],
    [
      "Jörgen och Linda",
      "Doppvägen 5",
      "Huvudrätt",
      "Lisa o Kent Svensson ",
      "Beatabacken 16",
      "Jörgen och Linda",
      "Doppvägen 5",
      "Hilde och Tobbe",
      "Granvägen 15"
    ],
    [
      "Christel o Per Ternemo",
      "Hobbystigen 3",
      "Huvudrätt",
      "Therése och Kristian",
      "Brantliden 6",
      "Christel o Per Ternemo",
      "Hobbystigen 3",
      "Henrik och Mia ",
      "Länsmansvägen 14 "
    ],
    [
      "Erika och Ola ",
      "Beatabacken 18",
      "Huvudrätt",
      "Ola o Emelie",
      "Badvägen 8",
      "Erika och Ola ",
      "Beatabacken 18",
      "Ann-Christine & Rolf",
      "Benvedsvägen 8"
    ],
    [
      "Martina och Berne ",
      "Ubbaltsvägen 21, Sjögläntan ",
      "Förrätt",
      "Martina och Berne ",
      "Ubbaltsvägen 21, Sjögläntan ",
      "Christel o Per Ternemo",
      "Hobbystigen 3",
      "Ann-Christine & Rolf",
      "Benvedsvägen 8"
    ],
    [
      "Anders å Ingrid W",
      "Ringvägen 6",
      "Efterrätt",
      "Mia & Olle Svensson",
      "Falkgatan 2",
      "Eva Glans Anders Olsson ",
      "Länsmansvägen 4",
      "Anders å Ingrid W",
      "Ringvägen 6"
    ],
    [
      "Erik och Lotti ",
      "Västanvägen 55",
      "Huvudrätt",
      "Johan och Jette",
      "Oxelvägen 2",
      "Erik och Lotti ",
      "Västanvägen 55",
      "Sara Jönsson  och Martin Lorenz ",
      "Ubbbaltsvägen 8"
    ],
    [
      "Eva Glans Anders Olsson ",
      "Länsmansvägen 4",
      "Huvudrätt",
      "Marie-Louise och Pontus",
      "Ring vägen 4",
      "Eva Glans Anders Olsson ",
      "Länsmansvägen 4",
      "Kerstin och Tommy.",
      "Snöbärsvägen 2"
    ],
    [
      "Annelie o Ronny ",
      "Snöbärsvägen 10",
      "Huvudrätt",
      "Mia & Olle Svensson",
      "Falkgatan 2",
      "Annelie o Ronny ",
      "Snöbärsvägen 10",
      "Veronica och Mikael",
      "Ramnsjövägen 34"
    ],
    [
      "Mattias och Ann-Sofie",
      "Oxelvägen 5",
      "Huvudrätt",
      "Sonny & Camilla Lilja",
      "Markarydsvägen 19",
      "Mattias och Ann-Sofie",
      "Oxelvägen 5",
      "Maria o Oskar",
      "Länsmansvägen 10"
    ],
    [
      "Jonas o Pernilla",
      "strandgatan 7",
      "Huvudrätt",
      "Peter och Katrin ",
      "Doppvägen 3 ",
      "Jonas o Pernilla",
      "strandgatan 7",
      "Susanne och Reine",
      "Oretorpsvägen 20"
    ],
    [
      "Peter och Katrin ",
      "Doppvägen 3 ",
      "Förrätt",
      "Peter och Katrin ",
      "Doppvägen 3 ",
      "Erik och Lotti ",
      "Västanvägen 55",
      "Gunilla o Gösta olsson",
      "Hobbystigen 3"
    ],
    [
      "Ida och Gustav",
      "Badvägen 8",
      "Huvudrätt",
      "Kajsa och Henrik",
      "Kopparslagaregatan 8",
      "Ida och Gustav",
      "Badvägen 8",
      "Ann-Sofie & Joakim Blank",
      "Pilvägen 8"
    ],
    [
      "Tompa och Molle",
      "Falkgatan 18",
      "Efterrätt",
      "Sonny & Camilla Lilja",
      "Markarydsvägen 19",
      "Martin o Nilla Andersen",
      "Ubbaltsvägen 9",
      "Tompa och Molle",
      "Falkgatan 18"
    ],
    [
      "Ola o Emelie",
      "Badvägen 8",
      "Förrätt",
      "Ola o Emelie",
      "Badvägen 8",
      "Kim o Mikael",
      "Västanvägen 63",
      "Heléne o Anders Jacobsson ",
      "Duvgatan 3"
    ],
    [
      "Madde och Jonas ",
      "Ramnsjövägen 5",
      "Förrätt",
      "Madde och Jonas ",
      "Ramnsjövägen 5",
      "Eva Glans Anders Olsson ",
      "Länsmansvägen 4",
      "Veronica och Mikael",
      "Ramnsjövägen 34"
    ],
    [
      "Mia & Olle Svensson",
      "Falkgatan 2",
      "Förrätt",
      "Mia & Olle Svensson",
      "Falkgatan 2",
      "Oskar och Lotta",
      "Västanvägen 3",
      "Mia och Kenny",
      "Molins Backe 4 "
    ],
    [
      "Marcus och Linda ",
      "Bokebacken 4 ",
      "Huvudrätt",
      "Villa Blåsol",
      "Ramnsjövägen 42",
      "Marcus och Linda ",
      "Bokebacken 4 ",
      "Mattias o Anna",
      "Hålvägen 2"
    ],
    [
      "CinaåBosse ",
      "Sjöbackavägen 7",
      "Huvudrätt",
      "Nilla & Sebastian ",
      "Tallvägen 3",
      "CinaåBosse ",
      "Sjöbackavägen 7",
      "Lars-Göran o Elisabeth ",
      "Snöbärsvägen 3"
    ],
    [
      "Sara och Henrik",
      "Gundrastorpsvägen 2B",
      "Huvudrätt",
      "Stina o Jimmy",
      "Västanvägen 1",
      "Sara och Henrik",
      "Gundrastorpsvägen 2B",
      "Thomas & Monia",
      "Ubbaltsvägen 21, Sjögläntan "
    ],
    [
      "Veronica och Björn ",
      "Granvägen 7",
      "Förrätt",
      "Veronica och Björn ",
      "Granvägen 7",
      "Thord och Charlotta ",
      "Duvgatan 8",
      "Henrik och Mia ",
      "Länsmansvägen 14 "
    ],
    [
      "Johan och Jette",
      "Oxelvägen 2",
      "Förrätt",
      "Johan och Jette",
      "Oxelvägen 2",
      "Jonas o Pernilla",
      "strandgatan 7",
      "Maria o Oskar",
      "Länsmansvägen 10"
    ],
    [
      "Veronica och Mikael",
      "Ramnsjövägen 34",
      "Efterrätt",
      "Marie-Louise och Pontus",
      "Ring vägen 4",
      "Tommy o Helena",
      "Snapphanevägen 15",
      "Veronica och Mikael",
      "Ramnsjövägen 34"
    ],
    [
      "Tommy o Helena",
      "Snapphanevägen 15",
      "Huvudrätt",
      "Morgan och Jeannette",
      "Oretorpsvägen 20",
      "Tommy o Helena",
      "Snapphanevägen 15",
      "Gunilla o Gösta olsson",
      "Hobbystigen 3"
    ],
    [
      "Thord och Charlotta ",
      "Duvgatan 8",
      "Huvudrätt",
      "Tessan och Janne",
      "Ubbaltsvägen 2",
      "Thord och Charlotta ",
      "Duvgatan 8",
      "Björn och Helen",
      "Västanvägen 23"
    ],
    [
      "Lisa o Kent Svensson ",
      "Beatabacken 16",
      "Förrätt",
      "Lisa o Kent Svensson ",
      "Beatabacken 16",
      "CinaåBosse ",
      "Sjöbackavägen 7",
      "Sara Jönsson  och Martin Lorenz ",
      "Ubbbaltsvägen 8"
    ],
    [
      "Ann-Christine & Rolf",
      "Benvedsvägen 8",
      "Efterrätt",
      "Kajsa och Henrik",
      "Kopparslagaregatan 8",
      "Dina och Christian ",
      "Strandgatan 3",
      "Ann-Christine & Rolf",
      "Benvedsvägen 8"
    ],
    [
      "Gunilla o Gösta olsson",
      "Hobbystigen 3",
      "Efterrätt",
      "Karin & Lasse",
      "Björkvägen 1",
      "Erik och Lotti ",
      "Västanvägen 55",
      "Gunilla o Gösta olsson",
      "Hobbystigen 3"
    ],
    [
      "Karin & Lasse",
      "Björkvägen 1",
      "Förrätt",
      "Karin & Lasse",
      "Björkvägen 1",
      "Marcus och Linda ",
      "Bokebacken 4 ",
      "Anders och Lina",
      "Länsmansvägen 11"
    ],
    [
      "Susanne och Reine",
      "Oretorpsvägen 20",
      "Efterrätt",
      "Morgan och Jeannette",
      "Oretorpsvägen 20",
      "Marcus och Linda ",
      "Bokebacken 4 ",
      "Susanne och Reine",
      "Oretorpsvägen 20"
    ],
    [
      "Nilla & Sebastian ",
      "Tallvägen 3",
      "Förrätt",
      "Nilla & Sebastian ",
      "Tallvägen 3",
      "Jörgen och Linda",
      "Doppvägen 5",
      "Mattias o Anna",
      "Hålvägen 2"
    ],
    [
      "Tobbe & Susann",
      "Ringvägen 12",
      "Förrätt",
      "Tobbe & Susann",
      "Ringvägen 12",
      "Mattias och Ann-Sofie",
      "Oxelvägen 5",
      "Tompa och Molle",
      "Falkgatan 18"
    ],
    [
      "Morgan och Jeannette",
      "Oretorpsvägen 20",
      "Förrätt",
      "Morgan och Jeannette",
      "Oretorpsvägen 20",
      "Annelie o Ronny ",
      "Snöbärsvägen 10",
      "Kerstin och Tommy.",
      "Snöbärsvägen 2"
    ],
    [
      "Kim o Mikael",
      "Västanvägen 63",
      "Huvudrätt",
      "Martin och Zita",
      "Ringvägen 16",
      "Kim o Mikael",
      "Västanvägen 63",
      "Katarina & Paul ",
      "Snapphanevägen 15"
    ],
    [
      "Oskar och Lotta",
      "Västanvägen 3",
      "Huvudrätt",
      "Madde och Jonas ",
      "Ramnsjövägen 5",
      "Oskar och Lotta",
      "Västanvägen 3",
      "Mia och Kenny",
      "Molins Backe 4 "
    ],
    [
      "Mattias o Anna",
      "Hålvägen 2",
      "Efterrätt",
      "Lisa o Kent Svensson ",
      "Beatabacken 16",
      "Jonas o Pernilla",
      "strandgatan 7",
      "Mattias o Anna",
      "Hålvägen 2"
    ],
    [
      "Jenny o Peter ",
      "Ubbaltsvägen 10",
      "Förrätt",
      "Jenny o Peter ",
      "Ubbaltsvägen 10",
      "Jörgen och Linda",
      "Doppvägen 5",
      "Mia och Kenny",
      "Molins Backe 4 "
    ],
    [
      "Carl o Johanna",
      "Snapphanevägen 29",
      "-",
      "Stina o Jimmy",
      "Västanvägen 1",
      "Marcus och Linda ",
      "Bokebacken 4 ",
      "Tompa och Molle",
      "Falkgatan 18"
    ],
    [
      "Ingela o Niclas",
      "Gundrastorpsvägen 13a",
      "-",
      "Madde och Jonas ",
      "Ramnsjövägen 5",
      "CinaåBosse ",
      "Sjöbackavägen 7",
      "Hilde och Tobbe",
      "Granvägen 15"
    ],
    [
      "Maria o Oskar",
      "Länsmansvägen 10",
      "Efterrätt",
      "Nilla & Sebastian ",
      "Tallvägen 3",
      "Martin o Nilla Andersen",
      "Ubbaltsvägen 9",
      "Björn och Helen",
      "Västanvägen 23"
    ]
  ],
  "Måltider": [
    [
      "Peter och Katrin ",
      "Doppvägen 3 ",
      "+46705460960",
      "0705548014",
      "Förrätt",
      "",
      "Jonas o Pernilla",
      "strandgatan 7",
      "Sara Jönsson  och Martin Lorenz ",
      "Ubbbaltsvägen 8",
      "",
      "",
      "Ja"
    ],
    [
      "Johan och Jette",
      "Oxelvägen 2",
      "0705240712",
      "+4531337511",
      "Förrätt",
      "",
      "Erik och Lotti ",
      "Västanvägen 55",
      "Anders och Lina",
      "Länsmansvägen 11",
      "",
      "",
      "Ja"
    ],
    [
      "Lisa o Kent Svensson ",
      "Beatabacken 16",
      "0709644089",
      "0733829588",
      "Förrätt",
      "",
      "Jörgen och Linda",
      "Doppvägen 5",
      "Mattias o Anna",
      "Hålvägen 2",
      "",
      "",
      "Ja"
    ],
    [
      "Nilla & Sebastian ",
      "Tallvägen 3",
      "0768785584",
      "+46 73-505 81 52",
      "Förrätt",
      "",
      "CinaåBosse ",
      "Sjöbackavägen 7",
      "Maria o Oskar",
      "Länsmansvägen 10",
      "",
      "",
      "Ja"
    ],
    [
      "Tobbe & Susann",
      "Ringvägen 12",
      "0705595275",
      "0706733728",
      "Förrätt",
      "",
      "Martin o Nilla Andersen",
      "Ubbaltsvägen 9",
      "Hilde och Tobbe",
      "Granvägen 15",
      "",
      "",
      "Ja"
    ],
    [
      "Jenny o Peter ",
      "Ubbaltsvägen 10",
      "0730933569",
      "0708423393",
      "Förrätt",
      "",
      "Linda och Glenn ",
      "Uddvägen 3",
      "Thomas & Monia",
      "Ubbaltsvägen 21, Sjögläntan ",
      "",
      "",
      "Ja"
    ],
    [
      "Sonny & Camilla Lilja",
      "Markarydsvägen 19",
      "070-3129911",
      "070-5233074",
      "Förrätt",
      "En äter inte fisk eller skaldjur.",
      "Mattias och Ann-Sofie",
      "Oxelvägen 5",
      "Tompa och Molle",
      "Falkgatan 18",
      "",
      "",
      "Ja"
    ],
    [
      "Ola o Emelie",
      "Badvägen 8",
      "0733168577",
      "0768785544",
      "Förrätt",
      "Jordnöt",
      "Erika och Ola ",
      "Beatabacken 18",
      "Lars-Göran o Elisabeth ",
      "Snöbärsvägen 3",
      "",
      "",
      "Ja"
    ],
    [
      "Martin och Zita",
      "Ringvägen 16",
      "0721808286",
      "0708658252",
      "Förrätt",
      "",
      "Kim o Mikael",
      "Västanvägen 63",
      "Heléne o Anders Jacobsson ",
      "Duvgatan 3",
      "",
      "",
      "Ja"
    ],
    [
      "Carina o Michael",
      "Snapphanevägen 15",
      "0708928030",
      "0707460055",
      "Förrätt",
      "En äter inte kött.",
      "Dina och Christian ",
      "Strandgatan 3",
      "Ann-Sofie & Joakim Blank",
      "Pilvägen 8",
      "",
      "",
      "Ja"
    ],
    [
      "Stina o Jimmy",
      "Västanvägen 1",
      "0709211985",
      "0730473294",
      "Förrätt",
      "",
      "Sara och Henrik",
      "Gundrastorpsvägen 2B",
      "Katarina & Paul ",
      "Snapphanevägen 15",
      "Carl o Johanna",
      "Snapphanevägen 29",
      "Ja"
    ],
    [
      "Kajsa och Henrik",
      "Kopparslagaregatan 8",
      "0768999915",
      "0708456022",
      "Förrätt",
      "",
      "Ida och Gustav",
      "Badvägen 8",
      "Ann-Christine & Rolf",
      "Benvedsvägen 8",
      "",
      "",
      "Ja"
    ],
    [
      "Martina och Berne ",
      "Ubbaltsvägen 21, Sjögläntan ",
      "0708462019",
      "0705668641",
      "Förrätt",
      "",
      "Charlotte och Magnus",
      "Karl perssonsväg 21",
      "Björn och Helen",
      "Västanvägen 23",
      "",
      "",
      "Ja"
    ],
    [
      "Therése och Kristian",
      "Brantliden 6",
      "0734-292011",
      "0734-292010",
      "Förrätt",
      "",
      "Christel o Per Ternemo",
      "Hobbystigen 3",
      "Annika och Lasse",
      "Markarydsvägen 15",
      "",
      "",
      "Ja"
    ],
    [
      "Tessan och Janne",
      "Ubbaltsvägen 2",
      "0709166553",
      "072-191 34 87",
      "Förrätt",
      "",
      "Thord och Charlotta ",
      "Duvgatan 8",
      "Christine & Kristian",
      "Snapphanevägen 12",
      "",
      "",
      "Ja"
    ],
    [
      "Veronica och Björn ",
      "Granvägen 7",
      "0702125642",
      "0729638820",
      "Förrätt",
      "En person är glutenintolerant och tål inte mjölkprotein. Det är inte samma som laktosintolerant. Ersättningsprodukterna måste vara baserade på tex havre, cocos, mandel etc. Laktosfria produkter fungerar inte då de innehåller mjölkprotein.",
      "Marinette & Niclas",
      "Karl Perssons väg 7",
      "Kerstin och Tommy.",
      "Snöbärsvägen 2",
      "",
      "",
      "Ja"
    ],
    [
      "Madde och Jonas ",
      "Ramnsjövägen 5",
      "070-3037814",
      "+46 76-172 03 63",
      "Förrätt",
      "1 äter inte fisk , En vegetarian",
      "Oskar och Lotta",
      "Västanvägen 3",
      "Henrik och Mia ",
      "Länsmansvägen 14 ",
      "Ingela o Niclas",
      "Gundrastorpsvägen 13a",
      "Ja"
    ],
    [
      "Marie-Louise och Pontus",
      "Ring vägen 4",
      "0702809899",
      "0733642021",
      "Förrätt",
      "",
      "Eva Glans Anders Olsson ",
      "Länsmansvägen 4",
      "Veronica och Mikael",
      "Ramnsjövägen 34",
      "",
      "",
      "Ja"
    ],
    [
      "Morgan och Jeannette",
      "Oretorpsvägen 20",
      "0738409713",
      "+46 73-400 22 42",
      "Förrätt",
      "",
      "Tommy o Helena",
      "Snapphanevägen 15",
      "Susanne och Reine",
      "Oretorpsvägen 20",
      "",
      "",
      "Ja"
    ],
    [
      "Mia & Olle Svensson",
      "Falkgatan 2",
      "0708543674",
      "0705881970",
      "Förrätt",
      "en ej fisk, skaldjur ok, En är laktosintolerant",
      "Annelie o Ronny ",
      "Snöbärsvägen 10",
      "Anders å Ingrid W",
      "Ringvägen 6",
      "",
      "",
      "Ja"
    ],
    [
      "Villa Blåsol",
      "Ramnsjövägen 42",
      "0703724343",
      "",
      "Förrätt",
      "",
      "Marcus och Linda ",
      "Bokebacken 4 ",
      "Mia och Kenny",
      "Molins Backe 4 ",
      "",
      "",
      "Ja"
    ],
    [
      "Karin & Lasse",
      "Björkvägen 1",
      "0730477742",
      "0708998809",
      "Förrätt",
      "",
      "Catta och Mange ",
      "Duvgatan 3",
      "Gunilla o Gösta olsson",
      "Hobbystigen 3",
      "",
      "",
      "Ja"
    ],
    [
      "Jonas o Pernilla",
      "strandgatan 7",
      "0703662647",
      "0734322545",
      "Huvudrätt",
      "",
      "Johan och Jette",
      "Oxelvägen 2",
      "Mattias o Anna",
      "Hålvägen 2",
      "",
      "",
      "Ja"
    ],
    [
      "Erik och Lotti ",
      "Västanvägen 55",
      "0760170822",
      "0723056567",
      "Huvudrätt",
      "",
      "Peter och Katrin ",
      "Doppvägen 3 ",
      "Gunilla o Gösta olsson",
      "Hobbystigen 3",
      "",
      "",
      "Ja"
    ],
    [
      "Jörgen och Linda",
      "Doppvägen 5",
      "0709922558",
      "0734456367",
      "Huvudrätt",
      "",
      "Nilla & Sebastian ",
      "Tallvägen 3",
      "Jenny o Peter ",
      "Ubbaltsvägen 10",
      "",
      "",
      "Ja"
    ],
    [
      "CinaåBosse ",
      "Sjöbackavägen 7",
      "0702157304",
      "0735071052",
      "Huvudrätt",
      "",
      "Lisa o Kent Svensson ",
      "Beatabacken 16",
      "Anders och Lina",
      "Länsmansvägen 11",
      "Ingela o Niclas",
      "Gundrastorpsvägen 13a",
      "Ja"
    ],
    [
      "Martin o Nilla Andersen",
      "Ubbaltsvägen 9",
      "0729991189",
      "0736900890",
      "Huvudrätt",
      "En äter inte fisk eller skaldjur.",
      "Tompa och Molle",
      "Falkgatan 18",
      "Maria o Oskar",
      "Länsmansvägen 10",
      "",
      "",
      "Ja"
    ],
    [
      "Mattias och Ann-Sofie",
      "Oxelvägen 5",
      "0708 52 78 67",
      "0706 21 18 55",
      "Huvudrätt",
      "",
      "Tobbe & Susann",
      "Ringvägen 12",
      "Lars-Göran o Elisabeth ",
      "Snöbärsvägen 3",
      "",
      "",
      "Ja"
    ],
    [
      "Linda och Glenn ",
      "Uddvägen 3",
      "0701494975",
      "0701494971",
      "Huvudrätt",
      "",
      "Sonny & Camilla Lilja",
      "Markarydsvägen 19",
      "Hilde och Tobbe",
      "Granvägen 15",
      "",
      "",
      "Ja"
    ],
    [
      "Erika och Ola ",
      "Beatabacken 18",
      "0709288385",
      "0708627262",
      "Huvudrätt",
      "",
      "Martin och Zita",
      "Ringvägen 16",
      "Thomas & Monia",
      "Ubbaltsvägen 21, Sjögläntan ",
      "",
      "",
      "Ja"
    ],
    [
      "Kim o Mikael",
      "Västanvägen 63",
      "0708941777",
      "0608311335",
      "Huvudrätt",
      "Jordnöt",
      "Ola o Emelie",
      "Badvägen 8",
      "Ann-Sofie & Joakim Blank",
      "Pilvägen 8",
      "",
      "",
      "Ja"
    ],
    [
      "Sara och Henrik",
      "Gundrastorpsvägen 2B",
      "0709529039",
      "0706929039",
      "Huvudrätt",
      "",
      "Kajsa och Henrik",
      "Kopparslagaregatan 8",
      "Heléne o Anders Jacobsson ",
      "Duvgatan 3",
      "",
      "",
      "Ja"
    ],
    [
      "Dina och Christian ",
      "Strandgatan 3",
      "0708181396",
      "0733501000",
      "Huvudrätt",
      "En äter inte kött.",
      "Stina o Jimmy",
      "Västanvägen 1",
      "Ann-Christine & Rolf",
      "Benvedsvägen 8",
      "",
      "",
      "Ja"
    ],
    [
      "Ida och Gustav",
      "Badvägen 8",
      "0761997557",
      "0706639692",
      "Huvudrätt",
      "",
      "Carina o Michael",
      "Snapphanevägen 15",
      "Björn och Helen",
      "Västanvägen 23",
      "",
      "",
      "Ja"
    ],
    [
      "Charlotte och Magnus",
      "Karl perssonsväg 21",
      "0730810805",
      "0734203003",
      "Huvudrätt",
      "",
      "Therése och Kristian",
      "Brantliden 6",
      "Christine & Kristian",
      "Snapphanevägen 12",
      "",
      "",
      "Ja"
    ],
    [
      "Christel o Per Ternemo",
      "Hobbystigen 3",
      "0734149152",
      "0708909489",
      "Huvudrätt",
      "",
      "Martina och Berne ",
      "Ubbaltsvägen 21, Sjögläntan ",
      "Katarina & Paul ",
      "Snapphanevägen 15",
      "",
      "",
      "Ja"
    ],
    [
      "Thord och Charlotta ",
      "Duvgatan 8",
      "0704444886",
      "0705820591",
      "Huvudrätt",
      "",
      "Veronica och Björn ",
      "Granvägen 7",
      "Annika och Lasse",
      "Markarydsvägen 15",
      "",
      "",
      "Ja"
    ],
    [
      "Marinette & Niclas",
      "Karl Perssons väg 7",
      "0708767264",
      "0733752806",
      "Huvudrätt",
      "En person är glutenintolerant och tål inte mjölkprotein. Det är inte samma som laktosintolerant. Ersättningsprodukterna måste vara baserade på tex havre, cocos, mandel etc. Laktosfria produkter fungerar inte då de innehåller mjölkprotein.",
      "Tessan och Janne",
      "Ubbaltsvägen 2",
      "Henrik och Mia ",
      "Länsmansvägen 14 ",
      "",
      "",
      "Ja"
    ],
    [
      "Oskar och Lotta",
      "Västanvägen 3",
      "0730611336",
      "",
      "Huvudrätt",
      "En vegetarian, en ej fisk, skaldjur ok",
      "Kerstin och Tommy.",
      "Snöbärsvägen 2",
      "Mia & Olle Svensson",
      "Falkgatan 2",
      "",
      "",
      "Ja"
    ],
    [
      "Eva Glans Anders Olsson ",
      "Länsmansvägen 4",
      "0768226800",
      "0702580113",
      "Huvudrätt",
      "1 äter inte fisk , En är laktosintolerant",
      "Madde och Jonas ",
      "Ramnsjövägen 5",
      "Anders å Ingrid W",
      "Ringvägen 6",
      "",
      "",
      "Ja"
    ],
    [
      "Tommy o Helena",
      "Snapphanevägen 15",
      "0734274757",
      "0708682288",
      "Huvudrätt",
      "",
      "Veronica och Mikael",
      "Ramnsjövägen 34",
      "Marie-Louise och Pontus",
      "Ring vägen 4",
      "",
      "",
      "Ja"
    ],
    [
      "Annelie o Ronny ",
      "Snöbärsvägen 10",
      "0708-398751",
      "073-6876813",
      "Huvudrätt",
      "",
      "Morgan och Jeannette",
      "Oretorpsvägen 20",
      "Mia och Kenny",
      "Molins Backe 4 ",
      "",
      "",
      "Ja"
    ],
    [
      "Marcus och Linda ",
      "Bokebacken 4 ",
      "0708742403",
      "0732015174",
      "Huvudrätt",
      "",
      "Karin & Lasse",
      "Björkvägen 1",
      "Susanne och Reine",
      "Oretorpsvägen 20",
      "Carl o Johanna",
      "Snapphanevägen 29",
      "Ja"
    ],
    [
      "Catta och Mange ",
      "Duvgatan 3",
      "0708535987",
      "0709831495",
      "Huvudrätt",
      "",
      "Villa Blåsol",
      "Ramnsjövägen 42",
      "Sara Jönsson  och Martin Lorenz ",
      "Ubbbaltsvägen 8",
      "",
      "",
      "Ja"
    ],
    [
      "Sara Jönsson  och Martin Lorenz ",
      "Ubbbaltsvägen 8",
      "0709999750",
      "0734088484",
      "Efterrätt",
      "",
      "Lisa o Kent Svensson ",
      "Beatabacken 16",
      "Erik och Lotti ",
      "Västanvägen 55",
      "",
      "",
      "Ja"
    ],
    [
      "Anders och Lina",
      "Länsmansvägen 11",
      "0703494702",
      "0706229202",
      "Efterrätt",
      "",
      "Karin & Lasse",
      "Björkvägen 1",
      "Martin o Nilla Andersen",
      "Ubbaltsvägen 9",
      "",
      "",
      "Ja"
    ],
    [
      "Mattias o Anna",
      "Hålvägen 2",
      "0739299116",
      "0736972426",
      "Efterrätt",
      "",
      "Nilla & Sebastian ",
      "Tallvägen 3",
      "Marcus och Linda ",
      "Bokebacken 4 ",
      "",
      "",
      "Ja"
    ],
    [
      "Hilde och Tobbe",
      "Granvägen 15",
      "0705954888",
      "0703405888",
      "Efterrätt",
      "",
      "Jörgen och Linda",
      "Doppvägen 5",
      "Ingela o Niclas",
      "Gundrastorpsvägen 13a",
      "",
      "",
      "Ja"
    ],
    [
      "Thomas & Monia",
      "Ubbaltsvägen 21, Sjögläntan ",
      "0733115529",
      "0733113901",
      "Efterrätt",
      "",
      "Sonny & Camilla Lilja",
      "Markarydsvägen 19",
      "Sara och Henrik",
      "Gundrastorpsvägen 2B",
      "",
      "",
      "Ja"
    ],
    [
      "Tompa och Molle",
      "Falkgatan 18",
      "0733-469501",
      "0702-720220",
      "Efterrätt",
      "En äter inte fisk eller skaldjur.",
      "Tobbe & Susann",
      "Ringvägen 12",
      "Linda och Glenn ",
      "Uddvägen 3",
      "Carl o Johanna",
      "Snapphanevägen 29",
      "Ja"
    ],
    [
      "Lars-Göran o Elisabeth ",
      "Snöbärsvägen 3",
      "0708322307",
      "0708992940",
      "Efterrätt",
      "",
      "Martin och Zita",
      "Ringvägen 16",
      "CinaåBosse ",
      "Sjöbackavägen 7",
      "",
      "",
      "Ja"
    ],
    [
      "Heléne o Anders Jacobsson ",
      "Duvgatan 3",
      "0709647311",
      "0708565792",
      "Efterrätt",
      "Jordnöt, En äter inte kött.",
      "Ola o Emelie",
      "Badvägen 8",
      "Dina och Christian ",
      "Strandgatan 3",
      "",
      "",
      "Ja"
    ],
    [
      "Ann-Christine & Rolf",
      "Benvedsvägen 8",
      "0706611885",
      "0734446269",
      "Efterrätt",
      "",
      "Martina och Berne ",
      "Ubbaltsvägen 21, Sjögläntan ",
      "Erika och Ola ",
      "Beatabacken 18",
      "",
      "",
      "Ja"
    ],
    [
      "Ann-Sofie & Joakim Blank",
      "Pilvägen 8",
      "0706072172",
      "0706839036",
      "Efterrätt",
      "",
      "Stina o Jimmy",
      "Västanvägen 1",
      "Ida och Gustav",
      "Badvägen 8",
      "",
      "",
      "Ja"
    ],
    [
      "Katarina & Paul ",
      "Snapphanevägen 15",
      "0733181049",
      "0702253005",
      "Efterrätt",
      "",
      "Kajsa och Henrik",
      "Kopparslagaregatan 8",
      "Kim o Mikael",
      "Västanvägen 63",
      "",
      "",
      "Ja"
    ],
    [
      "Björn och Helen",
      "Västanvägen 23",
      "0768918812",
      "0708924665",
      "Efterrätt",
      "",
      "Therése och Kristian",
      "Brantliden 6",
      "Thord och Charlotta ",
      "Duvgatan 8",
      "",
      "",
      "Ja"
    ],
    [
      "Christine & Kristian",
      "Snapphanevägen 12",
      "070-1462059",
      "070-5300244",
      "Efterrätt",
      "",
      "Marie-Louise och Pontus",
      "Ring vägen 4",
      "Catta och Mange ",
      "Duvgatan 3",
      "",
      "",
      "Ja"
    ],
    [
      "Annika och Lasse",
      "Markarydsvägen 15",
      "0709997846",
      "0706621044",
      "Efterrätt",
      "",
      "Tessan och Janne",
      "Ubbaltsvägen 2",
      "Charlotte och Magnus",
      "Karl perssonsväg 21",
      "",
      "",
      "Ja"
    ],
    [
      "Kerstin och Tommy.",
      "Snöbärsvägen 2",
      "0733770481",
      "0706577594",
      "Efterrätt",
      "",
      "Morgan och Jeannette",
      "Oretorpsvägen 20",
      "Eva Glans Anders Olsson ",
      "Länsmansvägen 4",
      "",
      "",
      "Ja"
    ],
    [
      "Henrik och Mia ",
      "Länsmansvägen 14 ",
      "0703239962",
      "0702867373",
      "Efterrätt",
      "",
      "Veronica och Björn ",
      "Granvägen 7",
      "Christel o Per Ternemo",
      "Hobbystigen 3",
      "",
      "",
      "Ja"
    ],
    [
      "Veronica och Mikael",
      "Ramnsjövägen 34",
      "0708-384472",
      "0736490930",
      "Efterrätt",
      "1 äter inte fisk ",
      "Madde och Jonas ",
      "Ramnsjövägen 5",
      "Annelie o Ronny ",
      "Snöbärsvägen 10",
      "",
      "",
      "Ja"
    ],
    [
      "Anders å Ingrid W",
      "Ringvägen 6",
      "0706702779",
      "0703034397",
      "Efterrätt",
      "En är laktosintolerant, En person är glutenintolerant och tål inte mjölkprotein. Det är inte samma som laktosintolerant. Ersättningsprodukterna måste vara baserade på tex havre, cocos, mandel etc. Laktosfria produkter fungerar inte då de innehåller mjölkprotein.",
      "Carina o Michael",
      "Snapphanevägen 15",
      "Marinette & Niclas",
      "Karl Perssons väg 7",
      "",
      "",
      "Ja"
    ],
    [
      "Mia och Kenny",
      "Molins Backe 4 ",
      "0708431562",
      "073961021",
      "Efterrätt",
      "en ej fisk, skaldjur ok, En vegetarian",
      "Mia & Olle Svensson",
      "Falkgatan 2",
      "Oskar och Lotta",
      "Västanvägen 3",
      "Jenny o Peter ",
      "Ubbaltsvägen 10",
      "Ja"
    ],
    [
      "Susanne och Reine",
      "Oretorpsvägen 20",
      "0734201118",
      "0702609820",
      "Efterrätt",
      "",
      "Villa Blåsol",
      "Ramnsjövägen 42",
      "Jonas o Pernilla",
      "strandgatan 7",
      "",
      "",
      "Ja"
    ],
    [
      "Gunilla o Gösta olsson",
      "Hobbystigen 3",
      "0734077177",
      "0709438349",
      "Efterrätt",
      "",
      "Peter och Katrin ",
      "Doppvägen 3 ",
      "Tommy o Helena",
      "Snapphanevägen 15",
      "",
      "",
      "Ja"
    ],
    [
      "Maria o Oskar",
      "Länsmansvägen 10",
      "0735149279",
      "0735149279 0707577411",
      "Efterrätt",
      "",
      "Johan och Jette",
      "Oxelvägen 2",
      "Mattias och Ann-Sofie",
      "Oxelvägen 5",
      "",
      "",
      "Ja"
    ],
    [
      "Carl o Johanna",
      "Snapphanevägen 29",
      "701443670",
      "733124077",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "66"
    ],
    [
      "Ingela o Niclas",
      "Gundrastorpsvägen 13a",
      "761194113",
      "730299882"
    ]
  ]
}

function getSheetsClient() {
  const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    // we need to replace the escaped newline characters
    // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
    process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes
  );

  const sheets = google.sheets({ version: "v4", auth: jwt });
  return sheets;
}

async function getData(range) {
  return staticData[range];
}

async function updateCellValue(range, value) {
  const sheets = getSheetsClient();
  const response = await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
    valueInputOption: "USER_ENTERED",
    resource: { range, majorDimension: "ROWS", values: [[value]] },
  });
}

const onlyNumbers = (num) => num.replace(/[\D]+/g, "").replace(/^0/, "");

export async function getHostByPhone(phone) {
  const phoneNumber = onlyNumbers(phone);
  const data = await getData("Måltider");

  const host = data.find((row) =>
    row.find((cell) => onlyNumbers(cell).includes(phoneNumber))
  );

  if (host) {
    const [name] = host;
    return { name };
  }

  return null;
}

function getHostData(data, host) {
  const row = data.find((row) => row[0] === host);
  if (row) {
    const [name, address, phone1, phone2, dish, note, , , , , , , confirmed] =
      row;
    return { name, address, phone1, phone2, dish, note, confirmed };
  }
  return null;
}

export async function getDataForHost(host) {
  const guests = await getData("Gästlista");
  const meals = await getData("Måltider");

  const row = guests.find((row) => row[0] === host);

  if (row) {
    const [, , , host1, , host2, , host3] = row;
    const now = new Date();

    const obj = {
      host1: false,
      host2: false,
      host3: false,
      timestamps,
    };

    if (host1 === host || now > timestamps[0]) {
      obj.host1 = getHostData(meals, host1);
    }

    if (host2 === host || now > timestamps[1]) {
      obj.host2 = getHostData(meals, host2);
    }

    if (host3 === host || now > timestamps[2]) {
      obj.host3 = getHostData(meals, host3);
    }

    obj.guests = guests.filter(
      (row) => row[3] === host || row[5] === host || row[7] === host
    ).length;

    return obj;
  }
  return null;
}

export async function confirmDish(host) {
  const data = await getData("Måltider");

  const row = data.findIndex((row) => row[0] === host);

  if (row > -1) {
    await updateCellValue(`Måltider!M${row + 2}`, "Ja");
  }
}
