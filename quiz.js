var remaining_time = 300; // 5 minutos

var minutes_text = document.getElementById("timer-minutes");
var seconds_text = document.getElementById("timer-seconds");

var timer = setInterval(() => {
    remaining_time--;

    const minutes = Math.floor(remaining_time / 60);
    const seconds = remaining_time - minutes * 60;

    minutes_text.textContent = minutes.toString();
    seconds_text.textContent = seconds.toString();

    if(remaining_time === 0)
    {
        clearInterval(timer);
        alert("¡Te quedaste sin tiempo!");
        evaluateAnswers();
    }
}, 1000);

var preguntas = [
  {
    pregunta: "¿Quién es considerado el 'Padre del Hip-Hop'?",
    respuestas: [
      { respuesta: "Grandmaster Flash", correcta: false },
      { respuesta: "DJ Kool Herc", correcta: true },
      { respuesta: "Afrika Bambaataa", correcta: false },
      { respuesta: "Run-DMC", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué álbum de Nas está considerado uno de los mejores de la historia del hip-hop?",
    respuestas: [
      { respuesta: "It Was Written", correcta: false },
      { respuesta: "Stillmatic", correcta: false },
      { respuesta: "Illmatic", correcta: true },
      { respuesta: "God's Son", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué grupo lanzó el álbum 'The Chronic' en 1992?",
    respuestas: [
      { respuesta: "Snoop Dogg", correcta: false },
      { respuesta: "N.W.A", correcta: false },
      { respuesta: "Dr. Dre", correcta: true },
      { respuesta: "2Pac", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapero es conocido como 'The Notorious B.I.G.'?",
    respuestas: [
      { respuesta: "Sean Combs", correcta: false },
      { respuesta: "Tupac Shakur", correcta: false },
      { respuesta: "Andre Young", correcta: false },
      { respuesta: "Christopher Wallace", correcta: true }
    ]
  },
  {
    pregunta: "¿De qué ciudad es originario el grupo Wu-Tang Clan?",
    respuestas: [
      { respuesta: "Compton", correcta: false },
      { respuesta: "Staten Island, NYC", correcta: true },
      { respuesta: "Atlanta", correcta: false },
      { respuesta: "Chicago", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapero tiene el récord de más palabras en una canción con 'Rap God'?",
    respuestas: [
      { respuesta: "Twista", correcta: false },
      { respuesta: "Busta Rhymes", correcta: false },
      { respuesta: "Eminem", correcta: true },
      { respuesta: "Tech N9ne", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapero fundó el sello Roc-A-Fella Records?",
    respuestas: [
      { respuesta: "Kanye West", correcta: false },
      { respuesta: "Damon Dash", correcta: false },
      { respuesta: "Nas", correcta: false },
      { respuesta: "Jay-Z", correcta: true }
    ]
  },
  {
    pregunta: "¿Qué álbum de Kendrick Lamar ganó el Premio Pulitzer en 2018?",
    respuestas: [
      { respuesta: "good kid, m.A.A.d city", correcta: false },
      { respuesta: "To Pimp a Butterfly", correcta: false },
      { respuesta: "DAMN.", correcta: true },
      { respuesta: "Section.80", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué grupo de hip-hop estaba formado por Q-Tip, Phife Dawg y Ali Shaheed Muhammad?",
    respuestas: [
      { respuesta: "De La Soul", correcta: false },
      { respuesta: "The Roots", correcta: false },
      { respuesta: "A Tribe Called Quest", correcta: true },
      { respuesta: "Jurassic 5", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapero es conocido como 'Slim Shady'?",
    respuestas: [
      { respuesta: "50 Cent", correcta: false },
      { respuesta: "Machine Gun Kelly", correcta: false },
      { respuesta: "Logic", correcta: false },
      { respuesta: "Eminem", correcta: true }
    ]
  },
  {
    pregunta: "¿Qué canción de hip-hop fue la primera en llegar al número 1 en el Billboard Hot 100?",
    respuestas: [
      { respuesta: "'The Message' de Grandmaster Flash", correcta: false },
      { respuesta: "'Rapper's Delight' de Sugarhill Gang", correcta: true },
      { respuesta: "'Fight the Power' de Public Enemy", correcta: false },
      { respuesta: "'Walk This Way' de Run-DMC", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapero lanzó el álbum 'Graduation' en 2007?",
    respuestas: [
      { respuesta: "Lupe Fiasco", correcta: false },
      { respuesta: "Kanye West", correcta: true },
      { respuesta: "Kid Cudi", correcta: false },
      { respuesta: "Pharrell Williams", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapero es el líder del grupo N.W.A?",
    respuestas: [
      { respuesta: "Dr. Dre", correcta: false },
      { respuesta: "Ice Cube", correcta: false },
      { respuesta: "Eazy-E", correcta: true },
      { respuesta: "MC Ren", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapera fue la primera en ganar un Grammy como Mejor Artista Nuevo?",
    respuestas: [
      { respuesta: "Missy Elliott", correcta: false },
      { respuesta: "Lauryn Hill", correcta: true },
      { respuesta: "Nicki Minaj", correcta: false },
      { respuesta: "Queen Latifah", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué grupo de hip-hop está asociado con el 'Dirty South' sound?",
    respuestas: [
      { respuesta: "Migos", correcta: false },
      { respuesta: "Three 6 Mafia", correcta: false },
      { respuesta: "UGK", correcta: false },
      { respuesta: "OutKast", correcta: true }
    ]
  },
  {
    pregunta: "¿Qué rapero es conocido como 'Diddy'?",
    respuestas: [
      { respuesta: "Jay-Z", correcta: false },
      { respuesta: "Russell Simmons", correcta: false },
      { respuesta: "Sean Combs", correcta: true },
      { respuesta: "Andre Harrell", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapero lanzó el álbum 'Tha Carter III'?",
    respuestas: [
      { respuesta: "Birdman", correcta: false },
      { respuesta: "Drake", correcta: false },
      { respuesta: "T.I.", correcta: false },
      { respuesta: "Lil Wayne", correcta: true }
    ]
  },
  {
    pregunta: "¿Qué rapero es conocido por su alter ego 'MF DOOM'?",
    respuestas: [
      { respuesta: "Mos Def", correcta: false },
      { respuesta: "Daniel Dumile", correcta: true },
      { respuesta: "Talib Kweli", correcta: false },
      { respuesta: "Earl Sweatshirt", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapero es el fundador del sello Death Row Records?",
    respuestas: [
      { respuesta: "Dr. Dre", correcta: false },
      { respuesta: "Suge Knight", correcta: true },
      { respuesta: "2Pac", correcta: false },
      { respuesta: "Snoop Dogg", correcta: false }
    ]
  },
  {
    pregunta: "¿Qué rapero canadiense alcanzó fama internacional con 'Take Care' en 2011?",
    respuestas: [
      { respuesta: "The Weeknd", correcta: false },
      { respuesta: "Drake", correcta: true },
      { respuesta: "Tory Lanez", correcta: false },
      { respuesta: "Nav", correcta: false }
    ]
  }
];

// https://stackoverflow.com/a/46545530
function shuffleQuestions()
{
    preguntas = preguntas
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

document.addEventListener("DOMContentLoaded", (event) => {
    shuffleQuestions();

    for(let i = 1; i <= 10; ++i)
    {
        document.getElementById("question-" + i + "-text").textContent = `Pregunta ${i} - ${preguntas[i].pregunta}`;
        for(let j = 1; j <= 4; ++j)
        {
            document.getElementById(`question-${i}${j}`).firstChild.data = `${String.fromCharCode('A'.charCodeAt() + (j - 1))}. - ${preguntas[i].respuestas[j - 1].respuesta}`
        }
    }

    var inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; ++i)
    {
        inputs[i].addEventListener("change", (event) => {
            const match = event.target.id.match(/question-(\d{1,2})-(\d{1})-cb/);
            const questionNumber = match[1];
            const questionOption = match[2];

            for(let j = 1; j <= 4; ++j)
            {
                if(j != questionOption)
                {
                    const cb = document.getElementById(`question-${questionNumber}-${j}-cb`);
                    if(cb.checked)
                        cb.checked = false;
                }
            }
        });
    }
});

function evaluateAnswers()
{
    clearInterval(timer);
    document.getElementById("evaluate-button").disabled = true;

    var right_answers = 0;

    for(let i = 1; i <= 10; ++i)
    {
        for(let j = 1; j <= 4; ++j)
        {
            if(document.getElementById(`question-${i}-${j}-cb`).checked)
            {
                if(preguntas[i].respuestas[j - 1].correcta)
                {
                    right_answers++;
                    document.getElementById(`question-${i}${j}`).firstChild.data = `${String.fromCharCode('A'.charCodeAt() + (j - 1))}. - ${preguntas[i].respuestas[j - 1].respuesta} ✅`;
                }
                else
                {
                    document.getElementById(`question-${i}${j}`).firstChild.data = `${String.fromCharCode('A'.charCodeAt() + (j - 1))}. - ${preguntas[i].respuestas[j - 1].respuesta} ❌`;
                }
            }
        }
    }

    alert(`Tienes ${right_answers}/${10} respuestas correctas. (${(100 * right_answers) / 10}% de aciertos).\n\nVuelve a la página principal para volver a tomar el quiz.`);
    
    var userdata = localStorage.getItem("history");
    if(userdata == null)
    {
        userdata = {};
    }
    else
    {
        userdata = JSON.parse(userdata);
    }

    const username = localStorage.getItem("current_user");
    if(!userdata[username] || userdata[username].top <= right_answers)
    {
        userdata[username] = { top: right_answers, date: new Date().toISOString().substring(0, 10) }
    }

    localStorage.setItem("history", JSON.stringify(userdata));
}