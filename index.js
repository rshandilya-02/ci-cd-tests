const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Childhood Nostalgia</title>
    <style>
        body {
            margin: 0;
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #1d2671, #c33764);
            color: #fff;
            text-align: center;
        }
        header {
            padding: 40px 20px;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 10px;
        }
        p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            padding: 40px;
            max-width: 1200px;
            margin: auto;
        }
        .card {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            padding: 25px;
            backdrop-filter: blur(8px);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }
        .emoji {
            font-size: 3rem;
        }
        footer {
            padding: 20px;
            font-size: 0.9rem;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <header>
        <h1>✨ Childhood Cartoon Memories ✨</h1>
        <p>The days when homework waited… and cartoons came first 📺</p>
    </header>

    <section class="container">
        <div class="card">
            <div class="emoji">🟢</div>
            <h2>Ben 10</h2>
            <p>Every kid wanted an Omnitrix and dreamed of becoming a hero.</p>
        </div>

        <div class="card">
            <div class="emoji">😜</div>
            <h2>Shinchan</h2>
            <p>Annoying, fearless, and absolutely legendary.</p>
        </div>

        <div class="card">
            <div class="emoji">🔔</div>
            <h2>Doraemon</h2>
            <p>Gadgets, friendship, and the wish for a better tomorrow.</p>
        </div>

        <div class="card">
            <div class="emoji">⚡</div>
            <h2>Pokémon</h2>
            <p>Gotta catch ’em all — and never miss an episode.</p>
        </div>

        <div class="card">
            <div class="emoji">💪</div>
            <h2>Chhota Bheem</h2>
            <p>Laddoos, strength, and pure desi hero vibes.</p>
        </div>
    </section>

    <footer>
        <p>Built with ❤️ • Deployed via CI/CD on EC2 🚀</p>
        <p>Some memories never get old.</p>
    </footer>
</body>
</html>
    `);
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
