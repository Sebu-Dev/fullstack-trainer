warum sollte man eine naming convention machen?
 * res-stage-
welceh arten von redundanzen gibt es bezüglich der skalierbarkeit
* verschieden regions 
* verschiednen zonen
* mehrere instanzen high avibality 

was ist die aufgabe von einen loadbalancer
* lasten verteilen
-welche strategien gibt es?
* dynamischer algorythmus wenn cpu auslastung über auslastung x geht 
* route robin statisch

welceh skalierungsarten gibt es
* vertikal horizontal

was ist vertikal und horizontalp
* horizontal mehrere server
* hardware aufrüsten

vor und nachteile der skalierungen
* horizontaler können probleme bei statefull auftreten
* horizontal stateless
* vertikal begrenzt

Manages services was ist das?
* 

was vortiel nachteil manages service
* nachteil verlust der kontrolle
* vorteil man muss sich nciht um alles kümmern 
* man kann sich aufs dev konzentrieren

welceh srevice modelle kenne ich
* pattform as a service
* software as a service
* infrastruktur as a service

*werlcher servies is eine vm?
* infrastruktur as a servbice

- warum ist das ein infrastruktur?
* weil das betriebssystem da ist

My sql ist welcher service?
* plattform as a service
- 

was ist software as a serbice?
* software ist bereits vorhanden

auzre apop services was ost das?
* plattform as a service

beispiel fpr azure as a serbice?
* 

infrastruktur
- ich muss alles außer betriebssystem entwickeln
plattform
- ich muss entwickeln
app service
- ich muss nciht mehr entwicklen

serverless was beduetet das
* ich mus smich nicht um server kümmern
 - manche sehen auch  amazon lambda oder azure funciton als serverless

 best practse in der cloud der services ?
 * services nciht vom internet erreichbar falls sie nicht notwendig sind (max endpunkte)
 * absciehrn welceh ip adressen zugreifen könen
 * umgebungsvaribalen nutzen
 * verschlüsselte kommunikationen zwischen der services

was sind storage accounts
* verscheidenen dienste man kann datein wie bilder speichern
* key valeu store um die bilder zu mappen
* container der binärdaten ablegt

was kann man mit entra id machen?
* benutzre verwalten
* rollen gruppen anlegen
* usermanagement
* app könne registriert werden
* authentifizierung 


Micro services 

was sind die vor von monoliten

was sind nachteile monoliten

was sind vor teile eines microservices

was sind nachteile microservice