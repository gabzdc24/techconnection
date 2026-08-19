document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const scores = {
        innovator: 0,
        data: 0,
        creator: 0,
        community: 0,
        future: 0,
        systems: 0,
        builder: 0,
        experience: 0
    };

    const formData = new FormData(this);

    // Count selected answers
    for (let answer of formData.values()) {
        if (scores.hasOwnProperty(answer)) {
            scores[answer]++;
        }
    }

    const totalPoints = Object.values(scores).reduce(
        (sum, score) => sum + score,
        0
    );

    const percentages = {};

    for (const personality in scores) {
        percentages[personality] = Math.round(
            (scores[personality] / totalPoints) * 100
        );
    }

    const sorted = Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);

    const primary = sorted[0][0];
    const secondary = sorted[1][0];

    const results = {
        innovator: {
            title: "🚀 The Innovator",
            text: "You see opportunities where others see problems. You're always looking for the next big thing.",
            csMatch: "Entrepreneurship, software startups, AI innovation, product development, and hackathons.",
            majorMatch: "Commerce, Economics, Computer Science, Engineering, Agricultural Economics."
        },

        data: {
            title: "📊 The Data Detective",
            text: "You trust evidence and love uncovering hidden patterns.",
            csMatch: "Data science, machine learning, analytics, visualization, and artificial intelligence.",
            majorMatch: "Statistics, Mathematics, Economics, Finance, Computer Science, Health Studies, Agriculture."
        },

        creator: {
            title: "🎨 The Digital Creator",
            text: "Technology is your canvas for telling stories and creating experiences.",
            csMatch: "Web design, UI/UX, front-end development, content creation, and game design.",
            majorMatch: "Art & Art History, Media Studies, Marketing, English, Music, and other creative programs."
        },

        community: {
            title: "🤝 The Community Builder",
            text: "Great technology starts with understanding people.",
            csMatch: "Tech leadership, community outreach, accessibility, project coordination, and user research.",
            majorMatch: "Education, Psychology, Sociology, Political Studies, Social Work, Indigenous Studies."
        },

        future: {
            title: "🔬 The Future Shaper",
            text: "You use knowledge and innovation to improve lives.",
            csMatch: "Health technology, AI in medicine, bioinformatics, research computing, and scientific innovation.",
            majorMatch: "Biology, Biomedical Sciences, Kinesiology, Physics, Chemistry, Nursing, Pharmacy."
        },

        systems: {
            title: "🌎 The Systems Thinker",
            text: "You understand how small decisions affect larger systems.",
            csMatch: "Smart cities, sustainability technology, automation, GIS, and systems modelling.",
            majorMatch: "Environmental Science, Geography, Agriculture, Public Policy, Engineering."
        },

        builder: {
            title: "⚙️ The Builder",
            text: "You don't just imagine solutions. You build them.",
            csMatch: "Software development, robotics, hardware design, engineering projects, and coding.",
            majorMatch: "Engineering, Computer Science, Agriculture, Engineering Physics."
        },

        experience: {
            title: "🎮 The Experience Designer",
            text: "You think about how people experience technology.",
            csMatch: "Game development, UX design, app design, interactive media, and digital experiences.",
            majorMatch: "Psychology, Marketing, Computer Science, Arts, Media Studies, and many interdisciplinary programs."
        }
    };

    // Main Result
    document.getElementById("resultTitle").textContent =
        results[primary].title;

    document.getElementById("resultText").textContent =
        results[primary].text;

    // Secondary Personality
    document.getElementById("secondaryResult").innerHTML =
        `<strong>Secondary Personality:</strong> ${results[secondary].title}`;

    // Computer Science Match
    document.getElementById("csMatch").innerHTML =
        `<strong>Computer Science Match:</strong> ${results[primary].csMatch}`;

    // Major Match
    document.getElementById("majorMatch").innerHTML =
        `<strong>Possible USask Majors:</strong> ${results[primary].majorMatch}`;

    // Percentage Breakdown
    let breakdownHTML = `
        <h3>Your Personality Breakdown</h3>
    `;

    Object.entries(percentages)
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, percent]) => {

            breakdownHTML += `
                <div style="margin-bottom:10px;">
                    <strong>${results[key].title}</strong> - ${percent}%
                </div>
            `;
        });

    document.getElementById("percentages").innerHTML =
        breakdownHTML;

    // Show Results
    document.getElementById("result")
        .classList.remove("hidden");

    // Smooth Scroll
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});
