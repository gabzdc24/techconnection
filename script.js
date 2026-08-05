document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const scores = {
        data: 0,
        design: 0,
        health: 0,
        ai: 0
    };

    const formData = new FormData(this);

    for (let answer of formData.values()) {
        scores[answer]++;
    }

    let result = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    const results = {
        data: {
            title: "📊 Data Analytics",
            text: "You enjoy uncovering patterns and making sense of information. Careers involving data, business intelligence, and analytics may be a great fit."
        },
        design: {
            title: "🎨 Web Design & UX",
            text: "You focus on creativity and user experience. Building websites, apps, and digital products may align well with your interests."
        },
        health: {
            title: "🏥 Health Tech",
            text: "You're interested in improving people's lives through technology. Health informatics and digital healthcare could be exciting paths."
        },
        ai: {
            title: "🤖 AI & Automation",
            text: "You enjoy innovation and solving complex problems. Artificial intelligence, machine learning, and automation may be your space."
        }
    };

    document.getElementById("resultTitle").textContent =
        results[result].title;

    document.getElementById("resultText").textContent =
        results[result].text;

    document.getElementById("result").classList.remove("hidden");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});
