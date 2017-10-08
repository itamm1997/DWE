var mymap = L.map('mapid').setView([-22.8577, -47.2203], 13);

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',maxZoom: 18, id: 'mapbox.streets',
		    		accessToken: 'pk.eyJ1IjoiaXRhbG9tYW5oYWJvc2NvIiwiYSI6ImNqODBmcG5kMTRwZW4ycW8zd3hkYndoMDYifQ.H00b-wJsUfAAJXtvG6CmRA'

			}).addTo(mymap);

				L.marker([-22.858, -47.2203]).addTo(mymap)
				    .bindPopup('Hortolândia-SP-BRASIL');
			    //.openPopup();

				L.marker([-22.9031340, -47.1776510]).addTo(mymap)
			    .bindPopup('UNIDADE DE SAUDE DA FAMILIA JD SANTIAGO - JD BRASIL - telefone (19)3965.1532 - HORTOLÂNDIA - SP');
			    //.openPopup();
			    L.marker([-22.9051500, -47.2112330]).addTo(mymap)
			    .bindPopup('UNIDADE DE SAUDE DA FAMILIA JD SAO BENTO - JD SAO BENTO - telefone (19)3809.2539 - HORTOLÂNDIA - SP');
			    //.openPopup();

			    L.marker([-22.8979460, -47.1752610]).addTo(mymap)
			    .bindPopup('UNIDADE DE SAUDE DA FAMILIA JD ADELAIDE - JD ROSOLEM - telefone (19) 3845.1009 - HORTOLÂNDIA - SP');
			    //.openPopup();

			    L.marker([-22.8812680, -47.1714500]).addTo(mymap)
			    .bindPopup('UBS NOVO ANGULO RAYANE BRENDA DE OLIVEIRA - JARDIM NOVO ANGULO - telefone (19)3809.2545 - HORTOLÂNDIA - SP');
			    //.openPopup();

			    L.marker([-22.8418210, -47.2224080]).addTo(mymap)
			    .bindPopup('UNIDADE DE SAUDE ORESTES ONGARO - PQ ORESTES ONGARO - telefone (19) 3909.9882 - HORTOLÂNDIA - SP');
			    //.openPopup();

			    L.marker([-22.8525570, -47.2113290]).addTo(mymap)
			    .bindPopup('UBS DOM BRUNO GAMBERINI - JD NOVA HORTOLANDIA -  telefone (19)3819.1971 - HORTOLÂNDIA - SP');
			    //.openPopup();

			    L.marker([-22.8783100, -47.2558640]).addTo(mymap)
			    .bindPopup('UNIDADE DE SAUDE DA FAMILIA TAQUARA BRANCA - TAQUARA BRANCA -  telefone (19)3897.6082 - HORTOLÂNDIA - SP');
			    //.openPopup();

			    L.marker([-22.8493710, -47.2027300]).addTo(mymap)
			    .bindPopup('UNIDADE DE SAUDE DA FAMILIA PARQUE DO HORTO - JD N SRA AUXILIADORA - telefone (19)3897.2200 - HORTOLÂNDIA - SP');
			    //.openPopup();

			    L.marker([-22.8823400, -47.2065940]).addTo(mymap)
			    .bindPopup('UBS SANTA CLARA ANA MARIA LOPES FRAGOSO - JD MIRANTE DE SUMARE - telefone (19)3887.4701 - HORTOLÂNDIA - SP');
			    //.openPopup();

			    L.marker([-22.8939010, -47.2322910]).addTo(mymap)
			    .bindPopup('UNIDADE DE SAUDE DA FAMILIA JD AMANDA - JD AMANDA - telefone (19)3897.3388 - HORTOLÂNDIA - SP');
			    //.openPopup();