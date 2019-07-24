import Nav from "../components/Nav";
import React from "react";

const data = [
    { value: 'Po przybyciu na teren łowiska należy zgłosić się do gospodarza łowiska lub obsługi łowiska w celu opłacenia wejścia wg. cennika opłat za wstęp na łowisko.' },
    { value: 'W okresie od marca do listopada łowisko czynne jest całą dobę, także w weekendy, święta oraz inne dni wolne.</li>' },
    { value: 'Doba na łowisku liczona jest od 6:00 do 6:00 dnia następnego. Wędkowanie tzw. "dzienne" na stanowisku od 6:00 do 18:00, a "nocne" od 18:00 do 6:00 dnia następnego.' },
    { value: 'Łowisko dostępne jest dla zrzeszonych, jak i nie zrzeszonych w PZW.' },
    { value: 'Miejsce do wędkowania można zająć jedynie po uprzedniej konsultacji z osobą obsługującą.' },
    { value: 'Opłata za wędkowanie zapewnia 1 stanowisko wędkarskie na 1 osobę łowiącą.' },
    { value: 'Połów wyłącznie metodami konwencjonalnymi, tzn. na wędki, przy czym ilość wędzisk jest ograniczona do 2 szt. na jednego wędkującego.' },
    { value: 'Na łowisku dozwolone są następujące metody łowienia:', 
      nestedValue: [
          { value: 'spławikowa' },
          { value: 'gruntowa' },
          { value: 'spiningowa' },
          { value: 'muchowa' }
      ]
    },
    { value: 'Dzieci i młodzież do lat 16 mogą przebywać na terenie łowiska wyłącznie pod opieką osób pełnoletnich, którzy w pełni ponoszą za nich odpowiedzialność.' },
    { value: 'Złowione okazy amura i karpia o wadze większej niż 3kg bezwzględnie wypuszczamy do wody. Obowiązuje zakaz przetrzymywania takich ryb w siatkach.' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
];

export default () => {
    console.log(data);
    return (
        <main className="main">
            <Nav></Nav>
            <div className="regulations"></div>
                   
        <h1>Regulamin Łowiska Kołatka</h1>
        <div className="container">
            <ol>
                {
                    data.forEach(element => {
                        return <li>{ element }</li>;
                    })
                }
            </ol>
        </div>

11. Złowione ryby, których nie zamierzamy zabrać ze sobą lub niewymiarowe, natychmiast wypuszczamy do wody. 
12. Prosimy nie wpuszczać do wody ryb, które ucierpiały wskutek holu i mogą nie przeżyć.
13. Na każdym stanowisku wymagane jest posiadanie: maty karpiowej, podbieraka karpiowego. Mile widziane jest posiadanie i stosowanie preparatu dezynfekującego do odkażania ran po ukłuciach haczyka oraz wszelkich ran na ciele ryby.
14. Zakaz przetrzymywania ryb w workach karpiowych. Ryba trzymana do zdjęcia powinna znajdować się nad matą i być polewana co jakiś czas wodą. Amury i karpie po zważeniu i zrobieniu fotografii natychmiast wypuszczamy do wody.
15. Na łowisku istnieje możliwość zakupu złowionej i wymiarowej ryby do 3kg. Dolny wymiar ochronny ryb obowiązuje według kodeksu PZW.
16. Organizacja ognisk tylko w wyznaczonych miejscach. Bezwzględny zakaz pozyskiwania drewna z pobliskiego lasu na organizację ogniska.
17. Na terenie łowiska obowiązują zakazy: kąpieli, wjeżdżania samochodami na groble, niszczenia przyrody (łamanie gałęzi na podpórki na wędki itp.), wypuszczania psów luzem.
18. Obowiązuje kategoryczny zakaz pływania sprzętem pływającym pod wpływem alkoholu. 
19. Właściciel łowiska nie ponosi odpowiedzialności za wypadki losowe, zaparkowane samochody oraz pozostawiony sprzęt wędkarski.
20. W przypadku próby kradzieży i kradzieży ryby z łowiska właściciel ma prawo do przeprowadzenia kontroli. Osobie, która dopuści się kradzieży naliczona zostanie kara w wysokości 100zł za każdy kilogram ryby. Osoba dopuszczająca się kradzieży zobowiązana jest  do natychmiastowego opuszczenia łowiska. Równocześnie osobę taką obowiązuje w przyszłości całkowity zakaz wstępu na łowisko. 
21. Prosimy o zachowanie ciszy i spokoju na terenie łowiska. Po zakończeniu wędkowania osoby korzystające z łowiska zobowiązane są do zostawienia porządku po sobie. Zabrania się wrzucania do wody odpadków i niedpałków papierosów.
22. Gospodarz łowiska zastrzega sobie możliwość organizowania zamkniętych imprez wędkarskich. Za ewentualne trudności przepraszamy.
23. Wstęp na łowisku jest równoznaczny z akceptacją obowiązującego regulaminu oraz cennika.
24. Gospodarz łowiska lub inne osoby obsługujące mają prawo do wyproszenia z terenu łowiska w przypadku głośnego zachowania się, śmiecenia, dewastacji, kradzieży.
25. Właściciel zastrzega sobie prawo do zmiany regulaminu łowiska.




        </main>
    )
}