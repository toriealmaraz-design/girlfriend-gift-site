# Questions for Gwiyomi — Birthday Gift Website

> "Cutie." This is the page where I ask you the things I've been sitting on.

## What this page is
A private, interactive letter of questions. The boyfriend (the client) asks the girlfriend (Gwiyomi) a set of questions — playful, deep, romantic, and fun — and each one has a **click-to-reveal answer** that the boyfriend has prepared. The answer unfolds like a letter being opened.

## How it works
1. She sees a question in large serif type.
2. She clicks / taps it — the answer folds out below with a gentle animation.
3. The answer is private and personal; it holds what the boyfriend has been meaning to say.

## Questions (default copy — the boyfriend's voice)
These are written in the boyfriend's voice. The client should personalise the answers with real memories and details.

The questions below are wrapped in a reveal pattern so each answer shows on click.

Each question is a `<details class="q-card">` — native, keyboard-accessible, no JS framework.

### Copy
Q1. "Have you ever thought that I'm the only person who actually looks at you like you're something?"
A1. "I think about that every single day. That's the only compliment I need."

Q2. "What's something about me you're still surprised by?"
A2. "How kind you are when you're tired. That's the one I never stop respecting."

Q3. "If I had to describe you in three words, what would they be?"
A3. "Inconsistent, unpredictable, and impossible not to love."

Q4. "What's a memory from us that you still replay in your head?"
A4. "The day I finally worked up the courage to tell you. I'm still a little scared it worked out."

Q5. "What do you want me to know about how you feel when I'm not around?"
A5. "I miss you more than I say. But I'm always coming back."

Q6. "What's something I do that makes you feel safe?"
A6. "The way I listen. Even when I don't say anything at all."

Q7. "If we were a song, what would we be?"
A7. "Something slow that I'm never ready to end."

Q8. "What's your favourite thing about our ordinary days?"
A8. "The ones where nothing dramatic happens and I just get to be with you."

## Sign-off
"I hope you know how much you are loved, how deeply, and for as long as I'm here to say it."

Yours,
[Your Name]

## Design
- `details`/`summary` native, no JS framework.
- Each Q card is a block with a rose left accent.
- The reveal animation: the answer panel slides down and fades in (already styled in `styles.css` as `.q-card[open] .q-answer`).
- No dates anywhere. The timeline is emotional, not literal.
