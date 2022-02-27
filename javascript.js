

//typo

function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
    tempTypeSpeed = 0;

    var type = function() {
    
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  };
  
  // ——————————————————————————————————————————————————
  // Text
  // ——————————————————————————————————————————————————
  
  const phrases = [
  "La Tua idea",
  "La Tua idea",
  
  
  ]
  
  const el = document.querySelector('.afterDigitale')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 7000)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next();

  // ——————————————————————————————————————————————————
  // Text 2
  // ——————————————————————————————————————————————————
  
  const phrases1 = [
    "La Nostra Azienda",
    "La Nostra Azienda",
    
    
    ]
    
    const el1 = document.querySelector('.chiSiamoTitle')
    const fx1 = new TextScramble(el1)
    
    let counter1 = 0
    const next1 = () => {
      fx1.setText(phrases1[counter1]).then(() => {
        setTimeout(next1, 7000)
      })
      counter1 = (counter1 + 1) % phrases1.length
    }
    
    next1();

    

  // ——————————————————————————————————————————————————
  // Text 3
  // ——————————————————————————————————————————————————
  
  const phrases2 = [
    "I Nostri Clienti",
    "I Nostri Clienti",
    
    
    ]
    
    const el2 = document.querySelector('.Progetti')
    const fx2 = new TextScramble(el2)
    
    let counter2 = 0
    const next2 = () => {
      fx2.setText(phrases2[counter2]).then(() => {
        setTimeout(next2, 7000)
      })
      counter2 = (counter2 + 1) % phrases2.length
    }
    
    next2();

  // ——————————————————————————————————————————————————
  // Text 4
  // ——————————————————————————————————————————————————
  
  const phrases3 = [
    "Il Nostro Background",
    "Il Nostro Background",
    
    
    ]
    
    const el3 = document.querySelector('.clientiTitle')
    const fx3 = new TextScramble(el3)
    
    let counter3 = 0
    const next3 = () => {
      fx3.setText(phrases3[counter3]).then(() => {
        setTimeout(next3, 7000)
      })
      counter3 = (counter3 + 1) % phrases3.length
    }
    
    next3();
    
  // ——————————————————————————————————————————————————
  // Text 4
  // ——————————————————————————————————————————————————
  
  const phrases4 = [
    "Contattaci!",
    "Contattaci!",
    
    
    ]
    
    const el4 = document.querySelector('.contattaciTitle')
    const fx4 = new TextScramble(el4)
    
    let counter4 = 0
    const next4 = () => {
      fx4.setText(phrases4[counter4]).then(() => {
        setTimeout(next4, 7000)
      })
      counter4 = (counter4 + 1) % phrases4.length
    }
    
    next4();


  
    

