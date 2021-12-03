# PROBA_IT_LSAC_2021
A fost un challange dificil care m-a invatat tehnologii noi, dar mi-a si aratat ce se afla de fapt sub orice site web.
Backend-ul mi-a atras cel mai tare atentia prin tehnologiile folosite(JS, NODEjs, SQL, Express), iar de asta am ales sa-l realizez.
Datorita unor probleme mai mult sau mai putin personale, am avut sansa sa testez sintagma "oricum in ultimele zile se face totul pentru event-uri"   :)))
Chiar daca nu am terminat toata proba, cred ca am realizat foarte multe intr-un timp destul de scurt (mai exact aproximativ 2-3 zile) neavand nici o tangenta 
cu tehnologiile utilizate pana in acel moment.

Baza de date o creaza sequelize din script, astfel nu trebuie instalate alte dependinte

Am reusit sa implementez:
  -contact_request-ul (+plus trimiterea de mail-uri),
  -crearea automata a bazei de date pentru acesta si pentru "Users" folosind sequelize,
  -handling de erori la input
  -scheletul tuturor rutelor (toate ENDPOINT-URILE)
  
Dificultati pe care le-am intalnit
  -input handling, cand primeam o eroare de tip :"mail-ul nu are format corect" programul imi dadea crash si trebuia restartat
    -Am reusit sa-l rezolv printr-un catch al erori in timp ce foloseam "try" pentru crea un post nou
